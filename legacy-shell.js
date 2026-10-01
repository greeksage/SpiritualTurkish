document.addEventListener('DOMContentLoaded', () => {
  const references=[
    ['section-ch3', [['TDV — ahiret','TDV — 내세','https://islamansiklopedisi.org.tr/ahiret'],['TDV — fidye','TDV — fidye','https://islamansiklopedisi.org.tr/fidye'],['TDV — kefaret','TDV — kefaret','https://islamansiklopedisi.org.tr/kefaret'],['Diyanet — rights and restitution','Diyanet — 권리와 회복','https://kurul.diyanet.gov.tr/tr/fetva/kul-hakkinin-onemi-nedir-veihlali-durumunda-nasil-odenir/0193c42d-9bcc-7638-464f-b3fb0161518f']]],
    ['section-ch2', [['INTF — manuscript categories and variants','INTF — 사본 유형과 이문','https://www.uni-muenster.de/INTF/Projects.html'],['US Naval Observatory — calendar era conventions','미 해군 천문대 — 연대 관례','https://aa.usno.navy.mil/faq/millennium']]],
    ['section-ch6', [['TDK — apostrophes','TDK — 아포스트로피','https://tdk.gov.tr/icerik/yazim-kurallari/kesme-isareti/'],['TDK — capitals','TDK — 대문자','https://tdk.gov.tr/icerik/yazim-kurallari/buyuk-harflerin-kullanildigi-yerler/']]]
  ];
  for(const [id,links] of references){const d=document.createElement('details');d.className='course-card';d.innerHTML='<summary data-en="Sources and context" data-ko="출처와 문맥">Sources and context</summary><p data-en="These describe terms and historical conventions, not every person’s beliefs. Ask your conversation partner. Christian comparisons express evangelical doctrine; they are not literal dictionary definitions." data-ko="이 출처는 용어와 역사적 관례를 설명하며 모든 개인의 믿음을 대신하지 않습니다. 상대에게 물으세요. 기독교 비교는 복음주의 교리이며 문자적 사전 뜻과 다릅니다.">These describe terms and historical conventions, not every person’s beliefs. Ask your conversation partner.</p>'+links.map(([en,ko,url])=>`<p><a href="${url}" target="_blank" rel="noopener" data-en="${en}" data-ko="${ko}">${course.t(en,ko)}</a></p>`).join('');document.getElementById(id).append(d);}
  const sidebar=document.getElementById('sidebar'), toggle=document.getElementById('sidebar-toggle-btn');
  const closed=()=>window.innerWidth<1024&&sidebar.classList.contains('-translate-x-full');
  const syncMenu=()=>{sidebar.inert=closed();toggle?.setAttribute('aria-expanded',String(!closed()));};
  toggle?.setAttribute('aria-controls','sidebar');
  for(const id of ['sidebar-toggle-btn','sidebar-close-btn','mute-toggle-btn','speed-toggle-btn','mic-record-btn']){
    const el=document.getElementById(id);if(!el)continue;const labels={
      'sidebar-toggle-btn':['Open curriculum menu','학습 과정 메뉴 열기'], 'sidebar-close-btn':['Close curriculum menu','학습 과정 메뉴 닫기'],
      'mute-toggle-btn':['Toggle sound effects','효과음 켜기/끄기'], 'speed-toggle-btn':['Change synthetic speech speed','합성 음성 속도 변경'], 'mic-record-btn':['Start or stop speech recognition','음성 인식 시작/정지']
    };el.dataset.ariaEn=labels[id][0];el.dataset.ariaKo=labels[id][1];el.setAttribute('aria-label',course.t(...labels[id]));
  }
  toggle?.addEventListener('click',()=>{syncMenu();if(!closed())document.getElementById('teaching-language').focus();});
  for(const id of ['sidebar-close-btn','sidebar-backdrop'])document.getElementById(id)?.addEventListener('click',()=>{syncMenu();toggle?.focus();});
  sidebar.addEventListener('keydown',e=>{
    if(e.key==='Escape'&&window.innerWidth<1024){sidebar.classList.add('-translate-x-full');document.getElementById('sidebar-backdrop').classList.add('hidden');syncMenu();toggle.focus();}
    if(e.key==='Tab'&&window.innerWidth<1024&&!closed()){
      const items=[...sidebar.querySelectorAll('button,select,[tabindex="0"]')].filter(el=>!el.disabled);const first=items[0],last=items.at(-1);
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
    }
  });
  document.querySelectorAll('.chapter-nav-item').forEach(el=>{el.setAttribute('role','button');el.tabIndex=0;el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();el.click();}});});
  const observer=new MutationObserver(syncMenu);observer.observe(sidebar,{attributes:true,attributeFilter:['class']});window.addEventListener('resize',syncMenu);syncMenu();
  const out=document.getElementById('legacy-syntax-status');
  let playing=false;
  document.getElementById('audio-play-toggle').onclick=()=>{
    if(playing){audioEngine.stopSpeaking();playing=false;return;}
    audioEngine.speakTurkish(APP_DATA.syntax.verses[0].turkish,null,()=>{playing=true;out.textContent=course.t('Synthetic speech playing…','합성 음성 재생 중…');},()=>{playing=false;out.textContent=course.t('Speech ended.','음성 종료.');});
  };
  document.getElementById('speed-slow').onclick=()=>audioEngine.playbackRate=.8;
  document.getElementById('speed-normal').onclick=()=>audioEngine.playbackRate=1;
  document.getElementById('add-lexicon-btn').onclick=()=>{
    try {let notes;try{notes=JSON.parse(localStorage.getItem('spiritual_turkish_notebook')) || [];}catch{notes=[];}if(!Array.isArray(notes))notes=[];if(!notes.some(n=>n.word==='gömüldük'))notes.push({word:'gömüldük',meaning:{en:'we were buried',ko:'우리는 묻혔습니다'},breakdown:'göm + ül + dü + k'});localStorage.setItem('spiritual_turkish_notebook',JSON.stringify(notes));out.textContent=course.t('Saved to your local notebook. Export the TSV to use it elsewhere.','브라우저 노트에 저장했습니다. TSV로 내보낼 수 있습니다.');}catch{out.textContent=course.t('Notebook storage unavailable. You can still export the TSV.','노트 저장소를 사용할 수 없습니다. TSV 내보내기는 가능합니다.');}
  };
  document.getElementById('anki-export-btn').onclick=()=>{
    const rows=[['Word','Meaning','Breakdown'],['gömüldük',course.t('we were buried','우리는 묻혔습니다'),'göm + ül (passive) + dü (past) + k (we)'],['ölüme',course.t('into death','죽음으로'),'ölüm + e (dative)']];
    const url=URL.createObjectURL(new Blob(['\ufeff'+rows.map(r=>r.join('\t')).join('\n')],{type:'text/tab-separated-values;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='Romans6_4.tsv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  };
  document.querySelectorAll('[data-passive]').forEach(b=>b.onclick=()=>{document.getElementById('passive-feedback').textContent=course.t((b.dataset.passive==='yes'?'Correct. ':'Try again. ')+'göm- (bury) + -ül- (passive) + -dü- (past) + -k (we). The passive changes the subject’s relation to the action; the suffix alone does not identify who performed it.',(b.dataset.passive==='yes'?'맞습니다. ':'다시 해 보세요. ')+'göm- (묻다) + -ül- (피동) + -dü- (과거) + -k (우리). 접미사만으로 행위자가 누구인지 알 수는 없습니다.');course.entry('ch4-1').practised=true;course.save();});
});
