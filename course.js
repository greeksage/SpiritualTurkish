/* Static, bilingual curriculum. No network services or framework required. */
(() => {
  'use strict';
  const key = 'spiritual_turkish_learning_v2';
  const read = (name) => { try { return learningStore.get(name); } catch { return null; } };
  const stored = read(key);
  const progress = stored?.version === 2 && stored.lessons && typeof stored.lessons === 'object' && !Array.isArray(stored.lessons) ? stored : {version: 2, lessons: {}};
  // Previous builds only tracked clicks in memory. Imported completion is evidence of a visit, never mastery.
  if (!stored) {
    const old = read('spiritual_turkish_progress');
    const ids = Array.isArray(old) ? old : old?.completedLessons;
    if (Array.isArray(ids)) ids.filter(x => typeof x === 'string').forEach(id => progress.lessons[id] = {visited: true});
  }
  let language = read('spiritual_turkish_language') === 'ko' ? 'ko' : 'en';
  let current = null;
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const text = value => value?.[language] ?? value;
  const t = (en, ko) => language === 'en' ? en : ko;
  const rich = value => esc(text(value)).replace(/`([^`]+)`/g, '<code lang="tr">$1</code>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').split(/\n\n/).map(p => `<p>${p}</p>`).join('');
  const entry = id => {
    if (!progress.lessons[id] || typeof progress.lessons[id] !== 'object' || Array.isArray(progress.lessons[id])) progress.lessons[id] = {};
    const p=progress.lessons[id];
    for(const field of ['answers','drafts'])if(!p[field]||typeof p[field]!=='object'||Array.isArray(p[field]))p[field]={};
    if(!Array.isArray(p.rubric))p.rubric=[];
    if(p.response!==undefined&&typeof p.response!=='string')delete p.response;
    for(const [key,value]of Object.entries(p.drafts))if(typeof value!=='string')delete p.drafts[key];
    for(const [key,value]of Object.entries(p.answers))if(!value||typeof value!=='object'||Array.isArray(value))delete p.answers[key];
    return p;
  };
  function save() {
    try { learningStore.set(key, progress); }
    catch { document.getElementById('course-storage-status').textContent = t('Storage unavailable. Progress is kept for this session only.','저장소를 사용할 수 없습니다. 이번 세션에서만 기록됩니다.'); }
    window.updateCourseProgress?.();
    if(document.getElementById('expanded-nav'))renderNav();
    const kicker=document.querySelector('#section-ch7 .course-kicker');
    const active=ALL_LESSONS.find(l=>l.id===current), source=active&&SEMINAR.sources.find(s=>s.id===active.track);
    if(kicker&&active&&!kicker.closest('.lesson-heading'))kicker.textContent=(source?text(source.title):t('Practical ministry','실제 사역'))+' · '+status(entry(current));
  }
  const rubric = [
    ['Understanding: I identified the actual question and clarified when needed.','이해: 실제 질문을 파악하고 필요할 때 확인했습니다.'],
    ['Language: I used the target forms intelligibly without changing the intended meaning.','언어: 뜻을 바꾸지 않고 목표 형태를 이해할 수 있게 사용했습니다.'],
    ['Explanation: I explained the idea in familiar Turkish, beyond a translation label.','설명: 번역 단어만 말하지 않고 익숙한 터키어로 생각을 설명했습니다.'],
    ['Accuracy: I distinguished testimony, Scripture, doctrine and historical evidence.','정확성: 간증, 성경, 교리와 역사적 증거를 구별했습니다.'],
    ['Interaction: I listened and handled acceptance, clarification, uncertainty or refusal.','상호작용: 듣고 수락, 확인, 불확실성과 거절에 답했습니다.']
  ];
  const sources = [
    [{en:'INTF — manuscript categories and variants',ko:'INTF — 사본 유형과 이문'},'https://www.uni-muenster.de/INTF/Projects.html'],
    [{en:'Diyanet — rights, restitution and repentance',ko:'Diyanet — 권리, 회복과 회개'},'https://kurul.diyanet.gov.tr/tr/fetva/kul-hakkinin-onemi-nedir-veihlali-durumunda-nasil-odenir/0193c42d-9bcc-7638-464f-b3fb0161518f'],
    [{en:'TDK — circumflex',ko:'TDK — 곡절 부호'},'https://tdk.gov.tr/icerik/yazim-kurallari/duzeltme-isareti/'],
    [{en:'TDK — apostrophes',ko:'TDK — 아포스트로피'},'https://tdk.gov.tr/icerik/yazim-kurallari/kesme-isareti/'],
    [{en:'TDK — capitals',ko:'TDK — 대문자'},'https://tdk.gov.tr/icerik/yazim-kurallari/buyuk-harflerin-kullanildigi-yerler/']
  ];
  const status = p => p.completed ? t('Completed · self-assessed','완료 · 자기 평가') : p.practised ? t('Practised','연습함') : p.visited ? t('Visited','방문함') : t('Not started','시작 전');
  function renderNav() {
    const nav = document.getElementById('expanded-nav');
    nav.innerHTML = `<h2>${t('Explained ministry lessons','설명형 사역 수업')}</h2>` + ALL_LESSONS.map((l,i) => `<button type="button" class="sidebar-sublesson-btn" data-lesson-id="${l.id}" aria-current="${current === l.id ? 'page' : 'false'}"><span>${i+1}. ${esc(text(l.title))}</span><small>${status(entry(l.id))}</small></button>`).join('');
    nav.querySelectorAll('button').forEach(b => b.addEventListener('click', () => window.selectLesson(b.dataset.lessonId)));
  }
  const choices = e => {const rows=e.choices.map((c,j)=>({c,j}));const offset=[...e.id].reduce((n,c)=>n+c.charCodeAt(0),0)%rows.length;return [...rows.slice(offset),...rows.slice(0,offset)];};
  function render() {
    const lesson = ALL_LESSONS.find(l => l.id === current);
    if (!lesson) return;
    const p = entry(current); p.answers ||= {}; p.drafts ||= {}; p.rubric ||= [];
    const panel = document.getElementById('section-ch7');
    const label = lesson.source?.id && lesson.source.id!=='expansion' ? t('Reviewed teaching adaptation of the seminar source. This is not a published Bible quotation or a verbatim transcript.','세미나 출처를 편집한 학습 자료이며 출판 성경 인용이나 축어 녹취가 아닙니다.') : lesson.quotationStatus === 'simplified-paraphrase' ? t('Simplified teaching paraphrase of Luke 15:3–7. Read 15:1–2 for context. This is not a published Bible quotation.','누가복음 15:3–7 학습용 요약. 15:1–2의 문맥도 읽으세요. 출판된 성경의 직접 인용이 아닙니다.') : current === 'ministry-05' ? t('Original teaching model. Use your own true experience; this is not your biography.','학습용 모델입니다. 자신의 실제 경험을 쓰세요. 자신의 간증으로 복사하지 마세요.') : t('Original teaching dialogue / prayer. Doctrinal explanations express evangelical Christian belief.','원래 작성된 학습용 대화 / 기도. 교리 설명은 복음주의 기독교 신앙을 표현합니다.');
    panel.innerHTML = `<article class="explained-lesson" lang="${language}">
      <header class="course-card"><p class="course-kicker">${t('Turkish for Christian ministry','기독교 사역을 위한 터키어')} · ${status(p)}</p><h1 tabindex="-1" id="course-title">${esc(text(lesson.title))}</h1><h2>${t('Learning objective','학습 목표')}</h2>${rich(lesson.objective)}<h2>${t('Prerequisites','선수 학습')}</h2>${rich(lesson.prerequisites)}<p>${t('These lessons assume an alphabet, vowel-harmony, cases and tense foundation. Suggested placement is not a proficiency certificate.','알파벳, 모음 조화, 격과 시제의 기초를 전제로 합니다. 수준 안내는 공인 능력 인증이 아닙니다.')}</p></header>
      <section class="course-card"><h2>${t('Listen and understand','듣고 이해하기')}</h2><p class="course-note">${label}</p><p>${t('Synthetic Turkish speech · voice availability depends on your browser. No human recordings.','터키어 합성 음성 · 브라우저에 따라 음성이 없을 수 있습니다. 사람의 녹음은 없습니다.')}</p><div class="course-controls"><button type="button" data-play-all>${t('Play all','전체 듣기')}</button><button type="button" data-stop>${t('Stop speech','음성 정지')}</button><label>${t('Speed','속도')} <select id="course-rate"><option value="1">1×</option><option value="0.8">0.8×</option></select></label></div><p id="course-audio-status" role="status"></p>
      <ol class="course-dialogue">${lesson.lines.map((line,i) => `<li><div class="course-tr"><p lang="tr">${line.speaker ? `<small lang="${language}">${esc(text(line.speaker))}: </small>` : ''}${esc(line.tr)}</p><button type="button" data-play="${i}" aria-label="${t('Play synthetic Turkish line','터키어 합성 음성 듣기')} ${i+1}">▶</button></div><p>${esc(text(line.translation))}</p></li>`).join('')}</ol></section>
      <section class="course-card"><h2>${t('Meaning, grammar and register','의미, 문법과 말투')}</h2><details open><summary>${t('Read the explanation','설명 읽기')}</summary><div class="course-prose">${rich(lesson.explanation)}</div></details>${wordPanel(lesson)}</section>
      <section class="course-card"><h2>${t('Guided practice','안내 연습')}</h2><p>${t('Several answers can work. Open responses use a model and self-review, not automatic language grading.','여러 답이 가능할 수 있습니다. 열린 답은 자동 언어 채점 대신 모델과 자기 평가를 사용합니다.')}</p>${lesson.exercises.map((e,i) => `<fieldset id="${e.id}"><legend>${i+1}. ${rich(e.prompt)}</legend>${e.choices ? choices(e).map(({c,j}) => `<label class="course-choice"><input type="radio" name="${e.id}" value="${j}" ${p.answers[e.id]?.choice === j ? 'checked' : ''}> ${esc(text(c))}</label>`).join('') : `<label for="draft-${e.id}">${t('Your Turkish response','자신의 터키어 답')}</label><textarea lang="tr" id="draft-${e.id}" data-draft="${e.id}">${esc(p.drafts[e.id] || '')}</textarea>`}<div class="course-controls"><button type="button" data-check="${i}">${e.choices ? t('Check answer','답 확인') : t('Compare with model','모델과 비교')}</button><button type="button" data-retry="${i}">${t('Retry','다시 하기')}</button></div><div class="course-feedback" role="status" id="feedback-${e.id}">${feedback(e,p)}</div></fieldset>`).join('')}</section>
      <section class="course-card"><h2>${t('Independent task','독립 과제')}</h2>${rich(lesson.transfer)}<label for="course-response">${t('Your original response or role-play notes','자신의 답이나 역할극 기록')}</label><textarea id="course-response" lang="tr">${esc(p.response || '')}</textarea><details><summary>${t('Model response and self-assessment','모델 답과 자기 평가')}</summary><p lang="tr">${esc(model(lesson))}</p><p>${t('Adapt the model to a new situation. For testimony, replace every detail with something true.','모델을 새로운 상황에 적용하세요. 간증은 모든 세부 사항을 실제 경험으로 바꾸세요.')}</p><p>${t('0 = not demonstrated; 1 = with support; 2 = independently adequate. Repeat any category below 2 in a new situation. This is a task rubric, not a spiritual rating.','0 = 수행 못함, 1 = 도움 필요, 2 = 독립적으로 적절함. 2 미만인 항목은 새 상황에서 반복하세요. 과제 평가이며 영적 점수가 아닙니다.')}</p></details>${(lesson.rubric||rubric).map(([en,ko],i) => `<label class="course-rubric" for="rubric-${i}">${t(en,ko)}<select id="rubric-${i}" data-rubric="${i}">${[0,1,2].map(n=>`<option value="${n}" ${Number(p.rubric[i] || 0)===n?'selected':''}>${n}</option>`).join('')}</select></label>`).join('')}<label class="course-choice"><input type="checkbox" id="course-independent" ${p.independent?'checked':''}>${t('I performed the task in a new situation without reading the model.','모델을 읽지 않고 새로운 상황에서 과제를 수행했습니다.')}</label><p>${t('Completion criterion: all guided items reviewed successfully, an original response, the independent task performed, and 2 in every rubric category. Completion is your reported task performance, not certified mastery.','완료 기준: 모든 안내 연습 성공/검토, 자신의 답, 독립 과제 수행과 모든 항목 2점. 완료는 자신의 수행 보고이며 인증된 숙달이 아닙니다.')}</p><button type="button" id="course-complete">${t('Check completion','완료 기준 확인')}</button><p role="status" id="course-completion-status"></p></section>
      <details class="course-card"><summary>${t('Sources and editorial status','출처와 편집 상태')}</summary><p>${t('Original editorial drafts; specialist Turkish and Korean review pending. Scripture references invite reading in context; no new published Bible text is reproduced.','원래 작성된 편집 초안이며 터키어와 한국어 전문가 검토가 필요합니다. 성경 장절은 문맥에서 읽도록 안내하며 새 출판 성경 본문은 복제하지 않습니다.')}</p>${sources.filter((_,i)=>i===0 ? current==='ministry-09' : i===1 ? current==='ministry-03' : i===2 ? current==='ministry-05' : true).map(([title,url])=>`<p><a href="${url}" target="_blank" rel="noopener">${esc(text(title))}</a></p>`).join('')}</details>
      <p class="course-note">${t('The proposed 32-lesson pathway is a roadmap; the implemented seminar units and ten practical lessons are listed in Learn.','제안된 32개 수업은 로드맵입니다. 구현된 세미나 수업과 열 실용 수업은 학습 메뉴에 있습니다.')}</p></article>`;
    bind(panel,lesson,p); renderNav(); window.decorateLesson?.(lesson,p);
  }
  function feedback(e,p) {
    const a=p.answers[e.id]; if (!a || a.checked===false) return '';
    return `<p>${a.correct ? t('Reviewed successfully.','성공적으로 검토했습니다.') : t('Try again. Read the reason before retrying.','다시 해 보세요. 이유를 읽고 재시도하세요.')}</p>${rich(e.answer)}${!e.choices ? `<label class="course-choice"><input type="checkbox" data-reviewed="${e.id}" ${a.correct?'checked':''}>${t('I compared my response and can explain why it works.','답을 비교했고 왜 적절한지 설명할 수 있습니다.')}</label>` : ''}`;
  }
  const models = ['Cumartesi görüşeceğiz. Doğru mu anladım?', 'Hoş bulduk. Şekersiz çay, lütfen. Şimdilik yeterli. Gelecek hafta uğrayabilir miyim?', "Ben Hristiyanım. İsa Mesih'in adıyla dua ediyorum. Dua etmem uygun olur mu? Tabii, anlıyorum.", "Göksel Babamız, Mehmet için sana dua ediyoruz. Ona güç ve esenlik ver. İsa Mesih'in adıyla dua ediyoruz. Size yemek getirmemi ister misiniz?", 'Eskiden gelecek hakkında kaygılanıyordum. Kutsal Kitap okumaya başladım. Hâlâ zor günlerim oluyor.', 'Bir adamın yüz koyunu vardı. Biri kayboldu. Adam onu aradı. Bulunca sevindi. Bu hikâyede sizi en çok ne etkiledi?', 'Tanrı bize hak etmediğimiz iyiliği gösterir. İyi işler sevgisine verdiğimiz karşılığın bir parçasıdır.', "Fiziksel bir ilişkiden söz etmiyoruz. İsa'nın Baba'yla eşsiz ilişkisini anlatıyoruz. Hristiyanlar İsa'nın ezelden beri var olan Oğul olduğuna inanır.", 'Bu el yazmasının tarihini şu anda bilmiyorum. Araştırıp size döneyim.', "İsterseniz birlikte gidebiliriz. Bizim topluluğumuzda dua ediyor ve Kutsal Kitap okuyoruz. Markos 1:1–8 okuyalım. Perşembe saat altıda görüşebilir miyiz?"];
  const model = l => l.model || models[EXPANDED_LESSONS.indexOf(l)];
  function wordPanel(l) {
    return `<details><summary>${t('Word clinic and reusable patterns','단어 분석과 재사용 문형')}</summary>${l.words.map(w=>`<div class="course-word"><h3 lang="tr">${esc(w.tr)}</h3><p>${t('Natural meaning','자연스러운 뜻')}: ${esc(text(w.meaning))}</p><p>${t('Suffix breakdown','접미사 분석')}: <code lang="tr">${esc(w.breakdown)}</code></p><p>${t('Literal gloss','직역')}: ${esc(text(w.literalGloss))}</p><p>${t('Role and contextual use','역할과 문맥')}: ${esc(text(w.role))}</p></div>`).join('')}<h3>${t('Reusable patterns','재사용 문형')}</h3>${l.patterns.map(p=>`<p lang="tr">${esc(p)}</p>`).join('')}</details>`;
  }
  function bind(panel,l,p) {
    if(l.track==='conversation'||l.track==='ministry')bindBranches(panel,l,p);
    panel.querySelector('#course-rate').value=String(audioEngine.playbackRate);
    const speak = str => { const out=document.getElementById('course-audio-status'); out.textContent=''; window.audioEngine.speakTurkish(str,Number(document.getElementById('course-rate').value),()=>out.textContent=t('Playing synthetic speech…','합성 음성 재생 중…'),()=>out.textContent=t('Speech ended.','음성 종료.')); };
    panel.querySelectorAll('[data-play]').forEach(b=>b.onclick=()=>speak(l.lines[Number(b.dataset.play)].tr.replace(/^[AB][12]?(?:, if declined)?:\s*/,'')));
    panel.querySelector('[data-play-all]').onclick=()=>speak(l.lines.map(x=>x.tr.replace(/^[AB][12]?(?:, if declined)?:\s*/,'')).join(' '));
    panel.querySelector('[data-stop]').onclick=()=>{ window.audioEngine.stopSpeaking(); document.getElementById('course-audio-status').textContent=t('Stopped.','정지했습니다.'); };
    const invalidate=id=>{delete p.answers[id];p.completed=false;panel.querySelector('#feedback-'+id).textContent='';panel.querySelector('#course-completion-status').textContent='';save();};
    panel.querySelectorAll('fieldset input[type=radio]').forEach(el=>el.onchange=()=>{invalidate(el.name);p.answers[el.name]={choice:Number(el.value),correct:false,checked:false};save();});
    panel.querySelectorAll('[data-draft]').forEach(el=>el.oninput=()=>{p.drafts[el.dataset.draft]=el.value;invalidate(el.dataset.draft);});
    panel.querySelectorAll('[data-check]').forEach(b=>b.onclick=()=>{
      const e=l.exercises[Number(b.dataset.check)];
      if (e.choices) { const chosen=panel.querySelector(`input[name="${e.id}"]:checked`); if(!chosen) {document.getElementById(`feedback-${e.id}`).textContent=t('Choose an answer first.','답을 먼저 선택하세요.');return;} const choice=Number(chosen.value); p.answers[e.id]={choice,correct:e.valid.includes(choice)}; }
      else { if(!p.drafts[e.id]?.trim()) {document.getElementById(`feedback-${e.id}`).textContent=t('Write or transcribe your response first.','먼저 답을 쓰거나 말한 내용을 적으세요.');return;} p.answers[e.id]={correct:false}; }
      p.practised=true; p.completed=false; save(); document.getElementById(`feedback-${e.id}`).innerHTML=feedback(e,p); bindReviews(panel,p); renderNav();
    });
    panel.querySelectorAll('[data-retry]').forEach(b=>b.onclick=()=>{const e=l.exercises[Number(b.dataset.retry)];invalidate(e.id);const field=panel.querySelector('#'+e.id);field.querySelectorAll('input[type=radio]').forEach(el=>el.checked=false);field.querySelector('input,textarea').focus();});
    bindReviews(panel,p);
    const invalidateCompletion=()=>{p.completed=false;panel.querySelector('#course-completion-status').textContent='';save();};
    panel.querySelector('#course-response').oninput=e=>{p.response=e.target.value;invalidateCompletion();};
    panel.querySelectorAll('[data-rubric]').forEach(el=>el.onchange=()=>{p.rubric[Number(el.dataset.rubric)]=Number(el.value);invalidateCompletion();});
    panel.querySelector('#course-independent').onchange=e=>{p.independent=e.target.checked;invalidateCompletion();};
    panel.querySelector('#course-complete').onclick=()=>{
      const ok=l.exercises.every(e=>p.answers[e.id]?.correct===true&&(e.choices?e.valid.includes(p.answers[e.id].choice):!!p.drafts[e.id]?.trim())) && !!p.response?.trim() && p.independent && rubric.every((_,i)=>p.rubric[i]===2);
      p.completed=!!ok; save();renderNav();panel.querySelector('#course-completion-status').textContent=ok ? t('Completed on your self-assessment. Revisit the task to retain it.','자기 평가에 따라 완료했습니다. 복습하세요.') : t('Keep practising: review every guided answer, add an original response, perform the independent task, and assess every category at 2.','계속 연습하세요. 모든 답을 검토하고 자신의 답을 쓰고 독립 과제를 수행하며 모든 항목에서 2를 충족하세요.');
    };
  }
  function bindReviews(panel,p) { panel.querySelectorAll('[data-reviewed]').forEach(el=>el.onchange=()=>{p.answers[el.dataset.reviewed].correct=el.checked;p.completed=false;save();}); }
  function bindBranches(panel,l,p) {
    const branchData={
      clarify:{prompt:'Ne demek istiyorsunuz? Biraz daha açıklar mısınız?',translation:{en:'What do you mean? Could you explain a little more?',ko:'무슨 뜻인가요? 조금 더 설명해 주시겠어요?'},answers:['Tabii. Hangi kelimeyi açıklamamı istersiniz?','Bunu herkes bilir.'],translations:[{en:'Of course. Which word would you like me to explain?',ko:'네. 어떤 단어를 설명해 드릴까요?'},{en:'Everyone knows this.',ko:'이건 누구나 알아요.'}],reason:{en:'Ask which word or idea needs explanation, then use simpler Turkish. The second reply dismisses the request.',ko:'어떤 단어나 생각이 설명이 필요한지 물은 뒤 쉬운 터키어를 쓰세요. 두 번째 답은 요청을 무시합니다.'}},
      accept:{prompt:'Evet, konuşabiliriz.',translation:{en:'Yes, we can talk.',ko:'네, 이야기할 수 있어요.'},answers:['Memnuniyetle. Önce sizin sorularınızı dinleyeyim.','O zaman benimle aynı fikirde olduğunuz kesin.'],translations:[{en:'Gladly. Let me first listen to your questions.',ko:'기꺼이요. 먼저 질문을 들어 볼게요.'},{en:'Then you certainly agree with me.',ko:'그러면 저와 생각이 같은 게 확실하네요.'}],reason:{en:'Acceptance of a conversation is not agreement with a doctrine. Listening keeps the next step connected to the actual person.',ko:'대화 수락은 교리에 동의한다는 뜻이 아닙니다. 들어야 실제 상대에게 맞는 다음 걸음을 정할 수 있습니다.'}},
      uncertain:{prompt:'Bu konuda emin değilim.',translation:{en:'I am not sure about this.',ko:'이것에 관해 확신이 없어요.'},answers:['Hangi konuda emin değilsiniz? Birlikte araştırabiliriz.','Hiç soru sormadan kabul etmelisiniz.'],translations:[{en:'What are you unsure about? We can research it together.',ko:'어떤 점이 확실하지 않으세요? 함께 조사할 수 있어요.'},{en:'You must accept it without asking questions.',ko:'질문 없이 받아들여야 해요.'}],reason:{en:'Clarify the uncertainty. If you also do not know, say so and make a real research plan. Unsupported certainty is not competence.',ko:'불확실한 점을 확인하세요. 자신도 모르면 인정하고 실제 조사 계획을 세우세요. 근거 없는 확신은 역량이 아닙니다.'}},
      refuse:{prompt:'Teşekkür ederim, ama istemiyorum.',translation:{en:'Thank you, but I do not want that.',ko:'감사합니다. 하지만 원하지 않아요.'},answers:['Tabii, anlıyorum.','Hayır, devam etmeliyiz.'],translations:[{en:'Of course, I understand.',ko:'네, 이해합니다.'},{en:'No, we must continue.',ko:'아니요, 계속해야 해요.'}],reason:{en:'Acknowledge refusal without pressure. You can continue ordinary care if welcome. Refusal is a legitimate conversation outcome.',ko:'압박 없이 거절을 인정하세요. 상대가 원한다면 일상 돌봄을 이어 갈 수 있습니다. 거절은 정당한 대화 결과입니다.'}}
    };
    const section=document.createElement('section');section.className='course-card';section.id='branch-practice';
    const independent=panel.querySelector('#course-response').closest('section');independent.before(section);
    const options={clarify:t('Clarification','의미 확인'),accept:t('Acceptance','수락'),uncertain:t('Uncertainty','불확실성'),refuse:t('Refusal','거절')};
    let type=Object.hasOwn(branchData,p.branchType)?p.branchType:'clarify';
    section.innerHTML=`<h2>${t('Role-play branches','역할극 분기')}</h2><p>${t('Try each partner response in this lesson’s situation. This rehearsal supports the independent task; it does not score belief or conversion.','이 수업 상황에서 상대의 각 답에 응답해 보세요. 독립 과제를 위한 연습이며 믿음이나 회심을 채점하지 않습니다.')}</p><label for="${l.id}-branch-type">${t('Partner response','상대의 답')}</label><select id="${l.id}-branch-type">${Object.entries(options).map(([key,label])=>`<option value="${key}" ${type===key?'selected':''}>${label}</option>`).join('')}</select><div id="branch-dialogue"></div>`;
    const draw=()=>{
      const b=branchData[type],saved=p.branches?.[type];
      section.querySelector('#branch-dialogue').innerHTML=`<p lang="tr">${esc(b.prompt)}</p><p>${esc(text(b.translation))}</p>${b.answers.map((tr,i)=>`<button type="button" class="course-branch-answer" data-branch-answer="${i}" id="${l.id}-branch-${type}-${i}"><span lang="tr">${esc(tr)}</span><br><small>${esc(text(b.translations[i]))}</small></button>`).join('')}<div role="status" id="branch-feedback">${saved!==undefined ? `<p>${saved===0?t('Appropriate response.','적절한 답입니다.'):t('Review this response.','이 답을 검토하세요.')}</p>${rich(b.reason)}`:''}</div>`;
      section.querySelectorAll('[data-branch-answer]').forEach(button=>button.onclick=()=>{p.branches ||= {};p.branches[type]=Number(button.dataset.branchAnswer);p.practised=true;save();draw();section.querySelector('#branch-feedback').setAttribute('tabindex','-1');section.querySelector('#branch-feedback').focus({preventScroll:true});renderNav();});
    };
    section.querySelector('select').onchange=e=>{type=e.target.value;p.branchType=type;save();draw();};draw();
  }
  window.course = {get language(){return language;},setLanguage(lang){language=lang==='ko'?'ko':'en';learningStore.set('spiritual_turkish_language',language);document.documentElement.lang=language;window.applyTeachingLanguage?.();renderNav();},text,t,progress,entry,status,save,select(id){current=id;if(ALL_LESSONS.some(l=>l.id===id)){entry(id).visited=true;save();render();}else renderNav();},render};
  document.addEventListener('DOMContentLoaded',()=>{
    const nav=document.createElement('div');nav.id='expanded-nav';document.getElementById('curriculum-nav').prepend(nav);
    const section=document.createElement('div');section.id='section-ch7';section.className='lesson-section hidden';document.getElementById('main-canvas').prepend(section);
    const tools=document.createElement('div');tools.className='course-language';tools.innerHTML=`<label for="teaching-language">Teaching language / 학습 언어</label><select id="teaching-language"><option value="en">English</option><option value="ko">한국어</option></select><p id="course-storage-status" role="status"></p>`;document.getElementById('curriculum-nav').before(tools);
    const selector=tools.querySelector('select');selector.value=language;
    selector.onchange=()=>{language=selector.value;try{learningStore.set('spiritual_turkish_language',language);}catch{}document.documentElement.lang=language;window.applyTeachingLanguage?.();renderNav();if(current)window.selectLesson(current);};
    document.documentElement.lang=language;renderNav();
  });
})();
