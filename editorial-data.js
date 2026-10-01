/* Parallel English teaching for the retained workshops. */
window.LEGACY_KO = JSON.parse(JSON.stringify(APP_DATA));
window.LEGACY_EN = {
  "pronunciation": {
    "oxQuiz": [
      {
        "id": 1,
        "question": "Does bal begin with a voiced consonant made by closing both lips?",
        "answer": "O",
        "word": "Bal",
        "translation": "honey",
        "ipa": "[bɑl]",
        "reason": "Initial b is a voiced bilabial stop: both lips close and release into the vowel. It contrasts with voiceless p.",
        "tip": "Say bal slowly. Notice the lip closure; move directly into a."
      },
      {
        "id": 2,
        "question": "Should dede be pronounced as three syllables: de-de-e?",
        "answer": "X",
        "word": "Dede",
        "translation": "grandfather",
        "ipa": "[deˈde]",
        "reason": "Dede has two syllables, de-de. Its written d is a voiced stop, made with the tongue near the upper teeth/alveolar ridge.",
        "tip": "Say de-de in two beats. Do not add another vowel after the final e."
      },
      {
        "id": 3,
        "question": "Is the initial g in gemi a voiced stop with a fronted articulation before e?",
        "answer": "O",
        "word": "Gemi",
        "translation": "ship",
        "ipa": "[ɟeˈmi]",
        "reason": "The front vowel e accompanies a fronted/palatal pronunciation of g, represented here by [ɟ]. It is still voiced; the spelling alone is not an English sound comparison.",
        "tip": "Listen to ge-mi in two syllables and release the initial consonant into e."
      },
      {
        "id": 4,
        "question": "Should an extra vowel be inserted between s and a in Samsun?",
        "answer": "X",
        "word": "Samsun",
        "translation": "Samsun, a Black Sea city",
        "ipa": "[sɑmˈsun]",
        "reason": "The initial s is a voiceless fricative and moves directly into a. The word divides into Sam-sun, with two syllables.",
        "tip": "Keep the initial airflow continuous, then move into a without an extra syllable."
      },
      {
        "id": 5,
        "question": "Does Trabzon divide into Trab-zon?",
        "answer": "O",
        "word": "Trabzon",
        "translation": "Trabzon, a Black Sea city",
        "ipa": "[tɾɑbˈzon]",
        "reason": "The two vowel nuclei produce two syllables. The initial tr belongs to the first syllable.",
        "tip": "Syllable division: Trab-zon; do not insert vowels into the written consonant cluster."
      }
    ],
    "syllables": [
      {
        "word": "Trabzon",
        "segmented": "Trab-zon",
        "syllableCount": 2,
        "korean": "Trabzon",
        "rule": "Loanword initial tr remains in the first syllable: Trab-zon."
      },
      {
        "word": "Bursa",
        "segmented": "Bur-sa",
        "syllableCount": 2,
        "korean": "Bursa",
        "rule": "Two consonants between vowel nuclei divide across syllables: Bur-sa."
      },
      {
        "word": "başlangıç",
        "segmented": "baş-lan-gıç",
        "syllableCount": 3,
        "korean": "beginning",
        "rule": "baş-lan-gıç is syllable division, not a claim about suffix boundaries."
      },
      {
        "word": "müjde",
        "segmented": "müj-de",
        "syllableCount": 2,
        "korean": "good news / gospel",
        "rule": "müj-de: j closes the first syllable; d begins the second."
      },
      {
        "word": "üçgen",
        "segmented": "üç-gen",
        "syllableCount": 2,
        "korean": "triangle",
        "rule": "üç-gen has two syllables. An illustration does not prove Trinitarian doctrine."
      },
      {
        "word": "kurtarıcı",
        "segmented": "kur-ta-rı-cı",
        "syllableCount": 4,
        "korean": "saviour",
        "rule": "kur-ta-rı-cı has four vowel nuclei and four syllables; morphemes are kurtar- + -ıcı."
      }
    ],
    "sapkaPairs": [
      {
        "without": {
          "word": "hala",
          "meaning": "paternal aunt",
          "ipa": "[hɑˈlɑ]",
          "context": "Halam bizi yemeğe çağırdı."
        },
        "with": {
          "word": "hâlâ",
          "meaning": "still",
          "ipa": "[haːˈlaː]",
          "context": "İsa Mesih hâlâ yaşıyor ve çalışıyor!"
        },
        "explanation": "The circumflex distinguishes meaning and pronunciation: hala / hâlâ."
      },
      {
        "without": {
          "word": "kar",
          "meaning": "snow",
          "ipa": "[kɑɾ]",
          "context": "Dağlara beyaz kar yağdı."
        },
        "with": {
          "word": "kâr",
          "meaning": "profit / gain",
          "ipa": "[kʲaːɾ]",
          "context": "Bu işten kâr elde ettik. — We made a profit from this work."
        },
        "explanation": "In kâr, â signals the relevant consonant quality and vowel length; compare kar."
      },
      {
        "without": {
          "word": "tarihi",
          "meaning": "its history",
          "ipa": "[tɑːɾiˈhi]",
          "context": "Kilisenin tarihi çok derindir."
        },
        "with": {
          "word": "tarihî",
          "meaning": "historical",
          "ipa": "[tɑːɾiˈhiː]",
          "context": "İsa'nın dirilişi tarihî bir gerçektir."
        },
        "explanation": "The relational suffix î distinguishes an adjective from the possessive/accusative i; it is not just “adding length makes a noun an adjective.”"
      },
      {
        "without": {
          "word": "adem",
          "meaning": "non-existence",
          "ipa": "[ɑˈdem]",
          "context": "Adem-i merkeziyet"
        },
        "with": {
          "word": "Âdem",
          "meaning": "Adam (proper name)",
          "ipa": "[aːˈdem]",
          "context": "Âdem hakkında konuşuyoruz. — We are talking about Adam."
        },
        "explanation": "adem is a learned word for non-existence; Âdem is the proper name Adam. Context and capitalization matter."
      }
    ],
    "speechPracticeWords": [
      {
        "turkish": "Müjde",
        "korean": "good news / gospel",
        "category": "Ministry vocabulary"
      },
      {
        "turkish": "Kurtarıcı",
        "korean": "saviour",
        "category": "Ministry vocabulary"
      },
      {
        "turkish": "Çarmıh",
        "korean": "cross",
        "category": "Ministry vocabulary"
      },
      {
        "turkish": "Kutsal Ruh",
        "korean": "Holy Spirit",
        "category": "Ministry vocabulary"
      },
      {
        "turkish": "Diriliş",
        "korean": "resurrection",
        "category": "Ministry vocabulary"
      },
      {
        "turkish": "Lütuf",
        "korean": "grace",
        "category": "Ministry vocabulary"
      },
      {
        "turkish": "İman",
        "korean": "faith",
        "category": "Ministry vocabulary"
      },
      {
        "turkish": "Esenlik",
        "korean": "peace",
        "category": "Ministry vocabulary"
      },
      {
        "turkish": "Bereket",
        "korean": "blessing",
        "category": "Ministry vocabulary"
      },
      {
        "turkish": "Bağışlama",
        "korean": "forgiveness",
        "category": "Ministry vocabulary"
      }
    ]
  },
  "simulator": {
    "scenarios": [
      {
        "id": "scenario-circle",
        "title": "Assurance and the circle illustration",
        "subtitle": "Original dialogue illustration — not Scripture or historical proof",
        "npc": {
          "name": "Ahmet",
          "role": "Fictional conversation partner",
          "avatarBg": "bg-emerald-600",
          "desc": "Ask about this person’s beliefs; nationality and religion do not determine individual responses."
        },
        "context": "A fictional practice conversation. Clarify the actual question and distinguish Christian explanation from illustration. No illustration guarantees a response.",
        "steps": [
          {
            "stepIndex": 1,
            "npcSpeech": "Kurtuluş konusunda bazen kaygılanıyorum. Hristiyanlar bu konuda neye inanıyor?",
            "npcSpeechKo": "I sometimes worry about salvation. What do Christians believe about it?",
            "choices": [
              {
                "id": "c1",
                "text": "Ahmet Bey, kağıda elle kusursuz bir daire çizebilir misiniz? Elimiz ne kadar titrerse titresin, pergel olmadan mükemmel bir daire çizemeyiz, değil mi?",
                "korean": "Mr Ahmet, can you draw a perfect circle by hand? However much our hands tremble, we cannot draw a perfect circle without a compass, can we?",
                "score": 0,
                "feedbackType": "best",
                "feedback": "An illustration is a teaching aid, not proof. Check understanding and accept refusal or further questions.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c2",
                "text": "Neden bu kadar korku içindesiniz? Dinimiz öyle demiyor, hemen İncil okuyun.",
                "korean": "Why are you so afraid? Our religion does not say that; read the New Testament immediately.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "Review understanding, factual accuracy and appropriateness. Clarification works better than pressure or insult.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c3",
                "text": "Bazen benim de sorularım oluyor. Hristiyan umudunu birlikte konuşabiliriz.",
                "korean": "I also have questions sometimes. We can talk about Christian hope together.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "An illustration is a teaching aid, not proof. Check understanding and accept refusal or further questions.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              }
            ]
          },
          {
            "stepIndex": 2,
            "npcSpeech": "Doğru, elle çizilen daire her zaman biraz yamuk olur. Pergel gibi kusursuz bir alet gerekir. Ama bu cennetle nasıl bağlanıyor?",
            "npcSpeechKo": "True, a hand-drawn circle is always a little crooked. It needs a perfect tool like a compass. How does that connect to heaven?",
            "choices": [
              {
                "id": "c1",
                "text": "Bizim iyi amellerimiz elle çizilmiş o yamuk daire gibidir. Tanrı ise kusursuz kutsallık ister. İsa Mesih bizim yerimize kusursuz bir yaşam yaşadı ve bedeli ödedi. Biz O'na iman ettiğimizde, Tanrı bizi İsa'nın mükemmel dairesi içinde görür!",
                "korean": "Our good deeds are like that crooked circle. God desires perfect holiness. Jesus Christ lived a perfect life in our place and paid the price. When we trust him, in this illustration God sees us within Jesus’ perfect circle.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "An illustration is a teaching aid, not proof. Check understanding and accept refusal or further questions.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c2",
                "text": "İsa pergeldir, biz de kağıdız. Anladınız mı?",
                "korean": "Jesus is the compass and we are the paper. Did you understand?",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "Review understanding, factual accuracy and appropriateness. Clarification works better than pressure or insult.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c3",
                "text": "Sadece inanın, gerisini Tanrı halleder.",
                "korean": "Just believe; God will handle the rest.",
                "score": 0,
                "feedbackType": "neutral",
                "feedback": "This may be useful in context. Clarify the question and research anything you do not know.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              }
            ]
          },
          {
            "stepIndex": 3,
            "npcSpeech": "Şimdi devam etmek istemiyorum. Belki başka bir gün.",
            "npcSpeechKo": "I do not want to continue now. Perhaps another day.",
            "choices": [
              {
                "id": "respect-refusal",
                "text": "Tabii, anlıyorum. Konuşmak isterseniz sizi dinleyebilirim.",
                "korean": "Of course, I understand. If you want to talk, I can listen.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "This accepts refusal and leaves room for ordinary care. Refusal is not a failed conversion outcome.",
                "theologyTip": "Interaction: respond to the actual answer."
              },
              {
                "id": "clarify-followup",
                "text": "Başka bir gün konuşmamı ister misiniz, yoksa bu konuyu kapatalım mı?",
                "korean": "Would you like to talk another day, or shall we leave this topic?",
                "score": 0,
                "feedbackType": "best",
                "feedback": "Clarify the scope of refusal if the partner is comfortable responding. Accept the answer without insisting.",
                "theologyTip": "Understanding and appropriateness matter."
              },
              {
                "id": "insist",
                "text": "Hayır, şimdi devam etmeliyiz.",
                "korean": "No, we must continue now.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "This ignores the refusal. Practise accepting it.",
                "theologyTip": "Conversation requires willing participation."
              }
            ]
          }
        ]
      },
      {
        "id": "scenario-1",
        "title": "Human value and the banknote illustration",
        "subtitle": "Original dialogue illustration — not Scripture or historical proof",
        "npc": {
          "name": "Mehmet",
          "role": "Fictional conversation partner",
          "avatarBg": "bg-amber-600",
          "desc": "Ask about this person’s beliefs; nationality and religion do not determine individual responses."
        },
        "context": "A fictional practice conversation. Clarify the actual question and distinguish Christian explanation from illustration. No illustration guarantees a response.",
        "steps": [
          {
            "stepIndex": 1,
            "npcSpeech": "Biz insanlar kusurluyuz tabii. Ama iyi işler yaparsak, oruç tutup sadaka verirsek Allah neden bizi affetmesin ki? Küçük hatalarımızı görmezden gelir.",
            "npcSpeechKo": "We humans are imperfect, of course. If we do good works, fast and give alms, why would God not forgive us? He overlooks our small mistakes.",
            "choices": [
              {
                "id": "c1",
                "text": "Hayır, yanılıyorsun! Senin yaptığın iyi işler Tanrı'nın gözünde paçavra gibidir. Hemen tövbe etmelisin!",
                "korean": "No, you are wrong! Your good works are like rags in God’s sight. You must repent immediately!",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "Review understanding, factual accuracy and appropriateness. Clarification works better than pressure or insult.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c2",
                "text": "Mehmet, sana bir şey göstereyim. Bak, bu 200 liralık banknotu yere atıp ezsem ve buruştursam, değeri düşer mi?",
                "korean": "Mehmet, let me show you something. If I throw this 200-lira banknote on the ground, crush and crumple it, does its value decrease?",
                "score": 0,
                "feedbackType": "best",
                "feedback": "An illustration is a teaching aid, not proof. Check understanding and accept refusal or further questions.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c3",
                "text": "Evet, Tanrı çok merhametlidir. Her din temelde aynı iyiliği öğretir zaten.",
                "korean": "Yes, God is merciful. Every religion basically teaches the same goodness.",
                "score": 0,
                "feedbackType": "neutral",
                "feedback": "This may be useful in context. Clarify the question and research anything you do not know.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              }
            ]
          },
          {
            "stepIndex": 2,
            "npcSpeech": "Düşmez tabii, hâlâ 200 liradır. Sonuçta devletin garantisi var üzerinde. Ama bunun günahla ne alakası var?",
            "npcSpeechKo": "Of course not; it is still 200 lira. It has the state’s guarantee. But what does that have to do with sin?",
            "choices": [
              {
                "id": "c1",
                "text": "Tam olarak öyle! Biz de günah yüzünden buruşsak bile Tanrı'nın gözünde değerliyiz. Ama buruşuk bir parayla borç ödeyebilirsin, peki bir adamın hayat borcunu neyle ödersin?",
                "korean": "Exactly. Even if sin crumples us, we are valuable in God’s sight. You can pay a debt with crumpled money, but how would you pay a person’s life-debt?",
                "score": 0,
                "feedbackType": "best",
                "feedback": "An illustration is a teaching aid, not proof. Check understanding and accept refusal or further questions.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c2",
                "text": "Paranın değeri düşmez ama kirlenir. Kirlenen insan cehenneme gider. Bunu bilmelisin.",
                "korean": "The money loses no value but gets dirty. A dirty person goes to hell. You need to know this.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "Review understanding, factual accuracy and appropriateness. Clarification works better than pressure or insult.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c3",
                "text": "Yani herkes günahkârdır. Sen de ben de. O yüzden çok düşünmeye gerek yok.",
                "korean": "Everyone is a sinner, both you and me, so there is no need to think much about it.",
                "score": 0,
                "feedbackType": "neutral",
                "feedback": "This may be useful in context. Clarify the question and research anything you do not know.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              }
            ]
          },
          {
            "stepIndex": 3,
            "npcSpeech": "Hayat borcu mu? Mahkemede hâkim 'Çok iyi insansın, cezanı affettim' diyemez ki. Adalet gereği bedel ödenmeli. Peki bizim günah borcumuzu kim ödeyebilir?",
            "npcSpeechKo": "A life-debt? A judge cannot say “You are a good person, so I forgive your penalty.” Justice requires payment. Who can pay our sin-debt?",
            "choices": [
              {
                "id": "c1",
                "text": "İşte müjde burada! Saf 1 gram altın gibi, hiç günah işlememiş kusursuz bir kurban lazımdı. İsa Mesih günahsız canını çarmıhta fidye olarak ödedi.",
                "korean": "Here is the good news in this illustration: like pure gold, a perfect sinless sacrifice was needed. Jesus Christ gave his sinless life as ransom on the cross.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "An illustration is a teaching aid, not proof. Check understanding and accept refusal or further questions.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c2",
                "text": "Sen kendin ödeyeceksin. Herkes kendi günahını çeker.",
                "korean": "You will pay it yourself. Everyone bears their own sin.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "Review understanding, factual accuracy and appropriateness. Clarification works better than pressure or insult.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c3",
                "text": "Hristiyanlıkta İsa bizim yerimize öldü derler ama bu bana da bazen mantıksız geliyor.",
                "korean": "Christians say Jesus died in our place, but sometimes that seems illogical to me too.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "Review understanding, factual accuracy and appropriateness. Clarification works better than pressure or insult.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              }
            ]
          },
          {
            "stepIndex": 4,
            "npcSpeech": "Şimdi devam etmek istemiyorum. Belki başka bir gün.",
            "npcSpeechKo": "I do not want to continue now. Perhaps another day.",
            "choices": [
              {
                "id": "respect-refusal",
                "text": "Tabii, anlıyorum. Konuşmak isterseniz sizi dinleyebilirim.",
                "korean": "Of course, I understand. If you want to talk, I can listen.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "This accepts refusal and leaves room for ordinary care. Refusal is not a failed conversion outcome.",
                "theologyTip": "Interaction: respond to the actual answer."
              },
              {
                "id": "clarify-followup",
                "text": "Başka bir gün konuşmamı ister misiniz, yoksa bu konuyu kapatalım mı?",
                "korean": "Would you like to talk another day, or shall we leave this topic?",
                "score": 0,
                "feedbackType": "best",
                "feedback": "Clarify the scope of refusal if the partner is comfortable responding. Accept the answer without insisting.",
                "theologyTip": "Understanding and appropriateness matter."
              },
              {
                "id": "insist",
                "text": "Hayır, şimdi devam etmeliyiz.",
                "korean": "No, we must continue now.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "This ignores the refusal. Practise accepting it.",
                "theologyTip": "Conversation requires willing participation."
              }
            ]
          }
        ]
      },
      {
        "id": "scenario-2",
        "title": "Manuscripts, translations and calendars",
        "subtitle": "Original dialogue illustration — not Scripture or historical proof",
        "npc": {
          "name": "Emre",
          "role": "Fictional conversation partner",
          "avatarBg": "bg-sky-600",
          "desc": "Ask about this person’s beliefs; nationality and religion do not determine individual responses."
        },
        "context": "A fictional conversation partner asks about manuscripts, translations and calendars. Clarify the question first.",
        "steps": [
          {
            "stepIndex": 1,
            "npcSpeech": "İncil değiştirildi mi?",
            "npcSpeechKo": "Has the Gospel/New Testament been changed?",
            "npcSpeechEn": "Has the Gospel/New Testament been changed?",
            "choices": [
              {
                "id": "clarify",
                "text": "Çevirileri mi, eski el yazmalarını mı kastediyorsunuz?",
                "korean": "Do you mean translations or old manuscripts?",
                "english": "Do you mean translations or old manuscripts?",
                "score": 0,
                "feedbackType": "best",
                "feedback": "This clarifies the question. Distinguish translations, text and manuscripts.",
                "feedbackEn": "This clarifies the question. Distinguish translations, text and manuscripts.",
                "theologyTip": "This clarifies the question. Distinguish translations, text and manuscripts.",
                "theologyTipEn": "This clarifies the question. Distinguish translations, text and manuscripts."
              },
              {
                "id": "accounts",
                "text": "Kutsal Kitap’ta dört kanonik Müjde anlatımı var. Yazarlar ve kaynaklar hakkında ayrı ayrı konuşabiliriz.",
                "korean": "There are four canonical Gospel accounts. We can discuss authors and sources separately.",
                "english": "There are four canonical Gospel accounts. We can discuss authors and sources separately.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "Four accounts does not establish that every author was an eyewitness.",
                "feedbackEn": "Four accounts does not establish that every author was an eyewitness.",
                "theologyTip": "Four accounts does not establish that every author was an eyewitness.",
                "theologyTipEn": "Four accounts does not establish that every author was an eyewitness."
              },
              {
                "id": "dismiss",
                "text": "Bunu sormayın.",
                "korean": "Do not ask that.",
                "english": "Do not ask that.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "Ask what the listener wants to know instead of dismissing the question.",
                "feedbackEn": "Ask what the listener wants to know instead of dismissing the question.",
                "theologyTip": "Ask what the listener wants to know instead of dismissing the question.",
                "theologyTipEn": "Ask what the listener wants to know instead of dismissing the question."
              }
            ]
          },
          {
            "stepIndex": 2,
            "npcSpeech": "Eski kopyalar birbirinden farklı değil mi?",
            "npcSpeechKo": "Aren’t the old copies different?",
            "npcSpeechEn": "Aren’t the old copies different?",
            "choices": [
              {
                "id": "variants",
                "text": "El yazmaları arasında farklılıklar var. Belirli bir örneği birlikte inceleyebiliriz.",
                "korean": "Manuscripts contain differences. We can examine a specific example together.",
                "english": "Manuscripts contain differences. We can examine a specific example together.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "Identify a record, its contents and proposed date. Manuscript quantity is not proof of every doctrine.",
                "feedbackEn": "Identify a record, its contents and proposed date. Manuscript quantity is not proof of every doctrine.",
                "theologyTip": "Identify a record, its contents and proposed date. Manuscript quantity is not proof of every doctrine.",
                "theologyTipEn": "Identify a record, its contents and proposed date. Manuscript quantity is not proof of every doctrine."
              },
              {
                "id": "uncertainty",
                "text": "Bu el yazmasının tarihini şu anda bilmiyorum. Araştırıp size döneyim.",
                "korean": "I don’t know this manuscript’s date right now. Let me research it and get back to you.",
                "english": "I don’t know this manuscript’s date right now. Let me research it and get back to you.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "Honesty with a real research follow-up is an appropriate response.",
                "feedbackEn": "Honesty with a real research follow-up is an appropriate response.",
                "theologyTip": "Honesty with a real research follow-up is an appropriate response.",
                "theologyTipEn": "Honesty with a real research follow-up is an appropriate response."
              },
              {
                "id": "identical",
                "text": "Bütün kopyalar tamamen aynıdır.",
                "korean": "All copies are completely identical.",
                "english": "All copies are completely identical.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "This is inaccurate. Variants are why comparison and textual criticism are needed.",
                "feedbackEn": "This is inaccurate. Variants are why comparison and textual criticism are needed.",
                "theologyTip": "This is inaccurate. Variants are why comparison and textual criticism are needed.",
                "theologyTipEn": "This is inaccurate. Variants are why comparison and textual criticism are needed."
              }
            ]
          },
          {
            "stepIndex": 3,
            "npcSpeech": "Milat kelimesi İsa ile ilgili mi?",
            "npcSpeechKo": "Is Milat associated with Jesus?",
            "npcSpeechEn": "Is Milat associated with Jesus?",
            "choices": [
              {
                "id": "calendar",
                "text": "M.Ö. ve M.S. tarihsel olarak İsa’nın doğumuyla ilişkilidir. Bu takvimi kullanmak kişinin Hristiyan olduğunu göstermez. Geleneksel sayımda sıfır yılı yoktur.",
                "korean": "BC/AD has a historical association with Jesus’ birth. Using the calendar does not show personal Christian belief. Traditional numbering has no year zero.",
                "english": "BC/AD has a historical association with Jesus’ birth. Using the calendar does not show personal Christian belief. Traditional numbering has no year zero.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "Distinguish a historical convention from personal belief.",
                "feedbackEn": "Distinguish a historical convention from personal belief.",
                "theologyTip": "Distinguish a historical convention from personal belief.",
                "theologyTipEn": "Distinguish a historical convention from personal belief."
              },
              {
                "id": "ask",
                "text": "Bu kelimeyi hangi bağlamda duydunuz?",
                "korean": "In what context did you hear this word?",
                "english": "In what context did you hear this word?",
                "score": 0,
                "feedbackType": "best",
                "feedback": "Asking for context is also useful.",
                "feedbackEn": "Asking for context is also useful.",
                "theologyTip": "Asking for context is also useful.",
                "theologyTipEn": "Asking for context is also useful."
              },
              {
                "id": "overreach",
                "text": "Bu takvimi kullanan herkes Hristiyandır.",
                "korean": "Everyone who uses this calendar is Christian.",
                "english": "Everyone who uses this calendar is Christian.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "Calendar use is not evidence of personal religious belief.",
                "feedbackEn": "Calendar use is not evidence of personal religious belief.",
                "theologyTip": "Calendar use is not evidence of personal religious belief.",
                "theologyTipEn": "Calendar use is not evidence of personal religious belief."
              }
            ]
          },
          {
            "stepIndex": 4,
            "npcSpeech": "Şimdi devam etmek istemiyorum. Belki başka bir gün.",
            "npcSpeechKo": "I do not want to continue now. Perhaps another day.",
            "choices": [
              {
                "id": "respect-refusal",
                "text": "Tabii, anlıyorum. Konuşmak isterseniz sizi dinleyebilirim.",
                "korean": "Of course, I understand. If you want to talk, I can listen.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "This accepts refusal and leaves room for ordinary care. Refusal is not a failed conversion outcome.",
                "theologyTip": "Interaction: respond to the actual answer."
              },
              {
                "id": "clarify-followup",
                "text": "Başka bir gün konuşmamı ister misiniz, yoksa bu konuyu kapatalım mı?",
                "korean": "Would you like to talk another day, or shall we leave this topic?",
                "score": 0,
                "feedbackType": "best",
                "feedback": "Clarify the scope of refusal if the partner is comfortable responding. Accept the answer without insisting.",
                "theologyTip": "Understanding and appropriateness matter."
              },
              {
                "id": "insist",
                "text": "Hayır, şimdi devam etmeliyiz.",
                "korean": "No, we must continue now.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "This ignores the refusal. Practise accepting it.",
                "theologyTip": "Conversation requires willing participation."
              }
            ]
          }
        ]
      },
      {
        "id": "scenario-3",
        "title": "Good works and the scales illustration",
        "subtitle": "Original dialogue illustration — not Scripture or historical proof",
        "npc": {
          "name": "Fatma Teyze",
          "role": "Fictional conversation partner",
          "avatarBg": "bg-emerald-700",
          "desc": "Ask about this person’s beliefs; nationality and religion do not determine individual responses."
        },
        "context": "A fictional practice conversation. Clarify the actual question and distinguish Christian explanation from illustration. No illustration guarantees a response.",
        "steps": [
          {
            "stepIndex": 1,
            "npcSpeech": "Ah evladım, yaş kemale erdi. Ahirette Mizan terazisi kurulacak. Sevaplarım günahlarımdan ağır basmazsa vay halime! İnşallah Allah acır da cennete girerim ama emin olamıyorum...",
            "npcSpeechKo": "I am getting older. In the afterlife the scales of deeds will be set up. What if my good deeds do not outweigh my sins? I hope God has mercy and lets me into heaven, but I am not sure.",
            "choices": [
              {
                "id": "c1",
                "text": "Bu kaygıyı anlıyorum. Sizin için Mizan ne anlama geliyor? Hristiyanların lütuf hakkında neye inandığını anlatabilirim.",
                "korean": "I understand this concern. What does Mizan mean to you? I can explain what Christians believe about grace.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "An illustration is a teaching aid, not proof. Check understanding and accept refusal or further questions.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c2",
                "text": "O terazi uydurma zaten! Hemen İsa'ya inanmazsan cehenneme gidersin teyze!",
                "korean": "Those scales are made up! If you do not believe in Jesus immediately, you will go to hell!",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "Review understanding, factual accuracy and appropriateness. Clarification works better than pressure or insult.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c3",
                "text": "Çok dua edip fakirlere yardım ederseniz kesin cennete gidersiniz, merak etmeyin.",
                "korean": "If you pray a lot and help poor people, you will certainly go to heaven; don’t worry.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "Review understanding, factual accuracy and appropriateness. Clarification works better than pressure or insult.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              }
            ]
          },
          {
            "stepIndex": 2,
            "npcSpeech": "Evet evladım... Gece yastığa başımı koyunca 'Acaba yetecek mi?' diye içim titriyor. Temiz bir bardak suya bir damla zehir düşse o su içilir mi? Benim kalbimde de kibir var, öfke var...",
            "npcSpeechKo": "At night I wonder if it will be enough. If a drop of poison fell into clean water, could we drink it? There is pride and anger in my heart too.",
            "choices": [
              {
                "id": "c1",
                "text": "Teyzecim, o zehirli suyu kendi gücümüzle temizleyemeyiz. İşte bu yüzden Tanrı bizden imkânsız bir terazi başarısı beklemedi; bize lütfunu ve kesin güvencesini sundu.",
                "korean": "In this illustration we cannot clean the poisoned water by our own power. That is why God offered grace and assurance rather than expecting impossible success at the scales.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "An illustration is a teaching aid, not proof. Check understanding and accept refusal or further questions.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c2",
                "text": "O zaman daha çok su katın ki zehir seyreltilsin.",
                "korean": "Then add more water to dilute the poison.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "Review understanding, factual accuracy and appropriateness. Clarification works better than pressure or insult.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c3",
                "text": "Zehir varsa zaten kurtuluşunuz yok demektir.",
                "korean": "If there is poison, that means there is no salvation for you.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "Review understanding, factual accuracy and appropriateness. Clarification works better than pressure or insult.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              }
            ]
          },
          {
            "stepIndex": 3,
            "npcSpeech": "Nasıl bir güvence bu evladım? Tanrı günahkâr bir insana cenneti nasıl kesin olarak vadeder?",
            "npcSpeechKo": "What sort of assurance? How can God promise heaven to a sinful person?",
            "choices": [
              {
                "id": "c1",
                "text": "Hristiyan inancında kurtuluş, Tanrı’nın sevgisine ve İsa Mesih’in yaşamına, ölümüne ve dirilişine dayanır. Yuhanna 3:16’yı bağlamında birlikte okuyabiliriz.",
                "korean": "In Christian faith salvation rests on God’s love and Jesus Christ’s life, death and resurrection. We can read John 3:16 in context together.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "An illustration is a teaching aid, not proof. Check understanding and accept refusal or further questions.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c2",
                "text": "Sadece kiliseye gelin, her şeyi anlarsınız.",
                "korean": "Just come to church; you will understand everything.",
                "score": 0,
                "feedbackType": "neutral",
                "feedback": "This may be useful in context. Clarify the question and research anything you do not know.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c3",
                "text": "Bunu anlamak zordur, teoloji bilmeniz gerekir.",
                "korean": "This is hard to understand; you need theological knowledge.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "Review understanding, factual accuracy and appropriateness. Clarification works better than pressure or insult.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              }
            ]
          },
          {
            "stepIndex": 4,
            "npcSpeech": "Şimdi devam etmek istemiyorum. Belki başka bir gün.",
            "npcSpeechKo": "I do not want to continue now. Perhaps another day.",
            "choices": [
              {
                "id": "respect-refusal",
                "text": "Tabii, anlıyorum. Konuşmak isterseniz sizi dinleyebilirim.",
                "korean": "Of course, I understand. If you want to talk, I can listen.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "This accepts refusal and leaves room for ordinary care. Refusal is not a failed conversion outcome.",
                "theologyTip": "Interaction: respond to the actual answer."
              },
              {
                "id": "clarify-followup",
                "text": "Başka bir gün konuşmamı ister misiniz, yoksa bu konuyu kapatalım mı?",
                "korean": "Would you like to talk another day, or shall we leave this topic?",
                "score": 0,
                "feedbackType": "best",
                "feedback": "Clarify the scope of refusal if the partner is comfortable responding. Accept the answer without insisting.",
                "theologyTip": "Understanding and appropriateness matter."
              },
              {
                "id": "insist",
                "text": "Hayır, şimdi devam etmeliyiz.",
                "korean": "No, we must continue now.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "This ignores the refusal. Practise accepting it.",
                "theologyTip": "Conversation requires willing participation."
              }
            ]
          }
        ]
      },
      {
        "id": "scenario-noel",
        "title": "Christmas and New Year",
        "subtitle": "Original dialogue illustration — not Scripture or historical proof",
        "npc": {
          "name": "Elif",
          "role": "Fictional conversation partner",
          "avatarBg": "bg-rose-600",
          "desc": "Ask about this person’s beliefs; nationality and religion do not determine individual responses."
        },
        "context": "A fictional practice conversation. Clarify the actual question and distinguish Christian explanation from illustration. No illustration guarantees a response.",
        "steps": [
          {
            "stepIndex": 1,
            "npcSpeech": "Her yerde çam ağaçları ve Noel Baba var. 31 Aralık'ta kutlanan Yılbaşı ile sizin Noel'iniz arasında bir fark var mı ki? Bence ikisi de aynı kış eğlencesi.",
            "npcSpeechKo": "There are trees and Santa Claus everywhere. Is New Year celebrated on December 31 different from your Christmas? I think both are winter entertainment.",
            "choices": [
              {
                "id": "c1",
                "text": "Elif Hanım, ağaçlar ve hediyeler benziyor. Ama bizim geleneğimizde 25 Aralık’ta kutlanan Noel, Tanrı’nın insan olarak aramıza gelişini anar; yalnızca yılın bitişi değildir.",
                "korean": "Ms Elif, the trees and gifts can look similar. But Christmas, celebrated on December 25 in our tradition, commemorates God coming among us in human flesh, rather than the end of a year.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "An illustration is a teaching aid, not proof. Check understanding and accept refusal or further questions.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c2",
                "text": "Tamamen farklı! Noel Hristiyanların bayramıdır, Yılbaşı ise dünyevi bir eğlencedir.",
                "korean": "Completely different! Christmas is a Christian festival; New Year is secular entertainment.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "Review understanding, factual accuracy and appropriateness. Clarification works better than pressure or insult.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c3",
                "text": "Önemli olan eğlenmek, ne fark eder ki?",
                "korean": "Having fun is what matters; what difference does it make?",
                "score": 0,
                "feedbackType": "neutral",
                "feedback": "This may be useful in context. Clarify the question and research anything you do not know.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              }
            ]
          },
          {
            "stepIndex": 2,
            "npcSpeech": "Tanrı'nın insan bedenine girmesi mi? Tanrı yücedir, neden bir bebeğin aciz bedenine girsin ki? Bu bana çok garip geliyor.",
            "npcSpeechKo": "God entering a human body? God is exalted; why would he enter a helpless baby’s body? That seems strange.",
            "choices": [
              {
                "id": "c1",
                "text": "Bir kral düşünün, sarayından halkına emirler yağdırabilir. Ama tebaasını o kadar çok sever ki, onların acısını ve çamurunu tatmak için çoban kılığına girip aralarında yaşar. İşte Noel, Tanrı'nın bize 'Seni anlıyorum ve seviyorum' diyerek sarıldığı gündür.",
                "korean": "Imagine a king who could give orders from his palace but loves his people so much that he lives among them as a shepherd to share their suffering. This is an illustration of Christmas as God’s care, not proof of the incarnation.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "An illustration is a teaching aid, not proof. Check understanding and accept refusal or further questions.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c2",
                "text": "Bunu akılla anlayamazsınız, bu bir sırdır.",
                "korean": "You cannot understand this by reason; it is a mystery.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "Review understanding, factual accuracy and appropriateness. Clarification works better than pressure or insult.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c3",
                "text": "Noel hediyeleri aslında Tanrı'nın bize verdiği sonsuz yaşam armağanıdır.",
                "korean": "Christmas gifts are really the gift of eternal life God gave us.",
                "score": 0,
                "feedbackType": "good",
                "feedback": "An illustration is a teaching aid, not proof. Check understanding and accept refusal or further questions.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              }
            ]
          },
          {
            "stepIndex": 3,
            "npcSpeech": "Şimdi devam etmek istemiyorum. Belki başka bir gün.",
            "npcSpeechKo": "I do not want to continue now. Perhaps another day.",
            "choices": [
              {
                "id": "respect-refusal",
                "text": "Tabii, anlıyorum. Konuşmak isterseniz sizi dinleyebilirim.",
                "korean": "Of course, I understand. If you want to talk, I can listen.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "This accepts refusal and leaves room for ordinary care. Refusal is not a failed conversion outcome.",
                "theologyTip": "Interaction: respond to the actual answer."
              },
              {
                "id": "clarify-followup",
                "text": "Başka bir gün konuşmamı ister misiniz, yoksa bu konuyu kapatalım mı?",
                "korean": "Would you like to talk another day, or shall we leave this topic?",
                "score": 0,
                "feedbackType": "best",
                "feedback": "Clarify the scope of refusal if the partner is comfortable responding. Accept the answer without insisting.",
                "theologyTip": "Understanding and appropriateness matter."
              },
              {
                "id": "insist",
                "text": "Hayır, şimdi devam etmeliyiz.",
                "korean": "No, we must continue now.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "This ignores the refusal. Practise accepting it.",
                "theologyTip": "Conversation requires willing participation."
              }
            ]
          }
        ]
      },
      {
        "id": "scenario-heart",
        "title": "Personal longing and Christian belief",
        "subtitle": "Original dialogue illustration — not Scripture or historical proof",
        "npc": {
          "name": "Caner",
          "role": "Fictional conversation partner",
          "avatarBg": "bg-indigo-600",
          "desc": "Ask about this person’s beliefs; nationality and religion do not determine individual responses."
        },
        "context": "A fictional practice conversation. Clarify the actual question and distinguish Christian explanation from illustration. No illustration guarantees a response.",
        "steps": [
          {
            "stepIndex": 1,
            "npcSpeech": "Her şeyim var gibi görünüyor: iyi bir araba, yüksek maaş, güzel bir ev. Ama akşam eve gelince içimde koca bir boşluk hissediyorum. Sanki bir parçam eksik gibi.",
            "npcSpeechKo": "I seem to have everything: a good car, a high salary and a nice home. But at night I feel a huge emptiness inside, as if part of me were missing.",
            "choices": [
              {
                "id": "c1",
                "text": "Caner, bu duyguyu biraz daha anlatır mısın? Hristiyan inancında Tanrı’yla ilişkimizin hayatımıza anlam verdiğine inanıyoruz.",
                "korean": "Caner, could you tell me more about this feeling? In Christian faith we believe our relationship with God gives meaning to life.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "An illustration is a teaching aid, not proof. Check understanding and accept refusal or further questions.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c2",
                "text": "Daha çok tatile çıkın ya da yeni bir hobi edinin.",
                "korean": "Take more holidays or start a new hobby.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "Review understanding, factual accuracy and appropriateness. Clarification works better than pressure or insult.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c3",
                "text": "Daha fazla çalışıp kariyer yaparsanız geçer.",
                "korean": "If you work harder and develop your career, it will pass.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "Review understanding, factual accuracy and appropriateness. Clarification works better than pressure or insult.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              }
            ]
          },
          {
            "stepIndex": 2,
            "npcSpeech": "Sonsuz bir boşluk mu? Gerçekten de para veya kariyer onu bir iki günlüğüne oyalıyor ama asla tamamen dolduramıyor. Peki bu boşluk nasıl dolar?",
            "npcSpeechKo": "An infinite emptiness? Money or a career distracts me for a day or two, but never fills it completely. What fills it?",
            "choices": [
              {
                "id": "c1",
                "text": "Hristiyanlar, Tanrı’nın bizi kendisiyle ilişki için yarattığına inanır. Bu bir inanç açıklamasıdır; her zorluğun hemen geçeceği anlamına gelmez.",
                "korean": "Christians believe God created us for relationship with himself. This is a faith explanation; it does not mean every difficulty immediately disappears.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "An illustration is a teaching aid, not proof. Check understanding and accept refusal or further questions.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c2",
                "text": "Kiliseye gelip bağış yaparsanız dolar.",
                "korean": "If you come to church and donate, it will be filled.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "Review understanding, factual accuracy and appropriateness. Clarification works better than pressure or insult.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c3",
                "text": "İncil okuyup dua edin, zamanla geçer.",
                "korean": "Read the Bible and pray; it will pass over time.",
                "score": 0,
                "feedbackType": "neutral",
                "feedback": "This may be useful in context. Clarify the question and research anything you do not know.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              }
            ]
          },
          {
            "stepIndex": 3,
            "npcSpeech": "Şimdi devam etmek istemiyorum. Belki başka bir gün.",
            "npcSpeechKo": "I do not want to continue now. Perhaps another day.",
            "choices": [
              {
                "id": "respect-refusal",
                "text": "Tabii, anlıyorum. Konuşmak isterseniz sizi dinleyebilirim.",
                "korean": "Of course, I understand. If you want to talk, I can listen.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "This accepts refusal and leaves room for ordinary care. Refusal is not a failed conversion outcome.",
                "theologyTip": "Interaction: respond to the actual answer."
              },
              {
                "id": "clarify-followup",
                "text": "Başka bir gün konuşmamı ister misiniz, yoksa bu konuyu kapatalım mı?",
                "korean": "Would you like to talk another day, or shall we leave this topic?",
                "score": 0,
                "feedbackType": "best",
                "feedback": "Clarify the scope of refusal if the partner is comfortable responding. Accept the answer without insisting.",
                "theologyTip": "Understanding and appropriateness matter."
              },
              {
                "id": "insist",
                "text": "Hayır, şimdi devam etmeliyiz.",
                "korean": "No, we must continue now.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "This ignores the refusal. Practise accepting it.",
                "theologyTip": "Conversation requires willing participation."
              }
            ]
          }
        ]
      },
      {
        "id": "scenario-4",
        "title": "The wordless book illustration",
        "subtitle": "Original dialogue illustration — not Scripture or historical proof",
        "npc": {
          "name": "Can",
          "role": "Fictional conversation partner",
          "avatarBg": "bg-indigo-600",
          "desc": "Ask about this person’s beliefs; nationality and religion do not determine individual responses."
        },
        "context": "A fictional practice conversation. Clarify the actual question and distinguish Christian explanation from illustration. No illustration guarantees a response.",
        "steps": [
          {
            "stepIndex": 1,
            "npcSpeech": "Bu kitapta hiç yazı yok ki! Sadece altın sarısı, siyah, kırmızı, beyaz ve yeşil sayfalar var. Ne anlatıyor bu renkler?",
            "npcSpeechKo": "There is no writing in this book, only gold, black, red, white and green pages. What do the colors mean?",
            "choices": [
              {
                "id": "c1",
                "text": "İlk sayfa olan Altın Sarısı'ndan başlayalım Can. Bu renk Tanrı'nın görkemini, kutsallığını ve O'nun hazırladığı Cennet'i simgeler. Orada acı, gözyaşı ve kötülük yoktur. Tanrı bizi çok sevdiği için bu cennette O'nunla yaşamamız için yarattı.",
                "korean": "Let us start with gold. In this illustration it symbolizes God’s glory, holiness and the heaven he prepared, with no pain, tears or evil. We believe God created us to live with him because he loves us.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "An illustration is a teaching aid, not proof. Check understanding and accept refusal or further questions.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c2",
                "text": "Siyah sayfaya bak! Sen günahkârsın ve cehenneme gideceksin demek!",
                "korean": "Look at black! It means you are a sinner and will go to hell!",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "Review understanding, factual accuracy and appropriateness. Clarification works better than pressure or insult.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c3",
                "text": "Sadece resim defteri bu, önemli bir şey değil.",
                "korean": "It is just a drawing book; nothing important.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "Review understanding, factual accuracy and appropriateness. Clarification works better than pressure or insult.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              }
            ]
          },
          {
            "stepIndex": 2,
            "npcSpeech": "Vay canına, öyle bir yer harika olurdu! Ama ikinci sayfa simsiyah... Neden böyle karanlık bir renk koymuşlar?",
            "npcSpeechKo": "That would be a wonderful place. But the second page is black; why is the color dark?",
            "choices": [
              {
                "id": "c1",
                "text": "Bu Siyah sayfa 'Günah'ı temsil ediyor Can. Yalan söylemek, kin tutmak, Tanrı'yı unutmak gibi günahlarımız kalbimizi kararttı ve bizi kutsal Tanrı'dan ayırdı. Bu karanlıkla o altın cennete giremeyiz.",
                "korean": "In this illustration the black page represents sin. Lying, bitterness and forgetting God separate us from the holy God. The colors are symbols, not statements about skin color or people’s worth.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "An illustration is a teaching aid, not proof. Check understanding and accept refusal or further questions.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c2",
                "text": "Karanlık geceleri anlatıyor, uykun gelince uyu diye.",
                "korean": "It describes dark nights, telling you to sleep when you are tired.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "Review understanding, factual accuracy and appropriateness. Clarification works better than pressure or insult.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c3",
                "text": "Şeytanın rengi bu, sana bulaşmasın uzak dur.",
                "korean": "It is the devil’s color; stay away so it does not infect you.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "Review understanding, factual accuracy and appropriateness. Clarification works better than pressure or insult.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              }
            ]
          },
          {
            "stepIndex": 3,
            "npcSpeech": "Peki o zaman bu kırmızı ve beyaz ne işe yarıyor? O siyahlıktan nasıl kurtulabiliriz?",
            "npcSpeechKo": "What are red and white for? How can we be freed from the black?",
            "choices": [
              {
                "id": "c1",
                "text": "Kırmızı, İsa Mesih'in çarmıhta döktüğü sevgi kanıdır! O bizim günah cezamızı ödedi. O'na iman ettiğimizde, Beyaz sayfa gibi yüreğimiz kardan beyaz hale gelir, aklanırız. Ve son Yeşil sayfa ise Mesih'le her gün dua ve Söz'le büyüyeceğimiz yeni hayatı simgeler!",
                "korean": "In this illustration red represents Jesus Christ’s blood shed on the cross and the price of sin. White symbolizes justification through faith, and green the new life of growing with Christ through prayer and Scripture.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "An illustration is a teaching aid, not proof. Check understanding and accept refusal or further questions.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c2",
                "text": "Kırmızı tehlike demektir, beyaz da teslim bayrağı. Yeşil de doğayı sev demek.",
                "korean": "Red means danger, white means surrender, and green means love nature.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "Review understanding, factual accuracy and appropriateness. Clarification works better than pressure or insult.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              },
              {
                "id": "c3",
                "text": "Kendin iyi işler yaparak o siyahı beyaza boyamalısın.",
                "korean": "You must paint black white through your good works.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "Review understanding, factual accuracy and appropriateness. Clarification works better than pressure or insult.",
                "theologyTip": "This is Christian explanation or illustration. Read the relevant Scripture in context."
              }
            ]
          },
          {
            "stepIndex": 4,
            "npcSpeech": "Şimdi devam etmek istemiyorum. Belki başka bir gün.",
            "npcSpeechKo": "I do not want to continue now. Perhaps another day.",
            "choices": [
              {
                "id": "respect-refusal",
                "text": "Tabii, anlıyorum. Konuşmak isterseniz sizi dinleyebilirim.",
                "korean": "Of course, I understand. If you want to talk, I can listen.",
                "score": 0,
                "feedbackType": "best",
                "feedback": "This accepts refusal and leaves room for ordinary care. Refusal is not a failed conversion outcome.",
                "theologyTip": "Interaction: respond to the actual answer."
              },
              {
                "id": "clarify-followup",
                "text": "Başka bir gün konuşmamı ister misiniz, yoksa bu konuyu kapatalım mı?",
                "korean": "Would you like to talk another day, or shall we leave this topic?",
                "score": 0,
                "feedbackType": "best",
                "feedback": "Clarify the scope of refusal if the partner is comfortable responding. Accept the answer without insisting.",
                "theologyTip": "Understanding and appropriateness matter."
              },
              {
                "id": "insist",
                "text": "Hayır, şimdi devam etmeliyiz.",
                "korean": "No, we must continue now.",
                "score": 0,
                "feedbackType": "bad",
                "feedback": "This ignores the refusal. Practise accepting it.",
                "theologyTip": "Conversation requires willing participation."
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
        "title": "Kul hakkı — rights and repair",
        "subtitle": "Ask about the person’s view before comparing",
        "badge": "Vocabulary in context",
        "icon": "⚖️",
        "summary": "Diyanet emphasizes repair of harm, reconciliation and repentance, including cases where the injured person cannot be reached. This represents an institution’s teaching, not every Muslim’s personal belief.",
        "details": [
          {
            "heading": "Rights in actual relationships",
            "text": "Hakkını helal et can ask forgiveness for harm. Confirm its meaning in context. Returning property and repairing harm require more than a phrase."
          },
          {
            "heading": "Christian interpretation and literal meaning",
            "text": "In John 19:30, tetelestai means “it is finished/accomplished.” Borç ödendi (“the debt has been paid”) is a theological interpretation, not its direct lexical translation. Discuss forgiveness and responsibility in Matthew 18’s context."
          }
        ],
        "sampleDialogue": {
          "tr": "— Kardeşim, bana hakkını helal et, kalbini kırdıysam affet.\n— Helal olsun kardeşim! Mesih bizi nasıl karşılıksız bağışladıysa, ben de seni öyle bağışlıyorum.",
          "ko": "— Please forgive me if I hurt you.\n— As Christ forgave us freely, I also forgive you."
        }
      },
      {
        "id": "islamic-terms",
        "title": "Sevap, günah, helal and haram",
        "subtitle": "Ask about the person’s view before comparing",
        "badge": "Vocabulary in context",
        "icon": "🧭",
        "summary": "These terms have religious associations and everyday uses. Ask Bu konuda siz ne düşünüyorsunuz? (“What do you think about this?”).",
        "matrix": [
          {
            "term": "Sevap",
            "meaning": "Religious reward",
            "islamView": "TDV describes reward for accepted conduct; do not reduce all conduct to a points game.",
            "christianBridge": "Evangelical Christians explain good works as a response to grace (Ephesians 2:8–10)."
          },
          {
            "term": "Günah",
            "meaning": "Sin",
            "islamView": "Violation of God’s will; not just penalty points.",
            "christianBridge": "Explain Christian sin and forgiveness in Scripture’s context."
          },
          {
            "term": "Helal",
            "meaning": "Permissible",
            "islamView": "Permitted food or conduct in religious law. Check everyday expressions in context.",
            "christianBridge": "Recognizing a word does not establish shared doctrine."
          },
          {
            "term": "Haram",
            "meaning": "Prohibited",
            "islamView": "Prohibited in religious law; individual practices differ.",
            "christianBridge": "Explain your faith without assuming the listener’s practices."
          }
        ]
      },
      {
        "id": "ahiret-journey",
        "title": "Ahiret — afterlife vocabulary",
        "subtitle": "Ask about the person’s view before comparing",
        "badge": "Vocabulary in context",
        "icon": "🌌",
        "summary": "A teaching overview of terms in a Sunni account, informed by TDV’s ÂHİRET article. These eight panels organize vocabulary; they are not a universal chronology or a profile of anyone’s fears.",
        "stages": [
          {
            "num": 1,
            "name": "Dünya",
            "desc": "Present life and responsibility",
            "islamic": "A term used in Sunni tradition. Check context in TDV’s ÂHİRET article and ask the listener’s own view.",
            "christian": "Christians teach hope through Christ’s resurrection and life with God. Comparison is doctrinal explanation, not evidence of the listener’s belief."
          },
          {
            "num": 2,
            "name": "Berzah",
            "desc": "Intermediate state after death",
            "islamic": "A term used in Sunni tradition. Check context in TDV’s ÂHİRET article and ask the listener’s own view.",
            "christian": "Christians teach hope through Christ’s resurrection and life with God. Comparison is doctrinal explanation, not evidence of the listener’s belief."
          },
          {
            "num": 3,
            "name": "Kıyamet",
            "desc": "Resurrection/judgment day",
            "islamic": "A term used in Sunni tradition. Check context in TDV’s ÂHİRET article and ask the listener’s own view.",
            "christian": "Christians teach hope through Christ’s resurrection and life with God. Comparison is doctrinal explanation, not evidence of the listener’s belief."
          },
          {
            "num": 4,
            "name": "Dirilme",
            "desc": "Raising of the dead",
            "islamic": "A term used in Sunni tradition. Check context in TDV’s ÂHİRET article and ask the listener’s own view.",
            "christian": "Christians teach hope through Christ’s resurrection and life with God. Comparison is doctrinal explanation, not evidence of the listener’s belief."
          },
          {
            "num": 5,
            "name": "Mahşer",
            "desc": "Gathering for judgment",
            "islamic": "A term used in Sunni tradition. Check context in TDV’s ÂHİRET article and ask the listener’s own view.",
            "christian": "Christians teach hope through Christ’s resurrection and life with God. Comparison is doctrinal explanation, not evidence of the listener’s belief."
          },
          {
            "num": 6,
            "name": "Mizan",
            "desc": "Weighing of deeds",
            "islamic": "A term used in Sunni tradition. Check context in TDV’s ÂHİRET article and ask the listener’s own view.",
            "christian": "Christians teach hope through Christ’s resurrection and life with God. Comparison is doctrinal explanation, not evidence of the listener’s belief."
          },
          {
            "num": 7,
            "name": "Sırat",
            "desc": "Bridge in traditional accounts",
            "islamic": "A term used in Sunni tradition. Check context in TDV’s ÂHİRET article and ask the listener’s own view.",
            "christian": "Christians teach hope through Christ’s resurrection and life with God. Comparison is doctrinal explanation, not evidence of the listener’s belief."
          },
          {
            "num": 8,
            "name": "Cennet / Cehennem",
            "desc": "Paradise and hell",
            "islamic": "A term used in Sunni tradition. Check context in TDV’s ÂHİRET article and ask the listener’s own view.",
            "christian": "Christians teach hope through Christ’s resurrection and life with God. Comparison is doctrinal explanation, not evidence of the listener’s belief."
          }
        ]
      },
      {
        "id": "fidye-kefaret",
        "title": "Fidye and kefaret",
        "subtitle": "Ask about the person’s view before comparing",
        "badge": "Vocabulary in context",
        "icon": "🕊️",
        "summary": "Fidye and kefaret concern specific obligations in Islamic law. Do not equate their institutions with everyday ransom or Christian redemption.",
        "comparisons": [
          {
            "term": "Fidye",
            "islamicDef": "Compensation in specified cases such as inability to perform fasting; check the actual conditions with the relevant institution.",
            "dailyMeaning": "Ransom paid for a captive.",
            "christianBridge": "Read the Christian use of ransom in Mark 10:45 in context."
          },
          {
            "term": "Kefaret",
            "islamicDef": "Expiation for particular violations, with conditions and alternatives depending on the violation.",
            "dailyMeaning": "Making amends for wrongdoing.",
            "christianBridge": "When discussing 1 John 2:2, similar vocabulary does not establish identical doctrine."
          }
        ]
      }
    ]
  },
  "syntax": {
    "verses": [
      {
        "id": "rom-6-4",
        "reference": "Romans 6:4 · teaching adaptation, not a published quotation",
        "turkish": "Vaftiz yoluyla O'nunla birlikte ölüme gömüldük.",
        "korean": "Through baptism we were buried with him into death.",
        "focusGrammar": "Passive -ül-",
        "grammarRule": "In this example göm- + -ül- is passive. Turkish passive suffixes vary with the stem; -Il and -n patterns cannot be reduced to a single rule for all verbs.",
        "tokens": [
          {
            "word": "Vaftiz",
            "meaning": "Through baptism",
            "grammar": "vaftiz (baptism); no suffix"
          },
          {
            "word": "yoluyla",
            "meaning": "through / by means of",
            "grammar": "yol + u (possessive) + y + la (with/by)"
          },
          {
            "word": "O'nunla",
            "meaning": "with him",
            "grammar": "o + nun (pronominal linking form) + la (with); modern ordinary spelling: onunla"
          },
          {
            "word": "birlikte",
            "meaning": "together",
            "grammar": "Lexical adverb; its use is not an instruction to infer a theological conclusion from a suffix."
          },
          {
            "word": "ölüme",
            "meaning": "into death",
            "grammar": "ölüm + e (dative)"
          },
          {
            "word": "gömüldük",
            "meaning": "we were buried",
            "grammar": "göm + ül (passive) + dü (past) + k (we)"
          }
        ],
        "theologyNote": "Christian interpretation: baptism expresses union with Christ in his death and new life. A passive verb alone does not identify the agent; read the full passage."
      },
      {
        "id": "2cor-5-17",
        "reference": "2 Corinthians 5:17 · teaching adaptation, not a published quotation",
        "turkish": "Bir kimse Mesih'teyse, yeni yaratıktır; eski şeyler geçmiş, her şey yeni olmuştur.",
        "korean": "If anyone is in Christ, they are a new creation; old things have passed, everything has become new.",
        "focusGrammar": "Conditional -yse and derived nouns",
        "grammarRule": "After a noun or locative form, buffer y plus conditional -se/-sa can express “if.” Interpret a clause in its context.",
        "tokens": [
          {
            "word": "Bir kimse",
            "meaning": "anyone",
            "grammar": "Indefinite noun phrase"
          },
          {
            "word": "Mesih'teyse",
            "meaning": "if in Christ",
            "grammar": "Mesih + te (locative) + y + se (conditional)"
          },
          {
            "word": "yeni",
            "meaning": "new",
            "grammar": "Adjective"
          },
          {
            "word": "yaratıktır",
            "meaning": "is a creature/creation",
            "grammar": "yarat + ık (derived noun) + tır (assertive copula)"
          },
          {
            "word": "eski",
            "meaning": "old",
            "grammar": "Adjective"
          },
          {
            "word": "şeyler",
            "meaning": "things",
            "grammar": "şey + ler (plural)"
          },
          {
            "word": "geçmiş",
            "meaning": "has passed",
            "grammar": "geç + miş; resultative/completive here, with evidential uses elsewhere; not simply English past perfect"
          },
          {
            "word": "her şey",
            "meaning": "everything",
            "grammar": "Noun phrase"
          },
          {
            "word": "olmuştur",
            "meaning": "has become",
            "grammar": "ol + muş + tur; result and assertion, not a simple past-perfect equivalent"
          }
        ],
        "theologyNote": "Christian explanation: being in Christ concerns transformed life, not merely a membership label. This is interpretation, not the literal meaning of a case suffix."
      },
      {
        "id": "rom-6-23",
        "reference": "Romans 6:23 · teaching adaptation, not a published quotation",
        "turkish": "Çünkü günahın ücreti ölüm, Tanrı'nın armağanı ise Mesih İsa Rabbimizde sonsuz yaşamdır.",
        "korean": "For the wages of sin are death, but God’s gift is eternal life in Christ Jesus our Lord.",
        "focusGrammar": "Definite genitive–possessive noun phrase",
        "grammarRule": "The owner takes -ın/-in/-un/-ün; the head noun takes -ı/-i/-u/-ü (or -sI after a vowel). Both sides of the definite construction are marked.",
        "tokens": [
          {
            "word": "Çünkü",
            "meaning": "because / for",
            "grammar": "Conjunction"
          },
          {
            "word": "günahın",
            "meaning": "of sin",
            "grammar": "günah + ın (genitive)"
          },
          {
            "word": "ücreti",
            "meaning": "its wage",
            "grammar": "ücret + i (possessive head)"
          },
          {
            "word": "ölüm",
            "meaning": "death",
            "grammar": "Noun"
          },
          {
            "word": "Tanrı'nın",
            "meaning": "God’s",
            "grammar": "Tanrı + nın (genitive)"
          },
          {
            "word": "armağanı",
            "meaning": "his gift",
            "grammar": "armağan + ı (possessive)"
          },
          {
            "word": "ise",
            "meaning": "whereas / but",
            "grammar": "Contrast marker"
          },
          {
            "word": "Rabbimizde",
            "meaning": "in our Lord",
            "grammar": "Rab → Rabb + imiz (our) + de (locative); teaching spelling: Rabbimizde"
          },
          {
            "word": "sonsuz",
            "meaning": "endless / eternal",
            "grammar": "son + suz (without)"
          },
          {
            "word": "yaşamdır",
            "meaning": "is life",
            "grammar": "yaşam + dır (copular assertion)"
          }
        ],
        "theologyNote": "Christian explanation contrasts wages earned and a freely given gift. Distinguish this doctrinal reading from the morphological labels."
      }
    ],
    "flipCards": [
      {
        "word": "gömülmek",
        "root": "be buried / immerse oneself",
        "dailyTitle": "Everyday use",
        "dailyDesc": "To sink into a chair or become absorbed in books/work.",
        "dailyExample": "Yorgunluktan koltuğa gömüldü. — From fatigue, he/she sank into the chair.",
        "theoTitle": "Christian use — doctrinal explanation",
        "theoDesc": "Christian baptism signifies union with Christ’s death; discuss Romans 6:4 in context.",
        "theoExample": "Teaching reference; read the passage in context rather than treating this card as an edition quotation."
      },
      {
        "word": "aklanmak",
        "root": "be cleared / acquitted",
        "dailyTitle": "Everyday use",
        "dailyDesc": "To be cleared of an accusation in court.",
        "dailyExample": "Sanık mahkemede aklandı. — The defendant was acquitted in court.",
        "theoTitle": "Christian use — doctrinal explanation",
        "theoDesc": "Justification: evangelical Christians speak of being counted righteous through Christ rather than earning it.",
        "theoExample": "Teaching reference; read the passage in context rather than treating this card as an edition quotation."
      },
      {
        "word": "fidye",
        "root": "ransom",
        "dailyTitle": "Everyday use",
        "dailyDesc": "Payment demanded for a captive’s release.",
        "dailyExample": "Rehineler için fidye istediler. — They demanded ransom for the hostages.",
        "theoTitle": "Christian use — doctrinal explanation",
        "theoDesc": "Read Mark 10:45 for the Christian use of Christ’s life as ransom.",
        "theoExample": "Teaching reference; read the passage in context rather than treating this card as an edition quotation."
      },
      {
        "word": "lütuf",
        "root": "favour / kindness",
        "dailyTitle": "Everyday use",
        "dailyDesc": "Kindness or special consideration offered to someone.",
        "dailyExample": "Bize büyük bir lütufta bulundunuz. — You showed us great kindness.",
        "theoTitle": "Christian use — doctrinal explanation",
        "theoDesc": "Grace: God’s freely given kindness and salvation, not something earned. Read Ephesians 2:8–10.",
        "theoExample": "Teaching reference; read the passage in context rather than treating this card as an edition quotation."
      },
      {
        "word": "kurban",
        "root": "sacrifice / victim",
        "dailyTitle": "Everyday use",
        "dailyDesc": "A victim of an accident, crime or fraud.",
        "dailyExample": "Kaza kurbanlarına yardım ulaştırıldı. — Aid reached the accident victims.",
        "theoTitle": "Christian use — doctrinal explanation",
        "theoDesc": "Christian explanation calls Jesus the Passover sacrifice; read 1 Corinthians 5:7.",
        "theoExample": "Teaching reference; read the passage in context rather than treating this card as an edition quotation."
      }
    ],
    "unluDusmesiQuiz": [
      {
        "id": 1,
        "baseWord": "lütuf",
        "suffix": "+ u",
        "correctAnswer": "lütfu",
        "korean": "grace (object) / his favour",
        "explanation": "lütuf + u → lütfu. The high vowel in the second syllable is lost before this vowel-initial suffix. Learn which lexical stems undergo this change."
      },
      {
        "id": 2,
        "baseWord": "akıl",
        "suffix": "+ ınız",
        "correctAnswer": "aklınız",
        "korean": "your mind/reason (polite/plural)",
        "explanation": "akıl + ınız → aklınız. The high vowel in the second syllable is lost before this vowel-initial suffix. Learn which lexical stems undergo this change."
      },
      {
        "id": 3,
        "baseWord": "oğul",
        "suffix": "+ u",
        "correctAnswer": "oğlu",
        "korean": "his son",
        "explanation": "oğul + u → oğlu. The high vowel in the second syllable is lost before this vowel-initial suffix. Learn which lexical stems undergo this change."
      },
      {
        "id": 4,
        "baseWord": "boyun",
        "suffix": "+ u",
        "correctAnswer": "boynu",
        "korean": "his neck",
        "explanation": "boyun + u → boynu. The high vowel in the second syllable is lost before this vowel-initial suffix. Learn which lexical stems undergo this change."
      },
      {
        "id": 5,
        "baseWord": "burun",
        "suffix": "+ um",
        "correctAnswer": "burnum",
        "korean": "my nose",
        "explanation": "burun + um → burnum. The high vowel in the second syllable is lost before this vowel-initial suffix. Learn which lexical stems undergo this change."
      },
      {
        "id": 6,
        "baseWord": "gönül",
        "suffix": "+ üm",
        "correctAnswer": "gönlüm",
        "korean": "my heart",
        "explanation": "gönül + üm → gönlüm. The high vowel in the second syllable is lost before this vowel-initial suffix. Learn which lexical stems undergo this change."
      },
      {
        "id": 7,
        "baseWord": "şehir",
        "suffix": "+ e",
        "correctAnswer": "şehre",
        "korean": "to the city",
        "explanation": "şehir + e → şehre. The high vowel in the second syllable is lost before this vowel-initial suffix. Learn which lexical stems undergo this change."
      }
    ]
  },
  "prayer": {
    "steps": [
      {
        "step": 1,
        "name": "Address",
        "koreanName": "Address",
        "desc": "Father-addressed prayer, one speaker. Adjust all personal endings together when using “we.”",
        "options": [
          {
            "tr": "Göksel Babam,",
            "ko": "My heavenly Father,",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Sevgili Babam,",
            "ko": "My dear Father,",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Ya Rab, Göksel Babam,",
            "ko": "O Lord, my heavenly Father,",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Her şeye gücü yeten Yüce Tanrım,",
            "ko": "My almighty, exalted God,",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Lütuf ve merhamet dolu Babam,",
            "ko": "My Father, full of grace and mercy,",
            "addressee": "Father",
            "speaker": "singular"
          }
        ],
        "addressee": "Father",
        "speaker": "singular"
      },
      {
        "step": 2,
        "name": "Praise",
        "koreanName": "Praise",
        "desc": "Father-addressed prayer, one speaker. Adjust all personal endings together when using “we.”",
        "options": [
          {
            "tr": "Sen her türlü övgüye layıksın.",
            "ko": "You are worthy of all praise.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Senin sevgin ve sadakatin sonsuzdur.",
            "ko": "Your love and faithfulness are endless.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Sen beni günahın zincirlerinden özgür kıldın.",
            "ko": "You freed me from the chains of sin.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Göklerin ve yerin yaratıcısı sensin.",
            "ko": "You are the creator of heaven and earth.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Karanlığı aydınlatan gerçek ışık sensin.",
            "ko": "You are the true light that illuminates darkness.",
            "addressee": "Father",
            "speaker": "singular"
          }
        ],
        "addressee": "Father",
        "speaker": "singular"
      },
      {
        "step": 3,
        "name": "Thanksgiving",
        "koreanName": "Thanksgiving",
        "desc": "Father-addressed prayer, one speaker. Adjust all personal endings together when using “we.”",
        "options": [
          {
            "tr": "Oğlun İsa Mesih için sana şükrediyorum.",
            "ko": "I thank you for your Son Jesus Christ.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Karşılıksız sevgin için teşekkür ediyorum.",
            "ko": "I thank you for your freely given love.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Bugün bana verdiğin yeni gün ve lütuf için şükrediyorum.",
            "ko": "I thank you for this new day and grace.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Her an yanımda olup beni terk etmediğin için sana şükrediyorum.",
            "ko": "I thank you for being with me and not abandoning me.",
            "addressee": "Father",
            "speaker": "singular"
          }
        ],
        "addressee": "Father",
        "speaker": "singular"
      },
      {
        "step": 4,
        "name": "Repentance",
        "koreanName": "Repentance",
        "desc": "Father-addressed prayer, one speaker. Adjust all personal endings together when using “we.”",
        "options": [
          {
            "tr": "Beni bağışla ve bana temiz bir yürek ver.",
            "ko": "Forgive me and give me a clean heart.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "İşlediğim günahlar için tövbe ediyorum.",
            "ko": "I repent of the sins I have committed.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Yüreğimdeki kırgınlıkları ve öfkeyi senin ellerine bırakıyorum.",
            "ko": "I place my hurts and anger in your hands.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Bana temiz bir yürek ver ve doğru yaşamama yardım et.",
            "ko": "Give me a clean heart and help me live rightly.",
            "addressee": "Father",
            "speaker": "singular"
          }
        ],
        "addressee": "Father",
        "speaker": "singular"
      },
      {
        "step": 5,
        "name": "Request and intercession",
        "koreanName": "Request and intercession",
        "desc": "Father-addressed prayer, one speaker. Adjust all personal endings together when using “we.”",
        "options": [
          {
            "tr": "Hasta olan arkadaşıma güç ve esenlik ver.",
            "ko": "Give my sick friend strength and peace.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Bana insanları sevgiyle dinleme gücü ver.",
            "ko": "Give me strength to listen to people with love.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Gerçeği arayan insanlara ışığını göster.",
            "ko": "Show your light to people seeking truth.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Kutsal Ruh’unla beni doldur ve adımlarımı doğru yolda yönlendir.",
            "ko": "Fill me with your Holy Spirit and guide my steps on the right path.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Ailemi ve iman kardeşlerimi kötülükten ve ayartılmaktan koru.",
            "ko": "Protect my family and fellow believers from evil and temptation.",
            "addressee": "Father",
            "speaker": "singular"
          }
        ],
        "addressee": "Father",
        "speaker": "singular"
      },
      {
        "step": 6,
        "name": "Closing",
        "koreanName": "Closing",
        "desc": "Father-addressed prayer, one speaker. Adjust all personal endings together when using “we.”",
        "options": [
          {
            "tr": "İsa Mesih’in adıyla dua ediyorum. Amin.",
            "ko": "I pray in the name of Jesus Christ. Amen.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Bütün yücelik sonsuza dek senin olsun. Amin.",
            "ko": "May all glory be yours forever. Amen.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Rabbimiz ve Kurtarıcımız İsa Mesih’in adıyla dua ediyorum. Amin.",
            "ko": "I pray in the name of our Lord and Saviour Jesus Christ. Amen.",
            "addressee": "Father",
            "speaker": "singular"
          },
          {
            "tr": "Mesih İsa’nın adıyla sana güvenerek dua ediyorum. Amin.",
            "ko": "I pray trusting you in the name of Christ Jesus. Amen.",
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
        "title": "Prayer for a friend",
        "desc": "Original Father-addressed teaching prayer. Requests do not guarantee an outcome.",
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
        "title": "Prayer during illness",
        "desc": "Original Father-addressed teaching prayer. Requests do not guarantee an outcome.",
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
        "title": "Prayer before ministry",
        "desc": "Original Father-addressed teaching prayer. Requests do not guarantee an outcome.",
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
        "category": "Original teaching prayer",
        "title": "Prayer during illness",
        "tr": "Göksel Babamız, hasta olan kardeşimize güç ve esenlik ver. Ağrısını hafiflet ve iyileşmesine yardım et. Doktorlara bilgelik ver. Ona sevgiyle destek olmamıza yardım et. İsa Mesih’in adıyla dua ediyoruz. Amin.",
        "ko": "Our heavenly Father, give our sick brother or sister strength and peace. Ease their pain and help them recover. Give doctors wisdom. Help us support them with love. We pray in Jesus Christ’s name. Amen."
      },
      {
        "id": "prayer-revival",
        "category": "Original teaching prayer",
        "title": "Prayer for people in Turkey",
        "tr": "Göksel Babamız, Türkiye’de yaşayan insanlar için sana dua ediyoruz. Yerel kiliselere cesaret, bilgelik ve sevgi ver. İnsanları dikkatle dinlememize ve Müjde’yi açıkça paylaşmamıza yardım et. İsa Mesih’in adıyla dua ediyoruz. Amin.",
        "ko": "Our heavenly Father, we pray for people living in Turkey. Give local churches courage, wisdom and love. Help us listen carefully and share the gospel clearly. We pray in Jesus Christ’s name. Amen."
      },
      {
        "id": "prayer-newbeliever",
        "category": "Original teaching prayer",
        "title": "Prayer for a new believer",
        "tr": "Göksel Babamız, yeni iman eden kardeşimize Kutsal Kitap’ı anlaması için yardım et. Ona güvenilir arkadaşlar ver. Sorularını dürüstçe konuşmamıza yardım et. İsa Mesih’in adıyla dua ediyoruz. Amin.",
        "ko": "Our heavenly Father, help our new believing brother or sister understand the Bible. Give them trustworthy friends. Help us discuss their questions honestly. We pray in Jesus Christ’s name. Amen."
      },
      {
        "id": "prayer-persecution",
        "category": "Original teaching prayer",
        "title": "Prayer under pressure and persecution",
        "tr": "Göksel Babamız, inancı yüzünden baskı gören kardeşlerimizi koru. Onlara cesaret, sabır ve güvenilir destek ver. Kötülüğe sevgiyle karşılık vermelerine yardım et. İsa Mesih’in adıyla dua ediyoruz. Amin.",
        "ko": "Our heavenly Father, protect fellow believers who face pressure because of their faith. Give them courage, patience and trustworthy support. Help them respond to evil with love. We pray in Jesus Christ’s name. Amen."
      },
      {
        "id": "prayer-family",
        "category": "Original teaching prayer",
        "title": "Prayer for family",
        "tr": "Göksel Babamız, ailemize sevgi ve sabır ver. Çocuklarımızın seni tanımasına yardım et. Onlara Rab korkusunu sevgiyle öğretmemiz için bilgelik ver. İsa Mesih’in adıyla dua ediyoruz. Amin.",
        "ko": "Our heavenly Father, give our family love and patience. Help our children know you. Give us wisdom to teach reverence for the Lord with love. We pray in Jesus Christ’s name. Amen."
      }
    ]
  },
  "orthography": {
    "rules": [
      {
        "id": 1,
        "title": "Religious proper names",
        "turkishTitle": "Dinî Özel Adlar ve Tanrı İsimleri",
        "category": "Capitalization",
        "summary": "Capitalize divine and angelic proper names; generic plural gods remains lower-case.",
        "correct": "Allah, Tanrı, Yahve, Cebrail, Mikail, İsa Mesih",
        "incorrect": "allah [x], tanrı [x], cebrail [x]",
        "contrast": "Distinguish a particular name such as Tanrı from generic tanrı.",
        "explanation": "Capitalize divine and angelic proper names; generic plural gods remains lower-case. Distinguish a particular name such as Tanrı from generic tanrı.",
        "biblicalRef": "Source: TDK spelling guide. Teaching examples are not published Bible quotations."
      },
      {
        "id": 2,
        "title": "Names of religions and their adherents",
        "turkishTitle": "Din ve Mezhep Adları",
        "category": "Capitalization",
        "summary": "Use capitals for names such as Hristiyanlık, Hristiyan and Müslüman.",
        "correct": "Hristiyan, Müslüman, Musevi, Mesihçiler, Ortodoks, Protestan, Katolik",
        "incorrect": "hristiyan [x], müslüman [x], mesihçiler [x]",
        "contrast": "Derivations retain capitalization; their case endings do not always use an apostrophe.",
        "explanation": "Use capitals for names such as Hristiyanlık, Hristiyan and Müslüman. Derivations retain capitalization; their case endings do not always use an apostrophe.",
        "biblicalRef": "Source: TDK spelling guide. Teaching examples are not published Bible quotations."
      },
      {
        "id": 3,
        "title": "Apostrophes and possessive forms",
        "turkishTitle": "Özel Adlara Gelen Ekler ve Kesme İşareti",
        "category": "Apostrophes",
        "summary": "Separate case/possessive endings of proper names, but do not separate derivational suffixes and endings after them.",
        "correct": "Tanrı'nın [o], İsa'ya [o], Hristiyanlığın [o], Rabbin [o]",
        "incorrect": "Tanrının [x], Hristiyanlık'ın [x], Rab'bin [x]",
        "contrast": "Tanrı’nın and Hristiyanlığın illustrate different patterns. Rabbin / Rabbimiz include consonant doubling in this teaching usage; compare the actual edition when reading a quotation.",
        "explanation": "Separate case/possessive endings of proper names, but do not separate derivational suffixes and endings after them. Tanrı’nın and Hristiyanlığın illustrate different patterns. Rabbin / Rabbimiz include consonant doubling in this teaching usage; compare the actual edition when reading a quotation.",
        "biblicalRef": "Source: TDK spelling guide. Teaching examples are not published Bible quotations."
      },
      {
        "id": 4,
        "title": "Initial consonant clusters",
        "turkishTitle": "Batı Kökenli Sözcüklerde Ünsüz Çiftleri",
        "category": "Spelling",
        "summary": "Use the standard written forms Hristiyan, kral and tren without inserting a written vowel.",
        "correct": "Hristiyan [o], gnostik [o], kral [o], tren [o], psikoloji [o]",
        "incorrect": "Hıristiyan [x], gınostik [x], kıral [x], tiren [x]",
        "contrast": "Spelling and articulation are distinct; do not confuse a spelling example with a complete pronunciation guide.",
        "explanation": "Use the standard written forms Hristiyan, kral and tren without inserting a written vowel. Spelling and articulation are distinct; do not confuse a spelling example with a complete pronunciation guide.",
        "biblicalRef": "Source: TDK spelling guide. Teaching examples are not published Bible quotations."
      },
      {
        "id": 5,
        "title": "Common religious nouns",
        "turkishTitle": "Dinî ve Manevi Kavramların Küçük Harfle Yazımı",
        "category": "Capitalization",
        "summary": "Use lower-case for common nouns such as cennet, günah and dua inside a sentence.",
        "correct": "cennet, cehennem, günah, sevap, melek, şeytan, vaftiz, dua",
        "incorrect": "Cennet [x], Cehennem [x], Günah [x], Vaftiz [x] ",
        "contrast": "A word beginning a sentence still takes a capital. Context distinguishes common and proper names.",
        "explanation": "Use lower-case for common nouns such as cennet, günah and dua inside a sentence. A word beginning a sentence still takes a capital. Context distinguishes common and proper names.",
        "biblicalRef": "Source: TDK spelling guide. Teaching examples are not published Bible quotations."
      },
      {
        "id": 6,
        "title": "Compounds with ev",
        "turkishTitle": "\"ev\" ile Kurulan Birleşik Sözcükler",
        "category": "Word spacing",
        "summary": "Established place compounds include cemevi, taziyeevi, aşevi and yayınevi.",
        "correct": "cemevi, taziyeevi, aşevi, huzurevi, yayınevi, konukevi",
        "incorrect": "cem evi [x], taziye evi [x], aş evi [x]",
        "contrast": "Descriptive phrases such as ahşap ev remain separate words. Check the dictionary rather than assuming every ev phrase is one word.",
        "explanation": "Established place compounds include cemevi, taziyeevi, aşevi and yayınevi. Descriptive phrases such as ahşap ev remain separate words. Check the dictionary rather than assuming every ev phrase is one word.",
        "biblicalRef": "Source: TDK spelling guide. Teaching examples are not published Bible quotations."
      },
      {
        "id": 7,
        "title": "Institution names",
        "turkishTitle": "Kurum, Kuruluş ve Kurul Adları",
        "category": "Institutions",
        "summary": "Capitalize the significant words in institution names.",
        "correct": "Mesih İnanlılar Topluluğu, Türkiye Kutsal Kitap Şirketi, Kadıköy Protestan Kilisesi, Diriliş Kilisesi",
        "incorrect": "mesih inanlılar topluluğu [x], Türkiye kutsal kitap şirketi [x]",
        "contrast": "TDK does not separate endings of institution/organization names with an apostrophe. Some connecting words remain lower-case.",
        "explanation": "Capitalize the significant words in institution names. TDK does not separate endings of institution/organization names with an apostrophe. Some connecting words remain lower-case.",
        "biblicalRef": "Source: TDK spelling guide. Teaching examples are not published Bible quotations."
      },
      {
        "id": 8,
        "title": "Festivals and special days",
        "turkishTitle": "Dini Bayramlar, Yortular ve Anma Günleri",
        "category": "Festivals",
        "summary": "Capitalize festival names such as Noel Bayramı and Kurban Bayramı.",
        "correct": "Fısıh Bayramı, Mayasız Ekmek Bayramı, Diriliş Bayramı (Paskalya), Noel Bayramı, Kurban Bayramı, Kadir Gecesi",
        "incorrect": "fısıh bayramı [x], diriliş bayramı [x], kurban bayramı [x]",
        "contrast": "Case endings on these proper names use an apostrophe: Noel Bayramı’nı.",
        "explanation": "Capitalize festival names such as Noel Bayramı and Kurban Bayramı. Case endings on these proper names use an apostrophe: Noel Bayramı’nı.",
        "biblicalRef": "Source: TDK spelling guide. Teaching examples are not published Bible quotations."
      },
      {
        "id": 9,
        "title": "Specific dates versus general times",
        "turkishTitle": "Belirli Bir Tarih Bildiren Ay ve Gün Adları",
        "category": "Dates",
        "summary": "Capitalize month/day names in a specified date; use lower-case for general periods.",
        "correct": "25 Haziran Pazar günü [o], 15 Nisan 2024 Pazartesi [o] vs eylülün ikinci haftasında [o], her pazar kiliseye gideriz [o]",
        "incorrect": "25 haziran pazar [x], Eylülün ikinci haftasında [x]",
        "contrast": "15 Nisan 2024 Pazartesi is a dated example; eylülün ikinci haftasında is a general period.",
        "explanation": "Capitalize month/day names in a specified date; use lower-case for general periods. 15 Nisan 2024 Pazartesi is a dated example; eylülün ikinci haftasında is a general period.",
        "biblicalRef": "Source: TDK spelling guide. Teaching examples are not published Bible quotations."
      },
      {
        "id": 10,
        "title": "Geographical names",
        "turkishTitle": "Yer Adlarında İkinci İsimler (Göl, Dağ, Nehir, Deniz)",
        "category": "Places",
        "summary": "Capitalize the geographical unit that belongs to a proper place name: Celile Gölü, Zeytin Dağı.",
        "correct": "Celile Gölü, Zeytin Dağı, Siyon Dağı, Şeria Nehri, Akdeniz, Van Gölü",
        "incorrect": "Celile gölü [x], Zeytin dağı [x], Siyon dağı [x]",
        "contrast": "Generic göl and dağ remain lower-case when no proper place name is intended.",
        "explanation": "Capitalize the geographical unit that belongs to a proper place name: Celile Gölü, Zeytin Dağı. Generic göl and dağ remain lower-case when no proper place name is intended.",
        "biblicalRef": "Source: TDK spelling guide. Teaching examples are not published Bible quotations."
      },
      {
        "id": 11,
        "title": "Addresses",
        "turkishTitle": "Mahalle, Meydan, Bulvar, Cadde, Sokak Adları",
        "category": "Addresses",
        "summary": "Capitalize units in named addresses: Gazi Mahallesi, İstiklal Caddesi.",
        "correct": "Gazi Mahallesi, Zafer Meydanı, İstiklal Caddesi, Karanfil Sokağı",
        "incorrect": "Gazi mahallesi [x], Zafer meydanı [x], İstiklal caddesi [x]",
        "contrast": "Generic mahalle remains lower-case. Named locations take an apostrophe before case endings.",
        "explanation": "Capitalize units in named addresses: Gazi Mahallesi, İstiklal Caddesi. Generic mahalle remains lower-case. Named locations take an apostrophe before case endings.",
        "biblicalRef": "Source: TDK spelling guide. Teaching examples are not published Bible quotations."
      }
    ],
    "appendix": {
      "title": "Numbers and symbols",
      "items": [
        {
          "rule": "Percent sign",
          "turkish": "Yüzde İşareti (%)",
          "format": "%25 — yüzde yirmi beş",
          "koreanComparison": "The Turkish percent sign precedes the number without a space.",
          "example": "Katılımcıların %25’i — 25 percent of participants (invented spelling example)"
        },
        {
          "rule": "Decimal comma",
          "turkish": "Ondalık Sayılarda Virgül",
          "format": "15,2 and 3,14159",
          "koreanComparison": "Turkish uses a comma in decimal numbers.",
          "example": "15,2"
        },
        {
          "rule": "Thousands separator",
          "turkish": "Basamak Ayırıcı Nokta",
          "format": "4.567 and 1.000.000",
          "koreanComparison": "Turkish uses a full stop to group thousands.",
          "example": "1.250"
        }
      ]
    },
    "quiz": [
      {
        "id": 1,
        "question": "Is Hıristiyan the standard written form?",
        "answer": "X",
        "correctText": "Hristiyan",
        "ruleRef": "Rule 4",
        "explanation": "Use Hristiyan without an inserted written vowel."
      },
      {
        "id": 2,
        "question": "Is Rab'bin the teaching spelling for “of the Lord”?",
        "answer": "X",
        "correctText": "Rabbin",
        "ruleRef": "Rule 3",
        "explanation": "This teaching usage is Rabbin, with doubled b and no apostrophe. Read any named published edition verbatim rather than silently editing its spelling."
      },
      {
        "id": 3,
        "question": "Must cennet always be capitalized in the middle of a sentence?",
        "answer": "X",
        "correctText": "cennet ",
        "ruleRef": "Rule 5",
        "explanation": "cennet is a common noun; capitals are required at sentence beginnings."
      },
      {
        "id": 4,
        "question": "Does Turkish write 25 percent as 25%?",
        "answer": "X",
        "correctText": "%25",
        "ruleRef": "Rule appendix",
        "explanation": "Use %25 with the sign before the number."
      },
      {
        "id": 5,
        "question": "Is gölü lower-case in Celile Gölü?",
        "answer": "X",
        "correctText": "Celile Gölü",
        "ruleRef": "Rule 10",
        "explanation": "Gölü is part of the proper place name and is capitalized."
      },
      {
        "id": 6,
        "question": "Is eylül lower-case in eylülün ikinci haftasında?",
        "answer": "O",
        "correctText": "eylülün ",
        "ruleRef": "Rule 9",
        "explanation": "There is no specific date here, so eylül is lower-case."
      },
      {
        "id": 7,
        "question": "Is taziye evi the dictionary spelling of a condolence house?",
        "answer": "X",
        "correctText": "taziyeevi",
        "ruleRef": "Rule 6",
        "explanation": "The established compound is taziyeevi; not every descriptive ev phrase is a compound."
      }
    ],
    "proofreadingGame": [
      {
        "id": 1,
        "title": "Sentence 1: proofreading practice",
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
            "rule": "Use cennette. Check capitalization, apostrophes and established compounds in the TDK guide."
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
            "rule": "Use Rabbin. This teaching usage is Rabbin, with doubled b and no apostrophe. Read any named published edition verbatim rather than silently editing its spelling."
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
        "translation": "Teaching sentence: Jesus told the disciples he would prepare a place and refers to salvation through the Lord’s grace."
      },
      {
        "id": 2,
        "title": "Sentence 2: proofreading practice",
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
            "rule": "Use Eylül. Check capitalization, apostrophes and established compounds in the TDK guide."
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
            "rule": "Use Hristiyan. Use Hristiyan without an inserted written vowel."
          },
          {
            "word": "kardeşlerimizle",
            "isError": false
          },
          {
            "word": "zeytin",
            "isError": true,
            "correct": "Zeytin",
            "rule": "Use Zeytin. Check capitalization, apostrophes and established compounds in the TDK guide."
          },
          {
            "word": "dağı",
            "isError": true,
            "correct": "Dağı",
            "rule": "Use Dağı. Check capitalization, apostrophes and established compounds in the TDK guide."
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
        "translation": "Teaching sentence: we will pray with fellow Christians on the Mount of Olives on a specified date."
      },
      {
        "id": 3,
        "title": "Sentence 3: proofreading practice",
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
            "rule": "Use %25. Use %25 with the sign before the number."
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
            "rule": "Use taziyeevi. Check capitalization, apostrophes and established compounds in the TDK guide."
          },
          {
            "word": "evi",
            "isError": true,
            "correct": "(combine)",
            "rule": "Use a single compound; combine this with the preceding word. Check capitalization, apostrophes and established compounds in the TDK guide."
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
        "translation": "Teaching sentence: the congregation grew by 25 percent and met in a condolence house."
      }
    ]
  }
};
