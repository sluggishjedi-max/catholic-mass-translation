// Source-only formatter: evaluated strings and AST semantics must remain identical.
// Uses the Babel parser already bundled with the project's Playwright dependency.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const {babelParse, babelTransform} = require('../node_modules/playwright/lib/transform/babelBundle.js');
const root = path.resolve(__dirname, '..');
const ignored = new Set(['start','end','loc','extra','leadingComments','innerComments','trailingComments','comments','tokens']);
function canonical(value) {
  if (!value || typeof value !== 'object') return value;
  if (Array.isArray(value)) return value.map(canonical);
  if (value.type === 'BinaryExpression' && value.operator === '+') {
    const left = canonical(value.left), right = canonical(value.right);
    if (left.type === 'StringLiteral' && right.type === 'StringLiteral')
      return {type:'StringLiteral',value:left.value + right.value};
  }
  return Object.fromEntries(Object.keys(value).filter(key => !ignored.has(key)).sort().map(key => [key,canonical(value[key])]));
}
const hash = value => crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
const segmenter = new Intl.Segmenter('und', {granularity:'sentence'});
function splitText(value) {
  // Keep original line breaks/HTML breaks inside the string; only the source
  // representation changes. Whitespace between sentences is preserved exactly.
  return value.split(/(?<=\n|<br>|<br\/>|<br \/>)/i)
    .flatMap(piece => [...segmenter.segment(piece)].map(entry => entry.segment))
    .filter(Boolean);
}
function format(source, filename) {
  let code = babelTransform(source, filename, true, [], []).code
    .replace(/\n\/\/# sourceMappingURL=data:[^\n]+/g,'');
  const ast = babelParse(code,filename,true), edits = [];
  function visit(node,parent,key) {
    if (!node || typeof node !== 'object') return;
    const literalNode = node.type === 'BinaryExpression' && node.operator === '+' ? canonical(node) : node;
    if (literalNode.type === 'StringLiteral' && !(key === 'key' && parent && !parent.computed)) {
      const chunks = splitText(literalNode.value);
      if (chunks.length > 1 && chunks.join('') === literalNode.value) {
        const startOfLine = code.lastIndexOf('\n',node.start-1)+1;
        const indent = code.slice(startOfLine,node.start).match(/^\s*/)[0];
        const expression = parts => {
          if (parts.length > 32) {
            const mid=Math.floor(parts.length/2);
            return '('+expression(parts.slice(0,mid))+'\n'+indent+' + '+expression(parts.slice(mid))+')';
          }
          return '(\n'+parts.map((part,i) => indent+'  '+(i ? '+ ' : '')+JSON.stringify(part)).join('\n')+'\n'+indent+')';
        };
        edits.push({start:node.start,end:node.end,text:expression(chunks)});
      }
      return;
    }
    for (const [childKey,child] of Object.entries(node)) {
      if (ignored.has(childKey)) continue;
      if (Array.isArray(child)) child.forEach(item => visit(item,node,childKey));
      else if (child && typeof child === 'object') visit(child,node,childKey);
    }
  }
  visit(ast);
  for (const edit of edits.sort((a,b)=>b.start-a.start)) code=code.slice(0,edit.start)+edit.text+code.slice(edit.end);
  code=code.trimEnd()+'\n';
  const before=hash(canonical(babelParse(source,filename,true)));
  const after=hash(canonical(babelParse(code,filename,true)));
  assert.equal(after,before,'Semantic AST changed: '+filename);
  return {code,stringsSplit:edits.length,semanticHash:before};
}
function files() {
  const base=path.join(root,'JS file/countries');
  return fs.readdirSync(base,{withFileTypes:true}).filter(item=>item.isDirectory())
    .flatMap(dir=>fs.readdirSync(path.join(base,dir.name))
      .filter(name=>/_(?:mass|prayers|hymns)\.js$/.test(name))
      .map(name=>path.join(base,dir.name,name)))
    .concat(['JS file/local_missal_prayer_data.js','JS file/countries/taiwan/taiwan_daily_mass_data.js'].map(name=>path.join(root,name)));
}
if (require.main === module) {
  const write=process.argv.includes('--write'), report=[];
  for (const filename of files()) {
    const original=fs.readFileSync(filename,'utf8'), result=format(original,filename);
    if (write && result.code!==original) fs.writeFileSync(filename,result.code);
    report.push({file:path.relative(root,filename).replaceAll('\\','/'),stringsSplit:result.stringsSplit,semanticHash:result.semanticHash});
    console.log(path.relative(root,filename)+': '+result.stringsSplit+' multi-sentence strings; AST preserved');
  }
  console.log(JSON.stringify({mode:write?'written':'dry-run',files:report.length,stringsSplit:report.reduce((n,x)=>n+x.stringsSplit,0)}));
}
module.exports={format,canonical,splitText};
