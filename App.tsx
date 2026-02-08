import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Program from './components/Program';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from './constants';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50 selection:bg-brand-yellow selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Program />
        <Features />
        <FAQ />
      </main>
      <Contact />

      {/* Floating Action Button for Mobile */}
      <a 
        href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Halo%20Smart%20Lab,%20saya%20tertarik%20mendaftar.`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center transition-transform hover:scale-110 animate-bounce"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}

export default App;