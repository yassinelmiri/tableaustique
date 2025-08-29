import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { translations } from '../data/translations';

interface GalleryProps {
  language: 'fr' | 'en';
}

export default function Gallery({ language }: GalleryProps) {
  const t = translations[language];
  const [currentIndex, setCurrentIndex] = useState(0);

  const artworks = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg',
      title: 'Portrait Classique',
      category: 'Portrait'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg',
      title: 'Paysage Abstrait',
      category: 'Abstrait'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg',
      title: 'Nature Morte',
      category: 'Nature'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg',
      title: 'Art Moderne',
      category: 'Moderne'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg',
      title: 'Fleurs Délicates',
      category: 'Nature'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/1143758/pexels-photo-1143758.jpeg',
      title: 'Expression Libre',
      category: 'Abstrait'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(artworks.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(artworks.length / 3)) % Math.ceil(artworks.length / 3));
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(artworks.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full grid md:grid-cols-3 gap-6 px-2">
                  {artworks.slice(slideIndex * 3, slideIndex * 3 + 3).map((artwork) => (
                    <div
                      key={artwork.id}
                      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={artwork.image}
                          alt={artwork.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {artwork.category}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {artwork.title}
                        </h3>
                        <p className="text-gray-600">
                          {t.gallery.viewDetails}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-pink-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-pink-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-pink-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-pink-600" />
          </button>
        </div>
      </div>
    </section>
  );
}