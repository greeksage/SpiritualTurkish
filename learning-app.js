/* Shared task-based shell. All new UI text has explicit English/Korean values. */
document.addEventListener('DOMContentLoaded',()=>{
  'use strict';
  document.body.className='';document.body.removeAttribute('style');
  const t=(en,ko)=>course.t(en,ko), tx=v=>course.text(v);
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const rich=v=>esc(tx(v)).replace(/`([^`]+)`/g,'<span lang="tr">$1</span>').split('\n\n').map(x=>`<p>${x}</p>`).join('');
  const state=deviceLearning.state, store=learningStore;
  audioEngine.isMuted=state.notes['audio-effects']==='off';audioEngine.playbackRate=state.notes['audio-rate']==='0.8'?.8:1;
  const sections=['read','understand','practise','use'];
  const labels={read:['Read','읽기'],understand:['Understand','이해'],practise:['Practise','연습'],use:['Use','사용']};
  const nav=[['home','home','Home','홈'],['learn','auto_stories','Learn','학습'],['words','dictionary','Words','단어'],['bible','menu_book','Bible','성경'],['practice','forum','Practice','연습']];
  let route=[],routing=false,wordReturn=null,reviewReveal=false,wordMode='all',search='',wordPage=0,prayerMode='Father-singular';
  const app=document.createElement('div');app.id='learning-app';app.innerHTML=`<a class="skip-link" href="#study-main">${t('Skip to study content','학습 본문으로 건너뛰기')}</a><aside id="study-sidebar"><a class="brand" href="#/home">Spiritual<br>Turkish<span id="brand-subtitle"></span></a><nav id="study-nav"></nav><div id="device-label"></div></aside><div class="study-body"><header id="study-header"></header><main id="study-main" tabindex="-1"><div id="view"></div><div id="lesson-view" hidden></div><div id="legacy-view" hidden></div></main><footer id="study-footer"></footer></div><nav id="mobile-nav"></nav><dialog id="word-inspector" aria-labelledby="word-title"></dialog><dialog id="outline-dialog" aria-labelledby="outline-title"></dialog>`;
  document.body.append(app);
  app.querySelector('.skip-link').onclick=e=>{e.preventDefault();const main=document.getElementById('study-main');main.focus();main.scrollIntoView({block:'start'});};
  for(let n=1;n<=6;n++)document.getElementById('legacy-view').append(document.getElementById(`section-ch${n}`));
  document.getElementById('lesson-view').append(document.getElementById('section-ch7'));
  const audioStatus=document.getElementById('global-audio-status');document.getElementById('study-footer').append(audioStatus);audioStatus.className='global-status';
  const ambientButton=document.getElementById('ambient-toggle-btn');document.getElementById('ambient-volume-slider').parentElement.before(ambientButton);ambientButton.textContent=t('Play quiet prayer background','조용한 기도 배경음 재생');ambientButton.setAttribute('aria-pressed','false');
  const originalSelect=window.selectLesson;
  const go=path=>{const hash='#/'+path.replace(/^\//,'');if(location.hash===hash)renderRoute();else location.hash=hash;};
  window.selectLesson=id=>go(`lesson/${id}/${course.entry(id).section||'read'}`);
  window.onLegacySelect=id=>{if(!routing&&/^ch/.test(id)&&route[0]==='lesson'){go(`lesson/${id}/read`);}};
  const isKnown=id=>ALL_LESSONS.some(l=>l.id===id)||/^ch[1-6]-\d+$/.test(id)&&!!document.querySelector(`#legacy-host [data-lesson-id="${id}"]`);
  const wordById=id=>{const found=SEMINAR.words.find(w=>w.id===id);return found?{...found,example:state.words[id]?.context||found.example}:(()=>{const old=state.words[id]?.legacy;return old?{id,tr:old.word||'',lemma:old.word||'',meaning:old.meaning||{en:'Imported personal note',ko:'가져온 개인 메모'},breakdown:old.breakdown||'',literalGloss:{en:'Imported note; analysis has not been independently verified.',ko:'가져온 메모이며 분석을 별도 검증하지 않았습니다.'},role:{en:'Personal notebook entry',ko:'개인 노트 항목'},example:{tr:old.word,translation:old.meaning}}:null;})();};
  function header(){
    document.documentElement.lang=course.language;ambientButton.textContent=audioEngine.isAmbientPlaying?t('Stop prayer background','기도 배경음 정지'):t('Play quiet prayer background','조용한 기도 배경음 재생');
    document.getElementById('brand-subtitle').textContent=t('Read. Speak. Remember.','읽고 말하고 기억하기');
    const active=route[0]==='lesson'?(/^ch/.test(route[1])?'practice':'learn'):route[0];
    const links=nav.map(([id,icon,en,ko])=>`<a href="#/${id}" ${id===active?'aria-current="page"':''}><span class="material-symbols-outlined" aria-hidden="true">${icon}</span><span>${t(en,ko)}</span></a>`).join('');
    document.getElementById('study-nav').innerHTML=links;document.getElementById('mobile-nav').innerHTML=links;
    document.getElementById('device-label').innerHTML=`<p>${store.available?t('Saved on this device','이 기기에 저장됨'):t('Session only · storage unavailable','세션만 유지 · 저장소 사용 불가')}</p><a href="#/settings">${t('Backup & settings','백업·설정')}</a>`;
    document.getElementById('study-header').innerHTML=`<a class="mobile-brand" href="#/home">Spiritual Turkish</a><p class="desktop-header-label">${nav.find(x=>x[0]===active)?t(...nav.find(x=>x[0]===active).slice(2)):t('Study settings','학습 설정')}</p><div class="header-controls"><label for="study-language">${t('Teaching language','학습 언어')}</label><select id="study-language"><option value="en">English</option><option value="ko">한국어</option></select><button type="button" id="global-stop" aria-label="${t('Stop synthetic speech','합성 음성 정지')}"><span class="material-symbols-outlined" aria-hidden="true">stop_circle</span></button><a href="#/settings" aria-label="${t('Device backup and settings','기기 백업·설정')}"><span class="material-symbols-outlined" aria-hidden="true">settings</span></a></div>`;
    document.getElementById('global-stop').onclick=()=>{audioEngine.stopSpeaking();audioStatus.textContent=t('Stopped.','정지했습니다.');};
    const select=document.getElementById('study-language');select.value=course.language;select.onchange=()=>{course.setLanguage(select.value);document.getElementById('teaching-language').value=course.language;renderRoute(false);if(document.getElementById('word-inspector').open)openWord(document.getElementById('word-inspector').dataset.word);};
  }
  const linkLesson=(l,extra='')=>`<a class="lesson-row" href="#/lesson/${l.id}/${course.entry(l.id).section||'read'}"><span><strong>${esc(tx(l.title))}</strong>${extra?`<small>${extra}</small>`:''}</span><span class="lesson-state">${course.status(course.entry(l.id))}<span aria-hidden="true"> →</span></span></a>`;
  const title=(kicker,heading,description='')=>`<header class="page-title"><p class="eyebrow">${kicker}</p><h1 id="page-heading" tabindex="-1">${heading}</h1>${description?`<p>${description}</p>`:''}</header>`;
  function home(){
    const last=state.last&&isKnown(state.last.id)?state.last:null;
    const next=ALL_LESSONS.find(l=>!course.entry(l.id).completed)||ALL_LESSONS[0];
    const l=last?ALL_LESSONS.find(x=>x.id===last.id):null;
    const resume=last||{id:next.id,section:'read'};
    const completed=ALL_LESSONS.filter(l=>course.entry(l.id).completed).length,due=deviceLearning.due().length;
    return title(t('Turkish for Christian ministry','기독교 사역을 위한 터키어'),t('Continue your Turkish.','터키어 학습을 이어가세요.'),t('Read with care. Practise a conversation. Keep the words you want to use.','신중히 읽고 대화를 연습하며 사용할 단어를 모으세요.'))+`
      <div class="home-actions"><section class="resume-block"><p class="eyebrow">${last?t('Pick up where you left off','이어서 학습하기'):t('Start with the seminar','세미나로 시작하기')}</p><h2>${esc(l?tx(l.title):last?window.legacyLessonTitle(last.id):tx(next.title))}</h2><p>${t('One section at a time, with Turkish text, explanations and practical use.','터키어 본문·설명·실제 사용을 한 단계씩 공부합니다.')}</p><a class="primary-action" href="#/lesson/${resume.id}/${resume.section||'read'}">${t('Continue learning','학습 계속하기')} <span aria-hidden="true">→</span></a></section>
      <section class="review-block"><span class="material-symbols-outlined" aria-hidden="true">dictionary</span><h2>${t('Bring words back.','단어를 다시 떠올리세요.')}</h2><p>${due?t(`${due} saved words ready to recall.`,`${due}개 저장 단어를 복습할 수 있습니다.`):t('Save a word from a lesson or reading. Its context stays with it.','수업이나 읽기에서 단어를 저장하면 문맥도 함께 남습니다.')}</p><a class="secondary-action" href="#/words/${due?'review':'saved'}">${t('Review words','단어 복습')} →</a></section></div>
      <section class="home-next"><div class="section-heading"><h2>${t('Your next lesson','다음 수업')}</h2><a href="#/learn">${t('See all courses','전체 과정 보기')} →</a></div>${linkLesson(next,esc(tx(next.objective)))}</section>
      <section class="home-paths"><div class="section-heading"><h2>${t('A place to practise','연습 공간')}</h2><span class="muted">${t(`${completed} lessons completed · self-assessed`,`${completed}개 수업 완료 · 자기 평가`)}</span></div><div class="path-links"><a href="#/bible"><span class="path-number">01</span><h3>${t('Read a source passage','자료 본문 읽기')}</h3><p>${t('Scripture, context and carefully explained words.','성경·문맥·신중한 단어 설명.')}</p></a><a href="#/lesson/ministry-01/read"><span class="path-number">02</span><h3>${t('Find the words to ask','질문할 말 찾기')}</h3><p>${t('Clarify a meaning and repair a conversation.','뜻을 확인하고 대화를 회복합니다.')}</p></a><a href="#/practice"><span class="path-number">03</span><h3>${t('Pray and respond','기도하고 응답하기')}</h3><p>${t('Build a prayer or rehearse a respectful reply.','기도를 조립하거나 존중하는 답을 연습합니다.')}</p></a></div></section>`;
  }
  function learn(){
    const groups=[...SEMINAR.sources,{id:'ministry',title:{en:'Practical ministry conversations',ko:'실제 사역 대화'},name:'SpiritualTurkish-Content-Expansion.md'}];
    return title(t('Learn','학습'),t('The study library','학습 자료실'),t('Five source courses and ten practical lessons. Start with a topic you need; each unit assumes basic Turkish.','다섯 출처 과정과 열 실용 수업입니다. 필요한 주제로 시작하세요. 기본 터키어를 전제로 합니다.'))+
      groups.map((s,i)=>`<details class="course-group" ${i===0?'open':''}><summary><span class="course-number">${String(i+1).padStart(2,'0')}</span><span><strong>${esc(tx(s.title))}</strong><small>${esc(s.name)} · ${ALL_LESSONS.filter(l=>l.track===s.id).length} ${t('units','수업')}</small></span></summary><div>${ALL_LESSONS.filter(l=>l.track===s.id).map(l=>linkLesson(l)).join('')}</div></details>`).join('')+
      `<details class="source-index"><summary>${t('Source coverage and editorial notes','출처 적용·편집 기록')}</summary><p>${t('All 148 pages are indexed. Covers and external works are identified; the duplicate spelling file is not counted again. Adaptations are edited teaching material, with independent Turkish/Korean specialist review still pending.','148쪽 전체를 색인했습니다. 표지·외부 저작물을 표시하며 중복 표기 파일을 다시 세지 않습니다. 편집한 학습 자료이며 터키어·한국어 전문가의 독립 검토는 아직 필요합니다.')}</p><div class="table-scroll"><table><thead><tr><th>${t('Source','출처')}</th><th>${t('Page','쪽')}</th><th>${t('Use','적용')}</th></tr></thead><tbody>${SEMINAR.coverage.map(c=>`<tr><td>${esc(SEMINAR.sources.find(s=>s.id===c.source).name)}</td><td>${c.page}</td><td>${c.targets.filter(x=>x.type==='lesson').map(x=>`<a href="#/lesson/${x.id}/read">${esc(tx(ALL_LESSONS.find(l=>l.id===x.id).title))}</a>`).join('<br>')||esc(tx(c.note))}</td></tr>`).join('')}</tbody></table></div><p><a href="EDITORIAL.md">${t('Editorial record','편집 기록')}</a> · <a href="SOURCE-COVERAGE.md">${t('Full coverage index','전체 적용 색인')}</a></p></details>`;
  }
  function wordButtons(words){return words.map(w=>`<button class="word-token" type="button" data-word="${w.id}" lang="tr">${esc(w.tr)}</button>`).join(' ');}
  function annotated(tr,ws=SEMINAR.words){
    const choices=ws.filter(w=>w.tr&&tr.includes(w.tr)).sort((a,b)=>b.tr.length-a.tr.length);
    const byText=new Map(choices.map(w=>[w.tr,w]));if(!byText.size)return esc(tr);
    const regex=new RegExp('(?<![\\p{L}\\p{N}])('+[...byText.keys()].map(s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|')+')(?![\\p{L}\\p{N}])','gu');
    let out='',start=0;for(const m of tr.matchAll(regex)){out+=esc(tr.slice(start,m.index));const w=byText.get(m[0]);out+=`<button class="inline-word" type="button" data-word="${w.id}">${esc(m[0])}</button>`;start=m.index+m[0].length;}return out+esc(tr.slice(start));
  }
  const normal=s=>String(s).normalize('NFKC').toLocaleLowerCase('tr-TR');
  function words(){
    const saved=Object.keys(state.words).map(wordById).filter(Boolean);
    if(route[1]==='review')return review();
    wordMode=route[1]==='saved'?'saved':'all';
    const all=(wordMode==='saved'?saved:SEMINAR.words).filter(w=>!search||normal([w.tr,tx(w.meaning),w.meaning?.en,w.meaning?.ko].join(' ')).includes(normal(search)));
    const per=30,pages=Math.max(1,Math.ceil(all.length/per));wordPage=Math.min(wordPage,pages-1);
    return title(t('Words','단어'),t('Words with their context','문맥과 함께 배우는 단어'),t('Select a word to see its meaning, form and source. Save it for personal recall.','단어를 골라 뜻·형태·출처를 확인하고 개인 복습에 저장하세요.'))+`<div class="word-toolbar"><div class="segmented"><a href="#/words" ${wordMode==='all'?'aria-current="page"':''}>${t('All words','모든 단어')}</a><a href="#/words/saved" ${wordMode==='saved'?'aria-current="page"':''}>${t('Saved','저장됨')} (${saved.length})</a><a href="#/words/review">${t('Review','복습')} (${deviceLearning.due().length})</a></div><label class="search-label" for="word-search">${t('Search Turkish, English or Korean','터키어·영어·한국어 검색')}<input id="word-search" type="search" value="${esc(search)}" placeholder="${t('Try lütuf, grace, 은혜…','lütuf, grace, 은혜…')}" autocomplete="off"></label></div><p class="muted" role="status">${all.length} ${t('matching entries','해당 항목')}</p><div class="word-list">${all.slice(wordPage*per,(wordPage+1)*per).map(w=>`<button type="button" class="word-row" data-word="${w.id}"><span lang="tr">${esc(w.tr)}</span><span>${esc(tx(w.meaning))}</span><small>${state.words[w.id]?t('Saved','저장됨'):t('Inspect','살펴보기')} →</small></button>`).join('')||`<p>${t('No words here yet. Save one from a lesson, or try a different search.','아직 단어가 없습니다. 수업에서 저장하거나 다른 검색을 해보세요.')}</p>`}</div><div class="pagination"><button type="button" data-word-page="-1" ${wordPage===0?'disabled':''}>${t('Previous','이전')}</button><span>${wordPage+1} / ${pages}</span><button type="button" data-word-page="1" ${wordPage===pages-1?'disabled':''}>${t('Next','다음')}</button></div>`;
  }
  function review(){
    const queue=deviceLearning.due().filter(id=>wordById(id)),w=wordById(queue[0]);
    return title(t('Personal recall','개인 기억 복습'),t('Bring a word to mind.','단어를 떠올리세요.'),t('Think of its meaning and a situation where you would use it. This is self-reported recall, not certified mastery.','뜻과 사용할 상황을 떠올리세요. 자기 보고 복습이며 인증된 숙달이 아닙니다.'))+(w?`<section class="recall-card"><p class="eyebrow">${queue.length} ${t('ready to review','복습할 항목')}</p><h2 lang="tr">${esc(w.tr)}</h2>${reviewReveal?`<div class="recall-answer"><p>${esc(tx(w.meaning))}</p><p lang="tr">${esc(w.example?.tr||w.tr)}</p><p>${esc(tx(w.example?.translation||w.meaning))}</p><button type="button" data-word="${w.id}">${t('Inspect the form','형태 살펴보기')}</button></div><div class="recall-controls"><button type="button" data-recall="again" data-id="${w.id}">${t('Again · tomorrow','다시 · 내일')}</button><button type="button" class="primary-action" data-recall="remembered" data-id="${w.id}">${t('Remembered','기억함')}</button></div>`:`<button type="button" id="reveal-word" class="primary-action">${t('Reveal meaning','뜻 보기')}</button>`}</section><p class="muted">${t('Remembered intervals: 1, 3, 7, 14 and 30 days. Again returns the word tomorrow.','기억함 간격: 1·3·7·14·30일. 다시는 내일 복습합니다.')}</p>`:`<section class="empty-state"><h2>${t('You are caught up.','예정된 복습을 마쳤습니다.')}</h2><p>${t('Saved words return when they are due. You can inspect them anytime.','저장 단어는 예정일에 돌아오며 언제든 살펴볼 수 있습니다.')}</p><a href="#/words/saved">${t('See saved words','저장 단어 보기')} →</a></section>`);
  }
  function bible(){
    const p=SEMINAR.passages.find(p=>p.id===route[1]);
    if(!p)return title(t('Bible','성경'),t('Read, notice, discuss.','읽고 살피고 나누세요.'),t('Curated seminar readings. Three verified verses are available inline; longer readings open the named edition.','세미나에서 선별한 읽기입니다. 검증한 세 절은 여기서 읽으며 긴 본문은 표시한 판본에서 엽니다.'))+
      `<div class="reading-list">${[...SEMINAR.passages].sort((a,b)=>Number(b.kind==='verified-quotation')-Number(a.kind==='verified-quotation')).map(p=>`<a href="#/bible/${p.id}"><strong lang="tr">${esc(p.reference)}</strong><span>${p.lines.length?t('Read here','여기서 읽기'):t('Source reading & context','자료 읽기·문맥')} →</span></a>`).join('')}</div>`;
    const ws=p.words||SEMINAR.words.filter(w=>p.sources.some(s=>w.source?.id===s.id&&s.pages.some(n=>w.source.pages.includes(n)))).slice(0,16);
    return `<a class="back-link" href="#/bible">← ${t('All readings','전체 읽기')}</a>`+title(t('Curated source reading','선별한 자료 읽기'),esc(p.reference),esc(p.edition))+`
      <section class="reading-text"><p class="eyebrow">${p.lines.length?t('Verified quotation · teaching translations below','검증한 직접 인용 · 아래는 학습 번역'):t('Reading assignment · external edition','읽기 과제 · 외부 판본')}</p>${p.lines.length?`<p>${t('Synthetic speech. Select an underlined word to inspect it.','합성 음성입니다. 밑줄 단어를 골라 살펴보세요.')}</p><div class="course-controls"><button data-speech="${esc(p.lines.map(l=>l.tr).join(' '))}">${t('Play reading','읽기 듣기')}</button><button data-speech-stop>${t('Stop','정지')}</button><button id="translation-toggle" aria-expanded="true">${t('Hide translations','번역 가리기')}</button></div>${p.lines.map((l,i)=>`<div class="verse-line"><span class="verse-number">${p.id.includes('Yu-13')?34+i:33}</span><p lang="tr">${annotated(l.tr,ws)}</p><p class="teaching-translation">${esc(tx(l.translation))}</p></div>`).join('')}<p class="copyright">Kutsal Kitap © The Bible Society in Turkey & The Translation Trust / Yeni Yaşam Yayınları, 2001, 2008.</p>`:`<p>${t('Read this passage in the named edition, then return for the study task and related lessons. This page does not substitute an invented text for the passage.','표시한 판본에서 본문을 읽은 뒤 학습 과제와 연결 수업으로 돌아오세요. 이 페이지는 본문을 지어낸 글로 대신하지 않습니다.')}</p>`}<a class="secondary-action" href="${p.url}" target="_blank" rel="noopener">${t('Open full passage and context','전체 본문·문맥 열기')} ↗</a></section>
      <section class="reading-notes"><h2>${t('Understand the reading','읽기 이해하기')}</h2>${rich(p.explanation)}<h3>${t('Words to notice','살펴볼 단어')}</h3>${wordButtons(ws)}<h3>${t('Use it independently','독립 사용')}</h3>${rich(p.task)}<label for="reading-note">${t('Your Turkish summary or study notes','자신의 터키어 요약·학습 메모')}</label><textarea id="reading-note" lang="tr">${esc(state.notes[p.id]||'')}</textarea><p class="muted">${t('Private device notes. Label your own summaries separately from Scripture.','개인 기기 메모입니다. 자신의 요약을 성경과 구별해 표시하세요.')}</p></section><section><h2>${t('Related study','연결 학습')}</h2>${p.relatedLessons.map(id=>ALL_LESSONS.find(l=>l.id===id)).filter(Boolean).map(l=>linkLesson(l)).join('')}</section>`;
  }
  function practice(){
    const groups=[[1,'Pronunciation and listening','발음과 듣기'],[2,'Conversation rehearsal','대화 역할극'],[3,'Culture and vocabulary','문화와 어휘'],[4,'Grammar workshop','문법 연습'],[5,'Prayer workshop','기도 연습'],[6,'Spelling and proofreading','표기와 교정']];
    return title(t('Practice','연습'),t('Try the language out.','언어를 사용해 보세요.'),t('Keep practising the existing workshops, alongside the new source lessons. Opening an activity records a visit, not mastery.','새 출처 수업과 함께 기존 연습을 계속하세요. 활동을 열면 방문을 기록하며 숙달을 부여하지 않습니다.'))+groups.map(([n,en,ko])=>`<details class="course-group" ${n===5?'open':''}><summary>${t(en,ko)}</summary>${[...document.querySelectorAll(`#legacy-host [data-lesson-id^="ch${n}-"]`)].map(b=>{const id=b.dataset.lessonId;return `<a class="lesson-row" href="#/lesson/${id}/read"><strong>${esc(window.legacyLessonTitle(id))}</strong><span>${course.status(course.entry(id))} →</span></a>`;}).join('')}</details>`).join('');
  }
  function settings(){return title(t('Your learning data','학습 데이터'),t('Saved on this device','이 기기에 저장됨'),t('No account is required. Back up progress, notes and prayers before changing browsers or devices.','계정이 필요하지 않습니다. 브라우저나 기기를 바꾸기 전에 진행·메모·기도를 백업하세요.'))+`<section class="settings-panel"><h2>${t('Device backup','기기 백업')}</h2><p>${t('Export a JSON backup. Import merges it with this device and preserves existing records when they conflict. It does not upload your data.','JSON 백업을 내보냅니다. 가져오기는 이 기기와 합치며 충돌 시 기존 항목을 유지합니다. 데이터를 업로드하지 않습니다.')}</p><button type="button" id="export-backup" class="primary-action">${t('Export backup','백업 내보내기')}</button><label class="import-label" for="import-backup">${t('Import backup','백업 가져오기')}<input id="import-backup" type="file" accept="application/json,.json"></label><p role="status" id="backup-status"></p><h2>${t('About audio','음성 안내')}</h2><label class="course-choice"><input type="checkbox" id="sound-effects" ${audioEngine.isMuted?'':'checked'}>${t('Play activity sound effects','활동 효과음 재생')}</label><label for="default-rate">${t('Default synthetic speech speed','기본 합성 음성 속도')}</label><select id="default-rate"><option value="1" ${audioEngine.playbackRate===1?'selected':''}>1×</option><option value="0.8" ${audioEngine.playbackRate===.8?'selected':''}>0.8×</option></select><p>${t('Playback uses browser Turkish synthetic speech when a Turkish voice exists. Speech recognition compares recognised text; it does not assess native pronunciation.','터키어 음성이 있는 브라우저의 합성 음성을 사용합니다. 음성 인식은 인식된 문자를 비교하며 원어민 발음을 평가하지 않습니다.')}</p><h2>${t('Accounts later','향후 계정')}</h2><p>${t('This release stores data locally. Future accounts will use a separate private storage adapter with explicit import of your device progress.','이번 버전은 기기에 저장합니다. 향후 계정은 별도의 개인 저장 어댑터와 명시적인 기기 기록 가져오기를 사용합니다.')}</p></section>`;}
  function renderRoute(focus=true){
    for(const id of ['word-inspector','outline-dialog']){const dialog=document.getElementById(id);if(dialog.open)dialog.close();}
    route=location.hash.replace(/^#\/?/,'').split('/').filter(Boolean);if(!route.length)route=['home'];
    const view=document.getElementById('view'),lessonView=document.getElementById('lesson-view'),legacyView=document.getElementById('legacy-view');
    view.hidden=false;lessonView.hidden=true;legacyView.hidden=true;
    if(route[0]==='lesson'&&isKnown(route[1])){
      view.hidden=true;const id=route[1];state.last={id,section:sections.includes(route[2])?route[2]:'read'};deviceLearning.save();
      routing=true;originalSelect(id);routing=false;
      if(ALL_LESSONS.some(l=>l.id===id)){lessonView.hidden=false;setSection(state.last.section,false);}else{legacyView.hidden=false;document.getElementById('legacy-intro')?.remove();const intro=document.createElement('div');intro.id='legacy-intro';intro.innerHTML=`<a class="back-link" href="#/practice">← ${t('Practice library','연습 모음')}</a>`;legacyView.prepend(intro);
        if(id==='ch5-2'){
          document.getElementById('prayer-mode-panel')?.remove();
          const modes=document.createElement('section');modes.id='prayer-mode-panel';modes.className='prayer-mode-panel';
          modes.innerHTML=`<label for="prayer-mode">${t('Prayer addressee and speaker','기도 대상·화자')}</label><select id="prayer-mode">${Object.entries(PRAYER_MODES).map(([id,m])=>`<option value="${id}" ${id===prayerMode?'selected':''}>${esc(tx(m.label))}</option>`).join('')}</select><button id="prayer-mode-load" type="button">${t('Use compatible model','일관된 모델 사용')}</button><p>${t('Choosing a model changes the editor when you select Use. Saved personal prayers are preserved. Keep all person endings consistent when editing.','사용을 선택하면 편집기가 모델로 바뀝니다. 저장한 개인 기도는 유지합니다. 수정할 때 인칭을 모두 일관되게 맞추세요.')}</p>`;
          document.getElementById('lesson-ch5-2').prepend(modes);
          applyPrayerMode(prayerMode,false);if(state.notes['prayer-draft']!==undefined)document.getElementById('assembled-tr-textarea').value=state.notes['prayer-draft'];
          modes.querySelector('select').onchange=e=>{prayerMode=e.target.value;applyPrayerMode(prayerMode,false);};
          modes.querySelector('button').onclick=()=>applyPrayerMode(prayerMode,true);
        }
      }
    }else{
      const views={home,learn,words,bible,practice,settings};view.innerHTML=(views[route[0]]||home)();
      bindView(view);
    }
    header();bindWords(app);if(focus)document.getElementById('study-main').focus({preventScroll:true});
    document.getElementById('study-footer').firstElementChild?.classList.add('global-status');
    window.audioEngine.stopSpeaking();
  }
  function setSection(section,focus=true){
    const panel=document.getElementById('section-ch7');if(!panel)return;
    panel.querySelectorAll('[data-stage]').forEach(el=>el.hidden=el.dataset.stage!==section);
    panel.querySelectorAll('[data-section]').forEach(b=>b.setAttribute('aria-current',b.dataset.section===section?'step':'false'));
    const p=course.entry(route[1]);p.section=section;course.save();state.last={id:route[1],section};deviceLearning.save();
    if(focus)panel.querySelector(`[data-stage="${section}"] h2`)?.focus({preventScroll:true});
  }
  window.decorateLesson=(lesson,p)=>{
    const panel=document.getElementById('section-ch7'),article=panel.querySelector('article');
    const cards=[...article.children].filter(x=>x.matches('section'));
    cards.forEach(el=>{const stage=el.querySelector('[data-play-all]')?'read':el.querySelector('.course-prose')?'understand':el.querySelector('#course-response')?'use':'practise';el.dataset.stage=stage;el.querySelector('h2')?.setAttribute('tabindex','-1');});
    const top=article.querySelector('header');top.className='lesson-heading';
    top.innerHTML=`<a class="back-link" href="#/learn">← ${t('Study library','학습 자료실')}</a><p class="course-kicker">${esc(SEMINAR.sources.find(s=>s.id===lesson.track)?tx(SEMINAR.sources.find(s=>s.id===lesson.track).title):t('Practical ministry','실제 사역'))} · ${course.status(p)}</p><h1 tabindex="-1" id="course-title">${esc(tx(lesson.title))}</h1><p class="lesson-objective">${esc(tx(lesson.objective))}</p><details class="prerequisites"><summary>${t('Before you begin','시작 전에')}</summary>${rich(lesson.prerequisites)}</details><div class="lesson-navigation"><nav aria-label="${t('Lesson sections','수업 단계')}">${sections.map((s,i)=>`<a href="#/lesson/${lesson.id}/${s}" data-section="${s}"><span>${i+1}</span>${t(...labels[s])}</a>`).join('')}</nav><button id="open-outline" type="button">${t('Outline','목차')}</button></div>`;
    const reading=article.querySelector('.course-dialogue');
    reading.querySelectorAll('.course-tr p').forEach((el,i)=>{const speaker=lesson.lines[i].speaker;el.innerHTML=(speaker?`<small>${esc(tx(speaker))}: </small>`:'')+annotated(lesson.lines[i].tr,lesson.words);});
    const meaning=article.querySelector('.course-prose')?.closest('details');if(meaning)meaning.open=false;
    article.querySelectorAll('.course-word').forEach((el,i)=>{const w=lesson.words[i];el.innerHTML=`<button type="button" data-word="${w.id}" class="word-row"><span lang="tr">${esc(w.tr)}</span><span>${esc(tx(w.meaning))}</span><small>${t('Inspect & save','살펴보고 저장')} →</small></button>`;});
    // Cap visible word rows in very large reference units; all entries remain
    // available in Words and the complete expandable vocabulary list.
    const sourceDetails=[...article.querySelectorAll('details.course-card')].at(-1);
    if(sourceDetails){const source=SEMINAR.sources.find(s=>s.id===lesson.source?.id);sourceDetails.innerHTML=`<summary>${t('Sources and editorial status','출처·편집 상태')}</summary><p>${source?`${esc(source.name)} · ${t('pages','쪽')} ${lesson.source.pages.join(', ')}`:t('Authored content expansion · practical teaching model','작성된 콘텐츠 확장 · 실용 학습 모델')}</p><p>${t('Reviewed teaching adaptation. Independent Turkish and Korean specialist review remains pending.','편집한 학습 적용입니다. 터키어·한국어 전문가의 독립 검토는 아직 필요합니다.')}</p>${[...(source?.links||[]),...(lesson.links||[])].map(x=>`<p><a href="${x.url}" target="_blank" rel="noopener">${esc(tx(x.label))} ↗</a></p>`).join('')}<a href="EDITORIAL.md">${t('Editorial changes','편집 변경')}</a>`;}
    const resources=document.createElement('section');resources.className='related-study';resources.dataset.stage='understand';resources.innerHTML=`<h2>${t('Read and connect','읽고 연결하기')}</h2>${SEMINAR.passages.filter(r=>r.relatedLessons.includes(lesson.id)).map(r=>`<a class="reading-link" href="#/bible/${r.id}">${esc(r.reference)} →</a>`).join('')}${(lesson.relatedLessons||[]).map(id=>ALL_LESSONS.find(l=>l.id===id)).filter(Boolean).map(l=>linkLesson(l)).join('')}${lesson.practiceLink?`<a href="#/lesson/${lesson.practiceLink}/read">${t('Open related workshop','연결 연습 열기')} →</a>`:''}`;if(resources.querySelector('a'))article.append(resources);
    const section=sections.includes(location.hash.split('/')[3])?location.hash.split('/')[3]:p.section||'read';
    panel.querySelectorAll('[data-stage]').forEach(el=>el.hidden=el.dataset.stage!==section);panel.querySelectorAll('[data-section]').forEach(el=>el.setAttribute('aria-current',el.dataset.section===section?'step':'false'));
    const stepFooter=document.createElement('div');stepFooter.className='lesson-step-footer';const index=sections.indexOf(section);stepFooter.innerHTML=`${index>0?`<a href="#/lesson/${lesson.id}/${sections[index-1]}">← ${t(...labels[sections[index-1]])}</a>`:'<span></span>'}${index<3?`<a class="primary-action" href="#/lesson/${lesson.id}/${sections[index+1]}">${t(...labels[sections[index+1]])} →</a>`:`<a href="#/learn">${t('Back to courses','과정으로 돌아가기')} →</a>`}`;article.append(stepFooter);
    const chars=document.createElement('div');chars.className='writing-characters';chars.innerHTML=`<span>${t('Turkish letters','터키어 문자')}</span>${['ç','ğ','ı','İ','ö','ş','ü'].map(c=>`<button type="button" data-letter="${c}" aria-label="${t('Insert','입력')} ${c}">${c}</button>`).join('')}`;
    let writing=null;panel.querySelectorAll('textarea').forEach(el=>el.addEventListener('focus',()=>writing=el));
    const use=panel.querySelector('#course-response').closest('section');use.insertBefore(chars,panel.querySelector('#course-response'));
    chars.querySelectorAll('button').forEach(b=>{b.onmousedown=e=>e.preventDefault();b.onclick=()=>{const el=writing||panel.querySelector('#course-response'),start=el.selectionStart;el.setRangeText(b.dataset.letter,start,el.selectionEnd,'end');el.dispatchEvent(new Event('input',{bubbles:true}));el.focus();};});
    top.querySelector('#open-outline').onclick=()=>{const d=document.getElementById('outline-dialog');d.innerHTML=`<h2 id="outline-title">${t('Lesson outline','수업 목차')}</h2><button class="dialog-close" type="button">${t('Close','닫기')} ×</button>${sections.map(s=>`<a class="lesson-row" href="#/lesson/${lesson.id}/${s}">${t(...labels[s])} →</a>`).join('')}`;d.querySelector('button').onclick=()=>d.close();d.querySelectorAll('a').forEach(a=>a.onclick=()=>d.close());d.showModal();};
    bindWords(panel);
  };
  function bindWords(root){root.querySelectorAll('[data-word]').forEach(b=>b.onclick=()=>openWord(b.dataset.word,b));}
  function openWord(id,trigger){
    const base=wordById(id);if(!base)return;if(trigger)wordReturn=trigger;
    const container=route[0]==='lesson'?ALL_LESSONS.find(l=>l.id===route[1]):route[0]==='bible'?SEMINAR.passages.find(p=>p.id===route[1]):null;
    const example=container?.lines.find(l=>l.tr.includes(base.tr))||state.words[id]?.context||base.example;
    const w={...base,example};
    const d=document.getElementById('word-inspector');d.dataset.word=id;
    const source=SEMINAR.sources.find(s=>s.id===w.source?.id);
    d.innerHTML=`<button class="dialog-close" type="button">${t('Close','닫기')} ×</button><p class="eyebrow">${t('Word in context','문맥 속 단어')}</p><h2 id="word-title" lang="tr">${esc(w.tr)}</h2><p class="word-natural">${esc(tx(w.meaning))}</p><dl><dt>${t('Lemma','기본형')}</dt><dd lang="tr">${esc(w.lemma||w.tr)}</dd><dt>${t('Suffix breakdown / form','접미사 분석 / 형태')}</dt><dd lang="tr">${esc(w.breakdown)}</dd><dt>${t('Literal gloss','직역')}</dt><dd>${esc(tx(w.literalGloss))}</dd><dt>${t('Role and contextual meaning','역할·문맥 뜻')}</dt><dd>${esc(tx(w.role))}</dd></dl><div class="word-example"><p lang="tr">${esc(w.example?.tr||w.tr)}</p><p>${esc(tx(w.example?.translation||w.meaning))}</p></div><div class="course-controls"><button type="button" data-speech="${esc(w.tr)}">${t('Play synthetic speech','합성 음성 듣기')}</button><button type="button" data-speech-stop>${t('Stop','정지')}</button></div><p role="status" id="word-audio-status"></p><button id="save-word" type="button" class="primary-action">${state.words[id]?t('Saved · review in Words','저장됨 · 단어 메뉴에서 복습'):t('Save word','단어 저장')}</button><p id="word-save-status" role="status"></p><p class="word-source">${source?esc(source.name)+' · '+t('page','쪽')+' '+w.source.pages.join(', '):w.source?.id==='expansion'?t('Authored practical lesson','작성된 실용 수업'):t('Imported personal notebook','가져온 개인 노트')}</p>`;
    d.querySelector('.dialog-close').onclick=()=>d.close();d.querySelector('#save-word').onclick=()=>{deviceLearning.saveWord(id,{...example,origin:route.slice(0,2).join('/')});d.querySelector('#save-word').textContent=t('Saved · review in Words','저장됨 · 단어 메뉴에서 복습');d.querySelector('#word-save-status').textContent=store.available?t('Saved on this device.','이 기기에 저장했습니다.'):t('Storage unavailable; saved for this session.','저장소 사용 불가: 이번 세션에 저장했습니다.');};
    bindSpeech(d);if(!d.open)d.showModal();
  }
  const inspector=document.getElementById('word-inspector');inspector.addEventListener('close',()=>{window.audioEngine.stopSpeaking();if(wordReturn?.isConnected)wordReturn.focus();});
  for(const dialog of [inspector,document.getElementById('outline-dialog')])dialog.addEventListener('keydown',e=>{
    if(e.key!=='Tab')return;
    const items=[...dialog.querySelectorAll('button,a[href],input,select,textarea,[tabindex="0"]')].filter(el=>!el.disabled&&el.getClientRects().length);
    const first=items[0],last=items.at(-1);if(!first)return;
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
  });
  function bindSpeech(root){root.querySelectorAll('[data-speech]').forEach(b=>b.onclick=()=>audioEngine.speakTurkish(b.dataset.speech,null,()=>{(root.querySelector('#word-audio-status')||audioStatus).textContent=t('Playing synthetic Turkish…','터키어 합성 음성 재생 중…');},()=>{(root.querySelector('#word-audio-status')||audioStatus).textContent=t('Speech ended.','음성이 끝났습니다.');}));root.querySelectorAll('[data-speech-stop]').forEach(b=>b.onclick=()=>{audioEngine.stopSpeaking();(root.querySelector('#word-audio-status')||audioStatus).textContent=t('Stopped.','정지했습니다.');});}
  function bindView(view){
    bindSpeech(view);
    view.querySelector('#sound-effects')?.addEventListener('change',e=>{audioEngine.isMuted=!e.target.checked;state.notes['audio-effects']=e.target.checked?'on':'off';deviceLearning.save();});
    view.querySelector('#default-rate')?.addEventListener('change',e=>{audioEngine.playbackRate=Number(e.target.value);state.notes['audio-rate']=e.target.value;deviceLearning.save();});
    view.querySelector('#word-search')?.addEventListener('input',e=>{search=e.target.value;wordPage=0;view.innerHTML=words();bindView(view);bindWords(view);const input=view.querySelector('#word-search');input.focus();input.setSelectionRange(search.length,search.length);});
    view.querySelectorAll('[data-word-page]').forEach(b=>b.onclick=()=>{wordPage+=Number(b.dataset.wordPage);renderRoute(false);});
    view.querySelector('#reveal-word')?.addEventListener('click',()=>{reviewReveal=true;renderRoute(false);});
    view.querySelectorAll('[data-recall]').forEach(b=>b.onclick=()=>{deviceLearning.review(b.dataset.id,b.dataset.recall==='remembered');reviewReveal=false;renderRoute(false);});
    view.querySelector('#translation-toggle')?.addEventListener('click',e=>{const open=e.target.getAttribute('aria-expanded')==='true';e.target.setAttribute('aria-expanded',String(!open));e.target.textContent=open?t('Show translations','번역 보기'):t('Hide translations','번역 가리기');view.querySelectorAll('.teaching-translation').forEach(el=>el.hidden=open);});
    view.querySelector('#reading-note')?.addEventListener('input',e=>{state.notes[route[1]]=e.target.value;deviceLearning.save();});
    view.querySelector('#export-backup')?.addEventListener('click',()=>{const url=URL.createObjectURL(new Blob([JSON.stringify(store.export(),null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='spiritual-turkish-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
    view.querySelector('#import-backup')?.addEventListener('change',async e=>{const file=e.target.files[0];if(!file)return;const out=view.querySelector('#backup-status');try{if(file.size>5000000)throw new Error('size');store.import(JSON.parse(await file.text()));out.textContent=t('Backup merged. Reload to use the imported progress.','백업을 합쳤습니다. 새 기록을 사용하려면 새로고침하세요.');}catch{out.textContent=t('This is not a valid Spiritual Turkish backup. Existing data has not been replaced.','유효한 Spiritual Turkish 백업이 아닙니다. 기존 기록을 바꾸지 않았습니다.');}});
  }
  // Capture legacy tabs so navigation updates the URL as well as the content.
  document.getElementById('legacy-view').addEventListener('click',e=>{const tab=e.target.closest('[data-subtab-id]');if(tab){e.preventDefault();e.stopImmediatePropagation();go(`lesson/${tab.dataset.subtabId}/read`);}},true);
  window.addEventListener('hashchange',()=>{reviewReveal=false;renderRoute();window.scrollTo(0,0);});
  const prayerDraft=document.getElementById('assembled-tr-textarea');prayerDraft.addEventListener('input',()=>{state.notes['prayer-draft']=prayerDraft.value;deviceLearning.save();});
  window.persistPrayerDraft=()=>{state.notes['prayer-draft']=prayerDraft.value;deviceLearning.save();};
  renderRoute(false);
});
