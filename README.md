# Spiritual Turkish

Turkish reading, conversation and practice for foreign Christian missionaries who already know basic Turkish. English is the default teaching language; Korean is a complete alternative. The site keeps its evangelical Christian purpose while distinguishing Scripture, doctrine, illustrations, personal testimony and historical evidence.

## Implemented curriculum

This release contains **77 lessons**, **499 vocabulary entries**, **82 curated Bible reading assignments**, and the **24 retained practice workshops**.

| Course | Units | Source coverage |
| --- | ---: | --- |
| Bible language and grammar | 12 | Seminar 한국어, 39 pages: editions/references, 66 book names, people/places, church vocabulary, vowel loss, voice, readings, blessings and parables |
| Prayer in Turkish | 33 | Seminar Dua, 43 pages: six stages, requests/wishes, eight situations, faith-response prayers, eleven verse/prayer pairs, ten edited extended models and Psalm references |
| Sharing and listening | 7 | Seminar Müjde, 23 pages: assurance, Scripture, grace, Christmas, suffering, human worth and the wordless-book illustration |
| Religious language in context | 9 | Seminar Din, 33 pages: expressions, rights/restitution, honorifics, attributed belief/practice descriptions, respectful comparison and source literacy |
| Writing clearly | 6 | 종교_용어_표기_규칙, 10 pages: all eleven spelling rules and numeric conventions |
| Practical ministry conversations | 10 | The authored content expansion, with stable `ministry-01`–`ministry-10` IDs |

The ten practical lessons cover clarification, hospitality, permission to pray, illness and support, testimony, the lost sheep, grace, “Son of God,” manuscripts and honest uncertainty, and discipleship. Their full Turkish dialogues, explanations, exercises and independent tasks remain integrated. The proposed 32-lesson pathway is a **roadmap**, not an available course.

[The page-by-page coverage index](SOURCE-COVERAGE.md) maps all 148 source pages to actual learning activities or references. The spelling `-1` PDF is byte-identical and excluded as a duplicate. Original PDFs, third-party illustrations, hymns and video recordings are not redistributed. Extended source prayers are clearly labelled **shortened edited teaching models**, with original reference/timestamp links where supplied. Independent Turkish/Korean specialist review remains pending; this is an editorial implementation, not professional language certification.

## Study flow

- **Home:** continue the last activity, review due words and find the next lesson.
- **Learn:** browse the five source courses and practical conversation track.
- **Words:** search in Turkish, English or Korean; inspect meaning, dictionary headword, authored form/suffix analysis, literal gloss, natural meaning and source context; save words for recall.
- **Bible:** curated passages, context notes, selectable vocabulary, study tasks and linked lessons. Matthew 6:33 and John 13:34–35 are verified inline quotations from **Kutsal Kitap (2001, 2008)**. Other assignments open the named edition externally. English/Korean renderings are original teaching translations. The lost sheep lesson is a simplified paraphrase, not a published quotation.
- **Practice:** pronunciation/listening, seven conversation simulators, culture, Bible grammar, prayer assembly and spelling/proofreading. Prayer assembly keeps six stages and the original Father/I library, with additional compatible Father/we, Jesus/I and Jesus/we models.

Lessons use **Read → Understand → Practise → Use**. Each has objectives, prerequisites, Turkish text with translations, bilingual meaning/grammar/register teaching, vocabulary, reusable patterns, explained guided practice and an independent task with a model and five-category rubric. Answer options rotate deterministically while retaining stable choice identities. Open writing/speaking uses model comparison and self-assessment, not exact-string grading.

Hash routes work with GitHub Pages, browser Back and direct links, for example `#/lesson/ministry-04/understand`. Last lesson sections and drafts survive reload. Phones use five labelled bottom destinations and a native lesson-outline dialog; desktop uses a forest-green sidebar and word-inspector panel. The reference-based palette combines dark green navigation, light apricot accents, a gray-green canvas and cool gray borders. Merriweather and Noto Serif KR remain the locally bundled reading fonts.

## Progress, device backups and future accounts

