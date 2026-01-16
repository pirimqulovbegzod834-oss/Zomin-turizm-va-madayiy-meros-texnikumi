
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: "https://i.postimg.cc/C5CTTX2k/photo-2025-09-03-14-08-35.jpg",
    title: "Amaliy mashg'ulotlar",
    desc: "Talabalarning dala maydonidagi mahorat darslari"
  },
  {
    url: "https://i.postimg.cc/650JHsn3/photo-2025-10-10-10-39-32.jpg",
    title: "Jamoaviy tayyorgarlik",
    desc: "Intizom va hamjihatlik darslari"
  },
  {
    url: "https://i.postimg.cc/YSTJ4tKf/photo-2025-10-10-13-17-14.jpg",
    title: "Sport va salomatlik",
    desc: "Sog'lom turmush tarzi bizning ustuvorligimiz"
  },
  {
    url: "https://i.postimg.cc/DyCpJ71J/photo-2025-10-23-17-59-03.jpg",
    title: "Harbiy vatanparvarlik",
    desc: "Vatanga sadoqat ruhidagi tarbiya"
  },
  {
    url: "https://i.postimg.cc/7PjMpb1m/photo-2025-10-10-13-17-15.jpg",
    title: "Birinchi yordam",
    desc: "Favqulodda vaziyatlarda to'g'ri harakat qilish ko'nikmalari"
  }
];

const CampusSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div className="relative group max-w-5xl mx-auto px-4 overflow-hidden">
      <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-3xl shadow-2xl bg-slate-200">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
              index === currentIndex 
                ? 'opacity-100 scale-100 translate-x-0' 
                : 'opacity-0 scale-105 translate-x-full'
            }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h4 className="text-2xl md:text-3xl font-bold mb-2 animate-in slide-in-from-bottom-4 duration-500">
                {image.title}
              </h4>
              <p className="text-slate-200 text-lg font-light opacity-90 animate-in slide-in-from-bottom-2 duration-700">
                {image.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 focus:outline-none"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 focus:outline-none"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 transition-all duration-300 rounded-full ${
              index === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CampusSlider;
