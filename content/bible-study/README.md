# Bible-study data contract (version 1)

This collection is curated static teaching, independent of `ALL_LESSONS` and learner state. Public names are **Bible study / 성경 학습**. Initial selection provenance is TMS60; no runtime generator/parser is used.

## Files

- `manifest.json`: ordered categories, topics and passage metadata; stable reference-based IDs, multilingual reference names, source-selection code/reference, edition ID, verse IDs, relative teaching-file path and compact vocabulary/grammar search metadata.
- `scripture.json`: immutable complete TCL02 translation units. Each record contains text, all represented `numberedVerseIds`, publisher-provided source URL, verification description/date and SHA-256 fingerprint. Keys preserve the selected reference even when the edition groups adjacent verses.
- `passages/<id>.json`: objectives, prerequisites, selected-language natural meaning, clause explanations/literal glosses, selected occurrence analyses, vocabulary, grammar, explained exercises, independent task/model/rubric and editorial status.

## Teaching fields

An English/Korean teaching value is `{ "en": "…", "ko": "…" }`. Author each language for its learners. Turkish Scripture lives only in the shared registry; teaching clauses refer to immutable source spans. Models are original non-Scripture sentences with Turkish plus bilingual meaning.

Clause spans and word analyses use **JavaScript UTF-16 offsets**, `[start, end)`, into one verse-unit string. Preserve source punctuation and line breaks. A word analysis includes `id`, `verseId`, offsets, `surface`, `lemma`, dictionary and contextual meaning, part of speech, realized suffix segments, stem changes, applicable grammatical features, role and contextual explanation. Segment forms must concatenate to the displayed surface. Do not infer features that are absent. A dictionary meaning is distinct from an inflected contextual translation.

Vocabulary entries reference analyses, classify general/Biblical/literary use, and include usage notes; optional modern equivalents, word families and examples are editorial additions, never Scripture replacements. Grammar records have bilingual titles/explanations and validated existing lesson links.

## Exercises

Each initial passage has four stable IDs: `-reference-text`, `-text-reference`, `-vocabulary`, `-grammar`. Options use stable IDs; `acceptedOptionIds` supports several valid answers. Each option has explained bilingual feedback. Scripture choices use `passageId`; reference choices use `referenceId`; ordinary choices use bilingual `label`. They never copy/reword Scripture. Same-theme alternatives with comparable lengths help avoid simple length cues. Answers rotate deterministically in the UI; their IDs do not rotate.

These are open-book comprehension exercises. The independent response uses a model and self-assessment, not exact matching. None creates a saved word, review schedule, memory score or conversion score.

## Maintenance

`npm test` validates the full contract, exact canonical-reference fixture, frozen text hashes, numbered-unit counts, occurrence boundaries, reconstructed surface forms, language completeness, exercise references/answers and cross-links. Tests cannot prove linguistic accuracy: review analyses and each language editorially. External specialist review is explicitly not claimed.

Change the text only after source comparison, then deliberately update its verification record and frozen hash fixture. Any additional passage requires rights/source review and a site-wide quotation recount. Preserve existing passage/exercise IDs and notes. If an exercise's actual question/accepted meaning changes, give it a new ID rather than applying an old answer to a different question. Existing version-1 backups accept the optional Bible-study namespace with conservative defaults.
