# Spiritual Turkish (터키어 기독교 사역·전도·기도·발음 학습 플랫폼)

터키 선교 및 기독교 사역자, 현지 복음 전도자, 신학생을 위해 설계된 **반응형 싱글 페이지 대화형 웹 애플리케이션(SPA)**입니다.  
외부 유료 API에 의존하지 않고, 순수 **HTML5 + Tailwind CSS + 바닐라 JavaScript**와 브라우저 내장 **Web Speech API(tr-TR)** 및 **Web Audio API**를 활용하여 모든 기능을 100% 클라이언트 사이드에서 즉시 실행합니다.

---

## 🚀 빠른 시작 가이드 (Quick Start)

### 방법 1. 로컬 개발 서버 실행 (권장)
Node.js가 설치되어 있다면 내장된 `server.js`로 즉시 실행할 수 있습니다:
```bash
cd C:\Users\junso\.gemini\antigravity\scratch\spiritual-turkish-app
node server.js
```
웹 브라우저(Chrome / Edge 권장)에서 **`http://localhost:3000`**에 접속합니다.

### 방법 2. 브라우저에서 바로 열기
별도의 서버 없이도 `index.html` 파일을 더블클릭하거나 브라우저 주소창에 다음 경로를 직접 입력하여 즉시 학습할 수 있습니다:
```
file:///C:/Users/junso/.gemini/antigravity/scratch/spiritual-turkish-app/index.html
```

---

## 🌟 5대 핵심 학습 모듈 상세 안내

### 1. Tab 1: 발음 클리닉 (Pronunciation Lab)
* **인터랙티브 OX 퀴즈 (5문항)**
  - `Bal` vs 한국어 '발' -> [X] (터키어 B는 어두 완전 유성음 [b])
  - `Dede` vs 한국어 '데데' -> [X] (D는 완전 유성음 [d])
  - `Gemi` vs 한국어 '게미' -> [X] (G는 완전 유성음 [ɡ])
  - `Samsun` vs 한국어 '스' -> [X] (날카로운 치조 마찰음 '쓰' [s])
  - `Trabzon` 음절 분절 -> [O] (외래어 자음군 차용 원칙에 따른 Trab-zon 분절)
  - 즉각적인 Web Audio API 음향 효과(정답 차임/오답 부저), 상세 음성학적 해설 및 원어민 TTS 듣기 지원.
* **음절 분절(Heceleme) 인터랙티브 리듬 카드**
  - `Trab-zon`, `Bur-sa`, `baş-lan-gıç`, `müj-de`, `üç-gen`, `kur-ta-rı-cı` 음절 청취 및 분절 규칙 분석.
  - 사용자가 입력한 터키어 단어를 즉석에서 음절 분절하는 **실시간 음절 테스터 도구** 탑재.
* **Şapka (^) 장모음 & 구개음화 의미 비교기**
  - `hala` (고모) vs `hâlâ` (아직, 여전히)
  - `kar` (눈) vs `kâr` (이익/영적 유익)
  - `tarihi` (그의 역사) vs `tarihî` (역사적인)
  - `adem` (부존재) vs `Âdem` (첫 사람 아담)
  - 0.75배속 / 1.0배속 대조 음성 지원.
* **Web Speech API 음성 인식(STT) 발음 코칭 랩**
  - `tr-TR` 음성 인식을 지원하여 마이크로 발음한 터키어를 실시간으로 텍스트화.
  - **레벤슈타인 거리(Levenshtein Distance)** 알고리즘 기반 0~100% 발음 정확도 평가 및 코칭 피드백 제공.

---

### 2. Tab 2: 복음 전도 시뮬레이터 (Evangelism Dialogue Simulator)
비주얼 노벨 / RPG 대화 형태의 4대 핵심 사역 시나리오:
1. **200리라 지폐 비유**: 구겨진 지폐의 가치와 순금 1g의 대가 (그리스도께서 치르신 생명의 값과 대속).
2. **성경 왜곡설 변증**: "İncil değiştirildi mi?" 의혹에 대한 사본학적 증거와 서력기원(Milat / M.S.)의 역사적 의미.
3. **선행 저울 Mizan 비유**: 이슬람의 행위 저울(Mizan)에 대한 두려움 vs 요한복음 3:16의 은혜와 구원의 확신.
4. **글 없는 책 (5 Renk)**: Altın(금색: 천국), Siyah(검은색: 죄), Kırmızı(빨간색: 보혈), Beyaz(흰색: 정결), Yeşil(초록색: 성장)을 활용한 인터랙티브 전도.
* **주요 기능**: 대화 상대 캐릭터 프로필, 터키어 발음 청취(TTS), 3가지 선택지별 피드백, **영적 지혜 지수(Spiritual Wisdom Meter)** 점수화, 신학적 팁 제공.

