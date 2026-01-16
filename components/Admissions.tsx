
import React, { useState } from 'react';
import { Calendar, CheckCircle, FileText, Globe, Loader2, Send } from 'lucide-react';
import { sendAdmissionToTelegram } from '../services/telegramService';

const Admissions: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    program: "Mehmonxona xo'jaligi"
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const steps = [
    { icon: <FileText />, title: "Onlayn ariza", desc: "Shaxsiy ma'lumotlaringizni portal orqali yuboring." },
    { icon: <CheckCircle />, title: "Suhbat jarayoni", desc: "Saralashdan o'tgan nomzodlar suhbatga taklif qilinadi." },
    { icon: <Globe />, title: "Hujjatlarni topshirish", desc: "Kerakli hujjatlarning asl nusxalarini taqdim eting." },
    { icon: <Calendar />, title: "O'qishga qabul", desc: "Ro'yxatdan o'ting va yangi o'quv yilini biz bilan boshlang." }
  ];

  const programsList = [
    "Mehmonxona xo'jaligi",
    "Kompyuter tizimlarida darsurlash",
    "Oshpazlik san'ati",
    "O'rmon xo'jaligi",
    "Vino mahsulotlarini ishlab chiqarish"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.phone) return;

    setStatus('loading');
    const success = await sendAdmissionToTelegram(formData);

    if (success) {
      setStatus('success');
      setFormData({ firstName: '', lastName: '', phone: '', program: programsList[0] });
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="admissions" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Bizga qo'shiling</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">ZTMMTda o'z kelajagingizni boshlang</h3>
            <p className="text-slate-600 text-lg mb-10">
              Bizning qabul jarayoni ochiq va shaffof bo'lib, har bir iqtidorli yosh uchun professional ta'lim olish imkoniyatini yaratadi.
            </p>

            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex space-x-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm h-fit text-blue-600">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">{step.title}</h4>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl relative z-10 border border-slate-100 overflow-hidden">
              {status === 'success' && (
                <div className="absolute inset-0 bg-white/95 z-20 flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-500">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Ariza yuborildi!</h4>
                  <p className="text-slate-600">Tez orada mutaxassislarimiz siz bilan bog'lanishadi.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-blue-600 font-bold hover:underline"
                  >
                    Yana ariza topshirish
                  </button>
                </div>
              )}

              <h4 className="text-2xl font-bold mb-6 text-slate-900 flex items-center">
                <Send className="w-6 h-6 mr-3 text-blue-600" />
                Murojaat qoldirish
              </h4>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Ism</label>
                    <input 
                      required
                      type="text" 
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all" 
                      placeholder="Ismingiz" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Familiya</label>
                    <input 
                      type="text" 
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all" 
                      placeholder="Familiyangiz" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Telefon raqam</label>
                  <input 
                    required
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all" 
                    placeholder="+998 90 123 45 67" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Qiziqtirgan yo'nalish</label>
                  <select 
                    value={formData.program}
                    onChange={(e) => setFormData({...formData, program: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none appearance-none cursor-pointer transition-all"
                  >
                    {programsList.map((program, index) => (
                      <option key={index} value={program}>{program}</option>
                    ))}
                  </select>
                </div>
                <button 
                  disabled={status === 'loading'}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-blue-200 active:scale-[0.98] flex items-center justify-center space-x-2"
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <>
                      <span>Yuborish</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
                {status === 'error' && (
                  <p className="text-red-500 text-xs text-center mt-2 font-medium">Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.</p>
                )}
              </form>
            </div>
            
            {/* Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10 animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
