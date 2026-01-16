
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Camera } from 'lucide-react';

const images = [
  {
    url: "https://i.postimg.cc/C5CTTX2k/photo-2025-09-03-14-08-35.jpg",
    title: "Amaliy mashg'ulotlar",
    desc: "Talabalarning dala maydonidagi mahorat darslari va real amaliyot jarayonlari."
  },
  {
    url: "https://i.postimg.cc/650JHsn3/photo-2025-10-10-10-39-32.jpg",
    title: "Jamoaviy tayyorgarlik",
    desc: "Intizom, hamjihatlik va jamoa bo'lib ishlash ko'nikmalarini shakllantirish."
  },
  {
    url: "https://i.postimg.cc/YSTJ4tKf/photo-2025-10-10-13-17-14.jpg",
    title: "Sport va salomatlik",
    desc: "Sog'lom turmush tarzi - barkamol avlod tarbiyasining muhim asosi."
  },
  {
    url: "https://i.postimg.cc/DyCpJ71J/photo-2025-10-23-17-59-03.jpg",
    title: "Vatanparvarlik ruhi",
    desc: "Yoshlarni vatanga sadoqat va harbiy-vatanparvarlik ruhida tarbiyalash darslari."
  },
  {
    url: "https://i.postimg.cc/7PjMpb1m/photo-2025-10-10-13-17-15.jpg",
    title: "Birinchi yordam",
    desc: "Favqulodda vaziyatlarda to'g'ri harakat qilish va hayotiy muhim ko'nikmalar."
  }
];

const StudentLifeSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div className="relative group max-w-6xl mx-auto px-4">
      <div className="relative h-[450px] md:h-[650px] w-full overflow-hidden rounded-[2.5rem] shadow-2xl bg-slate-200">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentIndex 
                ? 'opacity-100 scale-100 translate-x-0 rotate-0' 
                : 'opacity-0 scale-110 translate-x-8 -rotate-1'
            }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover brightness-90"
            />
            {/* Elegant Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
            
            {/* Badge */}
            <div className="absolute top-8 left-8 flex items-center space-x-2 bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full border border-white/30 text-white text-xs font-bold uppercase tracking-widest animate-in fade-in slide-in-from-top-4 duration-1000">
              <Camera className="w-3 h-3" />
              <span>Talabalar hayoti</span>
            </div>

            {/* Content */}
            <div className="absolute bottom-12 left-8 md:left-16 right-8 md:right-16 text-white max-w-3xl">
              <h4 className="text-3xl md:text-5xl font-extrabold mb-4 animate-in slide-in-from-bottom-8 duration-700 leading-tight">
                {image.title}
              </h4>
              <p className="text-slate-200 text-lg md:text-xl font-light opacity-90 animate-in slide-in-from-bottom-6 duration-1000 line-clamp-2 md:line-clamp-none">
                {image.desc}
              </p>
              
              <div className="mt-8 flex items-center space-x-6 animate-in fade-in duration-1000 delay-500">
                <div className="flex items-center text-blue-400 text-sm font-bold">
                  <MapPin className="w-4 h-4 mr-2" />
                  Zomin, Texnikum maydoni
                </div>
                <div className="h-4 w-[1px] bg-white/20"></div>
                <div className="text-slate-300 text-sm">O'quv yili 2024-2025</div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <div className="absolute bottom-12 right-12 hidden md:flex items-center space-x-4 z-20">
          <button
            onClick={handlePrev}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-4 rounded-2xl transition-all border border-white/10 active:scale-95 group/btn"
          >
            <ChevronLeft className="w-6 h-6 group-hover/btn:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-2xl transition-all shadow-lg shadow-blue-900/20 active:scale-95 group/btn"
          >
            <ChevronRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Progress Bars (Indicators) */}
      <div className="flex justify-center mt-8 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="group relative h-1.5 transition-all duration-300 rounded-full bg-slate-200 overflow-hidden w-12 md:w-20"
          >
            <div 
              className={`absolute inset-0 bg-blue-600 transition-all duration-300 ${
                index === currentIndex ? 'translate-x-0' : '-translate-x-full'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default StudentLifeSlider;
