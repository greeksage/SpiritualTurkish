# Local typefaces and icons

The existing design uses these Google Fonts families, downloaded from the Google Fonts CSS/font service on 2026-10-01 and served locally. Weights and italic variants preserve the original typography. These are font assets, not audio recordings.

- Merriweather: [upstream](https://github.com/google/fonts/tree/main/ofl/merriweather), `Merriweather-OFL.txt` (SIL OFL 1.1).
- Plus Jakarta Sans: [upstream](https://github.com/google/fonts/tree/main/ofl/plusjakartasans), `PlusJakartaSans-OFL.txt` (SIL OFL 1.1).
- JetBrains Mono: [upstream](https://github.com/google/fonts/tree/main/ofl/jetbrainsmono), `JetBrainsMono-OFL.txt` (SIL OFL 1.1).
- Material Symbols Outlined: [upstream](https://github.com/google/material-design-icons), `MaterialSymbols-LICENSE.txt` (Apache 2.0).

`fonts.css` references only files in this directory. There is no external font request at runtime.

## Redesign typography

Noto Serif KR is downloaded from the [official Google Fonts source](https://github.com/google/fonts/tree/main/ofl/notoserifkr). `NotoSerifKR-OFL.txt` contains the upstream SIL OFL license. The variable font is locally subset to Latin, punctuation, Hangul Jamo/compatibility Jamo and all modern Hangul syllables, then compressed to `NotoSerifKR.woff2` using fontTools/Brotli. Weight range 200–900 and the full 11,172 modern Hangul syllables are retained. It is approximately 2.1 MB. No external font service is called at runtime.

The redesigned interface uses Merriweather for English/Turkish and Noto Serif KR for Korean. Turkish dotted/dotless I and ç/ğ/ö/ş/ü are present in the bundled Merriweather faces. The preceding Sans/Mono assets remain only for compatibility with retained markup; the shared learning shell uses serif typography. Material Symbols remain the locally licensed navigation/control icons.
