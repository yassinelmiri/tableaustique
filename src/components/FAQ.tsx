import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { translations } from '../data/translations';

interface FAQProps {
  language: 'fr' | 'en';
}

export default function FAQ({ language }: FAQProps) {
  const t = translations[language];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: t.faq.items[0].question,
      answer: t.faq.items[0].answer
    },
    {
      question: t.faq.items[1].question,
      answer: t.faq.items[1].answer
    },
    {
      question: t.faq.items[2].question,
      answer: t.faq.items[2].answer
    },
    {
      question: t.faq.items[3].question,
      answer: t.faq.items[3].answer
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.faq.title}
          </h2>
          <p className="text-xl text-gray-600">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl border border-pink-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-pink-100/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-pink-600 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}