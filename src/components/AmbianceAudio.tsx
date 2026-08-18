import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const AmbianceAudio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  // Synthesize a soothing ambient Parisian jazz/lounge progression
  const startAmbiance = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Progression chords in Pentatonic/Lydian warm keys (Cmaj9, Am9, Fmaj7#11, Gsus4)
      const chordChimes = [
        [261.63, 329.63, 392.00, 493.88, 587.33], // Cmaj9
        [220.00, 261.63, 329.63, 392.00, 493.88], // Am9
        [174.61, 261.63, 329.63, 369.99, 440.00], // Fmaj7#11
        [196.00, 261.63, 293.66, 392.00, 440.00], // Gsus4
      ];

      let chordIdx = 0;

      const playChord = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
        const now = audioCtxRef.current.currentTime;
        const notes = chordChimes[chordIdx % chordChimes.length];
        chordIdx++;

        notes.forEach((freq, idx) => {
          const osc = audioCtxRef.current!.createOscillator();
          const gain = audioCtxRef.current!.createGain();

          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.12);

          // Soft ambient envelop
          gain.gain.setValueAtTime(0.0001, now);
          gain.gain.linearRampToValueAtTime(0.018 / notes.length, now + 1.2 + idx * 0.1);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.5);

          osc.connect(gain);
          gain.connect(audioCtxRef.current!.destination);

          osc.start(now + idx * 0.12);
          osc.stop(now + 5.0);
        });

        timerRef.current = window.setTimeout(playChord, 3800);
      };

      playChord();
      setIsPlaying(true);
    } catch {
      // Audio context policy fallback
    }
  };

  const stopAmbiance = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopAmbiance();
    } else {
      startAmbiance();
    }
  };

  useEffect(() => {
    return () => {
      stopAmbiance();
    };
  }, []);

  return (
    <aside aria-label="Ambiance Audio Player" className="fixed bottom-6 left-6 z-40">
      <button
        onClick={toggleAudio}
        className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-xl border transition-all duration-300 shadow-xl ${
          isPlaying
            ? 'bg-[#181824eb] text-[#ffd768] border-[#d4af3780] shadow-[0_0_20px_rgba(212,175,55,0.25)]'
            : 'bg-[#121217e6] text-[#a8a396] hover:text-white border-[#2c2b3b] hover:border-[#d4af3766]'
        }`}
        title={isPlaying ? 'Mute Ambiance' : 'Play Paris Lounge Ambiance'}
        id="ambiance-audio-toggle"
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-[#ffd768] animate-pulse" />
            <span className="hidden sm:inline">Paris Ambiance (On)</span>
          </>
        ) : (
          <>
            <Music className="w-4 h-4 text-[#d4af37]" />
            <span className="hidden sm:inline">Ambiance Music</span>
          </>
        )}
      </button>
    </aside>
  );
};
