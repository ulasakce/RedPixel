
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import Services from './components/Services';
import Footer from './components/Footer';
import ClientTrust from './components/ClientTrust';
import Journal from './components/Journal';
import TerminalContact from './components/TerminalContact';
import VisualDiagnostic from './components/VisualDiagnostic';
import About from './components/About';
import RedAI from './components/RedAI';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-red-500 selection:text-white">
      <Navbar isScrolled={scrolled} />
      <main>
        <section id="home">
          <Hero />
          <ClientTrust />
        </section>
        
        <WorkGrid />
        <Services />
        <About />
        <VisualDiagnostic />
        <Journal />
        <TerminalContact />
      </main>
      <RedAI />
      <Footer />
    </div>
  );
};

export default App;
