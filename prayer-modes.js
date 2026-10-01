/* Explicitly authored compatible variants: no automatic replacement of personal prayers. */
(() => {
  const B=(en,ko)=>({en,ko});
  const modes={
    'Father-singular':{label:B('Father · I','아버지 · 나'),parts:[['Göksel Babam,','My heavenly Father,','하늘에 계신 아버지,'],['Senin sevgin ve sadakatin sonsuzdur.','Your love and faithfulness are endless.','주님의 사랑과 신실함은 영원합니다.'],['Oğlun İsa Mesih için sana şükrediyorum.','I thank you for your Son Jesus Christ.','아들 예수 그리스도를 주셔서 감사합니다.'],['Beni bağışla ve bana temiz bir yürek ver.','Forgive me and give me a clean heart.','저를 용서하시고 깨끗한 마음을 주세요.'],['Bana insanları sevgiyle dinleme gücü ver.','Give me strength to listen to people with love.','사람을 사랑으로 들을 힘을 주세요.'],['İsa Mesih’in adıyla dua ediyorum. Amin.','I pray in Jesus Christ’s name. Amen.','예수 그리스도의 이름으로 기도합니다. 아멘.']]},
    'Father-plural':{label:B('Father · we','아버지 · 우리'),parts:[['Göksel Babamız,','Our heavenly Father,','하늘에 계신 우리 아버지,'],['Senin sevgin ve sadakatin sonsuzdur.','Your love and faithfulness are endless.','주님의 사랑과 신실함은 영원합니다.'],['Oğlun İsa Mesih için sana şükrediyoruz.','We thank you for your Son Jesus Christ.','아들 예수 그리스도를 주셔서 감사합니다.'],['Bizi bağışla ve bize temiz yürekler ver.','Forgive us and give us clean hearts.','우리를 용서하시고 깨끗한 마음을 주세요.'],['Bize insanları sevgiyle dinleme gücü ver.','Give us strength to listen to people with love.','사람을 사랑으로 들을 힘을 주세요.'],['İsa Mesih’in adıyla dua ediyoruz. Amin.','We pray in Jesus Christ’s name. Amen.','예수 그리스도의 이름으로 기도합니다. 아멘.']]},
    'Jesus-singular':{label:B('Jesus · I','예수님 · 나'),parts:[['Rab İsa,','Lord Jesus,','주 예수님,'],['Sen benim Rabbim ve Kurtarıcımsın.','You are my Lord and Saviour.','주님은 제 주님과 구세주입니다.'],['Benim için verdiğin can için sana şükrediyorum.','I thank you for the life you gave for me.','저를 위해 주신 생명에 감사합니다.'],['Beni bağışla ve bana temiz bir yürek ver.','Forgive me and give me a clean heart.','저를 용서하시고 깨끗한 마음을 주세요.'],['Sana sadık kalmama yardım et.','Help me remain faithful to you.','주님께 신실하게 남도록 도와주세요.'],['Sana güvenerek dua ediyorum. Amin.','I pray trusting you. Amen.','주님을 신뢰하며 기도합니다. 아멘.']]},
    'Jesus-plural':{label:B('Jesus · we','예수님 · 우리'),parts:[['Rab İsa,','Lord Jesus,','주 예수님,'],['Sen bizim Rabbimiz ve Kurtarıcımızsın.','You are our Lord and Saviour.','주님은 우리의 주님과 구세주입니다.'],['Bizim için verdiğin can için sana şükrediyoruz.','We thank you for the life you gave for us.','우리를 위해 주신 생명에 감사합니다.'],['Bizi bağışla ve bize temiz yürekler ver.','Forgive us and give us clean hearts.','우리를 용서하시고 깨끗한 마음을 주세요.'],['Sana sadık kalmamıza yardım et.','Help us remain faithful to you.','주님께 신실하게 남도록 도와주세요.'],['Sana güvenerek dua ediyoruz. Amin.','We pray trusting you. Amen.','주님을 신뢰하며 기도합니다. 아멘.']]}
  };
  window.PRAYER_MODES=modes;
  window.applyPrayerMode=(id,replaceDraft=false)=>{
    const m=modes[id]||modes['Father-singular'];const [addressee,speaker]=id.split('-');
    const base=JSON.parse(JSON.stringify(course.language==='en'?LEGACY_EN.prayer:LEGACY_KO.prayer));
    if(id!=='Father-singular')base.steps.forEach((step,i)=>{step.options=[{tr:m.parts[i][0],ko:m.parts[i][course.language==='en'?1:2],addressee,speaker}];step.desc=course.t('Compatible model blocks for the selected addressee and speaker.','선택한 기도 대상·화자에 맞는 모델 블록입니다.');});
    base.presets=id==='Father-singular'?base.presets:[{title:course.text(m.label),desc:course.t('Six compatible stages. Editing is voluntary.','일관된 여섯 단계이며 수정은 자유롭습니다.'),parts:m.parts.map(p=>p[0])}];
    const draft=document.getElementById('assembled-tr-textarea')?.value;
    APP_DATA.prayer=base;window.refreshTeachingContent?.();
    if(!replaceDraft&&draft!==undefined)document.getElementById('assembled-tr-textarea').value=draft;
    if(replaceDraft)window.loadPrayerPreset(0);
  };
})();
