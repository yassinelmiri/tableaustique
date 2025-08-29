import React from 'react';
import { Palette, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { translations } from '../data/translations';

interface FooterProps {
  language: 'fr' | 'en';
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Tableaustique</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">{t.footer.services}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">{t.services.custom.title}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">{t.services.portrait.title}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">{t.services.commission.title}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">{t.services.workshops.title}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">{t.footer.resources}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">{t.footer.about}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">{t.footer.blog}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">{t.footer.tutorials}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">{t.footer.privacy}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">{t.footer.contact}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">contact@tableaustique.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">+212 661-498144</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">Mohammedia ,Maroc</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-center md:text-left">
              © 2025 Tableaustique. {t.footer.rights}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                {t.footer.terms}
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                {t.footer.privacy}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}