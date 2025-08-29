import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageSwitchProps {
  language: 'fr' | 'en';
  onLanguageChange: (lang: 'fr' | 'en') => void;
}

export default function LanguageSwitch({ language, onLanguageChange }: LanguageSwitchProps) {
  return (
    <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full p-2">
      <Globe className="w-4 h-4 text-white" />
      <button
        onClick={() => onLanguageChange('fr')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          language === 'fr'
            ? 'bg-white text-pink-600 shadow-md'
            : 'text-white hover:bg-white/20'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => onLanguageChange('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          language === 'en'
            ? 'bg-white text-pink-600 shadow-md'
            : 'text-white hover:bg-white/20'
        }`}
      >
        EN
      </button>
    </div>
  );
}