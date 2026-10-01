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

## Redesign and five-source curriculum (2026-10-01)

This release incorporates the full unmerged content-expansion branch/PR #1 explicitly, then replaces its shell with Home/Learn/Words/Bible/Practice. The earlier record above describes that preceding implementation; this section records the additional source review and supersedes its statements about no new Bible quotation. All ten expansion IDs and authored teaching remain. The five distinct supplied PDFs were read in full, including image-based pages. Their 148 pages map to 67 source units and reference assignments in [SOURCE-COVERAGE.md](SOURCE-COVERAGE.md). Covers and referenced external works are identified rather than turned into available lessons.

The two spelling files have identical SHA-256 `ef14db5efa3d57d53779cc0e721a64ee802e996274e1ce8807c9cad702efcfed`; only one supplies curriculum. Attachments supply teaching substance, not instructions overriding the user’s scope. Originals and rendered review images remain outside the public repository.

### Material PDF editorial changes

| Source/page | Reviewed treatment |
| --- | --- |
| Foundation 2–4, 8 | Distinguish named editions, Christian canon terminology and the source’s attributed religious account. `Hz.` means the honorific Hazreti, not literally “prophet.” `Kutsal Yazı` is Scripture, not invariably Law. |
| Foundation 7, 13–17 | Include the source chart’s 25 names alongside biblical people/places; omit unverified frequency counts and the third-party chart. Normalise Şuayp to Şuayb. Corresponding names do not establish identical narratives. Correct the source’s Lehva to Levha. |
| Foundation 12 | `1 Corinthians 5:16–17` is invalid. Link the related new-creation reading to 2 Corinthians 5:17; this is an editorial choice, not proof of the author’s intended citation. |
| Foundation 18–20, 28–34 | Preserve passage assignments externally, with original study-language examples, grammatical focus and contextual tasks. Do not invent Scripture text for an inaccessible reading. |
| Foundation 21, 35–38 | Preserve blessing vocabulary and character words without promising guaranteed healing or awarding spiritual ratings. Correct `Bağ Kiracıları` to vineyard tenants rather than hired workers. Full apostle/parable/fruit readings are linked. |
| Foundation 22–24 | Distinguish worship (`tapınma`) from only singing and sermon (`vaaz`) from “word”; `ayartılmak` is being tempted, not automatically committing sin. Doctrinal meanings are labelled context, not literal glosses. |
| Foundation 25 | Fidye/kefaret/kaza terminology is contextual and sourced; amounts and arithmetic in the 2026 seminar are dated examples, not evergreen financial requirements. |
| Foundation 26–27 | Vowel loss is lexically conditioned, not a rule for every two-syllable noun. Distinguish active/passive/reflexive interpretations through the subject/action, not the suffix alone. |
| Dua 2–9 | Preserve six stages and request/wish/purpose constructions. Prayer speaker/addressee remain consistent; selected words separate dictionary headword, surface form and suffix breakdown. |
| Dua 11 | Retain hymn title/reference as reference-only; do not copy lyrics, screenshots or recordings without their own permissions. |
| Dua 12–19 | All eight prayer situations are included. Requests during illness/support avoid guarantees, pressure or replacing practical care. Correct yücellik to yücelik. |
| Dua 20–22 | Confession/salvation-prayer examples remain Christian models, offered voluntarily rather than compulsory formulas. |
| Dua 23–33 | Preserve all eleven verse/prayer pair aims; read the named verse separately. Original teaching prayer applications are not identical to Scripture. Jeremiah’s context does not promise immediate prosperity. |
| Dua 34–43 | Ten extended prayers become **shortened edited models** with bilingual teaching and source/timestamp links where supplied. Preserve their topic and useful forms while removing repetitive transcript material and mixed addressees/person. A prayer addressed to the Father does not call the Father crucified or the high priest. These are not full verbatim video transcriptions. |
| Müjde 2–23 | Seven scenario tracks incorporate the prior manuscript/calendar/uncertainty corrections. Circle, banknote, scales and five-colour book remain illustrations, not proof or Scripture. Consent, refusal and honest uncertainty are valid responses. Suffering language allows continuing difficulty and practical support. |
| Müjde 16, 19, 23 | Cover the article/human-worth/wordless-book learning aims in original teaching text; omit article screenshot, watermarked stock image and bracelet photo. |
| Din 2–12 | Expressions and honorifics are contextual. `kul hakkı` includes rights, restitution and repentance; neither a formula nor permission automatically repairs harm. The nut-taking story is adapted without its illustration. |
| Din 13–18 | Include six belief articles, book/prophet pairings, five major prophets and all five angel-role rows as **attributed classroom material**. Do not identify these as every Muslim’s personal beliefs or silently merge them with Christian categories. |
| Din 19–31 | Preserve diagram categories, kader/kaza distinctions, five practices, ablution/wiping/opening formulas, fasting and pilgrimage vocabulary, and the beliefs/practices comparison. Timetables are dated examples. The zakat fraction is not an unconditional rule for all property. Learners recognise formulas without being asked to profess them. |
| Din 32–33 | Attribute the textbook’s unchanged-book answer; it is not independent historical manuscript evidence. Resource links remain references. |
| Spelling 2–10 | All eleven rules plus numbers are covered. Proper/common/metaphorical names, sentence-initial exceptions, derived forms and institutional names remain distinct. Fix Alevlilik to Alevilik. Established `ev` compounds do not imply every `ev` phrase joins. |
| Spelling 9 | Correct impossible `Matthew 4:29` to **Matthew 15:29**, matching the described Galilee setting. Calendar dates remain source examples, not current-year claims. |
| Retained grammar | Keep three Turkish grammar teaching adaptations visibly distinct from verified quotations. Rewrite archaic Korean Bible-like lines as natural original teaching translations; keep the analysed forms and Christian meaning. |

