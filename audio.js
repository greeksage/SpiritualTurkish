/**
 * Spiritual Turkish - Audio & Speech Synthesis/Recognition Engine
 * Powered by Web Audio API & Web Speech API (Client-side, No paid APIs)
 */

class AudioEngine {
  constructor() {
    this.audioCtx = null;
    this.ambientNodes = null;
    this.isAmbientPlaying = false;
    this.ambientVolume = 0.25;

    // Playback settings
    this.playbackRate = 1.0;
    this.isMuted = false;

    // Speech Synthesis
    this.turkishVoice = null;
    this.initVoices();

    // Speech Recognition
    this.recognition = null;
    this.isListening = false;
    this.initRecognition();
  }

  toggleSpeed() {
    this.playbackRate = this.playbackRate === 1.0 ? 0.8 : 1.0;
    return this.playbackRate;
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  // Ensure AudioContext is initialized after user gesture
  getAudioContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  // -------------------------------------------------------------
  // Web Audio API: Sound Effects
  // -------------------------------------------------------------
  playCorrectSound() {
    if (this.isMuted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      // Play pleasant two-tone chime (E5 -> B5)
      const freqs = [659.25, 987.77];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);

        gain.gain.setValueAtTime(0, now + idx * 0.1);
        gain.gain.linearRampToValueAtTime(0.2, now + idx * 0.1 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.45);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.5);
      });
    } catch (e) {
      console.warn("Audio effect error:", e);
    }
  }

  playWrongSound() {
    if (this.isMuted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.linearRampToValueAtTime(130, now + 0.25);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.3);
    } catch (e) {
      console.warn("Audio effect error:", e);
    }
  }

  playClickSound() {
    if (this.isMuted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.07);
    } catch (e) {
      console.warn("Audio click error:", e);
    }
  }

  playSyllableTap() {
    if (this.isMuted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.16);
    } catch (e) {
      console.warn("Syllable tap audio error:", e);
    }
  }

  // -------------------------------------------------------------
  // Web Audio API: Ethereal Spiritual Prayer Ambient Synth
  // Creates a warm, meditative ambient chord without external audio files
  // -------------------------------------------------------------
  toggleAmbientPrayerPad(onToggle) {
    if (this.isAmbientPlaying) {
      this.stopAmbientPrayerPad();
      if (onToggle) onToggle(false);
      return false;
    } else {
      this.startAmbientPrayerPad();
      if (onToggle) onToggle(true);
      return true;
    }
  }

  startAmbientPrayerPad() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      if (this.ambientNodes) {
        this.stopAmbientPrayerPad();
      }

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.linearRampToValueAtTime(this.ambientVolume, ctx.currentTime + 2.0);

      // Lowpass filter for warm reverent tone
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(500, ctx.currentTime);
      filter.Q.setValueAtTime(2.0, ctx.currentTime);

      // Gentle LFO filter modulation
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(0.15, ctx.currentTime); // very slow swell
      lfoGain.gain.setValueAtTime(150, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      lfo.start();

      // D-major spiritual triad drone (D3, A3, F#4)
      const freqs = [146.83, 220.00, 293.66, 369.99];
      const oscillators = freqs.map((f, i) => {
        const osc = ctx.createOscillator();
        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(f + (i === 1 ? 0.3 : -0.2), ctx.currentTime); // gentle detuning
        osc.connect(filter);
        osc.start();
        return osc;
      });

      filter.connect(masterGain);
      masterGain.connect(ctx.destination);

      this.ambientNodes = { masterGain, filter, lfo, oscillators };
      this.isAmbientPlaying = true;
    } catch (e) {
      console.warn("Failed to start ambient pad:", e);
    }
  }

  stopAmbientPrayerPad() {
    if (!this.ambientNodes) return;
    try {
      const { masterGain, lfo, oscillators } = this.ambientNodes;
      const ctx = this.getAudioContext();
      if (ctx && masterGain) {
        masterGain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
        setTimeout(() => {
          try {
            lfo.stop();
            oscillators.forEach(osc => osc.stop());
          } catch (e) {}
        }, 1300);
      }
    } catch (e) {
      console.warn("Error stopping ambient pad:", e);
    }
    this.ambientNodes = null;
    this.isAmbientPlaying = false;
  }

  setAmbientVolume(val) {
    this.ambientVolume = Math.max(0, Math.min(1, val));
    if (this.ambientNodes && this.ambientNodes.masterGain) {
      const ctx = this.getAudioContext();
      if (ctx) {
        this.ambientNodes.masterGain.gain.setValueAtTime(this.ambientVolume, ctx.currentTime);
      }
    }
  }

  // -------------------------------------------------------------
  // Web Speech API: Text-to-Speech (TTS) for Turkish
  // -------------------------------------------------------------
  initVoices() {
    if (!window.speechSynthesis) return;
    const findVoice = () => {
      let voices=[];try{voices=window.speechSynthesis.getVoices();}catch{}
      // Look for Turkish voices
      this.turkishVoice = voices.find(v => v.lang.toLocaleLowerCase('tr').startsWith('tr')) || null;
    };
    findVoice();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = findVoice;
    }
  }

  speakTurkish(text, rate = null, onStart, onEnd, statusTarget = null) {
    const report = (en,ko) => {
      const message=window.course?.t(en,ko) || en;
      const lessonStatus=document.getElementById('course-audio-status');
      const status=statusTarget || document.querySelector('#word-inspector[open] #word-audio-status') || (lessonStatus && lessonStatus.closest('.lesson-section') && !lessonStatus.closest('.lesson-section').classList.contains('hidden') && !document.getElementById('lesson-view')?.hidden ? lessonStatus : document.getElementById('global-audio-status'));
      if(status)status.textContent=message;
      if(onEnd)onEnd();
      // onEnd may write its own status; unavailable/error information takes priority.
      if(status)status.textContent=message;
    };
    if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) {
      report("Synthetic speech is unavailable in this browser. Read the Turkish text aloud or practise with a partner.","이 브라우저에서는 합성 음성을 사용할 수 없습니다. 터키어를 직접 읽거나 상대와 연습하세요.");
      return;
    }

    this.initVoices();
    if (!this.turkishVoice) {
      report('No Turkish synthetic voice is installed. The text remains available; install a Turkish system voice or practise with a partner.','터키어 합성 음성이 설치되어 있지 않습니다. 본문은 읽을 수 있습니다. 터키어 시스템 음성을 설치하거나 상대와 연습하세요.');
      return;
    }
    try {
    window.speechSynthesis.cancel(); // Stop any ongoing speech

    const cleanText = text.replace(/[*_#]/g, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'tr-TR';
    utterance.rate = (rate !== null && rate !== undefined) ? rate : this.playbackRate;
    utterance.pitch = 1.0;

    if (this.turkishVoice) {
      utterance.voice = this.turkishVoice;
    }

    if (onStart) utterance.onstart = onStart;
    if (onEnd) utterance.onend = onEnd;
    utterance.onerror = (err) => {
      if (err.error === 'canceled' || err.error === 'interrupted') { if(onEnd)onEnd(); return; }
      report('Synthetic speech could not play. The Turkish text is still available.','합성 음성을 재생할 수 없습니다. 터키어 본문은 읽을 수 있습니다.');
    };

    window.speechSynthesis.speak(utterance);
    } catch {
      report('Synthetic speech could not play. The Turkish text is still available.','합성 음성을 재생할 수 없습니다. 터키어 본문은 읽을 수 있습니다.');
    }
  }

  stopSpeaking() {
    if (window.speechSynthesis) {
      try{window.speechSynthesis.cancel();}catch{}
    }
  }

  // -------------------------------------------------------------
  // Web Speech API: Turkish Speech Recognition (STT)
  // -------------------------------------------------------------
  initRecognition() {
    const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognitionClass) {
      try {
      this.recognition = new SpeechRecognitionClass();
      this.recognition.lang = 'tr-TR';
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      this.recognition.maxAlternatives = 1;
      } catch {this.recognition=null;}
    }
  }

  hasSpeechRecognition() {
    return !!this.recognition;
  }

  startListening(onResult, onError, onEnd) {
    if (!this.recognition) {
      if (onError) onError(course.t('Speech recognition is unavailable. You can type and compare a response instead.', '음성 인식을 사용할 수 없습니다. 답을 입력하고 비교할 수 있습니다.'));
      return;
    }

    if (this.isListening) {
      this.stopListening();
    }

    this.recognition.onstart = () => {
      this.isListening = true;
    };

    this.recognition.onresult = (event) => {
      this.isListening = false;
      if (event.results && event.results[0] && event.results[0][0] && event.results[0][0].transcript?.trim()) {
        const spoken = event.results[0][0].transcript;
        if (onResult) onResult(spoken);
      } else if (onError) onError(course.t('No recognised text was returned. Try again or type a response to compare.','인식된 문자가 없습니다. 다시 시도하거나 답을 입력해 비교하세요.'));
    };

    this.recognition.onerror = (event) => {
      this.isListening = false;
      console.warn("Recognition error:", event.error);
      let msg = course.t('Speech was not recognised. Try again or type your response.', '음성을 인식하지 못했습니다. 다시 시도하거나 답을 입력하세요.');
      if (event.error === 'not-allowed') {
        msg = course.t('Microphone permission was denied. Enable it in browser settings if you want to use recognition.', '마이크 권한이 거부되었습니다. 음성 인식을 사용하려면 브라우저 설정에서 허용하세요.');
      } else if (event.error === 'no-speech') {
        msg = course.t('No speech detected. Try again or type your response.', '음성이 감지되지 않았습니다. 다시 시도하거나 답을 입력하세요.');
      }
      if (onError) onError(msg);
    };

    this.recognition.onend = () => {
      this.isListening = false;
      if (onEnd) onEnd();
    };

    try {
      this.isListening = true; // Include the pending permission/start interval.
      this.recognition.start();
    } catch (e) {
      this.isListening = false;
      if (onError) onError(course.t('Could not start microphone: ', '마이크를 시작할 수 없습니다: ') + e.message);
    }
  }

  stopListening() {
    if (this.recognition && this.isListening) {
      const ended=this.recognition.onend;
      // A cancelled session must not grade a late result against another word.
      this.recognition.onresult=null;this.recognition.onerror=null;this.recognition.onstart=null;this.recognition.onend=null;
      this.isListening = false;
      try {if(this.recognition.abort)this.recognition.abort();else this.recognition.stop();}catch{}
      ended?.();
    }
  }

  // -------------------------------------------------------------
  // Recognised-text match (Levenshtein distance): no phonetic assessment
  // -------------------------------------------------------------
  calculateSimilarity(target, spoken) {
    const normalize = (str) => {
      return str
        .toLocaleLowerCase('tr')
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?'"“”]/g, "")
        .trim();
    };

    const s1 = normalize(target);
    const s2 = normalize(spoken);

    if (s1.length === 0 || s2.length === 0) return 0;
    if (s1 === s2) return 100;

    // Levenshtein Matrix
    const matrix = [];
    for (let i = 0; i <= s2.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= s1.length; j++) {
      matrix[0][j] = j;
    }

    for (let i = 1; i <= s2.length; i++) {
      for (let j = 1; j <= s1.length; j++) {
        if (s2.charAt(i - 1) === s1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // substitution
            matrix[i][j - 1] + 1,     // insertion
            matrix[i - 1][j] + 1      // deletion
          );
        }
      }
    }

    const distance = matrix[s2.length][s1.length];
    const maxLength = Math.max(s1.length, s2.length);
    const score = Math.round(((maxLength - distance) / maxLength) * 100);
    return Math.max(0, score);
  }
}

// Global Audio Engine Instance
window.audioEngine = new AudioEngine();
