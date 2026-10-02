# Bible study: sources, permissions and editorial review

Verified during implementation on 2026-10-02. These records distinguish reference selection, immutable Scripture, original teaching, and learner data.

## Reference selection

The canonical source is the [Navigators' official Topical Memory System reference list](https://www.navigators.org/resource/topical-memory-system/). The repository had no definitive list before this addition. `tests/fixtures/bible-study-references.json` freezes all 60 references in published order. The manifest preserves original selection codes separately from reference-based IDs and public learning topics.

The initial five groups contain 12 passages each, with six pairs of subtopics. Selected numbered-verse totals are 14, 13, 14, 16 and 17: **74**, not 60. Psalm 119:9, 11 is disjoint; verse 10 is not quoted. No references were substituted.

The site provides independent Turkish-language teaching, not a Navigators product or memorization system. No TMS commentary, workbook exercises, card artwork, logos or endorsement are copied. Public availability of the selection is not a blanket license for product material. A separate license for selection/arrangement was not established; this attribution and independently authored treatment document the limited use. Broader reuse/branding needs its own permissions assessment.

## Edition and quotation basis

**Kutsal Kitap — Yeni Çeviri (TCL02)**. The [publisher-provided edition page](https://www.bible.com/versions/170-tcl02-kutsal-kitap-yeni-ceviri) identifies the modern 2001 translation and 2008 revision.

Required attribution, reproduced from the printed copyright page:

> Kutsal Kitap © The Bible Society in Turkey (Kitabı Mukaddes Şirketi) ve The Translation Trust / Yeni Yaşam Yayınları, 2001, 2008

The [edition's published notice](https://shop.die-bibel.de/media/26/04/6a/1733098522/9783438081667_Leseprobe_01.pdf.pdf?ts=1733703078), PDF page 2, permits clearly attributed quotations not exceeding 100 verses and not containing an entire biblical book. It addresses computer use as well as printed/audio reproduction. This is the October 2014 printing's notice, **not a newly issued 2026 policy**. No complete book is reproduced.

Attribution is discoverable beside Scripture and in **Bible study → Sources and permissions**. Existing inline source readings retain the full notice. Synthetic browser speech is labelled; no human recording license is claimed.

## Source text and combined units

All 74 selected records were acquired from Bible Society-provided TCL02 pages on Bible.com. Each record stores its direct URL. The full structured edition text was compared with the page's visible paragraph in a separate extraction pass; whitespace was normalized only for comparison, not for stored Scripture. Punctuation, capitalization, closing/open quotation fragments and poetry line breaks are retained. Social-preview snippets were rejected because long passages are truncated there. Frozen SHA-256 fixtures detect later accidental edits; hashes alone do not establish original accuracy.

The edition combines two selected locations with adjoining verses:

| Selected reference | Complete published quotation | Additional numbered verses |
| --- | --- | ---: |
| Hebrews 9:27 | Hebrews 9:27–28 | 1 |
| Titus 3:5 | Titus 3:4–6 | 2 |

Their complete Turkish units are retained without inventing a boundary or cutting wording out of Scripture. Public headings and verse numbers show the actual quoted ranges; a brief note explains the original selection. Original selection metadata remains unchanged. Therefore Bible study quotes **77 distinct numbered verses**. This corrects the plan's assumption that 74 selected locations would equal the final quotation footprint.

## Whole-site quotation ledger

| Material | Count/treatment |
| --- | --- |
| New collection, including complete combined units | 77 unique numbered verses |
| Existing verified Matthew 6:33 and John 13:34–35 | 3, already within the 77; not added again |
| Existing grammar adaptations at 2 Corinthians 5:17 and Romans 6:23 | Underlying locations already in the 77; adaptations remain labelled |
| Existing Romans 6:4 grammar adaptation | Conservatively add 1 underlying location |
| **Conservative site-wide total** | **78 distinct verse locations**, below 100; no complete book |
| Repeated teaching/exercise displays | Shared source records, same locations, deduplicated in this ledger |
| Other 82 seminar reading records | External named-edition assignments except the three existing inline verses |
| Lost sheep lesson | Existing labelled simplified paraphrase, not a published-edition quotation |
| Seminar dialogues, edited prayers, blessing practice and independent models | Original/edited teaching adaptations, not presented as exact edition quotations |
| English/Korean natural meanings and literal glosses | Original teaching translations, no EN/KO edition quotation claimed |

The ledger builds on the existing whole-site editorial classification and rechecks the inline reading/grammar records. New Scripture is confined to the registry; no full Bible or source PDF is bundled. Additions must update the ledger and check rights across the site, not just this collection.

## Linguistic and pedagogical review

There are 316 occurrence-specific word analyses, dictionary senses separate from contextual meanings, at least two passage-specific grammar focuses per passage, and 240 explained exercises. English and Korean clause teaching are independently authored; Korean explanations use relevant particle, possession, modifier and omitted-subject comparisons without claiming exact equivalence.

Implementation review checked every selected surface/chain, stem-change notation, clause meaning, speaker number, imperative versus future function, case governance and possession. Automated tests check source spans, word boundaries and chain reconstruction; they cannot prove the contextual grammar. The content remains open to correction. **Independent external Turkish/Korean specialist review is pending and is not claimed.** All 60 entries state that limitation rather than pretending human certification.

Material editorial choices include distinguishing natural meaning/literal structure/doctrine; recognizing -DIK and future clauses as nominalized content rather than ordinary finite verbs; marking first-person optatives separately from inclusive exhortations; and preserving contextual restrictions in passages about provision, suffering, giving and discipleship. Commands do not justify coercive conversations or guaranteed health/wealth claims. Practice models are clearly original language exercises, not revised Scripture.
