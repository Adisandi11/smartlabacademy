import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fungsi untuk menangani klik link agar scroll menjadi smooth
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Program', href: '#program' },
    { name: 'Keunggulan', href: '#features' },
    { name: 'Lokasi', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo yang bisa diklik */}
          <a 
            href="#home" 
            onClick={(e) => handleScroll(e, '#home')}
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
          >
            {/* Custom SVG Logo mimic the reference: Computer with Lightbulb */}
            <div className="w-12 h-12 relative flex items-center justify-center">
               <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
                  {/* Monitor Stand */}
                  <path d="M22 54H42L42 58H22L22 54Z" fill="#1e40af"/>
                  <path d="M32 48V54" stroke="#1e40af" strokeWidth="4"/>
                  {/* Monitor Frame */}
                  <rect x="4" y="8" width="56" height="40" rx="4" fill="white" stroke="#1e40af" strokeWidth="4"/>
                  {/* Lightbulb (Orange) */}
                  <circle cx="32" cy="24" r="7" fill="#fcd34d" stroke="#f59e0b" strokeWidth="2"/>
                  <path d="M29 30L29.5 34H34.5L35 30" fill="#fcd34d" stroke="#f59e0b" strokeWidth="2"/>
                  <rect x="30" y="34" width="4" height="2" fill="#1e40af"/>
                  {/* Lightbulb Rays */}
                  <path d="M32 12V14M32 34V36M42 24H44M20 24H22M39 17L37.5 18.5M25 17L26.5 18.5" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
               </svg>
            </div>
            
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-2xl leading-none tracking-tight text-blue-900">
                SMART LAB
              </span>
              <span className="font-display font-bold text-sm tracking-widest text-blue-900 uppercase">
                ACADEMY
              </span>
            </div>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`font-semibold transition-colors ${scrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-700 hover:text-blue-800'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Halo%20Smart%20Lab%20Academy,%20saya%20mau%20tanya%20info%20kursus.`}
              target="_blank"
              rel="noreferrer"
              className="bg-brand-blue text-white px-5 py-2 rounded-full font-bold hover:bg-blue-700 transition transform hover:scale-105"
            >
              Daftar Sekarang
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600">
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full left-0 top-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                {link.name}
              </a>
            ))}
             <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              className="block w-full text-center mt-4 bg-brand-yellow text-blue-900 px-5 py-3 rounded-lg font-bold"
            >
              Daftar via WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;