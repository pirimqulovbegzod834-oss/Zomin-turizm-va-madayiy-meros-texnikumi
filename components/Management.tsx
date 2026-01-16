
import React from 'react';
import { Phone, Mail, Linkedin, Facebook, Instagram } from 'lucide-react';

interface Leader {
  name: string;
  position: string;
  phone: string;
  email: string;
  image: string;
}

const leaders: Leader[] = [
  {
    name: "Xaitkulova Go'zal Karimqulovna",
    position: "Texnikum direktori",
    phone: "+998 99 554 68 03",
    email: "zominturizm@umail.uz",
    image: "https://i.postimg.cc/ZRHcht3M/photo-2025-12-12-15-50-07.jpg"
  },
  {
    name: "Baymatov Abduaziz Abdurashidovich",
    position: "O'quv ishlari bo'yicha direktor o'rinbosari",
    phone: "+998 99 528 03 83",
    email: "abduazizbaymatov@gmail.com",
    image: "https://i.postimg.cc/pr1Jpf0N/photo-2025-12-12-15-50-11.jpg"
  },
  {
    name: "Atabayev Jasur Asatali o'g'li",
    position: "Ishlab chiqarish ta'lim bo'yicha direktor o'rinbosari",
    phone: "+998 99 083 00 98",
    email: "jasuratabayev07@gmail.com",
    image: "https://i.postimg.cc/qMzGWFRk/photo-2025-12-12-15-50-15.jpg"
  },
  {
    name: "Shodiyev Olimjon Murodovich",
    position: "Yoshlar bilan ishlash bo'yicha direktor o'rinbosari",
    phone: "+998 90 297 85 61",
    email: "olimjonshodiyev.5755@gmail.com",
    image: "https://i.postimg.cc/k5dF6XyM/photo-2025-12-12-15-50-20.jpg"
  }
];

const Management: React.FC = () => {
  return (
    <section id="management" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Bizning jamoa</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Texnikum rahbariyati</h3>
          <p className="text-slate-600 text-lg">
            Kvalifikatsiyali va tajribali rahbarlarimiz texnikum rivoji va talabalar muvaffaqiyati uchun xizmat qiladi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="h-64 overflow-hidden">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight h-12 flex items-center">
                  {leader.name}
                </h4>
                <p className="text-blue-600 text-sm font-semibold mb-6 h-10 italic">
                  {leader.position}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-slate-600 text-xs">
                    <Phone className="w-4 h-4 mr-2 text-slate-400" />
                    <span>{leader.phone}</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-xs">
                    <Mail className="w-4 h-4 mr-2 text-slate-400" />
                    <span className="truncate">{leader.email}</span>
                  </div>
                </div>

                <div className="flex space-x-3 border-t border-slate-100 pt-4">
                  <a href="#" className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-blue-600 transition-colors">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-pink-600 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-blue-700 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Management;