---

### 3. Tab 3: 문화 & 세계관 브릿지 (Worldview Explorer)
* **Kul Hakkı & Hakkını helal et**: 인간 간의 권리와 사후세계 탕감 문화에서 출발하여 일만 달란트 비유 및 그리스도의 완전한 탕감(Borç ödendi / Tetelestai)으로 연결하는 복음 브릿지.
* **Sevap · Günah · Helal · Haram 4대 매트릭스**: 이슬람의 행위 적립주의와 복음의 은혜(Lütuf) 및 성령의 삶 대조.
* **Ahiret 8단계 여정과 기독교 종말론**: Dünya -> Berzah -> Kıyamet -> Dirilme -> Mahşer -> Mizan -> Sırat -> Cennet/Cehennem 8단계를 인터랙티브하게 탐색하며 성경적 소망과 1:1 비교.
* **Fidye vs Kefaret 종교법 비교**: 피디예(보상금)와 케파레트(속죄 벌칙)를 통해 마가복음 10:45의 대속물(Fidye)과 요한일서 2:2의 화목제물(Kefaret Kurbanı) 예수 그리스도를 조명.

---

### 4. Tab 4: 성경 독해 & 문법 클리닉 (Syntax & Catechism)
* **성경 구절 형태소 분절 클리닉 (Morphological Breakdown)**
  - Romalılar 6:4: `gömüldük` (피동 접미사 `-ül-` 분석 및 세례 신학).
  - 2. Korintliler 5:17: `Mesih'teyse` (처격 `-te` + 조건법 `-yse` 분석).
  - Romalılar 6:23: `günahın ücreti` (한정명사결합 İzâfet `-ın / -i` 분석 및 죄의 삯과 하나님의 선물 대조).
* **어휘 이중 의미 3D 플립 카드 (Theology vs Daily Life)**
  - `gömülmek`, `aklanmak`, `fidye`, `lütuf`, `kurban`
  - 카드 앞면(일상 용례)과 뒷면(기독교 신학 의미)을 3D 애니메이션으로 전환.
* **Ünlü Düşmesi (모음 탈락 법칙) 인터랙티브 퀴즈**
  - `lütuf + u = lütfu`, `akıl + ınız = aklınız` 등 7개 문항에 대한 실시간 채점.
  - 비(非) 터키어 키보드 사용자를 위한 **터키어 특수문자 바 (`ç, ğ, ı, ö, ş, ü, â, î, û`)** 기본 내장.

---

