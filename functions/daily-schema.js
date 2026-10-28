'use strict';
const crypto = require('node:crypto');
const COUNTRIES = Object.freeze({
  KR:['대한민국','KR'], VN:['베트남','VN'], US:['미국','EN'], IE:['아일랜드','EN'],
  'GB-ENG':['잉글랜드','EN'], 'GB-WLS':['웨일스','EN'], 'GB-SCT':['스코틀랜드','EN'],
  PH:['필리핀','EN'], TW:['대만','ZH'], AU:['호주','EN'], NZ:['뉴질랜드','EN'],
  JP:['일본','JP'], IT:['이탈리아','IT'], PT:['포르투갈','PT'], MX:['멕시코','ES'],
  DE:['독일','DE'], BR:['브라질','PT'], VA:['바티칸','LA']
});
const COLLECTION = 'daily_mass';
const JOBS = 'daily_mass_jobs';
const RUNS = 'daily_mass_runs';
const PARSER_REVISION = 'v31-20261028-6';
function isoDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value || ''))) throw Error('invalid-date');
  const date = new Date(value+'T12:00:00Z');
  if (!Number.isFinite(date.getTime()) || date.toISOString().slice(0,10) !== value) throw Error('invalid-date');
  return value;
}
function countryCode(value) {
  const code = value === 'GB-NIR' ? 'IE' : String(value || '').toUpperCase();
  if (!COUNTRIES[code]) throw Error('unsupported-country');
  return code;
}
function dayId(country,date) { return COUNTRIES[countryCode(country)][0]+'_'+isoDate(date); }
function sourceId(country,source,profile) {
  if (countryCode(country) !== 'VN') return 'official';
  if (source === 'hanoi') return 'hanoi';
  if (source !== 'ktcg') throw Error('invalid-source');
  return profile === 'VIETNAM_NORTH' ? 'ktcg_north':'ktcg_south';
}
function recordId(source,variant='day') {
  if (!/^[a-z][a-z0-9_-]{0,70}$/.test(source) || !/^[a-z][a-z0-9_-]{0,70}$/.test(variant)) throw Error('invalid-record');
  return source+'__'+variant;
}
function canonical(value) {
  if (Array.isArray(value)) return value.map(canonical);
  if (value && typeof value === 'object') return Object.fromEntries(Object.keys(value).sort().filter(key=>value[key] !== undefined).map(key=>[key,canonical(value[key])]));
  return value;
}
function digest(value) { return crypto.createHash('sha256').update(JSON.stringify(canonical(value))).digest('hex'); }
function cleanParsed(value) {
  const parsed = JSON.parse(JSON.stringify(value));
  if (!parsed || typeof parsed.title !== 'string' || !parsed.data || Array.isArray(parsed.data) || typeof parsed.data !== 'object') throw Error('invalid-parsed-content');
  if (Buffer.byteLength(JSON.stringify(parsed)) > 700000) throw Error('daily-record-too-large');
  return parsed;
}
function datesFrom(start,count=30) {
  isoDate(start);
  if (!Number.isInteger(count) || count<1 || count>30) throw Error('invalid-day-count');
  return Array.from({length:count},(_,offset)=>{const date=new Date(start+'T12:00:00Z');date.setUTCDate(date.getUTCDate()+offset);return date.toISOString().slice(0,10);});
}
function koreaToday(now=new Date()) {return new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Seoul',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);}
function providers(country) { return countryCode(country)==='VN' ? [{source:'hanoi',profile:''},{source:'ktcg',profile:'VIETNAM_SOUTH'},{source:'ktcg',profile:'VIETNAM_NORTH'}] : [{source:'official',profile:''}]; }
module.exports={COUNTRIES,COLLECTION,JOBS,RUNS,PARSER_REVISION,isoDate,countryCode,dayId,sourceId,recordId,digest,cleanParsed,datesFrom,koreaToday,providers};
