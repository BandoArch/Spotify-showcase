import React from 'react';
import { Mail, Linkedin, Github, ExternalLink, Code } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-spotify-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-spotify-green/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Code className="text-spotify-green w-6 h-6" />
          <span className="text-spotify-green font-bold uppercase tracking-wider text-sm">Developer Showcase</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black text-center mb-8 tracking-tight">
          Built by BandoArch.
        </h2>
        <p className="text-center text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          I build high-performance, beautiful interactive experiences. This Spotify clone is a demonstration of React, Tailwind CSS, and modern UI/UX principles.
        </p>

        <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Contact Details */}
            <div className="flex flex-col justify-center space-y-6">
              <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
              
              <a href="mailto:eliudmugo360@gmail.com" className="flex items-center gap-4 group p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-spotify-green/20 rounded-full flex items-center justify-center group-hover:bg-spotify-green transition-colors">
                  <Mail className="text-spotify-green group-hover:text-black" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Me</p>
                  <p className="text-white font-medium break-all">tartagliachilde22@gmail.com</p>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/eliud-mugo-8a3822175" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-4 group p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Linkedin className="text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <p className="text-white font-medium">View Profile</p>
                </div>
              </a>
            </div>

            {/* Visual Element / Mini CTA */}
            <div className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-spotify-green to-emerald-900 rounded-xl p-8">
               <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-6 shadow-lg">
                 <span className="text-3xl font-bold text-white">BA</span>
               </div>
               <h4 className="text-2xl font-bold mb-2 text-black">BandoArch</h4>
               <p className="text-black/80 font-medium mb-6">Frontend Developer</p>
               <button className="bg-black text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform">
                 View Full Portfolio <ExternalLink className="w-4 h-4" />
               </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;