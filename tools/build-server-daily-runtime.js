// Package the same source parsers used by V31; no independently maintained parser fork.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'), destination=path.join(root,'functions/daily-runtime');
const html=fs.readFileSync(path.join(root,'V31.html'),'utf8');
const core=[...html.matchAll(/<script[^>]*src="([^"]+)"/g)].map(m=>decodeURIComponent(m[1].split('?')[0])).filter(file=>file.startsWith('JS file/')&&!/startup_notice|firebase|admin_date|lazy_data_loader|lazy_data_manifest/.test(file));
const files=[...new Set([...core,...fs.readdirSync(path.join(root,'JS file/lazy')).filter(f=>f.endsWith('.js')).map(f=>'JS file/lazy/'+f),'JS file/countries/taiwan/taiwan_daily_mass_data.js','JS file/all-souls-config.js'])];
const manifest={core,hashes:{}};
for(const file of files){const data=fs.readFileSync(path.join(root,file));const target=path.join(destination,file);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,data);manifest.hashes[file]=crypto.createHash('sha256').update(data).digest('hex');}
fs.writeFileSync(path.join(destination,'index.html'),html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,''));
fs.writeFileSync(path.join(destination,'manifest.json'),JSON.stringify(manifest,null,2));
console.log('Packaged '+files.length+' shared V31 parser/data modules for server collection.');
