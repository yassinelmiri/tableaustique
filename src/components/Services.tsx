import React from 'react';
import { Brush, Heart, Star, Users } from 'lucide-react';
import { translations } from '../data/translations';

interface ServicesProps {
  language: 'fr' | 'en';
}

export default function Services({ language }: ServicesProps) {
  const t = translations[language];

  const services = [
    {
      icon: <Brush className="w-8 h-8" />,
      title: t.services.custom.title,
      description: t.services.custom.description,
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t.services.portrait.title,
      description: t.services.portrait.description,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: t.services.commission.title,
      description: t.services.commission.description,
      color: 'from-rose-500 to-purple-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t.services.workshops.title,
      description: t.services.workshops.description,
      color: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl border border-pink-100 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}