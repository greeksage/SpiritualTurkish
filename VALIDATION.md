# Validation evidence — redesign release

## Bible-study addition — 2026-10-02

Validated with Node.js 24.16.0 and headless Chromium/Playwright. Screenshots of English desktop and Korean/English phone pages were visually inspected; the sidebar's reference column was corrected after that inspection. This addition retains the existing classroom, six courses, palette and fonts.

| Check | Result |
| --- | --- |
| `npm test` | **19 passing tests**, including four new Bible-data/state tests; exact 60-reference fixture, 74 selected/77 quoted numbered verses, source fingerprints, language completeness, occurrence boundaries, reconstructible chains, valid options/answers and links |
| `npm run test:browser` | Complete classroom, existing regression and Bible-study suites passed; all **77 lessons, 82 source readings and 24 workshops** remain functional |
| New passage coverage | All **60 passages in English and Korean**, exact Scripture DOM text, all four visible sections and all **240 explained correct exercise answers per language** |
| Learning state | Incorrect answer/reason/retry, independent notes, manual Studied/unmark, reload, section DOM preservation, curriculum-resume isolation, source-reading return, old-backup defaults and atomic validation |
| Additional focused browser run | Verified new backup export/import/reload, selected-rate synthetic-speech stub, unavailable-speech feedback inside the inspector, English `isaiah` reference search and Korean `은혜` search after final polish |
| Responsive/accessibility | EN/KO at **360, 390, 768 and 1440px**, long Titus teaching, Scripture visible in initial phone viewport, no overflow, 200% CSS zoom and reduced motion; keyboard word opening, Escape/focus return, contents drawer/heading focus, semantic sections and labelled choices |
| Failure cases | Unavailable speech API/storage, failed passage fetch with Retry and no substitute Scripture, late request cannot overwrite newer curriculum route |
| Diagnostics | No unexpected console/page errors or missing assets in normal browser flows. Deliberate aborted requests are isolated in failure-test contexts |
| `npm run build:css` | Pass; existing Browserslist development-data warning remains, with no runtime CDN introduced |
| `node scripts/coverage.cjs` | Existing counts unchanged: 77 lessons, 499 words, 82 readings, 148 indexed source pages |
| Static release boundary | GitHub Pages configuration inspected: legacy publication from `main` at `/`; this feature branch is not a deployment branch. No merge/deploy action performed |

The exact selection and rights sources are documented in [BIBLE-STUDY-SOURCES.md](BIBLE-STUDY-SOURCES.md). Actual complete TCL02 units quote 77 numbered verses; the conservative whole-site ledger is 78 locations, not the plan's provisional 75. The source text comparison uses the publisher-provided structured unit and visible paragraph; frozen hashes detect later changes but are not independent linguistic review. External Turkish/Korean specialist review remains pending. No real human audio, live microphone pronunciation assessment, offline guarantee, or newly issued copyright policy was verified/claimed. Synthetic speech availability depends on the learner's browser/system voice.

The preceding release evidence below remains a historical record.

Validated locally on 2026-10-01 with Node.js 24, Python fontTools and headless Chromium/Playwright. Desktop and phone layouts were also inspected in the in-app browser. These checks support the implementation; they do not certify Turkish proficiency, specialist editorial approval or production audio quality.

| Check | Result |
| --- | --- |
| `npm ci` | Locked development dependencies installed; audit reported zero vulnerabilities |
| `npm test` | 12 checks pass: authored expansion, bilingual source content, stable IDs, Turkish script, corrected claims/prayers, all 148 source pages, vocabulary, Bible quotation registry, backup validation/merge, conservative completion, review intervals, local assets and JS parsing |
| `npm run build:css` | Pass; local CSS generated. Browserslist warns its development compatibility dataset is dated; no runtime CDN dependency is used |
| `node scripts/coverage.cjs` | 77 lessons, 499 vocabulary entries, 82 reading records, 148 pages, five distinct sources |
| `node tests/browser.cjs` | All 77 lessons, all four stages, both languages at 360/390/768/1440px; no document overflow. All 24 retained workshops and five destinations/settings checked at the same widths/languages |
| Learning interactions | Incorrect answer/reason/retry, multiple valid hospitality answers, source-unit answers, open-response comparison, independent rubric completion, editing revokes completion, reload/language persistence |
| Vocabulary | Keyboard-opened inspector, native dialog focus containment/Escape return, real source-sentence snapshot, search TR/EN/KO, saved words, reveal/Remembered/Again schedules and reload |
| Bible | All 82 reading routes resolve to a labelled assignment; verified inline passages, translation hiding and reading-note persistence |
| Personal data | Existing prayer with literal `<script>` title stays text; loaded prayers survive language changes. Compatible speaker/addressee models, prayer draft reload, notebook migration/bridge and real JSON backup download/import work |
| Backups | Invalid backup rejected before mutation, valid merge preserves existing prayers/records; fake completion downgraded, malformed device word rejected |
| Retained audio/practice | Simulator feedback records practice without completion; six-stage prayer library and ambient pad controls remain reachable; sound-effects/default-speed settings persist |
| Synthetic speech | Stubs verify Turkish locale, selected speed and text playback; absent voice/API gives visible fallback in lesson, word dialog and prayer workshop; global stop available |
| Recognition | Empty result and absent recognition API give readable feedback; empty text never scores 100% |
| Accessibility | Labelled navigation/controls, skip link, semantic sections, keyboard word sheet, Escape/focus return, native outline navigation/Back, keyboard expandable explanations and 200% CSS zoom without overflow |
| Fonts | Merriweather faces contain Turkish ç/ğ/ı/İ/ö/ş/ü; Noto Serif KR contains all 11,172 modern Hangul syllables plus Jamo; licensed fonts/icons local |
| Browser diagnostics | No unexpected page/console errors or failed local assets in the browser suite |

