# Spiritual Turkish

Turkish reading, conversation and practice for foreign Christian missionaries who already know basic Turkish. English is the default teaching language; Korean is a complete alternative. The site keeps its evangelical Christian purpose while distinguishing Scripture, doctrine, illustrations, personal testimony and historical evidence.

## Implemented curriculum

This release contains **77 course lessons**, **499 course vocabulary entries**, **82 curated source-reading assignments**, **24 retained practice workshops**, and **60 additional bilingual Bible-study passage lessons** with 316 selected word analyses and 240 explained exercises.

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

- **Study:** open Finding and reading a Bible reference immediately, or resume the last curriculum lesson and section. The course outline is the main navigation.
- **Courses:** choose among six courses grouped into manageable chapters; resume is saved separately for each course.

The secondary Resources menu contains:
- **Words:** search in Turkish, English or Korean; inspect meaning, dictionary headword, authored form/suffix analysis, literal gloss, natural meaning and source context; save words for recall.
- **Bible study / 성경 학습:** 60 curated passages grouped into five categories and 30 paired topics. Complete **Kutsal Kitap — Yeni Çeviri (TCL02)** text, original English/Korean teaching meanings, clause/literal explanations, contextual word/suffix inspection, vocabulary, grammar and curriculum links. Reference ↔ passage matching, vocabulary and grammar choices provide explained feedback; independent writing/speaking uses models and self-assessment. This section teaches Turkish comprehension, with no new SRS, memory grading or flashcards. The existing 82 assignments remain under **Seminar source readings**, including all original URLs and notes. The lost sheep lesson remains a labelled simplified paraphrase.
- **Practice:** pronunciation/listening, seven conversation simulators, culture, Bible grammar, prayer assembly and spelling/proofreading. Prayer assembly keeps six stages and the original Father/I library, with additional compatible Father/we, Jesus/I and Jesus/we models.

Lessons are continuous teaching pages with four visible sections: **Read and listen → Understand → Practise → Use it yourself**. Sticky section links scroll without replacing forms or losing answers. Completion checking is separate from next/previous lesson navigation. Each has objectives, prerequisites, Turkish text with translations, bilingual meaning/grammar/register teaching, vocabulary, reusable patterns, explained guided practice and an independent task with a model and five-category rubric. Answer options rotate deterministically while retaining stable choice identities. Open writing/speaking uses model comparison and self-assessment, not exact-string grading.

Hash routes work with GitHub Pages, browser Back and direct links, for example `#/lesson/ministry-04/understand`. The root, `#/home` and `#/learn` replace their history entry with the resumed curriculum lesson or `foundation-references`. Existing section links open the continuous page at their anchor. `#/courses` opens the course picker. Last sections, per-course resume and drafts survive reload; workshop visits do not replace the study destination. Supporting tools provide Return to lesson. Phones use Contents and Next section/Next lesson controls with a native course-contents drawer; desktop uses a forest-green chapter sidebar and word-inspector panel. Tablets use the drawer to give workshops adequate reading space. The reference-based palette combines dark green navigation, light apricot accents, a gray-green canvas and cool gray borders. Merriweather and Noto Serif KR remain the locally bundled reading fonts.

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
| `spiritual_turkish_device_v3` | Saved-word contexts/schedules, reading notes, prayer draft, audio preferences, separate curriculum/workshop history and per-course resume |

Unavailable local storage falls back to session memory and displays its limitation. Clearing browser storage still removes device data; use the backup controls before moving devices.

Bible study uses a separate optional `bibleStudy` namespace in `spiritual_turkish_device_v3`: its own last passage/section, visited/practised states, stable option answers, notes and a learner-controlled **Studied** mark. Visiting or navigating never marks a passage studied. Opening this section does not replace curriculum or per-course resume. Existing backups remain importable; local collision records win. The Bible inspector does not add words to the existing Words recall queue.

## Bible-study sources and static data

The initial references follow the [Navigators' official reference list](https://www.navigators.org/resource/topical-memory-system/), with independently authored language teaching. The public feature is Bible study, not an official Navigators product. It adds no seventh course and changes neither the landing lesson nor the site's visual system.

The 60 selections cover **74 numbered verses**, but complete TCL02 combined units at Hebrews 9:27–28 and Titus 3:4–6 make the actual quotation **77**. Including retained Romans 6:4 adaptation conservatively gives **78 unique site-wide verse locations**. The available published notice permits attributed quotation up to 100 verses without a whole book; it is from a 2014 printing, not a new 2026 policy. Full attribution and source limitations appear in **Sources and permissions** and [the quotation ledger](BIBLE-STUDY-SOURCES.md). English/Korean meanings are teaching translations, not unnamed published Bible editions. External specialist Turkish/Korean review remains pending.

`content/bible-study/` separates ordered metadata, immutable Scripture/provenance and one teaching JSON file per passage. Shared Scripture/options are referenced by ID rather than copied. The manifest and registry load on entering Bible study; detailed teaching loads on demand with retry and stale-request protection. Total teaching data is approximately 1.82 MB, with approximately 132 KB of collection metadata/Scripture (uncompressed UTF-8). See [the data contract](content/bible-study/README.md). No backend, runtime AI, automatic parser or offline/service-worker guarantee is added.

Routes: `#/bible`, `#/bible/topic/<id>`, `#/bible/study/<id>/<read|understand|practise|use>`, `#/bible/about`, and `#/bible/readings`. Existing `#/bible/<reading-id>` links remain valid. Section anchors preserve forms and focus; related readings and Resources provide a return to Bible study.

## Audio and typography

Playback uses **browser Turkish synthetic speech**, with play/stop/speed controls and a global stop action. A Turkish voice must be installed/available; absent voices/APIs produce readable feedback. English pronunciation questions teach Turkish articulation, voicing and syllables without assuming Korean knowledge; English and Korean answers are kept separately. There are no human/native recordings or automated pronunciation assessments. Optional recognition compares recognised text, handles empty results, and depends on browser/microphone support. Sound effects and default speech speed are configurable.

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

첫 방문에는 성경 장절 찾고 읽기 수업이 열리고, 다시 방문하면 마지막 과정 수업과 부분을 이어갑니다. 과정별 목차에서 모든 수업을 자유롭게 선택하며, 한 페이지의 읽고 듣기 → 이해 → 연습 → 직접 사용하기로 공부합니다. 단어·성경 읽기·연습 도구는 자료 메뉴에서 열고 수업으로 돌아올 수 있습니다. 단어를 단어를 문맥과 함께 저장·복습합니다. 성경의 검증한 세 절은 직접 인용하고 긴 본문은 표시한 판본으로 연결합니다. 열 확장 기도 모델은 편집·축약한 학습 적용이며 원본 녹취가 아닙니다.

방문·연습·완료는 구별됩니다. 독립 과제와 자기 평가를 포함한 수행 보고이며 공인 숙달 인증이나 영적 점수가 아닙니다. 기록·개인 기도·메모는 기기에 저장되고 설정에서 백업할 수 있습니다. 계정 동기화는 향후 단계입니다. 음성은 합성 음성이며 원어민 녹음·발음 평가가 아닙니다. 터키어·한국어 전문가의 독립 검토는 아직 필요합니다.