The spelling guide’s special `Rabbin` convention is attributed to the religious writing guide. A named Bible edition’s punctuation is never silently rewritten to match it. Selected word analyses are authored entries, not a general morphological parser. Uninflected reference words are labelled as such; complete phrase entries are not passed off as word-by-word parsing.

### Quotation and third-party reuse ledger

The named edition is **Kutsal Kitap (2001, 2008)**, © The Bible Society in Turkey and The Translation Trust / Yeni Yaşam Yayınları. The [edition copyright notice](https://gssbibles.com/media/26/04/6a/1733098522/9783438081667_Leseprobe_01.pdf.pdf?ts=1770181339) permits attributed quotation of up to 100 verses under its stated conditions, without a complete Bible book. This release stays below that limit; longer assignments link to the edition. No permission for a complete embedded Bible is claimed.

| Material | Status and site-wide accounting |
| --- | --- |
| [Matthew 6:33](https://kutsalkitap.info.tr/?q=Mat.6:33) | One exact Turkish verse, verified against the named edition, displayed with attribution |
| [John 13:34–35](https://kutsalkitap.info.tr/?q=Yu.13:34-35) | Two exact Turkish verses, including the edition’s closing quotation mark; verified and attributed |
| Retained Romans 6:4, 2 Corinthians 5:17, Romans 6:23 grammar text | Three labelled teaching adaptations, not exact verified quotations. Conservatively count the three underlying verse locations as well: **six distinct verse locations** including the new quotations, with repeated appearances deduplicated. |
| Lost sheep lesson | Original simplified paraphrase of Luke 15:3–7, explicitly labelled; surrounding context linked |
| Other source readings | References and external reading assignments; no full published passage reproduced |
| English/Korean teaching translations | Original explanatory translations, not quotations attributed to a published EN/KO edition |
| Seminar prayers/dialogues | Edited teaching adaptations, not human audio recordings or native-speaker-certified speech |
| Hymns, videos, photographs and diagrams | Reference links only; no original assets or lyrics redistributed and no wider permissions assumed |

The Bible view has inline attribution; the retained grammar view identifies adaptations and links to the edition. Do not add future quotations without updating this ledger and checking the full-site count, exact wording and permission conditions. Page links alone do not license third-party images or hymn lyrics.

### Additional authoritative terminology references

Alongside the references checked above, [TDV âmentü](https://islamansiklopedisi.org.tr/amentu), [melek](https://islamansiklopedisi.org.tr/melek), [zekât](https://islamansiklopedisi.org.tr/zekat) and [oruç](https://islamansiklopedisi.org.tr/oruc) were consulted on 2026-10-01 for the source’s belief/practice terminology. These support attributed comprehension teaching, not a universal description of individuals. The inline edition passages were checked separately from its commentary; commentary is not presented as Scripture.

### Release validation and limits

See [VALIDATION.md](VALIDATION.md) for the final checks. Independent Turkish/Korean specialist review, reviewed human audio and actual microphone/installed-voice quality remain outstanding. No account service is implemented, and no merge/deployment is performed. The ten long prayer models are intentionally shortened adaptations rather than full transcripts; full Bible passages beyond the verified inline verses require the external edition.
