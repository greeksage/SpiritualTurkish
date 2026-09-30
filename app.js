/**
 * Spiritual Turkish - Main Application Controller
 * Handles DOM rendering, Tab switching, Quizzes, Scenarios, Syntax Parsing, and Prayer Builder
 */

document.addEventListener('DOMContentLoaded', () => {
  // State variables
  const state = {
    currentTab: 'tab-pronunciation',
    showKoreanInSimulator: true,

    // Tab 1 state
    oxAnswers: {}, // { qId: 'O' or 'X' }
    activeSpeechTarget: 'Müjde',
    isListening: false,

    // Tab 2 state
    currentScenarioId: 'scenario-1',
    scenarioStep: 0,
    scenarioScore: 0,
    selectedChoice: null,
    scenarioHistory: [],

    // Tab 3 state
    activeAhiretStage: 1,

    // Tab 4 state
    activeVerseId: 'rom-6-4',
    selectedTokenIndex: 0,
    flippedCards: {}, // { cardIndex: true/false }
    unluAnswers: {}, // { quizId: { value: '', isCorrect: null } }

    // Tab 5 state
    assembledPrayer: [
      APP_DATA.prayer.steps[0].options[0].tr,
      APP_DATA.prayer.steps[1].options[0].tr,
      APP_DATA.prayer.steps[2].options[0].tr,
      APP_DATA.prayer.steps[3].options[0].tr,
      APP_DATA.prayer.steps[4].options[0].tr,
      APP_DATA.prayer.steps[5].options[0].tr
    ],
    savedPrayers: [],

    // Tab 6 (Orthography) state
    orthoCategory: 'all',
    orthoQuizAnswers: {}, // { qId: 'O' or 'X' }
    activeProofreadingSentenceIdx: 0,
    proofreadingFoundErrors: { 0: {}, 1: {}, 2: {} },
    proofreadingScore: 0
  };

  // -----------------------------------------------------------
  // Helper: Toast Notifications
  // -----------------------------------------------------------
  function showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    const bgClass = type === 'success' ? 'bg-emerald-600' : type === 'error' ? 'bg-rose-600' : 'bg-slate-800 border border-slate-700';
    toast.className = `${bgClass} text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-sm font-medium transition-all duration-300 transform translate-y-3 opacity-0 pointer-events-auto max-w-sm`;
    toast.innerHTML = `
      <span>${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
      <p class="flex-1">${message}</p>
    `;

    container.appendChild(toast);
    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-3', 'opacity-0');
    });

    setTimeout(() => {
      toast.classList.add('translate-y-3', 'opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // -----------------------------------------------------------
  // Tab Management
  // -----------------------------------------------------------
  const tabButtons = document.querySelectorAll('[data-tab-target]');
  const tabPanes = document.querySelectorAll('.tab-pane');

  function switchTab(targetId) {
    state.currentTab = targetId;
    tabButtons.forEach(btn => {
      const isTarget = btn.getAttribute('data-tab-target') === targetId;
      btn.setAttribute('aria-selected', isTarget);
      if (isTarget) {
        btn.classList.add('tab-active', 'text-emerald-400');
        btn.classList.remove('text-slate-400', 'hover:text-slate-200');
      } else {
        btn.classList.remove('tab-active', 'text-emerald-400');
        btn.classList.add('text-slate-400', 'hover:text-slate-200');
      }
    });

    tabPanes.forEach(pane => {
      if (pane.id === targetId) {
        pane.classList.remove('hidden');
      } else {
        pane.classList.add('hidden');
      }
    });

    window.audioEngine.playClickSound();
  }

  // Expose switchTab globally
  window.switchTab = switchTab;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab-target');
      switchTab(target);
    });
  });

  // -----------------------------------------------------------
  // TAB 1: 발음 클리닉 (Pronunciation Lab)
  // -----------------------------------------------------------
  function initPronunciationLab() {
    renderOXQuiz();
    renderSyllables();
    renderSapkaComparator();
    initSpeechPracticeLab();
  }

  // 1. OX Quiz
  function renderOXQuiz() {
    const container = document.getElementById('ox-quiz-container');
    if (!container) return;

    container.innerHTML = APP_DATA.pronunciation.oxQuiz.map((item, idx) => {
      const userAnswer = state.oxAnswers[item.id];
      const isAnswered = userAnswer !== undefined;
      const isCorrect = isAnswered && userAnswer === item.answer;

      return `
        <div class="glass-panel p-5 rounded-2xl transition-all duration-300 hover:border-slate-600">
          <div class="flex items-start justify-between gap-4">
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-1.5">
                <span class="px-2 py-0.5 text-xs font-semibold rounded bg-slate-700 text-emerald-400">문항 0${idx + 1}</span>
                <span class="text-xs text-slate-400 font-mono">${item.ipa}</span>
              </div>
              <h4 class="text-base font-semibold text-slate-100 mb-1">${item.question}</h4>
              <p class="text-xs text-slate-400 mb-3">단어: <span class="text-emerald-400 font-medium">${item.word}</span> (${item.translation})</p>
            </div>
            
            <button onclick="window.audioEngine.speakTurkish('${item.word}')" 
                    title="터키어 원어민 발음 듣기" 
                    class="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-emerald-400 hover:bg-slate-700 transition flex items-center justify-center shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
            </button>
          </div>

          <!-- OX Buttons -->
          <div class="flex items-center gap-3 mt-2">
            <button onclick="handleOXClick(${item.id}, 'O')" 
                    class="flex-1 py-2.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                      userAnswer === 'O' 
                        ? (item.answer === 'O' ? 'bg-emerald-600 text-white ring-2 ring-emerald-400' : 'bg-rose-600 text-white')
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }">
              <span>⭕</span> 그렇다 (O)
            </button>
            <button onclick="handleOXClick(${item.id}, 'X')" 
                    class="flex-1 py-2.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                      userAnswer === 'X' 
                        ? (item.answer === 'X' ? 'bg-emerald-600 text-white ring-2 ring-emerald-400' : 'bg-rose-600 text-white')
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }">
              <span>❌</span> 아니다 (X)
            </button>
          </div>

          <!-- Feedback & Reason -->
          ${isAnswered ? `
            <div class="mt-4 pt-3 border-t border-slate-700/60 transition-all duration-300">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xs font-bold px-2 py-0.5 rounded ${isCorrect ? 'bg-emerald-950 text-emerald-300 border border-emerald-700' : 'bg-rose-950 text-rose-300 border border-rose-700'}">
                  ${isCorrect ? '정답입니다! ✓' : `오답입니다 (정답: ${item.answer}) ✕`}
                </span>
              </div>
              <p class="text-sm text-slate-200 leading-relaxed mb-2">${item.reason}</p>
              <div class="bg-amber-950/40 border border-amber-800/50 p-2.5 rounded-lg text-xs text-amber-200 flex items-start gap-2">
                <span class="text-amber-400 shrink-0">💡</span>
                <span>${item.tip}</span>
              </div>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    // Update score badge
    const totalAnswered = Object.keys(state.oxAnswers).length;
    let correctCount = 0;
    APP_DATA.pronunciation.oxQuiz.forEach(q => {
      if (state.oxAnswers[q.id] === q.answer) correctCount++;
    });
    const scoreBadge = document.getElementById('ox-score-badge');
    if (scoreBadge) {
      scoreBadge.innerText = `${correctCount} / ${APP_DATA.pronunciation.oxQuiz.length} 정답`;
    }
  }

  window.handleOXClick = function(id, choice) {
    const item = APP_DATA.pronunciation.oxQuiz.find(q => q.id === id);
    if (!item) return;

    state.oxAnswers[id] = choice;
    if (choice === item.answer) {
      window.audioEngine.playCorrectSound();
    } else {
      window.audioEngine.playWrongSound();
    }
    renderOXQuiz();
  };

  // 2. Syllable Segmentation (Hece)
  function renderSyllables() {
    const container = document.getElementById('syllables-container');
    if (!container) return;

    container.innerHTML = APP_DATA.pronunciation.syllables.map(item => {
      const parts = item.segmented.split('-');
      const syllablesHtml = parts.map((s, idx) => `
        <button onclick="playSyllableRhythm('${s}')" 
                class="syllable-chunk px-3 py-1.5 rounded-lg bg-emerald-950/70 border border-emerald-700/60 text-emerald-300 font-bold text-sm tracking-wide shadow-sm hover:bg-emerald-800 hover:text-white transition">
          ${s}
        </button>
      `).join('<span class="text-slate-500 font-bold mx-0.5">•</span>');

      return `
        <div class="glass-panel p-4 rounded-xl flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-400">${item.syllableCount}음절 분절</span>
              <button onclick="window.audioEngine.speakTurkish('${item.word}')" class="text-slate-400 hover:text-emerald-400 transition" title="전체 발음">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
              </button>
            </div>
            <div class="flex items-center gap-1.5 mb-2 flex-wrap">
              ${syllablesHtml}
            </div>
            <p class="text-xs text-slate-300 mb-2 font-medium">${item.korean}</p>
          </div>
          <p class="text-[11px] text-slate-400 bg-slate-900/60 p-2 rounded border border-slate-800 leading-normal">
            ${item.rule}
          </p>
        </div>
      `;
    }).join('');
  }

  window.playSyllableRhythm = function(syllable) {
    window.audioEngine.playSyllableTap();
    window.audioEngine.speakTurkish(syllable, 0.9);
  };

  // Custom Syllable Splitter Tool
  const customSyllableBtn = document.getElementById('custom-syllable-btn');
  const customSyllableInput = document.getElementById('custom-syllable-input');
  const customSyllableResult = document.getElementById('custom-syllable-result');

  if (customSyllableBtn && customSyllableInput && customSyllableResult) {
    customSyllableBtn.addEventListener('click', () => {
      const val = customSyllableInput.value.trim();
      if (!val) return;

      const segmented = naiveTurkishHyphenate(val);
      customSyllableResult.classList.remove('hidden');
      customSyllableResult.innerHTML = `
        <div class="flex items-center justify-between gap-4 p-3 bg-emerald-950/40 border border-emerald-700/50 rounded-xl">
          <div>
            <span class="text-xs text-emerald-400 font-semibold">분절 결과:</span>
            <span class="text-lg font-bold text-white tracking-widest ml-2">${segmented}</span>
          </div>
          <button onclick="window.audioEngine.speakTurkish('${val}')" class="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 transition flex items-center gap-1.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
            발음 듣기
          </button>
        </div>
      `;
    });
  }

  // Basic Turkish Hyphenation rule approximation
  function naiveTurkishHyphenate(word) {
    const vowels = "aeıioöuüAEIİOÖUÜâîûÂÎÛ";
    let res = "";
    let i = 0;
    while (i < word.length) {
      res += word[i];
      if (i < word.length - 2) {
        const c0 = vowels.includes(word[i]);
        const c1 = vowels.includes(word[i + 1]);
        const c2 = vowels.includes(word[i + 2]);

        // V-CV -> V-C
        if (c0 && !c1 && c2) {
          res += "-";
        } else if (!c0 && !c1 && c2 && i > 0 && vowels.includes(word[i - 1])) {
          // VC-CV -> VC-
          res += "-";
        }
      }
      i++;
    }
    return res;
  }

  // 3. Şapka (^) Comparator
  function renderSapkaComparator() {
    const container = document.getElementById('sapka-comparator-container');
    if (!container) return;

    container.innerHTML = APP_DATA.pronunciation.sapkaPairs.map(pair => `
      <div class="glass-panel p-5 rounded-2xl border border-slate-700/70">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <!-- Without Şapka -->
          <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-400">단모음 (Kısa)</span>
              <div class="flex items-center gap-1">
                <button onclick="window.audioEngine.speakTurkish('${pair.without.word}', 0.75)" class="text-xs px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-amber-300" title="느리게">0.75x</button>
                <button onclick="window.audioEngine.speakTurkish('${pair.without.word}', 1.0)" class="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-emerald-400" title="보통속도">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                </button>
              </div>
            </div>
            <div class="flex items-baseline gap-2 mb-1">
              <h4 class="text-2xl font-bold text-slate-100">${pair.without.word}</h4>
              <span class="text-xs font-mono text-slate-400">${pair.without.ipa}</span>
            </div>
            <p class="text-sm font-semibold text-emerald-400 mb-2">${pair.without.meaning}</p>
            <p class="text-xs text-slate-400 italic">${pair.without.context}</p>
          </div>

          <!-- With Şapka -->
          <div class="p-4 rounded-xl bg-emerald-950/30 border border-emerald-700/50">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300">장모음 / 구개음화 (Uzun)</span>
              <div class="flex items-center gap-1">
                <button onclick="window.audioEngine.speakTurkish('${pair.with.word}', 0.75)" class="text-xs px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-amber-300" title="느리게">0.75x</button>
                <button onclick="window.audioEngine.speakTurkish('${pair.with.word}', 1.0)" class="p-1.5 rounded bg-emerald-800 hover:bg-emerald-700 text-white" title="보통속도">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                </button>
              </div>
            </div>
            <div class="flex items-baseline gap-2 mb-1">
              <h4 class="text-2xl font-bold text-amber-300">${pair.with.word}</h4>
              <span class="text-xs font-mono text-slate-400">${pair.with.ipa}</span>
            </div>
            <p class="text-sm font-semibold text-amber-400 mb-2">${pair.with.meaning}</p>
            <p class="text-xs text-slate-300 italic">${pair.with.context}</p>
          </div>
        </div>

        <div class="text-xs text-slate-300 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/80 leading-relaxed">
          <strong class="text-slate-200">구별 포인트:</strong> ${pair.explanation}
        </div>
      </div>
    `).join('');
  }

  // 4. Web Speech API Practice Lab
  function initSpeechPracticeLab() {
    const wordListContainer = document.getElementById('speech-words-container');
    const targetWordDisplay = document.getElementById('target-word-display');
    const targetKoreanDisplay = document.getElementById('target-korean-display');
    const targetTtsBtn = document.getElementById('target-tts-btn');
    const micRecordBtn = document.getElementById('mic-record-btn');
    const micStatus = document.getElementById('mic-status');
    const spokenTranscriptDisplay = document.getElementById('spoken-transcript');
    const speechScoreDisplay = document.getElementById('speech-score-display');
    const speechScoreBar = document.getElementById('speech-score-bar');
    const speechFeedbackDisplay = document.getElementById('speech-feedback');

    if (!wordListContainer) return;

    // Render word chips
    wordListContainer.innerHTML = APP_DATA.pronunciation.speechPracticeWords.map(w => `
      <button data-word="${w.turkish}" 
              class="px-3 py-1.5 rounded-lg text-xs font-medium transition border ${
                w.turkish === state.activeSpeechTarget 
                  ? 'bg-emerald-600 text-white border-emerald-500' 
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500'
              }">
        ${w.turkish} <span class="text-[10px] opacity-75">(${w.korean})</span>
      </button>
    `).join('');

    wordListContainer.querySelectorAll('[data-word]').forEach(chip => {
      chip.addEventListener('click', () => {
        const w = chip.getAttribute('data-word');
        setTargetWord(w);
      });
    });

    function setTargetWord(wordStr) {
      state.activeSpeechTarget = wordStr;
      const found = APP_DATA.pronunciation.speechPracticeWords.find(w => w.turkish === wordStr);
      if (targetWordDisplay) targetWordDisplay.innerText = wordStr;
      if (targetKoreanDisplay && found) targetKoreanDisplay.innerText = found.korean;

      // Update chips UI
      wordListContainer.querySelectorAll('[data-word]').forEach(chip => {
        if (chip.getAttribute('data-word') === wordStr) {
          chip.className = 'px-3 py-1.5 rounded-lg text-xs font-medium transition border bg-emerald-600 text-white border-emerald-500';
        } else {
          chip.className = 'px-3 py-1.5 rounded-lg text-xs font-medium transition border bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500';
        }
      });

      // Clear previous test
      if (spokenTranscriptDisplay) spokenTranscriptDisplay.innerText = '-';
      if (speechScoreDisplay) speechScoreDisplay.innerText = '0%';
      if (speechScoreBar) speechScoreBar.style.width = '0%';
      if (speechFeedbackDisplay) speechFeedbackDisplay.innerText = '마이크 버튼을 누르고 단어를 소리 내어 읽어보세요.';
    }

    if (targetTtsBtn) {
      targetTtsBtn.addEventListener('click', () => {
        window.audioEngine.speakTurkish(state.activeSpeechTarget);
      });
    }

    if (micRecordBtn) {
      micRecordBtn.addEventListener('click', () => {
        if (state.isListening) {
          window.audioEngine.stopListening();
          state.isListening = false;
          micRecordBtn.classList.remove('mic-recording', 'bg-rose-600');
          micRecordBtn.classList.add('bg-slate-800');
          if (micStatus) micStatus.innerText = '녹음 중지됨';
          return;
        }

        state.isListening = true;
        micRecordBtn.classList.add('mic-recording', 'bg-rose-600');
        micRecordBtn.classList.remove('bg-slate-800');
        if (micStatus) micStatus.innerText = '듣고 있습니다... 터키어로 말씀하세요 (tr-TR)';

        window.audioEngine.startListening(
          (spoken) => {
            state.isListening = false;
            micRecordBtn.classList.remove('mic-recording', 'bg-rose-600');
            micRecordBtn.classList.add('bg-slate-800');
            if (micStatus) micStatus.innerText = '음성 인식 완료';

            if (spokenTranscriptDisplay) spokenTranscriptDisplay.innerText = `"${spoken}"`;
            
            // Calculate similarity score
            const score = window.audioEngine.calculateSimilarity(state.activeSpeechTarget, spoken);
            if (speechScoreDisplay) speechScoreDisplay.innerText = `${score}%`;
            if (speechScoreBar) speechScoreBar.style.width = `${score}%`;

            if (score >= 85) {
              window.audioEngine.playCorrectSound();
              if (speechFeedbackDisplay) {
                speechFeedbackDisplay.innerHTML = `<span class="text-emerald-400 font-bold">대단합니다!</span> 원어민 수준의 정확하고 또렷한 발음입니다. (유사도: ${score}%)`;
              }
            } else if (score >= 50) {
              if (speechFeedbackDisplay) {
                speechFeedbackDisplay.innerHTML = `<span class="text-amber-400 font-bold">좋습니다!</span> 뜻이 통하는 발음입니다. 모음의 길이와 유성음을 의식하며 한 번 더 시도해 보세요. (유사도: ${score}%)`;
              }
            } else {
              window.audioEngine.playWrongSound();
              if (speechFeedbackDisplay) {
                speechFeedbackDisplay.innerHTML = `<span class="text-rose-400 font-bold">다시 시도해 보세요!</span> '원어민 발음 듣기'를 2~3회 반복해 듣고 천천히 소리 내어 보세요. (유사도: ${score}%)`;
              }
            }
          },
          (err) => {
            state.isListening = false;
            micRecordBtn.classList.remove('mic-recording', 'bg-rose-600');
            micRecordBtn.classList.add('bg-slate-800');
            if (micStatus) micStatus.innerText = '인식 대기 중';
            showToast(err, 'error');
          },
          () => {
            state.isListening = false;
            micRecordBtn.classList.remove('mic-recording', 'bg-rose-600');
            micRecordBtn.classList.add('bg-slate-800');
          }
        );
      });
    }

    // Set default target
    setTargetWord('Müjde');
  }

  // -----------------------------------------------------------
  // TAB 2: 복음 전도 시뮬레이터 (Evangelism Dialogue Simulator)
  // -----------------------------------------------------------
  function initSimulator() {
    renderScenarioSelector();
    renderCurrentScenario();

    const koToggleBtn = document.getElementById('sim-ko-toggle');
    if (koToggleBtn) {
      koToggleBtn.addEventListener('click', () => {
        state.showKoreanInSimulator = !state.showKoreanInSimulator;
        koToggleBtn.innerText = state.showKoreanInSimulator ? "한국어 번역 가리기" : "한국어 번역 보기";
        renderCurrentScenario();
      });
    }
  }

  function renderScenarioSelector() {
    const container = document.getElementById('scenario-selector-container');
    if (!container) return;

    container.innerHTML = APP_DATA.simulator.scenarios.map(s => {
      const isActive = s.id === state.currentScenarioId;
      return `
        <button onclick="switchScenario('${s.id}')" 
                class="p-4 rounded-xl text-left transition border ${
                  isActive 
                    ? 'bg-slate-800 border-emerald-500 shadow-lg glow-emerald' 
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-xs px-2 py-0.5 rounded font-bold ${isActive ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}">
              시나리오
            </span>
            <span class="text-xs text-slate-400 truncate">${s.npc.name}</span>
          </div>
          <h4 class="text-sm font-bold text-slate-100 line-clamp-1 mb-1">${s.title}</h4>
          <p class="text-xs text-slate-400 line-clamp-2">${s.subtitle}</p>
        </button>
      `;
    }).join('');
  }

  window.switchScenario = function(scId) {
    state.currentScenarioId = scId;
    state.scenarioStep = 0;
    state.scenarioScore = 0;
    state.selectedChoice = null;
    state.scenarioHistory = [];
    renderScenarioSelector();
    renderCurrentScenario();
    window.audioEngine.playClickSound();
  };

  function renderCurrentScenario() {
    const sc = APP_DATA.simulator.scenarios.find(s => s.id === state.currentScenarioId);
    const container = document.getElementById('active-scenario-view');
    if (!sc || !container) return;

    // Check if scenario finished
    if (state.scenarioStep >= sc.steps.length) {
      renderScenarioComplete(sc, container);
      return;
    }

    const currentStep = sc.steps[state.scenarioStep];
    const isStepAnswered = state.selectedChoice !== null;

    // 5-Color Book Special UI (if Scenario 4)
    let colorBookBanner = '';
    if (sc.id === 'scenario-4') {
      const colors = [
        { name: 'Altın (금색)', bg: 'bg-amber-400 text-slate-950', desc: '천국 & 영광' },
        { name: 'Siyah (검은색)', bg: 'bg-slate-950 text-slate-200 border border-slate-700', desc: '죄 & 어둠' },
        { name: 'Kırmızı (빨간색)', bg: 'bg-red-600 text-white', desc: '보혈 & 대속' },
        { name: 'Beyaz (흰색)', bg: 'bg-white text-slate-950', desc: '칭의 & 정결' },
        { name: 'Yeşil (초록색)', bg: 'bg-emerald-600 text-white', desc: '성장 & 새 생명' }
      ];
      colorBookBanner = `
        <div class="mb-4 p-3 bg-slate-900/80 rounded-xl border border-slate-800">
          <p class="text-xs font-semibold text-slate-300 mb-2">📖 글 없는 책 (5 Renk) 상징 팔레트:</p>
          <div class="grid grid-cols-5 gap-2 text-center text-xs">
            ${colors.map(c => `
              <div class="p-2 rounded-lg ${c.bg} font-bold shadow-sm">
                <div>${c.name.split(' ')[0]}</div>
                <div class="text-[10px] font-normal opacity-90">${c.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      <!-- Context & NPC Header -->
      <div class="glass-panel p-5 rounded-2xl mb-4 border border-slate-700/60">
        <div class="flex items-center justify-between gap-4 mb-3 pb-3 border-b border-slate-800">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl ${sc.npc.avatarBg} flex items-center justify-center text-white text-xl font-bold shadow-md">
              ${sc.npc.name.charAt(0)}
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-base font-bold text-slate-100">${sc.npc.name}</h3>
                <span class="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-emerald-400 font-medium">${sc.npc.role}</span>
              </div>
              <p class="text-xs text-slate-400">${sc.npc.desc}</p>
            </div>
          </div>
          
          <div class="text-right">
            <div class="text-xs text-slate-400">진행 단계</div>
            <div class="text-lg font-bold text-emerald-400">${state.scenarioStep + 1} / ${sc.steps.length}</div>
          </div>
        </div>

        <div class="bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-xs text-slate-300 mb-4 flex items-start gap-2">
          <span class="text-amber-400">📍</span>
          <span><strong>상황 배경:</strong> ${sc.context}</span>
        </div>

        ${colorBookBanner}

        <!-- NPC Speech Bubble -->
        <div class="relative bg-slate-800/90 p-4 rounded-2xl border border-slate-700">
          <div class="flex items-start justify-between gap-3">
            <div class="flex-1">
              <span class="text-xs font-semibold text-emerald-400 mb-1 block">${sc.npc.name}의 말:</span>
              <p class="text-base font-medium text-white leading-relaxed mb-2 font-serif-spiritual">
                "${currentStep.npcSpeech}"
              </p>
              ${state.showKoreanInSimulator ? `
                <p class="text-xs text-slate-300 italic pt-1 border-t border-slate-700/60">
                  "${currentStep.npcSpeechKo}"
                </p>
              ` : ''}
            </div>
            <button onclick="window.audioEngine.speakTurkish(\`${currentStep.npcSpeech.replace(/"/g, '')}\`)" 
                    class="p-2.5 rounded-xl bg-slate-700 text-slate-200 hover:text-emerald-400 hover:bg-slate-600 transition shrink-0" 
                    title="터키어 음성 듣기">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- User Choice Options -->
      <div class="mb-4">
        <h4 class="text-sm font-bold text-slate-300 mb-3 flex items-center gap-2">
          <span>✝️</span> 당신의 복음적 응답을 선택하세요 (3가지 옵션):
        </h4>
        <div class="flex flex-col gap-3">
          ${currentStep.choices.map((c, idx) => {
            const isSelected = state.selectedChoice && state.selectedChoice.id === c.id;
            let choiceStyle = 'bg-slate-800/80 border-slate-700 hover:border-slate-500';
            
            if (isStepAnswered) {
              if (c.feedbackType === 'best') {
                choiceStyle = 'bg-emerald-950/60 border-emerald-600 text-emerald-200';
              } else if (isSelected && c.feedbackType !== 'best') {
                choiceStyle = 'bg-rose-950/60 border-rose-600 text-rose-200';
              } else {
                choiceStyle = 'opacity-50 bg-slate-900 border-slate-800';
              }
            }

            return `
              <button onclick="handleSimulatorChoice('${c.id}')" 
                      ${isStepAnswered ? 'disabled' : ''}
                      class="p-4 rounded-xl text-left transition-all border ${choiceStyle} flex flex-col gap-1.5 shadow-sm group">
                <div class="flex items-center justify-between gap-2">
                  <span class="text-xs font-bold px-2 py-0.5 rounded bg-slate-700 text-slate-300 group-hover:bg-emerald-600 group-hover:text-white transition">
                    응답 0${idx + 1}
                  </span>
                  <div class="flex items-center gap-2">
                    <button type="button" onclick="event.stopPropagation(); window.audioEngine.speakTurkish(\`${c.text.replace(/"/g, '')}\`)" class="text-slate-400 hover:text-emerald-400" title="듣기">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                    </button>
                    ${isStepAnswered ? `<span class="text-xs font-bold ${c.score > 0 ? 'text-emerald-400' : 'text-rose-400'}">${c.score > 0 ? '+' : ''}${c.score}점</span>` : ''}
                  </div>
                </div>
                <p class="text-sm font-semibold text-slate-100">${c.text}</p>
                ${state.showKoreanInSimulator ? `
                  <p class="text-xs text-slate-400 italic">${c.korean}</p>
                ` : ''}
              </button>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Feedback Area (Revealed after selection) -->
      ${isStepAnswered ? `
        <div class="glass-panel p-5 rounded-2xl border border-slate-700 animate-fadeIn">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold px-2.5 py-1 rounded-full ${
              state.selectedChoice.feedbackType === 'best' 
                ? 'bg-emerald-600 text-white' 
                : state.selectedChoice.feedbackType === 'neutral'
                ? 'bg-amber-600 text-white'
                : 'bg-rose-600 text-white'
            }">
              ${state.selectedChoice.feedbackType === 'best' ? '탁월한 응답! (최고 점수)' : state.selectedChoice.feedbackType === 'neutral' ? '보통의 응답' : '주의가 필요한 응답'}
            </span>

            <span class="text-sm font-bold text-slate-200">
              현재 영적 지혜 지수: <span class="text-emerald-400">${state.scenarioScore}점</span>
            </span>
          </div>

          <p class="text-sm text-slate-200 leading-relaxed mb-3">
            ${state.selectedChoice.feedback}
          </p>

          <div class="bg-emerald-950/40 border border-emerald-800/60 p-3 rounded-xl text-xs text-emerald-300 mb-4 flex items-start gap-2.5">
            <span class="text-base shrink-0">📖</span>
            <div>
              <strong class="font-bold text-emerald-200">신학 & 사역 팁:</strong>
              <p class="mt-0.5 leading-normal">${state.selectedChoice.theologyTip}</p>
            </div>
          </div>

          <div class="flex justify-end">
            <button onclick="advanceSimulatorStep()" 
                    class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-lg flex items-center gap-2 transition">
              <span>다음 단계 진행하기</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>
        </div>
      ` : ''}
    `;
  }

  window.handleSimulatorChoice = function(choiceId) {
    const sc = APP_DATA.simulator.scenarios.find(s => s.id === state.currentScenarioId);
    if (!sc) return;
    const currentStep = sc.steps[state.scenarioStep];
    const choice = currentStep.choices.find(c => c.id === choiceId);
    if (!choice) return;

    state.selectedChoice = choice;
    state.scenarioScore += choice.score;
    state.scenarioHistory.push({
      step: state.scenarioStep,
      choice: choice
    });

    if (choice.feedbackType === 'best') {
      window.audioEngine.playCorrectSound();
    } else {
      window.audioEngine.playWrongSound();
    }

    renderCurrentScenario();
  };

  window.advanceSimulatorStep = function() {
    state.scenarioStep++;
    state.selectedChoice = null;
    window.audioEngine.playClickSound();
    renderCurrentScenario();
  };

  function renderScenarioComplete(sc, container) {
    window.audioEngine.playCorrectSound();
    const maxScore = sc.steps.length * 35;
    const scorePct = Math.round((Math.max(0, state.scenarioScore) / maxScore) * 100);

    let rankTitle = "성숙한 복음 전도자 (Müjde Elçisi)";
    let rankDesc = "무슬림의 문화와 세계관을 깊이 이해하고 성령의 지혜로 복음의 핵심을 선포하셨습니다!";
    if (scorePct < 60) {
      rankTitle = "수습 전도자 (Öğrenci)";
      rankDesc = "진리에 대한 열정은 귀하나 문화적 공감과 적절한 비유 활용을 더 연습해 보세요.";
    } else if (scorePct < 85) {
      rankTitle = "지혜로운 변증가 (Savunucu)";
      rankDesc = "상대방의 마음 문을 열고 복음의 다리를 놓는 훌륭한 대화를 이끌었습니다.";
    }

    container.innerHTML = `
      <div class="glass-panel p-8 rounded-2xl text-center border border-emerald-500/40 glow-emerald animate-fadeIn">
        <div class="w-20 h-20 rounded-full bg-emerald-600/20 border-2 border-emerald-400 mx-auto flex items-center justify-center text-3xl mb-4">
          🕊️
        </div>
        <span class="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1 block">시나리오 완료</span>
        <h3 class="text-2xl font-bold text-white mb-2">${sc.title}</h3>
        <p class="text-sm text-slate-300 max-w-lg mx-auto mb-6">${sc.subtitle}</p>

        <!-- Score summary -->
        <div class="bg-slate-900/80 p-5 rounded-2xl max-w-md mx-auto border border-slate-800 mb-6">
          <div class="text-xs text-slate-400 mb-1">최종 영적 지혜 지수</div>
          <div class="text-4xl font-extrabold text-emerald-400 mb-2">${state.scenarioScore}점</div>
          <div class="w-full bg-slate-800 rounded-full h-2.5 mb-3">
            <div class="bg-gradient-to-r from-emerald-500 to-teal-400 h-2.5 rounded-full" style="width: ${Math.min(100, Math.max(10, scorePct))}%"></div>
          </div>
          <div class="inline-block px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 font-bold text-xs border border-emerald-800 mb-2">
            ${rankTitle}
          </div>
          <p class="text-xs text-slate-300">${rankDesc}</p>
        </div>

        <div class="flex items-center justify-center gap-3">
          <button onclick="switchScenario('${sc.id}')" 
                  class="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition border border-slate-700">
            🔄 시나리오 다시 하기
          </button>
          <button onclick="switchTab('tab-prayer')" 
                  class="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition shadow-lg flex items-center gap-2">
            <span>기도문 빌더로 영혼 품기</span>
            <span>→</span>
          </button>
        </div>
      </div>
    `;
  }

  // -----------------------------------------------------------
  // TAB 3: 문화 & 세계관 브릿지 (Worldview Explorer)
  // -----------------------------------------------------------
  function initWorldviewExplorer() {
    renderWorldviewConcepts();
    renderAhiretTimeline();
  }

  function renderWorldviewConcepts() {
    // 1. Kul Hakki
    const kulHakkiData = APP_DATA.worldview.concepts.find(c => c.id === 'kul-hakki');
    const kulHakkiBox = document.getElementById('kul-hakki-content');
    if (kulHakkiData && kulHakkiBox) {
      kulHakkiBox.innerHTML = `
        <div class="glass-panel p-6 rounded-2xl border border-slate-700">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-3xl">${kulHakkiData.icon}</span>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-lg font-bold text-white">${kulHakkiData.title}</h3>
                <span class="text-xs px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 font-semibold">${kulHakkiData.badge}</span>
              </div>
              <p class="text-xs text-slate-400">${kulHakkiData.subtitle}</p>
            </div>
          </div>

          <p class="text-sm text-slate-200 leading-relaxed mb-4 p-3 bg-slate-900/60 rounded-xl border border-slate-800">
            ${kulHakkiData.summary}
          </p>

          <div class="space-y-3 mb-4">
            ${kulHakkiData.details.map(d => `
              <div class="p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/60">
                <h4 class="text-xs font-bold text-emerald-400 mb-1">${d.heading}</h4>
                <p class="text-xs text-slate-300 leading-relaxed">${d.text}</p>
              </div>
            `).join('')}
          </div>

          <!-- Dialogue Practice -->
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold text-slate-300">💬 현지 대화 실습 (Hakkını helal et):</span>
              <button onclick="window.audioEngine.speakTurkish(\`${kulHakkiData.sampleDialogue.tr.replace(/\n/g, ' ')}\`)" 
                      class="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xs flex items-center gap-1.5 transition">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                대화 듣기
              </button>
            </div>
            <pre class="text-xs text-emerald-300 font-mono whitespace-pre-wrap leading-relaxed mb-2">${kulHakkiData.sampleDialogue.tr}</pre>
            <pre class="text-xs text-slate-400 whitespace-pre-wrap leading-relaxed">${kulHakkiData.sampleDialogue.ko}</pre>
          </div>
        </div>
      `;
    }

    // 2. Islamic Terms Matrix (Sevap, Günah, Helal, Haram)
    const termsData = APP_DATA.worldview.concepts.find(c => c.id === 'islamic-terms');
    const termsBox = document.getElementById('islamic-terms-grid');
    if (termsData && termsBox) {
      termsBox.innerHTML = termsData.matrix.map(m => `
        <div class="glass-panel p-4 rounded-xl border border-slate-700 hover:border-slate-500 transition">
          <div class="flex items-center justify-between mb-2">
            <h4 class="text-base font-bold text-white">${m.term}</h4>
            <span class="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-amber-300">${m.meaning}</span>
          </div>
          <div class="space-y-2 text-xs">
            <div class="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <strong class="text-slate-400 block mb-0.5">이슬람 세계관:</strong>
              <p class="text-slate-300 leading-normal">${m.islamView}</p>
            </div>
            <div class="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/60">
              <strong class="text-emerald-400 block mb-0.5">복음 브릿지 (Gospel Bridge):</strong>
              <p class="text-emerald-200 leading-normal">${m.christianBridge}</p>
            </div>
          </div>
        </div>
      `).join('');
    }

    // 3. Fidye vs Kefaret
    const fidyeData = APP_DATA.worldview.concepts.find(c => c.id === 'fidye-kefaret');
    const fidyeBox = document.getElementById('fidye-kefaret-content');
    if (fidyeData && fidyeBox) {
      fidyeBox.innerHTML = fidyeData.comparisons.map(item => `
        <div class="glass-panel p-5 rounded-2xl border border-slate-700">
          <div class="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
            <h4 class="text-lg font-bold text-amber-300">${item.term}</h4>
            <span class="text-xs text-slate-400">일상 의미: <span class="text-white font-medium">${item.dailyMeaning}</span></span>
          </div>
          <div class="space-y-3 text-xs leading-relaxed">
            <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <strong class="text-slate-400 block mb-1">이슬람 종교법(Fıkıh) 규정:</strong>
              <p class="text-slate-300">${item.islamicDef}</p>
            </div>
            <div class="p-3.5 rounded-xl bg-emerald-950/50 border border-emerald-800/70">
              <strong class="text-emerald-400 block mb-1">예수 그리스도의 구속 신학 연결:</strong>
              <p class="text-emerald-200">${item.christianBridge}</p>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  // 4. Ahiret 8-Stage Timeline
  function renderAhiretTimeline() {
    const ahiretData = APP_DATA.worldview.concepts.find(c => c.id === 'ahiret-journey');
    const stepperContainer = document.getElementById('ahiret-stepper');
    const detailsContainer = document.getElementById('ahiret-stage-details');

    if (!ahiretData || !stepperContainer || !detailsContainer) return;

    // Render stepper buttons
    stepperContainer.innerHTML = ahiretData.stages.map(st => {
      const isActive = st.num === state.activeAhiretStage;
      return `
        <button onclick="selectAhiretStage(${st.num})" 
                class="flex-1 min-w-[110px] p-2.5 rounded-xl text-center transition border ${
                  isActive 
                    ? 'bg-emerald-600 text-white border-emerald-400 shadow-md font-bold' 
                    : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-500'
                }">
          <div class="text-[10px] opacity-80">단계 0${st.num}</div>
          <div class="text-xs truncate">${st.name.split(' ')[0]}</div>
        </button>
      `;
    }).join('');

    // Render active stage detail card
    const current = ahiretData.stages.find(st => st.num === state.activeAhiretStage) || ahiretData.stages[0];
    detailsContainer.innerHTML = `
      <div class="glass-panel p-6 rounded-2xl border border-slate-700 animate-fadeIn">
        <div class="flex items-center justify-between mb-4">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="px-2 py-0.5 rounded text-xs font-bold bg-slate-800 text-emerald-400">8단계 중 0${current.num}단계</span>
              <button onclick="window.audioEngine.speakTurkish('${current.name}')" class="text-slate-400 hover:text-emerald-400" title="발음 듣기">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
              </button>
            </div>
            <h3 class="text-xl font-bold text-white">${current.name}</h3>
            <p class="text-xs text-slate-400">${current.desc}</p>
          </div>

          <div class="flex items-center gap-1">
            <button onclick="selectAhiretStage(${Math.max(1, current.num - 1)})" ${current.num === 1 ? 'disabled' : ''} class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-300">‹ 이전</button>
            <button onclick="selectAhiretStage(${Math.min(8, current.num + 1)})" ${current.num === 8 ? 'disabled' : ''} class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-300">다음 ›</button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
            <h4 class="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
              <span>☪️</span> 이슬람 종말관 & 전통 해석:
            </h4>
            <p class="text-xs text-slate-300 leading-relaxed">${current.islamic}</p>
          </div>

          <div class="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60">
            <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
              <span>✝️</span> 성경적 구원과 영생의 확신:
            </h4>
            <p class="text-xs text-emerald-200 leading-relaxed">${current.christian}</p>
          </div>
        </div>
      </div>
    `;
  }

  window.selectAhiretStage = function(stageNum) {
    state.activeAhiretStage = stageNum;
    window.audioEngine.playClickSound();
    renderAhiretTimeline();
  };

  // -----------------------------------------------------------
  // TAB 4: 성경 독해 & 문법 클리닉 (Syntax & Catechism)
  // -----------------------------------------------------------
  function initSyntaxCatechism() {
    renderScriptureSyntaxViewer();
    renderFlipCards();
    renderUnluQuiz();
  }

  // 1. Scripture Syntax Parsing
  function renderScriptureSyntaxViewer() {
    const verseSelector = document.getElementById('verse-selector-container');
    const verseContent = document.getElementById('verse-syntax-display');
    if (!verseSelector || !verseContent) return;

    // Selector buttons
    verseSelector.innerHTML = APP_DATA.syntax.verses.map(v => {
      const isActive = v.id === state.activeVerseId;
      return `
        <button onclick="selectVerse('${v.id}')" 
                class="px-4 py-2 rounded-xl text-xs font-bold transition border ${
                  isActive 
                    ? 'bg-emerald-600 text-white border-emerald-400 shadow-md' 
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500'
                }">
          ${v.reference.split(' ')[0]}
        </button>
      `;
    }).join('');

    const activeVerse = APP_DATA.syntax.verses.find(v => v.id === state.activeVerseId) || APP_DATA.syntax.verses[0];
    const selectedToken = activeVerse.tokens[state.selectedTokenIndex] || activeVerse.tokens[0];

    // Build interactive token pills
    const tokensHtml = activeVerse.tokens.map((tok, idx) => {
      const isSelected = idx === state.selectedTokenIndex;
      return `
        <button onclick="selectToken(${idx})" 
                class="px-3 py-1.5 rounded-lg text-sm font-semibold transition border ${
                  isSelected 
                    ? 'bg-emerald-600 text-white border-emerald-400 ring-2 ring-emerald-300/50 shadow-md' 
                    : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
                }">
          ${tok.word}
        </button>
      `;
    }).join('');

    verseContent.innerHTML = `
      <div class="glass-panel p-6 rounded-2xl border border-slate-700 mb-4">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold px-2.5 py-1 rounded bg-slate-800 text-emerald-400">${activeVerse.reference}</span>
          <button onclick="window.audioEngine.speakTurkish(\`${activeVerse.turkish.replace(/'/g, "\\'")}\`)" 
                  class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow transition">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
            성경 구절 전체 듣기
          </button>
        </div>

        <p class="text-xl font-bold text-white mb-2 leading-relaxed font-serif-spiritual tracking-wide">
          "${activeVerse.turkish}"
        </p>
        <p class="text-sm text-slate-300 italic mb-4">${activeVerse.korean}</p>

        <div class="p-3 bg-amber-950/30 border border-amber-800/50 rounded-xl mb-4 text-xs text-amber-200">
          <strong class="text-amber-400">문법 핵심 포인트:</strong> ${activeVerse.focusGrammar} — ${activeVerse.grammarRule}
        </div>

        <div>
          <span class="text-xs font-bold text-slate-400 block mb-2">단어별 형태소 분절 (클릭하여 상세 문법 분석 확인):</span>
          <div class="flex flex-wrap gap-2 mb-4">
            ${tokensHtml}
          </div>
        </div>

        <!-- Token detail card -->
        <div class="p-4 rounded-xl bg-slate-900 border border-emerald-500/50 glow-emerald animate-fadeIn">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-baseline gap-2">
              <span class="text-lg font-bold text-emerald-300">${selectedToken.word}</span>
              <button onclick="window.audioEngine.speakTurkish('${selectedToken.word}')" class="text-slate-400 hover:text-emerald-400" title="발음 듣기">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
              </button>
            </div>
            <span class="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300">${selectedToken.meaning}</span>
          </div>
          <div class="text-xs font-mono text-emerald-400/90 bg-slate-950 p-2.5 rounded-lg border border-slate-800 mb-2">
            분석: ${selectedToken.grammar}
          </div>
          <p class="text-xs text-slate-300 leading-normal">
            <strong class="text-slate-200">신학적 해설:</strong> ${activeVerse.theologyNote}
          </p>
        </div>
      </div>
    `;
  }

  window.selectVerse = function(vId) {
    state.activeVerseId = vId;
    state.selectedTokenIndex = 0;
    window.audioEngine.playClickSound();
    renderScriptureSyntaxViewer();
  };

  window.selectToken = function(idx) {
    state.selectedTokenIndex = idx;
    window.audioEngine.playClickSound();
    renderScriptureSyntaxViewer();
  };

  // 2. Vocabulary Dual-Meaning Flip Cards
  function renderFlipCards() {
    const container = document.getElementById('flip-cards-container');
    if (!container) return;

    container.innerHTML = APP_DATA.syntax.flipCards.map((card, idx) => {
      const isFlipped = !!state.flippedCards[idx];
      return `
        <div class="perspective-1000 h-80 cursor-pointer ${isFlipped ? 'flipped' : ''}" onclick="toggleCardFlip(${idx})">
          <div class="flip-card-inner relative w-full h-full transform-style-3d">
            <!-- Front Face: Daily Life -->
            <div class="absolute inset-0 w-full h-full backface-hidden glass-panel p-5 rounded-2xl border border-slate-700 flex flex-col justify-between hover:border-slate-500 shadow-xl transition-all">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-400">일상 터키어 용례</span>
                  <button onclick="event.stopPropagation(); window.audioEngine.speakTurkish('${card.word}')" class="text-slate-400 hover:text-emerald-400" title="발음 듣기">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                  </button>
                </div>
                <h4 class="text-2xl font-bold text-white mb-1">${card.word}</h4>
                <p class="text-xs text-slate-400 font-mono mb-3">${card.root}</p>

                <p class="text-xs text-slate-200 mb-2 leading-relaxed">
                  <strong class="text-amber-400">일상 의미:</strong> ${card.dailyDesc}
                </p>
                <div class="p-2 rounded bg-slate-900/80 border border-slate-800 text-xs text-slate-300 italic">
                  "${card.dailyExample}"
                </div>
              </div>

              <div class="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-emerald-400 font-semibold">
                <span>🔄 클릭하여 기독교 신학적 의미 확인</span>
                <span>↻</span>
              </div>
            </div>

            <!-- Back Face: Christian Theology -->
            <div class="absolute inset-0 w-full h-full backface-hidden rotate-y-180 glass-panel p-5 rounded-2xl border border-emerald-600/70 bg-emerald-950/40 flex flex-col justify-between shadow-2xl transition-all">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold px-2 py-0.5 rounded bg-emerald-900 text-emerald-300 border border-emerald-700">기독교 영적·신학적 의미</span>
                  <button onclick="event.stopPropagation(); window.audioEngine.speakTurkish('${card.word}')" class="text-emerald-400 hover:text-white" title="발음 듣기">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                  </button>
                </div>
                <h4 class="text-2xl font-bold text-emerald-300 mb-1">${card.word}</h4>
                <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                  <strong class="text-emerald-400">신학 의미:</strong> ${card.theoDesc}
                </p>
                <div class="p-2.5 rounded bg-slate-900/90 border border-emerald-900 text-xs text-emerald-200 italic">
                  "${card.theoExample}"
                </div>
              </div>

              <div class="pt-3 border-t border-emerald-800/60 flex items-center justify-between text-xs text-slate-400 font-semibold">
                <span>↺ 클릭하여 일상 용례로 돌아가기</span>
                <span>←</span>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  window.toggleCardFlip = function(idx) {
    state.flippedCards[idx] = !state.flippedCards[idx];
    window.audioEngine.playClickSound();
    renderFlipCards();
  };

  // 3. Grammar Interactive Quiz: Ünlü Düşmesi (모음 탈락 법칙)
  function renderUnluQuiz() {
    const container = document.getElementById('unlu-quiz-container');
    if (!container) return;

    container.innerHTML = APP_DATA.syntax.unluDusmesiQuiz.map(q => {
      const stateObj = state.unluAnswers[q.id] || { value: '', isCorrect: null };
      return `
        <div class="p-4 rounded-xl bg-slate-900/80 border ${
          stateObj.isCorrect === true 
            ? 'border-emerald-600 bg-emerald-950/20' 
            : stateObj.isCorrect === false 
            ? 'border-rose-600 bg-rose-950/20' 
            : 'border-slate-800'
        } flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-semibold text-slate-400">문항 0${q.id}</span>
              <span class="text-xs text-slate-400">${q.korean}</span>
            </div>
            
            <div class="flex items-center gap-2 text-lg font-bold text-white mb-3">
              <span class="text-emerald-400">${q.baseWord}</span>
              <span class="text-slate-500">${q.suffix}</span>
              <span class="text-slate-400">=</span>
              <span class="text-amber-300">?</span>
            </div>
          </div>

          <div>
            <div class="flex items-center gap-2 mb-2">
              <input type="text" 
                     id="unlu-input-${q.id}" 
                     placeholder="정답 입력..." 
                     value="${stateObj.value}"
                     class="flex-1 bg-slate-800 border border-slate-700 focus:border-emerald-500 rounded-lg px-3 py-1.5 text-xs text-white outline-none">
              <button onclick="checkUnluAnswer(${q.id})" class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition">
                확인
              </button>
            </div>

            ${stateObj.isCorrect !== null ? `
              <p class="text-[11px] ${stateObj.isCorrect ? 'text-emerald-400' : 'text-rose-400'} font-medium">
                ${stateObj.isCorrect ? '✓ 정답입니다!' : `✕ 오답입니다 (정답: ${q.correctAnswer})`} - ${q.explanation}
              </p>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');
  }

  window.checkUnluAnswer = function(qId) {
    const input = document.getElementById(`unlu-input-${qId}`);
    if (!input) return;
    const val = input.value.trim().toLowerCase();
    const q = APP_DATA.syntax.unluDusmesiQuiz.find(item => item.id === qId);
    if (!q) return;

    const isCorrect = val === q.correctAnswer.toLowerCase();
    state.unluAnswers[qId] = { value: val, isCorrect };

    if (isCorrect) {
      window.audioEngine.playCorrectSound();
    } else {
      window.audioEngine.playWrongSound();
    }
    renderUnluQuiz();
  };

  // Turkish Special Character Bar clicks
  document.querySelectorAll('[data-insert-char]').forEach(btn => {
    btn.addEventListener('click', () => {
      const char = btn.getAttribute('data-insert-char');
      const activeEl = document.activeElement;
      if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) {
        const start = activeEl.selectionStart || 0;
        const end = activeEl.selectionEnd || 0;
        const text = activeEl.value;
        activeEl.value = text.substring(0, start) + char + text.substring(end);
        activeEl.selectionStart = activeEl.selectionEnd = start + char.length;
        activeEl.focus();
      } else {
        showToast(`'${char}' 문자가 클립보드에 복사되었습니다!`, 'info');
        navigator.clipboard.writeText(char);
      }
    });
  });

  // -----------------------------------------------------------
  // TAB 5: 6단계 기도문 빌더 (Prayer Workshop)
  // -----------------------------------------------------------
  function initPrayerWorkshop() {
    renderPrayerFormulaSteps();
    renderAssembledPrayerPreview();
    initPrayerPresets();
    initPrayerStorage();
    initAmbientAudioPadUI();
  }

  function renderPrayerFormulaSteps() {
    const container = document.getElementById('prayer-steps-accordion');
    if (!container) return;

    container.innerHTML = APP_DATA.prayer.steps.map((st, sIdx) => {
      return `
        <div class="glass-panel p-4 rounded-xl border border-slate-700/80 mb-3">
          <div class="flex items-center justify-between mb-2">
            <div>
              <div class="flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-bold flex items-center justify-center">0${st.step}</span>
                <h4 class="text-sm font-bold text-white">${st.koreanName}</h4>
              </div>
              <p class="text-[11px] text-slate-400 mt-0.5">${st.desc}</p>
            </div>
          </div>

          <!-- Sentence Selection Pills -->
          <div class="grid grid-cols-1 gap-2 mt-3">
            ${st.options.map(opt => {
              const isSelected = state.assembledPrayer[sIdx] === opt.tr;
              return `
                <button onclick="setPrayerFormulaStep(${sIdx}, '${opt.tr.replace(/'/g, "\\'")}')" 
                        class="p-2.5 rounded-lg text-left text-xs transition border flex items-center justify-between gap-2 ${
                          isSelected 
                            ? 'bg-emerald-600 text-white border-emerald-400 font-semibold shadow-md' 
                            : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white'
                        }">
                  <div class="flex-1">
                    <span class="block">${opt.tr}</span>
                    <span class="text-[10px] opacity-75">${opt.ko}</span>
                  </div>
                  <button type="button" onclick="event.stopPropagation(); window.audioEngine.speakTurkish('${opt.tr.replace(/'/g, "\\'")}')" class="text-slate-400 hover:text-white" title="듣기">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                  </button>
                </button>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }).join('');
  }

  window.setPrayerFormulaStep = function(stepIdx, sentence) {
    state.assembledPrayer[stepIdx] = sentence;
    window.audioEngine.playClickSound();
    renderPrayerFormulaSteps();
    renderAssembledPrayerPreview();
  };

  function renderAssembledPrayerPreview() {
    const trTextarea = document.getElementById('assembled-tr-textarea');
    if (trTextarea) {
      trTextarea.value = state.assembledPrayer.join('\n\n');
    }
  }

  // Preset loading
  function initPrayerPresets() {
    const container = document.getElementById('prayer-presets-container');
    if (!container) return;

    container.innerHTML = APP_DATA.prayer.presets.map((preset, idx) => `
      <button onclick="loadPrayerPreset(${idx})" 
              class="p-3 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-emerald-500 text-left transition flex flex-col gap-1">
        <span class="text-xs font-bold text-emerald-400">${preset.title}</span>
        <span class="text-[11px] text-slate-400 line-clamp-1">${preset.desc}</span>
      </button>
    `).join('');
  }

  window.loadPrayerPreset = function(presetIdx) {
    const preset = APP_DATA.prayer.presets[presetIdx];
    if (!preset) return;
    state.assembledPrayer = [...preset.parts];
    renderPrayerFormulaSteps();
    renderAssembledPrayerPreview();
    window.audioEngine.playCorrectSound();
    showToast(`'${preset.title}' 템플릿이 로드되었습니다.`, 'success');
  };

  // Copy Prayer to Clipboard
  const copyPrayerBtn = document.getElementById('copy-prayer-btn');
  if (copyPrayerBtn) {
    copyPrayerBtn.addEventListener('click', () => {
      const trTextarea = document.getElementById('assembled-tr-textarea');
      if (!trTextarea) return;
      navigator.clipboard.writeText(trTextarea.value).then(() => {
        showToast("기도문이 클립보드에 복사되었습니다! ✓", "success");
      });
    });
  }

  // TTS Read Aloud Full Prayer
  const speakPrayerBtn = document.getElementById('speak-prayer-btn');
  if (speakPrayerBtn) {
    speakPrayerBtn.addEventListener('click', () => {
      const trTextarea = document.getElementById('assembled-tr-textarea');
      if (!trTextarea || !trTextarea.value.trim()) return;
      window.audioEngine.speakTurkish(trTextarea.value, 0.95);
      showToast("기도문을 터키어로 낭독합니다...", "info");
    });
  }

  // LocalStorage Save & Load
  function initPrayerStorage() {
    loadSavedPrayersFromStorage();
    renderSavedPrayersList();

    const savePrayerBtn = document.getElementById('save-prayer-btn');
    if (savePrayerBtn) {
      savePrayerBtn.addEventListener('click', () => {
        const trTextarea = document.getElementById('assembled-tr-textarea');
        if (!trTextarea || !trTextarea.value.trim()) return;

        const title = prompt("저장할 기도문의 제목을 입력하세요:", "나의 터키어 중보 기도");
        if (!title) return;

        const newPrayer = {
          id: Date.now().toString(),
          title: title.trim(),
          content: trTextarea.value,
          createdAt: new Date().toLocaleDateString('ko-KR')
        };

        state.savedPrayers.unshift(newPrayer);
        savePrayersToStorage();
        renderSavedPrayersList();
        showToast("기도문이 브라우저에 안전하게 저장되었습니다!", "success");
      });
    }
  }

  function loadSavedPrayersFromStorage() {
    try {
      const raw = localStorage.getItem('spiritual_turkish_prayers');
      if (raw) {
        state.savedPrayers = JSON.parse(raw);
      }
    } catch (e) {
      console.warn("Storage load error:", e);
    }
  }

  function savePrayersToStorage() {
    try {
      localStorage.setItem('spiritual_turkish_prayers', JSON.stringify(state.savedPrayers));
    } catch (e) {
      console.warn("Storage save error:", e);
    }
  }

  function renderSavedPrayersList() {
    const container = document.getElementById('saved-prayers-list');
    if (!container) return;

    if (state.savedPrayers.length === 0) {
      container.innerHTML = `
        <p class="text-xs text-slate-500 py-3 text-center">저장된 기도문이 없습니다. 직접 조합한 기도문을 저장해 보세요.</p>
      `;
      return;
    }

    container.innerHTML = state.savedPrayers.map(p => `
      <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3">
        <div class="flex-1 min-w-0">
          <h5 class="text-xs font-bold text-white truncate">${p.title}</h5>
          <p class="text-[10px] text-slate-400">${p.createdAt}</p>
        </div>
        <div class="flex items-center gap-1.5 shrink-0">
          <button onclick="loadSavedPrayerById('${p.id}')" class="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xs font-semibold">
            불러오기
          </button>
          <button onclick="deleteSavedPrayerById('${p.id}')" class="p-1 rounded bg-slate-800 hover:bg-rose-950 text-slate-400 hover:text-rose-400 text-xs">
            ✕
          </button>
        </div>
      </div>
    `).join('');
  }

  window.loadSavedPrayerById = function(id) {
    const item = state.savedPrayers.find(p => p.id === id);
    if (!item) return;
    const trTextarea = document.getElementById('assembled-tr-textarea');
    if (trTextarea) {
      trTextarea.value = item.content;
      showToast(`'${item.title}' 기도문을 불러왔습니다.`, 'success');
    }
  };

  window.deleteSavedPrayerById = function(id) {
    state.savedPrayers = state.savedPrayers.filter(p => p.id !== id);
    savePrayersToStorage();
    renderSavedPrayersList();
    showToast("기도문이 삭제되었습니다.", "info");
  };

  // Ambient Audio Pad UI
  function initAmbientAudioPadUI() {
    const ambientToggleBtn = document.getElementById('ambient-toggle-btn');
    const ambientVisualizer = document.getElementById('ambient-visualizer');
    const ambientVolSlider = document.getElementById('ambient-volume-slider');

    if (ambientToggleBtn) {
      ambientToggleBtn.addEventListener('click', () => {
        const isPlaying = window.audioEngine.toggleAmbientPrayerPad((playing) => {
          if (playing) {
            ambientToggleBtn.innerHTML = `
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>배경음악 끄기 (Ambient Pad)</span>
            `;
            ambientToggleBtn.className = "px-4 py-2 rounded-xl bg-emerald-700 text-white font-semibold text-xs flex items-center gap-2 shadow-lg transition";
            if (ambientVisualizer) ambientVisualizer.classList.remove('hidden');
          } else {
            ambientToggleBtn.innerHTML = `
              <span>🎵</span>
              <span>기도 배경음악 켜기 (Ambient Pad)</span>
            `;
            ambientToggleBtn.className = "px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs flex items-center gap-2 border border-slate-700 transition";
            if (ambientVisualizer) ambientVisualizer.classList.add('hidden');
          }
        });
      });
    }

    if (ambientVolSlider) {
      ambientVolSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        window.audioEngine.setAmbientVolume(val);
      });
    }
  }

  // -----------------------------------------------------------
  // TAB 6: 종교 용어 표기 규칙 (Dini Yazım Kuralları - MEB 2023)
  // -----------------------------------------------------------
  function initOrthographyLab() {
    renderOrthographyRules(state.orthoCategory);
    renderOrthographyAppendix();
    renderOrthographyQuiz();
    initProofreadingGame();
    initOrthoCategoryFilters();
  }

  function initOrthoCategoryFilters() {
    const filterContainer = document.getElementById('ortho-category-filters');
    if (!filterContainer) return;

    filterContainer.querySelectorAll('[data-ortho-cat]').forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-ortho-cat');
        state.orthoCategory = cat;

        filterContainer.querySelectorAll('[data-ortho-cat]').forEach(b => {
          if (b.getAttribute('data-ortho-cat') === cat) {
            b.className = "px-3 py-1 rounded-lg text-xs font-semibold transition bg-emerald-600 text-white shadow";
          } else {
            b.className = "px-3 py-1 rounded-lg text-xs font-semibold transition bg-slate-800 text-slate-300 hover:bg-slate-700";
          }
        });

        window.audioEngine.playClickSound();
        renderOrthographyRules(cat);
      });
    });
  }

  function renderOrthographyRules(category = 'all') {
    const container = document.getElementById('orthography-rules-container');
    if (!container || !APP_DATA.orthography || !APP_DATA.orthography.rules) return;

    const filtered = APP_DATA.orthography.rules.filter(rule => {
      if (category === 'all') return true;
      if (category === '대소문자') return rule.category === '대소문자';
      if (category === '아포스트로피') return rule.category === '아포스트로피';
      if (category === '철자법') return rule.category === '철자법';
      if (category === '합성어·기관') return ['띄어쓰기', '기관명', '축제·절기'].includes(rule.category);
      if (category === '지명·주소') return ['날짜 표기', '지명 표기', '주소 표기'].includes(rule.category);
      return true;
    });

    container.innerHTML = filtered.map(rule => `
      <div class="glass-panel p-5 rounded-2xl border border-slate-700/70 hover:border-slate-500 transition-all flex flex-col justify-between shadow-lg">
        <div>
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded text-xs font-bold bg-slate-800 text-emerald-400">규칙 0${rule.id}</span>
            <span class="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-medium">${rule.category}</span>
          </div>
          <h4 class="text-base font-bold text-white mb-0.5">${rule.title}</h4>
          <p class="text-xs text-slate-400 italic mb-3 font-mono">${rule.turkishTitle}</p>
          
          <p class="text-xs text-slate-200 mb-3 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 leading-relaxed">
            ${rule.summary}
          </p>

          <div class="space-y-1.5 mb-3 text-xs">
            <div class="p-2 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-emerald-200 flex items-start gap-2">
              <span class="font-bold text-emerald-400 shrink-0">⭕ 올바른 표기:</span>
              <span class="font-semibold">${rule.correct}</span>
            </div>
            <div class="p-2 rounded-lg bg-rose-950/30 border border-rose-800/50 text-rose-300 flex items-start gap-2">
              <span class="font-bold text-rose-400 shrink-0">❌ 흔한 오기:</span>
              <span>${rule.incorrect}</span>
            </div>
            ${rule.contrast ? `
              <div class="p-2 rounded-lg bg-amber-950/20 border border-amber-800/40 text-amber-200 text-[11px] leading-tight flex items-start gap-1.5">
                <span class="text-amber-400 shrink-0">⚖️</span>
                <span><strong>대조 분석:</strong> ${rule.contrast}</span>
              </div>
            ` : ''}
          </div>

          <div class="text-[11px] text-slate-300 leading-relaxed mb-3 whitespace-pre-line bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60">
            ${rule.explanation}
          </div>
        </div>

        <div class="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
          <span class="text-[11px] text-emerald-400 font-medium line-clamp-1 italic">${rule.biblicalRef}</span>
          <button onclick="window.audioEngine.speakTurkish('${rule.correct.split(',')[0].replace(/\[o\]/g, '').replace(/'/g, "\\'")}')" 
                  class="p-1.5 rounded-lg bg-slate-800 hover:bg-emerald-600 hover:text-white text-slate-300 text-xs shrink-0 transition" title="발음 듣기">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
          </button>
        </div>
      </div>
    `).join('');
  }

  function renderOrthographyAppendix() {
    const container = document.getElementById('orthography-appendix-container');
    if (!container || !APP_DATA.orthography || !APP_DATA.orthography.appendix) return;

    container.innerHTML = APP_DATA.orthography.appendix.items.map(item => `
      <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <h4 class="text-sm font-bold text-amber-300">${item.rule}</h4>
            <span class="text-xs font-mono text-slate-400">${item.turkish}</span>
          </div>
          <div class="text-2xl font-bold text-white mb-2 font-mono tracking-wider">${item.format}</div>
          <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 mb-2 leading-relaxed">
            <strong class="text-amber-400">한국어와의 대조:</strong> ${item.koreanComparison}
          </div>
          <div class="text-xs text-slate-400 italic">예시: ${item.example}</div>
        </div>
        <div class="mt-3 pt-2 border-t border-slate-800 flex justify-end">
          <button onclick="window.audioEngine.speakTurkish('${item.format.split(' ')[0]}')" class="text-xs px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1 transition">
            <span>🔊</span> 발음 듣기
          </button>
        </div>
      </div>
    `).join('');
  }

  function renderOrthographyQuiz() {
    const container = document.getElementById('orthography-quiz-container');
    if (!container || !APP_DATA.orthography || !APP_DATA.orthography.quiz) return;

    container.innerHTML = APP_DATA.orthography.quiz.map((q, idx) => {
      const userAnswer = state.orthoQuizAnswers[q.id];
      const isAnswered = userAnswer !== undefined;
      const isCorrect = isAnswered && userAnswer === q.answer;

      return `
        <div class="glass-panel p-5 rounded-2xl transition-all duration-300 hover:border-slate-600">
          <div class="flex items-start justify-between gap-4 mb-2">
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-1.5">
                <span class="px-2 py-0.5 text-xs font-semibold rounded bg-slate-700 text-emerald-400">문제 0${idx + 1}</span>
                <span class="text-xs text-slate-400">${q.ruleRef}</span>
              </div>
              <h4 class="text-sm font-semibold text-slate-100 leading-snug">${q.question}</h4>
            </div>
          </div>

          <div class="flex items-center gap-3 mt-3">
            <button onclick="handleOrthoQuizClick(${q.id}, 'O')" 
                    class="flex-1 py-2 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
                      userAnswer === 'O' 
                        ? (q.answer === 'O' ? 'bg-emerald-600 text-white ring-2 ring-emerald-400' : 'bg-rose-600 text-white')
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }">
              <span>⭕</span> 그렇다 (O)
            </button>
            <button onclick="handleOrthoQuizClick(${q.id}, 'X')" 
                    class="flex-1 py-2 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
                      userAnswer === 'X' 
                        ? (q.answer === 'X' ? 'bg-emerald-600 text-white ring-2 ring-emerald-400' : 'bg-rose-600 text-white')
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }">
              <span>❌</span> 아니다 (X)
            </button>
          </div>

          ${isAnswered ? `
            <div class="mt-3 pt-3 border-t border-slate-700/60 animate-fadeIn">
              <div class="flex items-center gap-2 mb-1.5">
                <span class="text-xs font-bold px-2 py-0.5 rounded ${isCorrect ? 'bg-emerald-950 text-emerald-300 border border-emerald-700' : 'bg-rose-950 text-rose-300 border border-rose-700'}">
                  ${isCorrect ? '정답입니다! ✓' : `오답입니다 (정답: ${q.answer}) ✕`}
                </span>
                <span class="text-xs text-emerald-400 font-semibold font-mono">올바른 표기: ${q.correctText}</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">${q.explanation}</p>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    // Update score badge
    let correctCount = 0;
    APP_DATA.orthography.quiz.forEach(q => {
      if (state.orthoQuizAnswers[q.id] === q.answer) correctCount++;
    });
    const badge = document.getElementById('ortho-quiz-badge');
    if (badge) {
      badge.innerText = `${correctCount} / ${APP_DATA.orthography.quiz.length} 정답`;
    }
  }

  window.handleOrthoQuizClick = function(id, choice) {
    const q = APP_DATA.orthography.quiz.find(item => item.id === id);
    if (!q) return;

    state.orthoQuizAnswers[id] = choice;
    if (choice === q.answer) {
      window.audioEngine.playCorrectSound();
    } else {
      window.audioEngine.playWrongSound();
    }
    renderOrthographyQuiz();
  };

  // Proofreading Trainer Game
  function initProofreadingGame() {
    renderProofreadingTabs();
    renderProofreadingBoard();

    const resetBtn = document.getElementById('proofreading-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.proofreadingFoundErrors[state.activeProofreadingSentenceIdx] = {};
        window.audioEngine.playClickSound();
        renderProofreadingBoard();
        showToast("현재 문장의 교정 기록을 초기화했습니다.", "info");
      });
    }

    const nextBtn = document.getElementById('proofreading-next-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        state.activeProofreadingSentenceIdx = (state.activeProofreadingSentenceIdx + 1) % APP_DATA.orthography.proofreadingGame.length;
        window.audioEngine.playClickSound();
        renderProofreadingTabs();
        renderProofreadingBoard();
      });
    }
  }

  function renderProofreadingTabs() {
    const tabsContainer = document.getElementById('proofreading-sentence-tabs');
    if (!tabsContainer || !APP_DATA.orthography || !APP_DATA.orthography.proofreadingGame) return;

    tabsContainer.innerHTML = APP_DATA.orthography.proofreadingGame.map((s, idx) => {
      const isActive = idx === state.activeProofreadingSentenceIdx;
      const foundCount = Object.keys(state.proofreadingFoundErrors[idx] || {}).length;
      const totalErrors = s.tokens.filter(t => t.isError).length;
      const isComplete = foundCount >= totalErrors;

      return `
        <button onclick="switchProofreadingSentence(${idx})" 
                class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-2 border ${
                  isActive 
                    ? 'bg-emerald-600 text-white border-emerald-400 shadow' 
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500'
                }">
          <span>문장 0${s.id}</span>
          <span class="text-[10px] px-1.5 py-0.2 rounded-full ${isComplete ? 'bg-emerald-950 text-emerald-300' : 'bg-slate-900 text-amber-300'} font-normal">
            ${isComplete ? '완료 ✓' : `${foundCount}/${totalErrors}`}
          </span>
        </button>
      `;
    }).join('');
  }

  window.switchProofreadingSentence = function(idx) {
    state.activeProofreadingSentenceIdx = idx;
    window.audioEngine.playClickSound();
    renderProofreadingTabs();
    renderProofreadingBoard();
  };

  function renderProofreadingBoard() {
    const currentSentence = APP_DATA.orthography.proofreadingGame[state.activeProofreadingSentenceIdx];
    const boardContainer = document.getElementById('proofreading-sentence-board');
    const translationEl = document.getElementById('proofreading-translation');
    const feedbackBox = document.getElementById('proofreading-feedback-box');
    const scoreDisplay = document.getElementById('proofreading-score-display');
    const remainingBadge = document.getElementById('proofreading-remaining-badge');

    if (!currentSentence || !boardContainer) return;

    if (!state.proofreadingFoundErrors[state.activeProofreadingSentenceIdx]) {
      state.proofreadingFoundErrors[state.activeProofreadingSentenceIdx] = {};
    }
    const currentFound = state.proofreadingFoundErrors[state.activeProofreadingSentenceIdx];

    const totalErrors = currentSentence.tokens.filter(t => t.isError).length;
    const foundCount = Object.keys(currentFound).length;
    const remaining = totalErrors - foundCount;

    if (scoreDisplay) scoreDisplay.innerText = `${state.proofreadingScore}점`;
    if (remainingBadge) {
      if (remaining === 0) {
        remainingBadge.className = "px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 font-bold text-[11px]";
        remainingBadge.innerText = "모든 오류 교정 완료! 🎉";
      } else {
        remainingBadge.className = "px-2 py-0.5 rounded-full bg-slate-800 text-amber-300 font-semibold text-[11px]";
        remainingBadge.innerText = `남은 교정 대상: ${remaining}개`;
      }
    }

    if (translationEl) {
      translationEl.innerText = `번역: "${currentSentence.translation}"`;
    }

    // Render tokens
    boardContainer.innerHTML = currentSentence.tokens.map((tok, tokIdx) => {
      const isFound = !!currentFound[tokIdx];

      if (tok.isError && isFound) {
        return `
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/80 border-2 border-emerald-500 text-emerald-200 text-sm font-bold shadow-md animate-fadeIn">
            <span class="line-through text-slate-400 text-xs">${tok.word}</span>
            <span>➔</span>
            <span class="text-emerald-300 font-extrabold underline">${tok.correct}</span>
            <span class="text-xs">✓</span>
          </span>
        `;
      } else {
        return `
          <button onclick="handleProofreadingTokenClick(${state.activeProofreadingSentenceIdx}, ${tokIdx})" 
                  class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 text-sm font-medium border border-slate-700 transition hover:border-emerald-500 hover:scale-105 active:scale-95 shadow-sm">
            ${tok.word}
          </button>
        `;
      }
    }).join('');

    // Discovered Rules Log
    if (feedbackBox) {
      const discoveredTokens = currentSentence.tokens.filter((t, idx) => t.isError && currentFound[idx]);
      if (discoveredTokens.length === 0) {
        feedbackBox.innerHTML = `
          <div class="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 text-center">
            문장 안에서 철자, 아포스트로피, 띄어쓰기, 대소문자 규정이 잘못된 단어를 찾아 클릭하세요.
          </div>
        `;
      } else {
        feedbackBox.innerHTML = `
          <div class="space-y-2">
            <span class="text-xs font-bold text-emerald-400 block">발견 및 교정된 맞춤법 규정:</span>
            ${discoveredTokens.map(t => `
              <div class="p-3 rounded-xl bg-emerald-950/40 border border-emerald-700/60 text-xs text-emerald-200 flex items-start gap-2 animate-fadeIn">
                <span class="text-emerald-400 font-bold shrink-0">✓ [교정: ${t.word} ➔ ${t.correct}]</span>
                <span class="text-slate-200">${t.rule}</span>
              </div>
            `).join('')}
          </div>
        `;
      }
    }
  }

  window.handleProofreadingTokenClick = function(sentenceIdx, tokIdx) {
    const currentSentence = APP_DATA.orthography.proofreadingGame[sentenceIdx];
    if (!currentSentence) return;
    const tok = currentSentence.tokens[tokIdx];
    if (!tok) return;

    if (!state.proofreadingFoundErrors[sentenceIdx]) {
      state.proofreadingFoundErrors[sentenceIdx] = {};
    }

    if (tok.isError) {
      if (state.proofreadingFoundErrors[sentenceIdx][tokIdx]) {
        showToast("이미 교정된 단어입니다!", "info");
      } else {
        state.proofreadingFoundErrors[sentenceIdx][tokIdx] = true;
        state.proofreadingScore += 25;
        window.audioEngine.playCorrectSound();
        showToast(`오탈자 발견! '${tok.word}' ➔ '${tok.correct}' (+25점)`, "success");
        renderProofreadingTabs();
        renderProofreadingBoard();

        const totalErrors = currentSentence.tokens.filter(t => t.isError).length;
        const foundCount = Object.keys(state.proofreadingFoundErrors[sentenceIdx]).length;
        if (foundCount >= totalErrors) {
          setTimeout(() => {
            window.audioEngine.playCorrectSound();
            showToast("🎉 축하합니다! 이 문장의 모든 맞춤법 오류를 완벽히 교정하셨습니다!", "success");
          }, 300);
        }
      }
    } else {
      window.audioEngine.playWrongSound();
      showToast(`'${tok.word}'(은)는 MEB 2023 규정상 올바른 표기입니다. 다른 단어를 찾아보세요.`, "info");
    }
  };

  // -----------------------------------------------------------
  // Initialize All Modules
  // -----------------------------------------------------------
  initPronunciationLab();
  initSimulator();
  initWorldviewExplorer();
  initSyntaxCatechism();
  initPrayerWorkshop();
  initOrthographyLab();

  // Initial tab activate
  switchTab(state.currentTab);
});
