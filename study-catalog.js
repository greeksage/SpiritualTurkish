/* Authored course order. Source records stay separate from learner navigation. */
(() => {
  const B=(en,ko)=>({en,ko});
  const chapter=(en,ko,ids)=>({title:B(en,ko),lessons:ids.split(' ')});
  const definitions=[
    ['foundation','Learn to find, read and explain biblical Turkish.','성경 터키어를 찾고 읽고 설명합니다.',[
      chapter('Finding references and names','장절과 이름 찾기','foundation-references foundation-books foundation-names'),
      chapter('Vocabulary and grammar','어휘와 문법','foundation-church foundation-vowel-loss foundation-voice foundation-fidye'),
      chapter('Reading and application','읽기와 적용','foundation-blessings foundation-stories foundation-narrative foundation-salvation-reading foundation-discipleship-reading')]],
    ['prayer','Build coherent prayers and use them with care.','일관된 기도를 만들고 배려하며 사용합니다.',[
      chapter('Prayer foundations','기도의 기초','prayer-six-stages prayer-requests'),
      chapter('Eight situations','여덟 상황','prayer-worship prayer-offering prayer-new-believer prayer-return prayer-illness prayer-hardship prayer-meal prayer-turkey'),
      chapter('A personal response of faith','개인적인 신앙 응답','prayer-faith-response'),
      chapter('Read, reflect and pray','읽고 묵상하고 기도하기','prayer-daily-23 prayer-daily-24 prayer-daily-25 prayer-daily-26 prayer-daily-27 prayer-daily-28 prayer-daily-29 prayer-daily-30 prayer-daily-31 prayer-daily-32 prayer-daily-33'),
      chapter('Extended teaching models','긴 학습 모델','prayer-model-1 prayer-model-2 prayer-model-3 prayer-model-4 prayer-model-5 prayer-model-6 prayer-model-7 prayer-model-8 prayer-model-9 prayer-model-10'),
      chapter('Reading a psalm','시편 읽기','prayer-psalms')]],
    ['conversation','Rehearse faith conversations with respectful replies.','존중하는 응답으로 신앙 대화를 연습합니다.',[
      chapter('Seven conversation scenarios','일곱 대화 상황','conversation-scenario-1 conversation-scenario-2 conversation-scenario-3 conversation-scenario-4 conversation-scenario-5 conversation-scenario-6 conversation-scenario-7')]],
    ['din','Understand religious language in its stated context.','종교 언어를 제시된 문맥에서 이해합니다.',[
      chapter('Expressions and conduct','표현과 행동','din-greetings din-conduct din-rights din-honorifics'),
      chapter('Attributed beliefs','출처가 명시된 믿음','din-beliefs din-afterlife din-decree'),
      chapter('Practices and evaluating sources','관행과 출처 평가','din-practices din-source-literacy')]],
    ['spelling','Write names, sentences and numbers clearly.','이름·문장·숫자를 정확하게 씁니다.',[
      chapter('Names, apostrophes and consonants','이름·아포스트로피·자음','spelling-capitals spelling-apostrophe spelling-clusters'),
      chapter('Compounds, dates and numbers','합성어·날짜·숫자','spelling-institutions spelling-dates-places spelling-numbers')]],
    ['ministry','Use Turkish in everyday ministry and honest discussion.','일상 사역과 정직한 대화에서 터키어를 사용합니다.',[
      chapter('Everyday conversation and prayer','일상 대화와 기도','ministry-01 ministry-02 ministry-03 ministry-04'),
      chapter('Testimony and faith discussion','간증과 신앙 대화','ministry-05 ministry-06 ministry-07 ministry-08'),
      chapter('Uncertainty and next steps','불확실성과 다음 단계','ministry-09 ministry-10')]]
  ];
  const courses=definitions.map(([id,en,ko,chapters])=>({id,title:SEMINAR.sources.find(s=>s.id===id)?.title||B('Practical ministry conversations','실제 사역 대화'),purpose:B(en,ko),chapters:chapters.map((c,i)=>({...c,id:`${id}-chapter-${i+1}`})),lessons:chapters.flatMap(c=>c.lessons)}));
  const lesson=id=>ALL_LESSONS.find(l=>l.id===id);
  const forLesson=id=>courses.find(c=>c.lessons.includes(id));
  const validResume=r=>!!r&&!!lesson(r.id)&&['read','understand','practise','use'].includes(r.section);
  window.studyCatalog={courses,lesson,forLesson,validResume,first:'foundation-references',chapterFor:id=>forLesson(id)?.chapters.find(c=>c.lessons.includes(id)),neighbour(id,offset){const c=forLesson(id);return c?.lessons[c.lessons.indexOf(id)+offset]||null;}};
})();
