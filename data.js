/* Corrected Korean workshop content. Editorial rationale: EDITORIAL.md. */
const APP_DATA = {
  "pronunciation": {
    "oxQuiz": [
      {
        "id": 1,
        "question": "터키어 Bal은 한국어 '발'과 소리가 같다?",
        "answer": "X",
        "word": "Bal",
        "translation": "꿀 (Honey)",
        "ipa": "[bɑl]",
        "reason": "터키어 자음과 한국어 대응 표기는 모든 문맥에서 같지 않습니다. 한국어 파열음은 위치와 문맥에 따라 달라집니다. 터키어 모델을 듣고 불필요한 모음 없이 연습하세요.",
        "tip": "입술을 떼면서 성대 진동을 느끼세요. 모음을 추가하지 마세요."
      },
      {
        "id": 2,
        "question": "터키어 Dede는 한국어 '데데'와 소리가 같다?",
        "answer": "X",
        "word": "Dede",
        "translation": "할아버지 (Grandfather)",
        "ipa": "[deˈde]",
        "reason": "터키어 자음과 한국어 대응 표기는 모든 문맥에서 같지 않습니다. 한국어 파열음은 위치와 문맥에 따라 달라집니다. 터키어 모델을 듣고 불필요한 모음 없이 연습하세요.",
        "tip": "혀끝을 잇몸에 대고 모음을 추가하지 않은 채 발음하세요."
      },
      {
        "id": 3,
        "question": "터키어 Gemi는 한국어 '게미'와 소리가 같다?",
        "answer": "X",
        "word": "Gemi",
        "translation": "배 / 선박 (Ship)",
        "ipa": "[ɟeˈmi]",
        "reason": "터키어 자음과 한국어 대응 표기는 모든 문맥에서 같지 않습니다. 한국어 파열음은 위치와 문맥에 따라 달라집니다. 터키어 모델을 듣고 불필요한 모음 없이 연습하세요.",
        "tip": "e로 이어지는 자음을 연습하세요. 모음을 더 넣지 마세요."
      },
      {
        "id": 4,
        "question": "터키어 Samsun의 S는 한국어 '스'와 같다?",
        "answer": "X",
        "word": "Samsun",
        "translation": "삼순 (터키 흑해 도시명)",
        "ipa": "[sɑmˈsun]",
        "reason": "터키어 'S'는 혀끝을 윗니 뒤 잇몸에 바짝 대고 공기를 강하게 뿜는 무성 치조 마찰음([s])입니다. 한국어 '스'([sɯ])처럼 불필요한 모음 '으'가 붙지 않으며, 한국어 '쓰'에 가까운 날카롭고 강한 마찰음입니다.",
        "tip": "s는 자음입니다. 추가 모음 없이 a로 이어 가세요."
      },
      {
        "id": 5,
        "question": "Trabzon의 음절 분절은 Trab-zon이다?",
        "answer": "O",
        "word": "Trabzon",
        "translation": "트라브존 (터키 북동부 항구 도시)",
        "ipa": "[tɾɑbˈzon]",
        "reason": "터키어 음절 분절(Heceleme) 규칙상, 외래어 및 어두 자음군이 있는 지명/차용어는 음절 분절 시 결합된 자음 덩어리에 따라 'Trab-zon'으로 2음절 분절됩니다. (T-rab-zon이 아님)",
        "tip": "Trab-zon은 두 음절입니다. 자음군에 모음을 추가하지 마세요."
      }
    ],
    "syllables": [
      {
        "word": "Trabzon",
        "segmented": "Trab-zon",
        "syllableCount": 2,
        "korean": "트라브존 (성경의 트라페주스, 흑해 항구)",
        "rule": "외래어 차용 지명: 어두 자음군(Tr-)이 첫 음절에 함께 묶여 'Trab-zon'으로 분절됩니다."
      },
      {
        "word": "Bursa",
        "segmented": "Bur-sa",
        "syllableCount": 2,
        "korean": "부르사 (초대교회 비티니아 지역의 주요 도시)",
        "rule": "두 모음 사이에 자음 2개가 올 때: 첫 자음은 앞 음절로, 둘째 자음은 뒷 음절로 분절 (V-C / C-V 원칙)."
      },
      {
        "word": "başlangıç",
        "segmented": "baş-lan-gıç",
        "syllableCount": 3,
        "korean": "시작 / 태초 (창세기 1:1 'Başlangıçta')",
        "rule": "baş-lan-gıç는 음절 분절입니다. 형태소 경계와 같다는 뜻이 아닙니다."
      },
      {
        "word": "müjde",
        "segmented": "müj-de",
        "syllableCount": 2,
        "korean": "복음 / 기쁜 소식 (Evangelion)",
        "rule": "두 모음(ü, e) 사이의 자음군(j, d): 'müj'와 'de'로 분절. 기독교 사역의 핵심 어휘입니다."
      },
      {
        "word": "üçgen",
        "segmented": "üç-gen",
        "syllableCount": 2,
        "korean": "삼각형 (삼위일체 Trinity 설명 시 자주 쓰임)",
        "rule": "üç-gen은 두 음절입니다. 비유가 삼위일체 교리를 증명하지는 않습니다."
      },
      {
        "word": "kurtarıcı",
        "segmented": "kur-ta-rı-cı",
        "syllableCount": 4,
        "korean": "구원자 (Savior, 그리스도 예수)",
        "rule": "연속된 접미사 결합(kurtar- + -ıcı): 각 모음마다 하나씩 음절이 형성되어 4음절로 전개."
      }
    ],
    "sapkaPairs": [
      {
        "without": {
          "word": "hala",
          "meaning": "고모 (아버지의 여자 형제)",
          "ipa": "[hɑˈlɑ]",
          "context": "Halam bizi yemeğe çağırdı. (고모가 우리를 식사에 초대했다.)"
        },
        "with": {
          "word": "hâlâ",
          "meaning": "아직, 여전히 (Still / Yet)",
          "ipa": "[haːˈlaː]",
          "context": "İsa Mesih hâlâ yaşıyor ve çalışıyor! (예수 그리스도는 여전히 살아 역사하십니다!)"
        },
        "explanation": "Şapka(düzeltme işareti ^)는 모음을 길게 발음(Uzun ses)하게 만듭니다. 'hala'(단모음)는 친척 고모이고, 'hâlâ'(장모음 [haːlaː])는 시간적 지속을 의미합니다."
      },
      {
        "without": {
          "word": "kar",
          "meaning": "눈 (Snow)",
          "ipa": "[kɑɾ]",
          "context": "Dağlara beyaz kar yağdı. (산에 하얀 눈이 내렸다.)"
        },
        "with": {
          "word": "kâr",
          "meaning": "이익, 유익, 영적 유익 (Profit / Gain)",
          "ipa": "[kʲaːɾ]",
          "context": "Bu işten kâr elde ettik. (이 일에서 이익을 얻었습니다.)"
        },
        "explanation": "k 뒤의 â에 붙은 şapka는 k를 혀 앞쪽에서 부드럽게 구개음화([kʲ])시키며 a를 길게 소리냅니다. 복음서의 '영적 유익(kâr)'을 설명할 때 매우 중요한 구별입니다."
      },
      {
        "without": {
          "word": "tarihi",
          "meaning": "그것의 역사 (그의 역사, 소유격 형태)",
          "ipa": "[tɑːɾiˈhi]",
          "context": "Kilisenin tarihi çok derindir. (교회의 역사는 매우 깊습니다.)"
        },
        "with": {
          "word": "tarihî",
          "meaning": "역사적인 (Historical, 형용사)",
          "ipa": "[tɑːɾiˈhiː]",
          "context": "İsa'nın dirilişi tarihî bir gerçektir. (예수의 부활은 역사적 사실입니다.)"
        },
        "explanation": "끝 모음 î의 장모음화는 명사를 관계형용사(Nisbet î'si)로 변환시킵니다. 신앙이 신화가 아닌 '역사적 사건(tarihî olay)'임을 밝힐 때 필수적입니다."
      },
      {
        "without": {
          "word": "adem",
          "meaning": "없음, 부존재 (Non-existence, 아랍어 차용 철학어)",
          "ipa": "[ɑˈdem]",
          "context": "Adem-i merkeziyet (비집권화, 부재)"
        },
        "with": {
          "word": "Âdem",
          "meaning": "아담 (첫 인간, Adam)",
          "ipa": "[aːˈdem]",
          "context": "Âdem hakkında konuşuyoruz. (아담에 관해 이야기합니다.)"
        },
        "explanation": "첫 글자 Â의 장음 표기는 인류의 조상 '아담(Âdem)'을 뜻하며 대문자로 표기됩니다."
      }
    ],
    "speechPracticeWords": [
      {
        "turkish": "Müjde",
        "korean": "복음 (기쁜 소식)",
        "category": "사역 핵심"
      },
      {
        "turkish": "Kurtarıcı",
        "korean": "구원자",
        "category": "사역 핵심"
      },
      {
        "turkish": "Çarmıh",
        "korean": "십자가",
        "category": "사역 핵심"
      },
      {
        "turkish": "Kutsal Ruh",
        "korean": "성령님",
        "category": "신학"
      },
      {
        "turkish": "Diriliş",
        "korean": "부활",
        "category": "신학"
      },
      {
        "turkish": "Lütuf",
        "korean": "은혜",
        "category": "교리"
      },
      {
        "turkish": "İman",
        "korean": "믿음",
        "category": "교리"
      },
      {
        "turkish": "Esenlik",
        "korean": "평강 / 샬롬",
        "category": "축복"
      },
      {
        "turkish": "Bereket",
        "korean": "축복",
        "category": "축복"
      },
      {
        "turkish": "Bağışlama",
        "korean": "용서 / 사죄",
        "category": "교리"
      }
    ]
  },
  "simulator": {
    "scenarios": [
      {
        "id": "scenario-circle",
        "title": "천국과 구원의 확신 (원 비유)",
        "subtitle": "Cennet Güvencesi ve Daire Benzetmesi - 행위의 불안에서 은혜의 확신으로",
        "npc": {
          "name": "Ahmet (아흐멧)",
          "role": "카디쾨이의 금융회사 연구원",
          "avatarBg": "bg-emerald-600",
          "desc": "가상의 대화 상대입니다. 종교나 국적만으로 개인의 생각을 단정하지 마세요."
        },
        "context": "가상의 대화 연습입니다. 상대의 실제 질문을 확인하고 기독교 설명과 비유를 구별하세요. 비유는 모든 사람의 반응을 보장하지 않습니다.",
        "steps": [
          {
            "stepIndex": 1,
            "npcSpeech": "Kurtuluş konusunda bazen kaygılanıyorum. Hristiyanlar bu konuda neye inanıyor?",
            "npcSpeechKo": "구원에 관해 때로 걱정합니다. 기독교인은 무엇을 믿나요?",
            "choices": [
              {
                "id": "c1",
                "text": "Ahmet Bey, kağıda elle kusursuz bir daire çizebilir misiniz? Elimiz ne kadar titrerse titresin, pergel olmadan mükemmel bir daire çizemeyiz, değil mi?",
                "korean": "아흐멧 씨, 종이에 손으로 완전한 원을 그릴 수 있나요? 손이 아무리 정교해도 컴퍼스 없이는 찌그러질 수밖에 없잖아요, 안 그래요?",
                "score": 0,
                "feedbackType": "best",
                "feedback": "비유는 설명 도구이며 증명이 아닙니다. 상대의 이해를 확인하고 거절이나 추가 질문을 받아 주세요.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c2",
                "text": "Neden bu kadar korku içindesiniz? Dinimiz öyle demiyor, hemen İncil okuyun.",
                "korean": "왜 그렇게 두려움 속에 사시나요? 우리 기독교는 그렇게 말하지 않아요. 당장 성경을 읽으세요.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "질문을 이해했는지, 사실이 정확한지, 언어가 적절한지 검토하세요. 강요나 모욕 대신 의미를 확인할 수 있습니다.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c3",
                "text": "Bazen benim de sorularım oluyor. Hristiyan umudunu birlikte konuşabiliriz.",
                "korean": "저도 때로 질문이 있습니다. 기독교의 소망을 함께 이야기할 수 있습니다.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "비유는 설명 도구이며 증명이 아닙니다. 상대의 이해를 확인하고 거절이나 추가 질문을 받아 주세요.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              }
            ]
          },
          {
            "stepIndex": 2,
            "npcSpeech": "Doğru, elle çizilen daire her zaman biraz yamuk olur. Pergel gibi kusursuz bir alet gerekir. Ama bu cennetle nasıl bağlanıyor?",
            "npcSpeechKo": "맞아요, 손으로 그리는 원은 항상 조금씩 삐뚤어지죠. 컴퍼스 같은 완전한 도구가 필요해요. 근데 이게 천국이랑 어떻게 연결되나요?",
            "choices": [
              {
                "id": "c1",
                "text": "Bizim iyi amellerimiz elle çizilmiş o yamuk daire gibidir. Tanrı ise kusursuz kutsallık ister. İsa Mesih bizim yerimize kusursuz bir yaşam yaşadı ve bedeli ödedi. Biz O'na iman ettiğimizde, Tanrı bizi İsa'nın mükemmel dairesi içinde görür!",
                "korean": "우리의 선행은 손으로 그린 삐뚤어진 원 같아요. 하지만 하나님은 완전한 거룩을 요구하시죠. 예수 그리스도께서 우리 대신 완전한 삶을 사시고 죗값을 치르셨습니다. 우리가 그분을 믿을 때, 하나님은 우리를 예수님의 완전한 원 안에서 보십니다!",
                "score": 0,
                "feedbackType": "best",
                "feedback": "비유는 설명 도구이며 증명이 아닙니다. 상대의 이해를 확인하고 거절이나 추가 질문을 받아 주세요.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c2",
                "text": "İsa pergeldir, biz de kağıdız. Anladınız mı?",
                "korean": "예수님이 컴퍼스고 우리는 종이입니다. 이해하셨나요?",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "질문을 이해했는지, 사실이 정확한지, 언어가 적절한지 검토하세요. 강요나 모욕 대신 의미를 확인할 수 있습니다.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c3",
                "text": "Sadece inanın, gerisini Tanrı halleder.",
                "korean": "그냥 믿으세요, 나머지는 하나님이 알아서 하십니다.",
                "score": 0,
                "feedbackType": "neutral",
                "feedback": "상황에 따라 유용할 수 있습니다. 질문을 명확히 하고 모르는 내용은 조사한 뒤 답하세요.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              }
            ]
          },
          {
            "stepIndex": 3,
            "npcSpeech": "Şimdi devam etmek istemiyorum. Belki başka bir gün.",
            "npcSpeechKo": "지금은 계속하고 싶지 않아요. 다른 날에 할 수도 있겠네요.",
            "choices": [
              {
                "id": "respect-refusal",
                "text": "Tabii, anlıyorum. Konuşmak isterseniz sizi dinleyebilirim.",
                "korean": "네, 이해합니다. 이야기하고 싶으시면 들어 드릴 수 있습니다.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "거절을 존중하며 돌봄의 여지를 남깁니다. 거절은 실패한 회심 결과가 아닙니다.",
                "theologyTip": "상호작용: 실제 답에 반응하세요."
              },
              {
                "id": "clarify-followup",
                "text": "Başka bir gün konuşmamı ister misiniz, yoksa bu konuyu kapatalım mı?",
                "korean": "다른 날에 이야기할까요, 아니면 이 주제를 마칠까요?",
                "score": 0,
                "feedbackType": "best",
                "feedback": "상대가 답할 수 있다면 거절의 범위를 확인하세요. 강요하지 말고 답을 받아들이세요.",
                "theologyTip": "이해와 적절함이 중요합니다."
              },
              {
                "id": "insist",
                "text": "Hayır, şimdi devam etmeliyiz.",
                "korean": "아니요, 지금 계속해야 합니다.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "거절을 무시합니다. 받아들이는 답을 연습하세요.",
                "theologyTip": "대화에는 자발적인 참여가 필요합니다."
              }
            ]
          }
        ]
      },
      {
        "id": "scenario-1",
        "title": "200리라 지폐와 순금의 비유",
        "subtitle": "Buruşuk 200 lira ve 1g altın bedeli - 그리스도께서 치르신 생명의 값",
        "npc": {
          "name": "Mehmet (메흐멧)",
          "role": "이스티클랄 거리의 대학생",
          "avatarBg": "bg-amber-600",
          "desc": "가상의 대화 상대입니다. 종교나 국적만으로 개인의 생각을 단정하지 마세요."
        },
        "context": "가상의 대화 연습입니다. 상대의 실제 질문을 확인하고 기독교 설명과 비유를 구별하세요. 비유는 모든 사람의 반응을 보장하지 않습니다.",
        "steps": [
          {
            "stepIndex": 1,
            "npcSpeech": "Biz insanlar kusurluyuz tabii. Ama iyi işler yaparsak, oruç tutup sadaka verirsek Allah neden bizi affetmesin ki? Küçük hatalarımızı görmezden gelir.",
            "npcSpeechKo": "우리 인간은 당연히 불완전하죠. 하지만 선행을 하고, 금식하고 구제하면 알라께서 왜 우릴 용서 안 하시겠어요? 작은 실수들은 눈감아 주시겠죠.",
            "choices": [
              {
                "id": "c1",
                "text": "Hayır, yanılıyorsun! Senin yaptığın iyi işler Tanrı'nın gözünde paçavra gibidir. Hemen tövbe etmelisin!",
                "korean": "아니요, 당신은 틀렸습니다! 당신의 선행은 하나님 보시기에 누더기 같습니다. 당장 회개해야 합니다!",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "질문을 이해했는지, 사실이 정확한지, 언어가 적절한지 검토하세요. 강요나 모욕 대신 의미를 확인할 수 있습니다.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c2",
                "text": "Mehmet, sana bir şey göstereyim. Bak, bu 200 liralık banknotu yere atıp ezsem ve buruştursam, değeri düşer mi?",
                "korean": "메흐멧, 내가 한 가지 보여줄게요. 봐요, 이 200리라짜리 지폐를 땅에 던져 밟고 구긴다고 해서 그 가치가 떨어질까요?",
                "score": 0,
                "feedbackType": "best",
                "feedback": "비유는 설명 도구이며 증명이 아닙니다. 상대의 이해를 확인하고 거절이나 추가 질문을 받아 주세요.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c3",
                "text": "Evet, Tanrı çok merhametlidir. Her din temelde aynı iyiliği öğretir zaten.",
                "korean": "네, 하나님은 참 자비로우시죠. 모든 종교는 기본적으로 다 같은 선행을 가르치니까요.",
                "score": 0,
                "feedbackType": "neutral",
                "feedback": "상황에 따라 유용할 수 있습니다. 질문을 명확히 하고 모르는 내용은 조사한 뒤 답하세요.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              }
            ]
          },
          {
            "stepIndex": 2,
            "npcSpeech": "Düşmez tabii, hâlâ 200 liradır. Sonuçta devletin garantisi var üzerinde. Ama bunun günahla ne alakası var?",
            "npcSpeechKo": "당연히 안 떨어지죠, 여전히 200리라예요. 국가의 보증이 찍혀 있으니까요. 근데 이게 죄랑 무슨 상관인가요?",
            "choices": [
              {
                "id": "c1",
                "text": "Tam olarak öyle! Biz de günah yüzünden buruşsak bile Tanrı'nın gözünde değerliyiz. Ama buruşuk bir parayla borç ödeyebilirsin, peki bir adamın hayat borcunu neyle ödersin?",
                "korean": "바로 그거예요! 우리도 죄 때문에 구겨졌지만 하나님의 눈엔 여전히 소중해요. 하지만 구겨진 돈으로 빚을 갚을 순 있어도, 사람의 생명의 빚은 무엇으로 갚을 수 있을까요?",
                "score": 0,
                "feedbackType": "best",
                "feedback": "비유는 설명 도구이며 증명이 아닙니다. 상대의 이해를 확인하고 거절이나 추가 질문을 받아 주세요.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c2",
                "text": "Paranın değeri düşmez ama kirlenir. Kirlenen insan cehenneme gider. Bunu bilmelisin.",
                "korean": "돈의 가치는 안 떨어져도 더러워지죠. 더러워진 사람은 지옥에 갑니다. 이걸 알아야 해요.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "질문을 이해했는지, 사실이 정확한지, 언어가 적절한지 검토하세요. 강요나 모욕 대신 의미를 확인할 수 있습니다.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c3",
                "text": "Yani herkes günahkârdır. Sen de ben de. O yüzden çok düşünmeye gerek yok.",
                "korean": "즉 누구나 죄인이라는 뜻이에요. 당신도 나도요. 그러니 너무 깊게 고민할 필요 없어요.",
                "score": 0,
                "feedbackType": "neutral",
                "feedback": "상황에 따라 유용할 수 있습니다. 질문을 명확히 하고 모르는 내용은 조사한 뒤 답하세요.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              }
            ]
          },
          {
            "stepIndex": 3,
            "npcSpeech": "Hayat borcu mu? Mahkemede hâkim 'Çok iyi insansın, cezanı affettim' diyemez ki. Adalet gereği bedel ödenmeli. Peki bizim günah borcumuzu kim ödeyebilir?",
            "npcSpeechKo": "생명의 빚이요? 법정에서 판사가 '너 참 착한 사람이니 벌을 면제해 줄게'라고 할 순 없잖아요. 정의상 대가를 치러야죠. 그럼 우리의 죄의 빚은 누가 갚아줄 수 있나요?",
            "choices": [
              {
                "id": "c1",
                "text": "İşte müjde burada! Saf 1 gram altın gibi, hiç günah işlememiş kusursuz bir kurban lazımdı. İsa Mesih günahsız canını çarmıhta fidye olarak ödedi.",
                "korean": "바로 여기에 복음이 있습니다! 순도 100% 1g 순금처럼, 죄를 전혀 짓지 않은 흠 없는 제물이 필요했습니다. 예수 그리스도께서 죄 없는 자신의 생명을 십자가에서 속전(Fidye)으로 치르셨습니다.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "비유는 설명 도구이며 증명이 아닙니다. 상대의 이해를 확인하고 거절이나 추가 질문을 받아 주세요.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c2",
                "text": "Sen kendin ödeyeceksin. Herkes kendi günahını çeker.",
                "korean": "당신 스스로 치러야 합니다. 누구나 자기 죄의 대가를 받는 법이죠.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "질문을 이해했는지, 사실이 정확한지, 언어가 적절한지 검토하세요. 강요나 모욕 대신 의미를 확인할 수 있습니다.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c3",
                "text": "Hristiyanlıkta İsa bizim yerimize öldü derler ama bu bana da bazen mantıksız geliyor.",
                "korean": "기독교에선 예수가 우리 대신 죽었다고 말하는데 저도 가끔 비논리적으로 느껴지긴 해요.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "질문을 이해했는지, 사실이 정확한지, 언어가 적절한지 검토하세요. 강요나 모욕 대신 의미를 확인할 수 있습니다.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              }
            ]
          },
          {
            "stepIndex": 4,
            "npcSpeech": "Şimdi devam etmek istemiyorum. Belki başka bir gün.",
            "npcSpeechKo": "지금은 계속하고 싶지 않아요. 다른 날에 할 수도 있겠네요.",
            "choices": [
              {
                "id": "respect-refusal",
                "text": "Tabii, anlıyorum. Konuşmak isterseniz sizi dinleyebilirim.",
                "korean": "네, 이해합니다. 이야기하고 싶으시면 들어 드릴 수 있습니다.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "거절을 존중하며 돌봄의 여지를 남깁니다. 거절은 실패한 회심 결과가 아닙니다.",
                "theologyTip": "상호작용: 실제 답에 반응하세요."
              },
              {
                "id": "clarify-followup",
                "text": "Başka bir gün konuşmamı ister misiniz, yoksa bu konuyu kapatalım mı?",
                "korean": "다른 날에 이야기할까요, 아니면 이 주제를 마칠까요?",
                "score": 0,
                "feedbackType": "best",
                "feedback": "상대가 답할 수 있다면 거절의 범위를 확인하세요. 강요하지 말고 답을 받아들이세요.",
                "theologyTip": "이해와 적절함이 중요합니다."
              },
              {
                "id": "insist",
                "text": "Hayır, şimdi devam etmeliyiz.",
                "korean": "아니요, 지금 계속해야 합니다.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "거절을 무시합니다. 받아들이는 답을 연습하세요.",
                "theologyTip": "대화에는 자발적인 참여가 필요합니다."
              }
            ]
          }
        ]
      },
      {
        "id": "scenario-2",
        "title": "성경 왜곡설 변증과 역사적 서력기원",
        "subtitle": "İncil değiştirildi mi? & Milat / M.S. 서력기원의 역사적 의미",
        "npc": {
          "name": "Emre (엠레)",
          "role": "토론을 좋아하는 대학 도서관 사서",
          "avatarBg": "bg-sky-600",
          "desc": "가상의 대화 상대입니다. 종교나 국적만으로 개인의 생각을 단정하지 마세요."
        },
        "context": "가상의 대화 상대가 사본, 번역과 달력에 관해 질문합니다. 무엇을 뜻하는지 먼저 확인하세요.",
        "steps": [
          {
            "stepIndex": 1,
            "npcSpeech": "İncil değiştirildi mi?",
            "npcSpeechKo": "인질/신약이 변조되었나요?",
            "npcSpeechEn": "Has the Gospel/New Testament been changed?",
            "choices": [
              {
                "id": "clarify",
                "text": "Çevirileri mi, eski el yazmalarını mı kastediyorsunuz?",
                "korean": "번역을 뜻하시나요, 옛 사본을 뜻하시나요?",
                "english": "Do you mean translations or old manuscripts?",
                "score": 0,
                "feedbackType": "best",
                "feedback": "질문의 의미를 확인합니다. 번역, 본문과 사본을 구별하세요.",
                "feedbackEn": "This clarifies the question. Distinguish translations, text and manuscripts.",
                "theologyTip": "질문의 의미를 확인합니다. 번역, 본문과 사본을 구별하세요.",
                "theologyTipEn": "This clarifies the question. Distinguish translations, text and manuscripts."
              },
              {
                "id": "accounts",
                "text": "Kutsal Kitap’ta dört kanonik Müjde anlatımı var. Yazarlar ve kaynaklar hakkında ayrı ayrı konuşabiliriz.",
                "korean": "성경에는 네 정경 복음서가 있습니다. 저자와 자료는 따로 논의할 수 있습니다.",
                "english": "There are four canonical Gospel accounts. We can discuss authors and sources separately.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "네 기록이 있다는 말과 저자 모두가 목격자라는 주장은 다릅니다.",
                "feedbackEn": "Four accounts does not establish that every author was an eyewitness.",
                "theologyTip": "네 기록이 있다는 말과 저자 모두가 목격자라는 주장은 다릅니다.",
                "theologyTipEn": "Four accounts does not establish that every author was an eyewitness."
              },
              {
                "id": "dismiss",
                "text": "Bunu sormayın.",
                "korean": "묻지 마세요.",
                "english": "Do not ask that.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "질문을 막기보다 무엇을 알고 싶은지 물으세요.",
                "feedbackEn": "Ask what the listener wants to know instead of dismissing the question.",
                "theologyTip": "질문을 막기보다 무엇을 알고 싶은지 물으세요.",
                "theologyTipEn": "Ask what the listener wants to know instead of dismissing the question."
              }
            ]
          },
          {
            "stepIndex": 2,
            "npcSpeech": "Eski kopyalar birbirinden farklı değil mi?",
            "npcSpeechKo": "옛 사본들은 서로 다르지 않나요?",
            "npcSpeechEn": "Aren’t the old copies different?",
            "choices": [
              {
                "id": "variants",
                "text": "El yazmaları arasında farklılıklar var. Belirli bir örneği birlikte inceleyebiliriz.",
                "korean": "사본 사이에는 차이가 있습니다. 구체적인 예를 함께 볼 수 있습니다.",
                "english": "Manuscripts contain differences. We can examine a specific example together.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "사본의 유형, 내용과 추정 연대를 식별하세요. 사본 수는 모든 교리의 증명이 아닙니다.",
                "feedbackEn": "Identify a record, its contents and proposed date. Manuscript quantity is not proof of every doctrine.",
                "theologyTip": "사본의 유형, 내용과 추정 연대를 식별하세요. 사본 수는 모든 교리의 증명이 아닙니다.",
                "theologyTipEn": "Identify a record, its contents and proposed date. Manuscript quantity is not proof of every doctrine."
              },
              {
                "id": "uncertainty",
                "text": "Bu el yazmasının tarihini şu anda bilmiyorum. Araştırıp size döneyim.",
                "korean": "지금 이 사본의 연대를 모릅니다. 조사하고 다시 말씀드리겠습니다.",
                "english": "I don’t know this manuscript’s date right now. Let me research it and get back to you.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "솔직함과 실제 후속 조사가 적절한 답입니다.",
                "feedbackEn": "Honesty with a real research follow-up is an appropriate response.",
                "theologyTip": "솔직함과 실제 후속 조사가 적절한 답입니다.",
                "theologyTipEn": "Honesty with a real research follow-up is an appropriate response."
              },
              {
                "id": "identical",
                "text": "Bütün kopyalar tamamen aynıdır.",
                "korean": "모든 사본이 완전히 같습니다.",
                "english": "All copies are completely identical.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "정확하지 않습니다. 이문 때문에 비교와 본문 비평이 필요합니다.",
                "feedbackEn": "This is inaccurate. Variants are why comparison and textual criticism are needed.",
                "theologyTip": "정확하지 않습니다. 이문 때문에 비교와 본문 비평이 필요합니다.",
                "theologyTipEn": "This is inaccurate. Variants are why comparison and textual criticism are needed."
              }
            ]
          },
          {
            "stepIndex": 3,
            "npcSpeech": "Milat kelimesi İsa ile ilgili mi?",
            "npcSpeechKo": "Milat라는 말이 예수님과 관련 있나요?",
            "npcSpeechEn": "Is Milat associated with Jesus?",
            "choices": [
              {
                "id": "calendar",
                "text": "M.Ö. ve M.S. tarihsel olarak İsa’nın doğumuyla ilişkilidir. Bu takvimi kullanmak kişinin Hristiyan olduğunu göstermez. Geleneksel sayımda sıfır yılı yoktur.",
                "korean": "기원전/기원후는 역사적으로 예수님의 탄생과 관련됩니다. 이 달력을 쓰는 것이 기독교 신앙을 뜻하지는 않습니다. 전통 연도에는 0년이 없습니다.",
                "english": "BC/AD has a historical association with Jesus’ birth. Using the calendar does not show personal Christian belief. Traditional numbering has no year zero.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "역사적 관습과 개인 신앙을 구별합니다.",
                "feedbackEn": "Distinguish a historical convention from personal belief.",
                "theologyTip": "역사적 관습과 개인 신앙을 구별합니다.",
                "theologyTipEn": "Distinguish a historical convention from personal belief."
              },
              {
                "id": "ask",
                "text": "Bu kelimeyi hangi bağlamda duydunuz?",
                "korean": "어떤 문맥에서 이 말을 들으셨나요?",
                "english": "In what context did you hear this word?",
                "score": 0,
                "feedbackType": "best",
                "feedback": "문맥을 먼저 물을 수도 있습니다.",
                "feedbackEn": "Asking for context is also useful.",
                "theologyTip": "문맥을 먼저 물을 수도 있습니다.",
                "theologyTipEn": "Asking for context is also useful."
              },
              {
                "id": "overreach",
                "text": "Bu takvimi kullanan herkes Hristiyandır.",
                "korean": "이 달력을 쓰는 사람은 모두 기독교인입니다.",
                "english": "Everyone who uses this calendar is Christian.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "달력 사용은 개인 신앙의 증거가 아닙니다.",
                "feedbackEn": "Calendar use is not evidence of personal religious belief.",
                "theologyTip": "달력 사용은 개인 신앙의 증거가 아닙니다.",
                "theologyTipEn": "Calendar use is not evidence of personal religious belief."
              }
            ]
          },
          {
            "stepIndex": 4,
            "npcSpeech": "Şimdi devam etmek istemiyorum. Belki başka bir gün.",
            "npcSpeechKo": "지금은 계속하고 싶지 않아요. 다른 날에 할 수도 있겠네요.",
            "choices": [
              {
                "id": "respect-refusal",
                "text": "Tabii, anlıyorum. Konuşmak isterseniz sizi dinleyebilirim.",
                "korean": "네, 이해합니다. 이야기하고 싶으시면 들어 드릴 수 있습니다.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "거절을 존중하며 돌봄의 여지를 남깁니다. 거절은 실패한 회심 결과가 아닙니다.",
                "theologyTip": "상호작용: 실제 답에 반응하세요."
              },
              {
                "id": "clarify-followup",
                "text": "Başka bir gün konuşmamı ister misiniz, yoksa bu konuyu kapatalım mı?",
                "korean": "다른 날에 이야기할까요, 아니면 이 주제를 마칠까요?",
                "score": 0,
                "feedbackType": "best",
                "feedback": "상대가 답할 수 있다면 거절의 범위를 확인하세요. 강요하지 말고 답을 받아들이세요.",
                "theologyTip": "이해와 적절함이 중요합니다."
              },
              {
                "id": "insist",
                "text": "Hayır, şimdi devam etmeliyiz.",
                "korean": "아니요, 지금 계속해야 합니다.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "거절을 무시합니다. 받아들이는 답을 연습하세요.",
                "theologyTip": "대화에는 자발적인 참여가 필요합니다."
              }
            ]
          }
        ]
      },
      {
        "id": "scenario-3",
        "title": "선행 저울 Mizan 비유와 하나님의 은혜",
        "subtitle": "Mizan adalet terazisi vs Yuhanna 3:16 Tanrı'nın lütfu ve kurbanı",
        "npc": {
          "name": "Fatma Teyze (파트마 이모)",
          "role": "전통적인 이웃 무슬림 아주머니",
          "avatarBg": "bg-emerald-700",
          "desc": "가상의 대화 상대입니다. 종교나 국적만으로 개인의 생각을 단정하지 마세요."
        },
        "context": "가상의 대화 연습입니다. 상대의 실제 질문을 확인하고 기독교 설명과 비유를 구별하세요. 비유는 모든 사람의 반응을 보장하지 않습니다.",
        "steps": [
          {
            "stepIndex": 1,
            "npcSpeech": "Ah evladım, yaş kemale erdi. Ahirette Mizan terazisi kurulacak. Sevaplarım günahlarımdan ağır basmazsa vay halime! İnşallah Allah acır da cennete girerim ama emin olamıyorum...",
            "npcSpeechKo": "아이고 얘야, 나이가 차니 내세의 미잔 저울이 눈앞에 어른거리는구나. 내 선행(세왑)이 죄보다 무거워야 할 텐데 아니면 큰일이지! 인샬라 알라께서 불쌍히 여겨 천국에 들여보내 주시면 좋겠지만, 확신할 수가 없구나...",
            "choices": [
              {
                "id": "c1",
                "text": "Bu kaygıyı anlıyorum. Sizin için Mizan ne anlama geliyor? Hristiyanların lütuf hakkında neye inandığını anlatabilirim.",
                "korean": "걱정을 이해합니다. 미잔은 본인에게 어떤 의미인가요? 기독교 은혜 신앙을 설명할 수 있습니다.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "비유는 설명 도구이며 증명이 아닙니다. 상대의 이해를 확인하고 거절이나 추가 질문을 받아 주세요.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c2",
                "text": "O terazi uydurma zaten! Hemen İsa'ya inanmazsan cehenneme gidersin teyze!",
                "korean": "그 저울은 지어낸 이야기예요! 당장 예수를 안 믿으면 지옥 갑니다 이모님!",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "질문을 이해했는지, 사실이 정확한지, 언어가 적절한지 검토하세요. 강요나 모욕 대신 의미를 확인할 수 있습니다.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c3",
                "text": "Çok dua edip fakirlere yardım ederseniz kesin cennete gidersiniz, merak etmeyin.",
                "korean": "기도 많이 하시고 가난한 사람 많이 도우시면 틀림없이 천국 가실 거예요, 걱정 마세요.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "질문을 이해했는지, 사실이 정확한지, 언어가 적절한지 검토하세요. 강요나 모욕 대신 의미를 확인할 수 있습니다.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              }
            ]
          },
          {
            "stepIndex": 2,
            "npcSpeech": "Evet evladım... Gece yastığa başımı koyunca 'Acaba yetecek mi?' diye içim titriyor. Temiz bir bardak suya bir damla zehir düşse o su içilir mi? Benim kalbimde de kibir var, öfke var...",
            "npcSpeechKo": "그래 얘야... 밤에 베개에 머리를 뉠 때마다 '과연 내 선행이 충분할까?' 가슴이 떨려. 깨끗한 물 한 컵에 독 한 방울이 떨어지면 그 물을 마실 수 있겠니? 내 마음에도 교만이 있고 분노가 있는데...",
            "choices": [
              {
                "id": "c1",
                "text": "Teyzecim, o zehirli suyu kendi gücümüzle temizleyemeyiz. İşte bu yüzden Tanrı bizden imkânsız bir terazi başarısı beklemedi; bize lütfunu ve kesin güvencesini sundu.",
                "korean": "이모님, 그 독이 든 물을 우리 자신의 힘으로는 정화할 수 없지요. 그렇기 때문에 하나님은 우리에게 불가능한 저울 측정을 요구하지 않으시고, 은혜와 확실한 구원의 보증을 주셨습니다.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "비유는 설명 도구이며 증명이 아닙니다. 상대의 이해를 확인하고 거절이나 추가 질문을 받아 주세요.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c2",
                "text": "O zaman daha çok su katın ki zehir seyreltilsin.",
                "korean": "그럼 물을 더 많이 부어서 독을 희석시키세요.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "질문을 이해했는지, 사실이 정확한지, 언어가 적절한지 검토하세요. 강요나 모욕 대신 의미를 확인할 수 있습니다.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c3",
                "text": "Zehir varsa zaten kurtuluşunuz yok demektir.",
                "korean": "독이 있다면 이미 구원받을 가능성은 없다는 뜻이죠.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "질문을 이해했는지, 사실이 정확한지, 언어가 적절한지 검토하세요. 강요나 모욕 대신 의미를 확인할 수 있습니다.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              }
            ]
          },
          {
            "stepIndex": 3,
            "npcSpeech": "Nasıl bir güvence bu evladım? Tanrı günahkâr bir insana cenneti nasıl kesin olarak vadeder?",
            "npcSpeechKo": "어떻게 그런 보증이 있을 수 있니 얘야? 하나님이 죄 많은 인간에게 천국을 어떻게 확실하게 약속하신다는 거니?",
            "choices": [
              {
                "id": "c1",
                "text": "Hristiyan inancında kurtuluş, Tanrı’nın sevgisine ve İsa Mesih’in yaşamına, ölümüne ve dirilişine dayanır. Yuhanna 3:16’yı bağlamında birlikte okuyabiliriz.",
                "korean": "기독교에서 구원은 하나님의 사랑과 예수님의 삶, 죽음과 부활에 근거합니다. 요한복음 3:16을 문맥에서 함께 읽을 수 있습니다.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "비유는 설명 도구이며 증명이 아닙니다. 상대의 이해를 확인하고 거절이나 추가 질문을 받아 주세요.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c2",
                "text": "Sadece kiliseye gelin, her şeyi anlarsınız.",
                "korean": "그냥 교회에 한번 오세요, 그럼 다 알게 됩니다.",
                "score": 0,
                "feedbackType": "neutral",
                "feedback": "상황에 따라 유용할 수 있습니다. 질문을 명확히 하고 모르는 내용은 조사한 뒤 답하세요.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c3",
                "text": "Bunu anlamak zordur, teoloji bilmeniz gerekir.",
                "korean": "이걸 이해하긴 어려워요, 신학을 알아야 하거든요.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "질문을 이해했는지, 사실이 정확한지, 언어가 적절한지 검토하세요. 강요나 모욕 대신 의미를 확인할 수 있습니다.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              }
            ]
          },
          {
            "stepIndex": 4,
            "npcSpeech": "Şimdi devam etmek istemiyorum. Belki başka bir gün.",
            "npcSpeechKo": "지금은 계속하고 싶지 않아요. 다른 날에 할 수도 있겠네요.",
            "choices": [
              {
                "id": "respect-refusal",
                "text": "Tabii, anlıyorum. Konuşmak isterseniz sizi dinleyebilirim.",
                "korean": "네, 이해합니다. 이야기하고 싶으시면 들어 드릴 수 있습니다.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "거절을 존중하며 돌봄의 여지를 남깁니다. 거절은 실패한 회심 결과가 아닙니다.",
                "theologyTip": "상호작용: 실제 답에 반응하세요."
              },
              {
                "id": "clarify-followup",
                "text": "Başka bir gün konuşmamı ister misiniz, yoksa bu konuyu kapatalım mı?",
                "korean": "다른 날에 이야기할까요, 아니면 이 주제를 마칠까요?",
                "score": 0,
                "feedbackType": "best",
                "feedback": "상대가 답할 수 있다면 거절의 범위를 확인하세요. 강요하지 말고 답을 받아들이세요.",
                "theologyTip": "이해와 적절함이 중요합니다."
              },
              {
                "id": "insist",
                "text": "Hayır, şimdi devam etmeliyiz.",
                "korean": "아니요, 지금 계속해야 합니다.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "거절을 무시합니다. 받아들이는 답을 연습하세요.",
                "theologyTip": "대화에는 자발적인 참여가 필요합니다."
              }
            ]
          }
        ]
      },
      {
        "id": "scenario-noel",
        "title": "크리스마스(Noel) vs 새해(Yılbaşı)",
        "subtitle": "Noel ile Yılbaşı Farkı - 산타클로스를 넘어 성육신의 신비로",
        "npc": {
          "name": "Elif (엘리프)",
          "role": "베식타쉬의 패션 디자이너",
          "avatarBg": "bg-rose-600",
          "desc": "가상의 대화 상대입니다. 종교나 국적만으로 개인의 생각을 단정하지 마세요."
        },
        "context": "가상의 대화 연습입니다. 상대의 실제 질문을 확인하고 기독교 설명과 비유를 구별하세요. 비유는 모든 사람의 반응을 보장하지 않습니다.",
        "steps": [
          {
            "stepIndex": 1,
            "npcSpeech": "Her yerde çam ağaçları ve Noel Baba var. 31 Aralık'ta kutlanan Yılbaşı ile sizin Noel'iniz arasında bir fark var mı ki? Bence ikisi de aynı kış eğlencesi.",
            "npcSpeechKo": "어딜 가나 전나무 트리와 산타클로스가 있잖아요. 12월 31일에 기념하는 새해(Yılbaşı)랑 기독교의 크리스마스(Noel) 사이에 차이가 있나요? 제 생각엔 둘 다 같은 겨울 파티 같아요.",
            "choices": [
              {
                "id": "c1",
                "text": "Elif Hanım, ağaçlar ve hediyeler benziyor. Ama bizim geleneğimizde 25 Aralık’ta kutlanan Noel, Tanrı’nın insan olarak aramıza gelişini anar; yalnızca yılın bitişi değildir.",
                "korean": "나무와 선물이 비슷해 보입니다. 우리 전통에서 12월 25일 성탄절은 하나님이 인간으로 오심을 기념하며 단지 한 해의 끝은 아닙니다.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "비유는 설명 도구이며 증명이 아닙니다. 상대의 이해를 확인하고 거절이나 추가 질문을 받아 주세요.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c2",
                "text": "Tamamen farklı! Noel Hristiyanların bayramıdır, Yılbaşı ise dünyevi bir eğlencedir.",
                "korean": "완전히 달라요! 성탄절은 기독교인의 명절이고, 새해는 세속적인 유흥일 뿐입니다.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "질문을 이해했는지, 사실이 정확한지, 언어가 적절한지 검토하세요. 강요나 모욕 대신 의미를 확인할 수 있습니다.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c3",
                "text": "Önemli olan eğlenmek, ne fark eder ki?",
                "korean": "즐기면 그만이죠, 뭐가 다르겠어요?",
                "score": 0,
                "feedbackType": "neutral",
                "feedback": "상황에 따라 유용할 수 있습니다. 질문을 명확히 하고 모르는 내용은 조사한 뒤 답하세요.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              }
            ]
          },
          {
            "stepIndex": 2,
            "npcSpeech": "Tanrı'nın insan bedenine girmesi mi? Tanrı yücedir, neden bir bebeğin aciz bedenine girsin ki? Bu bana çok garip geliyor.",
            "npcSpeechKo": "하나님이 인간의 몸으로 오셨다고요? 하나님은 지극히 높으신데, 왜 갓난아기의 연약한 몸으로 오시겠어요? 그건 너무 이상하게 들려요.",
            "choices": [
              {
                "id": "c1",
                "text": "Bir kral düşünün, sarayından halkına emirler yağdırabilir. Ama tebaasını o kadar çok sever ki, onların acısını ve çamurunu tatmak için çoban kılığına girip aralarında yaşar. İşte Noel, Tanrı'nın bize 'Seni anlıyorum ve seviyorum' diyerek sarıldığı gündür.",
                "korean": "한 왕을 떠올려 보세요. 궁궐에서 백성에게 명령만 내릴 수도 있죠. 하지만 백성을 너무나 사랑해서 그들의 슬픔과 진흙탕을 함께 겪기 위해 목자의 옷을 입고 찾아온 것입니다. 성탄은 하나님이 우리에게 '내가 널 이해하고 사랑한다'며 안아주신 날입니다.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "비유는 설명 도구이며 증명이 아닙니다. 상대의 이해를 확인하고 거절이나 추가 질문을 받아 주세요.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c2",
                "text": "Bunu akılla anlayamazsınız, bu bir sırdır.",
                "korean": "이건 이성으로 이해할 수 없습니다, 신비니까요.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "질문을 이해했는지, 사실이 정확한지, 언어가 적절한지 검토하세요. 강요나 모욕 대신 의미를 확인할 수 있습니다.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c3",
                "text": "Noel hediyeleri aslında Tanrı'nın bize verdiği sonsuz yaşam armağanıdır.",
                "korean": "크리스마스 선물은 사실 하나님이 우리에게 주신 영생의 선물이에요.",
                "score": 0,
                "feedbackType": "good",
                "feedback": "비유는 설명 도구이며 증명이 아닙니다. 상대의 이해를 확인하고 거절이나 추가 질문을 받아 주세요.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              }
            ]
          },
          {
            "stepIndex": 3,
            "npcSpeech": "Şimdi devam etmek istemiyorum. Belki başka bir gün.",
            "npcSpeechKo": "지금은 계속하고 싶지 않아요. 다른 날에 할 수도 있겠네요.",
            "choices": [
              {
                "id": "respect-refusal",
                "text": "Tabii, anlıyorum. Konuşmak isterseniz sizi dinleyebilirim.",
                "korean": "네, 이해합니다. 이야기하고 싶으시면 들어 드릴 수 있습니다.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "거절을 존중하며 돌봄의 여지를 남깁니다. 거절은 실패한 회심 결과가 아닙니다.",
                "theologyTip": "상호작용: 실제 답에 반응하세요."
              },
              {
                "id": "clarify-followup",
                "text": "Başka bir gün konuşmamı ister misiniz, yoksa bu konuyu kapatalım mı?",
                "korean": "다른 날에 이야기할까요, 아니면 이 주제를 마칠까요?",
                "score": 0,
                "feedbackType": "best",
                "feedback": "상대가 답할 수 있다면 거절의 범위를 확인하세요. 강요하지 말고 답을 받아들이세요.",
                "theologyTip": "이해와 적절함이 중요합니다."
              },
              {
                "id": "insist",
                "text": "Hayır, şimdi devam etmeliyiz.",
                "korean": "아니요, 지금 계속해야 합니다.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "거절을 무시합니다. 받아들이는 답을 연습하세요.",
                "theologyTip": "대화에는 자발적인 참여가 필요합니다."
              }
            ]
          }
        ]
      },
      {
        "id": "scenario-heart",
        "title": "마음의 공허함과 하나님의 형상",
        "subtitle": "Kalpteki Sonsuzluk Boşluğu - 세상이 채울 수 없는 영혼의 갈증",
        "npc": {
          "name": "Caner (자네르)",
          "role": "레벤트의 IT 스타트업 개발자",
          "avatarBg": "bg-indigo-600",
          "desc": "가상의 대화 상대입니다. 종교나 국적만으로 개인의 생각을 단정하지 마세요."
        },
        "context": "가상의 대화 연습입니다. 상대의 실제 질문을 확인하고 기독교 설명과 비유를 구별하세요. 비유는 모든 사람의 반응을 보장하지 않습니다.",
        "steps": [
          {
            "stepIndex": 1,
            "npcSpeech": "Her şeyim var gibi görünüyor: iyi bir araba, yüksek maaş, güzel bir ev. Ama akşam eve gelince içimde koca bir boşluk hissediyorum. Sanki bir parçam eksik gibi.",
            "npcSpeechKo": "다 가진 것처럼 보이죠. 좋은 차, 높은 연봉, 근사한 집. 하지만 저녁에 집에 돌아오면 마음속에 거대한 빈방이 느껴져요. 마치 내 한 조각이 빠져나간 것처럼요.",
            "choices": [
              {
                "id": "c1",
                "text": "Caner, bu duyguyu biraz daha anlatır mısın? Hristiyan inancında Tanrı’yla ilişkimizin hayatımıza anlam verdiğine inanıyoruz.",
                "korean": "그 느낌을 좀 더 말해 줄래? 기독교에서는 하나님과의 관계가 삶에 의미를 준다고 믿습니다.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "비유는 설명 도구이며 증명이 아닙니다. 상대의 이해를 확인하고 거절이나 추가 질문을 받아 주세요.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c2",
                "text": "Daha çok tatile çıkın ya da yeni bir hobi edinin.",
                "korean": "휴가를 더 자주 가거나 새로운 취미를 가져보세요.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "질문을 이해했는지, 사실이 정확한지, 언어가 적절한지 검토하세요. 강요나 모욕 대신 의미를 확인할 수 있습니다.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c3",
                "text": "Daha fazla çalışıp kariyer yaparsanız geçer.",
                "korean": "일을 더 열심히 해서 승진하면 지나갈 거예요.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "질문을 이해했는지, 사실이 정확한지, 언어가 적절한지 검토하세요. 강요나 모욕 대신 의미를 확인할 수 있습니다.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              }
            ]
          },
          {
            "stepIndex": 2,
            "npcSpeech": "Sonsuz bir boşluk mu? Gerçekten de para veya kariyer onu bir iki günlüğüne oyalıyor ama asla tamamen dolduramıyor. Peki bu boşluk nasıl dolar?",
            "npcSpeechKo": "영원한 크기의 빈자리요? 정말 그래요. 돈이나 승진도 하루이틀 기분 좋을 뿐 채워지진 않더군요. 그럼 그 빈자리는 어떻게 채우나요?",
            "choices": [
              {
                "id": "c1",
                "text": "Hristiyanlar, Tanrı’nın bizi kendisiyle ilişki için yarattığına inanır. Bu bir inanç açıklamasıdır; her zorluğun hemen geçeceği anlamına gelmez.",
                "korean": "기독교인은 하나님이 그분과의 관계를 위해 우리를 만드셨다고 믿습니다. 신앙 설명이지 모든 어려움이 즉시 없어짐을 뜻하지는 않습니다.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "비유는 설명 도구이며 증명이 아닙니다. 상대의 이해를 확인하고 거절이나 추가 질문을 받아 주세요.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c2",
                "text": "Kiliseye gelip bağış yaparsanız dolar.",
                "korean": "교회에 와서 헌금하면 채워집니다.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "질문을 이해했는지, 사실이 정확한지, 언어가 적절한지 검토하세요. 강요나 모욕 대신 의미를 확인할 수 있습니다.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c3",
                "text": "İncil okuyup dua edin, zamanla geçer.",
                "korean": "성경 읽고 기도해 보세요, 시간 지나면 나아집니다.",
                "score": 0,
                "feedbackType": "neutral",
                "feedback": "상황에 따라 유용할 수 있습니다. 질문을 명확히 하고 모르는 내용은 조사한 뒤 답하세요.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              }
            ]
          },
          {
            "stepIndex": 3,
            "npcSpeech": "Şimdi devam etmek istemiyorum. Belki başka bir gün.",
            "npcSpeechKo": "지금은 계속하고 싶지 않아요. 다른 날에 할 수도 있겠네요.",
            "choices": [
              {
                "id": "respect-refusal",
                "text": "Tabii, anlıyorum. Konuşmak isterseniz sizi dinleyebilirim.",
                "korean": "네, 이해합니다. 이야기하고 싶으시면 들어 드릴 수 있습니다.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "거절을 존중하며 돌봄의 여지를 남깁니다. 거절은 실패한 회심 결과가 아닙니다.",
                "theologyTip": "상호작용: 실제 답에 반응하세요."
              },
              {
                "id": "clarify-followup",
                "text": "Başka bir gün konuşmamı ister misiniz, yoksa bu konuyu kapatalım mı?",
                "korean": "다른 날에 이야기할까요, 아니면 이 주제를 마칠까요?",
                "score": 0,
                "feedbackType": "best",
                "feedback": "상대가 답할 수 있다면 거절의 범위를 확인하세요. 강요하지 말고 답을 받아들이세요.",
                "theologyTip": "이해와 적절함이 중요합니다."
              },
              {
                "id": "insist",
                "text": "Hayır, şimdi devam etmeliyiz.",
                "korean": "아니요, 지금 계속해야 합니다.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "거절을 무시합니다. 받아들이는 답을 연습하세요.",
                "theologyTip": "대화에는 자발적인 참여가 필요합니다."
              }
            ]
          }
        ]
      },
      {
        "id": "scenario-4",
        "title": "글 없는 책 (5가지 색상 복음 브릿지)",
        "subtitle": "5 Renk: Altın, Siyah, Kırmızı, Beyaz, Yeşil ile 복음 전하기",
        "npc": {
          "name": "Can (잔)",
          "role": "공원에서 만난 호기심 많은 청소년",
          "avatarBg": "bg-indigo-600",
          "desc": "가상의 대화 상대입니다. 종교나 국적만으로 개인의 생각을 단정하지 마세요."
        },
        "context": "가상의 대화 연습입니다. 상대의 실제 질문을 확인하고 기독교 설명과 비유를 구별하세요. 비유는 모든 사람의 반응을 보장하지 않습니다.",
        "steps": [
          {
            "stepIndex": 1,
            "npcSpeech": "Bu kitapta hiç yazı yok ki! Sadece altın sarısı, siyah, kırmızı, beyaz ve yeşil sayfalar var. Ne anlatıyor bu renkler?",
            "npcSpeechKo": "이 책엔 글씨가 하나도 없네요! 금색, 검은색, 빨간색, 흰색, 초록색 페이지만 있어요. 이 색깔들이 뭘 뜻하는 거예요?",
            "choices": [
              {
                "id": "c1",
                "text": "İlk sayfa olan Altın Sarısı'ndan başlayalım Can. Bu renk Tanrı'nın görkemini, kutsallığını ve O'nun hazırladığı Cennet'i simgeler. Orada acı, gözyaşı ve kötülük yoktur. Tanrı bizi çok sevdiği için bu cennette O'nunla yaşamamız için yarattı.",
                "korean": "첫 번째 페이지인 '금색'부터 시작해볼까 잔? 이 색은 하나님의 영광과 거룩함, 그리고 그분이 예비하신 천국을 상징해. 거기엔 고통도 눈물도 악도 없단다. 하나님은 널 너무 사랑하셔서 그 천국에서 함께 살도록 우릴 지으셨어.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "비유는 설명 도구이며 증명이 아닙니다. 상대의 이해를 확인하고 거절이나 추가 질문을 받아 주세요.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c2",
                "text": "Siyah sayfaya bak! Sen günahkârsın ve cehenneme gideceksin demek!",
                "korean": "검은색 페이지를 봐! 넌 죄인이고 지옥 갈 운명이란 뜻이야!",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "질문을 이해했는지, 사실이 정확한지, 언어가 적절한지 검토하세요. 강요나 모욕 대신 의미를 확인할 수 있습니다.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c3",
                "text": "Sadece resim defteri bu, önemli bir şey değil.",
                "korean": "그냥 그림 공책이야, 별거 아니란다.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "질문을 이해했는지, 사실이 정확한지, 언어가 적절한지 검토하세요. 강요나 모욕 대신 의미를 확인할 수 있습니다.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              }
            ]
          },
          {
            "stepIndex": 2,
            "npcSpeech": "Vay canına, öyle bir yer harika olurdu! Ama ikinci sayfa simsiyah... Neden böyle karanlık bir renk koymuşlar?",
            "npcSpeechKo": "우와, 그런 곳이라면 정말 좋겠네요! 그런데 두 번째 페이지는 시커멓네요... 왜 이렇게 어두운 색을 넣은 거예요?",
            "choices": [
              {
                "id": "c1",
                "text": "Bu Siyah sayfa 'Günah'ı temsil ediyor Can. Yalan söylemek, kin tutmak, Tanrı'yı unutmak gibi günahlarımız kalbimizi kararttı ve bizi kutsal Tanrı'dan ayırdı. Bu karanlıkla o altın cennete giremeyiz.",
                "korean": "이 '검은색' 페이지는 '죄'를 상징한단다 잔. 거짓말, 미움, 하나님을 잊고 사는 것 같은 우리의 죄가 마음을 어둡게 했고 거룩하신 하나님과 우리 사이를 갈라놓았어. 이 어둠을 가진 채로는 저 황금빛 천국에 들어갈 수 없단다.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "비유는 설명 도구이며 증명이 아닙니다. 상대의 이해를 확인하고 거절이나 추가 질문을 받아 주세요.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c2",
                "text": "Karanlık geceleri anlatıyor, uykun gelince uyu diye.",
                "korean": "어두운 밤을 뜻해, 졸리면 자라는 거지.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "질문을 이해했는지, 사실이 정확한지, 언어가 적절한지 검토하세요. 강요나 모욕 대신 의미를 확인할 수 있습니다.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c3",
                "text": "Şeytanın rengi bu, sana bulaşmasın uzak dur.",
                "korean": "사탄의 색이야, 너한테 묻지 않게 멀리하렴.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "질문을 이해했는지, 사실이 정확한지, 언어가 적절한지 검토하세요. 강요나 모욕 대신 의미를 확인할 수 있습니다.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              }
            ]
          },
          {
            "stepIndex": 3,
            "npcSpeech": "Peki o zaman bu kırmızı ve beyaz ne işe yarıyor? O siyahlıktan nasıl kurtulabiliriz?",
            "npcSpeechKo": "그럼 저 빨간색과 흰색은 무슨 역할이에요? 저 어두운 검은색에서 어떻게 벗어날 수 있나요?",
            "choices": [
              {
                "id": "c1",
                "text": "Kırmızı, İsa Mesih'in çarmıhta döktüğü sevgi kanıdır! O bizim günah cezamızı ödedi. O'na iman ettiğimizde, Beyaz sayfa gibi yüreğimiz kardan beyaz hale gelir, aklanırız. Ve son Yeşil sayfa ise Mesih'le her gün dua ve Söz'le büyüyeceğimiz yeni hayatı simgeler!",
                "korean": "빨간색은 예수 그리스도께서 십자가에서 흘리신 사랑의 피란다! 그분이 우리 죗값을 대신 치르셨어. 그분을 믿을 때, 흰색 페이지처럼 우리 마음은 눈보다 더 희어지고 깨끗해지지. 그리고 마지막 초록색은 매일 기도와 말씀 안에서 자라가는 새 생명을 뜻한단다!",
                "score": 0,
                "feedbackType": "best",
                "feedback": "비유는 설명 도구이며 증명이 아닙니다. 상대의 이해를 확인하고 거절이나 추가 질문을 받아 주세요.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c2",
                "text": "Kırmızı tehlike demektir, beyaz da teslim bayrağı. Yeşil de doğayı sev demek.",
                "korean": "빨간색은 위험, 흰색은 항복 깃발이야. 초록은 자연을 사랑하라는 뜻이고.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "질문을 이해했는지, 사실이 정확한지, 언어가 적절한지 검토하세요. 강요나 모욕 대신 의미를 확인할 수 있습니다.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              },
              {
                "id": "c3",
                "text": "Kendin iyi işler yaparak o siyahı beyaza boyamalısın.",
                "korean": "스스로 착한 일을 해서 그 검은색을 하얗게 칠해야 한단다.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "질문을 이해했는지, 사실이 정확한지, 언어가 적절한지 검토하세요. 강요나 모욕 대신 의미를 확인할 수 있습니다.",
                "theologyTip": "이 문장은 기독교 교리 설명이나 비유입니다. 성경 본문을 문맥에서 함께 확인하세요."
              }
            ]
          },
          {
            "stepIndex": 4,
            "npcSpeech": "Şimdi devam etmek istemiyorum. Belki başka bir gün.",
            "npcSpeechKo": "지금은 계속하고 싶지 않아요. 다른 날에 할 수도 있겠네요.",
            "choices": [
              {
                "id": "respect-refusal",
                "text": "Tabii, anlıyorum. Konuşmak isterseniz sizi dinleyebilirim.",
                "korean": "네, 이해합니다. 이야기하고 싶으시면 들어 드릴 수 있습니다.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "거절을 존중하며 돌봄의 여지를 남깁니다. 거절은 실패한 회심 결과가 아닙니다.",
                "theologyTip": "상호작용: 실제 답에 반응하세요."
              },
              {
                "id": "clarify-followup",
                "text": "Başka bir gün konuşmamı ister misiniz, yoksa bu konuyu kapatalım mı?",
                "korean": "다른 날에 이야기할까요, 아니면 이 주제를 마칠까요?",
                "score": 0,
                "feedbackType": "best",
                "feedback": "상대가 답할 수 있다면 거절의 범위를 확인하세요. 강요하지 말고 답을 받아들이세요.",
                "theologyTip": "이해와 적절함이 중요합니다."
              },
              {
                "id": "insist",
                "text": "Hayır, şimdi devam etmeliyiz.",
                "korean": "아니요, 지금 계속해야 합니다.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "거절을 무시합니다. 받아들이는 답을 연습하세요.",
                "theologyTip": "대화에는 자발적인 참여가 필요합니다."
              }
            ]
          }
        ]
      }
    ]
  },
  "worldview": {
    "concepts": [
      {
        "id": "kul-hakki",
        "title": "Kul Hakkı (인간의 권리와 빚)",
        "subtitle": "Hakkını helal et! 사후세계 Ahiret까지 이어지는 권리와 탕감 문화",
        "badge": "핵심 관계 윤리",
        "icon": "⚖️",
        "summary": "Diyanet의 설명은 권리 침해를 바로잡고 피해자와 화해하며 회개할 것을 강조합니다. 피해자에게 연락할 수 없는 경우도 다룹니다. 모든 무슬림의 개인 믿음을 단정하지 마세요.",
        "details": [
          {
            "heading": "권리와 실제 관계",
            "text": "Hakkını helal et는 자신이 입힌 해를 용서해 달라는 표현일 수 있습니다. 뜻은 문맥에서 확인하세요. 재산 반환과 피해 회복은 단순한 말과 다릅니다."
          },
          {
            "heading": "기독교 설명과 직역",
            "text": "요한복음 19:30의 tetelestai는 “다 이루었다/완료되었다”입니다. Borç ödendi(빚이 갚아졌다)는 신학적 해석이며 단어의 직접 번역이 아닙니다. 마태복음 18장의 문맥에서 용서와 책임을 토의하세요."
          }
        ],
        "sampleDialogue": {
          "tr": "— Kardeşim, bana hakkını helal et, kalbini kırdıysam affet.\n— Helal olsun kardeşim! Mesih bizi nasıl karşılıksız bağışladıysa, ben de seni öyle bağışlıyorum.",
          "ko": "— 형제여, 내게 권리를 탕감해 주게(용서해 주게). 자네 마음에 상처를 주었다면 용서하게.\n— 기꺼이 탕감하네 형제여! 그리스도께서 우리를 값없이 용서하셨듯이, 나 또한 자네를 그렇게 용서하네."
        }
      },
      {
        "id": "islamic-terms",
        "title": "Sevap · Günah · Helal · Haram",
        "subtitle": "이슬람 일상 4대 기본 규범 매트릭스와 복음적 대조",
        "badge": "세계관 매트릭스",
        "icon": "🧭",
        "summary": "이 용어들은 종교적 연관과 일상 용례가 있습니다. 개인의 생각은 Bu konuda siz ne düşünüyorsunuz?로 물으세요.",
        "matrix": [
          {
            "term": "Sevap",
            "meaning": "종교적으로 인정되는 행동의 보상",
            "islamView": "TDV의 용어 설명입니다. 모든 행동을 단순한 점수로 묘사하지 마세요.",
            "christianBridge": "복음주의 기독교에서는 선행을 은혜에 대한 응답으로 설명합니다 (엡 2:8–10)."
          },
          {
            "term": "Günah",
            "meaning": "죄",
            "islamView": "하나님의 뜻을 어기는 것. 단순한 벌점으로 축소하지 마세요.",
            "christianBridge": "기독교 죄와 용서의 의미는 성경 문맥에서 설명하세요."
          },
          {
            "term": "Helal",
            "meaning": "허용되는 것",
            "islamView": "종교법에서 허용되는 음식이나 행동. 일상적 표현도 문맥에서 확인하세요.",
            "christianBridge": "같은 단어를 안다고 교리가 같다고 가정하지 마세요."
          },
          {
            "term": "Haram",
            "meaning": "금지되는 것",
            "islamView": "종교법상 금지. 사람마다 실천이 다를 수 있습니다.",
            "christianBridge": "자신의 신앙을 설명하되 상대의 생활을 추측하지 마세요."
          }
        ]
      },
      {
        "id": "ahiret-journey",
        "title": "Ahiret (이슬람 사후세계) 8단계 여정과 기독교 종말론",
        "subtitle": "죽음 이후 펼쳐지는 8단계 여정과 성경의 구원 확신 대조",
        "badge": "종말론 비교",
        "icon": "🌌",
        "summary": "TDV ÂHİRET의 설명을 바탕으로 한 수니 전통 용어 개요입니다. 여덟 항목은 학습 구성이지 모든 전통의 확정된 순서나 개인의 두려움 목록이 아닙니다.",
        "stages": [
          {
            "num": 1,
            "name": "Dünya",
            "desc": "현세와 책임",
            "islamic": "수니 전통에서 쓰이는 개념입니다. TDV ÂHİRET에서 문맥과 출처를 확인하고 상대에게 자신의 생각을 물으세요.",
            "christian": "기독교는 그리스도의 부활과 하나님과 함께할 소망을 가르칩니다. 비교는 교리 설명이지 상대가 무엇을 믿는지에 관한 증거가 아닙니다."
          },
          {
            "num": 2,
            "name": "Berzah",
            "desc": "죽음 이후 중간 상태",
            "islamic": "수니 전통에서 쓰이는 개념입니다. TDV ÂHİRET에서 문맥과 출처를 확인하고 상대에게 자신의 생각을 물으세요.",
            "christian": "기독교는 그리스도의 부활과 하나님과 함께할 소망을 가르칩니다. 비교는 교리 설명이지 상대가 무엇을 믿는지에 관한 증거가 아닙니다."
          },
          {
            "num": 3,
            "name": "Kıyamet",
            "desc": "부활과 심판의 날",
            "islamic": "수니 전통에서 쓰이는 개념입니다. TDV ÂHİRET에서 문맥과 출처를 확인하고 상대에게 자신의 생각을 물으세요.",
            "christian": "기독교는 그리스도의 부활과 하나님과 함께할 소망을 가르칩니다. 비교는 교리 설명이지 상대가 무엇을 믿는지에 관한 증거가 아닙니다."
          },
          {
            "num": 4,
            "name": "Dirilme",
            "desc": "죽은 자의 부활",
            "islamic": "수니 전통에서 쓰이는 개념입니다. TDV ÂHİRET에서 문맥과 출처를 확인하고 상대에게 자신의 생각을 물으세요.",
            "christian": "기독교는 그리스도의 부활과 하나님과 함께할 소망을 가르칩니다. 비교는 교리 설명이지 상대가 무엇을 믿는지에 관한 증거가 아닙니다."
          },
          {
            "num": 5,
            "name": "Mahşer",
            "desc": "심판을 위한 모임",
            "islamic": "수니 전통에서 쓰이는 개념입니다. TDV ÂHİRET에서 문맥과 출처를 확인하고 상대에게 자신의 생각을 물으세요.",
            "christian": "기독교는 그리스도의 부활과 하나님과 함께할 소망을 가르칩니다. 비교는 교리 설명이지 상대가 무엇을 믿는지에 관한 증거가 아닙니다."
          },
          {
            "num": 6,
            "name": "Mizan",
            "desc": "행위의 저울",
            "islamic": "수니 전통에서 쓰이는 개념입니다. TDV ÂHİRET에서 문맥과 출처를 확인하고 상대에게 자신의 생각을 물으세요.",
            "christian": "기독교는 그리스도의 부활과 하나님과 함께할 소망을 가르칩니다. 비교는 교리 설명이지 상대가 무엇을 믿는지에 관한 증거가 아닙니다."
          },
          {
            "num": 7,
            "name": "Sırat",
            "desc": "전통 설명에서의 다리",
            "islamic": "수니 전통에서 쓰이는 개념입니다. TDV ÂHİRET에서 문맥과 출처를 확인하고 상대에게 자신의 생각을 물으세요.",
            "christian": "기독교는 그리스도의 부활과 하나님과 함께할 소망을 가르칩니다. 비교는 교리 설명이지 상대가 무엇을 믿는지에 관한 증거가 아닙니다."
          },
          {
            "num": 8,
            "name": "Cennet / Cehennem",
            "desc": "천국과 지옥",
            "islamic": "수니 전통에서 쓰이는 개념입니다. TDV ÂHİRET에서 문맥과 출처를 확인하고 상대에게 자신의 생각을 물으세요.",
            "christian": "기독교는 그리스도의 부활과 하나님과 함께할 소망을 가르칩니다. 비교는 교리 설명이지 상대가 무엇을 믿는지에 관한 증거가 아닙니다."
          }
        ]
      },
      {
        "id": "fidye-kefaret",
        "title": "이슬람 종교법: Fidye vs Kefaret의 신학적 통찰",
        "subtitle": "피디예(Fidye)와 케파레트(Kefaret) 개념을 통한 예수 그리스도의 완전한 대속 해설",
        "badge": "종교법 & 구속론",
        "icon": "🕊️",
        "summary": "Fidye와 kefaret는 이슬람 법학에서 구체적인 의무와 관련됩니다. 일상의 몸값이나 기독교 구속 설명과 같은 제도라고 가정하지 마세요.",
        "comparisons": [
          {
            "term": "Fidye",
            "islamicDef": "특정 금식 의무를 수행할 수 없을 때의 보상 등. 조건은 실제 기관 안내를 확인하세요.",
            "dailyMeaning": "인질 석방의 몸값.",
            "christianBridge": "마가복음 10:45의 구속 설명은 기독교의 문맥에서 읽으세요."
          },
          {
            "term": "Kefaret",
            "islamicDef": "특정 위반에 대한 속죄 의무. 위반별 조건과 선택이 다릅니다.",
            "dailyMeaning": "잘못에 대한 벌충.",
            "christianBridge": "요한일서 2:2의 속죄와 비교할 때 유사한 단어가 같은 교리를 뜻하지는 않습니다."
          }
        ]
      }
    ]
  },
  "syntax": {
    "verses": [
      {
        "id": "rom-6-4",
        "reference": "Romalılar 6:4 (로마서 6:4) · 학습용 재서술 (직접 인용 아님)",
        "turkish": "Vaftiz yoluyla O'nunla birlikte ölüme gömüldük.",
        "korean": "세례를 받으면서 우리는 그분과 함께 죽음에 묻혔습니다.",
        "focusGrammar": "피동 접미사 -ül- (Passivum) 분석",
        "grammarRule": "이 예문에서 göm- + -ül-은 피동입니다. 터키어 피동 표지는 어간에 따라 -Il 또는 -n 등이 쓰이므로 모든 자음 끝 동사에 한 규칙만 적용하지 마세요.",
        "tokens": [
          {
            "word": "Vaftiz",
            "meaning": "세례, 침례 (Baptism)",
            "grammar": "명사 (희랍어 baptisma 차용)"
          },
          {
            "word": "yoluyla",
            "meaning": "~를 통하여, ~의 방법으로",
            "grammar": "yol (길/방법) + -u (3인칭 소유격) + -y- (연결자음) + -la (도구격 ile)"
          },
          {
            "word": "O'nunla",
            "meaning": "그분과 함께",
            "grammar": "O (3인칭 대명사) + -nun (소유격) + -la (동반격 ile)"
          },
          {
            "word": "birlikte",
            "meaning": "함께 (Together)",
            "grammar": "birlik (하나됨) + -te (처격)"
          },
          {
            "word": "ölüme",
            "meaning": "죽음으로, 사망에",
            "grammar": "ölüm (죽음) + -e (방향격)"
          },
          {
            "word": "gömüldük",
            "meaning": "우리는 장사되었다 / 파묻혔다",
            "grammar": "göm- (묻다, 타동사) + -ül- (피동 접미사: 묻히다) + -dü- (과거시제) + -k (1인칭 복수 어미)"
          }
        ],
        "theologyNote": "그리스도인이 세례를 받는다는 것은 자신의 옛 자아가 그리스도와 함께 십자가에서 완전히 죽어 무덤에 '매장(gömülmek)'되었음을 공포하는 거룩한 연합입니다.",
        "quotationStatus": "teaching-adaptation"
      },
      {
        "id": "2cor-5-17",
        "reference": "2. Korintliler 5:17 (고린도후서 5:17) · 학습용 재서술 (직접 인용 아님)",
        "turkish": "Bir kimse Mesih'teyse, yeni yaratıktır; eski şeyler geçmiş, her şey yeni olmuştur.",
        "korean": "그리스도 안에 있는 이는 새 피조물입니다. 예전 것은 지나고 모든 것이 새로워졌습니다.",
        "focusGrammar": "조건법 접미사 -yse (Kip) 및 명사화 -ık 분석",
        "grammarRule": "명사/처격 뒤에 매개자음 '-y-'와 조건법 어미 '-se / -sa'가 결합하여 '~안에 있다면(If in)'을 나타냅니다.",
        "tokens": [
          {
            "word": "Bir kimse",
            "meaning": "누구든지, 어떤 사람이든",
            "grammar": "부정 대명사구 (Anyone / Whoever)"
          },
          {
            "word": "Mesih'teyse",
            "meaning": "그리스도 안에 있다면",
            "grammar": "Mesih + -te (처격: ~안에) + -y- (매개자음) + -se (조건법: ~라면)"
          },
          {
            "word": "yeni",
            "meaning": "새로운 (New)",
            "grammar": "형용사"
          },
          {
            "word": "yaratıktır",
            "meaning": "피조물입니다",
            "grammar": "yarat- (창조하다) + -ık (행위 결과 명사화: 피조물) + -tır (단언/서술격)"
          },
          {
            "word": "eski",
            "meaning": "옛날의, 이전의 (Old)",
            "grammar": "형용사"
          },
          {
            "word": "şeyler",
            "meaning": "것들 (Things)",
            "grammar": "şey (것) + -ler (복수 어미)"
          },
          {
            "word": "geçmiş",
            "meaning": "지나갔다",
            "grammar": "geç- + -miş: 이 문맥에서 결과/완료를 나타냅니다. -miş는 전언/추론 용법도 있으며 영어 과거완료와 단순히 같지 않습니다."
          },
          {
            "word": "her şey",
            "meaning": "모든 것 (Everything)",
            "grammar": "명사구"
          },
          {
            "word": "olmuştur",
            "meaning": "되었도다",
            "grammar": "ol- + -muş + -tur: 결과 상태와 단언. 영어 과거완료의 단순 대응이 아닙니다."
          }
        ],
        "theologyNote": "'Mesih'te'(그리스도 안에)라는 조건은 단순한 종교적 소속이 아니라 존재론적 전이(Ontological transformation)를 의미합니다.",
        "quotationStatus": "teaching-adaptation"
      },
      {
        "id": "rom-6-23",
        "reference": "Romalılar 6:23 (로마서 6:23) · 학습용 재서술 (직접 인용 아님)",
        "turkish": "Çünkü günahın ücreti ölüm, Tanrı'nın armağanı ise Mesih İsa Rabbimizde sonsuz yaşamdır.",
        "korean": "죄의 대가는 죽음이지만 하나님이 주시는 선물은 우리 주 그리스도 예수 안의 영원한 삶입니다.",
        "focusGrammar": "한정 명사 결합(Belirtili İsim Tamlaması / İzâfet) 분석",
        "grammarRule": "소유자 명사에는 '-ın/-in/-un/-ün', 피소유자 명사에는 '-ı/-i/-u/-ü'가 붙어 'A의 B'라는 확정된 결합을 이룹니다.",
        "tokens": [
          {
            "word": "Çünkü",
            "meaning": "왜냐하면 (Because)",
            "grammar": "접속사"
          },
          {
            "word": "günahın",
            "meaning": "죄의 (소유격)",
            "grammar": "günah (명사) + -ın (이자펫 소유격 어미)"
          },
          {
            "word": "ücreti",
            "meaning": "삯, 대가, 품삯",
            "grammar": "ücret (품삯) + -i (이자펫 피소유 표시 어미)"
          },
          {
            "word": "ölüm",
            "meaning": "사망, 죽음 (Death)",
            "grammar": "명사"
          },
          {
            "word": "Tanrı'nın",
            "meaning": "하나님의",
            "grammar": "Tanrı + -nın (소유격 어미)"
          },
          {
            "word": "armağanı",
            "meaning": "선물, 은사 (Gift)",
            "grammar": "armağan (선물) + -ı (소유 표시 어미)"
          },
          {
            "word": "ise",
            "meaning": "~는, 반면에 (Whereas)",
            "grammar": "접속사 / 대비 불변사"
          },
          {
            "word": "Rabbimizde",
            "meaning": "우리 주님 안에서",
            "grammar": "Rab (주) + -imiz (1인칭 복수 소유격) + -de (처격)"
          },
          {
            "word": "sonsuz",
            "meaning": "끝없는, 영원한",
            "grammar": "son (끝) + -suz (부정 접미사: 끝이 없는)"
          },
          {
            "word": "yaşamdır",
            "meaning": "생명입니다",
            "grammar": "yaşam (생명) + -dır (서술격)"
          }
        ],
        "theologyNote": "죄가 노동의 정당한 삯(ücret)으로 사망을 가져온다면, 영생은 우리가 일해서 번 대가가 아니라 하나님이 거저 주시는 값없는 선물(armağan)이라는 놀라운 대조를 보여줍니다.",
        "quotationStatus": "teaching-adaptation"
      }
    ],
    "flipCards": [
      {
        "word": "gömülmek",
        "root": "göm- (묻다)",
        "dailyTitle": "일상 생활에서의 쓰임",
        "dailyDesc": "소파나 침대에 푹 파묻히다, 책이나 일에 푹 빠져 지내다.",
        "dailyExample": "Yorgunluktan koltuğa gömüldü. (피곤해서 소파에 푹 파묻혔다.) / Kitaplara gömüldü. (책에 파묻혀 지냈다.)",
        "theoTitle": "기독교 신학에서의 영적 의미",
        "theoDesc": "그리스도와 함께 옛 자아가 십자가에서 완전히 죽어 영원히 매장됨 (세례의 신학).",
        "theoExample": "기독교 용례의 학습 설명입니다. 출판된 성경 직접 인용이 아니며 관련 본문을 문맥에서 확인하세요."
      },
      {
        "word": "aklanmak",
        "root": "ak (하얗다) -> akla- (희게 하다) -> aklan- (희어지다)",
        "dailyTitle": "일상 생활에서의 쓰임",
        "dailyDesc": "법원에서 억울한 누명을 벗고 무죄 판결을 받다, 결백이 입증되다.",
        "dailyExample": "Sanık tüm suçlamalardan mahkemede aklandı. (피고인은 법정에서 모든 혐의에 대해 무죄를 선고받았다.)",
        "theoTitle": "기독교 신학에서의 영적 의미",
        "theoDesc": "칭의(Justification) - 죄인이 자신의 행위가 아닌 그리스도의 피로 하나님 앞에서 의롭다 인정받음.",
        "theoExample": "기독교 용례의 학습 설명입니다. 출판된 성경 직접 인용이 아니며 관련 본문을 문맥에서 확인하세요."
      },
      {
        "word": "fidye",
        "root": "아랍어 فدية (속전, 대속물)",
        "dailyTitle": "일상 생활에서의 쓰임",
        "dailyDesc": "유괴범이나 인질범에게 포로를 석방시키기 위해 건네는 몸값.",
        "dailyExample": "Fidyeciler rehineler için 1 milyon lira talep etti. (인질범들은 포로들의 몸값으로 100만 리라를 요구했다.)",
        "theoTitle": "기독교 신학에서의 영적 의미",
        "theoDesc": "구속/속량(Ransom) - 죄와 사망의 노예였던 우리를 구원하시기 위해 예수께서 친히 지불하신 자신의 생명값.",
        "theoExample": "기독교 용례의 학습 설명입니다. 출판된 성경 직접 인용이 아니며 관련 본문을 문맥에서 확인하세요."
      },
      {
        "word": "lütuf",
        "root": "아랍어 لطف (친절, 호의)",
        "dailyTitle": "일상 생활에서의 쓰임",
        "dailyDesc": "누군가가 베풀어준 친절, 각별한 배려, 호의.",
        "dailyExample": "Bize büyük bir lütufta bulundunuz, çok teşekkürler. (저희에게 큰 호의를 베풀어 주셨습니다, 정말 감사합니다.)",
        "theoTitle": "기독교 신학에서의 영적 의미",
        "theoDesc": "은혜(Grace) - 받을 자격이 전혀 없는 죄인에게 값없이 거저 주시는 하나님의 주권적 구원의 사랑.",
        "theoExample": "기독교 용례의 학습 설명입니다. 출판된 성경 직접 인용이 아니며 관련 본문을 문맥에서 확인하세요."
      },
      {
        "word": "kurban",
        "root": "아랍어 قربان (가까이 나아감, 희생제)",
        "dailyTitle": "일상 생활에서의 쓰임",
        "dailyDesc": "사고나 범죄, 사기의 불쌍한 희생자, 피해자.",
        "dailyExample": "Trafik kazası kurbanlarına yardım ulaştırıldı. (교통사고 피해자들에게 구호품이 전달되었다.)",
        "theoTitle": "기독교 신학에서의 영적 의미",
        "theoDesc": "희생제물(Sacrificial Lamb) - 인류의 죄를 단번에 짊어지신 흠 없는 유월절 어린 양 예수 그리스도.",
        "theoExample": "기독교 용례의 학습 설명입니다. 출판된 성경 직접 인용이 아니며 관련 본문을 문맥에서 확인하세요."
      }
    ],
    "unluDusmesiQuiz": [
      {
        "id": 1,
        "baseWord": "lütuf",
        "suffix": "+ u",
        "correctAnswer": "lütfu",
        "korean": "은혜를 / 그의 은혜",
        "explanation": "lütuf의 둘째 음절 모음 'u'가 탈락하여 'lütfu'가 됩니다. (lütufu X)"
      },
      {
        "id": 2,
        "baseWord": "akıl",
        "suffix": "+ ınız",
        "correctAnswer": "aklınız",
        "korean": "너희의 지각 / 생각",
        "explanation": "akıl의 둘째 음절 'ı'가 모음 접미사 '-ınız' 앞에서 탈락하여 'aklınız'가 됩니다."
      },
      {
        "id": 3,
        "baseWord": "oğul",
        "suffix": "+ u",
        "correctAnswer": "oğlu",
        "korean": "그의 아들 (Tanrı'nın Oğlu: 하나님의 아들)",
        "explanation": "oğul + -u 결합 시 둘째 모음 'u'가 탈락하여 'oğlu'가 됩니다."
      },
      {
        "id": 4,
        "baseWord": "boyun",
        "suffix": "+ u",
        "correctAnswer": "boynu",
        "korean": "그의 목",
        "explanation": "boyun + -u 결합 시 좁은 모음 'u'가 탈락하여 'boynu'가 됩니다."
      },
      {
        "id": 5,
        "baseWord": "burun",
        "suffix": "+ um",
        "correctAnswer": "burnum",
        "korean": "나의 코",
        "explanation": "burun + -um 결합 시 둘째 음절 'u'가 탈락하여 'burnum'이 됩니다."
      },
      {
        "id": 6,
        "baseWord": "gönül",
        "suffix": "+ üm",
        "correctAnswer": "gönlüm",
        "korean": "나의 마음 / 심령",
        "explanation": "gönül + -üm 결합 시 둘째 음절 'ü'가 탈락하여 'gönlüm'이 됩니다."
      },
      {
        "id": 7,
        "baseWord": "şehir",
        "suffix": "+ e",
        "correctAnswer": "şehre",
        "korean": "도시로 (예루살렘 도시로)",
        "explanation": "şehir + -e 결합 시 둘째 음절 'i'가 탈락하여 'şehre'가 됩니다."
      }
    ]
  },
  "prayer": {
    "steps": [
      {
        "step": 1,
        "name": "Açılış (호칭과 시작)",
        "koreanName": "1단계: 시작 / 하나님 부르기",
        "desc": "아버지께 드리는 한 사람의 기도입니다. “우리”로 바꿀 때는 모든 인칭 표현을 함께 조정하세요.",
        "options": [
          {
            "tr": "Göksel Babam,",
            "ko": "하늘에 계신 나의 아버지,",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Sevgili Babam,",
            "ko": "사랑하는 나의 아버지,",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Ya Rab, Göksel Babam,",
            "ko": "오 주님, 하늘에 계신 나의 아버지,",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Her şeye gücü yeten Yüce Tanrım,",
            "ko": "전능하신 높으신 나의 하나님,",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Lütuf ve merhamet dolu Babam,",
            "ko": "은혜와 자비가 풍성하신 나의 아버지,",
            "addressee": "Father",
            "speaker": "singular"
          }
        ],
        "addressee": "Father",
        "speaker": "singular"
      },
      {
        "step": 2,
        "name": "Övgü (찬양과 경배)",
        "koreanName": "2단계: 찬양 / 하나님의 성품 송축",
        "desc": "아버지께 드리는 한 사람의 기도입니다. “우리”로 바꿀 때는 모든 인칭 표현을 함께 조정하세요.",
        "options": [
          {
            "tr": "Sen her türlü övgüye layıksın.",
            "ko": "주님은 모든 찬양을 받기에 합당하십니다.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Senin sevgin ve sadakatin sonsuzdur.",
            "ko": "주님의 사랑과 신실하심은 영원합니다.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Sen beni günahın zincirlerinden özgür kıldın.",
            "ko": "나를 죄의 사슬에서 자유롭게 하셨습니다.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Göklerin ve yerin yaratıcısı sensin.",
            "ko": "하늘과 땅의 창조주이십니다.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Karanlığı aydınlatan gerçek ışık sensin.",
            "ko": "어둠을 밝히는 참 빛이십니다.",
            "addressee": "Father",
            "speaker": "singular"
          }
        ],
        "addressee": "Father",
        "speaker": "singular"
      },
      {
        "step": 3,
        "name": "Şükran (감사의 고백)",
        "koreanName": "3단계: 감사 / 십자가와 일상의 은혜",
        "desc": "아버지께 드리는 한 사람의 기도입니다. “우리”로 바꿀 때는 모든 인칭 표현을 함께 조정하세요.",
        "options": [
          {
            "tr": "Oğlun İsa Mesih için sana şükrediyorum.",
            "ko": "아들 예수 그리스도로 인해 감사합니다.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Karşılıksız sevgin için teşekkür ediyorum.",
            "ko": "값없는 사랑에 감사합니다.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Bugün bana verdiğin yeni gün ve lütuf için şükrediyorum.",
            "ko": "오늘 주신 새날과 은혜에 감사합니다.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Her an yanımda olup beni terk etmediğin için sana şükrediyorum.",
            "ko": "늘 곁에 계시고 버리지 않으셔서 감사합니다.",
            "addressee": "Father",
            "speaker": "singular"
          }
        ],
        "addressee": "Father",
        "speaker": "singular"
      },
      {
        "step": 4,
        "name": "Tövbe (회개와 정결)",
        "koreanName": "4단계: 회개 / 보혈로 씻음 받기",
        "desc": "아버지께 드리는 한 사람의 기도입니다. “우리”로 바꿀 때는 모든 인칭 표현을 함께 조정하세요.",
        "options": [
          {
            "tr": "Beni bağışla ve bana temiz bir yürek ver.",
            "ko": "나를 용서하시고 깨끗한 마음을 주세요.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "İşlediğim günahlar için tövbe ediyorum.",
            "ko": "내가 지은 죄를 회개합니다.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Yüreğimdeki kırgınlıkları ve öfkeyi senin ellerine bırakıyorum.",
            "ko": "마음의 상처와 분노를 주님의 손에 맡깁니다.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Bana temiz bir yürek ver ve doğru yaşamama yardım et.",
            "ko": "깨끗한 마음을 주시고 바르게 살도록 도와주세요.",
            "addressee": "Father",
            "speaker": "singular"
          }
        ],
        "addressee": "Father",
        "speaker": "singular"
      },
      {
        "step": 5,
        "name": "Dilek & Şefaat (간구와 중보)",
        "koreanName": "5단계: 간구 & 중보 / 이웃과 사역을 위해",
        "desc": "아버지께 드리는 한 사람의 기도입니다. “우리”로 바꿀 때는 모든 인칭 표현을 함께 조정하세요.",
        "options": [
          {
            "tr": "Hasta olan arkadaşıma güç ve esenlik ver.",
            "ko": "아픈 친구에게 힘과 평안을 주세요.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Bana insanları sevgiyle dinleme gücü ver.",
            "ko": "사람들을 사랑으로 듣는 힘을 주세요.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Gerçeği arayan insanlara ışığını göster.",
            "ko": "진리를 찾는 사람들에게 빛을 보여 주세요.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Kutsal Ruh’unla beni doldur ve adımlarımı doğru yolda yönlendir.",
            "ko": "성령으로 채우시고 바른 길로 인도해 주세요.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Ailemi ve iman kardeşlerimi kötülükten ve ayartılmaktan koru.",
            "ko": "가족과 믿음의 형제자매를 악과 시험에서 지켜 주세요.",
            "addressee": "Father",
            "speaker": "singular"
          }
        ],
        "addressee": "Father",
        "speaker": "singular"
      },
      {
        "step": 6,
        "name": "Kapanış (선포와 마침)",
        "koreanName": "6단계: 마침 / 예수님의 이름으로 선포",
        "desc": "아버지께 드리는 한 사람의 기도입니다. “우리”로 바꿀 때는 모든 인칭 표현을 함께 조정하세요.",
        "options": [
          {
            "tr": "İsa Mesih’in adıyla dua ediyorum. Amin.",
            "ko": "예수 그리스도의 이름으로 기도합니다. 아멘.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Bütün yücelik sonsuza dek senin olsun. Amin.",
            "ko": "모든 영광이 영원히 주님의 것입니다. 아멘.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Rabbimiz ve Kurtarıcımız İsa Mesih’in adıyla dua ediyorum. Amin.",
            "ko": "우리 주님과 구원자 예수 그리스도의 이름으로 기도합니다. 아멘.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Mesih İsa’nın adıyla sana güvenerek dua ediyorum. Amin.",
            "ko": "그리스도 예수의 이름으로 주님을 신뢰하며 기도합니다. 아멘.",
            "addressee": "Father",
            "speaker": "singular"
          }
        ],
        "addressee": "Father",
        "speaker": "singular"
      }
    ],
    "presets": [
      {
        "title": "전도 대상자(영혼 구원)를 위한 중보 기도",
        "desc": "복음을 들은 친구나 이웃의 마음 문이 열리고 주님께 돌아오도록 드리는 기도",
        "parts": [
          "Göksel Babam,",
          "Senin sevgin ve sadakatin sonsuzdur.",
          "Oğlun İsa Mesih için sana şükrediyorum.",
          "Beni bağışla ve bana temiz bir yürek ver.",
          "Gerçeği arayan insanlara ışığını göster.",
          "İsa Mesih’in adıyla dua ediyorum. Amin."
        ]
      },
      {
        "title": "아픈 지체를 위한 치유와 회복 기도",
        "desc": "육체와 영혼의 연약함 속에 있는 형제자매를 위한 예수님의 치유 기도",
        "parts": [
          "Göksel Babam,",
          "Sen her türlü övgüye layıksın.",
          "Oğlun İsa Mesih için sana şükrediyorum.",
          "İşlediğim günahlar için tövbe ediyorum.",
          "Hasta olan arkadaşıma güç ve esenlik ver.",
          "İsa Mesih’in adıyla dua ediyorum. Amin."
        ]
      },
      {
        "title": "사역자의 아침 결단 기도",
        "desc": "새로운 하루를 성령 충만과 담대한 복음 증거의 도구로 헌신하는 기도",
        "parts": [
          "Sevgili Babam,",
          "Sen her türlü övgüye layıksın.",
          "Bugün bana verdiğin yeni gün ve lütuf için şükrediyorum.",
          "İşlediğim günahlar için tövbe ediyorum.",
          "Bana insanları sevgiyle dinleme gücü ver.",
          "İsa Mesih’in adıyla dua ediyorum. Amin."
        ]
      }
    ],
    "situationalLibrary": [
      {
        "id": "prayer-healing",
        "category": "치유와 회복",
        "title": "환우 치유와 회복을 위한 기도 (Hastalar İçin Şifa Duası)",
        "tr": "Göksel Babamız, hasta olan kardeşimize güç ve esenlik ver. Ağrısını hafiflet ve iyileşmesine yardım et. Doktorlara bilgelik ver. Ona sevgiyle destek olmamıza yardım et. İsa Mesih’in adıyla dua ediyoruz. Amin.",
        "ko": "하늘에 계신 우리 아버지, 아픈 형제자매에게 힘과 평안을 주세요. 통증을 덜고 회복하도록 도와주세요. 의사들에게 지혜를 주세요. 사랑으로 돕게 해 주세요. 예수님의 이름으로 기도합니다. 아멘."
      },
      {
        "id": "prayer-revival",
        "category": "부흥과 민족",
        "title": "터키 민족과 영적 부흥을 위한 기도 (Türkiye ve Ruhsal Uyanış)",
        "tr": "Göksel Babamız, Türkiye’de yaşayan insanlar için sana dua ediyoruz. Yerel kiliselere cesaret, bilgelik ve sevgi ver. İnsanları dikkatle dinlememize ve Müjde’yi açıkça paylaşmamıza yardım et. İsa Mesih’in adıyla dua ediyoruz. Amin.",
        "ko": "하늘에 계신 우리 아버지, 터키에 사는 사람들을 위해 기도합니다. 지역 교회에 용기, 지혜와 사랑을 주세요. 잘 듣고 복음을 명확히 나누도록 도와주세요. 예수님의 이름으로 기도합니다. 아멘."
      },
      {
        "id": "prayer-newbeliever",
        "category": "새신자 양육",
        "title": "새신자 양육과 믿음의 뿌리를 위한 기도 (Yeni İnanlıların Büyümesi)",
        "tr": "Göksel Babamız, yeni iman eden kardeşimize Kutsal Kitap’ı anlaması için yardım et. Ona güvenilir arkadaşlar ver. Sorularını dürüstçe konuşmamıza yardım et. İsa Mesih’in adıyla dua ediyoruz. Amin.",
        "ko": "하늘에 계신 우리 아버지, 새 신자가 성경을 이해하도록 도와주세요. 신뢰할 친구를 주세요. 질문을 솔직하게 나누도록 도와주세요. 예수님의 이름으로 기도합니다. 아멘."
      },
      {
        "id": "prayer-persecution",
        "category": "고난과 보호",
        "title": "박해와 고난 중의 성도를 위한 보호 기도 (Zulüm ve Zorluk Çeken Kardeşler)",
        "tr": "Göksel Babamız, inancı yüzünden baskı gören kardeşlerimizi koru. Onlara cesaret, sabır ve güvenilir destek ver. Kötülüğe sevgiyle karşılık vermelerine yardım et. İsa Mesih’in adıyla dua ediyoruz. Amin.",
        "ko": "하늘에 계신 우리 아버지, 신앙으로 압박을 받는 형제자매를 지켜 주세요. 용기, 인내와 신뢰할 도움을 주세요. 악에 사랑으로 답하도록 도와주세요. 예수 그리스도의 이름으로 기도합니다. 아멘."
      },
      {
        "id": "prayer-family",
        "category": "가정과 자녀",
        "title": "가정의 평안과 자녀를 위한 축복 기도 (Aile Huzuru ve Çocuklar İçin Bereket)",
        "tr": "Göksel Babamız, ailemize sevgi ve sabır ver. Çocuklarımızın seni tanımasına yardım et. Onlara Rab korkusunu sevgiyle öğretmemiz için bilgelik ver. İsa Mesih’in adıyla dua ediyoruz. Amin.",
        "ko": "하늘에 계신 우리 아버지, 가족에게 사랑과 인내를 주세요. 자녀가 하나님을 알도록 도와주세요. 주님을 경외함을 사랑으로 가르칠 지혜를 주세요. 예수 그리스도의 이름으로 기도합니다. 아멘."
      }
    ]
  },
  "orthography": {
    "rules": [
      {
        "id": 1,
        "title": "종교 고유명사 대문자 원칙",
        "turkishTitle": "Dinî Özel Adlar ve Tanrı İsimleri",
        "category": "대소문자",
        "summary": "신(God), 천사, 종교적 고유 대상의 이름은 대문자로 시작하지만, 일반명사나 비유적 신들은 소문자로 씁니다.",
        "correct": "Allah, Tanrı, Yahve, Cebrail, Mikail, İsa Mesih",
        "incorrect": "allah [x], tanrı [x], cebrail [x]",
        "contrast": "Eski Yunan tanrıları (고대 그리스의 신들 - 일반명사/비유로 쓰일 때는 소문자 'tanrı')",
        "explanation": "유일신이나 성경/쿠란의 고유한 신의 명칭(Allah, Tanrı, Yahve) 및 천사의 고유명(Cebrail, Mikail)은 대문자로 시작합니다. 단, 신화 속 다신교의 신들이나 비유적으로 '음악의 신'처럼 쓸 때는 소문자(tanrı)로 표기합니다.",
        "biblicalRef": "출처: TDK 표기 규정. 학습 예시는 출판된 성경 직접 인용이 아닙니다."
      },
      {
        "id": 2,
        "title": "종교 및 종파 명칭 대문자",
        "turkishTitle": "Din ve Mezhep Adları",
        "category": "대소문자",
        "summary": "종교, 종파, 그리고 그 신자들을 지칭하는 명사는 항상 첫 글자를 대문자로 표기합니다.",
        "correct": "Hristiyan, Müslüman, Musevi, Mesihçiler, Ortodoks, Protestan, Katolik",
        "incorrect": "hristiyan [x], müslüman [x], mesihçiler [x]",
        "contrast": "Hristiyanlık (기독교), Müslümanlık (이슬람) - 파생 명사도 대문자 유지",
        "explanation": "종교명과 신자를 뜻하는 명사(Hristiyan, Müslüman 등)는 대문자로 씁니다. 초대교회 안디옥에서 제자들이 처음으로 '그리스도인'이라 불린 역사적 기록(Elçilerin İşleri 11:26)에서도 'Mesihçiler'로 대문자 표기됩니다.",
        "biblicalRef": "출처: TDK 표기 규정. 학습 예시는 출판된 성경 직접 인용이 아닙니다."
      },
      {
        "id": 3,
        "title": "고유명사 격접미사 아포스트로피 규칙",
        "turkishTitle": "Özel Adlara Gelen Ekler ve Kesme İşareti",
        "category": "아포스트로피",
        "summary": "고유명사에 붙는 격접미사는 아포스트로피(')로 구분하지만, 파생접미사가 붙은 단어와 'Rab'의 형태 결합에는 아포스트로피를 붙이지 않습니다.",
        "correct": "Tanrı'nın [o], İsa'ya [o], Hristiyanlığın [o], Rabbin [o]",
        "incorrect": "Tanrının [x], Hristiyanlık'ın [x], Rab'bin [x]",
        "contrast": "Rabbin lütfu (주님의 은혜 - Rab + -(i)n = Rabbin, 아포스트로피 없음)",
        "explanation": "1) 순수 고유명사 뒤 격조사: Tanrı'nın, İsa'ya, Kudüs'te처럼 아포스트로피(')로 분리합니다.\n2) 파생접미사(-lık 등)가 결합된 명사: Hristiyanlık 뒤에 소유격이 올 때는 아포스트로피 없이 'Hristiyanlığın'으로 연이어 씁니다 (TDK 규칙: 파생접미사 뒤에는 아포스트로피 생략).\n3) 'Rab'의 결합: 주님을 뜻하는 Rab에 2인칭/3인칭/소유격이 붙을 때 전통 및 TDK 철자법상 자음 중복과 함께 아포스트로피 없이 'Rabbin' (Rab'bin [X]), 'Rabbimiz'로 표기합니다.",
        "biblicalRef": "출처: TDK 표기 규정. 학습 예시는 출판된 성경 직접 인용이 아닙니다."
      },
      {
        "id": 4,
        "title": "외래어 어두 자음군(CC) 표기 원칙",
        "turkishTitle": "Batı Kökenli Sözcüklerde Ünsüz Çiftleri",
        "category": "철자법",
        "summary": "서구 기원 외래어의 어두 자음군 사이에는 불필요한 모음(ı, i)을 삽입하지 않습니다.",
        "correct": "Hristiyan [o], gnostik [o], kral [o], tren [o], psikoloji [o]",
        "incorrect": "Hıristiyan [x], gınostik [x], kıral [x], tiren [x]",
        "contrast": "과거 일부 비표준 표기에서 'Hıristiyan'으로 썼으나 TDK 및 현행 TDK 표준어는 반드시 'Hristiyan'입니다.",
        "explanation": "외래어 차용 시 어두 자음군(Hr-, gn-, kr-, tr-) 사이에 발음의 편의를 위해 모음 'ı/i'를 끼워 넣는 것은 오기입니다. 한국어 화자들이 '흐리스티얀'으로 발음하여 'Hıristiyan'으로 적는 실수를 가장 많이 범합니다.",
        "biblicalRef": "출처: TDK 표기 규정. 학습 예시는 출판된 성경 직접 인용이 아닙니다."
      },
      {
        "id": 5,
        "title": "종교적 개념어·영적 영역의 소문자 원칙",
        "turkishTitle": "Dinî ve Manevi Kavramların Küçük Harfle Yazımı",
        "category": "대소문자",
        "summary": "천국, 지옥, 죄, 선행, 천사, 악마 등 일반적인 종교적 개념어는 문두가 아닌 한 소문자로 씁니다.",
        "correct": "cennet, cehennem, günah, sevap, melek, şeytan, vaftiz, dua",
        "incorrect": "Cennet [x], Cehennem [x], Günah [x], Vaftiz [x] (문장 중간)",
        "contrast": "영어(Heaven, Hell)식 대문자 표기와 혼동하기 쉬우나 터키어에서는 소문자가 원칙입니다.",
        "explanation": "성경 터키어 번역(Kutsal Kitap)에서도 'cennet(천국/낙원)', 'cehennem(지옥)', 'günah(죄)'는 일반명사로 분류되어 문장 중간에서는 철저히 소문자로 표기됩니다.",
        "biblicalRef": "출처: TDK 표기 규정. 학습 예시는 출판된 성경 직접 인용이 아닙니다."
      },
      {
        "id": 6,
        "title": "'ev' 결합 장소 합성어 붙여쓰기",
        "turkishTitle": "\"ev\" ile Kurulan Birleşik Sözcükler",
        "category": "띄어쓰기",
        "summary": "cemevi, taziyeevi, aşevi처럼 사전에 등재된 장소 합성어는 붙여 씁니다. 모든 ev 표현이 합성어는 아닙니다.",
        "correct": "cemevi, taziyeevi, aşevi, huzurevi, yayınevi, konukevi",
        "incorrect": "cem evi [x], taziye evi [x], aş evi [x]",
        "contrast": "단, 실제 가옥이나 형태를 수식할 때(ahşap ev, taş ev)는 띄어 씁니다.",
        "explanation": "특수한 사회적·종교적 기능을 수행하는 장소 명칭으로서 '-evi'가 결합된 단어는 합성어로 굳어져 붙여 쓰는 것이 TDK 및 TDK 규정입니다. 터키 현지 추모식이나 공동체 모임 장소를 언급할 때 필수적입니다.",
        "biblicalRef": "출처: TDK 표기 규정. 학습 예시는 출판된 성경 직접 인용이 아닙니다."
      },
      {
        "id": 7,
        "title": "종교·선교 기관 및 단체 명칭",
        "turkishTitle": "Kurum, Kuruluş ve Kurul Adları",
        "category": "기관명",
        "summary": "교회, 선교회, 성서공회 등 공식 단체 및 기관의 명칭은 각 단어의 첫 글자를 대문자로 표기합니다.",
        "correct": "Mesih İnanlılar Topluluğu, Türkiye Kutsal Kitap Şirketi, Kadıköy Protestan Kilisesi, Diriliş Kilisesi",
        "incorrect": "mesih inanlılar topluluğu [x], Türkiye kutsal kitap şirketi [x]",
        "contrast": "기관명 뒤에 붙는 격접미사는 아포스트로피 없이 붙여 씁니다: 'Türkiye Kutsal Kitap Şirketine', 'Kadıköy Protestan Kilisesinde'",
        "explanation": "기관 및 법인, 단체의 고유 명칭은 모든 단어를 대문자로 시작합니다. 중요한 점은 TDK 개정 규칙에 따라 기관·단체명에 붙는 조사에는 아포스트로피(')를 붙이지 않는다는 것입니다.",
        "biblicalRef": "출처: TDK 표기 규정. 학습 예시는 출판된 성경 직접 인용이 아닙니다."
      },
      {
        "id": 8,
        "title": "종교 축제·절기·성일 대문자 표기",
        "turkishTitle": "Dini Bayramlar, Yortular ve Anma Günleri",
        "category": "축제·절기",
        "summary": "성경의 절기, 기독교 및 현지 종교의 공식 축제와 특별한 기념일은 모든 단어의 첫 글자를 대문자로 표기합니다.",
        "correct": "Fısıh Bayramı, Mayasız Ekmek Bayramı, Diriliş Bayramı (Paskalya), Noel Bayramı, Kurban Bayramı, Kadir Gecesi",
        "incorrect": "fısıh bayramı [x], diriliş bayramı [x], kurban bayramı [x]",
        "contrast": "격접미사 결합 시 아포스트로피 사용: Fısıh Bayramı'nda, Noel Bayramı'nı",
        "explanation": "성경에 기록된 이스라엘의 절기(Fısıh, Çardak, Pentikost)와 기독교 공휴일(Noel, Diriliş), 터키 국가 공휴일 및 이슬람 명절은 고유명사이므로 대문자로 표기하고 아포스트로피를 결합합니다.",
        "biblicalRef": "출처: TDK 표기 규정. 학습 예시는 출판된 성경 직접 인용이 아닙니다."
      },
      {
        "id": 9,
        "title": "특정 일자 vs 일반 시기의 월(Ay)·요일(Gün) 표기",
        "turkishTitle": "Belirli Bir Tarih Bildiren Ay ve Gün Adları",
        "category": "날짜 표기",
        "summary": "구체적인 숫자 날짜나 연도가 함께 제시될 때는 대문자, 일반적인 달/계절/요일을 언급할 때는 소문자로 표기합니다.",
        "correct": "25 Haziran Pazar günü [o], 15 Nisan 2024 Pazartesi [o] vs eylülün ikinci haftasında [o], her pazar kiliseye gideriz [o]",
        "incorrect": "25 haziran pazar [x], Eylülün ikinci haftasında [x]",
        "contrast": "날짜 숫자가 있느냐 없느냐가 대소문자를 가르는 핵심 기준입니다.",
        "explanation": "특정한 날짜를 지정하는 숫자와 함께 쓰인 월과 요일은 고유한 사건 시점이 되므로 대문자(25 Haziran Pazar)로 씁니다. 반면 막연한 기간이나 주기적인 요일(her pazar, eylülün ortası)은 일반명사이므로 소문자로 씁니다.",
        "biblicalRef": "출처: TDK 표기 규정. 학습 예시는 출판된 성경 직접 인용이 아닙니다."
      },
      {
        "id": 10,
        "title": "지명에 결합된 2차 지형 명칭 대문자",
        "turkishTitle": "Yer Adlarında İkinci İsimler (Göl, Dağ, Nehir, Deniz)",
        "category": "지명 표기",
        "summary": "산, 호수, 강, 바다 등 2차 지형 명칭이 지명 고유명사에 결합될 때는 첫 글자를 대문자로 표기합니다.",
        "correct": "Celile Gölü, Zeytin Dağı, Siyon Dağı, Şeria Nehri, Akdeniz, Van Gölü",
        "incorrect": "Celile gölü [x], Zeytin dağı [x], Siyon dağı [x]",
        "contrast": "일반 명사로서의 호수나 산: 'Bu bölgede birçok göl ve dağ vardır' (소문자)",
        "explanation": "지리적 고유명사에서 'Göl(호수)', 'Dağ(산)', 'Nehir(강)', 'Deniz(바다)' 등은 독립된 일반명사가 아니라 지명의 불가분한 일부이므로 대문자로 표기합니다. 성경 지명 표기 시 가장 빈번한 감점 포인트입니다.",
        "biblicalRef": "출처: TDK 표기 규정. 학습 예시는 출판된 성경 직접 인용이 아닙니다."
      },
      {
        "id": 11,
        "title": "행정 구역 및 도로·광장 주소 표기",
        "turkishTitle": "Mahalle, Meydan, Bulvar, Cadde, Sokak Adları",
        "category": "주소 표기",
        "summary": "마할레(동/마을), 광장, 대로, 거리 명칭에 붙는 단위 단어는 대문자로 표기합니다.",
        "correct": "Gazi Mahallesi, Zafer Meydanı, İstiklal Caddesi, Karanfil Sokağı",
        "incorrect": "Gazi mahallesi [x], Zafer meydanı [x], İstiklal caddesi [x]",
        "contrast": "단, 일상적 거리/동네 지칭: 'Bizim mahalleye yeni bir fırın açıldı' (소문자)",
        "explanation": "교회 주소나 사역 센터 위치 안내 시 'Mahallesi', 'Meydanı', 'Caddesi', 'Sokağı'의 첫 글자를 반드시 대문자로 적어야 하며, 격조사 결합 시 아포스트로피를 사용합니다 (İstiklal Caddesi'nde).",
        "biblicalRef": "출처: TDK 표기 규정. 학습 예시는 출판된 성경 직접 인용이 아닙니다."
      }
    ],
    "appendix": {
      "title": "숫자 및 특수 기호 표기법 (Sayılar ve Noktalama İşaretleri)",
      "items": [
        {
          "rule": "퍼센트 기호(%) 앞치기 규칙",
          "turkish": "Yüzde İşareti (%)",
          "format": "%25 (읽기: yüzde yirmi beş)",
          "koreanComparison": "한국어는 숫자 뒤에 붙여 '25%'로 표기하지만, 터키어는 숫자 앞에 띄어쓰기 없이 '%25'로 표기합니다.",
          "example": "Katılımcıların %25'i (참가자의 25% - 철자 연습 예시)"
        },
        {
          "rule": "소수점 쉼표(,) 표기 규칙",
          "turkish": "Ondalık Sayılarda Virgül",
          "format": "15,2 및 3,14159",
          "koreanComparison": "한국과 영미권은 소수점에 마침표(15.2)를 쓰지만, 터키어 표준 규격은 반드시 쉼표(15,2)를 사용합니다.",
          "example": "Enflasyon oranı %15,4 olarak açıklandı."
        },
        {
          "rule": "천 단위 구분 점(.) 표기 규칙",
          "turkish": "Basamak Ayırıcı Nokta",
          "format": "4.567 및 1.000.000",
          "koreanComparison": "한국과 영미권은 천 단위 구분에 쉼표(4,567)를 쓰지만, 터키어는 온점(4.567)을 사용합니다.",
          "example": "Toplantıya 1.250 kişi katıldı."
        }
      ]
    },
    "quiz": [
      {
        "id": 1,
        "question": "기독교인을 터키어로 쓸 때 올바른 철자는 'Hıristiyan'이다?",
        "answer": "X",
        "correctText": "Hristiyan",
        "ruleRef": "Rule 4 (외래어 어두 자음군)",
        "explanation": "TDK 및 TDK 공식 표기법상 외래어 어두 자음군(Hr-) 사이에 'ı'를 넣지 않습니다. 올바른 표기는 'Hristiyan'입니다."
      },
      {
        "id": 2,
        "question": "주님의 소유격을 쓸 때 올바른 표기는 'Rab'bin'이다?",
        "answer": "X",
        "correctText": "Rabbin",
        "ruleRef": "Rule 3 (고유명사 아포스트로피)",
        "explanation": "'Rab'에 소유격 및 접미사가 결합할 때는 아포스트로피 없이 'Rabbin'으로 표기합니다. (Rab'bin은 틀린 표기)"
      },
      {
        "id": 3,
        "question": "성경에서 천국을 지칭할 때는 항상 대문자 'Cennet'으로 써야 한다?",
        "answer": "X",
        "correctText": "cennet (문장 중간 소문자)",
        "ruleRef": "Rule 5 (종교적 개념어 소문자)",
        "explanation": "터키어에서는 cennet, cehennem, günah 등 종교적 개념어가 문두가 아닐 경우 일반명사로서 소문자로 표기됩니다 (Luka 23:43)."
      },
      {
        "id": 4,
        "question": "터키어로 25%를 표기할 때는 한국어처럼 '25%'라고 쓴다?",
        "answer": "X",
        "correctText": "%25",
        "ruleRef": "Appendix (퍼센트 기호 앞치기)",
        "explanation": "터키어에서는 퍼센트 기호(%)를 숫자 앞에 공백 없이 붙여 '%25'(yüzde yirmi beş)로 표기합니다."
      },
      {
        "id": 5,
        "question": "Celile Gölü 표기 시 'gölü'는 소문자로 쓴다?",
        "answer": "X",
        "correctText": "Celile Gölü",
        "ruleRef": "Rule 10 (지명 2차 지형 명칭)",
        "explanation": "산, 호수, 강 등 지형 명칭이 지명 고유명사와 결합될 때는 대문자로 시작합니다. 따라서 'Celile Gölü'가 올바른 표기입니다."
      },
      {
        "id": 6,
        "question": "특정 날짜가 없는 'eylülün ikinci haftasında' 문장에서 'eylül'은 소문자로 쓰는 것이 맞다?",
        "answer": "O",
        "correctText": "eylülün (소문자 맞음)",
        "ruleRef": "Rule 9 (날짜 표기 대소문자)",
        "explanation": "특정한 날짜 숫자(예: 15 Eylül)가 없을 때는 월과 요일을 소문자로 표기합니다."
      },
      {
        "id": 7,
        "question": "추모의 집, 조문소를 뜻하는 터키어는 'taziye evi'로 띄어 쓴다?",
        "answer": "X",
        "correctText": "taziyeevi",
        "ruleRef": "Rule 6 ('ev' 합성어 붙여쓰기)",
        "explanation": "cemevi, taziyeevi, aşevi 등 기능을 나타내는 '-evi' 합성어는 항상 붙여 씁니다."
      }
    ],
    "proofreadingGame": [
      {
        "id": 1,
        "title": "문장 1: 복음서의 약속과 주님의 은혜",
        "tokens": [
          {
            "word": "İsa",
            "isError": false
          },
          {
            "word": "öğrencilerine",
            "isError": false
          },
          {
            "word": "Cennet'te",
            "isError": true,
            "correct": "cennette",
            "rule": "Rule 5: 종교 개념어(cennet)는 소문자로 쓰며 고유명사가 아니므로 아포스트로피를 쓰지 않습니다."
          },
          {
            "word": "yer",
            "isError": false
          },
          {
            "word": "hazırlayacağını",
            "isError": false
          },
          {
            "word": "söyledi",
            "isError": false
          },
          {
            "word": "ve",
            "isError": false
          },
          {
            "word": "Rab'bin",
            "isError": true,
            "correct": "Rabbin",
            "rule": "Rule 3: 'Rab'에 소유격이 붙을 때는 아포스트로피 없이 'Rabbin'으로 씁니다."
          },
          {
            "word": "lütfu",
            "isError": false
          },
          {
            "word": "ile",
            "isError": false
          },
          {
            "word": "kurtulacağımızı",
            "isError": false
          },
          {
            "word": "belirtti.",
            "isError": false
          }
        ],
        "translation": "예수께서는 제자들에게 천국에 처소를 예비하겠다고 말씀하셨고 주님의 은혜로 우리가 구원받을 것임을 밝히셨습니다."
      },
      {
        "id": 2,
        "title": "문장 2: 감람산 기도 모임과 성도들의 교제",
        "tokens": [
          {
            "word": "Gelecek",
            "isError": false
          },
          {
            "word": "yıl",
            "isError": false
          },
          {
            "word": "15",
            "isError": false
          },
          {
            "word": "eylül",
            "isError": true,
            "correct": "Eylül",
            "rule": "Rule 9: 특정 날짜 숫자(15)와 결합된 월 명칭은 대문자 'Eylül'로 표기합니다."
          },
          {
            "word": "Pazar",
            "isError": false
          },
          {
            "word": "günü",
            "isError": false
          },
          {
            "word": "Hıristiyan",
            "isError": true,
            "correct": "Hristiyan",
            "rule": "Rule 4: 외래어 어두 자음군 사이에는 'ı'를 넣지 않고 'Hristiyan'으로 씁니다."
          },
          {
            "word": "kardeşlerimizle",
            "isError": false
          },
          {
            "word": "zeytin",
            "isError": true,
            "correct": "Zeytin",
            "rule": "Rule 10: 성경 고유 지형 명칭은 대문자로 시작하여 'Zeytin Dağı'로 씁니다."
          },
          {
            "word": "dağı",
            "isError": true,
            "correct": "Dağı",
            "rule": "Rule 10: 2차 지형 명칭(Dağ)은 대문자로 시작합니다."
          },
          {
            "word": "tepesinde",
            "isError": false
          },
          {
            "word": "dua",
            "isError": false
          },
          {
            "word": "edeceğiz.",
            "isError": false
          }
        ],
        "translation": "내년 9월 15일 일요일에 그리스도인 형제자매들과 함께 감람산 정상에서 기도할 것입니다."
      },
      {
        "id": 3,
        "title": "문장 3: 공동체의 성장과 나눔의 공간",
        "tokens": [
          {
            "word": "Kilisemizin",
            "isError": false
          },
          {
            "word": "cemaati",
            "isError": false
          },
          {
            "word": "25%",
            "isError": true,
            "correct": "%25",
            "rule": "Appendix: 터키어에서 퍼센트 기호는 숫자 앞에 공백 없이 '%25'로 표기합니다."
          },
          {
            "word": "oranında",
            "isError": false
          },
          {
            "word": "büyüdü",
            "isError": false
          },
          {
            "word": "ve",
            "isError": false
          },
          {
            "word": "taziye",
            "isError": true,
            "correct": "taziyeevi",
            "rule": "Rule 6: '-evi' 합성어는 띄어쓰지 않고 'taziyeevi'로 붙여 씁니다."
          },
          {
            "word": "evi",
            "isError": true,
            "correct": "(삭제/결합)",
            "rule": "Rule 6: 앞 단어와 결합되어 'taziyeevi' 한 단어가 됩니다."
          },
          {
            "word": "binasında",
            "isError": false
          },
          {
            "word": "toplandı.",
            "isError": false
          }
        ],
        "translation": "우리 교회의 성도 수는 25% 비율로 성장하였고 새로 개관한 조문소 건물에서 모였습니다."
      }
    ]
  }
};
window.APP_DATA = APP_DATA;
