import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { translations } from '../data/translations';
import salmaHome from '../public/img/salma.home.jpg';

interface HeroProps {
  language: 'fr' | 'en';
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full mb-6 animate-pulse">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">{t.hero.badge}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {t.hero.title}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:from-pink-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                <span>{t.hero.cta1}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-pink-600 text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-600 hover:text-white transform hover:scale-105 transition-all duration-300">
                {t.hero.cta2}
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src={salmaHome} 
                alt="Artist painting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 to-transparent"></div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}