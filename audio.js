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

    // Speech Synthesis
    this.turkishVoice = null;
    this.initVoices();

    // Speech Recognition
    this.recognition = null;
    this.isListening = false;
    this.initRecognition();
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
    if (!('speechSynthesis' in window)) return;
    const findVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      // Look for Turkish voices
      this.turkishVoice = voices.find(v => v.lang.toLowerCase().startsWith('tr')) || null;
    };
    findVoice();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = findVoice;
    }
  }

  speakTurkish(text, rate = 1.0, onStart, onEnd) {
    if (!('speechSynthesis' in window)) {
      alert("죄송합니다. 현재 브라우저가 음성 합성(Speech Synthesis)을 지원하지 않습니다.");
      return;
    }

    window.speechSynthesis.cancel(); // Stop any ongoing speech

    const cleanText = text.replace(/[*_#]/g, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'tr-TR';
    utterance.rate = rate;
    utterance.pitch = 1.0;

    if (this.turkishVoice) {
      utterance.voice = this.turkishVoice;
    }

    if (onStart) utterance.onstart = onStart;
    if (onEnd) utterance.onend = onEnd;
    utterance.onerror = (err) => {
      console.warn("TTS Error:", err);
      if (onEnd) onEnd();
    };

    window.speechSynthesis.speak(utterance);
  }

  stopSpeaking() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  // -------------------------------------------------------------
  // Web Speech API: Turkish Speech Recognition (STT)
  // -------------------------------------------------------------
  initRecognition() {
    const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognitionClass) {
      this.recognition = new SpeechRecognitionClass();
      this.recognition.lang = 'tr-TR';
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      this.recognition.maxAlternatives = 1;
    }
  }

  hasSpeechRecognition() {
    return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  }

  startListening(onResult, onError, onEnd) {
    if (!this.recognition) {
      if (onError) onError("브라우저에서 Web Speech API(음성 인식)를 지원하지 않거나 마이크 권한이 필요합니다. Chrome 브라우저를 권장합니다.");
      return;
    }

    if (this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }

    this.recognition.onstart = () => {
      this.isListening = true;
    };

    this.recognition.onresult = (event) => {
      this.isListening = false;
      if (event.results && event.results[0] && event.results[0][0]) {
        const spoken = event.results[0][0].transcript;
        if (onResult) onResult(spoken);
      }
    };

    this.recognition.onerror = (event) => {
      this.isListening = false;
      console.warn("Recognition error:", event.error);
      let msg = "음성을 인식하지 못했습니다. 다시 시도해 주세요.";
      if (event.error === 'not-allowed') {
        msg = "마이크 사용 권한이 거부되었습니다. 브라우저 주소창에서 마이크 권한을 허용해 주세요.";
      } else if (event.error === 'no-speech') {
        msg = "음성이 감지되지 않았습니다. 마이크에 가까이 대고 터키어로 발음해 보세요.";
      }
      if (onError) onError(msg);
    };

    this.recognition.onend = () => {
      this.isListening = false;
      if (onEnd) onEnd();
    };

    try {
      this.recognition.start();
    } catch (e) {
      this.isListening = false;
      if (onError) onError("마이크 활성화 중 오류가 발생했습니다: " + e.message);
    }
  }

  stopListening() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  }

  // -------------------------------------------------------------
  // Pronunciation Scoring Algorithm (Levenshtein Distance)
  // -------------------------------------------------------------
  calculateSimilarity(target, spoken) {
    const normalize = (str) => {
      return str
        .toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?'"“”]/g, "")
        .trim();
    };

    const s1 = normalize(target);
    const s2 = normalize(spoken);

    if (s1 === s2) return 100;
    if (s1.length === 0 || s2.length === 0) return 0;

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
