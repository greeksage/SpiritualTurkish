/**
 * Spiritual Turkish (터키어 기독교 사역·전도·기도·발음 학습 플랫폼)
 * Core Data Repository
 */

const APP_DATA = {
  // -------------------------------------------------------------
  // TAB 1: 발음 클리닉 (Pronunciation Lab)
  // -------------------------------------------------------------
  pronunciation: {
    oxQuiz: [
      {
        id: 1,
        question: "터키어 Bal은 한국어 '발'과 소리가 같다?",
        answer: "X",
        word: "Bal",
        translation: "꿀 (Honey)",
        ipa: "[bɑl]",
        reason: "터키어 'B'는 완전 유성음(Voiced Bilabial Plosive [b])입니다. 한국어 초성 'ㅂ'은 무성 무기음[p]에 가깝기 때문에 터키인 귀에는 'Pal'처럼 들릴 수 있습니다. 입술을 다문 상태에서 성대를 먼저 울리며 터뜨려야 합니다.",
        tip: "입술을 떼기 전에 목울대를 울리며 '으발'하듯 강하게 울려 발음해 보세요."
      },
      {
        id: 2,
        question: "터키어 Dede는 한국어 '데데'와 소리가 같다?",
        answer: "X",
        word: "Dede",
        translation: "할아버지 (Grandfather)",
        ipa: "[deˈde]",
        reason: "터키어 'D'는 유성 치조 파열음([d])으로 어두에서도 성대가 강하게 울리는 완전 유성음입니다. 한국어 초성 'ㄷ'은 무성음([t])이라 한국식으로 발음하면 터키인들은 'Tete'로 오인할 수 있습니다.",
        tip: "혀끝을 윗니 뒤 잇몸에 대고 목소리를 진동시키며 '드데' 느낌으로 성대를 울려야 합니다."
      },
      {
        id: 3,
        question: "터키어 Gemi는 한국어 '게미'와 소리가 같다?",
        answer: "X",
        word: "Gemi",
        translation: "배 / 선박 (Ship)",
        ipa: "[ɟeˈmi]",
        reason: "터키어 'G'는 유성 연구개 파열음([ɡ])으로 완전 유성음입니다. 어두에서 성대 진동이 명확해야 하며, 전설모음(e, i) 앞에서는 구개음화된 [ɟ] 소리가 납니다. 한국어 '게'처럼 약하게 발음하면 'Kemi'로 들릴 수 있습니다.",
        tip: "성대를 확실히 울려 주며 목 깊숙한 곳에서 소리를 밀어내야 합니다."
      },
      {
        id: 4,
        question: "터키어 Samsun의 S는 한국어 '스'와 같다?",
        answer: "X",
        word: "Samsun",
        translation: "삼순 (터키 흑해 도시명)",
        ipa: "[sɑmˈsun]",
        reason: "터키어 'S'는 혀끝을 윗니 뒤 잇몸에 바짝 대고 공기를 강하게 뿜는 무성 치조 마찰음([s])입니다. 한국어 '스'([sɯ])처럼 불필요한 모음 '으'가 붙지 않으며, 한국어 '쓰'에 가까운 날카롭고 강한 마찰음입니다.",
        tip: "한국어 '삼순'보다는 혀끝에 힘을 준 강한 '쌈쑨'에 가깝게 바람을 날카롭게 뺍니다."
      },
      {
        id: 5,
        question: "Trabzon의 음절 분절은 Trab-zon이다?",
        answer: "O",
        word: "Trabzon",
        translation: "트라브존 (터키 북동부 항구 도시)",
        ipa: "[tɾɑbˈzon]",
        reason: "터키어 음절 분절(Heceleme) 규칙상, 외래어 및 어두 자음군이 있는 지명/차용어는 음절 분절 시 결합된 자음 덩어리에 따라 'Trab-zon'으로 2음절 분절됩니다. (T-rab-zon이 아님)",
        tip: "터키어 철자법(TDK)에서 어두 이중자음 차용어는 분절 시 앞 음절에 자음군을 묶어 Trab-zon으로 분할합니다."
      }
    ],

    syllables: [
      {
        word: "Trabzon",
        segmented: "Trab-zon",
        syllableCount: 2,
        korean: "트라브존 (성경의 트라페주스, 흑해 항구)",
        rule: "외래어 차용 지명: 어두 자음군(Tr-)이 첫 음절에 함께 묶여 'Trab-zon'으로 분절됩니다."
      },
      {
        word: "Bursa",
        segmented: "Bur-sa",
        syllableCount: 2,
        korean: "부르사 (초대교회 비티니아 지역의 주요 도시)",
        rule: "두 모음 사이에 자음 2개가 올 때: 첫 자음은 앞 음절로, 둘째 자음은 뒷 음절로 분절 (V-C / C-V 원칙)."
      },
      {
        word: "başlangıç",
        segmented: "baş-lan-gıç",
        syllableCount: 3,
        korean: "시작 / 태초 (창세기 1:1 'Başlangıçta')",
        rule: "어간 'baş' + 접미사 '-lan-' + '-gıç' 결합: 각 형태소의 모음을 중심으로 CVC-CVC-CVC 형태로 자연 분절."
      },
      {
        word: "müjde",
        segmented: "müj-de",
        syllableCount: 2,
        korean: "복음 / 기쁜 소식 (Evangelion)",
        rule: "두 모음(ü, e) 사이의 자음군(j, d): 'müj'와 'de'로 분절. 기독교 사역의 핵심 어휘입니다."
      },
      {
        word: "üçgen",
        segmented: "üç-gen",
        syllableCount: 2,
        korean: "삼각형 (삼위일체 Trinity 설명 시 자주 쓰임)",
        rule: "복합/파생어 구조: üç(3) + gen(모서리)의 어근 결합에 따라 정확히 2음절로 분할."
      },
      {
        word: "kurtarıcı",
        segmented: "kur-ta-rı-cı",
        syllableCount: 4,
        korean: "구원자 (Savior, 그리스도 예수)",
        rule: "연속된 접미사 결합(kurtar- + -ıcı): 각 모음마다 하나씩 음절이 형성되어 4음절로 전개."
      }
    ],

    sapkaPairs: [
      {
        without: {
          word: "hala",
          meaning: "고모 (아버지의 여자 형제)",
          ipa: "[hɑˈlɑ]",
          context: "Halam bizi yemeğe çağırdı. (고모가 우리를 식사에 초대했다.)"
        },
        with: {
          word: "hâlâ",
          meaning: "아직, 여전히 (Still / Yet)",
          ipa: "[haːˈlaː]",
          context: "İsa Mesih hâlâ yaşıyor ve çalışıyor! (예수 그리스도는 여전히 살아 역사하십니다!)"
        },
        explanation: "Şapka(düzeltme işareti ^)는 모음을 길게 발음(Uzun ses)하게 만듭니다. 'hala'(단모음)는 친척 고모이고, 'hâlâ'(장모음 [haːlaː])는 시간적 지속을 의미합니다."
      },
      {
        without: {
          word: "kar",
          meaning: "눈 (Snow)",
          ipa: "[kɑɾ]",
          context: "Dağlara beyaz kar yağdı. (산에 하얀 눈이 내렸다.)"
        },
        with: {
          word: "kâr",
          meaning: "이익, 유익, 영적 유익 (Profit / Gain)",
          ipa: "[kʲaːɾ]",
          context: "Tüm dünyayı kazanıp canını kaybederse kârı ne olur? (온 천하를 얻고도 제 목숨을 잃으면 무엇이 유익하리요? - 마태 16:26)"
        },
        explanation: "k 뒤의 â에 붙은 şapka는 k를 혀 앞쪽에서 부드럽게 구개음화([kʲ])시키며 a를 길게 소리냅니다. 복음서의 '영적 유익(kâr)'을 설명할 때 매우 중요한 구별입니다."
      },
      {
        without: {
          word: "tarihi",
          meaning: "그것의 역사 (그의 역사, 소유격 형태)",
          ipa: "[tɑːɾiˈhi]",
          context: "Kilisenin tarihi çok derindir. (교회의 역사는 매우 깊습니다.)"
        },
        with: {
          word: "tarihî",
          meaning: "역사적인 (Historical, 형용사)",
          ipa: "[tɑːɾiˈhiː]",
          context: "İsa'nın dirilişi tarihî bir gerçektir. (예수의 부활은 역사적 사실입니다.)"
        },
        explanation: "끝 모음 î의 장모음화는 명사를 관계형용사(Nisbet î'si)로 변환시킵니다. 신앙이 신화가 아닌 '역사적 사건(tarihî olay)'임을 밝힐 때 필수적입니다."
      },
      {
        without: {
          word: "adem",
          meaning: "없음, 부존재 (Non-existence, 아랍어 차용 철학어)",
          ipa: "[ɑˈdem]",
          context: "Adem-i merkeziyet (비집권화, 부재)"
        },
        with: {
          word: "Âdem",
          meaning: "아담 (첫 인간, Adam)",
          ipa: "[aːˈdem]",
          context: "İlk Âdem'de ölüm geldi, son Âdem Mesih'te yaşam geldi. (첫 아담 안에서 죽음이 왔고, 마지막 아담 그리스도 안에서 생명이 왔다 - 고전 15:45)"
        },
        explanation: "첫 글자 Â의 장음 표기는 인류의 조상 '아담(Âdem)'을 뜻하며 대문자로 표기됩니다."
      }
    ],

    speechPracticeWords: [
      { turkish: "Müjde", korean: "복음 (기쁜 소식)", category: "사역 핵심" },
      { turkish: "Kurtarıcı", korean: "구원자", category: "사역 핵심" },
      { turkish: "Çarmıh", korean: "십자가", category: "사역 핵심" },
      { turkish: "Kutsal Ruh", korean: "성령님", category: "신학" },
      { turkish: "Diriliş", korean: "부활", category: "신학" },
      { turkish: "Lütuf", korean: "은혜", category: "교리" },
      { turkish: "İman", korean: "믿음", category: "교리" },
      { turkish: "Esenlik", korean: "평강 / 샬롬", category: "축복" },
      { turkish: "Bereket", korean: "축복", category: "축복" },
      { turkish: "Bağışlama", korean: "용서 / 사죄", category: "교리" }
    ]
  },

  // -------------------------------------------------------------
  // TAB 2: 복음 전도 시뮬레이터 (Evangelism Dialogue Simulator)
  // -------------------------------------------------------------
  simulator: {
    scenarios: [
      {
        id: "scenario-circle",
        title: "천국과 구원의 확신 (원 비유)",
        subtitle: "Cennet Güvencesi ve Daire Benzetmesi - 행위의 불안에서 은혜의 확신으로",
        npc: {
          name: "Ahmet (아흐멧)",
          role: "카디쾨이의 금융회사 연구원",
          avatarBg: "bg-emerald-600",
          desc: "매일 5번의 기도(Namaz)를 지키지만 구원의 불확실성에 깊이 고뇌하는 30대 무슬림"
        },
        context: "카페에서 대화를 나누던 중, 아흐멧이 '우리가 아무리 열심히 살아도 마지막 날 하나님이 천국에 들여보내 주실지 지옥에 보낼지는 오직 알라의 기분에 달렸잖아요. 인간이 구원을 어떻게 미리 확신할 수 있나요?'라고 묻습니다.",
        steps: [
          {
            stepIndex: 1,
            npcSpeech: "Kimse cennete gideceğinden emin olamaz. Ben ne kadar namaz kılsam da, Allah son anda 'Ben seni affetmiyorum' derse cehenneme giderim. Kimse garantileyemez.",
            npcSpeechKo: "누구도 자기가 천국에 갈 거라고 확신할 수 없어요. 내가 아무리 기도를 많이 해도, 하나님이 마지막 순간에 '난 널 용서하지 않는다' 하시면 지옥에 가는 거죠. 누구도 장담 못 해요.",
            choices: [
              {
                id: "c1",
                text: "Ahmet Bey, kağıda elle kusursuz bir daire çizebilir misiniz? Elimiz ne kadar titrerse titresin, pergel olmadan mükemmel bir daire çizemeyiz, değil mi?",
                korean: "아흐멧 씨, 종이에 손으로 완전한 원을 그릴 수 있나요? 손이 아무리 정교해도 컴퍼스 없이는 찌그러질 수밖에 없잖아요, 안 그래요?",
                score: 35,
                feedbackType: "best",
                feedback: "탁월한 비유적 접근입니다! 인간의 불완전한 선행(찌그러진 원)과 하나님이 주신 완전한 구원의 기준(완전한 원)을 시각적으로 깨닫게 합니다.",
                theologyTip: "인간의 행위로는 결코 하나님의 거룩한 기준에 도달할 수 없음을 컴퍼스/원 비유로 설명하면 거부감 없이 인정하게 됩니다."
              },
              {
                id: "c2",
                text: "Neden bu kadar korku içindesiniz? Dinimiz öyle demiyor, hemen İncil okuyun.",
                korean: "왜 그렇게 두려움 속에 사시나요? 우리 기독교는 그렇게 말하지 않아요. 당장 성경을 읽으세요.",
                score: -20,
                feedbackType: "bad",
                feedback: "상대의 실존적 불안을 공감하지 않고 배타적으로 압박하면 방어적 태도를 부릅니다.",
                theologyTip: "무슬림의 깊은 구원 불안은 정죄의 대상이 아니라 복음의 참 평안(Huzur)으로 이끄는 접촉점입니다."
              },
              {
                id: "c3",
                text: "Haklısınız, kimse bilemez. Ben de bazen şüpheye düşüyorum.",
                korean: "맞아요, 아무도 모르죠. 저도 가끔 의심이 들 때가 있어요.",
                score: -10,
                feedbackType: "neutral",
                feedback: "복음의 확신을 잃어버리고 불확실성에 동조해 버렸습니다.",
                theologyTip: "요한일서 5:13은 믿는 자들에게 영생이 있음을 '알게 하려 함'이라고 분명히 선포합니다."
              }
            ]
          },
          {
            stepIndex: 2,
            npcSpeech: "Doğru, elle çizilen daire her zaman biraz yamuk olur. Pergel gibi kusursuz bir alet gerekir. Ama bu cennetle nasıl bağlanıyor?",
            npcSpeechKo: "맞아요, 손으로 그리는 원은 항상 조금씩 삐뚤어지죠. 컴퍼스 같은 완전한 도구가 필요해요. 근데 이게 천국이랑 어떻게 연결되나요?",
            choices: [
              {
                id: "c1",
                text: "Bizim iyi amellerimiz elle çizilmiş o yamuk daire gibidir. Tanrı ise kusursuz kutsallık ister. İsa Mesih bizim yerimize kusursuz bir yaşam yaşadı ve bedeli ödedi. Biz O'na iman ettiğimizde, Tanrı bizi İsa'nın mükemmel dairesi içinde görür!",
                korean: "우리의 선행은 손으로 그린 삐뚤어진 원 같아요. 하지만 하나님은 완전한 거룩을 요구하시죠. 예수 그리스도께서 우리 대신 완전한 삶을 사시고 죗값을 치르셨습니다. 우리가 그분을 믿을 때, 하나님은 우리를 예수님의 완전한 원 안에서 보십니다!",
                score: 35,
                feedbackType: "best",
                feedback: "칭의(Aklanmak)와 대속의 은혜를 원 비유와 매끄럽게 연결하여 구원의 확신을 설명했습니다.",
                theologyTip: "로마서 3:22: '곧 예수 그리스도를 믿음으로 말미암아 모든 믿는 자에게 미치는 하나님의 의니 차별이 없느니라.'"
              },
              {
                id: "c2",
                text: "İsa pergeldir, biz de kağıdız. Anladınız mı?",
                korean: "예수님이 컴퍼스고 우리는 종이입니다. 이해하셨나요?",
                score: -15,
                feedbackType: "bad",
                feedback: "비유의 연결이 모호하여 메시지가 왜곡되었습니다.",
                theologyTip: "완전한 기준(공의)과 대속의 전가를 명확히 설명해야 합니다."
              },
              {
                id: "c3",
                text: "Sadece inanın, gerisini Tanrı halleder.",
                korean: "그냥 믿으세요, 나머지는 하나님이 알아서 하십니다.",
                score: 10,
                feedbackType: "neutral",
                feedback: "구체적인 신학적 설명이 부족합니다.",
                theologyTip: "예수님의 거룩한 의가 신자에게 덧입혀지는 은혜의 원리를 설명하세요."
              }
            ]
          }
        ]
      },
      {
        id: "scenario-1",
        title: "200리라 지폐와 순금의 비유",
        subtitle: "Buruşuk 200 lira ve 1g altın bedeli - 그리스도께서 치르신 생명의 값",
        npc: {
          name: "Mehmet (메흐멧)",
          role: "이스티클랄 거리의 대학생",
          avatarBg: "bg-amber-600",
          desc: "친절하지만 이슬람 선행주의(Sevap) 관점에 익숙한 20대 청년"
        },
        context: "카페에서 대화를 나누던 중, 메흐멧이 '사람은 누구나 죄를 짓지만, 착하게 살고 기도하면 알라가 자비로 다 봐주지 않겠어요?'라고 묻습니다.",
        steps: [
          {
            stepIndex: 1,
            npcSpeech: "Biz insanlar kusurluyuz tabii. Ama iyi işler yaparsak, oruç tutup sadaka verirsek Allah neden bizi affetmesin ki? Küçük hatalarımızı görmezden gelir.",
            npcSpeechKo: "우리 인간은 당연히 불완전하죠. 하지만 선행을 하고, 금식하고 구제하면 알라께서 왜 우릴 용서 안 하시겠어요? 작은 실수들은 눈감아 주시겠죠.",
            choices: [
              {
                id: "c1",
                text: "Hayır, yanılıyorsun! Senin yaptığın iyi işler Tanrı'nın gözünde paçavra gibidir. Hemen tövbe etmelisin!",
                korean: "아니요, 당신은 틀렸습니다! 당신의 선행은 하나님 보시기에 누더기 같습니다. 당장 회개해야 합니다!",
                score: -20,
                feedbackType: "bad",
                feedback: "지나치게 공격적인 직설법은 상대의 방어 기제를 자극하여 마음의 문을 닫게 만듭니다. 문화적 공감과 비유를 먼저 사용하세요.",
                theologyTip: "선행의 한계를 지적할 때도 정죄가 아닌 지혜로운 비유(지폐의 비유)로 접근하는 것이 사역적 지혜입니다."
              },
              {
                id: "c2",
                text: "Mehmet, sana bir şey göstereyim. Bak, bu 200 liralık banknotu yere atıp ezsem ve buruştursam, değeri düşer mi?",
                korean: "메흐멧, 내가 한 가지 보여줄게요. 봐요, 이 200리라짜리 지폐를 땅에 던져 밟고 구긴다고 해서 그 가치가 떨어질까요?",
                score: 30,
                feedbackType: "best",
                feedback: "완벽한 브릿지 접근법입니다! 상대방의 호기심을 유도하며 인간의 내재적 가치와 죄의 실재를 자연스럽게 시각화합니다.",
                theologyTip: "인간은 죄로 구겨졌으나 여전히 하나님의 형상(Tanrı'nın benzeyişi)으로서 고귀한 가치를 지닙니다."
              },
              {
                id: "c3",
                text: "Evet, Tanrı çok merhametlidir. Her din temelde aynı iyiliği öğretir zaten.",
                korean: "네, 하나님은 참 자비로우시죠. 모든 종교는 기본적으로 다 같은 선행을 가르치니까요.",
                score: -10,
                feedbackType: "neutral",
                feedback: "종교 다원주의적 타협입니다. 복음의 핵심인 '완전한 공의와 대속의 필요성'을 전할 기회를 잃게 됩니다.",
                theologyTip: "하나님의 사랑(Merhamet)을 말하되, 죄를 그냥 넘기실 수 없는 거룩한 공의(Adalet)를 놓쳐서는 안 됩니다."
              }
            ]
          },
          {
            stepIndex: 2,
            npcSpeech: "Düşmez tabii, hâlâ 200 liradır. Sonuçta devletin garantisi var üzerinde. Ama bunun günahla ne alakası var?",
            npcSpeechKo: "당연히 안 떨어지죠, 여전히 200리라예요. 국가의 보증이 찍혀 있으니까요. 근데 이게 죄랑 무슨 상관인가요?",
            choices: [
              {
                id: "c1",
                text: "Tam olarak öyle! Biz de günah yüzünden buruşsak bile Tanrı'nın gözünde değerliyiz. Ama buruşuk bir parayla borç ödeyebilirsin, peki bir adamın hayat borcunu neyle ödersin?",
                korean: "바로 그거예요! 우리도 죄 때문에 구겨졌지만 하나님의 눈엔 여전히 소중해요. 하지만 구겨진 돈으로 빚을 갚을 순 있어도, 사람의 생명의 빚은 무엇으로 갚을 수 있을까요?",
                score: 35,
                feedbackType: "best",
                feedback: "지폐의 가치에서 '생명의 값(Borç/Bedel)'으로 질문의 차원을 끌어올렸습니다. 상대방이 죄의 심각성을 자각하게 합니다.",
                theologyTip: "터키 문화에서 빚(Borç)과 권리(Hak)는 목숨만큼 무거운 개념입니다. 죄를 하나님께 진 생명의 빚으로 설명하면 깊이 와닿습니다."
              },
              {
                id: "c2",
                text: "Paranın değeri düşmez ama kirlenir. Kirlenen insan cehenneme gider. Bunu bilmelisin.",
                korean: "돈의 가치는 안 떨어져도 더러워지죠. 더러워진 사람은 지옥에 갑니다. 이걸 알아야 해요.",
                score: -15,
                feedbackType: "bad",
                feedback: "일방적인 공포 유발은 진정한 신뢰 관계 형성을 방해합니다. 복음은 기쁜 소식(Müjde)이어야 합니다.",
                theologyTip: "지옥의 경고보다 먼저 하나님의 구속 의지와 사랑의 가치를 제시해야 영혼이 감동을 받습니다."
              },
              {
                id: "c3",
                text: "Yani herkes günahkârdır. Sen de ben de. O yüzden çok düşünmeye gerek yok.",
                korean: "즉 누구나 죄인이라는 뜻이에요. 당신도 나도요. 그러니 너무 깊게 고민할 필요 없어요.",
                score: -5,
                feedbackType: "neutral",
                feedback: "대화의 긴장감을 잃고 피상적인 결론으로 넘어가 버렸습니다.",
                theologyTip: "죄의 보편성(Romalılar 3:23)을 인정하되, 그것이 가져오는 파멸적 결과와 해결책으로 나아가야 합니다."
              }
            ]
          },
          {
            stepIndex: 3,
            npcSpeech: "Hayat borcu mu? Mahkemede hâkim 'Çok iyi insansın, cezanı affettim' diyemez ki. Adalet gereği bedel ödenmeli. Peki bizim günah borcumuzu kim ödeyebilir?",
            npcSpeechKo: "생명의 빚이요? 법정에서 판사가 '너 참 착한 사람이니 벌을 면제해 줄게'라고 할 순 없잖아요. 정의상 대가를 치러야죠. 그럼 우리의 죄의 빚은 누가 갚아줄 수 있나요?",
            choices: [
              {
                id: "c1",
                text: "İşte müjde burada! Saf 1 gram altın gibi, hiç günah işlememiş kusursuz bir kurban lazımdı. İsa Mesih günahsız canını çarmıhta fidye olarak ödedi.",
                korean: "바로 여기에 복음이 있습니다! 순도 100% 1g 순금처럼, 죄를 전혀 짓지 않은 흠 없는 제물이 필요했습니다. 예수 그리스도께서 죄 없는 자신의 생명을 십자가에서 속전(Fidye)으로 치르셨습니다.",
                score: 35,
                feedbackType: "best",
                feedback: "흠 없는 제물(Kusursuz Kurban)과 대속(Fidye)의 교리를 상대방의 법정 비유와 완벽히 융합하여 선포했습니다!",
                theologyTip: "베드로전서 1:18-19: '너희가 대속함을 받은 것은 은이나 금같이 없어질 것으로 된 것이 아니요 오직 흠 없고 점 없는 어린 양 같은 그리스도의 보배로운 피로 된 것이니라.'"
              },
              {
                id: "c2",
                text: "Sen kendin ödeyeceksin. Herkes kendi günahını çeker.",
                korean: "당신 스스로 치러야 합니다. 누구나 자기 죄의 대가를 받는 법이죠.",
                score: -20,
                feedbackType: "bad",
                feedback: "복음의 핵심인 대속(Substitutionary Atonement)을 부정하고 율법적 절망으로 상대를 밀어 넣습니다.",
                theologyTip: "인간 스스로는 자신의 죗값을 영원한 사망 외에 갚을 길이 없습니다 (Romalılar 6:23)."
              },
              {
                id: "c3",
                text: "Hristiyanlıkta İsa bizim yerimize öldü derler ama bu bana da bazen mantıksız geliyor.",
                korean: "기독교에선 예수가 우리 대신 죽었다고 말하는데 저도 가끔 비논리적으로 느껴지긴 해요.",
                score: -15,
                feedbackType: "bad",
                feedback: "사역자 자신이 진리에 대한 확신이 흔들리는 모습을 보이면 신뢰를 완전히 잃습니다.",
                theologyTip: "십자가의 도는 멸망하는 자들에게는 미련한 것이요 구원을 받는 우리에게는 하나님의 능력입니다 (1.Korintliler 1:18)."
              }
            ]
          }
        ]
      },

      {
        id: "scenario-2",
        title: "성경 왜곡설 변증과 역사적 서력기원",
        subtitle: "İncil değiştirildi mi? & Milat / M.S. 서력기원의 역사적 의미",
        npc: {
          name: "Emre (엠레)",
          role: "토론을 좋아하는 대학 도서관 사서",
          avatarBg: "bg-sky-600",
          desc: "‘기독교 성경은 세월이 흐르며 변개(Tahrif)되었다’는 통념을 강하게 믿고 있는 청년"
        },
        context: "서점에서 성경을 살펴보는 당신을 보며 엠레가 다가와 묻습니다. '친구, 원래의 진짜 인질(İncil)은 하늘로 올려졌고 지금 성경은 변질된 것 아닌가요?'",
        steps: [
          {
            stepIndex: 1,
            npcSpeech: "Kusura bakma ama İncil'in orijinali kayboldu ve insanlar tarafından değiştirildi (tahrif edildi) diye biliyoruz. Dört farklı İncil olması da bunu kanıtlamıyor mu?",
            npcSpeechKo: "실례지만 인질의 원본은 유실되었고 사람들에 의해 왜곡(타흐리프)되었다고 알고 있어요. 네 개의 서로 다른 복음서가 있다는 사실도 그걸 증명하지 않나요?",
            choices: [
              {
                id: "c1",
                text: "Sen Kur'an'ı bile okumamışsın, cahilce konuşuyorsun!",
                korean: "당신은 쿠란조차 제대로 안 읽어봤군요, 무지한 소리입니다!",
                score: -25,
                feedbackType: "bad",
                feedback: "인신공격은 대화를 파탄냅니다. 온유함과 두려움으로 대답할 것을 준비해야 합니다 (1.Petrus 3:15).",
                theologyTip: "변증의 목적은 논쟁에서 이기는 것이 아니라 영혼을 그리스도께로 인도하는 것입니다."
              },
              {
                id: "c2",
                text: "Güzel bir soru Emre. Dört İncil değil, tek bir Müjde'nin dört tanığın gözünden anlatımıdır. Tıpkı bir olayı dört ayrı açıdan çeken kamera gibi. Peki sence Tanrı kendi Sözü'nü koruyamayacak kadar aciz midir?",
                korean: "좋은 질문이에요 엠레. 4개의 성경이 아니라 하나의 복음(Müjde)을 네 명의 목격자 관점에서 기록한 것입니다. 하나의 사건을 네 각도에서 찍은 카메라처럼요. 그런데 하나님이 자신의 말씀을 지키지 못하실 만큼 무력하실까요?",
                score: 35,
                feedbackType: "best",
                feedback: "4복음서의 상호보완적 성격을 '카메라 비유'로 탁월하게 해명하고, 하나님의 전능하심에 호소하여 성경의 보존성을 변증했습니다.",
                theologyTip: "이슬람 신학에서도 알라는 전능하다고 믿습니다. '성경이 변개되었다'는 주장은 역설적으로 '하나님이 말씀을 지키지 못했다'는 모순에 빠지게 됨을 짚어주는 핵심 변증법입니다."
              },
              {
                id: "c3",
                text: "Farklılıklar var ama önemli değil, ana fikir aynı.",
                korean: "차이점은 좀 있지만 중요하진 않아요, 큰 틀은 같으니까요.",
                score: 5,
                feedbackType: "neutral",
                feedback: "모호한 답변은 '역시 성경이 변질되었구나'라는 상대방의 의심을 굳혀줄 위험이 있습니다.",
                theologyTip: "5,800개 이상의 헬라어 사본 일치도와 사해 사본의 고고학적 정확성을 차분히 제시할 준비가 필요합니다."
              }
            ]
          },
          {
            stepIndex: 2,
            npcSpeech: "Haşa, Allah aciz değildir tabii ki. Ama tarihte insanlar kutsal metinleri kendi çıkarlarına göre değiştiremez mi? Hangi tarihte değiştirilmediğini nereden bileceğiz?",
            npcSpeechKo: "하샤(천만에요), 알라가 무력할 리는 없죠. 하지만 역사 속에서 인간들이 자기 이익에 맞게 성스러운 문헌을 바꿀 수는 없나요? 언제 안 바뀌었다는 걸 우리가 어떻게 알 수 있죠?",
            choices: [
              {
                id: "c1",
                text: "Tarih ve arkeoloji bize cevap veriyor: İsa'dan sonra 2. ve 3. yüzyıllardan kalan binlerce el yazması papirüs var. İznik Konsili'nden çok önceki metinlerle bugünkü İncil %99.5 aynıdır. Kim, ne zaman, hangi dünya kütüphanesindeki tüm kopyaları toplayıp değiştirebilir?",
                korean: "역사와 고고학이 대답해 줍니다. 2~3세기의 수천 개 파피루스 필사본들이 남아 있습니다. 니케아 공의회 훨씬 이전의 문서들과 오늘날의 성경은 99.5% 일치합니다. 대체 누가, 언제, 전 세계 도서관에 퍼진 사본들을 다 거두어 변개할 수 있었겠습니까?",
                score: 35,
                feedbackType: "best",
                feedback: "역사적 사본학(Textual Criticism)의 구체적 근거를 들어 반박 불가한 확신을 심어주었습니다.",
                theologyTip: "성경은 역사 속에서 가장 많은 사본 증거를 보유한 고대 문헌입니다 (5,800+ 그리스어 사본, 10,000+ 라틴어 사본)."
              },
              {
                id: "c2",
                text: "İnanmak istemeyen hiçbir kanıta inanmaz zaten.",
                korean: "믿고 싶지 않은 사람은 어차피 어떤 증거를 줘도 안 믿죠.",
                score: -15,
                feedbackType: "bad",
                feedback: "진지한 탐구자에게 회피성 태도를 보이면 복음의 역사성이 약화됩니다.",
                theologyTip: "우리의 믿음은 맹목적 맹신이 아니라 역사적 시공간에 뿌리내린 진리입니다."
              },
              {
                id: "c3",
                text: "Bunu papazlara sormak lazım, ben detayını tam bilmiyorum.",
                korean: "그건 신부님이나 목사님께 물어봐야 해요, 저도 자세힌 몰라요.",
                score: 0,
                feedbackType: "neutral",
                feedback: "솔직할 수는 있으나 사역자로서 기본 변증 지식을 갖추는 것이 권장됩니다.",
                theologyTip: "평신도 전도자도 '누가, 언제 변개했는가?'라는 역질문 하나만으로도 주도권을 가져올 수 있습니다."
              }
            ]
          },
          {
            stepIndex: 3,
            npcSpeech: "Gerçekten bu kadar çok eski el yazması olduğunu bilmiyordum... Peki bugün kullandığımız takvimdeki 'Milat' kelimesi de bununla mı ilgili?",
            npcSpeechKo: "정말 그렇게 오래된 사본이 많았다는 건 몰랐네요... 그럼 오늘날 우리가 쓰는 달력의 '밀라트(Milat)'라는 단어도 이것과 관련이 있나요?",
            choices: [
              {
                id: "c1",
                text: "Evet! 'Milat' Arapça kökenli olup 'Doğum' demektir. M.Ö. (Milattan Önce) ve M.S. (Milattan Sonra) İsa Mesih'in doğumunu sıfır noktası alır. Türkiye dahil tüm dünya her gün tarih atarken İsa'nın gelişini tarihin dönüm noktası olarak ikrar eder!",
                korean: "맞습니다! 'Milat'은 아랍어 어원으로 '탄생'을 뜻합니다. M.Ö.(기원전)와 M.S.(기원후)는 예수 그리스도의 탄생을 기준점(0년)으로 삼습니다. 터키를 포함한 전 세계가 매일 날짜를 쓸 때마다 예수님의 오심이 역사의 전환점임을 고백하고 있는 셈입니다!",
                score: 35,
                feedbackType: "best",
                feedback: "일상적인 터키어 어휘 'Milat(서력기원)' 속에 숨겨진 그리스도의 주권과 역사성을 감동적으로 일깨웠습니다!",
                theologyTip: "골로새서 1:16-17: '만물이 다 그로 말미암고 그를 위하여 창조되었고 또한 그가 만물보다 먼저 계시고 만물이 그 안에 함께 섰느니라.'"
              },
              {
                id: "c2",
                text: "O sadece batılıların kabul ettiği sıradan bir takvim kuralı.",
                korean: "그건 서양인들이 정한 평범한 달력 규칙일 뿐이에요.",
                score: -10,
                feedbackType: "neutral",
                feedback: "문화와 언어 속에 깃든 강력한 복음 접촉점을 스스로 축소해 버렸습니다.",
                theologyTip: "터키인들이 매일 입으로 말하는 'Milat'을 복음의 증거로 환기시키는 것은 매우 강력한 문화적 브릿지입니다."
              },
              {
                id: "c3",
                text: "Takvimi boşverelim, önemli olan senin kalbin.",
                korean: "달력은 넘어가고, 중요한 건 당신의 마음이에요.",
                score: -5,
                feedbackType: "neutral",
                feedback: "흥미를 느끼며 마음이 열리고 있는 질문자의 흐름을 끊었습니다.",
                theologyTip: "질문자의 관심사가 곧 성령께서 열어주시는 전도의 문입니다."
              }
            ]
          }
        ]
      },

      {
        id: "scenario-3",
        title: "선행 저울 Mizan 비유와 하나님의 은혜",
        subtitle: "Mizan adalet terazisi vs Yuhanna 3:16 Tanrı'nın lütfu ve kurbanı",
        npc: {
          name: "Fatma Teyze (파트마 이모)",
          role: "전통적인 이웃 무슬림 아주머니",
          avatarBg: "bg-emerald-700",
          desc: "평생 5대 의무를 지켰지만 죽음 후 저울(Mizan) 앞에서 구원받을 수 있을지 항상 불안해하는 노년 여성"
        },
        context: "동네 찻집 테라스에서 차를 마시며 파트마 이모가 한숨을 쉽니다. '늙어가니 언제 갈지 모르겠네... 저울에 내 선행이 죄보다 무거워야 할 텐데, 인샬라 천국 갈 수 있을지 누가 알겠어...'",
        steps: [
          {
            stepIndex: 1,
            npcSpeech: "Ah evladım, yaş kemale erdi. Ahirette Mizan terazisi kurulacak. Sevaplarım günahlarımdan ağır basmazsa vay halime! İnşallah Allah acır da cennete girerim ama emin olamıyorum...",
            npcSpeechKo: "아이고 얘야, 나이가 차니 내세의 미잔 저울이 눈앞에 어른거리는구나. 내 선행(세왑)이 죄보다 무거워야 할 텐데 아니면 큰일이지! 인샬라 알라께서 불쌍히 여겨 천국에 들여보내 주시면 좋겠지만, 확신할 수가 없구나...",
            choices: [
              {
                id: "c1",
                text: "Teyzecim, senin bu korkunu çok iyi anlıyorum. Ne kadar iyi olursak olalım, içimizdeki eksiklikleri ve kalbimizin derinliklerindeki günahları bildiğimiz için hiçbirimiz o terazinin karşısında huzur bulamıyoruz, değil mi?",
                korean: "이모님, 그 두려운 마음을 너무나 깊이 이해해요. 우리가 아무리 착하게 살아도 마음 깊은 곳의 허물과 죄를 스스로 알기 때문에, 그 누구도 저울 앞에서 참된 평안을 누릴 수 없지요, 그렇지 않나요?",
                score: 35,
                feedbackType: "best",
                feedback: "깊은 정서적 공감으로 상대방 마음의 불안을 어루만지고, 율법주의적 행위 구원의 근본적 한계를 스스로 인정하게 이끌었습니다.",
                theologyTip: "율법의 역할은 죄를 깨닫게 하고 구원자 예수께로 인도하는 몽학선생(İlkokul öğretmeni)입니다 (갈라디아서 3:24)."
              },
              {
                id: "c2",
                text: "O terazi uydurma zaten! Hemen İsa'ya inanmazsan cehenneme gidersin teyze!",
                korean: "그 저울은 지어낸 이야기예요! 당장 예수를 안 믿으면 지옥 갑니다 이모님!",
                score: -30,
                feedbackType: "bad",
                feedback: "연로한 어르신에게 극심한 무례와 두려움을 조장하여 복음 전도의 문을 완전히 차단합니다.",
                theologyTip: "노인을 공경하고 온유와 존중으로 대하는 것은 성경의 명령이자(딤전 5:1) 터키 문화의 기본 예절입니다."
              },
              {
                id: "c3",
                text: "Çok dua edip fakirlere yardım ederseniz kesin cennete gidersiniz, merak etmeyin.",
                korean: "기도 많이 하시고 가난한 사람 많이 도우시면 틀림없이 천국 가실 거예요, 걱정 마세요.",
                score: -20,
                feedbackType: "bad",
                feedback: "거짓된 평안을 주는 비성경적 위로입니다. 행위로는 의롭다 함을 얻을 육체가 없습니다.",
                theologyTip: "사람의 마음을 편하게 해주기 위해 진리를 왜곡해서는 안 됩니다."
              }
            ]
          },
          {
            stepIndex: 2,
            npcSpeech: "Evet evladım... Gece yastığa başımı koyunca 'Acaba yetecek mi?' diye içim titriyor. Temiz bir bardak suya bir damla zehir düşse o su içilir mi? Benim kalbimde de kibir var, öfke var...",
            npcSpeechKo: "그래 얘야... 밤에 베개에 머리를 뉠 때마다 '과연 내 선행이 충분할까?' 가슴이 떨려. 깨끗한 물 한 컵에 독 한 방울이 떨어지면 그 물을 마실 수 있겠니? 내 마음에도 교만이 있고 분노가 있는데...",
            choices: [
              {
                id: "c1",
                text: "Teyzecim, o zehirli suyu kendi gücümüzle temizleyemeyiz. İşte bu yüzden Tanrı bizden imkânsız bir terazi başarısı beklemedi; bize lütfunu ve kesin güvencesini sundu.",
                korean: "이모님, 그 독이 든 물을 우리 자신의 힘으로는 정화할 수 없지요. 그렇기 때문에 하나님은 우리에게 불가능한 저울 측정을 요구하지 않으시고, 은혜와 확실한 구원의 보증을 주셨습니다.",
                score: 35,
                feedbackType: "best",
                feedback: "상대방의 '독 한 방울' 비유를 그대로 받아 은혜(Lütuf)의 절대적 필요성으로 연결한 마스터급 전도 기법입니다.",
                theologyTip: "에베소서 2:8-9: '너희는 그 은혜에 의하여 믿음으로 말미암아 구원을 받았으니 이것은 너희에게서 난 것이 아니요 하나님의 선물이라. 행위에서 난 것이 아니니 이는 누구든지 자랑하지 못하게 함이라.'"
              },
              {
                id: "c2",
                text: "O zaman daha çok su katın ki zehir seyreltilsin.",
                korean: "그럼 물을 더 많이 부어서 독을 희석시키세요.",
                score: -10,
                feedbackType: "bad",
                feedback: "다시 끝없는 선행의 굴레로 상대를 밀어 넣는 오류입니다.",
                theologyTip: "죄는 선행으로 희석될 수 없으며 오직 거룩한 보혈로만 씻겨집니다."
              },
              {
                id: "c3",
                text: "Zehir varsa zaten kurtuluşunuz yok demektir.",
                korean: "독이 있다면 이미 구원받을 가능성은 없다는 뜻이죠.",
                score: -25,
                feedbackType: "bad",
                feedback: "소망 없는 절망만을 안겨줍니다.",
                theologyTip: "율법의 진단 후에는 반드시 십자가의 복음이라는 치료제가 제시되어야 합니다."
              }
            ]
          },
          {
            stepIndex: 3,
            npcSpeech: "Nasıl bir güvence bu evladım? Tanrı günahkâr bir insana cenneti nasıl kesin olarak vadeder?",
            npcSpeechKo: "어떻게 그런 보증이 있을 수 있니 얘야? 하나님이 죄 많은 인간에게 천국을 어떻게 확실하게 약속하신다는 거니?",
            choices: [
              {
                id: "c1",
                text: "İncil'de Yuhanna 3:16 şöyle der: 'Çünkü Tanrı dünyayı o kadar çok sevdi ki, biricik Oğlu'nu verdi. Öyle ki, O'na iman edenlerin hiçbiri mahvolmasın, hepsi sonsuz yaşama kavuşsun.' Kurtuluş teraziye değil, Tanrı'nın sevgisine ve İsa'nın ödediği bedele dayanır teyzecim.",
                korean: "성경 요한복음 3장 16절에 이렇게 말씀합니다: '하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라.' 구원은 저울의 무게가 아니라, 하나님의 사랑과 예수님이 치르신 대가에 뿌리를 두고 있어요 이모님.",
                score: 35,
                feedbackType: "best",
                feedback: "요한복음 3:16의 영원한 생명의 약속을 전달하여 상대방의 마음에 '구원의 확신(Kurtuluş güvencesi)'이라는 복음의 참 빛을 비추었습니다.",
                theologyTip: "무슬림들은 평생 '인샬라(알라의 뜻이라면 구원받겠지)'라는 불확실성 속에 살아갑니다. 그리스도 안에서 누리는 '확신(Eminlik)'은 그들에게 가장 큰 영적 충격과 위로를 줍니다."
              },
              {
                id: "c2",
                text: "Sadece kiliseye gelin, her şeyi anlarsınız.",
                korean: "그냥 교회에 한번 오세요, 그럼 다 알게 됩니다.",
                score: 0,
                feedbackType: "neutral",
                feedback: "마음이 활짝 열린 순간에 직접적인 성경 구절과 복음을 나누지 못하고 미루었습니다.",
                theologyTip: "전도의 골든 타임에 하나님의 살아있는 말씀을 직접 낭독해 주는 것이 가장 강력합니다."
              },
              {
                id: "c3",
                text: "Bunu anlamak zordur, teoloji bilmeniz gerekir.",
                korean: "이걸 이해하긴 어려워요, 신학을 알아야 하거든요.",
                score: -15,
                feedbackType: "bad",
                feedback: "어린아이도 이해할 수 있는 복음의 단순성을 지식의 장벽으로 가로막았습니다.",
                theologyTip: "복음은 단순하며 모든 겸손한 마음에 임하는 하나님의 능력입니다."
              }
            ]
          }
        ]
      },

      {
        id: "scenario-noel",
        title: "크리스마스(Noel) vs 새해(Yılbaşı)",
        subtitle: "Noel ile Yılbaşı Farkı - 산타클로스를 넘어 성육신의 신비로",
        npc: {
          name: "Elif (엘리프)",
          role: "베식타쉬의 패션 디자이너",
          avatarBg: "bg-rose-600",
          desc: "연말 쇼핑몰 트리 장식을 보며 성탄절을 서구식 새해 파티로만 알고 있는 20대 여성"
        },
        context: "12월 말 이스탄불 쇼핑몰에서 화려한 트리와 산타 장식을 보던 중, 엘리프가 '터키 사람들도 12월 31일에 새해(Yılbaşı) 맞이하며 선물 주고받잖아요. 기독교인들의 크리스마스도 결국 같은 파티 아닌가요?'라고 묻습니다.",
        steps: [
          {
            stepIndex: 1,
            npcSpeech: "Her yerde çam ağaçları ve Noel Baba var. 31 Aralık'ta kutlanan Yılbaşı ile sizin Noel'iniz arasında bir fark var mı ki? Bence ikisi de aynı kış eğlencesi.",
            npcSpeechKo: "어딜 가나 전나무 트리와 산타클로스가 있잖아요. 12월 31일에 기념하는 새해(Yılbaşı)랑 기독교의 크리스마스(Noel) 사이에 차이가 있나요? 제 생각엔 둘 다 같은 겨울 파티 같아요.",
            choices: [
              {
                id: "c1",
                text: "Elif Hanım, çok haklısınız, dışarıdan bakınca ağaçlar ve hediyeler benziyor. Ama Noel (25 Aralık), bir yılın bitişi değil, Tanrı'nın insan bedeninde aramıza gelişinin (Enkarnasyon) doğum günüdür.",
                korean: "엘리프 씨, 겉으로 보기엔 트리와 선물이 비슷해서 그렇게 보일 수 있어요! 하지만 크리스마스(25일)는 단순한 연말 파티가 아니라, 하나님께서 인간의 몸을 입고 우리 가운데 오신 성육신의 생일이랍니다.",
                score: 35,
                feedbackType: "best",
                feedback: "상대방의 오해를 부드럽게 공감하면서도 축제의 참된 본질(성육신)을 정확히 규명했습니다.",
                theologyTip: "터키에서는 Noel(성탄절 12/25)과 Yılbaşı(새해맞이 12/31)가 문화적으로 뒤섞여 있습니다. 이 차이를 설명하는 것은 훌륭한 복음의 접촉점입니다."
              },
              {
                id: "c2",
                text: "Tamamen farklı! Noel Hristiyanların bayramıdır, Yılbaşı ise dünyevi bir eğlencedir.",
                korean: "완전히 달라요! 성탄절은 기독교인의 명절이고, 새해는 세속적인 유흥일 뿐입니다.",
                score: -20,
                feedbackType: "bad",
                feedback: "문화적 반감을 유발하여 대화를 차단시킵니다. 온유함으로 기원을 설명하세요.",
                theologyTip: "터키의 역사적 성 니콜라스(Noel Baba)가 뎀레(Demre/Antalya) 출신의 기독교 주교였다는 점을 들어 친근하게 접근하는 것이 좋습니다."
              },
              {
                id: "c3",
                text: "Önemli olan eğlenmek, ne fark eder ki?",
                korean: "즐기면 그만이죠, 뭐가 다르겠어요?",
                score: -10,
                feedbackType: "neutral",
                feedback: "성탄의 거룩한 복음적 진리를 세속화해 버렸습니다.",
                theologyTip: "성탄은 그리스도께서 세상을 구원하러 오신 구속사적 사건입니다."
              }
            ]
          },
          {
            stepIndex: 2,
            npcSpeech: "Tanrı'nın insan bedenine girmesi mi? Tanrı yücedir, neden bir bebeğin aciz bedenine girsin ki? Bu bana çok garip geliyor.",
            npcSpeechKo: "하나님이 인간의 몸으로 오셨다고요? 하나님은 지극히 높으신데, 왜 갓난아기의 연약한 몸으로 오시겠어요? 그건 너무 이상하게 들려요.",
            choices: [
              {
                id: "c1",
                text: "Bir kral düşünün, sarayından halkına emirler yağdırabilir. Ama tebaasını o kadar çok sever ki, onların acısını ve çamurunu tatmak için çoban kılığına girip aralarında yaşar. İşte Noel, Tanrı'nın bize 'Seni anlıyorum ve seviyorum' diyerek sarıldığı gündür.",
                korean: "한 왕을 떠올려 보세요. 궁궐에서 백성에게 명령만 내릴 수도 있죠. 하지만 백성을 너무나 사랑해서 그들의 슬픔과 진흙탕을 함께 겪기 위해 목자의 옷을 입고 찾아온 것입니다. 성탄은 하나님이 우리에게 '내가 널 이해하고 사랑한다'며 안아주신 날입니다.",
                score: 35,
                feedbackType: "best",
                feedback: "왕과 목자의 비유로 하나님의 초월성과 내재적 사랑(성육신)의 신비를 감동적으로 전달했습니다.",
                theologyTip: "빌립보서 2:6-7: '그는 근본 하나님의 본체시나... 자기를 비워 종의 형체를 가지사 사람들과 같이 되셨고'"
              },
              {
                id: "c2",
                text: "Bunu akılla anlayamazsınız, bu bir sırdır.",
                korean: "이건 이성으로 이해할 수 없습니다, 신비니까요.",
                score: -15,
                feedbackType: "bad",
                feedback: "질문에 성의 없이 회피하면 상대는 복음을 비합리적이라고 단정 짓게 됩니다.",
                theologyTip: "하나님의 성육신은 사랑의 극치이자 최고의 겸손입니다."
              },
              {
                id: "c3",
                text: "Noel hediyeleri aslında Tanrı'nın bize verdiği sonsuz yaşam armağanıdır.",
                korean: "크리스마스 선물은 사실 하나님이 우리에게 주신 영생의 선물이에요.",
                score: 25,
                feedbackType: "good",
                feedback: "선물의 의미로 연결하는 좋은 시도이지만, 성육신의 이유를 먼저 설명해 주면 더 좋습니다.",
                theologyTip: "로마서 6:23: '하나님의 은사는 그리스도 예수 우리 주 안에 있는 영생이니라.'"
              }
            ]
          }
        ]
      },

      {
        id: "scenario-heart",
        title: "마음의 공허함과 하나님의 형상",
        subtitle: "Kalpteki Sonsuzluk Boşluğu - 세상이 채울 수 없는 영혼의 갈증",
        npc: {
          name: "Caner (자네르)",
          role: "레벤트의 IT 스타트업 개발자",
          avatarBg: "bg-indigo-600",
          desc: "좋은 연봉과 최신 아파트를 가졌지만 내면의 허무와 외로움에 지친 30대 싱글"
        },
        context: "퇴근 후 보스포루스 해변 카페에서, 자네르가 '어릴 적 꿈꾸던 걸 다 이뤘는데도 침대에 누우면 가슴 한구석이 뻥 뚫린 것 같아요. 돈도 성공도 결국 아무것도 아니더군요'라고 씁쓸하게 말합니다.",
        steps: [
          {
            stepIndex: 1,
            npcSpeech: "Her şeyim var gibi görünüyor: iyi bir araba, yüksek maaş, güzel bir ev. Ama akşam eve gelince içimde koca bir boşluk hissediyorum. Sanki bir parçam eksik gibi.",
            npcSpeechKo: "다 가진 것처럼 보이죠. 좋은 차, 높은 연봉, 근사한 집. 하지만 저녁에 집에 돌아오면 마음속에 거대한 빈방이 느껴져요. 마치 내 한 조각이 빠져나간 것처럼요.",
            choices: [
              {
                id: "c1",
                text: "Caner, o hissettiğin boşluk bir hata değil, bir çağrıdır. Süleyman Peygamber 성경 전도서에 'Tanrı insanların yüreğine sonsuzluğu koydu' diye yazar. Sonsuz bir boşluğu sonlu şeylerle dolduramazsın.",
                korean: "자네르 씨, 그 공허함은 고장이 아니라 신호입니다. 솔로몬 왕은 성경 전도서에서 '하나님이 사람들의 마음에 영원을 사모하는 마음을 두셨다'고 기록했어요. 영원한 크기의 빈자리는 유한한 세상 것으로 채울 수 없답니다.",
                score: 35,
                feedbackType: "best",
                feedback: "현대인의 실존적 허무를 성경의 '영원성(Sonsuzluk)'과 연결하여 영적 자각을 일깨웠습니다.",
                theologyTip: "전도서 3:11: '하나님이 모든 것을 지으시되 때를 따라 아름답게 하셨고 또 사람들에게는 영원을 사모하는 마음을 주셨느니라.'"
              },
              {
                id: "c2",
                text: "Daha çok tatile çıkın ya da yeni bir hobi edinin.",
                korean: "휴가를 더 자주 가거나 새로운 취미를 가져보세요.",
                score: -20,
                feedbackType: "bad",
                feedback: "영혼의 근원적인 갈증을 일시적인 오락으로 돌리려 하여 복음의 기회를 놓칩니다.",
                theologyTip: "영혼의 갈증은 영원하신 생수의 근원(예수 그리스도)을 만날 때만 해결됩니다."
              },
              {
                id: "c3",
                text: "Daha fazla çalışıp kariyer yaparsanız geçer.",
                korean: "일을 더 열심히 해서 승진하면 지나갈 거예요.",
                score: -15,
                feedbackType: "bad",
                feedback: "상대의 고민을 일 중독으로 덮으려 하는 잘못된 조언입니다.",
                theologyTip: "오직 그리스도 안에서만 참된 쉼과 만족을 얻을 수 있습니다."
              }
            ]
          },
          {
            stepIndex: 2,
            npcSpeech: "Sonsuz bir boşluk mu? Gerçekten de para veya kariyer onu bir iki günlüğüne oyalıyor ama asla tamamen dolduramıyor. Peki bu boşluk nasıl dolar?",
            npcSpeechKo: "영원한 크기의 빈자리요? 정말 그래요. 돈이나 승진도 하루이틀 기분 좋을 뿐 채워지진 않더군요. 그럼 그 빈자리는 어떻게 채우나요?",
            choices: [
              {
                id: "c1",
                text: "İskenderiye ve Anadolu'nun büyük düşünürü Augustinus şöyle demiştir: 'Rabbim, bizi Kendin için yarattın ve yüreğimiz Sende huzur buluncaya dek huzursuzdur.' O boşluğun şekli Tanrı şeklindedir. İsa Mesih'in sevgisi o yüreğe girdiğinde, eve dönmüş gibi huzur bulursun.",
                korean: "아우구스티누스는 이렇게 고백했습니다. '주님, 주님께서는 주님을 위하여 우리를 창조하셨기에, 우리 마음이 주님 안에서 안식할 때까지 평안이 없나이다.' 그 빈자리의 모양은 하나님의 모양입니다. 예수 그리스도의 사랑이 마음에 임할 때, 비로소 집에 돌아온 듯한 참 평안(Huzur)을 얻게 됩니다.",
                score: 35,
                feedbackType: "best",
                feedback: "기독교 고전의 명언과 '하나님 모양의 빈자리'를 완벽하게 제시하며 복음의 결단으로 인도했습니다.",
                theologyTip: "요한복음 14:27: '평안을 너희에게 끼치노니 곧 나의 평안을 너희에게 주노라 내가 너희에게 주는 것은 세상이 주는 것과 같지 아니하니라.'"
              },
              {
                id: "c2",
                text: "Kiliseye gelip bağış yaparsanız dolar.",
                korean: "교회에 와서 헌금하면 채워집니다.",
                score: -20,
                feedbackType: "bad",
                feedback: "행위 중심의 종교 생활로 오도하여 은혜의 본질을 훼손합니다.",
                theologyTip: "구원은 행위가 아닌 하나님의 은혜의 선물입니다 (에베소서 2:8-9)."
              },
              {
                id: "c3",
                text: "İncil okuyup dua edin, zamanla geçer.",
                korean: "성경 읽고 기도해 보세요, 시간 지나면 나아집니다.",
                score: 20,
                feedbackType: "neutral",
                feedback: "기본적인 신앙 권면이지만, 인격적인 그리스도와의 만남을 강조해 주면 더 좋습니다.",
                theologyTip: "요한복음 4:14: '내가 주는 물을 마시는 자는 영원히 목마르지 아니하리니...'"
              }
            ]
          }
        ]
      },

      {
        id: "scenario-4",
        title: "글 없는 책 (5가지 색상 복음 브릿지)",
        subtitle: "5 Renk: Altın, Siyah, Kırmızı, Beyaz, Yeşil ile 복음 전하기",
        npc: {
          name: "Can (잔)",
          role: "공원에서 만난 호기심 많은 청소년",
          avatarBg: "bg-indigo-600",
          desc: "글씨 없이 색깔만 있는 카드를 신기하게 쳐다보는 십대 학생"
        },
        context: "당신이 손에 든 5가지 색상의 책(Altın, Siyah, Kırmızı, Beyaz, Yeşil)을 보며 잔이 묻습니다. '형/누나, 그 책에는 왜 글씨가 하나도 없고 알록달록 색깔만 있어요?'",
        steps: [
          {
            stepIndex: 1,
            npcSpeech: "Bu kitapta hiç yazı yok ki! Sadece altın sarısı, siyah, kırmızı, beyaz ve yeşil sayfalar var. Ne anlatıyor bu renkler?",
            npcSpeechKo: "이 책엔 글씨가 하나도 없네요! 금색, 검은색, 빨간색, 흰색, 초록색 페이지만 있어요. 이 색깔들이 뭘 뜻하는 거예요?",
            choices: [
              {
                id: "c1",
                text: "İlk sayfa olan Altın Sarısı'ndan başlayalım Can. Bu renk Tanrı'nın görkemini, kutsallığını ve O'nun hazırladığı Cennet'i simgeler. Orada acı, gözyaşı ve kötülük yoktur. Tanrı bizi çok sevdiği için bu cennette O'nunla yaşamamız için yarattı.",
                korean: "첫 번째 페이지인 '금색'부터 시작해볼까 잔? 이 색은 하나님의 영광과 거룩함, 그리고 그분이 예비하신 천국을 상징해. 거기엔 고통도 눈물도 악도 없단다. 하나님은 널 너무 사랑하셔서 그 천국에서 함께 살도록 우릴 지으셨어.",
                score: 35,
                feedbackType: "best",
                feedback: "첫 색상인 '금색(하나님의 영광과 천국)'을 따뜻하고 명확하게 제시하여 창조 목적과 사랑을 전했습니다.",
                theologyTip: "복음의 출발은 심판이 아니라 하나님의 원래의 선한 창조와 무한한 사랑입니다."
              },
              {
                id: "c2",
                text: "Siyah sayfaya bak! Sen günahkârsın ve cehenneme gideceksin demek!",
                korean: "검은색 페이지를 봐! 넌 죄인이고 지옥 갈 운명이란 뜻이야!",
                score: -30,
                feedbackType: "bad",
                feedback: "단계적 복음 제시 순서를 무시하고 정죄부터 쏟아부었습니다.",
                theologyTip: "글 없는 책의 원리는 '금색(하나님)' -> '검은색(죄)' -> '빨간색(십자가)' -> '흰색(사죄)' -> '초록색(성장)'의 순서가 핵심입니다."
              },
              {
                id: "c3",
                text: "Sadece resim defteri bu, önemli bir şey değil.",
                korean: "그냥 그림 공책이야, 별거 아니란다.",
                score: -20,
                feedbackType: "bad",
                feedback: "자연스럽게 복음을 전할 수 있는 황금 같은 기회를 날려버렸습니다.",
                theologyTip: "기회가 주어졌을 때 담대하고 지혜롭게 복음의 도구를 펼칠 수 있어야 합니다."
              }
            ]
          },
          {
            stepIndex: 2,
            npcSpeech: "Vay canına, öyle bir yer harika olurdu! Ama ikinci sayfa simsiyah... Neden böyle karanlık bir renk koymuşlar?",
            npcSpeechKo: "우와, 그런 곳이라면 정말 좋겠네요! 그런데 두 번째 페이지는 시커멓네요... 왜 이렇게 어두운 색을 넣은 거예요?",
            choices: [
              {
                id: "c1",
                text: "Bu Siyah sayfa 'Günah'ı temsil ediyor Can. Yalan söylemek, kin tutmak, Tanrı'yı unutmak gibi günahlarımız kalbimizi kararttı ve bizi kutsal Tanrı'dan ayırdı. Bu karanlıkla o altın cennete giremeyiz.",
                korean: "이 '검은색' 페이지는 '죄'를 상징한단다 잔. 거짓말, 미움, 하나님을 잊고 사는 것 같은 우리의 죄가 마음을 어둡게 했고 거룩하신 하나님과 우리 사이를 갈라놓았어. 이 어둠을 가진 채로는 저 황금빛 천국에 들어갈 수 없단다.",
                score: 35,
                feedbackType: "best",
                feedback: "죄의 본질(마음의 오염과 하나님과의 단절)을 청소년의 눈높이에 맞춰 검은색으로 명확하게 대비시켰습니다.",
                theologyTip: "이사야 59:2: '오직 너희 죄악이 너희와 너희 하나님 사이를 갈라 놓았고 너희 죄가 그의 얼굴을 가리어서 너희에게서 듣지 않으시게 함이니라.'"
              },
              {
                id: "c2",
                text: "Karanlık geceleri anlatıyor, uykun gelince uyu diye.",
                korean: "어두운 밤을 뜻해, 졸리면 자라는 거지.",
                score: -15,
                feedbackType: "bad",
                feedback: "영적 진리를 농담으로 얼버무려 진지한 대화를 무산시킵니다.",
                theologyTip: "진지한 질문에는 명확한 영적 해답을 주어야 신뢰가 생깁니다."
              },
              {
                id: "c3",
                text: "Şeytanın rengi bu, sana bulaşmasın uzak dur.",
                korean: "사탄의 색이야, 너한테 묻지 않게 멀리하렴.",
                score: -20,
                feedbackType: "bad",
                feedback: "미신적인 공포심을 조장하는 것은 복음적이지 않습니다.",
                theologyTip: "죄는 외부의 악령 탓만이 아니라 우리 자신의 마음에서 비롯되는 책임의 문제입니다."
              }
            ]
          },
          {
            stepIndex: 3,
            npcSpeech: "Peki o zaman bu kırmızı ve beyaz ne işe yarıyor? O siyahlıktan nasıl kurtulabiliriz?",
            npcSpeechKo: "그럼 저 빨간색과 흰색은 무슨 역할이에요? 저 어두운 검은색에서 어떻게 벗어날 수 있나요?",
            choices: [
              {
                id: "c1",
                text: "Kırmızı, İsa Mesih'in çarmıhta döktüğü sevgi kanıdır! O bizim günah cezamızı ödedi. O'na iman ettiğimizde, Beyaz sayfa gibi yüreğimiz kardan beyaz hale gelir, aklanırız. Ve son Yeşil sayfa ise Mesih'le her gün dua ve Söz'le büyüyeceğimiz yeni hayatı simgeler!",
                korean: "빨간색은 예수 그리스도께서 십자가에서 흘리신 사랑의 피란다! 그분이 우리 죗값을 대신 치르셨어. 그분을 믿을 때, 흰색 페이지처럼 우리 마음은 눈보다 더 희어지고 깨끗해지지. 그리고 마지막 초록색은 매일 기도와 말씀 안에서 자라가는 새 생명을 뜻한단다!",
                score: 35,
                feedbackType: "best",
                feedback: "십자가의 보혈(Kırmızı), 칭의와 정결(Beyaz), 영적 성장(Yeşil)까지 5색 복음을 완벽하게 완결 지었습니다!",
                theologyTip: "이사야 1:18: '너희의 죄가 주홍 같을지라도 눈과 같이 희어질 것이요 진홍 같이 붉을지라도 양털 같이 희게 되리라.'"
              },
              {
                id: "c2",
                text: "Kırmızı tehlike demektir, beyaz da teslim bayrağı. Yeşil de doğayı sev demek.",
                korean: "빨간색은 위험, 흰색은 항복 깃발이야. 초록은 자연을 사랑하라는 뜻이고.",
                score: -20,
                feedbackType: "bad",
                feedback: "세속적인 신호등 해석으로 복음의 본질을 가려버렸습니다.",
                theologyTip: "글 없는 책의 색상들은 구속사의 핵심을 압축한 전 세계 어린이/청소년 전도의 강력한 도구입니다."
              },
              {
                id: "c3",
                text: "Kendin iyi işler yaparak o siyahı beyaza boyamalısın.",
                korean: "스스로 착한 일을 해서 그 검은색을 하얗게 칠해야 한단다.",
                score: -25,
                feedbackType: "bad",
                feedback: "다시 인간의 행위 구원론으로 후퇴하는 가장 치명적인 오류입니다.",
                theologyTip: "예수 그리스도의 피만이 사람의 마음을 희게 씻을 수 있습니다 (요한일서 1:7)."
              }
            ]
          }
        ]
      }
    ]
  },

  // -------------------------------------------------------------
  // TAB 3: 문화 & 세계관 브릿지 (Worldview Explorer)
  // -------------------------------------------------------------
  worldview: {
    concepts: [
      {
        id: "kul-hakki",
        title: "Kul Hakkı (인간의 권리와 빚)",
        subtitle: "Hakkını helal et! 사후세계 Ahiret까지 이어지는 권리와 탕감 문화",
        badge: "핵심 관계 윤리",
        icon: "⚖️",
        summary: "터키 무슬림 세계관에서 가장 두려워하는 죄는 타인에게 피해를 입히거나 권리를 침해한 'Kul Hakkı'입니다. 알라도 이 죄는 직접 용서할 수 없고, 오직 피해자가 'Helal ettim(용서/탕감했다)'고 선언해야만 풀린다고 믿습니다.",
        details: [
          {
            heading: "문화적 표현: Hakkını helal et & Helal olsun",
            text: "터키인들은 먼 길을 떠나거나, 수술을 앞두거나, 임종 직전, 혹은 일상에서도 헤어질 때 'Hakkını helal et(너의 권리를 내게 탕감해다오/나를 용서해다오)'라고 간절히 요청합니다. 상대는 'Helal olsun(기꺼이 탕감하노라)'라고 화답합니다. 만약 탕감하지 않고 죽으면 Ahiret(내세)의 저울에서 자신의 선행(Sevap)을 피해자에게 빼앗긴다고 믿기 때문입니다."
          },
          {
            heading: "기독교 복음 브릿지: Tanrı Hakkı와 그리스도의 탕감",
            text: "인간 대 인간의 권리(Kul Hakkı)도 무서운데, 거룩하신 창조주 하나님께 진 영원한 빚(Tanrı Hakkı)은 어떻게 감당하겠습니까? 일만 달란트 빚진 자의 비유(마태 18장)처럼 인간은 하나님께 진 무한한 생명의 빚을 갚을 수 없습니다. 오직 예수 그리스도께서 십자가에서 '다 이루었다(Tetelestai / Borç ödendi - 빚이 다 청산되었다)'고 선언하심으로써 우리의 모든 빚을 대신 갚으셨음을 전할 수 있습니다."
          }
        ],
        sampleDialogue: {
          tr: "— Kardeşim, bana hakkını helal et, kalbini kırdıysam affet.\n— Helal olsun kardeşim! Mesih bizi nasıl karşılıksız bağışladıysa, ben de seni öyle bağışlıyorum.",
          ko: "— 형제여, 내게 권리를 탕감해 주게(용서해 주게). 자네 마음에 상처를 주었다면 용서하게.\n— 기꺼이 탕감하네 형제여! 그리스도께서 우리를 값없이 용서하셨듯이, 나 또한 자네를 그렇게 용서하네."
        }
      },

      {
        id: "islamic-terms",
        title: "Sevap · Günah · Helal · Haram",
        subtitle: "이슬람 일상 4대 기본 규범 매트릭스와 복음적 대조",
        badge: "세계관 매트릭스",
        icon: "🧭",
        summary: "터키인의 일상 언어와 영적 사고방식을 지배하는 4대 기둥입니다. 모든 행동은 점수화(Sevap/Günah)되거나 허용/금기(Helal/Haram)로 분류됩니다.",
        matrix: [
          {
            term: "Sevap (세왑)",
            meaning: "선행 보상 포인트",
            islamView: "알라를 기쁘게 하는 행동(기도, 구제, 친절)을 할 때마다 천국 저울의 오른쪽에 쌓이는 점수.",
            christianBridge: "선행은 구원의 조건이 아니라, 그리스도의 은혜(Lütuf)로 이미 구원받은 자의 감사의 열매(Meyve)입니다."
          },
          {
            term: "Günah (귀나흐)",
            meaning: "죄 / 과오",
            islamView: "알라의 계명을 어겨 저울의 왼쪽에 쌓이는 벌점. Sevap으로 상쇄시켜야 함.",
            christianBridge: "죄는 단순한 벌점 누적이 아니라 거룩한 하나님과의 관계적 반역이며 영적 사망입니다. 오직 보혈로만 도말됩니다."
          },
          {
            term: "Helal (헬랄)",
            meaning: "허용된 것 / 거룩한 정결",
            islamView: "종교법상 허용된 음식, 정당하게 땀 흘려 번 돈, 축복받은 관계.",
            christianBridge: "진정한 정결은 입으로 들어가는 음식이 아니라, 그리스도의 피로 씻겨진 마음(Temiz yürek)에서 나옵니다 (마가 7:15)."
          },
          {
            term: "Haram (하람)",
            meaning: "금기 / 더러운 죄악",
            islamView: "돼지고기, 알코올, 도박, 불의한 뇌물 등 절대적으로 금지된 영역.",
            christianBridge: "외적인 율법 조항을 피하는 것을 넘어, 성령의 인도하심을 따라 죄의 본성을 이기는 영적 자유를 강조합니다."
          }
        ]
      },

      {
        id: "ahiret-journey",
        title: "Ahiret (이슬람 사후세계) 8단계 여정과 기독교 종말론",
        subtitle: "죽음 이후 펼쳐지는 8단계 여정과 성경의 구원 확신 대조",
        badge: "종말론 비교",
        icon: "🌌",
        summary: "무슬림이 평생 느끼는 죽음의 공포와 종말론적 여정 8단계를 인터랙티브하게 탐색하고, 각 단계마다 성경이 약속하는 완전한 소망을 연결합니다.",
        stages: [
          {
            num: 1,
            name: "Dünya (현세)",
            desc: "시험과 선행 적립의 기간",
            islamic: "이 땅은 사후세계를 위해 선행(Sevap)을 쌓고 계명을 지키는 시험장(İmtihan yeri)입니다.",
            christian: "하나님의 사랑을 알고 그분의 형상으로 회복되며, 복음을 누리고 전하는 은혜의 기회입니다."
          },
          {
            num: 2,
            name: "Berzah (무덤의 장막)",
            desc: "무덤 속 대기와 천사들의 심문",
            islamic: "죽은 자는 무덤에서 Münker와 Nekir 두 천사에게 '네 주님은 누구며, 종교는 무엇인가?' 심문받고 무덤의 고통(Kabir azabı)을 겪습니다.",
            christian: "성도의 죽음은 주님 품에 안기는 안식입니다. '오늘 네가 나와 함께 낙원에 있으리라' (누가 23:43)."
          },
          {
            num: 3,
            name: "Kıyamet (우주적 종말)",
            desc: "이스라필 천사의 나팔 소리와 파멸",
            islamic: "천사 İsrâfîl이 Sûr(나팔)를 불면 온 우주가 파괴되고 모든 생명체가 죽음을 맞이합니다.",
            christian: "주께서 호령과 천사장의 소리와 하나님의 나팔 소리로 친히 하늘로부터 강림하시리니 (살전 4:16)."
          },
          {
            num: 4,
            name: "Dirilme / Ba's (부활)",
            desc: "두 번째 나팔과 육체의 부활",
            islamic: "두 번째 나팔 소리와 함께 모든 인류가 흙에서 육체로 다시 살아납니다.",
            christian: "그리스도의 부활은 잠자는 자들의 첫 열매이며, 우리도 썩지 아니할 영광스러운 몸으로 부활합니다 (고전 15:20)."
          },
          {
            num: 5,
            name: "Mahşer (심판의 광장)",
            desc: "발가벗겨진 채 심판대 앞에 소집",
            islamic: "타는 듯한 태양 아래 벌거벗은 채 수만 년 동안 공포에 떨며 자신의 심판 차례를 기다립니다.",
            christian: "그리스도 예수 안에 있는 자에게는 결코 정죄함이 없나니, 우리는 은혜의 보좌 앞에 담대히 나아갑니다 (롬 8:1, 히 4:16)."
          },
          {
            num: 6,
            name: "Mizan (선악의 저울)",
            desc: "행위록 책과 미잔 저울 측정",
            islamic: "모든 행위가 적힌 책(Amel defteri)이 저울에 올려져 선행이 죄보다 무거운지 측정받습니다.",
            christian: "행위의 저울이 아니라, 어린 양의 생명책(Yaşam Kitabı)에 기록된 보혈의 구속으로 영생을 얻습니다."
          },
          {
            num: 7,
            name: "Sırat (칼날 다리)",
            desc: "지옥 불 위에 놓인 머리카락보다 가는 다리",
            islamic: "머리카락보다 가늘고 칼날보다 날카로운 다리 밑으로 지옥불이 타오르며, 죄인들은 쇠갈고리에 걸려 지옥으로 떨어집니다.",
            christian: "예수께서 이르시되 '내가 곧 길이요(Yol) 진리요 생명이니 나로 말미암지 않고는 아버지께로 올 자가 없느니라' (요 14:6). 칼날 다리가 아닌 예수님이 우리의 길이 되십니다!"
          },
          {
            num: 8,
            name: "Cennet / Cehennem (영원한 거처)",
            desc: "천국과 지옥의 최종 도착",
            islamic: "선행이 인정된 자는 강물이 흐르는 낙원에 들어가며, 죄인은 영원한 불못에서 고통받습니다.",
            christian: "하나님이 친히 우리와 함께 계시며 모든 눈물을 닦아주시는 새 하늘과 새 땅의 영원한 영광 (계 21:3-4)."
          }
        ]
      },

      {
        id: "fidye-kefaret",
        title: "이슬람 종교법: Fidye vs Kefaret의 신학적 통찰",
        subtitle: "피디예(Fidye)와 케파레트(Kefaret) 개념을 통한 예수 그리스도의 완전한 대속 해설",
        badge: "종교법 & 구속론",
        icon: "🕊️",
        summary: "이슬람 법학(Fıkıh)에서 죄나 의무 불이행을 때우는 두 가지 핵심 용어인 Fidye와 Kefaret은 기독교 성경이 말하는 예수 그리스도의 대속 사역을 설명하는 최고의 접촉점입니다.",
        comparisons: [
          {
            term: "Fidye (피디예)",
            islamicDef: "노령, 만성 질환 등으로 라마단 금식을 지킬 수 없을 때, 지키지 못한 하루당 가난한 자 한 사람에게 하루치 식사를 대접하는 대체 보상금.",
            dailyMeaning: "유괴 사건 등에서 인질을 풀어주기 위해 요구하는 '몸값(Ransom)'.",
            christianBridge: "마가복음 10:45: '인자가 온 것은 섬김을 받으려 함이 아니라 도리어 섬기려 하고 자기 목숨을 많은 사람의 대속물(Fidye)로 주려 함이니라.' 그리스도는 돈 몇 푼이 아니라 자신의 전 생명을 우리를 죄의 인질 상태에서 건져내시는 최고의 Fidye로 치르셨습니다."
          },
          {
            term: "Kefaret (케파레트)",
            islamicDef: "고의로 금식을 깨뜨리거나 맹세를 어겼을 때 치르는 무거운 속죄 벌칙 (예: 노예 1명 해방 또는 60일 연속 금식). 어원은 '덮다(örtmek)'.",
            dailyMeaning: "지은 잘못에 대해 혹독한 대가를 치르는 벌충.",
            christianBridge: "요한일서 2:2: '그는 우리 죄를 위한 화목제물(Kefaret Kurbanı)이니 우리만 위할 뿐 아니요 온 세상의 죄를 위하심이라.' 구약의 속죄일(Yom Kippur - 히브리어 Kaphar '덮다')과 동일한 어원입니다. 그리스도의 십자가 피는 우리의 죄를 단순히 임시로 덮는 것을 넘어 영원히 도말하셨습니다."
          }
        ]
      }
    ]
  },

  // -------------------------------------------------------------
  // TAB 4: 성경 독해 & 문법 클리닉 (Syntax & Catechism)
  // -------------------------------------------------------------
  syntax: {
    verses: [
      {
        id: "rom-6-4",
        reference: "Romalılar 6:4 (로마서 6:4)",
        turkish: "Vaftiz yoluyla O'nunla birlikte ölüme gömüldük.",
        korean: "세례를 통하여 우리는 그분과 함께 죽음에 장사되었습니다.",
        focusGrammar: "피동 접미사 -ül- (Passivum) 분석",
        grammarRule: "터키어 동사 어근에 자음으로 끝나는 경우 '-il / -ıl / -ul / -ül'이 붙어 피동태(Passive)를 형성합니다.",
        tokens: [
          {
            word: "Vaftiz",
            meaning: "세례, 침례 (Baptism)",
            grammar: "명사 (희랍어 baptisma 차용)"
          },
          {
            word: "yoluyla",
            meaning: "~를 통하여, ~의 방법으로",
            grammar: "yol (길/방법) + -u (3인칭 소유격) + -y- (연결자음) + -la (도구격 ile)"
          },
          {
            word: "O'nunla",
            meaning: "그분과 함께",
            grammar: "O (3인칭 대명사) + -nun (소유격) + -la (동반격 ile)"
          },
          {
            word: "birlikte",
            meaning: "함께 (Together)",
            grammar: "birlik (하나됨) + -te (처격)"
          },
          {
            word: "ölüme",
            meaning: "죽음으로, 사망에",
            grammar: "ölüm (죽음) + -e (방향격)"
          },
          {
            word: "gömüldük",
            meaning: "우리는 장사되었다 / 파묻혔다",
            grammar: "göm- (묻다, 타동사) + -ül- (피동 접미사: 묻히다) + -dü- (과거시제) + -k (1인칭 복수 어미)"
          }
        ],
        theologyNote: "그리스도인이 세례를 받는다는 것은 자신의 옛 자아가 그리스도와 함께 십자가에서 완전히 죽어 무덤에 '매장(gömülmek)'되었음을 공포하는 거룩한 연합입니다."
      },

      {
        id: "2cor-5-17",
        reference: "2. Korintliler 5:17 (고린도후서 5:17)",
        turkish: "Bir kimse Mesih'teyse, yeni yaratıktır; eski şeyler geçmiş, her şey yeni olmuştur.",
        korean: "누구든지 그리스도 안에 있으면 새로운 피조물이라. 이전 것은 지나갔으니 보라 새 것이 되었도다.",
        focusGrammar: "조건법 접미사 -yse (Kip) 및 명사화 -ık 분석",
        grammarRule: "명사/처격 뒤에 매개자음 '-y-'와 조건법 어미 '-se / -sa'가 결합하여 '~안에 있다면(If in)'을 나타냅니다.",
        tokens: [
          {
            word: "Bir kimse",
            meaning: "누구든지, 어떤 사람이든",
            grammar: "부정 대명사구 (Anyone / Whoever)"
          },
          {
            word: "Mesih'teyse",
            meaning: "그리스도 안에 있다면",
            grammar: "Mesih + -te (처격: ~안에) + -y- (매개자음) + -se (조건법: ~라면)"
          },
          {
            word: "yeni",
            meaning: "새로운 (New)",
            grammar: "형용사"
          },
          {
            word: "yaratıktır",
            meaning: "피조물입니다",
            grammar: "yarat- (창조하다) + -ık (행위 결과 명사화: 피조물) + -tır (단언/서술격)"
          },
          {
            word: "eski",
            meaning: "옛날의, 이전의 (Old)",
            grammar: "형용사"
          },
          {
            word: "şeyler",
            meaning: "것들 (Things)",
            grammar: "şey (것) + -ler (복수 어미)"
          },
          {
            word: "geçmiş",
            meaning: "지나갔다",
            grammar: "geç- (지나가다) + -miş (과거완료)"
          },
          {
            word: "her şey",
            meaning: "모든 것 (Everything)",
            grammar: "명사구"
          },
          {
            word: "olmuştur",
            meaning: "되었도다",
            grammar: "ol- (되다) + -muş (과거완료) + -tur (서술격 단언)"
          }
        ],
        theologyNote: "'Mesih'te'(그리스도 안에)라는 조건은 단순한 종교적 소속이 아니라 존재론적 전이(Ontological transformation)를 의미합니다."
      },

      {
        id: "rom-6-23",
        reference: "Romalılar 6:23 (로마서 6:23)",
        turkish: "Çünkü günahın ücreti ölüm, Tanrı'nın armağanı ise Mesih İsa Rabbimiz'de sonsuz yaşamdır.",
        korean: "죄의 삯은 사망이요 하나님의 은사는 그리스도 예수 우리 주 안에 있는 영생이니라.",
        focusGrammar: "한정 명사 결합(Belirtili İsim Tamlaması / İzâfet) 분석",
        grammarRule: "소유자 명사에는 '-ın/-in/-un/-ün', 피소유자 명사에는 '-ı/-i/-u/-ü'가 붙어 'A의 B'라는 확정된 결합을 이룹니다.",
        tokens: [
          {
            word: "Çünkü",
            meaning: "왜냐하면 (Because)",
            grammar: "접속사"
          },
          {
            word: "günahın",
            meaning: "죄의 (소유격)",
            grammar: "günah (명사) + -ın (이자펫 소유격 어미)"
          },
          {
            word: "ücreti",
            meaning: "삯, 대가, 품삯",
            grammar: "ücret (품삯) + -i (이자펫 피소유 표시 어미)"
          },
          {
            word: "ölüm",
            meaning: "사망, 죽음 (Death)",
            grammar: "명사"
          },
          {
            word: "Tanrı'nın",
            meaning: "하나님의",
            grammar: "Tanrı + -nın (소유격 어미)"
          },
          {
            word: "armağanı",
            meaning: "선물, 은사 (Gift)",
            grammar: "armağan (선물) + -ı (소유 표시 어미)"
          },
          {
            word: "ise",
            meaning: "~는, 반면에 (Whereas)",
            grammar: "접속사 / 대비 불변사"
          },
          {
            word: "Rabbimiz'de",
            meaning: "우리 주님 안에서",
            grammar: "Rab (주) + -imiz (1인칭 복수 소유격) + -de (처격)"
          },
          {
            word: "sonsuz",
            meaning: "끝없는, 영원한",
            grammar: "son (끝) + -suz (부정 접미사: 끝이 없는)"
          },
          {
            word: "yaşamdır",
            meaning: "생명입니다",
            grammar: "yaşam (생명) + -dır (서술격)"
          }
        ],
        theologyNote: "죄가 노동의 정당한 삯(ücret)으로 사망을 가져온다면, 영생은 우리가 일해서 번 대가가 아니라 하나님이 거저 주시는 값없는 선물(armağan)이라는 놀라운 대조를 보여줍니다."
      }
    ],

    flipCards: [
      {
        word: "gömülmek",
        root: "göm- (묻다)",
        dailyTitle: "일상 생활에서의 쓰임",
        dailyDesc: "소파나 침대에 푹 파묻히다, 책이나 일에 푹 빠져 지내다.",
        dailyExample: "Yorgunluktan koltuğa gömüldü. (피곤해서 소파에 푹 파묻혔다.) / Kitaplara gömüldü. (책에 파묻혀 지냈다.)",
        theoTitle: "기독교 신학에서의 영적 의미",
        theoDesc: "그리스도와 함께 옛 자아가 십자가에서 완전히 죽어 영원히 매장됨 (세례의 신학).",
        theoExample: "Vaftiz yoluyla Mesih'le birlikte ölüme gömüldük. (로마서 6:4 - 세례를 통해 우리는 그분과 함께 죽음에 장사되었습니다.)"
      },
      {
        word: "aklanmak",
        root: "ak (하얗다) -> akla- (희게 하다) -> aklan- (희어지다)",
        dailyTitle: "일상 생활에서의 쓰임",
        dailyDesc: "법원에서 억울한 누명을 벗고 무죄 판결을 받다, 결백이 입증되다.",
        dailyExample: "Sanık tüm suçlamalardan mahkemede aklandı. (피고인은 법정에서 모든 혐의에 대해 무죄를 선고받았다.)",
        theoTitle: "기독교 신학에서의 영적 의미",
        theoDesc: "칭의(Justification) - 죄인이 자신의 행위가 아닌 그리스도의 피로 하나님 앞에서 의롭다 인정받음.",
        theoExample: "İmanla aklandığımıza göre, Tanrı'yla barışığız. (로마서 5:1 - 믿음으로 의진 의롭다 함을 받았으므로 하나님과 화평을 누립니다.)"
      },
      {
        word: "fidye",
        root: "아랍어 فدية (속전, 대속물)",
        dailyTitle: "일상 생활에서의 쓰임",
        dailyDesc: "유괴범이나 인질범에게 포로를 석방시키기 위해 건네는 몸값.",
        dailyExample: "Fidyeciler rehineler için 1 milyon lira talep etti. (인질범들은 포로들의 몸값으로 100만 리라를 요구했다.)",
        theoTitle: "기독교 신학에서의 영적 의미",
        theoDesc: "구속/속량(Ransom) - 죄와 사망의 노예였던 우리를 구원하시기 위해 예수께서 친히 지불하신 자신의 생명값.",
        theoExample: "Canını birçokları için fidye olarak vermek üzere geldi. (마가복음 10:45 - 자기 목숨을 많은 사람의 대속물로 주려 함이니라.)"
      },
      {
        word: "lütuf",
        root: "아랍어 لطف (친절, 호의)",
        dailyTitle: "일상 생활에서의 쓰임",
        dailyDesc: "누군가가 베풀어준 친절, 각별한 배려, 호의.",
        dailyExample: "Bize büyük bir lütufta bulundunuz, çok teşekkürler. (저희에게 큰 호의를 베풀어 주셨습니다, 정말 감사합니다.)",
        theoTitle: "기독교 신학에서의 영적 의미",
        theoDesc: "은혜(Grace) - 받을 자격이 전혀 없는 죄인에게 값없이 거저 주시는 하나님의 주권적 구원의 사랑.",
        theoExample: "İman yoluyla, lütufla kurtuldunuz. (에베소서 2:8 - 너희는 그 은혜에 의하여 믿음으로 말미암아 구원을 받았으니)"
      },
      {
        word: "kurban",
        root: "아랍어 قربان (가까이 나아감, 희생제)",
        dailyTitle: "일상 생활에서의 쓰임",
        dailyDesc: "사고나 범죄, 사기의 불쌍한 희생자, 피해자.",
        dailyExample: "Trafik kazası kurbanlarına yardım ulaştırıldı. (교통사고 피해자들에게 구호품이 전달되었다.)",
        theoTitle: "기독교 신학에서의 영적 의미",
        theoDesc: "희생제물(Sacrificial Lamb) - 인류의 죄를 단번에 짊어지신 흠 없는 유월절 어린 양 예수 그리스도.",
        theoExample: "Fısıh kurbanımız Mesih feda edildi. (고린도전서 5:7 - 우리의 유월절 양 곧 그리스도께서 희생되셨느니라.)"
      }
    ],

    unluDusmesiQuiz: [
      {
        id: 1,
        baseWord: "lütuf",
        suffix: "+ u",
        correctAnswer: "lütfu",
        korean: "은혜를 / 그의 은혜",
        explanation: "lütuf의 둘째 음절 모음 'u'가 탈락하여 'lütfu'가 됩니다. (lütufu X)"
      },
      {
        id: 2,
        baseWord: "akıl",
        suffix: "+ ınız",
        correctAnswer: "aklınız",
        korean: "너희의 지각 / 생각",
        explanation: "akıl의 둘째 음절 'ı'가 모음 접미사 '-ınız' 앞에서 탈락하여 'aklınız'가 됩니다."
      },
      {
        id: 3,
        baseWord: "oğul",
        suffix: "+ u",
        correctAnswer: "oğlu",
        korean: "그의 아들 (Tanrı'nın Oğlu: 하나님의 아들)",
        explanation: "oğul + -u 결합 시 둘째 모음 'u'가 탈락하여 'oğlu'가 됩니다."
      },
      {
        id: 4,
        baseWord: "boyun",
        suffix: "+ u",
        correctAnswer: "boynu",
        korean: "그의 목",
        explanation: "boyun + -u 결합 시 좁은 모음 'u'가 탈락하여 'boynu'가 됩니다."
      },
      {
        id: 5,
        baseWord: "burun",
        suffix: "+ um",
        correctAnswer: "burnum",
        korean: "나의 코",
        explanation: "burun + -um 결합 시 둘째 음절 'u'가 탈락하여 'burnum'이 됩니다."
      },
      {
        id: 6,
        baseWord: "gönül",
        suffix: "+ üm",
        correctAnswer: "gönlüm",
        korean: "나의 마음 / 심령",
        explanation: "gönül + -üm 결합 시 둘째 음절 'ü'가 탈락하여 'gönlüm'이 됩니다."
      },
      {
        id: 7,
        baseWord: "şehir",
        suffix: "+ e",
        correctAnswer: "şehre",
        korean: "도시로 (예루살렘 도시로)",
        explanation: "şehir + -e 결합 시 둘째 음절 'i'가 탈락하여 'şehre'가 됩니다."
      }
    ]
  },

  // -------------------------------------------------------------
  // TAB 5: 6단계 기도문 빌더 (Prayer Workshop)
  // -------------------------------------------------------------
  prayer: {
    steps: [
      {
        step: 1,
        name: "Açılış (호칭과 시작)",
        koreanName: "1단계: 시작 / 하나님 부르기",
        desc: "하늘에 계신 하나님 아버지를 친밀하고 거룩한 호칭으로 부릅니다.",
        options: [
          {
            tr: "Ya Rab,",
            ko: "오 주님,"
          },
          {
            tr: "Sevgili Babam,",
            ko: "사랑하는 아버지,"
          },
          {
            tr: "Göksel Babamız,",
            ko: "하늘에 계신 우리 아버지,"
          },
          {
            tr: "Her şeye gücü yeten Yüce Tanrım,",
            ko: "전능하신 높고 영화로우신 나의 하나님,"
          },
          {
            tr: "Lütuf ve merhamet dolu Tanrım,",
            ko: "은혜와 자비가 풍성하신 하나님,"
          }
        ]
      },

      {
        step: 2,
        name: "Övgü (찬양과 경배)",
        koreanName: "2단계: 찬양 / 하나님의 성품 송축",
        desc: "하나님의 거룩하심, 영원하신 사랑, 전능하신 주권을 높입니다.",
        options: [
          {
            tr: "Sen her türlü övgüye layıksın.",
            ko: "주님은 온갖 찬양을 받기에 합당하십니다."
          },
          {
            tr: "Sen bizi günahın zincirlerinden özgür kıldın.",
            ko: "주님은 우리를 죄의 사슬에서 자유롭게 하셨습니다."
          },
          {
            tr: "Senin sevgin ve sadakatin sonsuzdur.",
            ko: "주님의 사랑과 성실하심은 영원무궁합니다."
          },
          {
            tr: "Göklerin ve yerin Yaratıcısı Sensin.",
            ko: "하늘과 땅의 유일한 창조주가 바로 주님이십니다."
          },
          {
            tr: "Karanlığı aydınlatan gerçek Işık Sensin.",
            ko: "어둠을 밝히시는 참 빛이 바로 주님이십니다."
          }
        ]
      },

      {
        step: 3,
        name: "Şükran (감사의 고백)",
        koreanName: "3단계: 감사 / 십자가와 일상의 은혜",
        desc: "독생자를 주신 구속의 은혜와 오늘 허락하신 생명에 감사드립니다.",
        options: [
          {
            tr: "Çarmıhta kendini bizim için feda ettiğin için şükrederim.",
            ko: "십자가에서 우리를 위해 자신을 희생해 주심에 감사드립니다."
          },
          {
            tr: "Bugün bize verdiğin yeni gün ve lütuf için şükrederiz.",
            ko: "오늘 우리에게 허락하신 새로운 날과 은혜에 감사드립니다."
          },
          {
            tr: "Kurtuluş armağanı ve karşılıks즈 sevgini bize sunduğun için teşekkür ederim.",
            ko: "구원의 선물과 값없는 사랑을 베풀어 주심에 감사드립니다."
          },
          {
            tr: "Her an yanımızda olup bizi terk etmediğin için Sana şükürler olsun.",
            ko: "매 순간 우리 곁에 계시며 결코 버리지 않으시니 주님께 감사드립니다."
          }
        ]
      },

      {
        step: 4,
        name: "Tövbe (회개와 정결)",
        koreanName: "4단계: 회개 / 보혈로 씻음 받기",
        desc: "지은 죄와 마음의 불의를 고백하고 예수님의 보혈로 정결케 됨을 구합니다.",
        options: [
          {
            tr: "Beni bağışla, kusurlarımı Mesih'in değerli kanıyla yıka.",
            ko: "나를 용서하시고, 나의 허물을 그리스도의 보배로운 피로 씻어주소서."
          },
          {
            tr: "Yüreğimdeki tüm kırgınlıkları, öfkeyi ve şüpheleri Senin ellerine bırakıyorum.",
            ko: "내 마음속의 모든 상처와 분노, 의심을 주님의 손에 내어맡깁니다."
          },
          {
            tr: "Bile bile ya da bilmeyerek işlediğim tüm günahlar için tövbe ediyorum.",
            ko: "알고 지었거나 모르고 지은 모든 죄를 주님 앞에 회개합니다."
          },
          {
            tr: "Bana temiz bir yürek ver, içimde doğru bir ruh tazele.",
            ko: "내 안에 정한 마음을 창조하시고 내 안에 정직한 영을 새롭게 하소서."
          }
        ]
      },

      {
        step: 5,
        name: "Dilek & Şefaat (간구와 중보)",
        koreanName: "5단계: 간구 & 중보 / 이웃과 사역을 위해",
        desc: "전도 대상자, 치유가 필요한 영혼, 터키 땅의 부흥을 위해 간구합니다.",
        options: [
          {
            tr: "Bu cana şifa ver, yüreğindeki boşluğu Senin esenliğinle doldur.",
            ko: "이 영혼에게 치유를 주시고, 그 마음의 빈자리를 주님의 평강으로 채워주소서."
          },
          {
            tr: "Bu topraklarda gerçeği arayan insanlara Işığını göster ve kalplerini aç.",
            ko: "이 땅에서 진리를 갈망하는 영혼들에게 주님의 빛을 비추시고 마음 문을 열어주소서."
          },
          {
            tr: "Bize Müjde'yi cesaretle, bilgelikle ve sevgiyle paylaşma gücü ver.",
            ko: "우리에게 복음을 담대함과 지혜와 사랑으로 전할 수 있는 능력을 주소서."
          },
          {
            tr: "Kutsal Ruh'unla bizi doldur, adımlarımızı doğru yolda yönlendir.",
            ko: "성령으로 우리를 충만케 하사 우리의 발걸음을 바른길로 인도하소서."
          },
          {
            tr: "Ailemizi ve iman kardeşlerimizi her türlü kötülükten ve ayartılmaktan koru.",
            ko: "우리 가족과 믿음의 형제자매들을 모든 악과 시험으로부터 보호하여 주소서."
          }
        ]
      },

      {
        step: 6,
        name: "Kapanış (선포와 마침)",
        koreanName: "6단계: 마침 / 예수님의 이름으로 선포",
        desc: "살아계신 예수 그리스도의 권세 있는 이름으로 기도하며 아멘으로 선포합니다.",
        options: [
          {
            tr: "İsa Mesih'in diri ve kutsal adıyla dua ediyorum, Amin.",
            ko: "예수 그리스도의 살아계시고 거룩하신 이름으로 기도합니다, 아멘."
          },
          {
            tr: "Rabbimiz ve Kurtarıcımız İsa Mesih'in adıyla, Amin.",
            ko: "우리 주님이시며 구원자이신 예수 그리스도의 이름으로, 아멘."
          },
          {
            tr: "Bütün yücelik, güç ve onur sonsuza dek Senin olsun. Amin.",
            ko: "모든 영광과 권능과 존귀가 영원토록 주님의 것입니다. 아멘."
          },
          {
            tr: "Mesih İsa'nın yetkili adıyla zaferi ilan ederek dua ederim. Amin.",
            ko: "그리스도 예수의 권세 있는 이름으로 승리를 선포하며 기도합니다. 아멘."
          }
        ]
      }
    ],

    presets: [
      {
        title: "전도 대상자(영혼 구원)를 위한 중보 기도",
        desc: "복음을 들은 친구나 이웃의 마음 문이 열리고 주님께 돌아오도록 드리는 기도",
        parts: [
          "Göksel Babamız,",
          "Senin sevgin ve sadakatin sonsuzdur.",
          "Kurtuluş armağanı ve karşılıksız sevgini bize sunduğun için teşekkür ederim.",
          "Bana temiz bir yürek ver, içimde doğru bir ruh tazele.",
          "Bu topraklarda gerçeği arayan insanlara Işığını göster ve kalplerini aç.",
          "İsa Mesih'in diri ve kutsal adıyla dua ediyorum, Amin."
        ]
      },
      {
        title: "아픈 지체를 위한 치유와 회복 기도",
        desc: "육체와 영혼의 연약함 속에 있는 형제자매를 위한 예수님의 치유 기도",
        parts: [
          "Her şeye gücü yeten Yüce Tanrım,",
          "Sen her türlü övgüye layıksın.",
          "Çarmıhta kendini bizim için feda ettiğin için şükrederim.",
          "Yüreğimdeki tüm kırgınlıkları, öfkeyi ve şüpheleri Senin ellerine bırakıyorum.",
          "Bu cana şifa ver, yüreğindeki boşluğu Senin esenliğinle doldur.",
          "Rabbimiz ve Kurtarıcımız İsa Mesih'in adıyla, Amin."
        ]
      },
      {
        title: "사역자의 아침 결단 기도",
        desc: "새로운 하루를 성령 충만과 담대한 복음 증거의 도구로 헌신하는 기도",
        parts: [
          "Sevgili Babam,",
          "Karanlığı aydınlatan gerçek Işık Sensin.",
          "Bugün bize verdiğin yeni gün ve lütuf için şükrederiz.",
          "Beni bağışla, kusurlarımı Mesih'in değerli kanıyla yıka.",
          "Bize Müjde'yi cesaretle, bilgelikle ve sevgiyle paylaşma gücü ver.",
          "İsa Mesih'in diri ve kutsal adıyla dua ediyorum, Amin."
        ]
      }
    ],

    situationalLibrary: [
      {
        id: "prayer-healing",
        category: "치유와 회복",
        title: "환우 치유와 회복을 위한 기도 (Hastalar İçin Şifa Duası)",
        tr: "Şifa Veren Rabbimiz Göksel Babamız,\nSen bedenlerimizi yaratan ve her türlü hastalığı iyileştiren Yüce Tanrı'sın. İsa Mesih'in çarmıhtaki yaralarıyla şifa bulduğumuza iman ediyoruz. Şimdi hasta olan kardeşimize merhamet et. Ağrılarını dindir, zayıflamış bedenine taze güç ve diriliş gücünü üfle. Şüphe ve korkuyu yüreğinden söküp at, yerine Senin sarsılmaz esenliğini (Şalom) yerleştir. Doktorların ellerini ve kullanılan ilaçları bereketle. Bu hastalık ölümle değil, Tanrı'nın yüceliğinin ortaya çıkmasıyla sonuçlansın. Şifanın kaynağı olan İsa Mesih'in diriliş dolu kutsal adıyla dua ediyoruz, Amin.",
        ko: "치유의 주님이신 하나님 아버지,\n주님은 우리의 몸을 창조하셨으며 모든 질병을 고치시는 전능하신 하나님이십니다. 예수 그리스도의 채찍에 맞으심으로 우리가 나음을 입었음을 믿음으로 고백합니다. 지금 병중에 있는 형제자매를 불쌍히 여겨 주옵소서. 통증을 가라앉혀 주시고, 쇠약해진 육체에 하늘의 생명과 부활의 생기를 불어넣어 주옵소서. 두려움과 불안을 몰아내시고 주님의 참된 평강(샬롬)을 채워 주옵소서. 치료하는 의료진의 손길과 약물 위에 은혜를 더하사, 이 질병이 죽음이 아닌 하나님의 영광을 드러내는 통로가 되게 하옵소서. 치유의 근원이신 예수 그리스도의 살아계신 이름으로 기도합니다, 아멘."
      },
      {
        id: "prayer-revival",
        category: "부흥과 민족",
        title: "터키 민족과 영적 부흥을 위한 기도 (Türkiye ve Ruhsal Uyanış)",
        tr: "Milletlerin Rabbi ve Efendimiz Tanrımız,\nBu güzel Anadolu toprakları Elçilerin yürüdüğü, yedi kilisenin parladığı topraklardır. Bugün Türkiye'de yaşayan 85 milyon can için Sana yalvarıyoruz. İnsanların gözlerindeki perdeyi kaldır, kulaklarını gerçeğe aç. Korku ve önyargıları parçala, İsa Mesih'in koşulsuz sevgisini ve lütfunu kalplerine dök. Yerel kiliseleri koru, iman kardeşlerimize cesaret ve hikmet ver. Gençlerin yüreğindeki boşluğu Ruhunla doldur. Bu topraklardan bütün dünyaya yayılan güçlü bir ruhsal uyanış estir. Rabbimiz ve Kurtarıcımız İsa Mesih'in adıyla, Amin.",
        ko: "만국의 주권자이신 주 하나님,\n이 아름다운 아나톨리아 땅은 사도들이 걸었던 곳이며 요한계시록의 일곱 교회가 등불을 밝혔던 땅입니다. 오늘날 터키의 8,500만 영혼을 위해 주님 앞에 엎드립니다. 사람들의 눈을 가린 어두운 장막을 걷어 주시고 귀를 열어 진리를 듣게 하옵소서. 두려움과 오해를 깨뜨리시고 예수 그리스도의 무조건적인 사랑과 십자가 은혜가 각 사람의 심령에 부어지게 하옵소서. 현지 교회들을 눈동자처럼 지켜 주시고 성도들에게 담대함과 지혜를 주옵소서. 거룩한 영적 각성과 부흥이 일어나게 하옵소서. 우리 구주 예수 그리스도의 이름으로 기도합니다, 아멘."
      },
      {
        id: "prayer-newbeliever",
        category: "새신자 양육",
        title: "새신자 양육과 믿음의 뿌리를 위한 기도 (Yeni İnanlıların Büyümesi)",
        tr: "Sevgi Dolu Babamız Tanrı,\nKaranlıktan Işığa çağırdığın, İsa Mesih'i Rab ve Kurtarıcı olarak kabul eden bu yeni imanlı kardeşimiz için Sana şükrediyoruz. Ailesinden veya çevresinden gelebilecek baskı ve yalnızlık hissinde ona sığınak ol. Kutsal Ruh'unla onu her gün teselli et, Sözün olan Kutsal Kitap'ı okurken zihnini aydınlat. İmanını fırtınalarda sarsılmayan kaya üzerine bina et. Kilise topluluğu içinde sıcak sevgi ve kardeşlik bulmasını sağla. Karşılaştığı her zorlukta Senin 'Ben seni asla bırakmam ve terk etmem' vaadini hatırlat. İsa Mesih'in yetkili adıyla dua ederiz, Amin.",
        ko: "사랑의 아버지 하나님,\n어둠에서 빛으로 불러내어 예수 그리스도를 주와 구주로 영접한 새신자 형제자매를 인하여 감사드립니다. 가족과 주변 이웃으로부터 올 수 있는 오해와 압박, 외로움 속에서 주님이 피난처가 되어 주옵소서. 성령의 위로를 날마다 덧입혀 주시고, 거룩한 말씀을 읽을 때마다 영적인 총명과 기쁨을 더하여 주옵소서. 그 믿음이 흔들리지 않는 반석 위에 굳게 뿌리내리게 하시고, 교회 공동체 안에서 따뜻한 사랑과 돌봄을 경험하게 하옵소서. 예수 그리스도의 이름으로 기도합니다, 아멘."
      },
      {
        id: "prayer-persecution",
        category: "고난과 보호",
        title: "박해와 고난 중의 성도를 위한 보호 기도 (Zulüm ve Zorluk Çeken Kardeşler)",
        tr: "Gücümüz ve Kalemiz Olan Yaşayan Tanrı,\nDoğruluk uğruna baskı gören, inancından ötürü dışlanan ve tehdit edilen kardeşlerimizi Senin güçlü ellerine emanet ediyoruz. 'Dünyada sıkıntınız olacak; ama cesur olun, Ben dünyayı yendim' diyen İsa Mesih'in sözü onların yüreğine can versin. İftiralara karşı onları koru, meleklerini onların etrafına ordugah kurdur. Zulmedenlerin yüreğini Saul'u Pavlus'a dönüştürdüğün gibi lütfunla dönüştür. Kardeşlerimize kötülüğe kötülükle değil, iyilik ve sevgiyle karşılık verecek lütuf ihsan et. Zaferin Sahibi olan İsa Mesih'in adıyla dua ederiz, Amin.",
        ko: "우리의 힘이시요 요새이신 살아계신 하나님,\n의를 위하여 박해를 받으며, 믿음 때문에 배척당하고 위협받는 형제자매들을 주님의 전능하신 손에 올려드립니다. '세상에서는 너희가 환난을 당하나 담대하라 내가 세상을 이기었노라' 하신 예수님의 약속이 그들의 영혼에 생명수가 되게 하옵소서. 불의한 거짓과 핍박에서 건져 주시고, 천군 천사를 보내사 그들을 둘러 진치게 하옵소서. 핍박하는 자들의 마음을 변화시키사 회개의 역사가 일어나게 하옵소서. 승리의 주 예수 그리스도의 이름으로 기도합니다, 아멘."
      },
      {
        id: "prayer-family",
        category: "가정과 자녀",
        title: "가정의 평안과 자녀를 위한 축복 기도 (Aile Huzuru ve Çocuklar İçin Bereket)",
        tr: "Her Ailenin Kaynağı Olan Yüce Tanrı,\nEvimizi Senin sevginin, esenliğinin ve affının barınağı eyle. Eşler arasındaki sevgiyi Mesih ile kilisesi arasındaki vefalı sevgi gibi derinleştir. Çocuklarımızı dünyanın ayartılarından koru, onların yüreklerine Rab korkusውን ve hikmetini nakşet. Evimizde her zaman şükran ve övgü sesleri yükselsin, öfke ve kavga kapımızdan uzak olsun. Soframız bereketli, kapımız ihtiyaç sahiplerine açık olsun. Bu yuvayı karanlık bir dünyada parlayan bir fener gibi kullan. Kurtarıcımız İsa Mesih'in adıyla, Amin.",
        ko: "가정의 주인이신 전능하신 하나님,\n우리 가정을 주님의 사랑과 평강과 용서가 머무는 거룩한 처소가 되게 하옵소서. 부부간의 사랑을 그리스도와 교회의 신실한 사랑처럼 날마다 깊어지게 하옵소서. 자녀들을 세상의 유혹과 거짓된 풍조로부터 지켜 주시고 그 마음에 주를 경외하는 참된 지혜를 새겨 주옵소서. 우리 가정에 불평 대신 감사와 찬양이 넘쳐나게 하시고, 식탁마다 일용할 양식의 은혜를 더하사 이웃을 섬기는 축복의 통로가 되게 하옵소서. 우리 구주 예수 그리스도의 이름으로 기도합니다, 아멘."
      }
    ]
  },

  // -------------------------------------------------------------
  // TAB 6 (또는 문법 특화 랩): 종교 용어 표기 규칙 (Dini Yazım Kuralları - MEB 2023)
  // -------------------------------------------------------------
  orthography: {
    rules: [
      {
        id: 1,
        title: "종교 고유명사 대문자 원칙",
        turkishTitle: "Dinî Özel Adlar ve Tanrı İsimleri",
        category: "대소문자",
        summary: "신(God), 천사, 종교적 고유 대상의 이름은 대문자로 시작하지만, 일반명사나 비유적 신들은 소문자로 씁니다.",
        correct: "Allah, Tanrı, Yahve, Cebrail, Mikail, İsa Mesih",
        incorrect: "allah [x], tanrı [x], cebrail [x]",
        contrast: "Eski Yunan tanrıları (고대 그리스의 신들 - 일반명사/비유로 쓰일 때는 소문자 'tanrı')",
        explanation: "유일신이나 성경/쿠란의 고유한 신의 명칭(Allah, Tanrı, Yahve) 및 천사의 고유명(Cebrail, Mikail)은 대문자로 시작합니다. 단, 신화 속 다신교의 신들이나 비유적으로 '음악의 신'처럼 쓸 때는 소문자(tanrı)로 표기합니다.",
        biblicalRef: "Yaratılış 1:1 'Başlangıçta Tanrı gökleri ve yeri yarattı.'"
      },
      {
        id: 2,
        title: "종교 및 종파 명칭 대문자",
        turkishTitle: "Din ve Mezhep Adları",
        category: "대소문자",
        summary: "종교, 종파, 그리고 그 신자들을 지칭하는 명사는 항상 첫 글자를 대문자로 표기합니다.",
        correct: "Hristiyan, Müslüman, Musevi, Mesihçiler, Ortodoks, Protestan, Katolik",
        incorrect: "hristiyan [x], müslüman [x], mesihçiler [x]",
        contrast: "Hristiyanlık (기독교), Müslümanlık (이슬람) - 파생 명사도 대문자 유지",
        explanation: "종교명과 신자를 뜻하는 명사(Hristiyan, Müslüman 등)는 대문자로 씁니다. 초대교회 안디옥에서 제자들이 처음으로 '그리스도인'이라 불린 역사적 기록(Elçilerin İşleri 11:26)에서도 'Mesihçiler'로 대문자 표기됩니다.",
        biblicalRef: "Elçilerin İşleri 11:26 'Öğrencilere ilk kez Antakya'da Mesihçiler adı verildi.'"
      },
      {
        id: 3,
        title: "고유명사 격접미사 아포스트로피 규칙",
        turkishTitle: "Özel Adlara Gelen Ekler ve Kesme İşareti",
        category: "아포스트로피",
        summary: "고유명사에 붙는 격접미사는 아포스트로피(')로 구분하지만, 파생접미사가 붙은 단어와 'Rab'의 형태 결합에는 아포스트로피를 붙이지 않습니다.",
        correct: "Tanrı'nın [o], İsa'ya [o], Hristiyanlığın [o], Rabbin [o]",
        incorrect: "Tanrının [x], Hristiyanlık'ın [x], Rab'bin [x]",
        contrast: "Rabbin lütfu (주님의 은혜 - Rab + -(i)n = Rabbin, 아포스트로피 없음)",
        explanation: "1) 순수 고유명사 뒤 격조사: Tanrı'nın, İsa'ya, Kudüs'te처럼 아포스트로피(')로 분리합니다.\n2) 파생접미사(-lık 등)가 결합된 명사: Hristiyanlık 뒤에 소유격이 올 때는 아포스트로피 없이 'Hristiyanlığın'으로 연이어 씁니다 (TDK 규칙: 파생접미사 뒤에는 아포스트로피 생략).\n3) 'Rab'의 결합: 주님을 뜻하는 Rab에 2인칭/3인칭/소유격이 붙을 때 전통 및 TDK 철자법상 자음 중복과 함께 아포스트로피 없이 'Rabbin' (Rab'bin [X]), 'Rabbimiz'로 표기합니다.",
        biblicalRef: "Romalılar 6:23 '...Rabbimiz Mesih İsa'da sonsuz yaşamdır.'"
      },
      {
        id: 4,
        title: "외래어 어두 자음군(CC) 표기 원칙",
        turkishTitle: "Batı Kökenli Sözcüklerde Ünsüz Çiftleri",
        category: "철자법",
        summary: "서구 기원 외래어의 어두 자음군 사이에는 불필요한 모음(ı, i)을 삽입하지 않습니다.",
        correct: "Hristiyan [o], gnostik [o], kral [o], tren [o], psikoloji [o]",
        incorrect: "Hıristiyan [x], gınostik [x], kıral [x], tiren [x]",
        contrast: "과거 일부 비표준 표기에서 'Hıristiyan'으로 썼으나 MEB 2023 및 현행 TDK 표준어는 반드시 'Hristiyan'입니다.",
        explanation: "외래어 차용 시 어두 자음군(Hr-, gn-, kr-, tr-) 사이에 발음의 편의를 위해 모음 'ı/i'를 끼워 넣는 것은 오기입니다. 한국어 화자들이 '흐리스티얀'으로 발음하여 'Hıristiyan'으로 적는 실수를 가장 많이 범합니다.",
        biblicalRef: "1. Petrus 4:16 'Ama bir kimse Hristiyan olduğu için acı çekerse, bundan utanmasın...'"
      },
      {
        id: 5,
        title: "종교적 개념어·영적 영역의 소문자 원칙",
        turkishTitle: "Dinî ve Manevi Kavramların Küçük Harfle Yazımı",
        category: "대소문자",
        summary: "천국, 지옥, 죄, 선행, 천사, 악마 등 일반적인 종교적 개념어는 문두가 아닌 한 소문자로 씁니다.",
        correct: "cennet, cehennem, günah, sevap, melek, şeytan, vaftiz, dua",
        incorrect: "Cennet [x], Cehennem [x], Günah [x], Vaftiz [x] (문장 중간)",
        contrast: "영어(Heaven, Hell)식 대문자 표기와 혼동하기 쉬우나 터키어에서는 소문자가 원칙입니다.",
        explanation: "성경 터키어 번역(Kutsal Kitap)에서도 'cennet(천국/낙원)', 'cehennem(지옥)', 'günah(죄)'는 일반명사로 분류되어 문장 중간에서는 철저히 소문자로 표기됩니다.",
        biblicalRef: "Luka 23:43 'İsa ona, \"Sana doğrusunu söyleyeyim, sen bugün benimle birlikte cennette olacaksın\" dedi.'"
      },
      {
        id: 6,
        title: "'ev' 결합 장소 합성어 붙여쓰기",
        turkishTitle: "\"ev\" ile Kurulan Birleşik Sözcükler",
        category: "띄어쓰기",
        summary: "집회, 추모, 나눔, 거처를 뜻하는 '-evi' 합성어는 띄어쓰지 않고 항상 한 단어로 붙여 씁니다.",
        correct: "cemevi, taziyeevi, aşevi, huzurevi, yayınevi, konukevi",
        incorrect: "cem evi [x], taziye evi [x], aş evi [x]",
        contrast: "단, 실제 가옥이나 형태를 수식할 때(ahşap ev, taş ev)는 띄어 씁니다.",
        explanation: "특수한 사회적·종교적 기능을 수행하는 장소 명칭으로서 '-evi'가 결합된 단어는 합성어로 굳어져 붙여 쓰는 것이 MEB 2023 및 TDK 규정입니다. 터키 현지 추모식이나 공동체 모임 장소를 언급할 때 필수적입니다.",
        biblicalRef: "사역 응용: Taziye ziyaretlerinde taziyeevi kurallarına riayet etmek saygının gereğidir."
      },
      {
        id: 7,
        title: "종교·선교 기관 및 단체 명칭",
        turkishTitle: "Kurum, Kuruluş ve Kurul Adları",
        category: "기관명",
        summary: "교회, 선교회, 성서공회 등 공식 단체 및 기관의 명칭은 각 단어의 첫 글자를 대문자로 표기합니다.",
        correct: "Mesih İnanlılar Topluluğu, Türkiye Kutsal Kitap Şirketi, Kadıköy Protestan Kilisesi, Diriliş Kilisesi",
        incorrect: "mesih inanlılar topluluğu [x], Türkiye kutsal kitap şirketi [x]",
        contrast: "기관명 뒤에 붙는 격접미사는 아포스트로피 없이 붙여 씁니다: 'Türkiye Kutsal Kitap Şirketine', 'Kadıköy Protestan Kilisesinde'",
        explanation: "기관 및 법인, 단체의 고유 명칭은 모든 단어를 대문자로 시작합니다. 중요한 점은 TDK 개정 규칙에 따라 기관·단체명에 붙는 조사에는 아포스트로피(')를 붙이지 않는다는 것입니다.",
        biblicalRef: "사역 응용: Kadıköy Protestan Kilisesinde pazar ibadeti saat 11.00'de başlar."
      },
      {
        id: 8,
        title: "종교 축제·절기·성일 대문자 표기",
        turkishTitle: "Dini Bayramlar, Yortular ve Anma Günleri",
        category: "축제·절기",
        summary: "성경의 절기, 기독교 및 현지 종교의 공식 축제와 특별한 기념일은 모든 단어의 첫 글자를 대문자로 표기합니다.",
        correct: "Fısıh Bayramı, Mayasız Ekmek Bayramı, Diriliş Bayramı (Paskalya), Noel Bayramı, Kurban Bayramı, Kadir Gecesi",
        incorrect: "fısıh bayramı [x], diriliş bayramı [x], kurban bayramı [x]",
        contrast: "격접미사 결합 시 아포스트로피 사용: Fısıh Bayramı'nda, Noel Bayramı'nı",
        explanation: "성경에 기록된 이스라엘의 절기(Fısıh, Çardak, Pentikost)와 기독교 공휴일(Noel, Diriliş), 터키 국가 공휴일 및 이슬람 명절은 고유명사이므로 대문자로 표기하고 아포스트로피를 결합합니다.",
        biblicalRef: "Mısır'dan Çıkış 12:47 'Bütün İsrail topluluğu Fısıh Bayramı'nı kutlayacak.'"
      },
      {
        id: 9,
        title: "특정 일자 vs 일반 시기의 월(Ay)·요일(Gün) 표기",
        turkishTitle: "Belirli Bir Tarih Bildiren Ay ve Gün Adları",
        category: "날짜 표기",
        summary: "구체적인 숫자 날짜나 연도가 함께 제시될 때는 대문자, 일반적인 달/계절/요일을 언급할 때는 소문자로 표기합니다.",
        correct: "25 Haziran Pazar günü [o], 15 Nisan 2024 Cuma [o] vs eylülün ikinci haftasında [o], her pazar kiliseye gideriz [o]",
        incorrect: "25 haziran pazar [x], Eylülün ikinci haftasında [x]",
        contrast: "날짜 숫자가 있느냐 없느냐가 대소문자를 가르는 핵심 기준입니다.",
        explanation: "특정한 날짜를 지정하는 숫자와 함께 쓰인 월과 요일은 고유한 사건 시점이 되므로 대문자(25 Haziran Pazar)로 씁니다. 반면 막연한 기간이나 주기적인 요일(her pazar, eylülün ortası)은 일반명사이므로 소문자로 씁니다.",
        biblicalRef: "사역 응용: Vaftiz töreni 14 Temmuz Pazar günü yapılacaktır."
      },
      {
        id: 10,
        title: "지명에 결합된 2차 지형 명칭 대문자",
        turkishTitle: "Yer Adlarında İkinci İsimler (Göl, Dağ, Nehir, Deniz)",
        category: "지명 표기",
        summary: "산, 호수, 강, 바다 등 2차 지형 명칭이 지명 고유명사에 결합될 때는 첫 글자를 대문자로 표기합니다.",
        correct: "Celile Gölü, Zeytin Dağı, Siyon Dağı, Şeria Nehri, Akdeniz, Van Gölü",
        incorrect: "Celile gölü [x], Zeytin dağı [x], Siyon dağı [x]",
        contrast: "일반 명사로서의 호수나 산: 'Bu bölgede birçok göl ve dağ vardır' (소문자)",
        explanation: "지리적 고유명사에서 'Göl(호수)', 'Dağ(산)', 'Nehir(강)', 'Deniz(바다)' 등은 독립된 일반명사가 아니라 지명의 불가분한 일부이므로 대문자로 표기합니다. 성경 지명 표기 시 가장 빈번한 감점 포인트입니다.",
        biblicalRef: "Matta 4:18 'İsa, Celile Gölü'nün kıyısında yürürken...'"
      },
      {
        id: 11,
        title: "행정 구역 및 도로·광장 주소 표기",
        turkishTitle: "Mahalle, Meydan, Bulvar, Cadde, Sokak Adları",
        category: "주소 표기",
        summary: "마할레(동/마을), 광장, 대로, 거리 명칭에 붙는 단위 단어는 대문자로 표기합니다.",
        correct: "Gazi Mahallesi, Zafer Meydanı, İstiklal Caddesi, Karanfil Sokağı",
        incorrect: "Gazi mahallesi [x], Zafer meydanı [x], İstiklal caddesi [x]",
        contrast: "단, 일상적 거리/동네 지칭: 'Bizim mahalleye yeni bir fırın açıldı' (소문자)",
        explanation: "교회 주소나 사역 센터 위치 안내 시 'Mahallesi', 'Meydanı', 'Caddesi', 'Sokağı'의 첫 글자를 반드시 대문자로 적어야 하며, 격조사 결합 시 아포스트로피를 사용합니다 (İstiklal Caddesi'nde).",
        biblicalRef: "사역 응용: Kilise binamız Atatürk Mahallesi, Barış Sokağı No: 7 adresindedir."
      }
    ],

    appendix: {
      title: "숫자 및 특수 기호 표기법 (Sayılar ve Noktalama İşaretleri)",
      items: [
        {
          rule: "퍼센트 기호(%) 앞치기 규칙",
          turkish: "Yüzde İşareti (%)",
          format: "%25 (읽기: yüzde yirmi beş)",
          koreanComparison: "한국어는 숫자 뒤에 붙여 '25%'로 표기하지만, 터키어는 숫자 앞에 띄어쓰기 없이 '%25'로 표기합니다.",
          example: "Nüfusun %99'u (인구의 99% - 아포스트로피로 격접미사 결합)"
        },
        {
          rule: "소수점 쉼표(,) 표기 규칙",
          turkish: "Ondalık Sayılarda Virgül",
          format: "15,2 및 3,14159",
          koreanComparison: "한국과 영미권은 소수점에 마침표(15.2)를 쓰지만, 터키어 표준 규격은 반드시 쉼표(15,2)를 사용합니다.",
          example: "Enflasyon oranı %15,4 olarak açıklandı."
        },
        {
          rule: "천 단위 구분 점(.) 표기 규칙",
          turkish: "Basamak Ayırıcı Nokta",
          format: "4.567 및 1.000.000",
          koreanComparison: "한국과 영미권은 천 단위 구분에 쉼표(4,567)를 쓰지만, 터키어는 온점(4.567)을 사용합니다.",
          example: "Toplantıya 1.250 kişi katıldı."
        }
      ]
    },

    quiz: [
      {
        id: 1,
        question: "기독교인을 터키어로 쓸 때 올바른 철자는 'Hıristiyan'이다?",
        answer: "X",
        correctText: "Hristiyan",
        ruleRef: "Rule 4 (외래어 어두 자음군)",
        explanation: "MEB 2023 및 TDK 공식 표기법상 외래어 어두 자음군(Hr-) 사이에 'ı'를 넣지 않습니다. 올바른 표기는 'Hristiyan'입니다."
      },
      {
        id: 2,
        question: "주님의 소유격을 쓸 때 올바른 표기는 'Rab'bin'이다?",
        answer: "X",
        correctText: "Rabbin",
        ruleRef: "Rule 3 (고유명사 아포스트로피)",
        explanation: "'Rab'에 소유격 및 접미사가 결합할 때는 아포스트로피 없이 'Rabbin'으로 표기합니다. (Rab'bin은 틀린 표기)"
      },
      {
        id: 3,
        question: "성경에서 천국을 지칭할 때는 항상 대문자 'Cennet'으로 써야 한다?",
        answer: "X",
        correctText: "cennet (문장 중간 소문자)",
        ruleRef: "Rule 5 (종교적 개념어 소문자)",
        explanation: "터키어에서는 cennet, cehennem, günah 등 종교적 개념어가 문두가 아닐 경우 일반명사로서 소문자로 표기됩니다 (Luka 23:43)."
      },
      {
        id: 4,
        question: "터키어로 25%를 표기할 때는 한국어처럼 '25%'라고 쓴다?",
        answer: "X",
        correctText: "%25",
        ruleRef: "Appendix (퍼센트 기호 앞치기)",
        explanation: "터키어에서는 퍼센트 기호(%)를 숫자 앞에 공백 없이 붙여 '%25'(yüzde yirmi beş)로 표기합니다."
      },
      {
        id: 5,
        question: "Celile Gölü 표기 시 'gölü'는 소문자로 쓴다?",
        answer: "X",
        correctText: "Celile Gölü",
        ruleRef: "Rule 10 (지명 2차 지형 명칭)",
        explanation: "산, 호수, 강 등 지형 명칭이 지명 고유명사와 결합될 때는 대문자로 시작합니다. 따라서 'Celile Gölü'가 올바른 표기입니다."
      },
      {
        id: 6,
        question: "특정 날짜가 없는 'eylülün ikinci haftasında' 문장에서 'eylül'은 소문자로 쓰는 것이 맞다?",
        answer: "O",
        correctText: "eylülün (소문자 맞음)",
        ruleRef: "Rule 9 (날짜 표기 대소문자)",
        explanation: "특정한 날짜 숫자(예: 15 Eylül)가 없을 때는 월과 요일을 소문자로 표기합니다."
      },
      {
        id: 7,
        question: "추모의 집, 조문소를 뜻하는 터키어는 'taziye evi'로 띄어 쓴다?",
        answer: "X",
        correctText: "taziyeevi",
        ruleRef: "Rule 6 ('ev' 합성어 붙여쓰기)",
        explanation: "cemevi, taziyeevi, aşevi 등 기능을 나타내는 '-evi' 합성어는 항상 붙여 씁니다."
      }
    ],

    proofreadingGame: [
      {
        id: 1,
        title: "문장 1: 복음서의 약속과 주님의 은혜",
        tokens: [
          { word: "İsa", isError: false },
          { word: "öğrencilerine", isError: false },
          { word: "Cennet'te", isError: true, correct: "cennette", rule: "Rule 5: 종교 개념어(cennet)는 소문자로 쓰며 고유명사가 아니므로 아포스트로피를 쓰지 않습니다." },
          { word: "yer", isError: false },
          { word: "hazırlayacağını", isError: false },
          { word: "söyledi", isError: false },
          { word: "ve", isError: false },
          { word: "Rab'bin", isError: true, correct: "Rabbin", rule: "Rule 3: 'Rab'에 소유격이 붙을 때는 아포스트로피 없이 'Rabbin'으로 씁니다." },
          { word: "lütfu", isError: false },
          { word: "ile", isError: false },
          { word: "kurtulacağımızı", isError: false },
          { word: "belirtti.", isError: false }
        ],
        translation: "예수께서는 제자들에게 천국에 처소를 예비하겠다고 말씀하셨고 주님의 은혜로 우리가 구원받을 것임을 밝히셨습니다."
      },
      {
        id: 2,
        title: "문장 2: 감람산 기도 모임과 성도들의 교제",
        tokens: [
          { word: "Gelecek", isError: false },
          { word: "yıl", isError: false },
          { word: "15", isError: false },
          { word: "eylül", isError: true, correct: "Eylül", rule: "Rule 9: 특정 날짜 숫자(15)와 결합된 월 명칭은 대문자 'Eylül'로 표기합니다." },
          { word: "Pazar", isError: false },
          { word: "günü", isError: false },
          { word: "Hıristiyan", isError: true, correct: "Hristiyan", rule: "Rule 4: 외래어 어두 자음군 사이에는 'ı'를 넣지 않고 'Hristiyan'으로 씁니다." },
          { word: "kardeşlerimizle", isError: false },
          { word: "zeytin", isError: true, correct: "Zeytin", rule: "Rule 10: 성경 고유 지형 명칭은 대문자로 시작하여 'Zeytin Dağı'로 씁니다." },
          { word: "dağı", isError: true, correct: "Dağı", rule: "Rule 10: 2차 지형 명칭(Dağ)은 대문자로 시작합니다." },
          { word: "tepesinde", isError: false },
          { word: "dua", isError: false },
          { word: "edeceğiz.", isError: false }
        ],
        translation: "내년 9월 15일 일요일에 그리스도인 형제자매들과 함께 감람산 정상에서 기도할 것입니다."
      },
      {
        id: 3,
        title: "문장 3: 공동체의 성장과 나눔의 공간",
        tokens: [
          { word: "Kilisemizin", isError: false },
          { word: "cemaati", isError: false },
          { word: "25%", isError: true, correct: "%25", rule: "Appendix: 터키어에서 퍼센트 기호는 숫자 앞에 공백 없이 '%25'로 표기합니다." },
          { word: "oranında", isError: false },
          { word: "büyüdü", isError: false },
          { word: "ve", isError: false },
          { word: "taziye", isError: true, correct: "taziyeevi", rule: "Rule 6: '-evi' 합성어는 띄어쓰지 않고 'taziyeevi'로 붙여 씁니다." },
          { word: "evi", isError: true, correct: "(삭제/결합)", rule: "Rule 6: 앞 단어와 결합되어 'taziyeevi' 한 단어가 됩니다." },
          { word: "binasında", isError: false },
          { word: "toplandı.", isError: false }
        ],
        translation: "우리 교회의 성도 수는 25% 비율로 성장하였고 새로 개관한 조문소 건물에서 모였습니다."
      }
    ]
  }
};

// Export to window
window.APP_DATA = APP_DATA;
