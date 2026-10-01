# Lesson-first classroom visual review

final result: passed

## Review target

The approved “lessons as the main experience” plan defines the classroom layout. The earlier user-supplied screenshot defines the preserved forest/apricot palette; it is not the layout target for this release. Local Merriweather and Noto Serif KR remain unchanged. No mock account, synthetic mastery statistics or dashboard gate remains in the visible study flow.

## Evidence

- [Desktop first lesson, 1440px](docs/design/classroom-desktop.jpg)
- [Korean first lesson, 390px](docs/design/classroom-phone-ko.jpg)

Manual in-app-browser review covered the first Bible-language lesson at 360px in English and Korean, the Korean 33-lesson prayer course, course selection, contents, continuous explanations/patterns, and the desktop chapter sidebar. Captures include the surrounding classroom. The phone captures show Turkish in the initial viewport, with Contents and Next section controls at the bottom. The desktop capture shows the current course, active chapter, lesson title/position, objective and immediately available Turkish. The earlier palette evidence remains under docs/design/forest-*.jpg.

## Required surfaces

- **Typography:** the requested serif fonts remain local; Turkish is visually prominent, Korean explanations have generous line spacing, and controls have readable labels.
- **Spacing/layout:** one continuous teaching article uses thin dividers. Essential explanations and reusable patterns are visible. Longer vocabulary/reference material and prerequisites use native details; forms remain mounted during anchor navigation.
- **Color:** forest #213B31, apricot #FFB79B, gray-green canvas #F0F3F1, cool reading surfaces #F5F7F8 and borders #CDD6D1 preserve the accepted scheme. Apricot accents identify the current chapter/lesson/section without multicolored course cards.
- **Assets:** existing licensed fonts and icons remain local. No fabricated recording, waveform, avatar or new image asset was added to the runtime.
- **Copy/content:** all 77 lessons, 82 readings and 24 workshops remain available. English pronunciation teaching uses Turkish articulation and rhythm; translated source titles replace PDF filenames in learner controls. Saved learner text is preserved.
- **Interaction:** chapter outlines, current-lesson highlighting, a six-course picker, secondary Resources, Return to lesson, sticky anchors, and explicit next/previous lessons guide study. Completion marks reflect self-assessed evidence and disappear when evidence is edited.

## Findings and repairs

1. The original save callback overwrote the chapter/position label with visit status. The classroom header now retains its teaching context.
2. A nested vocabulary heading was initially extracted with reusable patterns. Extraction now targets the direct pattern heading; word analyses remain available in the inspector.
3. A retained Bible workshop overflowed at 768px with a narrow sidebar. Tablet layouts now use the contents drawer and full reading width.
4. Selecting the current lesson in the contents drawer initially restored focus to its opener. It now closes and focuses the lesson heading, including same-link selections.
5. Strict English review found untranslated playback/speed labels, wordless-book captions and six redundant Korean glosses in English expansion fields. Their English variants are corrected; Korean teaching and personal content remain intact.
6. Navigation-related layout scrolls could change resume before the target section settled. Anchor scrolling is immediate, brief navigation scrolls are ignored, and direct wheel/touch/keyboard study scrolling takes control immediately. A targeted regression verifies manual section resume and reload.

## Validation limits

The final 15-check unit suite, CSS build, source inventory, diff check, targeted classroom regressions and complete Chromium suite passed. No document overflow, unexpected page/console errors or missing assets occurred. Chromium checks cover English/Korean at 360, 390, 768 and 1440px, 200% CSS zoom, keyboard dialogs/details, word inspection, exercise feedback/retry/completion, backups/migration and unavailable speech support. Real microphone recognition, installed Turkish voice quality, screen-reader output and other browser engines were not tested. Independent Turkish/Korean specialist review remains pending. No merge or deployment is performed.
