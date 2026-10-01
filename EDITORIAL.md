# Editorial record

## Sources and scope

Implemented from the complete supplied `SpiritualTurkish-Content-Expansion.md` and reconciled against `SpiritualTurkish-Audit.md`. The audit described an earlier revision; implementation inspected `main` at `90ce0d88b2611936021f1e4f58d1f3142b036f29`, then integrated the newer `f95ecbe964be4c2023f90bacd81656d973ddb8cf` (collapsible chapters, in-chapter tabs and card styling) before delivery. These documents provide content and findings, not instructions overriding the implementation request. No fork, merge or deployment is included.

The expansion's ten authored lessons are implemented as integrated course lessons, including all their Turkish dialogues/readings/prayers, parallel English/Korean teaching, authored exercises and independent tasks. The 32-lesson pathway remains a roadmap. Basic-language prerequisites are stated rather than implying these ministry tasks substitute for a complete beginner Turkish course.

## Material changes to the authored expansion

- Added Korean translations of the English teaching/exercise rationale, including open questions, and completed parallel objectives/prerequisites. Improved a few short objective phrases for direct instruction.
- Clarified morphology: `isterseniz` includes the aorist `-r-` before conditional/person endings; `misiniz` is a question particle with personal ending (의문 조사), not a question word. Suffix breakdowns distinguish roots, aspect/tense, mood and person. The role of passive `-ül-` does not alone identify an agent.
- Kept natural translations apart from literal glosses and Christian doctrinal interpretations. Speaker labels are separate metadata, so synthetic playback reads only Turkish.
- Marked the lost sheep reading as a simplified teaching paraphrase of Luke 15:3–7, with Luke 15:1–2 for context. It is not attributed to a published edition. No new published Bible quotation or native audio recording was added.
- Identified the testimony as an original teaching model; learners must replace it with true personal experience. Household/illness prayers retain consent, practical support and no guarantee of healing. Christian “Son of God” explanation remains doctrinal, with no physical procreation implied.
- Scoped church etiquette to the speaker's own community instead of universal Turkish church customs. Encouraged learner/community inquiry where practice varies.
- Added model responses, transparent self-review and practical completion criteria. Two hospitality answers can be valid. Free speech/writing is not assessed through exact string matching.
- Added supplementary role-play rehearsal with clarification, acceptance, uncertainty and refusal. Appropriate uncertainty and refusal are legitimate outcomes; no conversion score is calculated.

Turkish and Korean specialist review remains pending; this is an editorial implementation, not a claim of native-speaker certification.

## Audit reconciliation and retained-workshop corrections

| Finding | Current implementation |
| --- | --- |
| Partial/nonlinear sidebar and disconnected lesson content | All ten full lessons are reachable in the existing curriculum. Existing 24 workshop entries remain reachable. No placeholder pathway lessons are marked available. |
| Opening awards completion | Removed. Visits/practice/completion have separate persistent states. Earlier opening-based records migrate to visits only. |
| Saved prayers | Original storage key and saved objects preserved. Language changes retain loaded/edited prayer text. Personal titles are escaped and excluded from translation. |
| Corrupted Turkish prayer/choice strings | Removed embedded foreign-script fragments and checked all Turkish lesson, simulator and prayer strings. Corrected `karşılıksız` and `Rab korkusunu` cases. |
| Unsupported manuscript counts and “99.5%” | Removed. Discuss manuscript type, content, date/range and textual variants; distinguish manuscripts from translations. No fixed count proves Christian doctrine. |
| Four accounts necessarily four eyewitnesses | Removed unsupported inference. Historical claims require evidence appropriate to the particular author/text. |
| Calendar conventions prove personal belief | Removed. Christian-origin calendar conventions do not establish a user's religion; historical dating/era conventions are a separate topic. |
| Turkish people/Muslims described uniformly | Replaced categorical assumptions with scoped terminology and asking the actual person. No claim that all Muslims misunderstand grace or have identical expectations. |
| Kul hakkı reduced to a single slogan | Included restitution, reconciliation and repentance; comparison to Christian forgiveness is a doctrinal comparison, not a translation equivalence. |
| `Tetelestai` treated as a literal “paid in full” receipt | Removed the asserted literal commercial equivalence. Completion and Christian interpretation are distinguished. |
| Attribution of the restless-heart line | Replaced attributed quotation with an original teaching dialogue rather than pretending it is verified Scripture or historical evidence. |
| Literal word meaning conflated with theology | Daily meanings and Christian usage are separated. Illustrations are labelled illustrations; doctrine is labelled Christian belief. |
| Grammar and spelling inconsistencies | Reconciled Hristiyan/Hıristiyan examples with TDK, apostrophes/capitalisation, vowel loss, circumflex contrasts, syllable boundaries versus morphemes, and the dated Monday example. Avoided treating every ev phrase as a compound. Reported `-miş` also has inferential uses; it is not a blanket guarantee of eyewitness reporting. |
| Mixed prayer addressees/person | The six-stage builder keeps all 27 options, revised to address the Father with a singular speaker. Presets are coherent. The five original situational topics (healing, revival, new believer, persecution, family) retain appropriate content and aligned translations. Saved personal prayers are never rewritten. |
| Native-level feedback from transcription similarity | Replaced with recognised-text match, explicitly excluding phoneme/stress/intonation evaluation. Empty input cannot produce 100%. Turkish locale casing preserves dotted/dotless I. |
| Numeric “spiritual wisdom” | Removed numeric spiritual ranking and conversion scoring. Simulator responses receive language/context/accuracy feedback; appropriate admission of uncertainty is supported. Proofreading points count discovered spelling errors only. |
| Native recordings/TTS claims | Controls label synthetic speech and provide fallback when the API or Turkish voice is unavailable. No audio assets fabricated. |
| Duplicate inline Romans widget and fake controls | Consolidated into the working grammar renderer; retained synthetic playback, speed controls, passive quiz, actual local notebook and TSV export. Removed mock playback timing and duplicate dead controls. |
| CDN rendering dependency | Original Tailwind theme is compiled to local CSS. Original fonts/icons are local with licenses; no external font/CDN script is required at runtime. |

