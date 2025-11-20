import React from 'react';
import { Music, Instagram, Twitter, Facebook } from 'lucide-react';
import { FaSpotify } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-16 pb-32 md:pb-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <FaSpotify className="w-8 h-8 text-green-500" />
            <span className="text-2xl font-bold tracking-tighter">Spotify</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <div className="flex flex-col gap-4">
              <h5 className="text-gray-500 font-bold uppercase tracking-widest">Company</h5>
              <a href="#" className="hover:text-spotify-green transition-colors">About</a>
              <a href="#" className="hover:text-spotify-green transition-colors">Jobs</a>
              <a href="#" className="hover:text-spotify-green transition-colors">For the Record</a>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-gray-500 font-bold uppercase tracking-widest">Communities</h5>
              <a href="#" className="hover:text-spotify-green transition-colors">For Artists</a>
              <a href="#" className="hover:text-spotify-green transition-colors">Developers</a>
              <a href="#" className="hover:text-spotify-green transition-colors">Advertising</a>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-gray-500 font-bold uppercase tracking-widest">Useful Links</h5>
              <a href="#" className="hover:text-spotify-green transition-colors">Support</a>
              <a href="#" className="hover:text-spotify-green transition-colors">Web Player</a>
              <a href="#" className="hover:text-spotify-green transition-colors">Free Mobile App</a>
            </div>
             <div className="flex gap-4">
               <div className="w-10 h-10 bg-spotify-dark rounded-full flex items-center justify-center hover:text-spotify-green cursor-pointer transition-colors">
                 <Instagram className="w-5 h-5" />
               </div>
               <div className="w-10 h-10 bg-spotify-dark rounded-full flex items-center justify-center hover:text-spotify-green cursor-pointer transition-colors">
                 <Twitter className="w-5 h-5" />
               </div>
               <div className="w-10 h-10 bg-spotify-dark rounded-full flex items-center justify-center hover:text-spotify-green cursor-pointer transition-colors">
                 <Facebook className="w-5 h-5" />
               </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 pt-8 border-t border-white/10">
          <div className="flex gap-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-white">Legal</a>
            <a href="#" className="hover:text-white">Privacy Center</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Cookies</a>
            <a href="#" className="hover:text-white">About Ads</a>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <span>&copy; 2025 Spotify</span>
            <span className="hidden md:inline">•</span>
            <span className="text-spotify-green">Designed by BandoArch</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;