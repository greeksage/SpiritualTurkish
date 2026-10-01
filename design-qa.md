# Forest and apricot visual review

final result: passed

## Comparison target and evidence

Source visual truth: the user-supplied `codex-clipboard-3c79fdb5-a38e-40b3-93a6-b315305b5abe.png` (Image #1, 913 × 735px). The requested match is its color scheme: dark green sidebar, light orange accents, gray borders and tinted reading surfaces. The user explicitly retained the current fonts and existing learning structure. This is a palette and surface redesign, not a pixel-for-pixel reproduction of the reference's lesson content or layout.

Implementation: local `#/lesson/ch4-1/read`, English, at a 913 × 735 CSS viewport. The in-app browser's JPEG capture is 907 × 730px; comparison scaling to 913 × 735 is approximately 1.007×. A side-by-side comparison was inspected with the supplied source on the left and the normalized workshop capture on the right. The source and implementation show the same Scripture/grammar workshop context. The full view shows forest navigation, apricot selection markers, a gray-green canvas and bordered white teaching surfaces. A focused review of the navigation and playback controls checked small text, icon colors and selected-state contrast.

Reviewed captures:

- [Desktop Home](docs/design/forest-desktop.jpg): 1440 × 1000 CSS viewport.
- [Korean phone lesson](docs/design/forest-phone-ko.jpg): 390 × 844 CSS viewport, `ministry-04/read`.
- [Scripture workshop](docs/design/forest-reference-workshop.jpg): the reference-sized comparison state.

Additional manual states: word inspector, Bible library and Korean Learn at 360px. The reference has no phone state; the phone header and five-item bottom navigation deliberately carry its forest/apricot palette.

## Required fidelity surfaces

- **Typography:** existing local Merriweather and Noto Serif KR preserved as requested. Turkish prominence, Korean line spacing and readable teaching text retained. The reference's denser monospaced technical labels were not added to the learner flow.
- **Spacing/layout:** restrained 5–7px corners, clear panel boundaries, contained reading blocks and consistent gutters. Lesson steps wrap on phones. The site's task navigation and truthful progress labels remain intact.
- **Colors/tokens:** forest `#213B31`, apricot `#FFB79B`, soft apricot `#FFF0E8`, gray-green canvas `#F0F3F1`, gray borders `#CDD6D1`, cool reading panels `#F5F7F8`. Darker `#89462B` supplies legible accent text. Rendered sidebar-link contrast is at least 7.85:1; the apricot settings link is 7.21:1; the word-save action is 12.11:1.
- **Assets:** existing licensed local Material Symbols and fonts retained. No raster illustrations are present in the target; no invented avatar, waveform or recording asset was added.
- **Copy/content:** curriculum unchanged. Synthetic-speech labels and edition/adaptation distinctions retained. The reference's fictional account and native-speaker claims were not introduced.

## Findings and iteration history

1. **P1 — Legacy dark-button text had insufficient contrast.** The initial rendered Scripture workshop showed dark text on dark green selected verse/word and playback buttons. Inspection confirmed foreground `rgb(33,59,49)` over a dark green background. The older generic `text-white` override caused this. Added explicit light foregrounds for retained dark workshop controls and their child labels, and aligned green fills with the new palette.
2. **Post-fix evidence:** the final Scripture capture shows legible white text in the selected verse and synthetic-playback controls. Computed green-button colors are foreground `rgb(255,255,255)` and background `rgb(33,59,49)`. Rechecked the source and revised implementation together; no remaining P0/P1/P2 palette or responsive issues were found.

## Acceptance and remaining gaps

The 12 existing content/storage/asset checks and CSS build pass. The complete Chromium suite passes all 77 lessons/four stages in EN/KO at 360, 390, 768 and 1440px, all 82 reading routes and 24 workshops. Exercises, retry/completion, reload, migration, backup, review, prayer drafts, keyboard dialogs, 200% CSS zoom and speech fallbacks pass; no unexpected console/page errors or failed assets occurred.

No new framework, fonts, assets required at runtime, learner-state migration or curriculum changes were introduced. Screen readers and other browser engines retain the previously documented validation limits. No merge or deployment was performed.
