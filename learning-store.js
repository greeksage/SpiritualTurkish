/* Browser adapter. A future account adapter can implement the same get/set/
 * subscribe/export/import interface; curriculum records never contain user data. */
(() => {
  'use strict';
  const keys=['spiritual_turkish_language','spiritual_turkish_learning_v2','spiritual_turkish_prayers','spiritual_turkish_notebook','spiritual_turkish_progress','spiritual_turkish_device_v3'];
  const plain=x=>!!x&&typeof x==='object'&&!Array.isArray(x);
  const validResume=r=>plain(r)&&window.ALL_LESSONS?.some(l=>l.id===r.id)&&['read','understand','practise','use'].includes(r.section);
  const validBibleId=id=>typeof id==='string'&&/^study-[a-z0-9]+-\d+-\d+(?:-\d+)*$/.test(id);
  const validBibleResume=r=>plain(r)&&validBibleId(r.id)&&['read','understand','practise','use'].includes(r.section);
  const validActivityResume=r=>plain(r)&&Object.keys(r).every(k=>['words','practice','returnTo'].includes(k))&&(r.words===undefined||['words','words/saved','words/review'].includes(r.words))&&(r.practice===undefined||r.practice==='practice'||/^lesson\/ch[1-6]-\d+\/(read|understand|practise|use)$/.test(r.practice))&&(r.returnTo===undefined||['lessons','bible'].includes(r.returnTo));
  const validBibleStudy=b=>plain(b)&&plain(b.entries)&&(b.last==null||validBibleResume(b.last))&&Object.entries(b.entries).every(([id,p])=>validBibleId(id)&&plain(p)&&['visited','practised','studied'].every(k=>p[k]===undefined||typeof p[k]==='boolean')&&(p.notes===undefined||typeof p.notes==='string')&&(p.section===undefined||['read','understand','practise','use'].includes(p.section))&&(p.answers===undefined||plain(p.answers)&&Object.values(p.answers).every(a=>plain(a)&&typeof a.selected==='string'&&(a.checked===undefined||typeof a.checked==='boolean')&&(a.correct===undefined||typeof a.correct==='boolean'))));
  const safe=x=>JSON.parse(JSON.stringify(x),(k,v)=>['__proto__','constructor','prototype'].includes(k)?undefined:v);
  class LearningStore {
    constructor(storage){this.storage=storage;this.memory=new Map();this.listeners=new Set();this.available=true;}
    getRaw(key){if(this.memory.has(key))return this.memory.get(key);try{return this.storage.getItem(key);}catch{this.available=false;return null;}}
    get(key,fallback=null){try{const value=JSON.parse(this.getRaw(key));return value??fallback;}catch{return fallback;}}
    set(key,value){const raw=JSON.stringify(value);this.memory.set(key,raw);try{this.storage.setItem(key,raw);}catch{this.available=false;}for(const fn of this.listeners)fn(key);return this.available;}
    subscribe(fn){this.listeners.add(fn);return()=>this.listeners.delete(fn);}
    export(){return{format:'spiritual-turkish-device-backup',version:1,exportedAt:new Date().toISOString(),values:Object.fromEntries(keys.map(k=>[k,this.getRaw(k)]))};}
    import(backup){
      if(backup?.format!=='spiritual-turkish-device-backup'||backup.version!==1||!plain(backup.values))throw new Error('format');
      const incoming={};
      for(const key of keys){const raw=backup.values[key];if(raw===null||raw===undefined)continue;if(typeof raw!=='string')throw new Error('value');let value;try{value=safe(JSON.parse(raw));}catch{throw new Error('json');}
        if(key.endsWith('language')&&!['en','ko'].includes(value))throw new Error('language');
        if(key.endsWith('learning_v2')){
          if(!plain(value)||value.version!==2||!plain(value.lessons))throw new Error('progress');
          for(const p of Object.values(value.lessons)){
            if(!plain(p)||p.response!==undefined&&typeof p.response!=='string'||p.answers!==undefined&&(!plain(p.answers)||Object.values(p.answers).some(a=>!plain(a)||typeof a.correct!=='boolean'))||p.drafts!==undefined&&(!plain(p.drafts)||Object.values(p.drafts).some(d=>typeof d!=='string'))||p.rubric!==undefined&&(!Array.isArray(p.rubric)||p.rubric.some(n=>![0,1,2].includes(n))))throw new Error('lesson');
          }
        }
        if(/prayers|notebook/.test(key)&&(!Array.isArray(value)||value.some(v=>!plain(v))))throw new Error('list');
        if(key.endsWith('prayers')&&value.some(p=>typeof p.id!=='string'||typeof p.title!=='string'||typeof p.content!=='string'))throw new Error('prayer');
        if(key.endsWith('device_v3')&&(!plain(value)||value.version!==3||!plain(value.words)||!plain(value.notes)||Object.values(value.notes).some(n=>typeof n!=='string')||Object.values(value.words).some(w=>!plain(w)||!Number.isFinite(w.due)||!Number.isFinite(w.savedAt)||!Number.isInteger(w.step)||w.step<0||w.step>4||w.context!==undefined&&(!plain(w.context)||typeof w.context.tr!=='string'))))throw new Error('device');
        if(key.endsWith('device_v3')){
          if(value.activityResume!==undefined&&!validActivityResume(value.activityResume))throw new Error('activity-resume');
          if(value.bibleStudy!==undefined&&!validBibleStudy(value.bibleStudy))throw new Error('bible-study');
          if(value.studyLast!=null&&!validResume(value.studyLast))throw new Error('study-resume');
          if(value.courseResume!==undefined&&(!plain(value.courseResume)||Object.entries(value.courseResume).some(([id,r])=>!validResume(r)||window.ALL_LESSONS.find(l=>l.id===r.id).track!==id)))throw new Error('course-resume');
        }
        incoming[key]=value;
      }
      // Validate every value before mutating anything. Merge into existing data,
      // preserving local records on collision. Imported click-era progress is
      // never upgraded to completed evidence.
      for(const [key,value]of Object.entries(incoming)){
        const old=this.get(key);
        if(key.endsWith('learning_v2')){
          const ls={...value.lessons,...(old?.lessons||{})};
          for(const [id,p]of Object.entries(ls)){if(!plain(p)){delete ls[id];continue;}if(!old?.lessons?.[id]){const lesson=window.ALL_LESSONS?.find(l=>l.id===id);p.completed=!!lesson&&!!p.completed&&!!p.response?.trim()&&p.independent===true&&Array.isArray(p.rubric)&&p.rubric.length===5&&p.rubric.every(n=>n===2)&&plain(p.answers)&&lesson.exercises.every(e=>p.answers[e.id]?.correct===true&&(e.choices?e.valid.includes(p.answers[e.id].choice):typeof p.drafts?.[e.id]==='string'&&!!p.drafts[e.id].trim()));}}
          this.set(key,{version:2,lessons:ls});
        }else if(/prayers|notebook/.test(key)){
          const existing=Array.isArray(old)?old:[],identity=x=>x?.id||JSON.stringify(x);
          const seen=new Set(existing.map(identity));this.set(key,[...existing,...value.filter(x=>{const id=identity(x);if(seen.has(id))return false;seen.add(id);return true;})]);
        }else if(key.endsWith('device_v3'))this.set(key,{...value,...(plain(old)?old:{}),version:3,activityResume:{...(value.activityResume||{}),...(old?.activityResume||{})},studyLast:validResume(old?.studyLast)?old.studyLast:validResume(value.studyLast)?value.studyLast:null,courseResume:{...(value.courseResume||{}),...(old?.courseResume||{})},bibleStudy:{last:old?.bibleStudy?.last||value.bibleStudy?.last||null,entries:{...(value.bibleStudy?.entries||{}),...(old?.bibleStudy?.entries||{})}},words:{...value.words,...(old?.words||{})},notes:{...value.notes,...(old?.notes||{})}});
        else if(old===null)this.set(key,value);
      }
    }
  }
  let storage;try{storage=localStorage;}catch{storage={getItem(){throw new Error('unavailable');},setItem(){throw new Error('unavailable');}};}
  const store=new LearningStore(storage);window.LearningStore=LearningStore;window.learningStore=store;
  const loaded=store.get('spiritual_turkish_device_v3');
  const device=loaded?.version===3&&plain(loaded.words)&&plain(loaded.notes)?loaded:{version:3,words:{},notes:{},last:null};
  if(!validActivityResume(device.activityResume))device.activityResume={};
  if(!validBibleStudy(device.bibleStudy))device.bibleStudy={last:null,entries:{}};
  if(!validResume(device.studyLast))device.studyLast=validResume(device.last)?{...device.last}:null;
  if(!plain(device.courseResume))device.courseResume={};
  for(const [id,r] of Object.entries(device.courseResume))if(!validResume(r)||window.ALL_LESSONS.find(l=>l.id===r.id).track!==id)delete device.courseResume[id];
  if(device.studyLast&&!device.courseResume[window.ALL_LESSONS.find(l=>l.id===device.studyLast.id).track])device.courseResume[window.ALL_LESSONS.find(l=>l.id===device.studyLast.id).track]={...device.studyLast};
  const save=()=>store.set('spiritual_turkish_device_v3',device);
  // Old notebook entries remain intact under their original key. Import a copy
  // once, including unrecognised personal notes, without inventing analyses.
  if(!device.notebookMigrated){const notebook=store.get('spiritual_turkish_notebook',[]);if(Array.isArray(notebook))notebook.forEach((n,i)=>{const match=SEMINAR.words.find(w=>w.tr===n.word);const id=match?.id||`imported-notebook-${i}`;if(!device.words[id])device.words[id]={savedAt:Date.now(),due:Date.now(),step:0,legacy:n};});device.notebookMigrated=true;save();}
  window.deviceLearning={state:device,save,
    saveWord(id,context){if(!device.words[id]){device.words[id]={savedAt:Date.now(),due:Date.now(),step:0,...(context?{context}: {})};save();}},
    review(id,remembered,now=Date.now()){const item=device.words[id];if(!item)return;const intervals=[1,3,7,14,30];const step=Math.max(0,Math.min(4,Number(item.step)||0));item.due=now+86400000*(remembered?intervals[step]:1);item.step=remembered?Math.min(4,step+1):0;item.lastReviewed=now;item.lastRecall=remembered?'remembered':'again';save();},
    due(now=Date.now()){return Object.entries(device.words).filter(([,w])=>Number(w.due)<=now).sort((a,b)=>a[1].due-b[1].due).map(([id])=>id);}
  };
})();
