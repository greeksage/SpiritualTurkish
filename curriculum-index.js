(() => {
  const {B,line,sources,lessons,words,passages,clinic}=SEMINAR_BUILD;
  const clinics=[
    clinic('Babamız','our Father','우리 아버지','baba + mız','father + our','아버지 + 우리의','First-person plural possession. It is an address here, not a claim that the speaker is plural in every sentence.','1인칭 복수 소유이며 여기서는 호칭입니다. 모든 문장의 화자가 복수라는 자동 보장은 아닙니다.'),
    clinic('sana','to you','당신에게','sen → san + a','you + dative','당신 + 여격','Dative addressee or recipient. Seni is the direct-object form.','여격 대상·받는 사람이며 seni는 목적격입니다.'),
    clinic('dua ediyoruz','we pray','우리가 기도합니다','dua + et → ed + iyor + uz','prayer + do + present + we','기도 + 하다 + 현재 + 우리','Finite first-person plural; preserve agreement in a group prayer.','1인칭 복수 서술이며 공동 기도 인칭을 유지합니다.'),
    clinic('bize','to us','우리에게','biz + e','we + dative','우리 + 여격','Recipient of help or a gift; bizi is the direct-object form.','도움·선물의 받는 대상이며 bizi는 목적격입니다.'),
    clinic('istiyorum','I want','나는 원합니다','iste → ist + iyor + um','want + present + I','원하다 + 현재 + 나','The vowel before -iyor is narrowed; the subject is singular I.','-iyor 앞 모음이 좁혀지고 주어는 단수 나입니다.'),
    clinic('olduğumu','that I am','내가 ~임','ol + duk → duğ + um + u','be + nominalised clause + I + accusative','이다 + 명사절 + 나 + 목적격','Embedded first-person clause used as an object, for example after confess.','고백하다 등의 목적어로 쓰이는 내포 1인칭 명사절입니다.'),
    clinic('el yazması','manuscript','사본','el + yazma + sı','hand + writing + compound ending','손 + 기록 + 합성어 어미','A noun compound. It is distinct from çeviri, a translation.','명사 합성어이며 번역 çeviri와 다릅니다.'),
    clinic('bereketle','bless','복 주다','bereket + le','blessing + make / give','복 + 주다','Second-person singular imperative in prayer. It expresses a request.','기도의 2인칭 단수 명령이며 요청입니다.'),
    clinic('gömüldük','we were buried','우리는 묻혔습니다','göm + ül + dü + k','bury + passive + past + we','묻다 + 피동 + 과거 + 우리','Past passive, first-person plural. The form does not identify the agent; read Romans 6:4 in context.','과거 피동 1인칭 복수입니다. 형태만으로 행위자를 정하지 않으며 로마 6:4의 문맥을 읽으세요.')
  ];
  clinics.forEach((w,i)=>{w.id=`shared-clinic-${i+1}`;w.source={id:i===6?'conversation':'prayer',pages:[i===6?5:i===8?32:3]};w.example=lessons.flatMap(l=>l.lines).find(l=>l.tr.includes(w.tr))||line(w.tr,w.meaning.en,w.meaning.ko);words.push(w);});
  for(const l of lessons){
    l.rubric=[['Understanding: I explained the example in its stated context.','이해: 제시된 문맥에서 예를 설명했습니다.'],['Language: I used the target forms without changing the intended meaning.','언어: 의도한 뜻을 바꾸지 않고 목표 형태를 사용했습니다.'],['Transfer: I adapted the model to a new situation.','적용: 모델을 새 상황에 적용했습니다.'],['Accuracy: I distinguished source text, translation, belief and illustration.','정확성: 출처 본문·번역·믿음·비유를 구별했습니다.'],['Use: I wrote or spoke independently and can explain my choices.','사용: 독립적으로 쓰거나 말하고 선택 이유를 설명할 수 있습니다.']];
    const matched=[...clinics,...words].filter(w=>l.lines.some(x=>x.tr.includes(w.tr)));
    l.words=[...new Map([...l.words,...matched.slice(0,5)].map(w=>[w.id,w])).values()];
    if(!l.words.length){const first=l.lines[0];const w={id:`${l.id}-phrase`,tr:first.tr,lemma:first.tr,meaning:first.translation,literalGloss:B('Whole study phrase; use the explanation for grammatical detail.','전체 학습 구입니다. 문법 세부는 설명을 보세요.'),breakdown:first.tr,role:B('A curated complete phrase, not an automatic word-by-word analysis.','선별한 전체 구이며 자동 단어별 분석이 아닙니다.'),source:l.source,example:first};l.words.push(w);words.push(w);}
  }
  EXPANDED_LESSONS.forEach((l,i)=>{
    l.track='ministry';l.source={id:'expansion',pages:[],lesson:i+1};
    const links=['foundation-references','prayer-meal','prayer-six-stages','prayer-illness','foundation-church','foundation-stories','foundation-church','foundation-names','conversation-scenario-2','prayer-new-believer'];
    l.relatedLessons=[links[i]];
    l.words.forEach((w,j)=>{w.id=`${l.id}-word-${j+1}`;w.lemma ||= w.breakdown.split(' + ')[0];w.source=l.source;w.example=l.lines.find(x=>x.tr.includes(w.tr))||l.lines[0];words.push(w);});
  });
  lessons.forEach(l=>{l.relatedLessons=EXPANDED_LESSONS.filter(x=>x.relatedLessons.includes(l.id)).map(x=>x.id);});
  // Reference catalogue is complete; only three verified verses are newly
  // reproduced inline. Remaining assignments open the named edition externally.
  const refs=[
    ['foundation',10,'2. Korintliler 4:1–6','2Ko.4:1-6'],['foundation',11,'Yeremya 46:27–28','Yer.46:27-28'],
    ['foundation',12,'Yuhanna 3:16–17','Yu.3:16-17'],['foundation',12,'Yeşaya 40:30–31','Yşa.40:30-31'],['foundation',12,'Matta 11:28–30','Mat.11:28-30'],['foundation',12,'1. Petrus 1:6–7','1Pe.1:6-7'],['foundation',12,'2. Korintliler 5:17','2Ko.5:17'],['foundation',12,'Galatyalılar 5:22–23','Gal.5:22-23'],['foundation',12,'Romalılar 12:1–2','Rom.12:1-2'],['foundation',12,'Luka 11:9–13','Luk.11:9-13'],['foundation',12,'Mezmurlar 9:1–2','Mez.9:1-2'],
    ['foundation',18,'Yaratılış 2:15–17','Yar.2:15-17'],['foundation',18,'1. Krallar 8:6','1Kr.8:6'],['foundation',19,'2. Samuel 20:2','2Sa.20:2'],['foundation',19,'Hâkimler 10:7','Hak.10:7'],['foundation',19,'Matta 4:1','Mat.4:1'],['foundation',20,'Matta 2:1–2','Mat.2:1-2'],['foundation',20,'Matta 12:38','Mat.12:38'],['foundation',21,'Mezmurlar 84:11','Mez.84:11'],['foundation',21,'1. Korintliler 16:23','1Ko.16:23'],
    ['foundation',28,'Romalılar 8:30','Rom.8:30'],['foundation',28,'Romalılar 3:24','Rom.3:24'],['foundation',28,'Romalılar 8:2','Rom.8:2'],['foundation',29,'Mezmurlar 18:32','Mez.18:32'],['foundation',29,'Mezmurlar 21:5','Mez.21:5'],['foundation',29,'Efesliler 6:11','Ef.6:11'],['foundation',29,'Yeşaya 37:1','Yşa.37:1'],['foundation',30,'2. Tarihler 30:8','2Ta.30:8'],['foundation',30,'Matta 26:1–2','Mat.26:1-2'],['foundation',31,'2. Timoteos 3:16','2Ti.3:16'],['foundation',31,'Romalılar 6:23','Rom.6:23'],['foundation',32,'Romalılar 5:8','Rom.5:8'],['foundation',32,'Romalılar 8:32','Rom.8:32'],['foundation',32,'Eyüp 15:4','Eyü.15:4'],['foundation',33,'Matta 6:33','Mat.6:33'],['foundation',33,'Luka 9:23','Luk.9:23'],['foundation',33,'Romalılar 4:20–21','Rom.4:20-21'],['foundation',34,'1. Yuhanna 2:15–16','1Yu.2:15-16'],['foundation',34,'Elçilerin İşleri 1:8','Elç.1:8'],['foundation',37,'Matta 10:2–4','Mat.10:2-4'],
    ['prayer',10,'Mezmurlar 143:1–11','Mez.143:1-11'],... [23,30,51,55,63,70,86,88,102,121,141,145].map(n=>['prayer',10,`Mezmurlar ${n}`,`Mez.${n}`]),
    ['prayer',9,'Luka 22:44','Luk.22:44'],['prayer',21,'Romalılar 10:13','Rom.10:13'],['prayer',23,'Yeremya 29:11','Yer.29:11'],['prayer',24,'Mezmurlar 16:11','Mez.16:11'],['prayer',25,'Romalılar 15:13','Rom.15:13'],['prayer',26,'Mezmurlar 37:4','Mez.37:4'],['prayer',28,'Yuhanna 13:34–35','Yu.13:34-35'],['prayer',29,'Yakup 1:19','Yak.1:19'],['prayer',31,'Mezmurlar 40:1','Mez.40:1'],['prayer',32,'Romalılar 6:4','Rom.6:4'],['prayer',33,'Mezmurlar 46:1','Mez.46:1'],['prayer',34,'Süleyman’ın Özdeyişleri 2:6','Özd.2:6'],
    ['spelling',3,'Elçilerin İşleri 11:26','Elç.11:26'],['spelling',6,'Luka 23:43','Luk.23:43'],['spelling',6,'1. Yuhanna 3:5','1Yu.3:5'],['spelling',7,'Mısır’dan Çıkış 12:47','Çık.12:47'],['spelling',9,'Matta 15:29','Mat.15:29'],
    ['foundation',36,'Matta 13:1–23','Mat.13:1-23'],['foundation',36,'Matta 13:24–30','Mat.13:24-30'],['foundation',36,'Matta 13:31–33','Mat.13:31-33'],['foundation',36,'Luka 15:1–7','Luk.15:1-7'],['foundation',36,'Matta 18:21–35','Mat.18:21-35'],['foundation',36,'Matta 25:1–13','Mat.25:1-13'],['foundation',36,'Matta 25:14–30','Mat.25:14-30'],['foundation',36,'Matta 21:33–46','Mat.21:33-46'],['foundation',36,'Luka 14:15–24','Luk.14:15-24'],['foundation',36,'Luka 15:11–32','Luk.15:11-32'],['foundation',36,'Luka 15:8–10','Luk.15:8-10'],['foundation',36,'Matta 13:44–46','Mat.13:44-46'],
    ['foundation',38,'Galatyalılar 5:22–23','Gal.5:22-23'],['prayer',27,'Matta 6:33','Mat.6:33'],['prayer',30,'Yeşaya 40:30–31','Yşa.40:30-31']
  ];
  const seen=new Map();
  for(const [source,page,ref,query] of refs){
    if(seen.has(query)){seen.get(query).sources.push({id:source,pages:[page]});continue;}
    const p={id:`reading-${query.replace(/[^a-zA-Z0-9]/g,'-')}`,reference:ref,url:`https://kutsalkitap.info.tr/?q=${encodeURIComponent(query)}`,sources:[{id:source,pages:[page]}],edition:'Kutsal Kitap (2001, 2008)',kind:'external-reading',lines:[],
      explanation:B('Open the named edition and read the surrounding passage. Identify the speaker, a subject and a verb before discussing meaning. Return to the related source lesson for grammar and contextual notes.','표시한 판본을 열고 주변 문맥을 읽으세요. 의미를 나누기 전에 화자·주어·동사를 파악합니다. 문법과 문맥 설명은 연결 수업에서 확인하세요.'),
      task:B('Summarise one idea in your own Turkish and explain one word in context. Label your summary as your own words.','자신의 터키어로 생각 하나를 요약하고 문맥 속 단어 하나를 설명하세요. 자신의 요약이라고 표시합니다.')};
    p.relatedLessons=lessons.filter(l=>l.source.id===source&&l.source.pages.includes(page)).map(l=>l.id);
    passages.push(p);seen.set(query,p);
  }
  // A repeated reading retains every source occurrence and related lesson.
  passages.forEach(p=>p.relatedLessons=lessons.filter(l=>p.sources.some(s=>s.id===l.source.id&&s.pages.some(page=>l.source.pages.includes(page)))).map(l=>l.id));
  // Edition checks: https://kutsalkitap.info.tr/?q=Mat.6:33 and ?q=Yu.13:34-35
  const mat=seen.get('Mat.6:33');mat.kind='verified-quotation';mat.verseCount=1;
  mat.lines=[line("Siz öncelikle O'nun egemenliğinin ve doğruluğunun ardından gidin, o zaman size bütün bunlar da verilecektir.",'First pursue his kingdom and righteousness, and then all these things will also be given to you.','먼저 그분의 나라와 의를 추구하세요. 그러면 이 모든 것도 주어질 것입니다.')];
  mat.lines[0].verseNumber=33;
  mat.explanation=B('Read Matthew 6:25–34: the discussion concerns worry and needs, not a promise of unlimited possessions. Gidin is a plural/respectful command. Verilecektir is passive future with -dir, foregrounding what will be given. The English and Korean renderings here are teaching translations, not named published Bible editions.','마태 6:25–34는 걱정과 필요에 관한 문맥이며 무제한 소유 약속이 아닙니다. gidin은 복수·존대 명령, verilecektir는 피동 미래와 -dir로 주어질 것을 드러냅니다. 여기의 영어·한국어는 학습 번역이며 출판 성경 판본이 아닙니다.');
  const john=seen.get('Yu.13:34-35');john.kind='verified-quotation';john.verseCount=2;
  john.lines=[line('Size yeni bir buyruk veriyorum: Birbirinizi sevin. Sizi sevdiğim gibi siz de birbirinizi sevin.','I give you a new command: love one another. As I have loved you, you too should love one another.','새 계명을 줍니다. 서로 사랑하세요. 내가 여러분을 사랑한 것처럼 여러분도 서로 사랑하세요.'),line('Birbirinize sevginiz olursa, herkes bununla benim öğrencilerim olduğunuzu anlayacaktır.”','If you have love for one another, everyone will understand through this that you are my disciples.','서로 사랑하면 이것으로 모든 사람이 여러분이 내 제자인 것을 알 것입니다.')];
  john.lines.forEach((l,i)=>l.verseNumber=34+i);
  john.explanation=B('Read John 13 in context. Birbirinizi is reciprocal accusative: one another as object. Birbirinize is reciprocal dative: to one another. Sevin is plural/respectful imperative; olursa is conditional. The closing quotation mark belongs to the source excerpt. Teaching translations are explanatory renderings, not additional published Bible quotations.','요한 13장의 문맥을 읽으세요. birbirinizi는 상호 목적격 “서로를”, birbirinize는 상호 여격 “서로에게”입니다. sevin은 복수·존대 명령, olursa는 조건입니다. 닫는 인용 부호는 원본 발췌의 것입니다. 학습 번역은 설명용이며 다른 출판 성경 인용이 아닙니다.');
  const bibleWords=[clinic('birbirinizi','one another (object)','서로를','birbir + iniz + i','one another + your plural form + accusative','서로 + 복수 인칭 + 목적격','Reciprocal direct object of sevin; compare dative birbirinize.','sevin의 상호 목적어이며 여격 birbirinize와 비교합니다.'),clinic('verilecektir','will be given','주어질 것이다','ver + il + ecek + tir','give + passive + future + assertion','주다 + 피동 + 미래 + 단정','Passive future; the passage context determines what “these things” refers to.','피동 미래이며 “이것들”은 본문 문맥에서 정합니다.')];
  bibleWords.forEach((w,i)=>{w.id=`bible-clinic-${i+1}`;w.source=(i===0?john:mat).sources[0];w.example=(i===0?john:mat).lines[0];words.push(w);});
  mat.words=[bibleWords[1],words.find(w=>w.tr==='Tanrı\'nın Egemenliği')].filter(Boolean);john.words=[bibleWords[0],...words.filter(w=>w.tr==='sevgi').slice(0,1)];
  // Dictionary headwords are authored separately from surface-form breakdowns.
  const lemmas={'lütfu':'lütuf','süslendi':'süslemek','güçlendir':'güçlendirmek','götürüldü':'götürmek','aklanırlar':'aklanmak','kuşanın':'kuşanmak','sana':'sen','dua ediyoruz':'dua etmek','istiyorum':'istemek','olduğumu':'olmak','el yazması':'el yazması','bereketle':'bereketlemek','gömüldük':'gömmek','anlayamadım':'anlamak','uğrayabilir miyim':'uğramak','isterseniz':'istemek','dua etmem':'dua etmek','iyileşmesine':'iyileşmek','okumaya':'okumak','güvenmeyi':'güvenmek','koyunlardan biri':'koyun / biri','kaybolan':'kaybolmak','Tanrı’ya':'Tanrı','Tanrı’nın Oğlu':'Tanrı / oğul','derken':'demek','karşılaştırarak':'karşılaştırmak','araştırıp size döneyim':'araştırmak / siz / dönmek','okuyalım':'okumak','Markos’tan':'Markos','birbirinizi':'birbiri','verilecektir':'vermek'};
  words.forEach(w=>{if(lemmas[w.tr])w.lemma=lemmas[w.tr];});
  const links={
    foundation:[['Bible edition','성경 판본','https://kutsalkitap.info.tr/'],['Seminar resources','세미나 자료','https://www.spiritualturkishseminar.com/seminar/session-1/']],
    prayer:[['Source hymn reference: Tanrı’yı Yüceltelim 189','자료 찬송 참고: Tanrı’yı Yüceltelim 189','https://www.spiritualturkishseminar.com/']],
    conversation:[['INTF manuscript research','INTF 사본 연구','https://www.uni-muenster.de/INTF/Projects.html'],['Calendar era conventions','연대 관례','https://aa.usno.navy.mil/faq/millennium']],
    din:[['TDV: articles of belief','TDV: 믿음 항목','https://islamansiklopedisi.org.tr/amentu'],['Diyanet: rights and restitution','Diyanet: 권리와 회복','https://kurul.diyanet.gov.tr/tr/fetva/kul-hakkinin-onemi-nedir-veihlali-durumunda-nasil-odenir/0193c42d-9bcc-7638-464f-b3fb0161518f'],['TDV: afterlife','TDV: 내세','https://islamansiklopedisi.org.tr/ahiret'],['TDV: angel terminology','TDV: 천사 용어','https://islamansiklopedisi.org.tr/melek'],['TDV: zakat','TDV: 자카트','https://islamansiklopedisi.org.tr/zekat'],['TDV: fasting','TDV: 금식','https://islamansiklopedisi.org.tr/oruc']],
    spelling:[['TDK: capitals','TDK: 대문자','https://tdk.gov.tr/icerik/yazim-kurallari/buyuk-harflerin-kullanildigi-yerler/'],['TDK: apostrophes','TDK: 아포스트로피','https://tdk.gov.tr/icerik/yazim-kurallari/kesme-isareti/']]
  };
  sources.forEach(s=>{s.links=links[s.id].map(([en,ko,url])=>({label:B(en,ko),url}));});
  const coverage=[];
  sources.forEach(s=>{for(let page=1;page<=s.pages;page++){
    const targets=lessons.filter(l=>l.source.id===s.id&&l.source.pages.includes(page)).map(l=>({type:'lesson',id:l.id}));
    const readingTargets=passages.filter(p=>p.sources.some(r=>r.id===s.id&&r.pages.includes(page))).map(p=>({type:'reading',id:p.id}));
    const status=page===1?'cover':targets.length||readingTargets.length?'implemented':'reference';
    coverage.push({source:s.id,page,status,targets:[...targets,...readingTargets],note:page===1?B('Source cover; not counted as a lesson.','출처 표지이며 수업으로 세지 않습니다.'):page===11&&s.id==='prayer'?B('Hymn referenced; third-party screenshot/lyrics not redistributed.','찬송 참고이며 제삼자 화면·가사는 재배포하지 않습니다.'):B('Reviewed adaptation; see the linked unit and editorial notes.','편집 적용이며 연결 수업·편집 기록을 확인하세요.')});
  }});
  window.SEMINAR={sources,lessons,words,passages,coverage,duplicate:{name:'종교_용어_표기_규칙-1.pdf',sameAs:'종교_용어_표기_규칙.pdf',sha256:'ef14db5efa3d57d53779cc0e721a64ee802e996274e1ce8807c9cad702efcfed'}};
  window.ALL_LESSONS=[...lessons,...EXPANDED_LESSONS];
})();
