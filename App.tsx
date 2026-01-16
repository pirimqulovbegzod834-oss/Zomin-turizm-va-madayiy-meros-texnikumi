
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Management from './components/Management';
import Admissions from './components/Admissions';
import AIChat from './components/AIChat';
import Footer from './components/Footer';
import StudentLifeSlider from './components/StudentLifeSlider';
import { ArrowUp, Camera, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        
        {/* About Preview Section */}
        <section className="py-24 bg-slate-50 reveal">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                  <img 
                    src="https://i.postimg.cc/C5CTTX2k/photo-2025-09-03-14-08-35.jpg" 
                    alt="Student Life Preview" 
                    className="w-full h-[550px] object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                </div>
                <div className="absolute -bottom-8 -right-8 bg-blue-600 p-10 rounded-[2rem] shadow-2xl z-20 hidden md:block transform transition-all duration-500 group-hover:-translate-y-4">
                  <div className="flex items-center space-x-3 text-blue-200 mb-2">
                    <Sparkles className="w-5 h-5 fill-current" />
                    <span className="text-xs font-bold uppercase tracking-widest">Sifat kafolati</span>
                  </div>
                  <div className="text-white text-5xl font-black mb-1">25+</div>
                  <div className="text-blue-100 text-sm font-medium">Yillik tajriba va an'analar</div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10 animate-pulse"></div>
              </div>
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-3 bg-blue-50 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
                  <span className="text-blue-700 font-bold text-xs uppercase tracking-widest">Bizning tariximiz</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                  Professional ta'lim orqali <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">yorqin kelajak</span> sari
                </h3>
                <p className="text-slate-600 text-xl leading-relaxed font-light">
                  Zomin Turizm va Madaniy Meros Texnikumi - bu nafaqat ta'lim muassasasi, balki global karyeraga yo'llanmadir. Biz nazariy bilimlarni real sanoat tajribasi bilan birlashtiramiz.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                      <Camera className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    </div>
                    <div className="text-slate-900 font-bold text-xl mb-2">Amaliyot xonalari</div>
                    <p className="text-sm text-slate-500 font-light">Zamonaviy va barcha jihozlarga ega laboratoriyalar va o'quv maydonchalari.</p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                    <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
                      <Sparkles className="w-6 h-6 text-indigo-600 group-hover:text-white" />
                    </div>
                    <div className="text-slate-900 font-bold text-xl mb-2">Xalqaro diplom</div>
                    <p className="text-sm text-slate-500 font-light">Dunyo miqyosida tan olinadigan professional daraja va sertifikatlar.</p>
                  </div>
                </div>
                <button className="group bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold hover:bg-blue-600 transition-all hover:shadow-2xl hover:shadow-blue-200 active:scale-95 flex items-center">
                  Batafsil ma'lumot
                  <div className="ml-3 p-1 bg-white/20 rounded-lg group-hover:translate-x-2 transition-transform">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="reveal"><Programs /></div>
        
        <div className="reveal"><Management /></div>

        <div className="reveal"><Admissions /></div>
        
        {/* Student Life Section with Slider */}
        <section id="campus" className="py-24 bg-white reveal">
          <div className="container mx-auto px-4 md:px-6 text-center mb-20">
            <div className="inline-flex items-center space-x-2 text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">
              <Camera className="w-4 h-4" />
              <span>Texnikum hayoti</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Talabalar hayoti <span className="text-blue-600">&</span> Galereya</h3>
            <p className="text-slate-500 max-w-2xl mx-auto text-xl font-light leading-relaxed">
              Talabalarimizning kundalik hayoti, amaliyot darslari va sport musobaqalaridan eng sara va unutilmas lavhalar.
            </p>
          </div>
          
          <StudentLifeSlider />
        </section>

        {/* Newsletter Section */}
        <section className="py-24 bg-blue-600 relative overflow-hidden reveal">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/></pattern></defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
             </svg>
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">Yangiliklardan xabardor bo'ling</h3>
            <p className="text-blue-100 mb-12 max-w-2xl mx-auto text-xl font-light">
              Texnikum hayotidagi eng so'nggi yangiliklar va qabul jarayonlari haqida ma'lumot olish uchun obuna bo'ling.
            </p>
            <div className="flex flex-col sm:flex-row max-w-xl mx-auto space-y-4 sm:space-y-0 sm:space-x-4 bg-white/10 p-2 rounded-3xl backdrop-blur-md border border-white/20">
              <input 
                type="email" 
                placeholder="Email manzilingiz" 
                className="flex-1 bg-white px-8 py-5 rounded-2xl border-none focus:ring-4 focus:ring-blue-400 outline-none text-slate-900 shadow-inner" 
                aria-label="Email obuna"
              />
              <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all hover:shadow-2xl active:scale-95">
                Obuna bo'lish
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <AIChat />

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 p-5 bg-white shadow-2xl rounded-2xl text-blue-600 border border-slate-100 transition-all duration-500 hover:bg-blue-600 hover:text-white z-[55] ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}
        aria-label="Yuqoriga chiqish"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default App;
