import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AnimationProvider } from './contexts/AnimationContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <ThemeProvider>
      <AnimationProvider>
        <div className="min-h-screen bg-slate-900 text-white font-['Inter'] overflow-x-hidden">
          <ParticleBackground />
          <Header />
          <main className="relative z-10">
            <Hero />
            <Features />
            <CallToAction />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </AnimationProvider>
    </ThemeProvider>
  );
}

export default App;