The browser suite uses speech stubs rather than an actual microphone or installed Turkish voice, and CSS zoom is a reflow check rather than a full assistive-technology audit. Screen-reader testing, other browser engines, real microphone transcription and human pronunciation review were not performed. Browser recognition can require network/microphone permission; it assesses recognised text only.

The responsive check found a legacy pronunciation tab bar extending beyond the tablet reading area. Its negative margins and per-chapter colouring were replaced with contained, wrapping tabs; the complete suite was rerun. The prayer builder’s nested playback button was separated into valid sibling buttons. Empty recognition results and unfinished prayer drafts received targeted fixes and regression checks.

Independent Turkish/Korean specialist review remains pending. The ten extended source prayers are shortened adaptations, not full transcripts. Only three newly verified Turkish verses are reproduced inline; longer reading assignments use external edition links. No original PDF images, hymns or recordings are bundled. There is no account sync/backend, and this release is submitted for review without merging or deployment.

Initial Linux CI exposed an asynchronous test timing assumption after selecting a backup file. The regression test now waits for file validation feedback before asserting; application backup validation still precedes mutation.

## Forest/apricot reference update

The user-requested color revision was checked against the supplied screenshot in the in-app browser. Desktop navigation and phone header/bottom navigation now use forest green; apricot marks selected states and review actions; reading panels and gray borders improve surface separation. Existing fonts and learning content remain intact. Manual review covered Home, a reference-sized Scripture workshop, lesson reading, the word inspector, Bible cards and Korean phone Learn. A legacy dark-button contrast issue was corrected. Rendered navigation/action text sampled between 7.21:1 and 12.11:1 contrast.

After the final stylesheet change, `npm test` (12 checks), `npm run build:css`, `git diff --check` and the full `npm run test:browser` suite passed again. All 77 lessons/four stages in both languages at 360/390/768/1440px, 82 readings and 24 workshops remain functional without document overflow, unexpected console errors or missing assets. See [design-qa.md](design-qa.md) for reference comparison and captured evidence.


## Lesson-first classroom update

The current release opens a real lesson, preserves all six courses and groups their existing order into explicit chapters. There is no Home dashboard. Root/home/learn aliases use history replacement; section links scroll within a continuous page. Curriculum resume and per-course resume are separate from workshop visits. Old backup versions remain accepted and personal prayers, notes, vocabulary and drafts are retained.

The classroom regression covers fresh entry, both teaching languages and first Turkish visibility at 360px, chapter/current-lesson drawer selection and focus, retained form DOM/drafts across anchors, Back, reload, manual-scroll section resume, root aliases, six-course selection, per-course resume, resources return, free next-lesson navigation and English/Korean pronunciation answer isolation. It also checks visible English teaching and control attributes throughout all 24 retained workshops for Korean leakage, excluding the language option and personal content. Unit checks reject Korean in all English-authored curriculum/source/vocabulary/reading fields.

The existing complete browser suite continues to render all 77 lessons/four anchor states in both languages at 360/390/768/1440px, plus all 82 reading routes and 24 workshops. It checks saved prayers and unfinished drafts, word review, completion evidence and live sidebar marks, backup import/export, legacy migration, keyboard focus, 200% CSS zoom, speech stubs and missing speech APIs/voices. The tablet workshop overflow found in review was fixed by using the contents drawer below 1024px.

Validation status: passed. The final complete browser suite and targeted classroom regressions passed. No document overflow, missing assets or unexpected console/page errors occurred. The content/storage/asset suite has 15 passing checks; the CSS build, source inventory and diff check pass. See [design-qa.md](design-qa.md) for current visual evidence and limitations. Real microphone/voice quality, screen readers and other browser engines remain unverified. Independent specialist editorial review is still pending. No merge or deployment is authorized.
