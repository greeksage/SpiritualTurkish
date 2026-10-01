const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const root=path.join(__dirname,'..'),c={};c.window=c;vm.createContext(c);
for(const file of ['data.js','lessons.js','editorial-data.js','source-curriculum.js','prayer-curriculum.js','context-curriculum.js','reading-curriculum.js','curriculum-index.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),c,{filename:file});
test('all five sources have complete page coverage with resolvable implemented targets',()=>{
 assert.equal(c.SEMINAR.sources.length,5);assert.equal(c.SEMINAR.coverage.length,148);assert.equal(c.SEMINAR.duplicate.sameAs,'종교_용어_표기_규칙.pdf');
 const lessons=new Set(c.ALL_LESSONS.map(l=>l.id)),readings=new Set(c.SEMINAR.passages.map(p=>p.id));
 assert.equal(c.SEMINAR.coverage.filter(p=>p.status==='cover').length,5);
 for(const s of c.SEMINAR.sources){const pages=c.SEMINAR.coverage.filter(p=>p.source===s.id);assert.equal(pages.length,s.pages);assert.deepEqual(Array.from(pages.map(p=>p.page)),Array.from({length:s.pages},(_,i)=>i+1));}
 for(const p of c.SEMINAR.coverage){if(p.page>1)assert(p.targets.length,`${p.source}/${p.page}`);for(const x of p.targets)assert((x.type==='lesson'?lessons:readings).has(x.id),x.id);}
});
test('all source units contain bilingual teaching, contextual language, explained practice and transfer',()=>{
 const ids=new Set();assert.equal(c.ALL_LESSONS.length,77);assert.equal(c.SEMINAR.lessons.length,67);
 for(const l of c.ALL_LESSONS){assert(!ids.has(l.id));ids.add(l.id);for(const field of ['title','objective','prerequisites','explanation','transfer'])for(const lang of ['en','ko'])assert(l[field][lang]?.length>(field==='title'?1:5),`${l.id}/${field}/${lang}`);assert(l.lines.length);assert(l.words.length);assert(l.patterns.length>=2);for(const line of l.lines){assert(line.tr?.trim());assert(line.translation.en?.trim());assert(line.translation.ko?.trim());assert(!/[\p{Script=Hangul}\p{Script=Han}\p{Script=Cyrillic}\p{Script=Ethiopic}\uFFFD]/u.test(line.tr),`${l.id} ${line.tr}`);}for(const e of l.exercises){assert(!ids.has(e.id));ids.add(e.id);assert(e.prompt.en&&e.prompt.ko&&e.answer.en&&e.answer.ko);if(e.choices){assert(e.valid.length);assert(e.valid.every(i=>i>=0&&i<e.choices.length));for(const choice of e.choices)assert(typeof choice==='string'&&choice.trim()||choice.en&&choice.ko,`${l.id}/${e.id}: missing choice`);}}}
});
test('word entries have stable identities, complete teaching and source references',()=>{
 const ids=new Set();for(const w of c.SEMINAR.words){assert(!ids.has(w.id),w.id);ids.add(w.id);assert(w.source);for(const f of ['meaning','literalGloss','role'])assert(w[f].en&&w[f].ko,`${w.id}/${f}`);assert(w.tr&&w.breakdown&&w.example.tr);assert(!/[\p{Script=Hangul}\p{Script=Han}\uFFFD]/u.test(w.tr),w.tr);}
 assert.equal(c.SEMINAR.words.filter(w=>w.source.id==='foundation'&&w.source.pages[0]===5).length,39);assert.equal(c.SEMINAR.words.filter(w=>w.source.id==='foundation'&&w.source.pages[0]===6).length,27);
});
test('Bible quotation registry counts three new verified verses and keeps other readings external',()=>{
 const quotes=c.SEMINAR.passages.filter(p=>p.kind==='verified-quotation');assert.equal(quotes.reduce((n,p)=>n+p.verseCount,0),3);
 for(const p of quotes){assert(p.url.startsWith('https://kutsalkitap.info.tr/'));assert.equal(p.edition,'Kutsal Kitap (2001, 2008)');assert(p.lines.length&&p.explanation.en&&p.explanation.ko);}
 for(const p of c.SEMINAR.passages.filter(p=>p.kind==='external-reading'))assert.equal(p.lines.length,0);
 assert(!c.SEMINAR.passages.some(p=>p.reference==='Matta 4:29'));assert(c.SEMINAR.passages.some(p=>p.reference==='Matta 15:29'));
 for(const l of c.SEMINAR.lessons.filter(l=>l.track==='prayer'&&l.source.pages.length===1&&l.source.pages[0]>=23&&l.source.pages[0]<=33))assert(c.SEMINAR.passages.some(p=>p.relatedLessons.includes(l.id)),`${l.id}: missing verse/prayer cross-link`);
});
test('device backup validates before mutation and merges without replacing existing personal data',()=>{
 const map=new Map(),storage={getItem:k=>map.get(k)||null,setItem:(k,v)=>map.set(k,v)};
 c.localStorage=storage;vm.runInContext(fs.readFileSync(path.join(root,'learning-store.js'),'utf8'),c);
 const store=new c.LearningStore(storage);store.set('spiritual_turkish_prayers',[{id:'same',title:'Personal prayer',content:'Original'}]);
 store.import({format:'spiritual-turkish-device-backup',version:1,values:{spiritual_turkish_prayers:JSON.stringify([{id:'same',title:'Replacement',content:'Changed'},{id:'new',title:'Imported',content:'New'}])}});
 assert.equal(store.get('spiritual_turkish_prayers')[0].content,'Original');assert.equal(store.get('spiritual_turkish_prayers').length,2);
 const before=JSON.stringify([...map]);assert.throws(()=>store.import({format:'spiritual-turkish-device-backup',version:1,values:{spiritual_turkish_prayers:'[]',spiritual_turkish_learning_v2:JSON.stringify({version:2,lessons:{bad:{response:4}}})}}));assert.equal(JSON.stringify([...map]),before);
 assert.throws(()=>store.import({format:'spiritual-turkish-device-backup',version:1,values:{spiritual_turkish_device_v3:JSON.stringify({version:3,words:{bad:null},notes:{}})}}));assert.equal(JSON.stringify([...map]),before);
 store.import({format:'spiritual-turkish-device-backup',version:1,values:{spiritual_turkish_learning_v2:JSON.stringify({version:2,lessons:{'ministry-01':{visited:true,completed:true}}})}});
 assert.equal(store.get('spiritual_turkish_learning_v2').lessons['ministry-01'].completed,false);
 const fallback=new c.LearningStore({getItem(){throw Error('blocked');},setItem(){throw Error('blocked');}});assert.equal(fallback.set('draft','retained'),false);assert.equal(fallback.get('draft'),'retained');
});
test('recall intervals implement Again and Remembered without implying mastery',()=>{
 const dl=c.deviceLearning;dl.saveWord('test-word');let now=100000;
 for(const days of [1,3,7,14,30,30]){dl.review('test-word',true,now);assert.equal(dl.state.words['test-word'].due,now+days*86400000);now+=10000;}
 dl.review('test-word',false,now);assert.equal(dl.state.words['test-word'].step,0);assert.equal(dl.state.words['test-word'].due,now+86400000);assert.equal(dl.state.words['test-word'].completed,undefined);
});
test('the Korean serif font and license are local, and browser code parses',()=>{
 assert(fs.statSync(path.join(root,'vendor/NotoSerifKR.woff2')).size>100000);assert(fs.readFileSync(path.join(root,'vendor/NotoSerifKR-OFL.txt'),'utf8').includes('SIL OPEN FONT LICENSE'));
 for(const f of fs.readdirSync(root).filter(x=>x.endsWith('.js')))new vm.Script(fs.readFileSync(path.join(root,f),'utf8'),{filename:f});
});
