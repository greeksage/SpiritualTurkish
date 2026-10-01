const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const root=path.join(__dirname,'..');const context={};context.window=context;vm.createContext(context);
for(const file of ['data.js','editorial-data.js','lessons.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
const lessons=context.EXPANDED_LESSONS;
test('ten complete lessons have unique, stable lesson and exercise IDs and parallel teaching',()=>{
 assert.equal(lessons.length,10);let ids=new Set();
 for(const l of lessons){assert(!ids.has(l.id));ids.add(l.id);for(const field of ['title','objective','prerequisites','explanation','transfer'])for(const lang of ['en','ko'])assert(l[field][lang]?.trim().length>2,`${l.id}.${field}.${lang}`);assert(l.lines.length>=5);for(const line of l.lines)for(const lang of ['en','ko'])assert(line.translation[lang]?.length>3);assert.equal(l.exercises.length,3);for(const e of l.exercises){assert(!ids.has(e.id));ids.add(e.id);assert(e.prompt.en&&e.prompt.ko&&e.answer.en&&e.answer.ko);if(e.choices)assert(e.valid.every(n=>n>=0&&n<e.choices.length));}assert(l.words.length>=2);assert(l.patterns.length>=2);}
});
test('Turkish text and prayers have no unexpected-script corruption',()=>{
 const strings=[];for(const l of lessons){strings.push(...l.lines.map(x=>x.tr),...l.words.map(x=>x.tr),...l.patterns);}
 for(const s of context.LEGACY_KO.simulator.scenarios)for(const step of s.steps)strings.push(step.npcSpeech,...step.choices.map(c=>c.text));
 for(const p of context.LEGACY_KO.prayer.situationalLibrary)strings.push(p.tr);
 for(const s of context.LEGACY_KO.prayer.steps)strings.push(...s.options.map(x=>x.tr));
 for(const str of strings)assert(!/[\p{Script=Hangul}\p{Script=Ethiopic}\p{Script=Cyrillic}\p{Script=Han}\uFFFD]/u.test(str),str);
});
test('corrected claims, coherent prayers, and legitimate refusal/uncertainty paths',()=>{
 for(const data of [context.LEGACY_KO,context.LEGACY_EN]){
  const serialized=JSON.stringify(data);assert(!/99\.5|binlerce el yazması papirüs|karşılıks즈|korkusው/.test(serialized));
  for(const step of data.prayer.steps)for(const o of step.options){assert.equal(o.addressee,'Father');assert.equal(o.speaker,'singular');}
  for(const s of data.simulator.scenarios){assert(s.steps.some(step=>step.choices.some(c=>c.id==='respect-refusal')));assert(s.steps.every(step=>step.choices.every(c=>c.score===0)));}
  const historical=data.simulator.scenarios.find(x=>x.id==='scenario-2');assert(historical.steps[1].choices.some(x=>x.id==='uncertainty'&&x.feedbackType==='best'));
 }
 assert.equal(lessons[5].quotationStatus,'simplified-paraphrase');
});
test('English workshop data contains no untranslated Korean teaching (optional sound comparisons allowed)',()=>{
 function scan(x,p=[]){if(typeof x==='string'&&/[가-힣]/.test(x))assert(p[0]==='pronunciation'&&p[1]==='oxQuiz'&&p.at(-1)==='question',p.join('.'));else if(x&&typeof x==='object')for(const [k,v]of Object.entries(x))scan(v,[...p,k]);}scan(context.LEGACY_EN);
});
test('every local page asset exists and JavaScript parses',()=>{
 const html=fs.readFileSync(path.join(root,'index.html'),'utf8');for(const m of html.matchAll(/(?:src|href)="([^"#]+)"/g)){if(/^(https?:|data:)/.test(m[1]))continue;assert(fs.existsSync(path.join(root,m[1])),m[1]);}
 for(const f of fs.readdirSync(root).filter(f=>f.endsWith('.js')))new vm.Script(fs.readFileSync(path.join(root,f),'utf8'),{filename:f});
});