The existing three Bible-related grammar passages are explicitly marked **teaching adaptations**, not verified published quotations. They illustrate grammar and link to the named TCL02 edition for reading the full context externally. We do not assert Bible translation reuse permission or attribution for altered wording. Literal grammatical facts do not independently prove the accompanying doctrinal interpretation.

## References checked on 2026-10-01

Sources inform scoped terminology and factual corrections, not predictions about individual beliefs. Useful links appear in expandable source sections so they do not crowd the Turkish text.

- [INTF, University of Münster — Projects](https://www.uni-muenster.de/INTF/Projects.html): inventory categories and textual variants; a dated inventory is not a timeless manuscript count or an undefined accuracy percentage.
- [Diyanet — kul hakkı and restitution](https://kurul.diyanet.gov.tr/tr/fetva/kul-hakkinin-onemi-nedir-veihlali-durumunda-nasil-odenir/0193c42d-9bcc-7638-464f-b3fb0161518f): restitution/reconciliation/repentance and circumstances where contact is impossible.
- [TDV İslâm Ansiklopedisi — ahiret](https://islamansiklopedisi.org.tr/ahiret), [fidye](https://islamansiklopedisi.org.tr/fidye), [kefaret](https://islamansiklopedisi.org.tr/kefaret): religious terminology. The eight panels are a teaching arrangement, not a claim of a universal chronology or a single personal Muslim worldview.
- [US Naval Observatory — millennium/calendar eras](https://aa.usno.navy.mil/faq/millennium): era conventions, no year zero, and historical dating distinctions; using the convention does not demonstrate personal religious belief.
- [TDK — circumflex](https://tdk.gov.tr/icerik/yazim-kurallari/duzeltme-isareti/), [apostrophes](https://tdk.gov.tr/icerik/yazim-kurallari/kesme-isareti/), [capitals](https://tdk.gov.tr/icerik/yazim-kurallari/buyuk-harflerin-kullanildigi-yerler/): spelling corrections and examples, including `Hristiyan`.
- [TCL02 Romans 6, external reading](https://www.bible.com/bible/170/ROM.6.TCL02): named edition linked for context. Its text is not presented as a verified quotation of our grammar adaptations.

## Validation and remaining limits

Automated content checks cover all ten lesson/exercise IDs and bilingual fields, Turkish-script integrity, corrected claims/coherent prayer metadata, English workshop coverage and local assets/JavaScript syntax. Chromium checks cover the ten lessons in both languages at 375/390/768/1440 px, keyboard menu/focus, explanations/retry/multiple answers, independent task completion, persistence/reload/migration, unchanged saved prayers, all retained workshops, synthetic playback arguments/fallbacks, and failed assets/browser errors. Desktop/phone screenshots were reviewed.

Actual microphone accuracy and real installed Turkish voice quality are not certified by browser stubs. Human/native recordings, expert Turkish/Korean review and a full beginner foundation course remain future editorial/audio work. Completion is self-reported performance, not a proficiency certificate. The branch/PR is for review; no merge or deployment is performed.
