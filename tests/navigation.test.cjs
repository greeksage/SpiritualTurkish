const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
test('activity destinations migrate, round-trip, merge, and reject unsafe backups atomically',()=>{
 const map=new Map(),c={ALL_LESSONS:[{id:'foundation-references',track:'foundation'}],SEMINAR:{words:[]},localStorage:{getItem:k=>map.get(k)||null,setItem:(k,v)=>map.set(k,v)}};c.window=c;vm.createContext(c);
 map.set('spiritual_turkish_device_v3',JSON.stringify({version:3,words:{},notes:{personal:'Keep this note.'},studyLast:{id:'foundation-references',section:'understand'}}));
 vm.runInContext(fs.readFileSync(path.join(__dirname,'../learning-store.js'),'utf8'),c);
 assert.deepEqual(JSON.parse(JSON.stringify(c.deviceLearning.state.activityResume)),{});
 const store=c.learningStore,key='spiritual_turkish_device_v3';
 c.deviceLearning.state.activityResume={words:'words/saved',practice:'lesson/ch5-2/read',returnTo:'bible'};c.deviceLearning.save();
 const backup=store.export();store.import(backup);assert.equal(store.get(key).activityResume.words,'words/saved');assert.equal(store.get(key).notes.personal,'Keep this note.');assert.equal(store.get(key).studyLast.section,'understand');
 const incoming=JSON.parse(backup.values[key]);incoming.activityResume.words='words/review';store.import({...backup,values:{[key]:JSON.stringify(incoming)}});assert.equal(store.get(key).activityResume.words,'words/saved','local destination wins collisions');
 for(const activityResume of [{words:'https://example.com'},{practice:'lesson/foundation-references/read'},{returnTo:'home'},{unexpected:'route'}]){
  incoming.activityResume=activityResume;const before=JSON.stringify([...map]);assert.throws(()=>store.import({...backup,values:{[key]:JSON.stringify(incoming),spiritual_turkish_prayers:'[]'}}));assert.equal(JSON.stringify([...map]),before);
 }
 const freshMap=new Map(),fresh=new c.LearningStore({getItem:k=>freshMap.get(k)||null,setItem:(k,v)=>freshMap.set(k,v)});fresh.import(backup);assert.equal(fresh.get(key).activityResume.practice,'lesson/ch5-2/read');
 delete incoming.activityResume;fresh.import({...backup,values:{[key]:JSON.stringify(incoming)}});assert.equal(fresh.get(key).activityResume.practice,'lesson/ch5-2/read','old backups preserve existing destinations');
});
