# Spiritual Turkish

Turkish learning for missionaries from abroad: Christian ministry, prayer, Bible discussion, testimony, discipleship and respectful faith conversations. English is the default teaching language; Korean is a complete alternative. Turkish remains the target language. The cream, pine and sage interface and existing workshops are retained.

## Implemented lessons

1. Conversation repair and clarification
2. Tea, hospitality and invitations
3. Asking permission to pray
4. Prayer during illness and practical support
5. Personal testimony
6. Reading the lost sheep story together
7. Faith vocabulary and explaining grace
8. Explaining “Son of God”
9. Manuscripts, translations and honest uncertainty
10. Helping a new believer take a next step

Every lesson contains an objective, prerequisites, full Turkish text, English and Korean translations and explanations, grammar/morphology/register notes, word breakdowns (literal glosses distinguished from natural meaning), reusable patterns, three guided exercises with reasons and retry, role-play branches, and an independent task with a model and five-category self-assessment. Multiple valid answers are accepted where appropriate. Open responses use self-review rather than exact-match grading.

The proposed 32-lesson pathway is a roadmap, not an available course. These ten lessons assume basic Turkish alphabet, vowel harmony, cases and tense knowledge. The original 24 supplementary workshop entries remain available: pronunciation, seven ministry simulator conversations, culture/worldview, Bible grammar, prayer assembly (27 options, three presets, five situational prayers), and Turkish spelling/proofreading.

## Language, progress and audio

Choose **Teaching language / 학습 언어** in the curriculum menu. The choice persists and updates navigation, instructions, explanations, feedback and controls, including retained workshops.

Visits, practice and completion are separate. Opening a lesson never completes it. Completion requires reviewing all guided exercises successfully, writing an original response, reporting performance of the independent task, and self-assessing every rubric category at 2. This is reported task performance, not certified proficiency. Overall progress counts the ten ministry tasks; supplementary workshops record visits/practice without claiming mastery. No conversion outcome or numeric “spiritual wisdom” is scored.

Speech is browser **synthetic Turkish TTS**, with play, stop and speed controls. A Turkish voice must be available; unavailable synthesis has a readable fallback. There are no native recordings or pronunciation assessments. Optional speech recognition compares recognised text only and may depend on browser support, network access and microphone permission.

State is local to the browser/device; there is no account sync or backend:

| Storage key | Purpose |
| --- | --- |
| `spiritual_turkish_language` | Persistent English/Korean choice |
| `spiritual_turkish_learning_v2` | Stable lesson/exercise IDs, visits, practice, answers, drafts, rubric and completion |
| `spiritual_turkish_prayers` | Existing saved prayers, preserved without rewriting |
| `spiritual_turkish_notebook` | Local grammar notebook |

Recognised earlier progress keys migrate conservatively to visits, never mastery, because opening-based completion is not evidence of task performance. Malformed progress is ignored without deleting the original key; unavailable storage keeps lessons usable for the session. Saved prayers are not part of that migration.

## Run and validate

Static HTML/CSS/vanilla JavaScript remains compatible with the existing GitHub Pages architecture. No runtime framework, paid API or backend is added. CSS and existing fonts/icons are local, avoiding a Tailwind runtime CDN and external font failures.

```sh
node server.js
# Open http://localhost:3000
```

Development checks (Node.js 24):

```sh
npm ci
npm test
npm run build:css
npx playwright install chromium
# Keep node server.js running in another terminal:
npm run test:browser
```

`PLAYWRIGHT_MODULE` may point to an existing Playwright package. Optional `SCREENSHOT_DIR` saves review screenshots. The browser suite checks every new lesson in both languages at 375, 390, 768 and 1440 px; feedback, retry, alternative answers, rubric completion, reload/migration, existing prayers/workshops, keyboard menu/focus, synthetic speech and fallback, assets and browser errors. CI checks content and browser behaviour; it does not deploy.

## Content and sources

See [EDITORIAL.md](EDITORIAL.md) for audit reconciliation, material editorial changes and authoritative references. Christian doctrine, illustrations, testimony and historical evidence are distinguished. The lost sheep text is explicitly a simplified paraphrase of Luke 15:3–7. Existing grammar passages are labelled teaching adaptations with an external named-edition link; no verified quotation or new Bible reproduction rights are claimed.

Turkish and Korean specialist review remains pending. Historical and religious terminology is sourced, but lessons do not describe every Turkish person or Muslim. Learners must use their own true experiences for testimony. Font licenses and provenance are in [vendor](vendor/README.md).

## 한국어 안내

외국인 선교사의 기독교 사역을 위한 터키어 학습 사이트입니다. 기본 설명 언어는 영어이며 메뉴의 **학습 언어**에서 한국어를 선택하면 수업, 설명, 연습 피드백과 기존 워크숍도 한국어로 바뀝니다. 열 개의 설명형 사역 수업과 기존 워크숍을 제공합니다. 32개 수업 계획은 로드맵입니다.

방문·연습·완료는 구별됩니다. 완료에는 안내 연습 검토, 자신의 답, 독립 과제 수행과 자기 평가가 필요하며 공인 숙달 인증이 아닙니다. 기도문과 학습 기록은 해당 브라우저에 저장됩니다. 음성은 터키어 합성 음성이며 원어민 녹음이나 발음 평가가 아닙니다. 터키어와 한국어 전문가 검토는 아직 필요합니다.
