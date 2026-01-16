
import React from 'react';
import { Program } from '../types';
import { Clock, GraduationCap, ArrowRight } from 'lucide-react';

const programs: Program[] = [
  {
    id: '1',
    title: 'Mehmonxona xo\'jaligi',
    description: 'Besh yulduzli mehmonxonalar uchun boshqaruv kadrlarini tayyorlash va servis xizmati dasturi.',
    duration: '2/3 Yil',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    category: 'Hospitality'
  },
  {
    id: '2',
    title: 'Kompyuter tizimlarida dasturlash',
    description: 'Zamonaviy dasturlash tillari, axborot texnologiyalari va raqamli tizimlarni boshqarish sirlari.',
    duration: '2 Yil',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    category: 'IT'
  },
  {
    id: '3',
    title: 'Oshpazlik san\'ati',
    description: 'Zamonaviy gastronomiya sirlari va milliy hamda xalqaro taomlar tayyorlash mahorati.',
    duration: '2 Yil',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800',
    category: 'Culinary'
  },
  {
    id: '4',
    title: 'O\'rmon xo\'jaligi',
    description: 'Tabiatni muhofaza qilish, o\'rmon boyliklarini asrash va ulardan oqilona foydalanish texnologiyalari.',
    duration: '2 Yil',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800',
    category: 'Forestry'
  },
  {
    id: '5',
    title: 'Vino mahsulotlarini ishlab chiqarish',
    description: 'Sifatli vino va ichimliklar ishlab chiqarishning zamonaviy texnologik va mikrobiologik jarayonlari.',
    duration: '2 Yil (Dual)',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800',
    category: 'Production'
  },
];

const Programs: React.FC = () => {
  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'Hospitality': return 'Mehmonxona';
      case 'IT': return 'IT & Dasturlash';
      case 'Culinary': return 'Oshpazlik';
      case 'Forestry': return 'O\'rmonchilik';
      case 'Production': return 'Ishlab chiqarish';
      default: return 'Yo\'nalish';
    }
  };

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 flex items-center">
              <span className="w-8 h-[2px] bg-blue-600 mr-3"></span>
              Bizning yo'nalishlar
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Professional ta'lim yo'nalishlari</h3>
            <p className="mt-4 text-slate-600 text-lg font-light leading-relaxed">
              Sizga mos keladigan yo'nalishni tanlang va o'z karyerangizni bugundanoq biz bilan boshlang.
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex flex-wrap gap-2">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full text-sm font-bold shadow-lg shadow-blue-200 transition-transform active:scale-95">Hammasi</button>
            <button className="px-8 py-3 border border-slate-200 rounded-full text-sm font-bold hover:bg-slate-50 transition-colors">9-sinf</button>
            <button className="px-8 py-3 border border-slate-200 rounded-full text-sm font-bold hover:bg-slate-50 transition-colors">11-sinf</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((program) => (
            <div key={program.id} className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-50 transition-all duration-500 hover:-translate-y-2">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-blue-600 shadow-sm">
                  {getCategoryLabel(program.category)}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center space-x-6 mb-4 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                  <div className="flex items-center"><Clock className="w-4 h-4 mr-2 text-blue-500" /> {program.duration}</div>
                  <div className="flex items-center"><GraduationCap className="w-4 h-4 mr-2 text-blue-500" /> Diplom</div>
                </div>
                <h4 className="text-xl font-extrabold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {program.title}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-8 flex-1 font-light">
                  {program.description}
                </p>
                <button className="text-blue-600 font-bold text-sm inline-flex items-center group/btn hover:text-blue-700">
                  Batafsil <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
