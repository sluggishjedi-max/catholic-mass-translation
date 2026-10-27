const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname,'../JS file/countries');
// Editors discover their canonical sources independently of eager HTML scripts.
function discoverCountryAuxModules(kind) {
  const order = ['KR','VN','US','JP','VA','IE','GB-EW','GB-SCT','PH','TW','AU','NZ','IT','PT','MX','DE','BR'];
  return fs.readdirSync(root,{withFileTypes:true}).filter(entry=>entry.isDirectory()).flatMap(country=>
    fs.readdirSync(path.join(root,country.name)).filter(file=>file.endsWith('_'+kind+'.js')).map(file=>{
      const full = path.join(root,country.name,file);
      const match = fs.readFileSync(full,'utf8').match(/\bjurisdiction["']?\s*:\s*["']([^"']+)["']/u);
      if (!match) throw Error('Missing jurisdiction in '+full);
      return {jurisdiction:match[1],path:full};
    })
  ).sort((a,b)=>(order.includes(a.jurisdiction)?order.indexOf(a.jurisdiction):order.length)-(order.includes(b.jurisdiction)?order.indexOf(b.jurisdiction):order.length) || a.jurisdiction.localeCompare(b.jurisdiction));
}
module.exports = {discoverCountryAuxModules};
