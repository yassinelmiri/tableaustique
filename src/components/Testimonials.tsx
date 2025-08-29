import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { translations } from '../data/translations';

interface TestimonialsProps {
  language: 'fr' | 'en';
}

export default function Testimonials({ language }: TestimonialsProps) {
  const t = translations[language];
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Claire Moreau',
      text: language === 'fr' 
        ? 'Un travail exceptionnel ! Mon portrait personnalisé a dépassé toutes mes attentes. L\'attention aux détails est remarquable.'
        : 'Exceptional work! My custom portrait exceeded all my expectations. The attention to detail is remarkable.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
      id: 2,
      name: 'Thomas Bernard',
      text: language === 'fr'
        ? 'Service professionnel et créativité au rendez-vous. Je recommande vivement Tableaustique pour tous vos projets artistiques.'
        : 'Professional service and creativity delivered. I highly recommend Tableaustique for all your artistic projects.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg'
    },
    {
      id: 3,
      name: 'Isabelle Dupont',
      text: language === 'fr'
        ? 'Une expérience magique ! L\'artiste a su capturer parfaitement l\'essence de ce que je souhaitais.'
        : 'A magical experience! The artist perfectly captured the essence of what I wanted.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-pink-200"
              />
              
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <p className="text-lg font-semibold text-pink-600">
                {testimonials[currentIndex].name}
              </p>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-pink-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-pink-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-pink-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-pink-600" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-pink-600 w-8'
                    : 'bg-pink-300 hover:bg-pink-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}