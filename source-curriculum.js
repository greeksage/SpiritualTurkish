/* Reviewed teaching adaptations of the user's five seminar sources.
 * No PDF, photograph, hymn recording or third-party video is redistributed.
 * Source references identify original pages; adaptations are not quotations.
 */
(() => {
  const B = (en, ko) => ({en, ko});
  const line = (tr, en, ko) => ({tr, translation:B(en,ko)});
  const sources = [
    ['foundation',39,'Spiritual Turkish Seminar 한국어','Bible language and grammar','성경 언어와 문법'],
    ['prayer',43,'Spiritual Turkish Seminar Dua','Prayer in Turkish','터키어 기도'],
    ['conversation',23,'Spiritual Turkish Seminar Müjde','Sharing and listening','나누고 듣기'],
    ['din',33,'Spirıtual Turkish Seminar Din','Religious language in context','문맥 속 종교 언어'],
    ['spelling',10,'종교_용어_표기_규칙','Writing clearly','정확하게 쓰기']
  ].map(([id,pages,name,en,ko])=>({id,pages,name,title:B(en,ko),kind:'user-provided-seminar',review:'editorial adaptation; independent specialist review pending'}));
  const lessons=[], words=[], passages=[];
  function vocab(source,page,rows) {
    return rows.trim().split('\n').map((row,i)=>{
      const [tr,en,ko,kind='noun / phrase']=row.trim().split('|');
      const id=`${source}-p${page}-word-${i+1}`;
      const proper=kind==='name';
      const w={id,tr,lemma:tr,meaning:B(en,ko),literalGloss:B(en,ko),breakdown:tr,
        role:proper?B('Uninflected proper name. Add case endings only when the sentence requires them.','접미사가 없는 고유명사입니다. 문장에서 필요할 때 격 접미사를 붙입니다.'):
          kind==='verb'?B('Dictionary verb in -mak/-mek. This is not a finite command; select person and tense in a sentence.','-mak/-mek 사전형 동사입니다. 명령형이 아니며 문장에서 인칭과 시제를 정합니다.'):
          B('Uninflected vocabulary form or fixed phrase. Its translation depends on the stated context; this entry does not claim a suffix analysis of unseen forms.','접미사가 없는 어휘 형태 또는 고정 표현입니다. 제시된 문맥에 따라 번역하며 여기 없는 형태의 접미사를 추측하지 않습니다.'),
        source:{id:source,pages:[page]},example:line(tr,en,ko)};
      words.push(w);return w;
    });
  }
  function clinic(tr,en,ko,breakdown,literalEn,literalKo,roleEn,roleKo) {
    return {tr,lemma:breakdown.split(' + ')[0],meaning:B(en,ko),breakdown,literalGloss:B(literalEn,literalKo),role:B(roleEn,roleKo)};
  }
  function make(source,id,pages,title,objective,lines,explanation,patterns,quiz,task,wordList=[]) {
    const lesson={id:`${source}-${id}`,track:source,title:B(...title),objective:B(...objective),
      prerequisites:B('Basic Turkish questions, vowel harmony, common case endings and present/past forms.','기본 터키어 의문문, 모음 조화, 자주 쓰는 격 접미사와 현재·과거 형태.'),
      lines,explanation:B(...explanation),patterns,words:wordList,source:{id:source,pages},
      quotationStatus:'reviewed-adaptation',transfer:B(...task),model:lines.map(l=>l.tr).join(' '),
      exercises:[{id:`${source}-${id}-exercise-1`,prompt:B(...quiz[0]),choices:quiz[1].map(c=>B(...c)),valid:quiz[2],answer:B(...quiz[3])},
        {id:`${source}-${id}-exercise-2`,prompt:B('Write two Turkish sentences using a pattern above in the situation described in the independent task. Explain the intended meaning.','독립 과제 상황에서 위 문형으로 터키어 두 문장을 쓰고 의도한 뜻을 설명하세요.'),answer:B('Compare with the reading and its explanation. Preserve the person, case ending and contextual meaning. A different sentence can be valid: use the model as a guide, not an exact-match answer.','읽기와 설명을 비교하세요. 인칭, 격 접미사와 문맥상 뜻을 유지합니다. 다른 문장도 가능하며 모델과 정확히 일치할 필요는 없습니다.')}],
      completion:B('Review both exercises, use the forms in a new situation, and assess the independent task.','두 연습을 검토하고 새 상황에서 문형을 사용한 뒤 독립 과제를 평가하세요.')};
    lessons.push(lesson);wordList.forEach((w,i)=>{
      if(!w.id){w.id=`${lesson.id}-word-${i+1}`;w.source=lesson.source;w.example=lines.find(l=>l.tr.includes(w.tr))||lines[0];words.push(w);}
    });return lesson;
  }
  const q=(en,ko,good,bad,reasonEn,reasonKo)=>[[en,ko],[good,bad],[0],[reasonEn,reasonKo]];
  const booksOT=vocab('foundation',5,`
Yaratılış|Genesis|창세기|name
Mısır'dan Çıkış|Exodus|출애굽기|name
Levililer|Leviticus|레위기|name
Çölde Sayım|Numbers|민수기|name
Yasa'nın Tekrarı|Deuteronomy|신명기|name
Yeşu|Joshua|여호수아|name
Hâkimler|Judges|사사기|name
Rut|Ruth|룻기|name
1. Samuel|1 Samuel|사무엘상|name
2. Samuel|2 Samuel|사무엘하|name
1. Krallar|1 Kings|열왕기상|name
2. Krallar|2 Kings|열왕기하|name
1. Tarihler|1 Chronicles|역대상|name
2. Tarihler|2 Chronicles|역대하|name
Ezra|Ezra|에스라|name
Nehemya|Nehemiah|느헤미야|name
Ester|Esther|에스더|name
Eyüp|Job|욥기|name
Mezmurlar|Psalms|시편|name
Süleyman'ın Özdeyişleri|Proverbs|잠언|name
Vaiz|Ecclesiastes|전도서|name
Ezgiler Ezgisi|Song of Songs|아가|name
Yeşaya|Isaiah|이사야|name
Yeremya|Jeremiah|예레미야|name
Ağıtlar|Lamentations|예레미야애가|name
Hezekiel|Ezekiel|에스겔|name
Daniel|Daniel|다니엘|name
Hoşea|Hosea|호세아|name
Yoel|Joel|요엘|name
Amos|Amos|아모스|name
Ovadya|Obadiah|오바댜|name
Yunus|Jonah|요나|name
Mika|Micah|미가|name
Nahum|Nahum|나훔|name
Habakkuk|Habakkuk|하박국|name
Sefanya|Zephaniah|스바냐|name
Hagay|Haggai|학개|name
Zekeriya|Zechariah|스가랴|name
Malaki|Malachi|말라기|name`);
  const booksNT=vocab('foundation',6,`
Matta|Matthew|마태복음|name
Markos|Mark|마가복음|name
Luka|Luke|누가복음|name
Yuhanna|John|요한복음|name
Elçilerin İşleri|Acts|사도행전|name
Romalılar|Romans|로마서|name
1. Korintliler|1 Corinthians|고린도전서|name
2. Korintliler|2 Corinthians|고린도후서|name
Galatyalılar|Galatians|갈라디아서|name
Efesliler|Ephesians|에베소서|name
Filipililer|Philippians|빌립보서|name
Koloseliler|Colossians|골로새서|name
1. Selanikliler|1 Thessalonians|데살로니가전서|name
2. Selanikliler|2 Thessalonians|데살로니가후서|name
1. Timoteos|1 Timothy|디모데전서|name
2. Timoteos|2 Timothy|디모데후서|name
Titus|Titus|디도서|name
Filimun|Philemon|빌레몬서|name
İbraniler|Hebrews|히브리서|name
Yakup|James|야고보서|name
1. Petrus|1 Peter|베드로전서|name
2. Petrus|2 Peter|베드로후서|name
1. Yuhanna|1 John|요한일서|name
2. Yuhanna|2 John|요한이서|name
3. Yuhanna|3 John|요한삼서|name
Yahuda|Jude|유다서|name
Vahiy|Revelation|요한계시록|name`);
  const core=vocab('foundation',13,`
Tanrı|God|하나님|name
İsa|Jesus|예수님|name
Kutsal Ruh|Holy Spirit|성령님|name
Kutsal Kitap|Bible|성경|name
Hristiyan|Christian|기독교인
Hristiyanlık|Christianity|기독교
İslam|Islam|이슬람|name
Müslüman|Muslim|무슬림
Hazreti İsa|Jesus with an honorific|존칭을 붙인 예수님|name
İncil|Gospel / New Testament in Christian usage|복음서 / 기독교 문맥의 신약
Şeytan|Satan|사탄|name
İblis|Iblis (Islamic usage)|이슬람 문맥의 이블리스|name
müjde|good news; gospel in Christian use|기쁜 소식; 기독교 문맥의 복음
cennet|paradise / heaven|낙원 / 천국
cehennem|hell|지옥
çarmıh|cross (crucifixion)|십자가
Yaratıcı|Creator|창조주|name
Yaradan|Creator|창조주|name
gerçek|truth / real|진실 / 실제의
doğruluk|rightness / righteousness|올바름 / 의로움
adalet|justice|정의
sonsuz yaşam|eternal life|영원한 생명
kilise|church / church building|교회 / 교회 건물`);
  const otPeople=vocab('foundation',14,`
Adem|Adam|아담|name
Havva|Eve|하와|name
Aden bahçesi|Garden of Eden|에덴동산|name
Kayin|Cain|가인|name
Habil|Abel|아벨|name
İbrahim|Abraham|아브라함|name
Sara|Sarah|사라|name
Hacer|Hagar|하갈|name
İshak|Isaac|이삭|name
Rebeka|Rebekah|리브가|name
Esav|Esau|에서|name
Yakup|Jacob|야곱|name
Rahel|Rachel|라헬|name
Lea|Leah|레아|name
Lavan|Laban|라반|name
Yahuda|Judah|유다|name
Musa|Moses|모세|name
Harun|Aaron|아론|name
Miryam|Miriam|미리암|name
Yeşu|Joshua|여호수아|name
casus|spy / scout|정탐꾼
Rahav|Rahab|라합|name
Firavun|Pharaoh|바로|name
Pers Kralı Koreş|Cyrus king of Persia|바사 왕 고레스|name
Şimşon|Samson|삼손|name
Davut|David|다윗|name
Golyat|Goliath|골리앗|name
Yonatan|Jonathan|요나단|name
Süleyman|Solomon|솔로몬|name
Avşalom|Absalom|압살롬|name
Yunus|Jonah|요나|name
İlyas|Elijah|엘리야|name
Elişa|Elisha|엘리사|name
Yeşaya|Isaiah|이사야|name
Hizkiya|Hezekiah|히스기야|name
Hezekiel|Ezekiel|에스겔|name`);
  const ntPeople=vocab('foundation',15,`
Yusuf|Joseph|요셉|name
Meryem|Mary|마리아|name
Cebrail|Gabriel|가브리엘|name
yıldızbilimciler|Magi (in this reading); literally star scholars|이 본문의 동방박사; 문자적으로 별 연구자들
Beytlehem|Bethlehem|베들레헴|name
Mısır|Egypt|애굽|name
Vaftizci Yahya|John the Baptist|세례 요한|name
Yuhanna|John|요한|name
Simun Petrus|Simon Peter|시몬 베드로|name
Samiriyeli kadın|Samaritan woman|사마리아 여인
Lazar|Lazarus|나사로|name
yüzbaşı|centurion / captain|백부장 / 대위
Nikodim|Nicodemus|니고데모|name
Yahuda İskariot|Judas Iscariot|가룟 유다|name
İstefanos|Stephen|스데반|name
Ferisiler|Pharisees|바리새인들|name
Sadukiler|Sadducees|사두개인들|name
din bilginleri|religious scholars|종교 학자들
Golgota|Golgotha|골고다|name
Celile Gölü|Lake of Galilee|갈릴리 호수|name
Nasıra|Nazareth|나사렛|name
Zeytin Dağı|Mount of Olives|감람산|name
Şeria Irmağı|Jordan River|요단강|name
Saul|Saul|사울|name
Pavlus|Paul|바울|name
Mecdelli Meryem|Mary Magdalene|막달라 마리아|name
Marta|Martha|마르다|name`);
  const history=vocab('foundation',16,`
iyiyle kötüyü bilme ağacı|tree of the knowledge of good and evil|선악을 알게 하는 나무
Nuh tufanı|Noah's flood|노아의 홍수
On Emir|Ten Commandments|십계명|name
On Buyruk|Ten Commandments|십계명|name
İsrail Krallığı|Kingdom of Israel|이스라엘 왕국|name
İsrailliler|Israelites|이스라엘 백성|name
Yahuda Krallığı|Kingdom of Judah|유다 왕국|name
Yahudalılar|people of Judah|유다 백성|name
Yahudiler|Jews|유대인|name
Yahudiye|Judea|유대|name
sürgün dönemi|period of exile|포로기
Babil|Babylon|바벨론|name
Şam|Damascus|다메섹|name
Kenan|Canaan|가나안|name
Filistliler|Philistines|블레셋 사람들|name
Asur|Assyria|앗수르|name
Ay Kenti|city of Ai|아이성|name
Eriha Kenti|city of Jericho|여리고성|name
Gidyon|Gideon|기드온|name
Beytel|Bethel|벧엘|name
Yeruşalim|Jerusalem (biblical usage)|예루살렘 (성경 표기)|name
Kudüs|Jerusalem (common modern name)|예루살렘 (현대 명칭)|name
Siyon Dağı|Mount Zion|시온산|name
Antakya|Antioch / Antakya|안디옥 / 안타키아|name
oymak|tribe|지파
öğrenci|student / disciple|학생 / 제자
elçi|messenger / apostle in context|사자 / 문맥상 사도
havari|apostle|사도
yardımcı|helper|돕는 사람`);
  const temple=vocab('foundation',17,`
Yasa|Law (in biblical context)|율법
Kutsal Yasa|Holy Law|거룩한 율법
Kutsal Yazı|Scripture (not a synonym for every use of Law)|성경 (율법과 항상 동의어는 아님)
Yasa Kitabı|Book of the Law|율법책
başkâhin|high priest|대제사장
kâhin|priest (biblical usage)|제사장
tapınak|temple|성전
çadır|tent|장막
Buluşma Çadırı|Tent of Meeting|회막|name
Levha Sandığı|Ark of the Testimony|증거궤|name
Antlaşma Sandığı|Ark of the Covenant|언약궤|name
sunak|altar|제단
havra|synagogue|회당
Babil Kulesi|Tower of Babel|바벨탑|name
ant içmek|swear an oath|맹세하다|verb
cüzam|leprosy / historical disease term|나병 / 역사적 질병 표현
Fısıh Bayramı|Passover|유월절|name
mayasız ekmek|unleavened bread|무교병
Kamış Denizi|Sea of Reeds|갈대 바다|name
Kızıldeniz|Red Sea|홍해|name
Ararat Dağı|Mount Ararat|아라랏산|name
Ağrı Dağı|modern Turkish mountain name|터키의 현대 산 이름|name
Getsemani bahçesi|Garden of Gethsemane|겟세마네 동산|name
Kutsal Yer|Holy Place|성소|name
En Kutsal Yer|Most Holy Place|지성소|name
Etiyopyalı hadım|Ethiopian eunuch|에티오피아 내시
Şabat Günü|Sabbath|안식일|name
sendelemek|stumble|비틀거리다|verb
kötürüm|historical term for a person unable to walk; avoid as a label today|걷기 어려운 사람의 옛 표현; 현대의 호칭으로 피함
budamak|prune|가지치다|verb
haydut|bandit|강도`);
  const church=vocab('foundation',22,`
vaftiz|baptism|세례
Rabbin duası|Lord's Prayer|주기도문
Rabbin sofrası|Lord's Supper|성찬
sunu|offering|헌금 / 예물
bağış|donation|기부
ondalık|tithe|십일조
şükran sunusu|thanksgiving offering|감사 예물
müjdeleme|evangelism / sharing the gospel|전도
hizmet|service / ministry|섬김 / 사역
tapınma|worship (not only singing)|경배 (노래만을 뜻하지 않음)
söz|word / message|말 / 말씀
kelam|word / discourse; God's word in context|말 / 담화; 문맥상 하나님의 말씀
vaaz|sermon|설교
pastör|pastor|목사
çoban|shepherd / pastor in context|목자 / 문맥상 목사
önder|leader|지도자
ihtiyar|elder (church role); elderly in other contexts|교회 장로; 다른 문맥에서는 노인
diyakon|deacon|집사
kardeş|sibling / fellow believer|형제자매 / 동료 신자
ilahi|hymn|찬송
dua|prayer|기도
tanıklık|testimony / witness|간증 / 증언
ibadet|worship / religious observance|예배 / 종교 행위
ibadethane|place of worship|예배 장소`);
  const salvation=vocab('foundation',23,`
aklamak|justify / acquit|의롭다 하다 / 무죄로 인정하다|verb
aklanmak|be justified / acquitted|의롭다 함을 받다 / 무죄로 인정되다|verb
bağışlamak|forgive / donate in another context|용서하다 / 다른 문맥에서는 기부하다|verb
bağışlanmak|be forgiven|용서받다|verb
çarmıha gerilmek|be crucified|십자가에 못 박히다|verb
diriliş|resurrection|부활
fidye|ransom; religious compensation in another context|속전; 다른 종교 문맥에서는 보상
günah işlemek|sin / commit a sin|죄를 짓다|verb
günahkâr|sinner|죄인
kefaret|atonement / expiation; practice differs by tradition|속죄 / 전통에 따라 다른 실천
put|idol|우상
putperestlik|idolatry|우상숭배
kurtarmak|save / rescue|구원하다 / 구조하다|verb
kurtulmak|be saved / escape|구원받다 / 벗어나다|verb
kurtuluş|salvation / rescue|구원 / 구조
Kurtarıcı|Saviour|구세주|name
lütuf|grace / favour|은혜 / 호의
merhamet|mercy / compassion|자비
ölümü yenmek|overcome death|죽음을 이기다|verb
özgür kılmak|set free|자유롭게 하다|verb
kutsal kılmak|sanctify / make holy|거룩하게 하다|verb
temiz kılmak|make clean|깨끗하게 하다|verb
pak kılmak|make pure|정결하게 하다|verb
yeniden doğmak|be born again|거듭나다|verb
Tanrı'nın gazabı|God's wrath|하나님의 진노
günahın ücreti|wages of sin|죄의 삯`);
  const discipleship=vocab('foundation',26,`
Tanrı'nın Egemenliği|Kingdom / reign of God|하나님 나라 / 통치
Üçlü Birlik|Trinity|삼위일체|name
Teslis|Trinity (another term)|삼위일체 (다른 용어)
günahtan arınmak|be cleansed from sin|죄에서 깨끗해지다|verb
benlik|self; flesh in some theological contexts|자아; 일부 신학 문맥의 육신
erdem|virtue|덕
esirgemek|spare / withhold, according to context|아끼다 / 문맥상 주지 않다|verb
diz çökmek|kneel|무릎 꿇다|verb
Tanrı'yı hoşnut etmek|please God|하나님을 기쁘시게 하다|verb
buyrukları yerine getirmek|keep commands|명령을 지키다|verb
peygamberlik sözü|prophetic word|예언의 말씀
ruhta yoksul olanlar|the poor in spirit|심령이 가난한 사람들
dar kapı|narrow gate|좁은 문
çetin yol|difficult path|험한 길
ayık kalmak|stay alert / sober|깨어 있다 / 정신을 차리다|verb
alçakgönüllülük|humility|겸손
tanık|witness|증인
hikmet|wisdom|지혜
himaye|protection|보호
sadakat|faithfulness / loyalty|신실함 / 충성
sadaka|alms / charitable giving|구제
şefkatli|compassionate|자비로운
özgür irade|free will|자유의지
hamdetmek|praise / give thanks|찬양하다 / 감사하다|verb
minnettar|grateful|감사하는
donatmak|equip|갖추어 주다|verb
kuşanmak|put on / gird oneself|입다 / 차다|verb
anımsamak|remember|기억하다|verb
itaat etmek|obey|순종하다|verb
feda etmek|sacrifice|희생하다|verb
Tanrı korkusu|fear / reverence of God|하나님을 경외함
Tanrı'nın huzuru|God's presence|하나님 앞 / 임재`);
  const growth=vocab('foundation',27,`
müjdeyi yaymak|spread the gospel|복음을 전하다|verb
secde etmek|prostrate oneself|엎드리다|verb
sadık kalmak|remain faithful|신실하게 남다|verb
yoldan sapmak|stray from the path|길에서 벗어나다|verb
hor görmek|despise / look down on|업신여기다|verb
elem görmek|experience grief|슬픔을 겪다|verb
beyan etmek|declare|선언하다|verb
yeni yaratık|new creation (older expression)|새 피조물 (옛 표현)
karanlığın hükümranlığı|dominion of darkness|어둠의 권세
bilgelik|wisdom|지혜
vahiy ruhu|spirit of revelation|계시의 영
esenlik|peace / well-being|평강 / 안녕
Tanrı'nın vaadi|God's promise|하나님의 약속
ayartılmak|be tempted (not necessarily commit the sin)|유혹받다 (죄를 지었다는 뜻은 아님)|verb
esinlemek|inspire|영감을 주다|verb
köşe taşı|cornerstone|모퉁이돌
kutsamak|bless|축복하다|verb
kudret|power / might|능력 / 권능
İnsanoğlu|Son of Man (title in context)|문맥상 인자|name
affetmek|forgive|용서하다|verb
inkâr etmek|deny|부인하다|verb
ihanet etmek|betray|배신하다|verb
cemaat|religious congregation|종교 공동체
topluluk|community / group|공동체 / 모임
murdar|unclean (ritual or older register)|부정한 (의례 또는 옛 말투)`);
  make('foundation','references',[2,3,4,9,10,11,12],['Finding and reading a Bible reference','성경 장절 찾고 읽기'],['Name the edition, book, chapter and verses before reading together.','함께 읽기 전에 번역본, 책, 장과 절을 말합니다.'],[
    line('Hangi çeviriyi kullanıyorsunuz?','Which translation do you use?','어떤 번역을 사용하세요?'),
    line('Ben Kutsal Kitap çevirisini kullanıyorum.','I use the Kutsal Kitap translation.','저는 Kutsal Kitap 번역을 사용해요.'),
    line('İkinci Korintliler, dördüncü bölüm, birden altıya kadar okuyalım.','Let us read Second Corinthians, chapter four, verses one through six.','고린도후서 4장 1절부터 6절까지 읽읍시다.'),
    line('Yeremya kırk altı, yirmi yedi ve yirmi sekizinci ayetler.','Jeremiah 46, verses 27 and 28.','예레미야 46장 27절과 28절입니다.')],
    ['The seminar distinguishes Kutsal Kitap (2001), Kitabı Mukaddes (1941) and the annotated edition (2017). Page numbers depend on the edition. Bölüm is chapter, ayet is verse; bap is an older chapter term. İncil can mean Gospel or, in Christian everyday usage, the New Testament; ask which scope the speaker intends. Tevrat, Zebur and the Christian Old Testament are not interchangeable categories. -den/-dan marks the start of a range; -e/-a kadar marks its endpoint. The source’s “1 Corinthians 5:16–17” is invalid; the intended related reading is 2 Corinthians 5:17, and the source error is recorded rather than silently quoted.',
    '자료는 Kutsal Kitap(2001), Kitabı Mukaddes(1941), 주석본(2017)을 구별합니다. 쪽 번호는 판본에 따라 다릅니다. bölüm은 장, ayet은 절, bap은 옛 장 표현입니다. İncil은 복음서나 기독교 일상 문맥의 신약을 뜻할 수 있으므로 범위를 확인하세요. Tevrat, Zebur와 기독교 구약은 서로 같은 범주가 아닙니다. -den/-dan은 범위의 시작, -e/-a kadar는 끝입니다. 자료의 고린도전서 5:16–17은 존재하지 않습니다. 관련 의도된 읽기는 고린도후서 5:17이며 오류를 기록합니다.'],
    ['… bölüm, … ayet','…den …e kadar okuyalım.'],q('Why name the edition rather than only the page number?','왜 쪽 번호만 말하지 않고 판본을 말하나요?',['Page numbering and wording can differ.','쪽 번호와 표현이 다를 수 있습니다.'],['Every edition has identical pages.','모든 판본의 쪽이 같습니다.'],'A book/chapter/verse reference survives different pagination; naming the edition also identifies the wording.','책·장·절은 쪽 배치가 달라도 찾을 수 있고 판본 이름은 본문 표현을 알려 줍니다.'),['Invite a partner to find two readings from the Bible collection and say the reference aloud without reading a model.','성경 모음에서 두 본문을 찾도록 초대하고 모델 없이 장절을 말하세요.'],vocab('foundation',4,'bölüm|chapter|장\nayet|verse|절\nçeviri|translation|번역\nbap|chapter (older register)|장 (옛 말투)'));
  make('foundation','books',[5,6],['Bible book names','성경 책 이름'],['Recognise all 66 book names and distinguish similar names in references.','성경 66권 이름을 알아보고 비슷한 이름을 구별합니다.'],[
    line('Yaratılış, Eski Antlaşma’nın ilk kitabıdır.','Genesis is the first book of the Old Testament.','창세기는 구약의 첫 책입니다.'),
    line('Matta, Markos, Luka ve Yuhanna’yı okuyalım.','Let us read Matthew, Mark, Luke and John.','마태, 마가, 누가, 요한복음을 읽읍시다.'),
    line('Yuhanna ile Birinci Yuhanna aynı kitap değil.','John and First John are not the same book.','요한복음과 요한일서는 같은 책이 아닙니다.')],
    ['Book titles are proper names. Ordinal numbers distinguish letters with similar titles. Learn the book label rather than guessing from a person’s name: Yakup can be Jacob as a person or James as the letter title. Turkish Bible book titles need not be a word-for-word rendering of the English title. The full Old and New Testament vocabulary lists below are reference material as well as reviewable words.',
    '책 이름은 고유명사입니다. 서수는 비슷한 서신 제목을 구별합니다. 인물 이름만 보고 추측하지 말고 책 표기를 배우세요. Yakup은 인물 야곱 또는 서신 야고보서를 가리킬 수 있습니다. 터키어 책 이름은 영어 제목의 단어별 번역일 필요가 없습니다. 아래 구약·신약 전체 목록은 참고 자료이자 복습할 단어입니다.'],
    ['Birinci / İkinci …','… kitabını açalım.'],q('Which title identifies an epistle rather than the Gospel of John?','요한복음이 아니라 서신을 가리키는 이름은?',['Birinci Yuhanna','요한일서'],['Yuhanna','요한복음'],'Birinci qualifies the letter title. Always read the number with the book name.','Birinci는 서신 제목을 구별하므로 번호도 함께 읽으세요.'),['Give a partner five book references, including one numbered letter. Ask them to repeat the names.','번호가 있는 서신을 포함해 다섯 책을 말하고 상대가 이름을 반복하게 하세요.'],[...booksOT,...booksNT]);
  make('foundation','names',[7,8,13,14,15,16,17],['People, places and respectful titles','인물·장소와 존칭'],['Identify biblical names and ask about a religious title without assuming agreement.','성경 인물 이름을 알아보고 동의를 가정하지 않고 종교 존칭을 묻습니다.'],[
    line('Bu metinde Musa’dan söz ediliyor.','This text speaks about Moses.','이 본문은 모세에 관해 말합니다.'),
    line('Hazreti İsa derken neyi kastediyorsunuz?','What do you mean when you say Hazreti İsa?','Hazreti İsa라고 할 때 무엇을 뜻하세요?'),
    line('Hristiyanlar İsa’ya Rab ve Kurtarıcı der.','Christians call Jesus Lord and Saviour.','기독교인은 예수님을 주님과 구세주라고 부릅니다.'),
    line('Bu yerin bugünkü adı nedir?','What is this place called today?','이 장소의 오늘날 이름은 무엇인가요?')],
    ['Hz. abbreviates Hazreti, an honorific, not literally “prophet.” It does not by itself specify a speaker’s Christology. Islamic and Christian uses of İncil, İsa and sacred-book categories need contextual clarification. The source presents a religious position about earlier books; it is not independent historical proof that all manuscripts were changed, nor a survey of every Muslim’s views. Names and places in the lists may have different biblical and modern forms (Yeruşalim / Kudüs). Kutsal Yazı is Scripture, not always Law; Kamış Denizi literally means Sea of Reeds, while Kızıldeniz means Red Sea. Use respectful modern descriptions of disability instead of making older translation terms personal labels.',
    'Hz.는 Hazreti라는 존칭의 약자이며 문자적으로 “선지자”가 아닙니다. 이 표현만으로 상대의 예수 이해를 알 수 없습니다. İncil, İsa와 경전 범주의 이슬람·기독교 용법은 문맥을 확인해야 합니다. 앞선 경전이 바뀌었다는 자료의 종교적 입장은 모든 사본이 변경되었다는 독립적인 역사 증거나 모든 무슬림의 의견 조사가 아닙니다. Yeruşalim/Kudüs처럼 성경과 현대 지명이 다를 수 있습니다. Kutsal Yazı는 성경이며 항상 율법을 뜻하지 않습니다. Kamış Denizi는 갈대 바다, Kızıldeniz는 홍해입니다. 옛 장애 표현을 현재의 사람 호칭으로 사용하지 마세요.'],
    ['… derken neyi kastediyorsunuz?','Bu metinde …dan söz ediliyor.'],q('Does Hz. literally translate as “prophet”?','Hz.의 문자적 뜻은 “선지자”인가요?',['No. It is an honorific; clarify the speaker’s meaning.','아니요. 존칭이며 상대의 뜻을 확인합니다.'],['Yes; the abbreviation defines every belief about Jesus.','네. 이 약자가 예수에 대한 모든 믿음을 정의합니다.'],'A respectful title is not a complete doctrinal statement.','존칭은 완전한 교리 진술이 아닙니다.'),['Choose three names and two places from the lists. Explain which reading they occur in and ask one respectful clarification question.','목록에서 인물 셋과 장소 둘을 고르고 관련 읽기를 설명하며 존중하는 확인 질문을 하세요.'],[...core,...otPeople,...ntPeople,...history,...temple]);
  make('foundation','church',[22,23,26,27],['Church, salvation and discipleship words','교회·구원·제자도 어휘'],['Use church terms in context and distinguish dictionary meaning from Christian explanation.','교회 용어를 문맥에서 사용하고 사전 뜻과 기독교 설명을 구별합니다.'],[
    line('Kilise topluluğumuz birlikte dua ediyor.','Our church community prays together.','우리 교회 공동체는 함께 기도합니다.'),
    line('Lütuf, Tanrı’nın hak etmediğimiz iyiliğidir.','Grace is God’s goodness that we have not earned.','은혜는 우리가 얻을 자격이 없는 하나님의 선하심입니다.'),
    line('İhtiyar derken kilisedeki bir görevi kastediyorum.','By elder I mean a role in the church.','장로라고 할 때 교회 직분을 뜻합니다.'),
    line('Ayartılmak ile günah işlemek aynı şey değildir.','Being tempted and committing sin are not the same thing.','유혹받는 것과 죄를 짓는 것은 같은 일이 아닙니다.')],
    ['The same word can carry everyday, institutional or theological meanings. İhtiyar is an elder in a church context but can mean elderly; kardeş is a sibling or fellow believer. Tapınma is worship, not simply singing, and vaaz is a sermon while söz/kelam can mean word or message. Bağışlamak can mean forgive or donate. The passive bağışlanmak presents the recipient, while bağışlamak presents the action. Ayartılmak means be tempted, not that someone necessarily sinned. Grace, justification and the Trinity require an explanation of Christian belief beyond their dictionary labels. Inspect the vocabulary groups and explain the intended sense before comparing religions.',
    '같은 단어가 일상·기관·신학의 뜻을 가질 수 있습니다. ihtiyar는 교회 장로 또는 노인, kardeş는 형제자매 또는 동료 신자입니다. tapınma는 노래만이 아니라 경배이고 vaaz는 설교, söz/kelam은 말이나 말씀입니다. bağışlamak은 용서하다 또는 기부하다입니다. bağışlanmak은 받는 사람을, bağışlamak은 행위를 나타냅니다. ayartılmak은 유혹받는 것이며 반드시 죄를 지었다는 뜻이 아닙니다. 은혜, 칭의, 삼위일체는 사전 단어를 넘어 기독교 믿음을 설명해야 합니다. 종교를 비교하기 전에 의도한 뜻을 확인하세요.'],
    ['… derken … kastediyorum.','… ile … aynı şey değildir.'],q('What does bağışlanmak foreground?','bağışlanmak은 무엇을 드러내나요?',['Being forgiven: the recipient of the action.','용서받는 것: 행위를 받는 사람'],['Donating something as an active subject.','능동 주어로 무엇을 기부하는 것'],'The -n- passive in this verb changes the relation of the subject to the action; context still identifies who forgives.','이 동사의 -n- 피동은 주어와 행위의 관계를 바꾸며 누가 용서하는지는 문맥으로 압니다.'),['Explain three words to a partner in ordinary Turkish, giving both an everyday meaning where relevant and the Christian sense used here.','세 단어를 쉬운 터키어로 설명하며 해당하면 일상 뜻과 여기의 기독교 뜻을 모두 제시하세요.'],[...church,...salvation,...discipleship,...growth]);
  make('foundation','vowel-loss',[21],['Vowel loss in a sentence','문장 속 모음 탈락'],['Recognise lexical vowel loss without applying it to every two-syllable word.','모든 두 음절 단어에 적용하지 않고 어휘별 모음 탈락을 알아봅니다.'],[
    line('ağız → ağzım; burun → burnum; boyun → boynum','mouth → my mouth; nose → my nose; neck → my neck','입 → 내 입; 코 → 내 코; 목 → 내 목'),
    line('oğul → oğlu; şehir → şehri; fikir → fikrim','son → his/her son; city → the city (object) or his/her city; idea → my idea','아들 → 그의 아들; 도시 → 도시를 또는 그의 도시; 생각 → 내 생각'),
    line('akıl → aklım; emir → emri; lütuf → lütfu','mind → my mind; command → the command (object) or his/her command; grace → the grace (object) or his/her grace','정신 → 내 정신; 명령 → 명령을 또는 그의 명령; 은혜 → 은혜를 또는 그의 은혜')],
    ['Some listed nouns lose an unstressed high vowel when a vowel-initial suffix is attached. This is lexically conditioned, not a universal rule for all two-syllable nouns. Restore the dictionary form when searching. In lütfu, the stem surfaces as lütf-. The -u can be accusative or third-person possession: determine it from the sentence, not the isolated spelling. In Rabbin lütfu, the possessor Rabbin makes possession clear. The nine source examples above retain this ambiguity where no sentence is supplied.',
    '일부 명사는 모음으로 시작하는 접미사 앞에서 강세 없는 고모음을 잃습니다. 어휘에 따른 현상이며 모든 두 음절 명사의 보편 규칙이 아닙니다. 검색할 때 사전형을 복원하세요. lütfu의 어간은 lütf-로 나타납니다. -u는 목적격 또는 3인칭 소유일 수 있어 문장으로 판단합니다. Rabbin lütfu에서는 소유자 Rabbin이 소유를 분명하게 합니다. 위 아홉 예는 문장이 없을 때의 중의성을 유지합니다.'],
    ['Rabbin lütfu','Benim fikrim …'],q('Can isolated şehri prove that -i is accusative?','문장 없는 şehri만으로 -i가 목적격임을 확정할 수 있나요?',['No; possession is also possible, so inspect the sentence.','아니요. 소유도 가능하므로 문장을 봅니다.'],['Yes; this suffix has only one function.','네. 이 접미사는 기능이 하나입니다.'],'The same surface suffix can mark different grammatical relations.','같은 표면 형태가 다른 문법 관계를 표시할 수 있습니다.'),['Use fikrim and ağzım in original sentences, then explain how you recovered fikir and ağız.','fikrim과 ağzım으로 자신의 문장을 쓰고 fikir와 ağız를 복원한 방법을 설명하세요.'],[clinic('lütfu','his grace / the grace as object','그의 은혜 / 목적어 은혜','lütuf → lütf + u','grace + possession or accusative','은혜 + 소유 또는 목적격','Vowel loss; the sentence decides the suffix function.','모음 탈락이며 문장이 접미사 기능을 결정합니다.')]);
  make('foundation','voice',[24],['Active, passive and reflexive readings','능동·피동·재귀 해석'],['Identify who acts and who is affected rather than classifying only by a suffix.','접미사만으로 분류하지 않고 행위자와 영향을 받는 사람을 파악합니다.'],[
    line('Ahmet yıkandı.','Ahmet washed himself (in this intended reading).','아흐메트는 자신을 씻었습니다 (여기서 의도한 해석).'),
    line('Sınıf yıkandı.','The classroom was washed.','교실이 씻겼습니다.'),
    line('Öğrenciler bayram için sınıfı süsledi.','The students decorated the classroom for the celebration.','학생들이 축제를 위해 교실을 꾸몄습니다.'),
    line('Okulumuz süslendi. Fadime düğüne giderken süslendi.','Our school was decorated. Fadime dressed herself up for the wedding.','우리 학교가 꾸며졌습니다. 파디메는 결혼식에 가면서 자신을 꾸몄습니다.')],
    ['The seminar contrasts the intended reflexive reading of Ahmet yıkandı with the passive Sınıf yıkandı. A human subject can also be washed by someone else, so context matters. -n- and -l- alone do not label every verb reflexive or passive. Süsle-di is active past; süsle-n-di changes the relation between the subject and the decorating. -ımız in okulumuz marks our school. Identify an agent when present, the affected entity and whether the subject acts on themself.',
    '자료는 Ahmet yıkandı의 의도된 재귀 해석과 Sınıf yıkandı의 피동을 비교합니다. 사람도 다른 사람이 씻길 수 있으므로 문맥이 중요합니다. -n-과 -l-만으로 모든 동사를 재귀나 피동으로 단정할 수 없습니다. süsle-di는 능동 과거이고 süsle-n-di는 주어와 꾸미는 행위의 관계를 바꿉니다. okulumuz의 -ımız는 “우리의”입니다. 행위자, 영향을 받는 대상, 주어가 자신에게 행위하는지를 확인하세요.'],
    ['… sınıfı süsledi.','… süslendi.'],q('Why is Sınıf yıkandı normally passive?','Sınıf yıkandı를 보통 피동으로 읽는 이유는?',['The classroom is affected; it does not wash itself.','교실은 행위를 받으며 자신을 씻지 않습니다.'],['Every -n- is always reflexive.','모든 -n-은 항상 재귀입니다.'],'Interpret the subject and action together; suffix shape alone is insufficient.','주어와 행위를 함께 해석하며 접미사 모양만으로는 부족합니다.'),['Describe cleaning a room with an active sentence and a passive sentence. Explain what changes in focus.','방을 청소하는 능동 문장과 피동 문장을 쓰고 초점의 변화를 설명하세요.'],[clinic('süslendi','was decorated / dressed up','꾸며졌다 / 자신을 꾸몄다','süsle + n + di','decorate + voice + past','꾸미다 + 태 + 과거','Passive or reflexive according to subject and context.','주어와 문맥에 따라 피동 또는 재귀입니다.')]);
  make('foundation','fidye',[25],['Fidye and kefaret: context before comparison','Fidye와 kefaret: 비교 전에 문맥'],['Distinguish religious-law terminology from Christian theological usage.','종교법 용어와 기독교 신학 용법을 구별합니다.'],[
    line('Fidye kelimesini burada hangi anlamda kullanıyorsunuz?','In what sense are you using fidye here?','여기서 fidye를 어떤 뜻으로 사용하세요?'),
    line('Oruç fidyesi ile Hristiyanlıktaki fidye açıklaması aynı bağlamda değil.','Fasting compensation and the Christian explanation of ransom are not in the same context.','금식 보상과 기독교의 속전 설명은 같은 문맥이 아닙니다.'),
    line('Bu miktar hangi yıl için belirtilmiş?','For which year is this amount stated?','이 금액은 어느 연도를 위한 것인가요?')],
    ['In the cited Islamic-law discussion, fidye concerns compensation in specified circumstances and kefaret expiation for specified violations; kaza orucu is a make-up fast. Conditions and practices vary and should be checked with the appropriate authoritative source. Christian ransom/atonement explanations are doctrinal comparisons, not literal equivalents of payment rules. The seminar’s 2026 figures and arithmetic are dated examples; this course does not publish them as current required amounts. Ask what the term means in this sentence before comparing it with Christ’s saving work.',
    '인용된 이슬람법 문맥에서 fidye는 특정 상황의 보상, kefaret은 특정 위반의 속죄이며 kaza orucu는 보충 금식입니다. 조건과 실천은 달라 적절한 권위 자료를 확인해야 합니다. 기독교의 속전·속죄는 교리 비교이지 지불 규정의 문자적 동의어가 아닙니다. 자료의 2026년 금액과 계산은 당시 예이며 현재 의무 금액으로 게시하지 않습니다. 그리스도의 구원과 비교하기 전에 이 문장에서의 뜻을 물으세요.'],
    ['… hangi anlamda?','Bu miktar hangi yıl için?'],q('How should the seminar’s dated amounts be used?','자료의 특정 연도 금액은 어떻게 사용하나요?',['As dated examples, checking current rules separately.','당시 예로 사용하고 현재 규정은 따로 확인합니다.'],['As a permanent price for every person.','모든 사람의 영구적인 금액으로 사용합니다.'],'A language example is not a current personal religious ruling.','언어 예는 현재 개인 종교 판정이 아닙니다.'),['Explain the contextual distinction in three Turkish sentences and ask one question instead of giving financial instructions.','터키어 세 문장으로 문맥 차이를 설명하고 금전 지시 대신 질문 하나를 하세요.'],vocab('foundation',25,'oruç fidyesi|compensation connected with fasting|금식 관련 보상\nkaza orucu|make-up fast|보충 금식\nyemin kefareti|expiation connected with an oath|맹세 관련 속죄'));
  const blessings=vocab('foundation',35,`
Rab seni bereketlesin.|May the Lord bless you.|주님이 너를 복 주시길.
Rab seninle olsun.|May the Lord be with you.|주님이 너와 함께하시길.
Rab yolunu açsın.|May the Lord open your way.|주님이 너의 길을 여시길.
Rab seni güçlendirsin.|May the Lord strengthen you.|주님이 너를 강하게 하시길.
Rab sana şifa versin.|May the Lord give you healing.|주님이 너에게 치유를 주시길.
Rabbin şifası ailenin üzerinde olsun.|May the Lord's healing be upon your family.|주님의 치유가 너의 가족에게 있기를.
Rab sana acil şifalar versin.|May the Lord grant you a speedy recovery.|주님이 너에게 빠른 회복을 주시길.
Rab sana huzur versin.|May the Lord give you peace.|주님이 너에게 평안을 주시길.
Rab seni teselli etsin.|May the Lord comfort you.|주님이 너를 위로하시길.
Hamdolsun.|Praise be to God.|하나님께 찬양을.
Esen kal.|Stay well / in peace.|평안히 지내.
Şükürler olsun.|Thanks be to God.|하나님께 감사를.
Size esenlik olsun.|Peace be with you.|여러분께 평강이 있기를.
Rab seni korusun.|May the Lord protect you.|주님이 너를 지키시길.
Rab seni kutsasın.|May the Lord bless you.|주님이 너를 복 주시길.
Rabbe övgüler olsun.|Praise be to the Lord.|주님께 찬양을.
Rabbimize şükürler olsun.|Thanks be to our Lord.|우리 주님께 감사를.
Rabbin adı yücelsin.|May the Lord's name be exalted.|주님의 이름이 높임 받으시길.
Rabbe yücelik olsun.|Glory be to the Lord.|주님께 영광을.`);
  make('foundation','blessings',[35],['Blessings and everyday encouragement','축복과 일상 격려'],['Use wishes with the right person and distinguish a prayer from a guaranteed outcome.','인칭에 맞는 소원을 사용하고 기도와 결과 보장을 구별합니다.'],[
    line('Rab seni güçlendirsin.','May the Lord strengthen you.','주님이 너를 강하게 하시길.'),
    line('Rab size esenlik versin.','May the Lord give you peace.','주님이 여러분께 평강을 주시길.'),
    line('Sizin için dua etmemi ister misiniz?','Would you like me to pray for you?','당신을 위해 기도하기를 원하세요?')],
    ['-sin/-sın marks a third-person wish or command here: the Lord is the grammatical subject. Seni is the singular familiar direct object; sana is the singular recipient. Size can be respectful singular or plural. These forms express a wish, not a prediction that healing must occur. Ask permission when speaking to someone who may not welcome prayer. The source typo yücellik is corrected to yücelik.',
    '여기의 -sin/-sın은 3인칭 소원·명령이며 문법 주어는 주님입니다. seni는 친근한 단수 목적어, sana는 단수 받는 사람, size는 존대 단수나 복수입니다. 치유가 반드시 일어난다는 예측이 아니라 소원입니다. 기도를 원하지 않을 수 있는 사람에게 먼저 허락을 물으세요. 자료의 yücellik은 yücelik으로 바로잡았습니다.'],
    ['Rab sana / size … versin.','Rab seni / sizi …'],q('In Rab sana şifa versin, what is sana?','Rab sana şifa versin에서 sana는?',['The recipient: to you.','받는 사람: 너에게'],['The grammatical subject: you.','문법 주어: 너'],'Rab is the subject; san-a is the recipient. The -sin wish does not make sana the subject.','Rab이 주어이고 sana는 받는 사람입니다. -sin 소원형이 sana를 주어로 만들지 않습니다.'),['Offer encouragement in both familiar and respectful forms, then ask whether prayer would be welcome.','친근한 말투와 존대 말투로 격려하고 기도를 원하는지 물으세요.'],blessings);
  const parables=vocab('foundation',36,`
Tohum Benzetmesi|parable of the sower|씨 뿌리는 자의 비유
Deliceler Benzetmesi|parable of the weeds|가라지 비유
Hardal Tanesi ve Maya Benzetmeleri|mustard seed and yeast parables|겨자씨와 누룩 비유
Kaybolan Koyun Benzetmesi|parable of the lost sheep|잃어버린 양 비유
Acımasız Köle Benzetmesi|parable of the unforgiving servant|용서하지 않는 종 비유
On Kız Benzetmesi|parable of the ten virgins|열 처녀 비유
Emanet Para Benzetmesi|parable of entrusted money / talents|맡겨진 돈 / 달란트 비유
Bağ Kiracıları Benzetmesi|parable of the vineyard tenants|포도원 소작인 비유
Şölen Benzetmesi|parable of the banquet|잔치 비유
Kaybolan Oğul Benzetmesi|parable of the lost son|잃어버린 아들 비유
Kaybolan Para Benzetmesi|parable of the lost coin|잃어버린 동전 비유
Define ve İnci Benzetmeleri|treasure and pearl parables|보화와 진주 비유`);
  const fruit=vocab('foundation',38,'sevgi|love|사랑\nsevinç|joy|기쁨\nesenlik|peace|평강\nsabır|patience|인내\nşefkat|compassion|자비\niyilik|goodness|선함\nbağlılık|faithfulness in this passage|이 본문의 신실함\nyumuşak huyluluk|gentleness|온유\nözdenetim|self-control|절제');
  make('foundation','stories',[36,37,38,39],['Story titles, disciples and character','이야기 제목·제자·성품'],['Recognise parable titles and discuss a source reading without confusing a title with the full story.','비유 제목을 알아보고 제목과 전체 이야기를 혼동하지 않으며 읽기를 나눕니다.'],[
    line('Kaybolan Koyun Benzetmesi’ni birlikte okuyalım.','Let us read the parable of the lost sheep together.','잃어버린 양 비유를 함께 읽읍시다.'),
    line('Bağ kiracıları ile bağ işçileri aynı başlık değildir.','Vineyard tenants and vineyard workers are not the same title.','포도원 소작인과 포도원 품꾼은 같은 제목이 아닙니다.'),
    line('Bu hafta sabır ve özdenetim üzerine düşünmek istiyorum.','This week I want to reflect on patience and self-control.','이번 주에는 인내와 절제를 생각하고 싶어요.')],
    ['Benzetme means comparison or parable in this context. Kaybol-an is a participle: the sheep that is lost. A title is not a quotation of the story. Read the surrounding passage before discussing application. The source’s Korean label for Bağ Kiracıları was the workers; it is corrected to tenants. Matthew 10:2–4 names the apostles; Galatians 5:22–23 lists the fruit of the Spirit. The full passages are linked in Bible. Select one quality and describe a concrete action, rather than scoring spiritual character numerically.',
    'benzetme는 비교 또는 이 문맥의 비유입니다. kaybol-an은 “잃어버린” 분사입니다. 제목은 이야기의 직접 인용이 아닙니다. 적용 전에 주변 문맥을 읽으세요. Bağ Kiracıları의 한국어 품꾼 표기를 소작인으로 수정했습니다. 마태복음 10:2–4는 사도 이름, 갈라디아서 5:22–23은 성령의 열매 목록입니다. 성경 메뉴에서 전체 본문을 연결합니다. 성품을 숫자로 채점하지 않고 한 성품과 구체적인 행동을 설명하세요.'],
    ['… üzerine düşünmek istiyorum.','Bu hikâyede …'],q('What does Bağ Kiracıları refer to?','Bağ Kiracıları는 누구를 가리키나요?',['Vineyard tenants.','포도원 소작인'],['The hired workers in a different parable.','다른 비유의 고용된 품꾼'],'Kiracı means tenant; işçi means worker. Similar settings do not make the parables identical.','kiracı는 소작인, işçi는 노동자입니다. 배경이 비슷해도 같은 비유는 아닙니다.'),['Choose a parable reference and ask two open questions about it. Describe one practical use of patience this week.','비유 본문을 골라 열린 질문 둘을 하고 이번 주 인내의 실천 하나를 설명하세요.'],[...parables,...fruit]);

  const chartNames=vocab('foundation',7,`
Âdem|Adam (source chart)|아담 (자료 표)|name
İdris|Idris (Islamic tradition)|이드리스 (이슬람 전통)|name
Nuh|Noah (source chart)|노아 (자료 표)|name
Hud|Hud (Islamic tradition)|후드 (이슬람 전통)|name
Salih|Salih (Islamic tradition)|살리흐 (이슬람 전통)|name
İbrahim|Abraham (source chart)|아브라함 (자료 표)|name
Lut|Lot (source chart)|롯 (자료 표)|name
İsmail|Ishmael (source chart)|이스마엘 (자료 표)|name
İshak|Isaac (source chart)|이삭 (자료 표)|name
Yakup|Jacob (source chart)|야곱 (자료 표)|name
Yusuf|Joseph (source chart)|요셉 (자료 표)|name
Eyüp|Job (source chart)|욥 (자료 표)|name
Şuayb|Shuayb (Islamic tradition)|슈아이브 (이슬람 전통)|name
Musa|Moses (source chart)|모세 (자료 표)|name
Harun|Aaron (source chart)|아론 (자료 표)|name
Davut|David (source chart)|다윗 (자료 표)|name
Süleyman|Solomon (source chart)|솔로몬 (자료 표)|name
İlyas|Elijah (source chart)|엘리야 (자료 표)|name
Elyesa|Elisha (source chart)|엘리사 (자료 표)|name
Zülkifl|Dhul-Kifl (Islamic tradition)|줄키플 (이슬람 전통)|name
Yunus|Jonah (source chart)|요나 (자료 표)|name
Zekeriya|Zechariah (source chart)|사가랴 (자료 표)|name
Yahya|John (Islamic name in the source)|야흐야 (자료의 이슬람 이름)|name
İsa|Jesus (source chart)|예수 (자료 표)|name
Muhammed|Muhammad (source chart)|무함마드 (자료 표)|name`);
  const namesLesson=lessons.find(l=>l.id==='foundation-names');namesLesson.words.push(...chartNames);
  namesLesson.explanation.en+=' The p.7 chart’s names are included as source vocabulary, without its unverified occurrence counts or third-party image. Recognise Yahya alongside the Bible’s Vaftizci Yahya / Yuhanna naming conventions; shared or corresponding names do not prove identical narratives. The chart spelling Şuayp is normalised to Şuayb.';
  namesLesson.explanation.ko+=' 7쪽 표의 이름은 출처 어휘로 포함하며 검증하지 않은 등장 횟수와 제삼자 이미지는 싣지 않습니다. Yahya와 성경의 Vaftizci Yahya / Yuhanna 이름 관례를 알아보되 같거나 대응되는 이름만으로 같은 서사를 입증하지 않습니다. 표의 Şuayp 표기는 Şuayb로 정리했습니다.';
  // Additional prayer, dialogue, religion and spelling units follow below.
  window.SEMINAR_BUILD={B,line,sources,lessons,words,passages,vocab,clinic,make,q};
})();
