import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { InfoSection } from './components/InfoSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0E0A1F] text-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1626379953822-baec19c3accd?auto=format&fit=crop&q=80"
            alt="VR Experience"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0E0A1F]"></div>
        </div>
        <Navbar />
        <Hero />
      </header>

      <Features />
      <InfoSection />
      <Footer />
    </div>
  );
}

export default App;