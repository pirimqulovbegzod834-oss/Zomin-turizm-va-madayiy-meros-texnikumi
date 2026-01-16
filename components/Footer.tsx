
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Globe className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold tracking-tight text-white">ZTMMT</span>
            </div>
            <p className="mb-6 text-sm leading-relaxed">
              Zomin Turizm va Madaniy Meros Texnikumi - sifatli professional ta'lim va kelajak poydevori.
            </p>
            <div className="flex space-x-4">
              <a href="https://t.me/turizmrasmiykanali" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/zominturizmtexnikumyoshlari" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Foydali havolalar</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Biz haqimizda</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Yo'nalishlar</a></li>
              <li><a href="#management" className="hover:text-white transition-colors">Rahbariyat</a></li>
              <li><a href="#admissions" className="hover:text-white transition-colors">Qabul nizomi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Talabalar uchun</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Yordam</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Talaba portali</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Moliya va grantlar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kampus xaritasi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Savol-javoblar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Maxfiylik siyosati</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Aloqa</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Zomin tumani, Jizzax viloyati, O'zbekiston</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>+998 99 554 68 03</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>zominturizm@umail.uz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Zomin Turizm va Madaniy Meros Texnikumi. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
