import React from 'react';
import { MapPin, Star, Clock } from 'lucide-react';
import { translations } from '../data/translations';
import Marouane  from '../public/img/Marouane/Marouane FAGRI.jpg';
import Marouane1 from '../public/img/Marouane/Marouane FAGRI01.jpg';
import Marouane2 from '../public/img/Marouane/Marouane FAGRI02.jpg';

interface LocalArtistsProps {
  language: 'fr' | 'en';
}

export default function LocalArtists({ language }: LocalArtistsProps) {
  const t = translations[language];

  const artists = [
    {
      id: 1,
      name: 'Atelier Rose Dubois',
      specialty: language === 'fr' ? 'Portraits & Paysages' : 'Portraits & Landscapes',
      rating: 4.9,
      distance: '2.3 km',
      hours: language === 'fr' ? 'Ouvert 9h-18h' : 'Open 9am-6pm',
      image: Marouane 
    },
    {
      id: 2,
      name: 'Studio Violet Martin',
      specialty: language === 'fr' ? 'Art Moderne & Abstrait' : 'Modern & Abstract Art',
      rating: 4.8,
      distance: '1.8 km',
      hours: language === 'fr' ? 'Ouvert 10h-19h' : 'Open 10am-7pm',
      image: Marouane1
    },
    {
      id: 3,
      name: 'Galerie Lilas Laurent',
      specialty: language === 'fr' ? 'Commandes Personnalisées' : 'Custom Commissions',
      rating: 5.0,
      distance: '3.1 km',
      hours: language === 'fr' ? 'Sur rendez-vous' : 'By appointment',
      image: Marouane2
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.localArtists.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.localArtists.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="group bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {artist.name}
              </h3>
              
              <p className="text-pink-600 font-medium mb-4">
                {artist.specialty}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{artist.rating}</span>
                </div>
                
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{artist.distance}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 text-sm text-gray-600 mb-6">
                <Clock className="w-4 h-4" />
                <span>{artist.hours}</span>
              </div>
              
              <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-pink-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300">
                {t.localArtists.viewProfile}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}