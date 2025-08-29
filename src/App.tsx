import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import CommunityNews from './components/CommunityNews';
import LocalArtists from './components/LocalArtists';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  const handleLanguageChange = (lang: 'fr' | 'en') => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <Hero language={language} />
      <Services language={language} />
      <Gallery language={language} />
      <LocalArtists language={language} />
      <CommunityNews language={language} />
      <Testimonials language={language} />
      <FAQ language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;