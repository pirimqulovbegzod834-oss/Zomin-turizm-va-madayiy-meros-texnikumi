
import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512100356956-c1226c693f03?auto=format&fit=crop&q=80&w=2000")' }}
      >
        <div className="absolute inset-0 bg-slate-900/60"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
          Zomin Turizm va <br />
          <span className="text-blue-400">Madaniy Meros Texnikumi</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Kelajak kasbini biz bilan o'rganing. Sifatli ta'lim va zamonaviy amaliyot orqali turizm sohasining yetuk mutaxassisiga aylaning.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center group transition-all shadow-xl shadow-blue-900/20">
            Yo'nalishlar bilan tanishish
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold flex items-center justify-center transition-all">
            <PlayCircle className="mr-2 w-5 h-5" />
            Texnikum haqida video
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">95%</div>
            <div className="text-sm text-slate-300">Ish bilan ta'minlanish</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">10+</div>
            <div className="text-sm text-slate-300">Xalqaro hamkorlar</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">800+</div>
            <div className="text-sm text-slate-300">Faol talabalar</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">5+</div>
            <div className="text-sm text-slate-300">Asosiy yo'nalishlar</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
