import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { SocialBanner } from './components/Banner';
import { Cases } from './components/Cases';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { About } from './components/About';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      {currentPage === 'home' ? (
        <>
          <Hero />
          <Services />
          <SocialBanner />
          <Cases />
          <Testimonials />
        </>
      ) : (
        <About />
      )}
      <Footer />
    </div>
  );
}
