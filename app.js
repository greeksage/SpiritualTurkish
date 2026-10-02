/**
 * Spiritual Turkish - Main Application Controller
 * Re-architected for Clean Modern Editorial & Warm Pastel Studio Theme
 */

document.addEventListener('DOMContentLoaded', () => {
  const escapeHTML = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  // State variables
  const state = {
    currentLessonId: 'ministry-01',
    completedLessons: new Set(),
    showKoreanInSimulator: true,

    // Chapter 1 state
    oxAnswers: {}, // { qId: 'O' or 'X' }
    activeSpeechTarget: 'Müjde',
    isListening: false,

    // Chapter 2 state
    currentScenarioId: 'scenario-circle',
    scenarioStep: 0,
    scenarioScore: 0,
    selectedChoice: null,
    scenarioHistory: [],

    // Chapter 3 state
    activeAhiretStage: 1,

    // Chapter 4 state
    activeVerseId: 'rom-6-4',
    selectedTokenIndex: 0,
    flippedCards: {}, // { cardIndex: true/false }
    unluAnswers: {}, // { quizId: { value: '', isCorrect: null } }

    // Chapter 5 state
    assembledPrayer: [
      APP_DATA.prayer.steps[0].options[0].tr,
      APP_DATA.prayer.steps[1].options[0].tr,
      APP_DATA.prayer.steps[2].options[0].tr,
      APP_DATA.prayer.steps[3].options[0].tr,
      APP_DATA.prayer.steps[4].options[0].tr,
      APP_DATA.prayer.steps[5].options[0].tr
    ],
    savedPrayers: [],

    // Chapter 6 (Orthography) state
    orthoCategory: 'all',
    orthoQuizAnswers: {}, // { qId: 'O' or 'X' }
    activeProofreadingSentenceIdx: 0,
    proofreadingFoundErrors: { 0: {}, 1: {}, 2: {} },
    proofreadingScore: 0
  };

  // -----------------------------------------------------------
  // Helper: Toast Notifications (Editorial Warm Style)
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
    const bgClass = type === 'success'
      ? 'bg-emerald-50 text-emerald-900 border border-emerald-300'
      : type === 'error'
      ? 'bg-rose-50 text-rose-900 border border-rose-300'
      : 'bg-white text-slate-800 border border-stone-200';

    toast.className = `${bgClass} px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 text-xs sm:text-sm font-medium transition-all duration-300 transform translate-y-3 opacity-0 pointer-events-auto max-w-sm`;
    toast.innerHTML = `
      <span class="font-bold">${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
      <p class="flex-1">${escapeHTML(message)}</p>
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

  async function copyText(value) {
    try {
      if(!navigator.clipboard?.writeText)throw new Error('unavailable');
      await navigator.clipboard.writeText(value);
      showToast(course.t('Copied to clipboard.','클립보드에 복사했습니다.'),'success');
    } catch {
      showToast(course.t('Clipboard unavailable or permission denied. Select the text and copy it manually.','클립보드를 사용할 수 없거나 권한이 거부되었습니다. 본문을 선택하고 직접 복사하세요.'),'info');
    }
  }
  // -----------------------------------------------------------
  // LMS Curriculum & Lesson Navigation Engine
  // -----------------------------------------------------------
  const LESSONS = [
    { id: 'ch1-1', chapter: 1, chapterName: '조음 & 발음 클리닉', title: '1.1 유성음 vs 무성음 (B/D/G OX)' },
    { id: 'ch1-2', chapter: 1, chapterName: '조음 & 발음 클리닉', title: '1.2 음절(Hece) 분절 훈련' },
    { id: 'ch1-3', chapter: 1, chapterName: '조음 & 발음 클리닉', title: '1.3 모자 부호(Şapka ^) 의미 구별' },
    { id: 'ch1-4', chapter: 1, chapterName: '조음 & 발음 클리닉', title: '1.4 Web Speech AI 음성 인식' },

    { id: 'ch2-1', chapter: 2, chapterName: '복음 전도 시뮬레이터', title: '2.1 천국과 구원의 확신 (원 비유)', scenarioId: 'scenario-circle' },
    { id: 'ch2-2', chapter: 2, chapterName: '복음 전도 시뮬레이터', title: '2.2 성경 왜곡설 & Milat (M.S. 2026)', scenarioId: 'scenario-2' },
    { id: 'ch2-3', chapter: 2, chapterName: '복음 전도 시뮬레이터', title: '2.3 선행 저울(Mizan) vs 십자가 은혜', scenarioId: 'scenario-3' },
    { id: 'ch2-4', chapter: 2, chapterName: '복음 전도 시뮬레이터', title: '2.4 크리스마스(Noel) vs 새해(Yılbaşı)', scenarioId: 'scenario-noel' },
    { id: 'ch2-5', chapter: 2, chapterName: '복음 전도 시뮬레이터', title: '2.5 마음의 공허함과 하나님의 형상', scenarioId: 'scenario-heart' },
    { id: 'ch2-6', chapter: 2, chapterName: '복음 전도 시뮬레이터', title: '2.6 구겨진 200리라 지폐의 가치', scenarioId: 'scenario-1' },
    { id: 'ch2-7', chapter: 2, chapterName: '복음 전도 시뮬레이터', title: '2.7 글 없는 책 (5가지 색상 복음)', scenarioId: 'scenario-4' },

    { id: 'ch3-1', chapter: 3, chapterName: '문화 & 세계관 브릿지', title: '3.1 4대 기본 규범 (Sevap/Günah)' },
    { id: 'ch3-2', chapter: 3, chapterName: '문화 & 세계관 브릿지', title: '3.2 Kul Hakkı & 탕감 문화' },
    { id: 'ch3-3', chapter: 3, chapterName: '문화 & 세계관 브릿지', title: '3.3 Ahiret (사후세계) 8단계 여정' },
    { id: 'ch3-4', chapter: 3, chapterName: '문화 & 세계관 브릿지', title: '3.4 종교법: Fidye vs Kefaret (대속)' },

    { id: 'ch4-1', chapter: 4, chapterName: '성경 구문 & 문법', title: '4.1 로마서 6:4 세례 형태소 분석' },
    { id: 'ch4-2', chapter: 4, chapterName: '성경 구문 & 문법', title: '4.2 모음 탈락(Ünlü Düşmesi) 퀴즈' },
    { id: 'ch4-3', chapter: 4, chapterName: '성경 구문 & 문법', title: '4.3 신학 어휘 360° 플립 카드' },

    { id: 'ch5-1', chapter: 5, chapterName: '6단계 기도문 스튜디오', title: '5.1 6단계 공식 가이드 & 템플릿' },
    { id: 'ch5-2', chapter: 5, chapterName: '6단계 기도문 스튜디오', title: '5.2 실시간 블록 조립 에디터 (TTS)' },
    { id: 'ch5-3', chapter: 5, chapterName: '6단계 기도문 스튜디오', title: '5.3 상황별 & 성도 양육 기도문 라이브러리' },

    { id: 'ch6-1', chapter: 6, chapterName: 'TDK 종교 표기 규정', title: '6.1 11대 핵심 맞춤법 규정' },
    { id: 'ch6-2', chapter: 6, chapterName: 'TDK 종교 표기 규정', title: '6.2 실전 O/X 맞춤법 퀴즈' },
    { id: 'ch6-3', chapter: 6, chapterName: 'TDK 종교 표기 규정', title: '6.3 실시간 오탈자 교정기 미니게임' },
  ];

  LESSONS.push(...ALL_LESSONS.map(l => ({id:l.id,chapter:7,chapterName:course.t('Explained ministry lessons','설명형 사역 수업'),title:course.text(l.title)})));
  window.selectLesson = selectLesson;

  function selectLesson(lessonId) {
    const idx = LESSONS.findIndex(l => l.id === lessonId);
    if (idx === -1) return;
    const lesson = LESSONS[idx];
    if (lesson.chapter === 7) { const content=ALL_LESSONS.find(l=>l.id===lessonId); lesson.title=course.text(content.title); lesson.chapterName=course.t("Explained ministry lessons","설명형 사역 수업"); }

    state.currentLessonId = lessonId;
    course.entry(lessonId).visited = true;
    course.select(lessonId);
    course.save();

    if (lesson.chapter !== 7) { lesson.title=window.legacyLessonTitle?.(lessonId) || lesson.title; lesson.chapterName=window.legacyChapterTitle?.(lesson.chapter) || lesson.chapterName; }

    // Expand active chapter group and collapse all others in sidebar
    document.querySelectorAll('.chapter-group').forEach(group => {
      const chapNum = parseInt(group.getAttribute('data-chapter'), 10);
      if (chapNum === lesson.chapter) {
        group.classList.add('expanded');
      } else {
        group.classList.remove('expanded');
      }
    });

    // Update in-chapter horizontal sub-tab bar
    document.querySelectorAll('.in-chapter-subtab').forEach(tab => {
      const tId = tab.getAttribute('data-subtab-id');
      if (tId === lessonId) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // Update Chapter group header active state
    document.querySelectorAll('.chapter-nav-item').forEach(cItem => {
      const cNum = parseInt(cItem.getAttribute('data-chapter-nav'), 10);
      const icon = cItem.querySelector('.chapter-icon');
      if (cNum === lesson.chapter) {
        cItem.classList.add('active');
        cItem.classList.remove('text-white/70');
        cItem.classList.add('text-white');
        if (icon) {
          icon.classList.add('text-accent-peach');
          icon.classList.remove('text-white/70');
        }
      } else {
        cItem.classList.remove('active');
        cItem.classList.remove('text-white');
        cItem.classList.add('text-white/70');
        if (icon) {
          icon.classList.remove('text-accent-peach');
          icon.classList.add('text-white/70');
        }
      }
    });

    // Update Sidebar active state & completion checkmark
    document.querySelectorAll('.sidebar-sublesson-btn').forEach(btn => {
      const bId = btn.getAttribute('data-lesson-id');
      const isTarget = bId === lessonId;
      if (isTarget) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }

      const statusSpan = btn.querySelector('.lesson-status');
      if (statusSpan) statusSpan.textContent=course.entry(bId).completed?'✓':course.entry(bId).practised?'◐':course.entry(bId).visited?'·':'○';
      if (statusSpan && course.entry(bId).completed) {
        statusSpan.textContent = '✓';
        statusSpan.classList.add('text-accent-peach', 'font-bold');
        statusSpan.classList.remove('text-white/40');
      }
    });

    // Update Top Breadcrumb
    const breadcrumb = document.getElementById('breadcrumb-display');
    if (breadcrumb) {
      breadcrumb.innerHTML = `
        <a class="hover:text-primary transition-colors hidden sm:inline" href="#">${course.t('Curriculum','학습 과정')}</a>
        <span class="text-outline/40 hidden sm:inline">›</span>
        <span class="text-primary font-medium">${course.t('Chapter','장')} ${lesson.chapter}: ${lesson.chapterName}</span>
        <span class="text-outline/40">›</span>
        <span class="font-semibold text-on-surface truncate max-w-xs sm:max-w-sm">${lesson.title}</span>
      `;
    }

    // Update Prev / Next Buttons
    const prevBtn = document.getElementById('prev-lesson-btn');
    const nextBtn = document.getElementById('next-lesson-btn');
    if (prevBtn) prevBtn.disabled = idx === 0;
    if (nextBtn) nextBtn.disabled = idx === LESSONS.length - 1;

    // Switch Chapter Section
    for (let c = 1; c <= 7; c++) {
      const sec = document.getElementById(`section-ch${c}`);
      if (sec) {
        if (c === lesson.chapter) {
          sec.classList.remove('hidden');
        } else {
          sec.classList.add('hidden');
        }
      }
    }

    // Switch Sub-lesson block if applicable
    if (lesson.chapter !== 2 && lesson.chapter !== 7) {
      document.querySelectorAll(`#section-ch${lesson.chapter} .lesson-block`).forEach(blk => {
        if (blk.id === `lesson-${lessonId}`) {
          blk.classList.remove('hidden');
        } else {
          blk.classList.add('hidden');
        }
      });
    } else if (lesson.scenarioId) {
      // For Chapter 2, switch directly to the scenario
      if (state.currentScenarioId !== lesson.scenarioId) window.switchScenario(lesson.scenarioId, false);
      else renderCurrentScenario();
    }

    if (lesson.chapter === 7) requestAnimationFrame(() => document.getElementById('course-title')?.focus({preventScroll:true}));

    window.onLegacySelect?.(lessonId);
    // Update Overall Progress
    updateCurriculumProgress();

    // Scroll main canvas to top
    const canvas = document.getElementById('main-canvas');
    if (canvas) canvas.scrollTop = 0;

    // Mobile sidebar close
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar && window.innerWidth < 1024) {
      sidebar.classList.add('-translate-x-full');
      if (backdrop) backdrop.classList.add('hidden');
    }

    if (window.audioEngine) {
      window.audioEngine.playClickSound();
    }
  }

  function updateCurriculumProgress() {
    const total = EXPANDED_LESSONS.length;
    const completed = EXPANDED_LESSONS.filter(l => course.entry(l.id).completed).length;
    const pct = Math.min(100, Math.round((completed / total) * 100));

    const percentEl = document.getElementById('progress-percent');
    const barEl = document.getElementById('progress-bar-fill');
    const statsEl = document.getElementById('progress-stats');

    if (percentEl) percentEl.textContent = `${pct}%`;
    if (barEl) barEl.style.width = `${pct}%`;
    if (statsEl) statsEl.textContent = course.t(`Completed ${completed} / ${total} ministry tasks`, `사역 과제 완료 ${completed} / ${total}`);
  }

  window.updateCourseProgress = updateCurriculumProgress;

  // Prev / Next button listeners
  document.getElementById('prev-lesson-btn')?.addEventListener('click', () => {
    const idx = LESSONS.findIndex(l => l.id === state.currentLessonId);
    if (idx > 0) {
      selectLesson(LESSONS[idx - 1].id);
    }
  });

  document.getElementById('next-lesson-btn')?.addEventListener('click', () => {
    const idx = LESSONS.findIndex(l => l.id === state.currentLessonId);
    if (idx < LESSONS.length - 1) {
      selectLesson(LESSONS[idx + 1].id);
    }
  });

  // Sidebar item click listeners
  document.querySelectorAll('.sidebar-sublesson-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lessonId = btn.getAttribute('data-lesson-id');
      if (lessonId) selectLesson(lessonId);
    });
  });

  // In-chapter horizontal sub-tab click listeners
  document.querySelectorAll('.in-chapter-subtab').forEach(tab => {
    tab.addEventListener('click', () => {
      const subtabId = tab.getAttribute('data-subtab-id');
      if (subtabId) {
        selectLesson(subtabId);
      }
    });
  });

  // Chapter group header click listener (Accordion toggle & select)
  document.querySelectorAll('.chapter-nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const chap = parseInt(item.getAttribute('data-chapter-nav'), 10);
      if (!chap) return;
      const group = item.closest('.chapter-group');
      const isAlreadyActiveChapter = state.currentLessonId && state.currentLessonId.startsWith(`ch${chap}-`);

      if (isAlreadyActiveChapter && group) {
        // Toggle accordion for already selected chapter
        group.classList.toggle('expanded');
      } else {
        // Select first lesson of the chapter and expand
        selectLesson(`ch${chap}-1`);
      }
    });
  });

  // Mobile sidebar toggle & backdrop
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('sidebar-toggle-btn');
  const closeBtn = document.getElementById('sidebar-close-btn');
  const backdrop = document.getElementById('sidebar-backdrop');

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('-translate-x-full');
      if (backdrop) {
        backdrop.classList.toggle('hidden', sidebar.classList.contains('-translate-x-full'));
      }
    });
  }
  if (closeBtn && sidebar) {
    closeBtn.addEventListener('click', () => {
      sidebar.classList.add('-translate-x-full');
      if (backdrop) backdrop.classList.add('hidden');
    });
  }
  if (backdrop && sidebar) {
    backdrop.addEventListener('click', () => {
      sidebar.classList.add('-translate-x-full');
      backdrop.classList.add('hidden');
    });
  }

  // Audio speed toggle
  const speedBtn = document.getElementById('speed-toggle-btn');
  const speedIndicator = document.getElementById('speed-indicator');
  if (speedBtn) {
    speedBtn.addEventListener('click', () => {
      if (window.audioEngine) {
        const newRate = window.audioEngine.toggleSpeed();
        if (speedIndicator) speedIndicator.textContent = `${newRate}x`;
        showToast(`발음 속도: ${newRate}x 로 설정되었습니다`, 'info');
      }
    });
  }

  // Audio mute toggle
  const muteBtn = document.getElementById('mute-toggle-btn');
  const muteIndicator = document.getElementById('mute-indicator');
  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      if (window.audioEngine) {
        const isMuted = window.audioEngine.toggleMute();
        if (muteIndicator) {
          muteIndicator.textContent = isMuted ? '🔇 효과음 OFF' : '🔊 효과음 ON';
        }
        showToast(isMuted ? '효과음이 꺼졌습니다' : '효과음이 켜졌습니다', 'info');
      }
    });
  }

  let lastTurkishInput=null;
  document.addEventListener('focusin',e=>{if(e.target.matches('input[type=text],textarea'))lastTurkishInput=e.target;});
  document.querySelectorAll('[data-insert-char]').forEach(b=>b.addEventListener('pointerdown',e=>e.preventDefault()));

  // Turkish character insert buttons
  document.querySelectorAll('[data-insert-char]').forEach(btn => {
    btn.addEventListener('click', () => {
      const char = btn.getAttribute('data-insert-char');
      const activeEl = lastTurkishInput || document.activeElement;
      if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) {
        const start = activeEl.selectionStart || 0;
        const end = activeEl.selectionEnd || 0;
        const text = activeEl.value;
        activeEl.value = text.substring(0, start) + char + text.substring(end);
        activeEl.selectionStart = activeEl.selectionEnd = start + char.length;
        activeEl.focus();
        activeEl.dispatchEvent(new Event('input', { bubbles: true }));
      } else {
        copyText(char);
      }
      if (window.audioEngine) window.audioEngine.playClickSound();
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
  const oxByLanguage={en:{},ko:{}};
  function renderOXQuiz() {
    state.oxAnswers=oxByLanguage[course.language];
    const container = document.getElementById('ox-quiz-container');
    if (!container) return;

    container.innerHTML = APP_DATA.pronunciation.oxQuiz.map((item, idx) => {
      const userAnswer = state.oxAnswers[item.id];
      const isAnswered = userAnswer !== undefined;
      const isCorrect = isAnswered && userAnswer === item.answer;

      return `
        <div class="bg-white p-5 rounded-xl border border-stone-200/90 shadow-sm transition-all hover:border-stone-300 flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between gap-4 mb-2">
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-1">
                  <span class="px-2 py-0.5 text-xs font-semibold rounded bg-stone-100 text-slate-700">${course.t('Question','문항')} 0${idx + 1}</span>
                  <span class="text-xs text-slate-400 font-mono">${item.ipa}</span>
                </div>
                <h4 class="text-sm sm:text-base font-bold text-slate-900 leading-snug mb-1">${item.question}</h4>
                <p class="text-xs text-slate-500">${course.t('Word','단어')}: <span class="text-emerald-800 font-semibold">${item.word}</span> (${item.translation})</p>
              </div>

              <button data-speech="${escapeHTML(item.word)}"
                      title="${course.t('Play synthetic Turkish speech','터키어 합성 음성 발음 듣기')}"
                      class="p-2 rounded-lg bg-stone-100 hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 border border-stone-200 transition flex items-center justify-center shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
              </button>
            </div>

            <!-- OX Buttons -->
            <div class="flex items-center gap-2.5 my-3">
              <button onclick="handleOXClick(${item.id}, 'O')"
                      class="flex-1 py-2 px-3 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
                        userAnswer === 'O'
                          ? (item.answer === 'O' ? 'bg-emerald-700 text-white ring-2 ring-emerald-300' : 'bg-rose-600 text-white')
                          : 'bg-stone-100 text-slate-700 hover:bg-stone-200'
                      }">
                <span>⭕</span> ${course.t('True (O)','그렇다 (O)')}
              </button>
              <button onclick="handleOXClick(${item.id}, 'X')"
                      class="flex-1 py-2 px-3 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
                        userAnswer === 'X'
                          ? (item.answer === 'X' ? 'bg-emerald-700 text-white ring-2 ring-emerald-300' : 'bg-rose-600 text-white')
                          : 'bg-stone-100 text-slate-700 hover:bg-stone-200'
                      }">
                <span>❌</span> ${course.t('False (X)','아니다 (X)')}
              </button>
            </div>
          </div>

          <!-- Feedback & Reason -->
          ${isAnswered ? `
            <div class="pt-3 border-t border-stone-100 transition-all duration-300">
              <div class="flex items-center gap-2 mb-1.5">
                <span class="text-xs font-bold px-2 py-0.5 rounded ${isCorrect ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-rose-50 text-rose-900 border border-rose-200'}">
                  ${isCorrect ? course.t('Correct! ✓','정답입니다! ✓') : course.t(`Try again (answer: ${item.answer}) ✕`,`오답입니다 (정답: ${item.answer}) ✕`)}
                </span>
              </div>
              <p class="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">${item.reason}</p>
              <div class="bg-sand-50 border border-sand-200 p-2.5 rounded-lg text-xs text-sand-900 flex items-start gap-2">
                <span class="shrink-0">💡</span>
                <span>${item.tip}</span>
              </div>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    // Update score badge
    let correctCount = 0;
    APP_DATA.pronunciation.oxQuiz.forEach(q => {
      if (state.oxAnswers[q.id] === q.answer) correctCount++;
    });
    const scoreBadge = document.getElementById('ox-score-badge');
    if (scoreBadge) {
      scoreBadge.innerText = `${correctCount} / ${APP_DATA.pronunciation.oxQuiz.length} ${course.t('correct','정답')}`;
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
      const syllablesHtml = parts.map((s) => `
        <button onclick="playSyllableRhythm('${s}')"
                class="syllable-chunk px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-sm hover:bg-emerald-100 hover:border-emerald-300 transition shadow-sm">
          ${s}
        </button>
      `).join('<span class="text-stone-400 font-bold mx-0.5">•</span>');

      return `
        <div class="bg-white p-4 rounded-xl border border-stone-200/90 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-slate-600">${item.syllableCount}음절 분절</span>
              <button data-speech="${escapeHTML(item.word)}" class="text-slate-400 hover:text-emerald-700 transition" title="전체 발음">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
              </button>
            </div>
            <div class="flex items-center gap-1.5 mb-2 flex-wrap">
              ${syllablesHtml}
            </div>
            <p class="text-xs text-slate-700 mb-2 font-medium">${item.korean}</p>
          </div>
          <p class="text-[11px] text-slate-500 bg-stone-50 p-2 rounded-lg border border-stone-200/80 leading-normal">
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
        <div class="flex items-center justify-between gap-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
          <div>
            <span data-en="Approximate syllable split:" data-ko="대략적인 음절 분절:" class="text-xs text-emerald-800 font-semibold">${course.t('Approximate syllable split:','대략적인 음절 분절:')}</span>
            <span data-user-content class="text-base sm:text-lg font-bold text-emerald-950 tracking-widest ml-2">${escapeHTML(segmented)}</span>
          </div>
          <button data-speech="${escapeHTML(val)}" class="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-sm transition flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
            <span data-en="Play synthetic speech" data-ko="합성 음성 듣기">${course.t('Play synthetic speech','합성 음성 듣기')}</span>
          </button>
        </div>
      `;
    });
  }

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

        if (c0 && !c1 && c2) {
          res += "-";
        } else if (!c0 && !c1 && c2 && i > 0 && vowels.includes(word[i - 1])) {
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
      <div class="bg-white p-5 rounded-xl border border-stone-200/90 shadow-sm flex flex-col justify-between">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5">
          <!-- Without Şapka -->
          <div class="p-4 rounded-lg bg-stone-50 border border-stone-200">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-semibold px-2 py-0.5 rounded bg-white text-slate-600 border border-stone-200">단모음 (Kısa)</span>
              <div class="flex items-center gap-1">
                <button onclick="window.audioEngine.speakTurkish('${pair.without.word}', 0.75)" class="text-xs px-2 py-0.5 rounded bg-white hover:bg-stone-100 text-amber-900 border border-stone-200" title="느리게">0.75x</button>
                <button onclick="window.audioEngine.speakTurkish('${pair.without.word}', 1.0)" class="p-1 rounded bg-white hover:bg-emerald-50 text-emerald-800 border border-stone-200" title="보통속도">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                </button>
              </div>
            </div>
            <div class="flex items-baseline gap-2 mb-1">
              <h4 class="text-2xl font-bold text-slate-900">${pair.without.word}</h4>
              <span class="text-xs font-mono text-slate-400">${pair.without.ipa}</span>
            </div>
            <p class="text-sm font-semibold text-emerald-800 mb-1.5">${pair.without.meaning}</p>
            <p class="text-xs text-slate-500 italic">${pair.without.context}</p>
          </div>

          <!-- With Şapka -->
          <div class="p-4 rounded-lg bg-sand-50/70 border border-sand-200">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-semibold px-2 py-0.5 rounded bg-white text-sand-900 border border-sand-200">장모음 / 구개음화 (Uzun)</span>
              <div class="flex items-center gap-1">
                <button onclick="window.audioEngine.speakTurkish('${pair.with.word}', 0.75)" class="text-xs px-2 py-0.5 rounded bg-white hover:bg-stone-100 text-amber-900 border border-sand-200" title="느리게">0.75x</button>
                <button onclick="window.audioEngine.speakTurkish('${pair.with.word}', 1.0)" class="p-1 rounded bg-white hover:bg-emerald-50 text-emerald-800 border border-sand-200" title="보통속도">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                </button>
              </div>
            </div>
            <div class="flex items-baseline gap-2 mb-1">
              <h4 class="text-2xl font-bold text-amber-900">${pair.with.word}</h4>
              <span class="text-xs font-mono text-slate-400">${pair.with.ipa}</span>
            </div>
            <p class="text-sm font-semibold text-amber-900 mb-1.5">${pair.with.meaning}</p>
            <p class="text-xs text-slate-600 italic">${pair.with.context}</p>
          </div>
        </div>

        <div class="text-xs text-slate-700 bg-stone-50 p-3 rounded-lg border border-stone-200 leading-relaxed">
          <strong class="text-slate-900">구별 포인트:</strong> ${pair.explanation}
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

    wordListContainer.innerHTML = APP_DATA.pronunciation.speechPracticeWords.map(w => `
      <button data-word="${w.turkish}"
              class="px-3 py-1.5 rounded-lg text-xs font-medium transition border ${
                w.turkish === state.activeSpeechTarget
                  ? 'bg-emerald-700 text-white border-emerald-600 shadow-sm'
                  : 'bg-stone-100 text-slate-700 border-stone-200 hover:bg-stone-200'
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
      window.audioEngine.stopListening();
      state.activeSpeechTarget = wordStr;
      const found = APP_DATA.pronunciation.speechPracticeWords.find(w => w.turkish === wordStr);
      if (targetWordDisplay) targetWordDisplay.innerText = wordStr;
      if (targetKoreanDisplay && found) targetKoreanDisplay.innerText = found.korean;

      wordListContainer.querySelectorAll('[data-word]').forEach(chip => {
        if (chip.getAttribute('data-word') === wordStr) {
          chip.className = 'px-3 py-1.5 rounded-lg text-xs font-medium transition border bg-emerald-700 text-white border-emerald-600 shadow-sm';
        } else {
          chip.className = 'px-3 py-1.5 rounded-lg text-xs font-medium transition border bg-stone-100 text-slate-700 border-stone-200 hover:bg-stone-200';
        }
      });

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
          micRecordBtn.classList.remove('mic-recording', 'bg-rose-50', 'text-rose-600');
          if (micStatus) micStatus.innerText = '녹음 중지됨';
          return;
        }

        state.isListening = true;
        micRecordBtn.classList.add('mic-recording', 'bg-rose-50', 'text-rose-600');
        if (micStatus) micStatus.innerText = '듣고 있습니다... 터키어로 말씀하세요 (tr-TR)';

        window.audioEngine.startListening(
          (spoken) => {
            state.isListening = false;
            micRecordBtn.classList.remove('mic-recording', 'bg-rose-50', 'text-rose-600');
            if (micStatus) micStatus.innerText = '음성 인식 완료';

            if (spokenTranscriptDisplay) spokenTranscriptDisplay.innerText = `"${spoken}"`;

            const score = window.audioEngine.calculateSimilarity(state.activeSpeechTarget, spoken);
            if (speechScoreDisplay) speechScoreDisplay.innerText = `${score}%`;
            if (speechScoreBar) speechScoreBar.style.width = `${score}%`;

            if (score >= 85) {
              window.audioEngine.playCorrectSound();
              if (speechFeedbackDisplay) {
                speechFeedbackDisplay.innerHTML = `<span class="text-emerald-800 font-bold">대단합니다!</span> 인식된 텍스트가 목표와 비슷합니다. 발음, 강세나 억양 평가가 아닙니다. (유사도: ${score}%)`;
              }
            } else if (score >= 50) {
              if (speechFeedbackDisplay) {
                speechFeedbackDisplay.innerHTML = `<span class="text-amber-800 font-bold">좋습니다!</span> 인식 텍스트가 일부 일치합니다. 실제 이해 가능성은 대화 상대와 확인하세요. (유사도: ${score}%)`;
              }
            } else {
              window.audioEngine.playWrongSound();
              if (speechFeedbackDisplay) {
                speechFeedbackDisplay.innerHTML = `<span class="text-rose-700 font-bold">다시 시도해 보세요!</span> '합성 음성 발음 듣기'를 2~3회 반복해 듣고 천천히 소리 내어 보세요. (유사도: ${score}%)`;
              }
            }
          },
          (err) => {
            state.isListening = false;
            micRecordBtn.classList.remove('mic-recording', 'bg-rose-50', 'text-rose-600');
            if (micStatus) {micStatus.innerText = err;micStatus.setAttribute('role','status');}
            showToast(err, 'error');
          },
          () => {
            state.isListening = false;
            micRecordBtn.classList.remove('mic-recording', 'bg-rose-50', 'text-rose-600');
          }
        );
      });
    }

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

    container.innerHTML = APP_DATA.simulator.scenarios.map((s, idx) => {
      const isActive = s.id === state.currentScenarioId;
      return `
        <button onclick="switchScenario('${s.id}')"
                class="p-3 rounded-lg text-left transition border ${
                  isActive
                    ? 'bg-white border-2 border-[#2A6F5B] shadow-sm'
                    : 'card-cream hover:bg-white border-[#CDDCD3] shadow-xs'
                }">
          <div class="flex items-center gap-1.5 mb-1">
            <span class="text-[10px] px-1.5 py-0.2 rounded font-extrabold ${isActive ? 'bg-[#2A6F5B] text-white' : 'bg-[#E2ECE6] text-[#1C332A]'}">
              2.${idx + 1}
            </span>
            <span class="text-xs text-[#5D776C] font-semibold truncate">${s.npc.name}</span>
          </div>
          <h4 class="text-xs sm:text-sm font-bold text-[#1C332A] line-clamp-1 mb-0.5">${s.title}</h4>
          <p class="text-[11px] text-[#5D776C] line-clamp-2 leading-tight">${s.subtitle}</p>
        </button>
      `;
    }).join('');
  }

  window.switchScenario = function(scId, syncSidebar = true) {
    state.currentScenarioId = scId;
    state.scenarioStep = 0;
    state.scenarioScore = 0;
    state.selectedChoice = null;
    state.scenarioHistory = [];

    const sc = APP_DATA.simulator.scenarios.find(s => s.id === scId);
    if (sc) {
      const titleDisplay = document.getElementById('ch2-title-display');
      const descDisplay = document.getElementById('ch2-desc-display');
      if (titleDisplay) titleDisplay.textContent = sc.title;
      if (descDisplay) descDisplay.textContent = sc.subtitle;
    }

    if (syncSidebar) {
      const matchLesson = LESSONS.find(l => l.scenarioId === scId);
      if (matchLesson) {
        state.currentLessonId = matchLesson.id; course.select(matchLesson.id);
        course.entry(matchLesson.id).visited = true; course.save();

        // Sync in-chapter horizontal sub-tabs for Chapter 2
        document.querySelectorAll('#section-ch2 .in-chapter-subtab').forEach(tab => {
          const tId = tab.getAttribute('data-subtab-id');
          if (tId === matchLesson.id) {
            tab.classList.add('active');
          } else {
            tab.classList.remove('active');
          }
        });

        document.querySelectorAll('.sidebar-sublesson-btn').forEach(btn => {
          const bId = btn.getAttribute('data-lesson-id');
          if (bId === matchLesson.id) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
          const statusSpan = btn.querySelector('.lesson-status');
          if (statusSpan && course.entry(bId).completed) {
            statusSpan.textContent = '✓';
            statusSpan.classList.add('text-accent-peach', 'font-bold');
          }
        });

        const breadcrumb = document.getElementById('breadcrumb-display');
        if (breadcrumb) {
          breadcrumb.innerHTML = `
            <span class="text-[#5D776C]">Chapter 2: 복음 전도 시뮬레이터</span>
            <span class="text-[#829D91]">›</span>
            <span class="text-[#2A6F5B] font-bold">${matchLesson.title}</span>
          `;
        }

        updateCurriculumProgress();
      }
    }

    renderScenarioSelector();
    renderCurrentScenario();
    if (window.audioEngine) window.audioEngine.playClickSound();
  };

  function renderCurrentScenario() {
    const sc = APP_DATA.simulator.scenarios.find(s => s.id === state.currentScenarioId);
    const container = document.getElementById('active-scenario-view');
    if (!sc || !container) return;

    if (state.scenarioStep >= sc.steps.length) {
      renderScenarioComplete(sc, container);
      return;
    }

    const currentStep = sc.steps[state.scenarioStep];
    if (state.selectedChoice) state.selectedChoice = currentStep.choices.find(c => c.id === state.selectedChoice.id) || null;
    const isStepAnswered = state.selectedChoice !== null;

    let colorBookBanner = '';
    if (sc.id === 'scenario-4') {
      const colors = [
        { name: 'Altın (금색)', bg: 'bg-amber-100 text-amber-900 border border-amber-300', desc: '천국 & 영광' },
        { name: 'Siyah (검은색)', bg: 'bg-slate-900 text-white', desc: '죄 & 어둠' },
        { name: 'Kırmızı (빨간색)', bg: 'bg-rose-100 text-rose-900 border border-rose-300', desc: '보혈 & 대속' },
        { name: 'Beyaz (흰색)', bg: 'bg-white text-slate-900 border border-stone-300', desc: '칭의 & 정결' },
        { name: 'Yeşil (초록색)', bg: 'bg-emerald-100 text-emerald-900 border border-emerald-300', desc: '성장 & 새 생명' }
      ];
      colorBookBanner = `
        <div class="mb-4 p-3 bg-stone-50 rounded-xl border border-stone-200">
          <p class="text-xs font-semibold text-slate-700 mb-2">📖 글 없는 책 (5 Renk) 상징 팔레트:</p>
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
      <div class="bg-white p-5 sm:p-6 rounded-xl mb-4 border border-stone-200/90 shadow-sm">
        <div class="flex items-center justify-between gap-4 mb-3 pb-3 border-b border-stone-100">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-lg ${sc.npc.avatarBg} flex items-center justify-center text-white text-lg font-bold shadow-sm">
              ${sc.npc.name.charAt(0)}
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-base font-bold text-slate-900">${sc.npc.name}</h3>
                <span class="text-xs px-2 py-0.5 rounded bg-stone-100 text-slate-600 font-medium">${sc.npc.role}</span>
              </div>
              <p class="text-xs text-slate-500">${sc.npc.desc}</p>
            </div>
          </div>

          <div class="text-right">
            <div class="text-xs text-slate-400">진행 단계</div>
            <div class="text-base font-bold text-emerald-800">${state.scenarioStep + 1} / ${sc.steps.length}</div>
          </div>
        </div>

        <div class="bg-stone-50 p-3 rounded-lg border border-stone-200 text-xs text-slate-600 mb-4 flex items-start gap-2">
          <span class="shrink-0">📍</span>
          <span><strong>상황 배경:</strong> ${sc.context}</span>
        </div>

        ${colorBookBanner}

        <!-- NPC Speech Bubble -->
        <div class="bg-stone-50 p-5 rounded-xl border border-stone-200">
          <div class="flex items-start justify-between gap-3">
            <div class="flex-1">
              <span class="text-xs font-semibold text-emerald-800 mb-1 block">${sc.npc.name}의 질문:</span>
              <p class="text-base font-medium text-slate-900 leading-relaxed mb-2 tracking-tight">
                "${currentStep.npcSpeech}"
              </p>
              ${state.showKoreanInSimulator ? `
                <p class="text-xs text-slate-500 italic pt-2 border-t border-stone-200/80">
                  "${currentStep.npcSpeechKo}"
                </p>
              ` : ''}
            </div>
            <button onclick="window.audioEngine.speakTurkish(\`${currentStep.npcSpeech.replace(/"/g, '')}\`)"
                    class="p-2 rounded-lg bg-white hover:bg-stone-100 text-slate-600 border border-stone-200 transition shrink-0"
                    title="터키어 음성 듣기">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- User Choice Options -->
      <div class="mb-4">
        <h4 class="text-xs sm:text-sm font-bold text-slate-800 mb-2.5 flex items-center gap-1.5">
          <span>✝️</span> 당신의 복음적 응답을 선택하세요 (3가지 옵션):
        </h4>
        <div class="flex flex-col gap-2.5">
          ${currentStep.choices.map((c, idx) => {
            const isSelected = state.selectedChoice && state.selectedChoice.id === c.id;
            let choiceStyle = 'bg-white border-stone-200 hover:border-emerald-600 hover:bg-stone-50/50';

            if (isStepAnswered) {
              if (c.feedbackType === 'best') {
                choiceStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950';
              } else if (isSelected && c.feedbackType === 'bad') {
                choiceStyle = 'bg-rose-50 border-rose-300 text-rose-950';
              } else {
                choiceStyle = 'opacity-60 bg-stone-50 border-stone-200';
              }
            }

            return `
              <div class="simulator-choice">
              <button type="button" onclick="handleSimulatorChoice('${c.id}')"
                      ${isStepAnswered ? 'disabled' : ''}
                      class="p-4 rounded-xl text-left transition-all border ${choiceStyle} flex flex-col gap-1 shadow-sm group">
                <div class="flex items-center justify-between gap-2">
                  <span class="text-xs font-bold px-2 py-0.5 rounded bg-stone-100 text-slate-700 group-hover:bg-emerald-700 group-hover:text-white transition">
                    응답 0${idx + 1}
                  </span>
                  <div class="flex items-center gap-2">


                  </div>
                </div>
                <p class="text-sm font-semibold text-slate-900 leading-snug">${c.text}</p>
                ${state.showKoreanInSimulator ? `
                  <p class="text-xs text-slate-500 italic">${c.korean}</p>
                ` : ''}
              </button><button type="button" data-speech="${escapeHTML(c.text)}" class="px-3 py-2 bg-white border rounded-lg text-sm">${course.t('Play synthetic speech','합성 음성 듣기')}</button></div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Feedback Area -->
      ${isStepAnswered ? `
        <div class="bg-white p-5 rounded-xl border border-stone-200 shadow-sm animate-fadeIn">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold px-2.5 py-1 rounded-full ${
              state.selectedChoice.feedbackType === 'best'
                ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                : state.selectedChoice.feedbackType === 'neutral'
                ? 'bg-amber-100 text-amber-900 border border-amber-300'
                : 'bg-rose-100 text-rose-900 border border-rose-300'
            }">
              ${state.selectedChoice.feedbackType === 'best' ? course.t('Appropriate response','적절한 답변') : state.selectedChoice.feedbackType === 'neutral' ? course.t('Consider the context','문맥을 확인하세요') : course.t('Review this response','이 답을 검토하세요')}
            </span>

            <span class="text-xs sm:text-sm font-bold text-slate-800">
              현재 대화 연습 기록: <span class="text-emerald-800">${course.t('Practice responses, not outcomes','결과가 아니라 답을 연습하세요')}</span>
            </span>
          </div>

          <p class="text-sm text-slate-700 leading-relaxed mb-3">
            ${state.selectedChoice.feedback}
          </p>

          <div class="bg-sand-50 border border-sand-200 p-3 rounded-lg text-xs text-sand-900 mb-4 flex items-start gap-2">
            <span class="shrink-0 text-sm">📖</span>
            <div>
              <strong class="font-bold">${course.t('Christian explanation and practice:','기독교 설명과 연습:')}</strong>
              <p class="mt-0.5 leading-normal">${state.selectedChoice.theologyTip}</p>
            </div>
          </div>

          <div class="flex justify-end">
            <button onclick="advanceSimulatorStep()"
                    class="px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs shadow-sm flex items-center gap-1.5 transition">
              <span>${course.t('Continue conversation','다음 대화 진행')}</span>
              <span>→</span>
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
    course.entry(state.currentLessonId).practised=true; course.save();
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
    const scorePct = 0;
    const rankTitle = course.t('Review your conversation','대화 복습');
    const rankDesc = course.t('Review language, understanding, factual accuracy and appropriateness. Practise an original response; no conversion outcome is scored.','언어, 이해, 사실 정확성과 적절함을 검토하세요. 자신의 답을 연습하세요. 회심 결과는 채점하지 않습니다.');
    container.innerHTML = `
      <div class="bg-white p-7 sm:p-8 rounded-xl text-center border border-stone-200 shadow-sm animate-fadeIn">
        <div class="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 mx-auto flex items-center justify-center text-2xl mb-3 text-emerald-800">
          🕊️
        </div>
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1 block">시나리오 완료</span>
        <h3 class="text-xl sm:text-2xl font-bold text-slate-900 mb-2">${sc.title}</h3>
        <p class="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto mb-5">${sc.subtitle}</p>

        <!-- Score summary -->
        <div class="bg-stone-50 p-5 rounded-xl max-w-md mx-auto border border-stone-200 mb-6">
          <div class="text-xs text-slate-500 mb-1">최종 대화 연습 기록</div>
          <div class="text-3xl sm:text-4xl font-extrabold text-emerald-800 mb-2">${course.t('Practice responses, not outcomes','결과가 아니라 답을 연습하세요')}</div>

          <div class="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-bold text-xs border border-emerald-300 mb-2">
            ${rankTitle}
          </div>
          <p class="text-xs text-slate-600">${rankDesc}</p>
        </div>

        <div class="flex items-center justify-center gap-3">
          <button onclick="switchScenario('${sc.id}')"
                  class="px-4 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-slate-700 text-xs font-semibold transition border border-stone-200">
            🔄 시나리오 다시 하기
          </button>
          <button onclick="selectLesson('ch5-1')"
                  class="px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition shadow-sm flex items-center gap-1.5 cursor-pointer">
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
        <div class="bg-white p-5 sm:p-6 rounded-xl border border-stone-200/90 shadow-sm">
          <div class="flex items-center gap-3 mb-3.5">
            <span class="text-2xl">${kulHakkiData.icon}</span>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-base sm:text-lg font-bold text-slate-900">${kulHakkiData.title}</h3>
                <span class="text-xs px-2 py-0.5 rounded bg-sand-50 text-sand-900 border border-sand-200 font-semibold">${kulHakkiData.badge}</span>
              </div>
              <p class="text-xs text-slate-500">${kulHakkiData.subtitle}</p>
            </div>
          </div>

          <p class="text-sm text-slate-700 leading-relaxed mb-4 p-3 bg-stone-50 rounded-lg border border-stone-200">
            ${kulHakkiData.summary}
          </p>

          <div class="space-y-2.5 mb-4">
            ${kulHakkiData.details.map(d => `
              <div class="p-3.5 rounded-lg bg-stone-50/70 border border-stone-200">
                <h4 class="text-xs font-bold text-emerald-800 mb-1">${d.heading}</h4>
                <p class="text-xs text-slate-600 leading-relaxed">${d.text}</p>
              </div>
            `).join('')}
          </div>

          <!-- Dialogue Practice -->
          <div class="p-4 rounded-lg bg-stone-50 border border-stone-200">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold text-slate-800">💬 현지 대화 실습 (Hakkını helal et):</span>
              <button onclick="window.audioEngine.speakTurkish(\`${kulHakkiData.sampleDialogue.tr.replace(/\n/g, ' ')}\`)"
                      class="px-2.5 py-1 rounded bg-white hover:bg-emerald-50 text-emerald-800 border border-stone-200 text-xs flex items-center gap-1.5 transition">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                대화 듣기
              </button>
            </div>
            <pre class="text-xs text-emerald-800 font-mono whitespace-pre-wrap leading-relaxed mb-1.5">${kulHakkiData.sampleDialogue.tr}</pre>
            <pre class="text-xs text-slate-500 whitespace-pre-wrap leading-relaxed">${kulHakkiData.sampleDialogue.ko}</pre>
          </div>
        </div>
      `;
    }

    // 2. Islamic Terms Matrix
    const termsData = APP_DATA.worldview.concepts.find(c => c.id === 'islamic-terms');
    const termsBox = document.getElementById('islamic-terms-grid');
    if (termsData && termsBox) {
      termsBox.innerHTML = termsData.matrix.map(m => `
        <div class="bg-white p-4 rounded-xl border border-stone-200 shadow-sm hover:border-stone-300 transition flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-base font-bold text-slate-900">${m.term}</h4>
              <span class="text-xs font-semibold px-2 py-0.5 rounded bg-sand-50 text-sand-900 border border-sand-200">${m.meaning}</span>
            </div>
            <div class="space-y-2 text-xs">
              <div class="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                <strong class="text-slate-700 block mb-0.5">이슬람 세계관:</strong>
                <p class="text-slate-600 leading-normal">${m.islamView}</p>
              </div>
              <div class="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
                <strong class="text-emerald-800 block mb-0.5">복음 브릿지 (Gospel Bridge):</strong>
                <p class="text-emerald-950 leading-normal">${m.christianBridge}</p>
              </div>
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
        <div class="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-3 pb-2 border-b border-stone-100">
              <h4 class="text-base font-bold text-slate-900">${item.term}</h4>
              <span class="text-xs text-slate-500">일상 의미: <span class="text-slate-800 font-medium">${item.dailyMeaning}</span></span>
            </div>
            <div class="space-y-2.5 text-xs leading-relaxed">
              <div class="p-3 rounded-lg bg-stone-50 border border-stone-200">
                <strong class="text-slate-700 block mb-1">이슬람 종교법(Fıkıh) 규정:</strong>
                <p class="text-slate-600">${item.islamicDef}</p>
              </div>
              <div class="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                <strong class="text-emerald-800 block mb-1">예수 그리스도의 구속 신학 연결:</strong>
                <p class="text-emerald-950">${item.christianBridge}</p>
              </div>
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

    stepperContainer.innerHTML = ahiretData.stages.map(st => {
      const isActive = st.num === state.activeAhiretStage;
      return `
        <button onclick="selectAhiretStage(${st.num})"
                class="flex-1 min-w-[105px] p-2 rounded-lg text-center transition border ${
                  isActive
                    ? 'bg-emerald-700 text-white border-emerald-600 shadow-sm font-bold'
                    : 'bg-white text-slate-700 border-stone-200 hover:bg-stone-50'
                }">
          <div class="text-[10px] opacity-80">단계 0${st.num}</div>
          <div class="text-xs truncate">${st.name.split(' ')[0]}</div>
        </button>
      `;
    }).join('');

    const current = ahiretData.stages.find(st => st.num === state.activeAhiretStage) || ahiretData.stages[0];
    detailsContainer.innerHTML = `
      <div class="bg-white p-5 sm:p-6 rounded-xl border border-stone-200 shadow-sm animate-fadeIn">
        <div class="flex items-center justify-between mb-4">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="px-2 py-0.5 rounded text-xs font-bold bg-stone-100 text-emerald-800">8단계 중 0${current.num}단계</span>
              <button data-speech="${escapeHTML(current.name)}" class="text-slate-400 hover:text-emerald-700" title="발음 듣기">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
              </button>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-slate-900">${current.name}</h3>
            <p class="text-xs text-slate-500">${current.desc}</p>
          </div>

          <div class="flex items-center gap-1">
            <button onclick="selectAhiretStage(${Math.max(1, current.num - 1)})" ${current.num === 1 ? 'disabled' : ''} class="px-2.5 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 disabled:opacity-40 text-slate-700 text-xs">‹ 이전</button>
            <button onclick="selectAhiretStage(${Math.min(8, current.num + 1)})" ${current.num === 8 ? 'disabled' : ''} class="px-2.5 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 disabled:opacity-40 text-slate-700 text-xs">다음 ›</button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-lg bg-stone-50 border border-stone-200">
            <h4 class="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2 flex items-center gap-1.5">
              <span>☪️</span> 이슬람 종말관 & 전통 해석:
            </h4>
            <p class="text-xs text-slate-600 leading-relaxed">${current.islamic}</p>
          </div>

          <div class="p-4 rounded-lg bg-emerald-50/70 border border-emerald-200">
            <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2 flex items-center gap-1.5">
              <span>✝️</span> 성경적 구원과 영생의 확신:
            </h4>
            <p class="text-xs text-emerald-950 leading-relaxed">${current.christian}</p>
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

    verseSelector.innerHTML = APP_DATA.syntax.verses.map(v => {
      const isActive = v.id === state.activeVerseId;
      return `
        <button onclick="selectVerse('${v.id}')"
                class="px-3.5 py-1.5 rounded-lg text-xs font-bold transition border ${
                  isActive
                    ? 'bg-emerald-700 text-white border-emerald-600 shadow-sm'
                    : 'bg-white text-slate-700 border-stone-200 hover:bg-stone-50'
                }">
          ${v.reference.split(' ')[0]}
        </button>
      `;
    }).join('');

    const activeVerse = APP_DATA.syntax.verses.find(v => v.id === state.activeVerseId) || APP_DATA.syntax.verses[0];
    const selectedToken = activeVerse.tokens[state.selectedTokenIndex] || activeVerse.tokens[0];

    const tokensHtml = activeVerse.tokens.map((tok, idx) => {
      const isSelected = idx === state.selectedTokenIndex;
      return `
        <button onclick="selectToken(${idx})"
                class="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition border ${
                  isSelected
                    ? 'bg-emerald-700 text-white border-emerald-600 ring-2 ring-emerald-200 shadow-sm'
                    : 'bg-stone-100 text-slate-800 border-stone-200 hover:bg-stone-200'
                }">
          ${tok.word}
        </button>
      `;
    }).join('');

    verseContent.innerHTML = `
      <div class="bg-white p-5 sm:p-6 rounded-xl border border-stone-200 shadow-sm mb-4">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold px-2.5 py-0.5 rounded bg-stone-100 text-slate-700">${activeVerse.reference}</span>
          <button onclick="window.audioEngine.speakTurkish(\`${activeVerse.turkish.replace(/'/g, "\\'")}\`)"
                  class="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
            성경 구절 전체 듣기
          </button>
        </div>

        <p class="text-lg sm:text-xl font-bold text-slate-900 mb-1 leading-relaxed tracking-tight">
          "${activeVerse.turkish}"
        </p>
        <p class="text-xs sm:text-sm text-slate-500 italic mb-3.5">${activeVerse.korean}</p>

        <div class="p-3 bg-sand-50 border border-sand-200 rounded-lg mb-4 text-xs text-sand-900">
          <strong class="text-amber-900">문법 핵심 포인트:</strong> ${activeVerse.focusGrammar} — ${activeVerse.grammarRule}
        </div>

        <div>
          <span class="text-xs font-bold text-slate-600 block mb-2">단어별 형태소 분절 (클릭하여 상세 문법 분석 확인):</span>
          <div class="flex flex-wrap gap-2 mb-4">
            ${tokensHtml}
          </div>
        </div>

        <!-- Token detail card -->
        <div class="p-4 rounded-lg bg-stone-50 border border-stone-200 animate-fadeIn">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-baseline gap-2">
              <span class="text-base sm:text-lg font-bold text-emerald-800">${selectedToken.word}</span>
              <button data-speech="${escapeHTML(selectedToken.word)}" class="text-slate-400 hover:text-emerald-700" title="발음 듣기">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
              </button>
            </div>
            <span class="text-xs font-semibold px-2 py-0.5 rounded bg-white text-slate-700 border border-stone-200">${selectedToken.meaning}</span>
          </div>
          <div class="text-xs font-mono text-slate-800 bg-white p-2.5 rounded border border-stone-200 mb-2">
            분석: ${selectedToken.grammar}
          </div>
          <p class="text-xs text-slate-600 leading-normal">
            <strong class="text-slate-800">신학적 해설:</strong> ${activeVerse.theologyNote}
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
        <div class="perspective-1000 h-72 ${isFlipped ? 'flipped' : ''}">
          <div class="flip-card-inner relative w-full h-full transform-style-3d">
            <!-- Front Face: Daily Life -->
            <div ${isFlipped?'inert aria-hidden="true"':''} class="absolute inset-0 w-full h-full backface-hidden bg-white p-5 rounded-xl border border-stone-200 flex flex-col justify-between hover:border-stone-300 shadow-sm transition-all">
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-xs font-bold px-2 py-0.5 rounded bg-stone-100 text-slate-600">일상 터키어 용례</span>
                  <button onclick="event.stopPropagation(); window.audioEngine.speakTurkish('${card.word}')" class="text-slate-400 hover:text-emerald-700" title="발음 듣기">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                  </button>
                </div>
                <h4 class="text-2xl font-bold text-slate-900 mb-0.5">${card.word}</h4>
                <p class="text-xs text-slate-400 font-mono mb-2.5">${card.root}</p>

                <p class="text-xs text-slate-700 mb-1.5 leading-relaxed">
                  <strong class="text-amber-800">일상 의미:</strong> ${card.dailyDesc}
                </p>
                <div class="p-2 rounded bg-stone-50 border border-stone-200 text-xs text-slate-600 italic">
                  "${card.dailyExample}"
                </div>
              </div>

              <div class="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-emerald-800 font-semibold">
                <button type="button" data-flip-card="${idx}">${course.t('Show Christian meaning','기독교 의미 보기')} ↻</button>
                <span>↻</span>
              </div>
            </div>

            <!-- Back Face: Christian Theology -->
            <div ${!isFlipped?'inert aria-hidden="true"':''} class="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-emerald-50/70 p-5 rounded-xl border border-emerald-200 flex flex-col justify-between shadow-sm transition-all">
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">기독교 신학적 의미</span>
                  <button onclick="event.stopPropagation(); window.audioEngine.speakTurkish('${card.word}')" class="text-emerald-700 hover:text-emerald-900" title="발음 듣기">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                  </button>
                </div>
                <h4 class="text-2xl font-bold text-emerald-950 mb-1">${card.word}</h4>
                <p class="text-xs text-emerald-950 mb-2 leading-relaxed">
                  <strong class="text-emerald-800">신학 의미:</strong> ${card.theoDesc}
                </p>
                <div class="p-2 rounded bg-white/90 border border-emerald-200 text-xs text-emerald-900 italic">
                  "${card.theoExample}"
                </div>
              </div>

              <div class="pt-2 border-t border-emerald-200 flex items-center justify-between text-xs text-slate-600 font-semibold">
                <button type="button" data-flip-card="${idx}">${course.t('Show everyday meaning','일상 의미 보기')} ↺</button>
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
    document.querySelector(`#flip-cards-container [data-flip-card="${idx}"]:not([inert] *)`)?.focus();
  };

  // 3. Grammar Interactive Quiz: Ünlü Düşmesi
  function renderUnluQuiz() {
    const container = document.getElementById('unlu-quiz-container');
    if (!container) return;

    container.innerHTML = APP_DATA.syntax.unluDusmesiQuiz.map(q => {
      const stateObj = state.unluAnswers[q.id] || { value: '', isCorrect: null };
      return `
        <div class="p-4 rounded-xl bg-white border ${
          stateObj.isCorrect === true
            ? 'border-emerald-400 bg-emerald-50/40'
            : stateObj.isCorrect === false
            ? 'border-rose-300 bg-rose-50/40'
            : 'border-stone-200'
        } shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-semibold text-slate-500">문항 0${q.id}</span>
              <span class="text-xs text-slate-500">${q.korean}</span>
            </div>

            <div class="flex items-center gap-2 text-base font-bold text-slate-900 mb-3">
              <span class="text-emerald-800">${q.baseWord}</span>
              <span class="text-slate-400">${q.suffix}</span>
              <span class="text-slate-400">=</span>
              <span class="text-amber-800">?</span>
            </div>
          </div>

          <div>
            <div class="flex items-center gap-1.5 mb-2">
              <input type="text"
                     id="unlu-input-${q.id}"
                     lang="tr" aria-label="${escapeHTML(course.t('Turkish answer, question ','터키어 답, 문항 ')+q.id)}"
                     placeholder="정답 입력..."
                     value="${escapeHTML(stateObj.value)}"
                     class="flex-1 bg-stone-50 border border-stone-200 focus:border-emerald-600 rounded-lg px-3 py-1.5 text-xs text-slate-900 outline-none">
              <button onclick="checkUnluAnswer(${q.id})" class="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition shadow-sm">
                확인
              </button>
            </div>

            <div id="unlu-feedback-${q.id}" role="status">${stateObj.isCorrect !== null ? `
              <p class="text-[11px] ${stateObj.isCorrect ? 'text-emerald-800' : 'text-rose-700'} font-medium">
                ${stateObj.isCorrect ? '✓ 정답입니다!' : `✕ 오답입니다 (정답: ${q.correctAnswer})`} - ${q.explanation}
              </p>
            ` : ''}</div>
          </div>
        </div>
      `;
    }).join('');
  }

  window.checkUnluAnswer = function(qId) {
    const input = document.getElementById(`unlu-input-${qId}`);
    if (!input) return;
    const val = input.value.trim().toLocaleLowerCase('tr-TR');
    const q = APP_DATA.syntax.unluDusmesiQuiz.find(item => item.id === qId);
    if (!q) return;

    const isCorrect = val === q.correctAnswer.toLocaleLowerCase('tr-TR');
    state.unluAnswers[qId] = { value: val, isCorrect }; course.entry('ch4-2').practised=true; course.save();

    if (isCorrect) {
      window.audioEngine.playCorrectSound();
    } else {
      window.audioEngine.playWrongSound();
    }
    renderUnluQuiz();
  };

  // Turkish Special Character Bar clicks
  // -----------------------------------------------------------
  // TAB 5: 6단계 기도문 빌더 (Prayer Workshop)
  // -----------------------------------------------------------
  function initPrayerWorkshop() {
    renderPrayerFormulaSteps();
    renderAssembledPrayerPreview();
    initPrayerPresets();
    initPrayerStorage();
    initAmbientAudioPadUI();
    renderSituationalPrayers();
  }

  function renderSituationalPrayers() {
    const container = document.getElementById('situational-prayer-container');
    if (!container || !APP_DATA.prayer.situationalLibrary) return;

    container.innerHTML = APP_DATA.prayer.situationalLibrary.map((item, idx) => `
      <div class="card-cream p-5 space-y-3">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-[#CDDCD3]">
          <div>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E9F5F0] text-[#2A6F5B] border border-[#CFE6DC] mb-1 inline-block">
              ${item.category}
            </span>
            <h4 class="text-sm sm:text-base font-extrabold text-[#1C332A]">${item.title}</h4>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="window.audioEngine.speakTurkish(\`${item.tr.replace(/[`$\\]/g, '')}\`)" class="px-3 py-1.5 rounded-lg bg-[#2A6F5B] hover:bg-[#1E5343] text-white text-xs font-bold transition flex items-center gap-1 shadow-xs">
              <span>🔊</span>
              <span>터키어 낭독</span>
            </button>
            <button type="button" data-copy-text="${escapeHTML(item.tr)}" class="px-3 py-1.5 rounded-lg bg-white hover:bg-[#E2ECE6] text-[#1C332A] text-xs font-bold border border-[#CDDCD3] transition flex items-center gap-1">
              <span>📋</span>
              <span>복사</span>
            </button>
          </div>
        </div>
        <div class="space-y-2">
          <p class="text-xs sm:text-sm text-[#1C332A] font-medium leading-relaxed whitespace-pre-line bg-white/70 p-3.5 rounded-lg border border-[#CDDCD3]/70 font-mono">${item.tr}</p>
          <p class="text-xs text-[#5D776C] leading-relaxed whitespace-pre-line pl-1">${item.ko}</p>
        </div>
      </div>
    `).join('');
  }

  function renderPrayerFormulaSteps() {
    const container = document.getElementById('prayer-steps-accordion');
    if (!container) return;

    container.innerHTML = APP_DATA.prayer.steps.map((st, sIdx) => {
      return `
        <div class="bg-white p-4 rounded-xl border border-stone-200 shadow-sm mb-3">
          <div class="flex items-center justify-between mb-2">
            <div>
              <div class="flex items-center gap-2">
                <span class="w-6 h-6 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold flex items-center justify-center">0${st.step}</span>
                <h4 class="text-sm font-bold text-slate-900">${st.koreanName}</h4>
              </div>
              <p class="text-[11px] text-slate-500 mt-0.5">${st.desc}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-1.5 mt-2.5">
            ${st.options.map(opt => {
              const isSelected = state.assembledPrayer[sIdx] === opt.tr;
              return `
                <div class="prayer-option-row"><button type="button" onclick="setPrayerFormulaStep(${sIdx}, '${opt.tr.replace(/'/g, "\\'")}')"
                        class="p-2.5 rounded-lg text-left text-xs transition border flex items-center justify-between gap-2 ${
                          isSelected
                            ? 'bg-emerald-50 text-emerald-950 border-emerald-400 font-semibold shadow-sm'
                            : 'bg-stone-50 text-slate-700 border-stone-200 hover:bg-stone-100'
                        }">
                  <div class="flex-1">
                    <span class="block">${opt.tr}</span>
                    <span class="text-[10px] opacity-75">${opt.ko}</span>
                  </div>
                </button><button type="button" onclick="window.audioEngine.speakTurkish('${opt.tr.replace(/'/g, "\\'")}')" aria-label="${course.t('Play synthetic speech','합성 음성 듣기')}" class="text-slate-400 hover:text-emerald-700" title="듣기">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                  </button>
                </div>
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
    window.persistPrayerDraft?.();
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
              class="p-3 rounded-xl bg-white border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50/30 text-left transition flex flex-col gap-1 shadow-sm">
        <span class="text-xs font-bold text-emerald-800">${preset.title}</span>
        <span class="text-[11px] text-slate-500 line-clamp-1">${preset.desc}</span>
      </button>
    `).join('');
  }

  window.loadPrayerPreset = function(presetIdx) {
    const preset = APP_DATA.prayer.presets[presetIdx];
    if (!preset) return;
    state.assembledPrayer = [...preset.parts];
    renderPrayerFormulaSteps();
    renderAssembledPrayerPreview();
    window.persistPrayerDraft?.();
    window.audioEngine.playCorrectSound();
    showToast(`'${preset.title}' 템플릿이 로드되었습니다.`, 'success');
  };

  // Copy Prayer
  const copyPrayerBtn = document.getElementById('copy-prayer-btn');
  if (copyPrayerBtn) {
    copyPrayerBtn.addEventListener('click', () => {
      const trTextarea = document.getElementById('assembled-tr-textarea');
      if (!trTextarea) return;
      copyText(trTextarea.value);
    });
  }

  // TTS Read Aloud
  const speakPrayerBtn = document.getElementById('speak-prayer-btn');
  if (speakPrayerBtn) {
    speakPrayerBtn.addEventListener('click', () => {
      const trTextarea = document.getElementById('assembled-tr-textarea');
      if (!trTextarea || !trTextarea.value.trim()) return;
      window.audioEngine.speakTurkish(trTextarea.value, 0.95);
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

        const title = prompt(course.t('Enter a title for this prayer:', '기도문 제목을 입력하세요:'), course.t('My Turkish prayer','나의 터키어 기도'));
        if (!title?.trim()) return;

        const newPrayer = {
          id: Date.now().toString(),
          title: title.trim(),
          content: trTextarea.value,
          createdAt: new Date().toLocaleDateString('ko-KR')
        };

        state.savedPrayers.unshift(newPrayer);
        const persisted=savePrayersToStorage();
        renderSavedPrayersList();
        showToast(persisted?course.t('Prayer saved on this device.','기도문을 이 기기에 저장했습니다.'):course.t('Device storage is unavailable. This prayer is kept for this session only; export a backup before closing.','기기 저장소를 사용할 수 없습니다. 기도는 이번 세션에만 유지됩니다. 닫기 전에 백업을 내보내세요.'), persisted?'success':'info');
      });
    }
  }

  function loadSavedPrayersFromStorage() {
    try {
      const raw = learningStore.getRaw('spiritual_turkish_prayers');
      if (raw) {
        const parsed = JSON.parse(raw);
        state.savedPrayers = Array.isArray(parsed) ? parsed.filter(p => p && typeof p.id === 'string' && typeof p.title === 'string' && typeof p.content === 'string') : [];
      }
    } catch (e) {
      console.warn("Storage load error:", e);
    }
  }

  function savePrayersToStorage() {
    try {
      return learningStore.set('spiritual_turkish_prayers', state.savedPrayers);
    } catch (e) {
      console.warn("Storage save error:", e);
      return false;
    }
  }

  function renderSavedPrayersList() {
    const container = document.getElementById('saved-prayers-list');
    if (!container) return;

    if (state.savedPrayers.length === 0) {
      container.innerHTML = `
        <p class="text-xs text-slate-400 py-3 text-center">저장된 기도문이 없습니다. 직접 조합한 기도문을 저장해 보세요.</p>
      `;
      return;
    }

    container.innerHTML = state.savedPrayers.map(p => `
      <div class="p-2.5 rounded-lg bg-stone-50 border border-stone-200 flex items-center justify-between gap-2">
        <div class="flex-1 min-w-0">
          <h5 data-user-content class="text-xs font-bold text-slate-800 truncate">${escapeHTML(p.title)}</h5>
          <p data-user-content class="text-[10px] text-slate-400">${escapeHTML(p.createdAt)}</p>
        </div>
        <div class="flex items-center gap-1.5 shrink-0">
          <button type="button" data-load-prayer="${escapeHTML(p.id)}" class="px-2 py-0.5 rounded bg-white hover:bg-emerald-50 text-emerald-800 border border-stone-200 text-xs font-semibold shadow-sm">
            불러오기
          </button>
          <button type="button" data-delete-prayer="${escapeHTML(p.id)}" aria-label="${escapeHTML(course.t('Delete saved prayer: ','저장한 기도문 삭제: ')+p.title)}" class="p-1 rounded bg-white hover:bg-rose-50 text-slate-400 hover:text-rose-600 border border-stone-200 text-xs">
            ✕
          </button>
        </div>
      </div>
    `).join('');
    container.querySelectorAll('[data-load-prayer]').forEach(b=>b.onclick=()=>window.loadSavedPrayerById(b.dataset.loadPrayer));
    container.querySelectorAll('[data-delete-prayer]').forEach(b=>b.onclick=()=>window.deleteSavedPrayerById(b.dataset.deletePrayer));
  }

  window.loadSavedPrayerById = function(id) {
    const item = state.savedPrayers.find(p => p.id === id);
    if (!item) return;
    const trTextarea = document.getElementById('assembled-tr-textarea');
    if (trTextarea) {
      trTextarea.value = item.content;
      window.persistPrayerDraft?.();
      showToast(course.t('Prayer loaded.','기도문을 불러왔습니다.'), 'success');
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
        window.audioEngine.toggleAmbientPrayerPad((playing) => {
          ambientToggleBtn.setAttribute('aria-pressed',String(playing));
          if (playing) {
            ambientToggleBtn.innerHTML = `
              <span class="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
              <span>${course.t('Stop prayer background','기도 배경음 정지')}</span>
            `;
            ambientToggleBtn.className = "px-3.5 py-1.5 rounded-lg bg-emerald-100 text-emerald-900 border border-emerald-300 font-semibold text-xs flex items-center gap-2 shadow-sm transition";
            if (ambientVisualizer) ambientVisualizer.classList.remove('hidden');
          } else {
            ambientToggleBtn.innerHTML = `
              <span>🎵</span>
              <span>${course.t('Play quiet prayer background','조용한 기도 배경음 재생')}</span>
            `;
            ambientToggleBtn.className = "px-3.5 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-slate-700 font-semibold text-xs flex items-center gap-2 border border-stone-200 transition";
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
  // TAB 6: 종교 용어 표기 규칙 (Dini Yazım Kuralları - TDK)
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
            b.className = "px-3 py-1 rounded-lg text-xs font-semibold transition bg-emerald-700 text-white shadow-sm";
          } else {
            b.className = "px-3 py-1 rounded-lg text-xs font-semibold transition bg-stone-100 text-slate-700 hover:bg-stone-200";
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
      const categoryName=rule.category; const enToKo={Capitalization:'대소문자',Apostrophes:'아포스트로피',Spelling:'철자법','Word spacing':'띄어쓰기',Institutions:'기관명',Festivals:'축제·절기',Dates:'날짜 표기',Places:'지명 표기',Addresses:'주소 표기'};
      const normalized=enToKo[categoryName] || categoryName;
      if (category === '대소문자') return normalized === '대소문자';
      if (category === '아포스트로피') return normalized === '아포스트로피';
      if (category === '철자법') return normalized === '철자법';
      if (category === '합성어·기관') return ['띄어쓰기', '기관명', '축제·절기'].includes(normalized);
      if (category === '지명·주소') return ['날짜 표기', '지명 표기', '주소 표기'].includes(normalized);
      return true;
    });

    container.innerHTML = filtered.map(rule => `
      <div class="bg-white p-5 rounded-xl border border-stone-200 shadow-sm hover:border-stone-300 transition-all flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="px-2 py-0.5 rounded text-xs font-bold bg-stone-100 text-slate-700">규칙 0${rule.id}</span>
            <span class="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-slate-600 border border-stone-200 font-medium">${rule.category}</span>
          </div>
          <h4 class="text-base font-bold text-slate-900 mb-0.5">${rule.title}</h4>
          <p class="text-xs text-slate-400 italic mb-2.5 font-mono">${rule.turkishTitle}</p>

          <p class="text-xs text-slate-600 mb-3 bg-stone-50 p-2.5 rounded-lg border border-stone-200/80 leading-relaxed">
            ${rule.summary}
          </p>

          <div class="space-y-1.5 mb-3 text-xs">
            <div class="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 flex items-start gap-2">
              <span class="font-bold text-emerald-800 shrink-0">⭕ 올바른 표기:</span>
              <span class="font-semibold">${rule.correct}</span>
            </div>
            <div class="p-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-950 flex items-start gap-2">
              <span class="font-bold text-rose-700 shrink-0">❌ 흔한 오기:</span>
              <span>${rule.incorrect}</span>
            </div>
            ${rule.contrast ? `
              <div class="p-2 rounded-lg bg-sand-50 border border-sand-200 text-sand-900 text-[11px] leading-tight flex items-start gap-1.5">
                <span class="shrink-0">⚖️</span>
                <span><strong>대조 분석:</strong> ${rule.contrast}</span>
              </div>
            ` : ''}
          </div>

          <div class="text-[11px] text-slate-600 leading-relaxed mb-3 whitespace-pre-line bg-stone-50 p-2.5 rounded-lg border border-stone-200/60">
            ${rule.explanation}
          </div>
        </div>

        <div class="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
          <span class="text-[11px] text-emerald-800 font-medium line-clamp-1 italic">${rule.biblicalRef}</span>
          <button data-speech="${escapeHTML(rule.correct.split(',')[0].replace(/\[o\]/g, '').replace(/'/g, "\\'"))}"
                  class="p-1.5 rounded-lg bg-stone-100 hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 border border-stone-200 text-xs shrink-0 transition" title="발음 듣기">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
          </button>
        </div>
      </div>
    `).join('');
  }

  function renderOrthographyAppendix() {
    const container = document.getElementById('orthography-appendix-container');
    if (!container || !APP_DATA.orthography || !APP_DATA.orthography.appendix) return;

    container.innerHTML = APP_DATA.orthography.appendix.items.map(item => `
      <div class="p-4 rounded-xl bg-white border border-stone-200 shadow-sm hover:border-stone-300 transition flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <h4 class="text-sm font-bold text-amber-900">${item.rule}</h4>
            <span class="text-xs font-mono text-slate-400">${item.turkish}</span>
          </div>
          <div class="text-2xl font-bold text-slate-900 mb-2 font-mono tracking-wider">${item.format}</div>
          <div class="p-2.5 rounded-lg bg-stone-50 border border-stone-200 text-xs text-slate-700 mb-2 leading-relaxed">
            <strong class="text-amber-900">한국어와의 대조:</strong> ${item.koreanComparison}
          </div>
          <div class="text-xs text-slate-500 italic">예시: ${item.example}</div>
        </div>
        <div class="mt-3 pt-2 border-t border-stone-100 flex justify-end">
          <button data-speech="${escapeHTML(item.format.split(' ')[0])}" class="text-xs px-2.5 py-1 rounded bg-stone-100 hover:bg-stone-200 text-slate-700 border border-stone-200 flex items-center gap-1 transition">
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
        <div class="bg-white p-5 rounded-xl border border-stone-200 shadow-sm transition hover:border-stone-300 flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between gap-4 mb-2">
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-1.5">
                  <span class="px-2 py-0.5 text-xs font-semibold rounded bg-stone-100 text-slate-700">문제 0${idx + 1}</span>
                  <span class="text-xs text-slate-500">${q.ruleRef}</span>
                </div>
                <h4 class="text-sm font-semibold text-slate-900 leading-snug">${q.question}</h4>
              </div>
            </div>

            <div class="flex items-center gap-2.5 my-3">
              <button onclick="handleOrthoQuizClick(${q.id}, 'O')"
                      class="flex-1 py-2 px-3 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
                        userAnswer === 'O'
                          ? (q.answer === 'O' ? 'bg-emerald-700 text-white ring-2 ring-emerald-300' : 'bg-rose-600 text-white')
                          : 'bg-stone-100 text-slate-800 hover:bg-stone-200'
                      }">
                <span>⭕</span> 그렇다 (O)
              </button>
              <button onclick="handleOrthoQuizClick(${q.id}, 'X')"
                      class="flex-1 py-2 px-3 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
                        userAnswer === 'X'
                          ? (q.answer === 'X' ? 'bg-emerald-700 text-white ring-2 ring-emerald-300' : 'bg-rose-600 text-white')
                          : 'bg-stone-100 text-slate-800 hover:bg-stone-200'
                      }">
                <span>❌</span> 아니다 (X)
              </button>
            </div>
          </div>

          ${isAnswered ? `
            <div class="pt-3 border-t border-stone-100 animate-fadeIn">
              <div class="flex items-center gap-2 mb-1.5">
                <span class="text-xs font-bold px-2 py-0.5 rounded ${isCorrect ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-rose-50 text-rose-900 border border-rose-200'}">
                  ${isCorrect ? '정답입니다! ✓' : `오답입니다 (정답: ${q.answer}) ✕`}
                </span>
                <span class="text-xs text-emerald-800 font-semibold font-mono">올바른 표기: ${q.correctText}</span>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">${q.explanation}</p>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

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
                class="px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 border ${
                  isActive
                    ? 'bg-emerald-700 text-white border-emerald-600 shadow-sm'
                    : 'bg-stone-100 text-slate-700 border-stone-200 hover:bg-stone-200'
                }">
          <span>문장 0${s.id}</span>
          <span class="text-[10px] px-1.5 py-0.2 rounded-full ${isComplete ? 'bg-white/80 text-emerald-900' : 'bg-white text-slate-700'} font-normal">
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
        remainingBadge.className = "px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 font-bold text-[11px]";
        remainingBadge.innerText = "모든 오류 교정 완료! 🎉";
      } else {
        remainingBadge.className = "px-2.5 py-0.5 rounded-full bg-stone-200 text-slate-700 font-semibold text-[11px]";
        remainingBadge.innerText = `남은 교정 대상: ${remaining}개`;
      }
    }

    if (translationEl) {
      translationEl.innerText = `번역: "${currentSentence.translation}"`;
    }

    boardContainer.innerHTML = currentSentence.tokens.map((tok, tokIdx) => {
      const isFound = !!currentFound[tokIdx];

      if (tok.isError && isFound) {
        return `
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border-2 border-emerald-400 text-emerald-950 text-sm font-bold shadow-sm animate-fadeIn">
            <span class="line-through text-slate-400 text-xs">${tok.word}</span>
            <span>➔</span>
            <span class="text-emerald-900 font-extrabold underline">${tok.correct}</span>
            <span class="text-xs">✓</span>
          </span>
        `;
      } else {
        return `
          <button onclick="handleProofreadingTokenClick(${state.activeProofreadingSentenceIdx}, ${tokIdx})"
                  class="px-3 py-1.5 rounded-lg bg-white hover:bg-stone-100 text-slate-800 text-sm font-medium border border-stone-200 transition hover:border-emerald-600 hover:scale-105 active:scale-95 shadow-sm">
            ${tok.word}
          </button>
        `;
      }
    }).join('');

    if (feedbackBox) {
      const discoveredTokens = currentSentence.tokens.filter((t, idx) => t.isError && currentFound[idx]);
      if (discoveredTokens.length === 0) {
        feedbackBox.innerHTML = `
          <div class="p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs text-slate-500 text-center">
            문장 안에서 철자, 아포스트로피, 띄어쓰기, 대소문자 규정이 잘못된 단어를 찾아 클릭하세요.
          </div>
        `;
      } else {
        feedbackBox.innerHTML = `
          <div class="space-y-2">
            <span class="text-xs font-bold text-emerald-900 block">발견 및 교정된 맞춤법 규정:</span>
            ${discoveredTokens.map(t => `
              <div class="p-3 rounded-lg bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950 flex items-start gap-2 animate-fadeIn">
                <span class="text-emerald-800 font-bold shrink-0">✓ [${course.t('Correction','교정')}: ${t.word} ➔ ${t.correct}]</span>
                <span class="text-slate-700">${t.rule}</span>
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
        showToast(course.t(`Error found! '${tok.word}' ➔ '${tok.correct}' (+25 practice points)`, `오탈자 발견! '${tok.word}' ➔ '${tok.correct}' (+25점)`), "success");
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
      showToast(`'${tok.word}'(은)는 TDK 규정상 올바른 표기입니다. 다른 단어를 찾아보세요.`, "info");
    }
  };

  // -----------------------------------------------------------
  window.refreshTeachingContent = () => {
    renderOXQuiz(); renderSyllables(); renderSapkaComparator(); renderCurrentScenario();
    renderWorldviewConcepts(); renderAhiretTimeline(); renderScriptureSyntaxViewer();
    renderFlipCards(); renderUnluQuiz(); renderPrayerFormulaSteps(); renderAssembledPrayerPreview();
    initPrayerPresets(); renderSavedPrayersList();
    document.querySelectorAll('#speech-words-container [data-word]').forEach(chip=>{const found=APP_DATA.pronunciation.speechPracticeWords.find(w=>w.turkish===chip.dataset.word);if(found)chip.querySelector('span').textContent=`(${found.korean})`;});
    const target=APP_DATA.pronunciation.speechPracticeWords.find(w=>w.turkish===state.activeSpeechTarget);if(target)document.getElementById('target-korean-display').textContent=target.korean;
    renderSituationalPrayers(); renderScenarioSelector(); renderOrthographyRules(state.orthoCategory); renderOrthographyAppendix(); renderOrthographyQuiz(); renderProofreadingTabs(); renderProofreadingBoard();
  };

  document.addEventListener('click', e => {
    const b=e.target.closest('[data-speech]');
    if(b&&(b.closest('#legacy-view')||!b.closest('#learning-app')))audioEngine.speakTurkish(b.dataset.speech);
    const copy=e.target.closest('[data-copy-text]');if(copy)copyText(copy.dataset.copyText);
    const flip=e.target.closest('[data-flip-card]');if(flip)window.toggleCardFlip(Number(flip.dataset.flipCard));
  });
  document.addEventListener('input',e=>{
    if(!e.target.id?.startsWith('unlu-input-'))return;
    const id=e.target.id.slice('unlu-input-'.length);
    state.unluAnswers[id]={value:e.target.value,isCorrect:null};
    document.getElementById('unlu-feedback-'+id).textContent='';
  });

  // Initialize All Modules
  // -----------------------------------------------------------
  initPronunciationLab();
  initSimulator();
  initWorldviewExplorer();
  initSyntaxCatechism();
  initPrayerWorkshop();
  initOrthographyLab();

  // Initial curriculum lesson activate
  selectLesson(state.currentLessonId);
  updateCurriculumProgress();
});
