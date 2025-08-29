import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { translations } from '../data/translations';

interface CommunityNewsProps {
  language: 'fr' | 'en';
}

export default function CommunityNews({ language }: CommunityNewsProps) {
  const t = translations[language];

  const news = [
    {
      id: 1,
      title: language === 'fr' ? 'Exposition collective à Paris' : 'Group Exhibition in Paris',
      excerpt: language === 'fr' 
        ? 'Découvrez les dernières créations de notre communauté d\'artistes...'
        : 'Discover the latest creations from our artist community...',
      date: '2025-01-15',
      author: 'Marie Dubois',
      image: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg'
    },
    {
      id: 2,
      title: language === 'fr' ? 'Techniques de peinture moderne' : 'Modern Painting Techniques',
      excerpt: language === 'fr'
        ? 'Apprenez les nouvelles techniques de mélange de couleurs...'
        : 'Learn new color blending techniques...',
      date: '2025-01-10',
      author: 'Sophie Martin',
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg'
    },
    {
      id: 3,
      title: language === 'fr' ? 'Atelier créatif ce weekend' : 'Creative Workshop This Weekend',
      excerpt: language === 'fr'
        ? 'Rejoignez-nous pour un atelier de peinture collaborative...'
        : 'Join us for a collaborative painting workshop...',
      date: '2025-01-08',
      author: 'Emma Laurent',
      image: 'https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg'
    }
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.news.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.news.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((article) => (
            <article
              key={article.id}
              className="group bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <button className="flex items-center space-x-2 text-pink-600 font-medium group-hover:text-purple-600 transition-colors">
                  <span>{t.news.readMore}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}