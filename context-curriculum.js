/* Contextual adaptations; source positions are attributed, never universalised. */
(() => {
  const {B,line,vocab,clinic,make,q,lessons}=SEMINAR_BUILD;
  const scenarios=LEGACY_EN.simulator.scenarios;
  const scenarioPages=[[2,3],[5,6,7,8],[4,9,10,11,12],[13],[14,15,16],[17,18,19],[20,21,22,23]];
  const scenarioTeaching=[
    ['Explain an illustration without treating it as proof.','비유를 증거로 취급하지 않고 설명합니다.','Gibi compares things; it does not make the comparison literal. -diğimizde means when we … . Ask whether the partner finds the circle image useful. A hand-drawn circle can be approximate: the illustration is about the source’s Christian explanation of assurance, not a mathematical proof.','gibi는 비교이며 문자적 동일성이 아닙니다. -diğimizde는 “우리가 ~할 때”입니다. 원 비유가 도움이 되는지 물으세요. 손으로 그린 원은 근사할 수 있습니다. 이 비유는 구원 확신의 기독교 설명이지 수학 증거가 아닙니다.'],
    ['Discuss manuscripts honestly and distinguish calendar convention from personal belief.','사본을 정직하게 나누고 달력 관례와 개인 믿음을 구별합니다.','El yazması is manuscript; çeviri is translation; metin is text. The source’s numerical manuscript/99.5% claims lack defined scope and are not retained. Variants exist; describe categories and investigate a specific manuscript rather than asserting there are no questions. A calendar era is a convention and neither proves a person’s religion nor dates Jesus’ birth to January 1. Bilmiyorum and araştırıp döneyim are appropriate research responses.','el yazması는 사본, çeviri는 번역, metin은 본문입니다. 자료의 사본 수·99.5% 주장은 범위가 정의되지 않아 유지하지 않습니다. 이문이 존재하므로 유형과 특정 사본을 조사하며 질문이 전혀 없다고 단정하지 않습니다. 달력 연대는 관례이며 개인 종교나 예수의 1월 1일 출생을 증명하지 않습니다. bilmiyorum·araştırıp döneyim은 적절한 조사 응답입니다.'],
    ['Explain grace without assuming the partner uses a single “scales” model.','상대가 하나의 저울 관점을 가진다고 가정하지 않고 은혜를 설명합니다.','The scales image is the seminar’s illustration. Ask the partner what they actually believe. Hak etmek is deserve; karşılık is response or return. Christian grace is explained as freely given, while good works are described as a response rather than the purchase price of salvation. This is evangelical doctrine, separate from a literal dictionary definition of lütuf.','저울은 자료의 비유입니다. 상대가 실제로 믿는 것을 물으세요. hak etmek은 자격이 있다, karşılık은 응답·보답입니다. 은혜는 거저 주어지며 선행은 구원 구입 비용이 아니라 응답으로 설명합니다. 이는 복음주의 교리이며 lütuf의 문자적 사전 정의와 구별합니다.'],
    ['Distinguish Christmas from New Year without inferring anyone’s faith from celebration.','축하에서 신앙을 추측하지 않고 성탄과 새해를 구별합니다.','Noel refers to Christmas; yılbaşı is the new year. -den farklı is different from. Contemporary customs vary: ask about this person’s observance. Do not claim that celebrating New Year means someone worships Jesus or that using a calendar expresses Christian faith.','Noel은 성탄, yılbaşı는 새해입니다. -den farklı는 ~와 다릅니다. 현대 관습은 달라 개인에게 물으세요. 새해 축하나 달력 사용이 예수 경배 또는 기독교 신앙을 뜻한다고 주장하지 않습니다.'],
    ['Listen to distress and offer consent-based support.','고통을 듣고 동의를 묻는 도움을 제안합니다.','Dinlemek takes an object; isterseniz makes an offer conditional on consent. The seminar’s suffering example is adapted to avoid promising immediate relief through conversion. Ask what support is wanted. Threats or abuse warrant appropriate local help, not argument about another person’s spiritual inadequacy.','dinlemek은 목적어를 취하며 isterseniz는 동의에 따른 제안입니다. 자료의 고통 예를 회심으로 즉시 해결된다고 약속하지 않게 편집했습니다. 어떤 도움이 필요한지 묻습니다. 위협·학대에는 적절한 현지 도움이 필요하며 영적 부족에 대한 논쟁이 아닙니다.'],
    ['Use the banknote as an illustration of value, not evidence or a price for a person.','지폐를 가치의 비유로 사용하며 사람의 가격이나 증거로 삼지 않습니다.','Değer can mean value or worth; değerli is valuable. The banknote illustration describes Christian conviction about human worth. Market gold prices and the watermarked photograph are not reused. No person’s value is calculated from a currency amount, and the illustration does not establish a historical claim.','değer는 가치, değerli는 소중한입니다. 지폐 비유는 인간 가치의 기독교 확신을 설명합니다. 시장 금값과 워터마크 사진은 재사용하지 않습니다. 사람의 가치를 돈으로 계산하거나 비유로 역사 사실을 증명하지 않습니다.'],
    ['Explain the five-colour illustration and invite questions.','다섯 색 비유를 설명하고 질문을 초대합니다.','Colours belong to an evangelistic illustration, not a Bible quotation. Siyah, kırmızı, beyaz, altın/sarı and yeşil are symbolic associations in the seminar’s wordless-book model. Avoid identifying skin colour with sin or reducing God to only two qualities. Ask what the partner understands, clarify the symbols and accept refusal.','색은 전도 비유이며 성경 인용이 아닙니다. 검정·빨강·흰색·금색/노랑·초록은 자료의 말없는 책 상징입니다. 피부색을 죄와 동일시하거나 하나님을 두 속성으로만 줄이지 않습니다. 상대가 이해한 것을 묻고 상징을 확인하며 거절을 수용합니다.']
  ];
  scenarios.forEach((s,i)=>{
    const ko=LEGACY_KO.simulator.scenarios[i];
    const reading=[];
    s.steps.forEach((step,j)=>{
      reading.push(line(step.npcSpeech,step.npcSpeechKo,ko.steps[j].npcSpeechKo));
      const answer=step.choices.find(c=>c.feedbackType==='best');
      const answerKo=ko.steps[j].choices.find(c=>c.id===answer.id);
      reading.push(line(answer.text,answer.korean,answerKo.korean));
    });
    const [objE,objK,exE,exK]=scenarioTeaching[i];
    const l=make('conversation',`scenario-${i+1}`,scenarioPages[i],[s.title,ko.title],[objE,objK],reading,[exE,exK],
      ['Bu bir benzetme, kanıt değil.','Bunu nasıl anlıyorsunuz?','Bilmiyorum; araştırıp size döneyim.'],
      q('Which response respects both evidence and the partner?','어떤 응답이 증거와 상대를 모두 존중하나요?',['Clarify, explain the source’s Christian position and admit uncertainty where needed.','확인하고 자료의 기독교 입장을 설명하며 필요할 때 불확실성을 인정합니다.'],['Insist that the illustration proves the claim and continue after refusal.','비유가 주장을 증명한다고 고집하며 거절 뒤에도 계속합니다.'],exE,exK),
      ['Role-play this conversation with a new partner question. Try clarification, agreement, uncertainty and refusal; explain why your response fits the actual reply.','새 상대 질문으로 역할극을 하세요. 확인·수락·불확실성·거절을 연습하고 실제 답에 맞는 이유를 설명하세요.']);
    l.practiceLink=`ch2-${i+1}`;
  });
  const dinUnits=[
    ['greetings',[2,10,11],'Greetings and everyday expressions','인사와 일상 표현','Recognise religious expressions without assuming the speaker’s identity.','종교 표현을 알아보며 화자의 정체성을 가정하지 않습니다.',[
      line('Selamünaleyküm. Aleykümselam.','Peace be upon you. And upon you peace (conventional greeting and reply).','평안이 있기를. 당신께도 평안이 (관례적 인사와 응답).'),
      line('Allah razı olsun. Maşallah.','May God be pleased with you. Maşallah (an expression of appreciation or admiration).','하나님이 기뻐하시기를. 마샬라 (감사·감탄 표현).'),
      line('Bu ifadeyi hangi durumlarda kullanıyorsunuz?','In which situations do you use this expression?','이 표현을 어떤 상황에서 사용하세요?')],
      'Conventional expressions may be used with different intentions. Selam is peace/greeting, not proof of one person’s religious commitment. Maşallah is an Arabic-derived formula, not literally the English word “beautiful.” Learn the response and ask about local usage. Formal dictionary spelling can differ from the separated transliteration shown in the slide.',
      '관례 표현의 의도는 다양합니다. selam은 평안·인사이며 개인의 종교 헌신 증명이 아닙니다. Maşallah는 아랍어 유래 표현으로 문자적으로 “아름답다”가 아닙니다. 응답을 배우고 현지 용법을 물으세요. 사전 철자는 자료의 분리 음역과 다를 수 있습니다.',
      'selam|peace / greeting|평안 / 인사\nAllah razı olsun|may God be pleased (thanks in context)|하나님이 기뻐하시기를 (문맥상 감사)\nMaşallah|conventional appreciation / admiration|관례적 감사 / 감탄'],
    ['conduct',[3,4,5,8,9,10,11],'Sevap, günah, helal and haram','Sevap·günah·helal·haram','Explain the textbook’s moral vocabulary in its attributed context.','교과서의 도덕 어휘를 출처 문맥에서 설명합니다.',[
      line('Bu kaynakta sevap ve günah nasıl açıklanıyor?','How does this source explain sevap and günah?','이 자료는 sevap과 günah를 어떻게 설명하나요?'),
      line('Helal, izin verilen; haram, yasaklanan anlamında kullanılıyor.','Helal is used for permitted; haram for prohibited.','helal은 허용된, haram은 금지된 뜻으로 사용됩니다.'),
      line('Allah’ın rızası ifadesi Tanrı’nın hoşnutluğunu anlatır.','The expression Allah’ın rızası describes God’s approval.','Allah’ın rızası는 하나님의 기뻐하심을 나타냅니다.')],
      'The slides describe religious categories of conduct, not a measurement of every Turkish person. Sevap can refer to merit/reward associated with a good deed, rather than every use of kindness. Günah is sin. Helal/haram are permission categories in the cited religious context; everyday extended uses also occur. -an/-en forms in izin verilen and yasaklanan describe what is permitted or prohibited. Ask for a concrete example and distinguish describing the source from personally issuing a ruling.',
      '화면은 종교적 행위 범주를 설명하며 모든 터키인의 측정이 아닙니다. sevap은 선행의 공덕·보상을 뜻할 수 있어 모든 친절과 같지 않습니다. günah는 죄입니다. helal/haram은 인용된 종교 문맥의 허용 범주이며 일상 확장 용법도 있습니다. izin verilen·yasaklanan의 -an/-en은 허용·금지된 것을 수식합니다. 구체적 예를 묻고 출처 설명과 개인 판정을 구별하세요.',
      'sevap|merit / reward associated with a good deed|선행 관련 공덕 / 보상\ngünah|sin|죄\nhelal|permitted in the religious context|종교 문맥에서 허용된\nharam|prohibited in the religious context|종교 문맥에서 금지된\nrıza|approval / consent|기뻐함 / 동의'],
    ['rights',[6,7],'Kul hakkı and making things right','Kul hakkı와 회복','Understand another person’s rights and clarify a forgiveness expression.','다른 사람의 권리를 이해하고 용서 표현을 확인합니다.',[
      line('Başkasının hakkını gözetmek önemlidir.','It is important to respect another person’s rights.','다른 사람의 권리를 존중하는 것이 중요합니다.'),
      line('Kuruyemişten aldım. Hakkınızı helal eder misiniz?','I took some nuts. Would you forgive / release your claim concerning it?','견과를 먹었습니다. 용서해 주시겠어요?'),
      line('Önce izin istemek daha doğru olurdu.','It would have been more appropriate to ask permission first.','먼저 허락을 구하는 것이 더 적절했을 것입니다.'),
      line('Zarar verdiysem nasıl telafi edebilirim?','If I caused harm, how can I make it right?','피해를 주었다면 어떻게 보상할 수 있나요?')],
      'The source’s “Helal olsun” story concerns taking nuts and asking forgiveness. This adaptation preserves permission and restitution without reproducing the third-party illustration. Kul hakkı concerns rights owed to other people; do not claim that merely saying a formula automatically repairs harm. Diyanet’s discussion includes repentance and restoring rights where possible. Hakkınızı = hak + k + ınız + ı: your right as object, with consonant doubling. Helal etmek here is an idiomatic release/forgive expression, not granting every religious permission.',
      '자료의 “Helal olsun” 이야기는 견과를 먹고 용서를 구하는 상황입니다. 삽화를 복제하지 않고 허락·회복을 유지했습니다. kul hakkı는 다른 사람에 대한 권리이며 공식 말만으로 피해가 자동 회복된다고 하지 않습니다. Diyanet 설명에는 회개와 가능한 권리 회복이 있습니다. hakkınızı는 hak+k+ınız+ı, “여러분의 권리를”로 자음이 겹칩니다. helal etmek은 여기서 용서·권리 포기의 관용 표현이지 모든 종교 허가가 아닙니다.',
      'kul hakkı|rights owed to other people|다른 사람의 권리\ntelafi etmek|make up for / repair harm|보상하다 / 피해를 회복하다|verb\nizin istemek|ask permission|허락을 구하다|verb'],
    ['honorifics',[12],'Honorifics and abbreviations','존칭과 약자','Recognise devotional abbreviations and explain them as source conventions.','경건 약자를 알아보고 출처의 관례로 설명합니다.',[
      line('Hz. kısaltması Hazreti demektir.','Hz. abbreviates Hazreti, an honorific.','Hz.는 존칭 Hazreti의 약자입니다.'),
      line('a.s. ifadesi aleyhisselam için kullanılır.','a.s. is used for aleyhisselam (peace be upon him).','a.s.는 aleyhisselam (그에게 평안이)의 약자입니다.'),
      line('Bu kısaltmaların hepsi aynı işlevde değil.','These abbreviations do not all have the same function.','이 약자들은 모두 같은 기능이 아닙니다.')],
      'The source lists Hz. (Hazreti), a.s. (aleyhisselam), c.c. (celle celalühü), r.a. (radıyallahu anh) and s.a.v. (sallallahu aleyhi ve sellem). These are honorific/devotional conventions with different referents: c.c. accompanies God; r.a. asks God’s pleasure upon a person; s.a.v. is used with Muhammad. Salat can mean prayer/blessing in this context, not only the daily ritual namaz. Recognition does not require the learner to adopt the formula as their own confession.',
      '자료는 Hz.(Hazreti), a.s.(aleyhisselam), c.c.(celle celalühü), r.a.(radıyallahu anh), s.a.v.(sallallahu aleyhi ve sellem)를 나열합니다. 대상이 다른 존칭·경건 관례로 c.c.는 하나님, r.a.는 사람에게 하나님의 기쁨을 구하며 s.a.v.는 무함마드와 사용됩니다. salat는 여기서 기도·축복이며 일상 의례 namaz만은 아닙니다. 알아보는 것과 개인 신앙으로 채택하는 것은 다릅니다.',
      'Hazreti|honorific title|존칭\naleyhisselam|peace be upon him|그에게 평안이\ncelle celalühü|may His majesty be exalted|그 위엄이 높임 받으시길\nradıyallahu anh|may God be pleased with him|하나님이 그를 기뻐하시길\nsallallahu aleyhi ve sellem|blessing and peace formula used with Muhammad|무함마드에게 사용하는 축복·평안 표현\nsalat|prayer / blessing in context|문맥상 기도 / 축복'],
    ['beliefs',[13,14,15,16,17,18,31],'The source’s six articles of belief','자료의 여섯 믿음 항목','Describe the listed categories and ask about a person’s understanding.','목록의 범주를 설명하고 개인의 이해를 묻습니다.',[
      line('Bu ders kitabı altı iman esasını sıralıyor.','This textbook lists six articles of belief.','이 교과서는 여섯 믿음 항목을 나열합니다.'),
      line('Allah’a, meleklere, kitaplara, peygamberlere, ahirete ve kadere iman.','Belief in God, angels, books, prophets, the afterlife and divine decree.','하나님·천사·경전·선지자·내세·예정에 대한 믿음입니다.'),
      line('Siz bu ifadeyi nasıl anlıyorsunuz?','How do you understand this expression?','이 표현을 어떻게 이해하세요?')],
      'İman etmek takes a dative target: Allah’a, melekler-e. The source describes a common Islamic teaching framework; it does not report every person’s views. It names Cebrail, Mikail, İsrafil and Azrail in a traditional angel-role table and associates Tevrat/Musa, Zebur/Davut, İncil/İsa and Kur’an/Muhammed in its book/prophet table. Christian categories should be explained separately. A textbook claim about an unchanged book is attributed belief, not independent manuscript evidence. Do not collapse the Bible’s genre and canon into a one-book-per-prophet model.',
      'iman etmek은 Allah’a·melekler-e 같은 여격을 취합니다. 자료는 흔한 이슬람 교육 틀이며 모든 개인의 관점을 보고하지 않습니다. 전통 천사 역할 표에 Cebrail·Mikail·İsrafil·Azrail, 경전·선지자 표에 Tevrat/모세·Zebur/다윗·İncil/예수·Kur’an/무함마드를 제시합니다. 기독교 범주는 따로 설명하세요. 경전이 변경되지 않았다는 교과서 주장은 귀속된 믿음이지 독립 사본 증거가 아닙니다. 성경의 장르와 정경을 선지자 한 명당 책 하나로 줄이지 않습니다.',
      'iman|faith / belief|믿음\nmelek|angel|천사\npeygamber|prophet|선지자\nahiret|afterlife|내세\nkader|divine decree / destiny in context|문맥상 예정 / 운명\nCebrail|Gabriel|가브리엘|name\nMikail|Michael|미카엘|name\nİsrafil|Israfil (Islamic tradition)|이슬람 전통의 이스라필|name\nAzrail|Azrail (Islamic tradition)|이슬람 전통의 아즈라일|name\nKur’an|Qur’an|꾸란|name\nMuhammed|Muhammad|무함마드|name'],
    ['afterlife',[19,20],'Afterlife vocabulary as attributed teaching','출처를 밝힌 내세 어휘','Recognise the stages in the diagram without using them to stereotype or frighten a partner.','도표의 단계를 알아보되 상대를 고정관념으로 묶거나 겁주지 않습니다.',[
      line('Bu şema dünya hayatı ile ahiret kavramlarını ayırıyor.','This diagram separates earthly life and afterlife concepts.','이 도표는 현세와 내세 개념을 구별합니다.'),
      line('Berzah, kıyamet, diriliş, mahşer, mizan ve sırat burada sıralanmış.','Berzah, the end/resurrection event, resurrection, gathering, scales and the bridge are listed here.','여기에는 중간 상태·종말·부활·모임·저울·다리가 나열되어 있습니다.'),
      line('Bu konuda hangi sorularınız var?','What questions do you have about this?','이것에 대해 어떤 질문이 있으세요?')],
      'The source diagram presents an Islamic educational account: dünya hayatı, berzah, kıyamet, resurrection, gathering/judgement, mizan, sırat and heaven/hell. Categories overlap and are not a universal psychological sequence for all Muslims. Christian resurrection and judgement teaching should be stated as Christian doctrine, not as a dictionary translation of each Islamic term. Korku is fear, but frightening imagery is not needed to learn these words; the source images are not reproduced.',
      '자료 도표는 이슬람 교육 설명으로 현세·중간 상태·종말·부활·모임/심판·저울·다리·천국/지옥을 제시합니다. 범주가 겹치며 모든 무슬림의 심리 순서가 아닙니다. 기독교 부활·심판은 기독교 교리로 말하며 각 이슬람 단어의 사전 번역으로 삼지 않습니다. 공포 그림 없이도 단어를 배울 수 있어 자료의 그림은 복제하지 않습니다.',
      'dünya hayatı|earthly life|현세의 삶\nberzah|intermediate state in the cited teaching|인용된 교육의 중간 상태\nkıyamet|end / resurrection event in context|문맥상 종말 / 부활 사건\nmahşer|gathering for judgement|심판을 위한 모임\nmizan|scales of judgement in the cited teaching|자료의 심판 저울\nsırat|bridge/path in the cited afterlife teaching|자료의 내세 다리 / 길'],
    ['decree',[21],'Kader and kaza','Kader와 kaza','Distinguish a source’s decree terminology from other meanings of kaza.','자료의 예정 용어와 kaza의 다른 뜻을 구별합니다.',[
      line('Bu kaynak kader ile kazayı karşılaştırıyor.','This source compares kader and kaza.','이 자료는 kader와 kaza를 비교합니다.'),
      line('Kaza burada trafik kazası anlamında değil.','Kaza here does not mean a traffic accident.','여기서 kaza는 교통사고 뜻이 아닙니다.'),
      line('Bu örnekte hangi anlam kastediliyor?','Which meaning is intended in this example?','이 예에서는 어떤 뜻인가요?')],
      'In the source’s theological chart, kader concerns divine determination and kaza its occurrence/realisation. In everyday Turkish kaza also means accident; in fasting vocabulary kaza orucu is a make-up fast. Shared spelling does not make these contexts identical. Ask which sense is intended, and do not infer a person’s attitude toward responsibility from the vocabulary alone.',
      '자료의 신학 표에서 kader는 신적 결정, kaza는 그 발생·실현입니다. 일상 kaza는 사고이며 금식의 kaza orucu는 보충 금식입니다. 같은 철자가 문맥을 같게 만들지 않습니다. 의도한 뜻을 묻고 어휘만으로 개인의 책임 태도를 추측하지 않습니다.',
      'kaza|occurrence of decree in this lesson; accident in another context|이 수업의 예정 실현; 다른 문맥의 사고\ntrafik kazası|traffic accident|교통사고'],
    ['practices',[22,23,24,25,26,27,28,29,30,31],'Five practices and their vocabulary','다섯 실천과 어휘','Recognise the named practices without treating the course as a religious ruling or live timetable.','종교 판정이나 실시간 시간표로 삼지 않고 실천 이름을 알아봅니다.',[
      line('Kaynak, kelimeişehadet, namaz, zekât, oruç ve haccı sıralıyor.','The source lists the declaration of faith, ritual prayer, almsgiving, fasting and pilgrimage.','자료는 신앙고백·의례 기도·구제·금식·순례를 나열합니다.'),
      line('Namazdan önce abdest alınır.','Ablution is performed before ritual prayer (in the described practice).','설명된 실천에서 의례 기도 전에 세정합니다.'),
      line('Hac ile umre aynı uygulama değildir.','Hajj and umrah are not the same practice.','하지와 우므라는 같은 실천이 아닙니다.'),
      line('Bu saatler güncel bir namaz takvimi değil.','These times are not a current prayer timetable.','이 시간은 현재 기도 시간표가 아닙니다.')],
      'The five-practice list belongs to the source’s Islamic framework. Namaz is the ritual prayer; dua is supplication, so they should not be translated as indistinguishable practices. Abdest almak literally uses “take” but naturally means perform ablution. The five named prayer times are sabah, öğle, ikindi, akşam and yatsı. The source’s timetable is a dated illustration, not current local times. Zekât is almsgiving with conditions; the diagram’s fraction is not a personal financial ruling. Oruç is fasting; hac and umre refer to distinct pilgrimages. Reading a formula for recognition does not require the learner to recite a confession as their own.',
      '다섯 실천 목록은 자료의 이슬람 틀입니다. namaz는 의례 기도, dua는 간구이며 동일한 실천처럼 번역하지 않습니다. abdest almak은 문자적 “받다”가 아니라 자연스럽게 세정하다입니다. 기도 시간 이름은 sabah·öğle·ikindi·akşam·yatsı입니다. 자료 시간표는 당시 예이지 현재 현지 시간이 아닙니다. zekât은 조건 있는 구제이며 도표의 비율은 개인 금전 판정이 아닙니다. oruç는 금식, hac·umre는 다른 순례입니다. 표현을 알아보는 읽기가 개인 신앙고백을 요구하지 않습니다.',
      'kelimeişehadet|declaration of faith in the source|자료의 신앙고백\nnamaz|ritual prayer|의례 기도\ndua|supplication / prayer|간구 / 기도\nabdest|ablution|세정\nzekât|almsgiving with religious conditions|종교 조건에 따른 구제\noruç|fasting|금식\nhac|hajj pilgrimage|하지 순례\numre|umrah pilgrimage|우므라 순례\nsabah|morning / dawn prayer name|아침 / 새벽 기도 이름\nöğle|noon prayer name|정오 기도 이름\nikindi|afternoon prayer name|오후 기도 이름\nakşam|evening prayer name|저녁 기도 이름\nyatsı|night prayer name|밤 기도 이름'],
    ['source-literacy',[32,33],'A textbook statement and historical evidence','교과서 진술과 역사 증거','Attribute a claim and choose an appropriate next research step.','주장의 출처를 밝히고 적절한 조사 단계를 정합니다.',[
      line('Ders kitabında böyle bir cevap veriliyor.','This is the answer given in the textbook.','교과서는 이렇게 답합니다.'),
      line('Bu, kaynağın inanç açıklamasıdır; el yazmalarının tarihini ayrıca araştırmalıyız.','This is the source’s explanation of belief; we should research manuscript history separately.','이는 출처의 믿음 설명이며 사본 역사는 따로 조사해야 합니다.'),
      line('Şu anda bilmiyorum. Güvenilir bir kaynak bulup size döneyim.','I do not know right now. Let me find a reliable source and get back to you.','지금은 모릅니다. 믿을 만한 자료를 찾아 다시 말씀드리겠습니다.')],
      'The source’s multiple-choice question about an unchanged book has an answer within its religious curriculum. Report it as “according to this textbook,” not as the site’s demonstrated historical conclusion. Find the publication, edition and page before quoting a claim. For manuscript history, use specialist catalogues and define the text, language and date range. Araştır-mal-ıyız expresses we should research; bul-up connects finding with returning. Admitting uncertainty is appropriate, and a follow-up promise should be fulfilled.',
      '경전이 변경되지 않았다는 객관식 답은 해당 종교 교육 안의 답입니다. 사이트가 증명한 역사 결론이 아니라 “이 교과서에 따르면”이라고 말하세요. 출판물·판본·쪽을 확인하고 사본 역사는 전문 목록에서 본문·언어·연대를 정의합니다. araştır-mal-ıyız는 “조사해야 한다”, bul-up은 찾고 돌아오는 행동을 연결합니다. 불확실성 인정은 적절하며 조사 후 답하겠다는 약속을 지켜야 합니다.',
      'kaynak|source|출처\nel yazması|manuscript|사본\nkanıt|evidence|증거\naraştırmak|research|조사하다|verb']
  ];
  for(const [id,pages,en,ko,objE,objK,lines,exE,exK,rows]of dinUnits){
    make('din',id,pages,[en,ko],[objE,objK],lines,[exE,exK],['Bu kaynakta …','Siz … nasıl anlıyorsunuz?'],
      q('Which approach fits this source-based lesson?','이 출처 기반 수업에 맞는 접근은?',[objE,objK],['Assume that every person shares the source’s wording and beliefs.','모든 사람이 자료의 표현·믿음과 같다고 가정합니다.'],exE,exK),
      ['Explain two expressions in ordinary Turkish. Give their source context, ask one open question, and state what you would need to verify before making a broader claim.','쉬운 터키어로 두 표현과 출처 문맥을 설명하고 열린 질문 하나와 더 넓은 주장 전 확인할 점을 말하세요.'],vocab('din',pages[0],rows));
  }
  const beliefs=lessons.find(l=>l.id==='din-beliefs');
  beliefs.lines.push(
    line('Bu kaynak Allah’ın varlığına ve birliğine, görünmeyen meleklere ve ilahi kitaplara imanı anlatır.','This source describes belief in God’s existence and oneness, unseen angels and divine books.','이 자료는 하나님의 존재·유일성, 보이지 않는 천사와 신적 경전을 믿는 것을 설명합니다.'),
    line('Kaynak, peygamberlere, ölümden sonraki hayata ve kader ile kazaya imanı da sıralar.','The source also lists belief in prophets, life after death, and decree and its realisation.','자료는 선지자·죽음 이후의 삶·예정과 그 실현에 대한 믿음도 나열합니다.'),
    line('Kaynakta Cebrail vahyi iletir; Azrail can almakla görevlidir.','In the source, Gabriel conveys revelation; Azrail is charged with taking life.','자료에서 가브리엘은 계시를 전달하고 아즈라일은 생명을 거두는 임무를 맡습니다.'),
    line('Mikail doğa olaylarıyla, İsrafil kıyamet ve dirilişi ilan etmekle ilişkilendirilir.','Michael is associated with natural phenomena; Israfil with announcing the end and resurrection.','미카엘은 자연현상, 이스라필은 종말·부활의 선포와 연결됩니다.'),
    line('Kirâmen Kâtibîn, insanların yaptıklarını kaydeden melekler olarak anlatılır.','Kirâmen Kâtibîn are described as angels who record people’s actions.','키라멘 카티빈은 사람의 행위를 기록하는 천사로 설명됩니다.'),
    line('Beş büyük peygamber tablosunda Nuh, İbrahim, Musa, İsa ve Muhammed yer alır.','The table of five major prophets includes Noah, Abraham, Moses, Jesus and Muhammad.','다섯 주요 선지자 표에는 노아·아브라함·모세·예수·무함마드가 있습니다.')
  );
  beliefs.explanation.en+=' In the role table (p.15), görevlidir means is charged with a task; -mekle names the task. Kaydeden (kayıt + et → kaydet + en) is a participle: who record. These are attributed descriptions of the educational material, not a test of the learner’s personal confession. The book/prophet pairings on p.16 and the five-prophet grouping on p.18 are also source categories.';
  beliefs.explanation.ko+=' 역할 표(15쪽)의 görevlidir는 임무를 맡는다는 뜻이며 -mekle가 임무를 나타냅니다. kaydeden(kayıt+et→kaydet+en)은 “기록하는” 분사입니다. 교육 자료의 설명이지 학습자의 개인 신앙고백을 검사하지 않습니다. 16쪽 경전·선지자 연결과 18쪽 다섯 선지자 묶음도 출처의 범주입니다.';
  beliefs.words.push(...vocab('din',15,'Kirâmen Kâtibîn|recording angels in the source|자료의 기록 천사|name\nvahiy|revelation in the stated tradition|제시된 전통의 계시\ngörevli|charged with a duty|임무를 맡은'));
  const practices=lessons.find(l=>l.id==='din-practices');
  practices.lines.push(
    line('Kaynağın şehadet açıklaması Allah’ın birliğini ve Muhammed’in elçiliğini ifade eder.','The source’s explanation of the declaration expresses God’s oneness and Muhammad’s messengership.','자료의 신앙고백 설명은 하나님의 유일성과 무함마드의 사자 됨을 나타냅니다.'),
    line('Abdestte belirli organlar yıkanır veya mesh edilir. Mesh etmek, burada silmek demektir.','In ablution, specified parts are washed or wiped. Mesh etmek here means wipe.','세정에서 정해진 부위를 씻거나 닦습니다. 여기서 mesh etmek은 닦는 것입니다.'),
    line('Besmele çekmek, bir işe başlarken Bismillahirrahmanirrahim demektir.','Besmele çekmek means saying Bismillahirrahmanirrahim when beginning an activity.','besmele çekmek은 일을 시작할 때 Bismillahirrahmanirrahim을 말하는 것입니다.'),
    line('Bu ifade, merhametli Allah’ın adıyla başlama anlamını taşır.','This expression carries the meaning of beginning in the name of the merciful God.','이 표현은 자비로운 하나님의 이름으로 시작한다는 뜻을 담습니다.'),
    line('Eûzü ifadesi, Allah’a sığınmayı anlatır.','The eûzü expression describes seeking refuge in God.','eûzü 표현은 하나님께 피하는 것을 나타냅니다.'),
    line('Kaynakta zekât, şartları taşıyan kişinin malından ihtiyaç sahiplerine verdiği paydır.','In the source, zakat is the share given from the property of a person meeting its conditions to those in need.','자료에서 자카트는 조건을 충족하는 사람이 재산에서 필요한 사람에게 주는 몫입니다.'),
    line('Tablodaki kırkta bir, yüzde iki buçuk demektir; her mal için koşulsuz bir kural değildir.','One fortieth in the table means two and a half percent; it is not an unconditional rule for every kind of property.','표의 사십분의 일은 이점오 퍼센트이며 모든 재산에 무조건 적용하는 규칙은 아닙니다.'),
    line('Kaynak orucu, yükümlü kişinin imsak ile gün batımı arasında yeme, içme ve cinsel ilişkiden uzak durması olarak açıklar.','The source explains fasting as an obligated person abstaining from food, drink and sexual relations between dawn and sunset.','자료는 금식을 의무 대상자가 새벽부터 일몰까지 음식·음료·성관계를 삼가는 것으로 설명합니다.'),
    line('Hac, yılın belirli günlerinde Mekke’de yapılır; umrenin aynı zaman sınırlaması yoktur.','Hajj is performed in Mecca on specified days of the year; umrah does not have that same time restriction.','하지는 연중 정해진 날 메카에서 행하며 우므라는 같은 시기 제한이 없습니다.')
  );
  practices.explanation.en+=' The source separates six belief articles from five named practices (p.31). -den uzak durmak means abstain from; yıkanır and mesh edilir are passive aorist descriptions. The wording explains the cited curriculum rather than prescribing the learner’s worship. Its monetary fractions, eligibility conditions and prayer times must not be used as live personal rulings.';
  practices.explanation.ko+=' 자료는 여섯 믿음 항목과 다섯 실천을 구별합니다(31쪽). -den uzak durmak은 삼가다이며 yıkanır·mesh edilir는 피동 일반현재 설명입니다. 인용된 교육 내용을 설명하며 학습자의 예배를 지시하지 않습니다. 금전 비율·대상 조건·기도 시각을 현재 개인 판정으로 쓰지 않습니다.';
  practices.words.push(...vocab('din',25,'mesh etmek|wipe in ablution|세정에서 닦다|verb\nbesmele çekmek|say the opening formula in God’s name|하나님 이름의 시작 표현을 말하다|verb\nihtiyaç sahibi|person in need|필요가 있는 사람\nimsak|dawn start of fasting in this context|이 문맥의 금식 시작 새벽\nyükümlü|subject to an obligation|의무 대상인'));
  // Spelling units retain all eleven rules and the numeric appendix, with
  // sentence-initial and lexical exceptions made explicit.
  const spelling=[
    ['capitals',[2,3,6],'Names and common concepts','고유명사와 일반 개념',[
      line('Tanrı, Allah, Yahve ve Cebrail özel ad olarak büyük harfle yazılır.','Tanrı, Allah, Yahve and Cebrail are capitalised as proper names.','Tanrı·Allah·Yahve·Cebrail은 고유명사로 대문자를 씁니다.'),
      line('Eski Yunan tanrıları; müzik dünyasının ilahı.','Ancient Greek gods; an idol of the music world.','고대 그리스 신들; 음악계의 우상.'),
      line('Hristiyan, Müslüman, Alevilik, Budist ve Musevi.','Christian, Muslim, Alevism, Buddhist and Jewish.','기독교인·무슬림·알레비즘·불교인·유대인.'),
      line('cennet, cehennem, günah ve sevap','heaven, hell, sin and merit','천국·지옥·죄·공덕')],
      'Proper divine names and religion/denomination names are capitalised. Common metaphorical tanrı/ilah and common concepts are lowercase inside a sentence. At the start of a sentence, ordinary capitalisation still applies. The source’s Alevlilik misspelling is corrected to Alevilik. Capitalisation is a writing convention, not a theological argument.',
      '신적 고유명사와 종교·종파 이름은 대문자입니다. 일반 비유 tanrı/ilah와 일반 개념은 문장 안에서 소문자입니다. 문장 시작의 대문자 규칙은 여전히 적용합니다. 자료의 Alevlilik을 Alevilik으로 수정합니다. 대문자는 표기 관례이지 신학 논증이 아닙니다.',
      ['Which mid-sentence form is correct for a religious community member?','문장 안에서 종교 구성원 표기로 맞는 것은?'],[['Hristiyan','Hristiyan'],['hristiyan','hristiyan']]],
    ['apostrophe',[4],'Derivation and apostrophes','파생과 아포스트로피',[
      line('Tanrı’nın; Türkiye’de; Davut’un soyu','God’s; in Turkey; David’s descendants','하나님의; 터키에서; 다윗의 후손'),
      line('Hristiyanlığın; Müslümanlıkta','of Christianity; in Islam / Muslim practice','기독교의; 이슬람 / 무슬림 실천에서'),
      line('Rabbin duası','the Lord’s Prayer','주기도문')],
      'Inflectional case/possessive suffixes on proper names normally use an apostrophe. Derivational suffixes and suffixes following them are not split off: Hristiyan + lık + ın becomes Hristiyanlığın. The special religious-guide form Rabbin has consonant doubling without an apostrophe; publication conventions may differ, so name the guide rather than silently standardising a Bible quotation.',
      '고유명사의 굴절 격·소유 접미사는 보통 아포스트로피를 씁니다. 파생 접미사와 뒤의 접미사는 분리하지 않습니다: Hristiyan+lık+ın→Hristiyanlığın. 종교 표기 안내의 Rabbin은 자음이 겹치고 아포스트로피가 없습니다. 출판 관례가 다를 수 있어 성경 인용을 임의로 고치지 말고 안내 출처를 밝힙니다.',
      ['Which form preserves the derivational rule?','파생 규칙을 유지하는 형태는?'],[['Hristiyanlığın','Hristiyanlığın'],["Hristiyanlık’ın","Hristiyanlık’ın"]]],
    ['clusters',[5],'Consonant clusters','자음군',[
      line('Hristiyan; gnostik','Christian; gnostic','기독교인; 영지주의의'),
      line('Yazarken fazladan ünlü eklemeyin.','Do not add an extra vowel when writing.','쓸 때 모음을 추가하지 마세요.')],
      'The source’s borrowed-word examples preserve initial consonant clusters: Hristiyan and gnostik. A Korean pronunciation cue is not Turkish spelling. Practise the cluster without inserting a vowel, but synthetic speech and recognition matching cannot certify pronunciation.',
      '자료의 차용어는 처음 자음군을 유지합니다: Hristiyan·gnostik. 한국어 발음 힌트는 터키어 철자가 아닙니다. 모음을 끼우지 않고 연습하되 합성 음성과 인식 일치로 발음을 인증할 수 없습니다.',
      ['Which spelling follows the source rule?','자료의 규칙에 맞는 표기는?'],[['Hristiyan','Hristiyan'],['Hıristiyan','Hıristiyan']]],
    ['institutions',[7],'Compounds, institutions and celebrations','합성어·기관·기념일',[
      line('cemevi; taziyeevi','Alevi gathering house; condolence house','알레비 모임 장소; 조문 장소'),
      line('Mesih İnanlılar Topluluğu','Community of believers in Christ (institution name)','그리스도 신자 공동체 (기관 이름)'),
      line('Arife Günü; Kadir Gecesi; Kurban Bayramı; Fısıh Bayramı','Eve day; Night of Power; Feast of Sacrifice; Passover','전야일; 권능의 밤; 희생절; 유월절')],
      'Established ev compounds such as cemevi and taziyeevi are written together; this does not combine every phrase containing ev. Institution-name components and named religious celebrations use capitals. Preserve the named entity rather than applying title capitals to ordinary phrases.',
      'cemevi·taziyeevi 같은 정착된 ev 합성어는 붙이며 ev가 있는 모든 구를 붙이지 않습니다. 기관 이름과 이름 있는 종교 기념일은 대문자입니다. 일반 구에 무조건 제목 대문자를 적용하지 마세요.',
      ['Which form names the celebration consistently?','기념일 이름을 일관되게 쓴 것은?'],[['Kurban Bayramı','Kurban Bayramı'],['Kurban bayramı','Kurban bayramı']]],
    ['dates-places',[8,9],'Dates, places and addresses','날짜·장소·주소',[
      line('25 Haziran Pazar; perşembe günleri','Sunday 25 June (source date example); on Thursdays','6월 25일 일요일 (자료 날짜 예); 매주 목요일'),
      line('Celile Gölü; Siyon Dağı; Zeytin Dağı; Şeria Irmağı','Lake of Galilee; Mount Zion; Mount of Olives; Jordan River','갈릴리 호수; 시온산; 감람산; 요단강'),
      line('Gazi Mahallesi; Zafer Meydanı; Cemal Nadir Sokağı','Gazi neighbourhood; Zafer square; Cemal Nadir street','가지 동; 자페르 광장; 제말 나디르 거리')],
      'Named months/days in a specific date use capitals; recurring nonspecific days do not. The source’s Sunday date is an example, not a current calendar statement. Geographic descriptors within proper names and address components use capitals. An ordinary mention of a mountain or street remains a common noun.',
      '특정 날짜의 월·요일은 대문자, 반복되는 불특정 요일은 소문자입니다. 자료의 일요일 날짜는 예이며 현재 달력 진술이 아닙니다. 고유 지명의 종류 이름과 주소 구성은 대문자이며 일반 산·거리 언급은 보통 명사입니다.',
      ['Which form describes a recurring meeting?','반복되는 모임을 나타내는 표기는?'],[['perşembe günleri','perşembe günleri'],['Perşembe günleri (mid-sentence)','Perşembe günleri (문장 중간)']]],
    ['numbers',[10],'Turkish numeric conventions','터키어 숫자 표기',[
      line('%25; 15,2; 3,14159; 4.567','25 percent; 15.2; 3.14159; 4,567','25퍼센트; 15.2; 3.14159; 4,567'),
      line('Yüzde yirmi beş.','Twenty-five percent.','이십오 퍼센트.')],
      'The percent sign precedes the number in Turkish. A comma separates the decimal part; a dot groups thousands. These conventions affect interpretation: 4.567 here is four thousand five hundred sixty-seven, not four point five six seven. Compare a number’s locale before copying it into a message or spreadsheet.',
      '터키어 퍼센트 기호는 숫자 앞에 씁니다. 소수 구분은 쉼표, 천 단위는 점입니다. 여기서 4.567은 4.567이라는 소수가 아니라 사천오백육십칠입니다. 메시지나 표에 복사하기 전에 언어권을 확인하세요.',
      ['How is 15.2 written in the taught Turkish convention?','가르친 터키 표기에서 15.2는 어떻게 쓰나요?'],[['15,2','15,2'],['15.2','15.2']]]
  ];
  for(const [id,pages,en,ko,lines,exE,exK,prompt,choices] of spelling){
    const l=make('spelling',id,pages,[en,ko],[`Apply the source rule for ${en.toLowerCase()} and explain the correction.`,`${ko} 자료 규칙을 적용하고 교정 이유를 설명합니다.`],lines,[exE,exK],lines.map(x=>x.tr),[prompt,choices,[0],[exE,exK]],['Write a short invitation or church note containing three relevant examples. Proofread it and explain your corrections.','관련 예 셋을 포함한 짧은 초대나 교회 메모를 쓰고 교정 이유를 설명하세요.']);
    l.practiceLink='ch6-2';
  }
})();
