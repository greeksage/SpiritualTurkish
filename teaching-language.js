/* Persistent teaching-language control; never rewrites saved personal content. */
(() => {
  const en=LEGACY_EN, ko=LEGACY_KO;
  const chapterEn=['Pronunciation lab','Ministry simulator','Culture and worldview','Bible and grammar','Prayer workshop','Turkish spelling'];
  const titlesEn=['Voicing: B, D and G','Syllable rhythm','Circumflex and meaning','Recognised-text match','Assurance and the circle','Manuscripts and calendar conventions','Scales and grace','Christmas and New Year','Longing and Christian belief','Banknote illustration','Wordless book','Everyday faith vocabulary','Rights and restitution','Afterlife vocabulary','Fidye and kefaret','Scripture and suffix analysis','Vowel-loss practice','Everyday and Christian meanings','Prayer steps and patterns','Prayer assembly and synthetic speech','Situational prayers','Spelling rules','Spelling quiz','Proofreading practice'];
  const nodeOriginal=new WeakMap();
  const dictionary=new Map(Object.entries({
    '전체 발음':'Play whole word','터키어 단어를 입력하세요 (예: Hristiyan, Kurtuluş, İncil)...':'Enter a Turkish word (e.g. Hristiyan, Kurtuluş, İncil)…','느리게':'Slow','보통속도':'Normal speed','합성 음성 발음 듣기':'Play synthetic speech','터키어 음성 듣기':'Play synthetic Turkish speech','📖 글 없는 책 (5 Renk) 상징 팔레트:':'Wordless book: five-color illustration','천국 & 영광':'Heaven & glory','죄 & 어둠':'Sin & darkness','보혈 & 대속':'Christ’s blood & atonement','칭의 & 정결':'Justification & cleansing','성장 & 새 생명':'Growth & new life','듣기':'Play synthetic speech',
    '완료 0 / 24 레슨':'Completed 0 / 34 lessons','유성음 vs 무성음 (B/D/G OX)':'Voicing: B, D and G','음절(Hece) 분절 훈련':'Syllable rhythm','모자 부호(Şapka ^) 의미 구별':'Circumflex and meaning','Web Speech AI 음성 인식':'Recognised-text match','한국어 번역 가리기':'Hide translation','한국어 번역 보기':'Show translation','터키어 낭독':'Play synthetic Turkish','복사':'Copy','확인':'Check','불러오기':'Load','분석:':'Analysis:','신학적 해설:':'Christian explanation:','발음 듣기':'Play synthetic speech','터키어 합성 음성 발음 듣기':'Play synthetic Turkish speech','정답 입력...':'Enter your answer…','기도문 빌더로 영혼 품기':'Open prayer workshop','시나리오 다시 하기':'Retry conversation','시나리오 완료':'Conversation reviewed','현재 대화 연습 기록:':'Conversation practice:','최종 대화 연습 기록':'Conversation review','영적 지혜':'Conversation practice','터키어':'Turkish','한국어 번역':'Teaching translation','이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요.':'This is Christian doctrine or illustration. Read Scripture in context.',
    '그렇다 (O)':'True (O)','아니다 (X)':'False (X)','정답입니다!':'Correct!','오답입니다':'Try again','다음 대화로 넘어가기':'Continue conversation','기도문을 터키어로 낭독합니다...':'Playing synthetic Turkish prayer…','저장된 기도문이 없습니다. 직접 조합한 기도문을 저장해 보세요.':'No saved prayers yet. Save a prayer you have assembled.','음성 인식 완료':'Recognition finished','발음 속도:':'Speech speed:','효과음 OFF':'Sound effects off','효과음 ON':'Sound effects on','정답':'correct','정답:':'Answer:','학습 진행률':'Learning progress','배경음악 끄기 (Ambient Pad)':'Stop ambient sound','배경음악 켜기 (Ambient Pad)':'Play ambient sound','모든 오류 교정 완료! 🎉':'All errors found!','문장 안에서 철자, 아포스트로피, 띄어쓰기, 대소문자 규정이 잘못된 단어를 찾아 클릭하세요.':'Find the errors in spelling, apostrophes, spacing and capitalization.','발견 및 교정된 맞춤법 규정:':'Discovered spelling corrections:'
  }));
  for(const [key,pair] of Object.entries(window.SHELL_TRANSLATIONS))dictionary.set(key,pair[0]);
  const sorted=[...dictionary].sort((a,b)=>b[0].length-a[0].length);
  const englishShell={
    '1. PRONUNCIATION:':'1. 발음:', '2. EVANGELISM:':'2. 사역 대화:', '3. WORLDVIEW:':'3. 세계관:', '4. SCRIPTURE SYNTAX:':'4. 성경 문법:', '5. PRAYER BUILDER:':'5. 기도 조립:', '6. ORTHOGRAPHY:':'6. 표기 규칙:',
    'Overall Progress':'사역 과제 진행률','LMS Studio':'학습 스튜디오','Morphology & Theological LMS':'형태와 신학 학습','TURKISH DIACRITICS':'터키어 특수 문자','Anatolian Ministry':'아나톨리아 사역','Curriculum':'학습 과정',
    '1. Pronunciation Lab':'1. 발음 클리닉','B/D/G Voicing & Hece Rhythm':'B/D/G 성대 진동과 음절 리듬','2. Evangelism Simulator':'2. 사역 대화 시뮬레이터','3. Culture & Worldview':'3. 문화와 세계관','4. Scripture Syntax':'4. 성경 문장과 문법','Romans 6:4 Dissection':'로마서 6:4 문법 연습','5. Prayer Workshop':'5. 기도 워크숍','6-Step Prayer Builder':'여섯 단계 기도 조립','6. Turkish Spelling Rules':'6. 터키어 표기 규칙',
    'Chapter 1.1 • Voiced Plosives':'1.1장 · 유성 파열음','Chapter 1.2 • Heceleme':'1.2장 · 음절 분절','Chapter 1.3 • Düzeltme İşareti':'1.3장 · 곡절 부호','Chapter 1.4 • Recognised-text Match':'1.4장 · 인식된 텍스트 비교','Chapter 2 • 7 Evangelism Scenarios':'2장 · 일곱 사역 대화','Chapter 3.1 • Sevap vs Grace':'3.1장 · Sevap와 은혜','Chapter 3.2 • Kul Hakkı':'3.2장 · Kul Hakkı','Chapter 3.3 • 8 Stages of Afterlife':'3.3장 · 내세 용어 여덟 항목','Chapter 3.4 • Fıkıh Terminology':'3.4장 · 종교법 용어','Chapter 4.2 • Ünlü Düşmesi':'4.2장 · 모음 탈락','Chapter 4.3 • 3D Flip Cards':'4.3장 · 의미 비교 카드','Chapter 5.1 • 6-Step Flow':'5.1장 · 여섯 단계 기도','Chapter 5.2 • Live Builder & TTS':'5.2장 · 조립과 합성 음성','Chapter 5.3 • 5 Teaching Prayers':'5.3장 · 학습 기도문 다섯 개','Chapter 6.1 • 11 Core Orthography Rules':'6.1장 · 표기 규칙 열한 개','Chapter 6.2 • 7 Pitfalls':'6.2장 · 표기 연습 일곱 개','Chapter 6.3 • Hata Düzeltme':'6.3장 · 교정 연습'
  };
  function localizeDOM() {
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);const updates=[];
    while(walker.nextNode()) {
      const n=walker.currentNode;
      if(n.parentElement.closest('#learning-app')&&!n.parentElement.closest('#legacy-view'))continue;
      if(n.parentElement.closest('script,style,#word-inspector,#section-ch7,#expanded-nav,.course-language,textarea,[data-user-content]'))continue;
      let base=nodeOriginal.get(n);if(base===undefined){base=n.nodeValue;nodeOriginal.set(n,base);}
      let result=base;
      if(course.language==='en') {
        for(const [k,v] of sorted)result=result.split(k).join(v);
        result=result.replace(/문항\s*0?(\d+)/g,'Question $1').replace(/완료 (\d+) \/ (\d+) 레슨/g,'Completed $1 / $2 lessons').replace(/번역:/g,'Translation:').replace(/남은 교정 대상: (\d+)개/g,'Errors remaining: $1').replace(/(\d+)점/g,'$1 practice points');
        result=result.replace(/템플릿이 로드되었습니다\./g,'template loaded.').replace(/기도문을 불러왔습니다\./g,'prayer loaded.').replace(/로 설정되었습니다/g,'selected').replace(/문자가 클립보드에 복사되었습니다!/g,'character copied to clipboard!').replace(/\(은\)는 TDK 규정상 올바른 표기입니다\. 다른 단어를 찾아보세요\./g,'is correctly spelled under the TDK rule. Look for another word.').replace(/유사도:/g,'Text match:');
        result=result.replace(/(\d+)음절 분절/g,'$1 syllables').replace(/규칙 0?(\d+)/g,'Rule $1').replace(/문제 0?(\d+)/g,'Question $1').replace(/응답 0?(\d+)/g,'Response $1').replace(/문장 0?(\d+)/g,'Sentence $1').replace(/단계 0?(\d+)/g,'Stage $1').replace(/8단계 중 0?(\d+)단계/g,'Panel $1 of 8').replace(/의 질문:/g,' asks:');
      } else {
        for(const [key,pair] of Object.entries(window.SHELL_TRANSLATIONS))result=result.split(key).join(pair[1]);
        if(englishShell[base.trim()])result=englishShell[base.trim()];
      }
      if(n.nodeValue!==result)updates.push([n,result]);
    }
    for(const [n,value] of updates)n.nodeValue=value;
    document.querySelectorAll('[data-en][data-ko]').forEach(el=>el.textContent=el.dataset[course.language]);
    document.querySelectorAll('[data-aria-en][data-aria-ko]').forEach(el=>el.setAttribute('aria-label',course.language==='en'?el.dataset.ariaEn:el.dataset.ariaKo));
    document.querySelectorAll('[placeholder],[title],[aria-label]').forEach(el=>{for(const a of ['placeholder','title','aria-label']){const val=el.getAttribute(a);if(dictionary.has(val)){el.dataset['original'+a.replace('-','')]=val;el.setAttribute(a,course.language==='en'?dictionary.get(val):val);}else if(course.language==='ko'&&el.dataset['original'+a.replace('-','')])el.setAttribute(a,el.dataset['original'+a.replace('-','')]);}});
    document.querySelectorAll('.sidebar-sublesson-btn[data-lesson-id^="ch"]').forEach((btn,i)=>{const label=btn.querySelector('.flex span:not(.lesson-badge)');if(label){if(!label.dataset.ko)label.dataset.ko=label.textContent;label.textContent=course.language==='en'?titlesEn[i]:label.dataset.ko;}});
    document.querySelectorAll('.in-chapter-subtab[data-subtab-id]').forEach(btn=>{const id=btn.dataset.subtabId;const label=btn.querySelector('span');if(label)label.textContent=id.replace(/^ch/,'').replace('-','.')+' '+window.legacyLessonTitle(id);});
  }
  function apply() {
    const customPrayer=document.getElementById('assembled-tr-textarea')?.value;
    Object.assign(APP_DATA,JSON.parse(JSON.stringify(course.language==='en'?en:ko)));
    window.refreshTeachingContent?.();localizeDOM();
    if(customPrayer!==undefined)document.getElementById('assembled-tr-textarea').value=customPrayer;
  }
  window.applyTeachingLanguage=apply;
  const koTitles=[...document.querySelectorAll('.sidebar-sublesson-btn[data-lesson-id^="ch"]')].map(b=>b.querySelector('.flex span:not(.lesson-badge)')?.textContent);
  const lessonIDs=[...document.querySelectorAll('.sidebar-sublesson-btn[data-lesson-id^="ch"]')].map(b=>b.dataset.lessonId);
  window.legacyLessonTitle=id=>course.language==='en'?titlesEn[lessonIDs.indexOf(id)]:koTitles[lessonIDs.indexOf(id)];
  window.legacyChapterTitle=id=>course.language==='en'?chapterEn[id-1]:['발음 클리닉','사역 대화 시뮬레이터','문화와 세계관','성경과 문법','기도 워크숍','터키어 표기'][id-1];
  // Data must be localized before app.js initializes the retained workshops.
  apply();
  document.addEventListener('DOMContentLoaded',()=>{
    localizeDOM();
    let queued=false;
    const observer=new MutationObserver(()=>{if(queued)return;queued=true;queueMicrotask(()=>{observer.disconnect();localizeDOM();queued=false;observer.observe(document.body,{childList:true,subtree:true});});});
    observer.observe(document.body,{childList:true,subtree:true});
  });
})();