Opening records a **visit**. Answering/rehearsing records **practice**. Completion requires successful review of all guided exercises, an original response, independent task performance and a self-assessment of 2 in all five categories. Editing the evidence removes completion. These are reported learning activities, not certified mastery or conversion scores.

Saved words preserve the meaning and sentence context encountered. Recall is self-reported: **Remembered** intervals progress through 1, 3, 7, 14 and 30 days; **Again** returns the word tomorrow. Unknown imported notebook entries stay personal notes without invented morphology.

Settings provide JSON **export/import** for device backups. Import validates before mutation and merges, preserving existing records on collision. Reload applies imported state. No data is uploaded.

`LearningStore` separates browser persistence from curriculum data and exposes `get`, `set`, `subscribe`, `export` and `import` for a future private account adapter. Authentication, provider selection, sync and backend deployment are outside this release.

| Storage key | Purpose |
| --- | --- |
| `spiritual_turkish_language` | English/Korean preference |
| `spiritual_turkish_learning_v2` | Existing stable lesson/exercise progress, answers, drafts and rubric |
| `spiritual_turkish_prayers` | Existing saved personal prayers, preserved |
| `spiritual_turkish_notebook` | Original local notebook, retained and copied conservatively into Words |
| `spiritual_turkish_progress` | Older click-era records, migrated to visits only |
| `spiritual_turkish_device_v3` | Saved-word contexts/schedules, reading notes, prayer draft, audio preferences and last section |

Unavailable local storage falls back to session memory and displays its limitation. Clearing browser storage still removes device data; use the backup controls before moving devices.

## Audio and typography

Playback uses **browser Turkish synthetic speech**, with play/stop/speed controls and a global stop action. A Turkish voice must be installed/available; absent voices/APIs produce readable feedback. There are no human/native recordings or automated pronunciation assessments. Optional recognition compares recognised text, handles empty results, and depends on browser/microphone support. Sound effects and default speech speed are configurable.

Merriweather, Noto Serif KR and icons are served locally with bundled licenses. The Korean font contains all 11,172 modern Hangul syllables plus Jamo; Turkish diacritics are present. [Font provenance](vendor/README.md).

## Run and validate

Static HTML/CSS/vanilla JavaScript remains compatible with GitHub Pages. No runtime framework, paid API or backend is added.

```sh
npm ci
npm test
npm run build:css
node scripts/coverage.cjs
node server.js
# http://localhost:3000
```

In a second terminal:

```sh
npx playwright install chromium
npm run test:browser
```

`PLAYWRIGHT_MODULE` can point to a bundled Playwright installation. `SCREENSHOT_DIR` optionally saves desktop/phone review images. CI runs content and browser checks; it does not deploy. [Validation evidence and limits](VALIDATION.md); [editorial changes, source references and quotation ledger](EDITORIAL.md).

## 한국어 안내

기본 터키어를 아는 외국인 선교사를 위한 학습 사이트입니다. 영어가 기본이며 상단 **학습 언어**에서 한국어를 선택하면 메뉴·수업·설명·연습 피드백·조작이 한국어로 바뀝니다. 다섯 출처의 67개 수업과 열 실용 수업, 499개 어휘와 기존 24개 연습을 제공합니다. 32개 수업 계획은 로드맵입니다.

읽기 → 이해 → 연습 → 사용으로 공부하며 단어를 문맥과 함께 저장·복습합니다. 성경의 검증한 세 절은 직접 인용하고 긴 본문은 표시한 판본으로 연결합니다. 열 확장 기도 모델은 편집·축약한 학습 적용이며 원본 녹취가 아닙니다.

방문·연습·완료는 구별됩니다. 독립 과제와 자기 평가를 포함한 수행 보고이며 공인 숙달 인증이나 영적 점수가 아닙니다. 기록·개인 기도·메모는 기기에 저장되고 설정에서 백업할 수 있습니다. 계정 동기화는 향후 단계입니다. 음성은 합성 음성이며 원어민 녹음·발음 평가가 아닙니다. 터키어·한국어 전문가의 독립 검토는 아직 필요합니다.
