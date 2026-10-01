# Validation evidence — redesign release

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
