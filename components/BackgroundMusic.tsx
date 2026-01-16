
import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Sokin va ishonchliroq instrumental musiqa manbasi
    const audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"); 
    audio.loop = true;
    audio.volume = 0.2;
    audioRef.current = audio;

    const handleError = (e: any) => {
      console.error("Audio yuklanishda xatolik yuz berdi:", e);
      setHasError(true);
      setIsPlaying(false);
    };

    audio.addEventListener('error', handleError);

    const startAudio = () => {
      if (!isPlaying && !hasError) {
        audio.play().then(() => {
          setIsPlaying(true);
          window.removeEventListener('click', startAudio);
          window.removeEventListener('scroll', startAudio);
          window.removeEventListener('touchstart', startAudio);
        }).catch(err => {
          console.warn("Autoplay brauzer tomonidan cheklangan yoki manba xatosi:", err);
        });
      }
    };

    // Foydalanuvchi interaksiyasini kutish
    window.addEventListener('click', startAudio);
    window.addEventListener('scroll', startAudio);
    window.addEventListener('touchstart', startAudio);

    return () => {
      audio.pause();
      audio.removeEventListener('error', handleError);
      window.removeEventListener('click', startAudio);
      window.removeEventListener('scroll', startAudio);
      window.removeEventListener('touchstart', startAudio);
    };
  }, [hasError, isPlaying]);

  const toggleMusic = () => {
    if (audioRef.current && !hasError) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Ijro etishda xato:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (hasError) return null;

  return (
    <div className="fixed bottom-24 left-6 z-[55]">
      <button
        onClick={toggleMusic}
        className={`p-4 rounded-full shadow-2xl transition-all duration-500 flex items-center justify-center group ${
          isPlaying 
            ? 'bg-white/70 backdrop-blur-md text-blue-600 border border-white/30' 
            : 'bg-slate-900/80 backdrop-blur-md text-white border border-white/10'
        } hover:scale-110 active:scale-95`}
        title={isPlaying ? "Musiqani to'xtatish" : "Musiqani yoqish"}
      >
        {isPlaying ? (
          <div className="relative">
            <Volume2 className="w-6 h-6 animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
          </div>
        ) : (
          <VolumeX className="w-6 h-6 opacity-60" />
        )}
        
        <span className="absolute left-16 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase tracking-widest font-bold">
          {isPlaying ? "Sokin musiqa yoqilgan" : "Musiqani yoqish"}
        </span>
      </button>
    </div>
  );
};

export default BackgroundMusic;
