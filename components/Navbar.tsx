import React, { useState, useEffect } from 'react';
import { Menu, X, Music } from 'lucide-react';
import { FaSpotify } from "react-icons/fa";


const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Premium', href: '#premium' },
    { name: 'Support', href: '#support' },
    { name: 'Download', href: '#download' },
    { name: 'Portfolio', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <FaSpotify className="w-8 h-8 text-green-500" />
          <span className="text-2xl font-bold tracking-tighter">Spotify</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-base font-bold hover:text-spotify-green transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="w-px h-6 bg-white/30"></div>
          <button className="text-gray-300 font-bold hover:text-white transition-colors">
            Sign up
          </button>
          <button className="bg-white text-black font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform">
            Log in
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black p-6 flex flex-col gap-6 shadow-2xl border-t border-white/10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xl font-bold hover:text-spotify-green"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="w-full h-px bg-white/20 my-2"></div>
          <button className="text-left text-xl font-bold text-gray-300">Sign up</button>
          <button className="text-left text-xl font-bold text-spotify-green">Log in</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;