### 5. Tab 5: 6단계 기도문 빌더 (Prayer Workshop)
* **6단계 공식 블록 클릭 조립**
  1. `Açılış` (호칭: Ya Rab, Sevgili Babam, Göksel Babam...)
  2. `Övgü` (찬양: Sen her türlü övgüye layıksın...)
  3. `Şükran` (감사: Çarmıhta kendini feda ettiğin için...)
  4. `Tövbe` (회개: Beni bağışla, kusurlarımı yıka...)
  5. `Dilek & Şefaat` (간구: Bu cana şifa ver, gerçeği arayanlara Işığını göster...)
  6. `Kapanış` (마침: İsa Mesih'in diri adıyla, Amin.)
* **원클릭 추천 기도 템플릿**: 영혼 구원 중보 기도, 치유와 회복 기도, 사역자의 아침 결단 기도.
* **오디오 & 기도 환경**:
  - Web Audio API 기반 **에테리얼 영적 앰비언트 신스 패드(Ambient Synth Pad)** 내장 (외부 mp3 없이 브라우저 자체 화음 발진기 합성).
  - 전체 기도문 원어민 낭독 (Web Speech TTS).
  - 클립보드 원클릭 복사.
  - 브라우저 **LocalStorage 영구 저장/불러오기** 관리.

---

### 6. Tab 6: 종교 용어 표기 규칙 (Dini Yazım Kuralları - MEB 2023)
* **11대 핵심 종교 표기 규정 & 부록 인터랙티브 가이드**
  - Rule 1: 종교 고유명사 대문자 (`Allah, Tanrı, Yahve, Cebrail`) vs 일반명사/비유 소문자 (`Eski Yunan tanrıları`).
  - Rule 2: 종교·종파 명칭 대문자 (`Hristiyan, Müslüman, Mesihçiler` - 행 11:26).
  - Rule 3: 고유명사 격접미사 아포스트로피 규칙 (`Tanrı'nın [o]`, `Hristiyanlığın [o]`, `Rabbin [o]` vs `Rab'bin [x]`).
  - Rule 4: 외래어 자음군 표기 (`Hristiyan [o]` vs `Hıristiyan [x]`, `gnostik`).
  - Rule 5: 종교적 개념어 소문자 원칙 (`cennet, cehennem, günah, sevap` - 눅 23:43, 요일 3:5).
  - Rule 6: 'ev' 합성어 붙여쓰기 (`cemevi, taziyeevi, aşevi`).
  - Rule 7: 종교·선교 기관명 단어별 대문자 (`Mesih İnanlılar Topluluğu`, `Türkiye Kutsal Kitap Şirketi`).
  - Rule 8: 종교 축제·기념일 대문자 (`Fısıh Bayramı` - 출 12:47, `Noel Bayramı`, `Kadir Gecesi`).
  - Rule 9: 날짜 표기 대소문자 (특정일 `25 Haziran Pazar [대문자]` vs 일반 시기 `eylülün ikinci haftasında [소문자]`).
  - Rule 10: 지명 2차 지형 명칭 대문자 (`Celile Gölü, Zeytin Dağı, Siyon Dağı` - 마 4:18).
  - Rule 11: 주소 지명 대문자 (`Gazi Mahallesi, Zafer Meydanı, İstiklal Caddesi`).
  - 부록 (숫자 및 기호 표기법):
    * 퍼센트 기호 앞치기: `%25` (한국어 `25%`와 비교)
    * 소수점 쉼표: `15,2` 및 `3,14159`
    * 천 단위 온점: `4.567` 및 `1.000.000`
* **실전 맞춤법 O/X 및 정답 교정 퀴즈 (7문항)**
  - `Hıristiyan [X] -> Hristiyan`, `Rab'bin [X] -> Rabbin`, `Cennet [X] -> cennet`, `%25`, `Celile Gölü` 등 즉각적인 차임/부저 음향 및 상세 규정 해설.
* **실시간 오탈자 교정기 미니게임 (Proofreading Trainer / Hata Düzeltme Oyunu)**
  - 3개 실전 사역 문장 속 오탈자(`Cennet'te`, `Rab'bin`, `Hıristiyan`, `zeytin dağı`, `25%`, `taziye evi`)를 직접 클릭하여 탐색.
  - 클릭 즉시 올바른 MEB 2023 규정 어휘로 실시간 교정 및 점수(+25점) 획득, 교정 규정 해설 로그 출력.

---

## 🛠️ 기술 스택 및 구조

- **HTML5 & Tailwind CSS**: 현대적 다크 글래스모피즘(Glassmorphism) UI, 시맨틱 웹 및 완벽한 반응형 레이아웃.
- **Vanilla JavaScript (ES6+)**: 모듈화된 객체 지향 구조, zero-dependency.
- **Web Speech API**:
  - `SpeechSynthesisUtterance` (`tr-TR` 음성 합성)
  - `webkitSpeechRecognition` / `SpeechRecognition` (`tr-TR` 음성 인식)
- **Web Audio API**: `AudioContext`, `OscillatorNode`, `BiquadFilterNode`, `GainNode`를 이용한 실시간 합성음 및 앰비언트 사운드스케이프 생성.
- **파일 구성**:
  - `index.html`: 메인 SPA 인터페이스
  - `data.js`: 신학, 언어학, 시나리오, 기도문 핵심 데이터셋
  - `audio.js`: 오디오 이펙트, 앰비언트 신스 및 음성 API 엔진
  - `app.js`: 탭 제어, 퀴즈, 시뮬레이터 분기 엔진, 빌더 로직
  - `styles.css`: 3D 카드 플립, 사운드 웨이브 애니메이션
  - `server.js`: 내장 로컬 웹 서버
