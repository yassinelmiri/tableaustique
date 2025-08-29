import React from 'react';
import { Palette } from 'lucide-react';
import LanguageSwitch from './LanguageSwitch';
import { translations } from '../data/translations';

interface HeaderProps {
  language: 'fr' | 'en';
  onLanguageChange: (lang: 'fr' | 'en') => void;
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const t = translations[language];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-400 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
              <Palette className="w-6 h-6 text-pink-600" />
            </div>
            <h1 className="text-2xl font-bold text-white">Tableaustique</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white hover:text-pink-200 font-medium transition-colors">
              {t.nav.services}
            </a>
            <a href="#gallery" className="text-white hover:text-pink-200 font-medium transition-colors">
              {t.nav.gallery}
            </a>
            <a href="#news" className="text-white hover:text-pink-200 font-medium transition-colors">
              {t.nav.news}
            </a>
            <a href="#testimonials" className="text-white hover:text-pink-200 font-medium transition-colors">
              {t.nav.testimonials}
            </a>
            <a href="#contact" className="text-white hover:text-pink-200 font-medium transition-colors">
              {t.nav.contact}
            </a>
          </nav>

          <LanguageSwitch language={language} onLanguageChange={onLanguageChange} />
        </div>
      </div>
    </header>
  );
}