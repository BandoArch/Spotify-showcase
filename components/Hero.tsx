import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-spotify-green/30 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-[1.1]">
            Listening is <br/>
            <span className="text-spotify-green">everything.</span>
          </h1>
          <p className="text-lg md:text-2xl text-spotify-subdued mb-8 max-w-xl mx-auto md:mx-0 font-medium">
            Millions of songs and podcasts. No credit card needed.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <button className="bg-spotify-green text-black text-lg font-bold px-8 py-4 rounded-full hover:scale-105 hover:brightness-110 transition-all shadow-[0_0_20px_rgba(29,185,84,0.4)] w-full sm:w-auto">
              Get Spotify Free
            </button>
            <button className="border border-white/30 backdrop-blur-sm text-white text-lg font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all flex items-center gap-2 w-full sm:w-auto justify-center group">
              <PlayCircle className="w-5 h-5 group-hover:text-spotify-green transition-colors" />
              View Plans
            </button>
          </div>
          
          <div className="mt-12 text-xs text-spotify-subdued uppercase tracking-widest font-bold">
            Developed by Eliud Mugo
          </div>
        </motion.div>

        {/* Visual/Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative hidden md:block"
        >
          {/* Mockup Phones/Interfaces */}
          <div className="relative w-full max-w-[400px] mx-auto aspect-[9/16] bg-black rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden">
            {/* Phone Header */}
            <div className="absolute top-0 w-full h-8 bg-black z-20 flex justify-center items-center">
               <div className="w-20 h-6 bg-black rounded-b-xl"></div>
            </div>
            {/* Phone Screen Content */}
            <div className="w-full h-full bg-gradient-to-b from-indigo-900 via-black to-black p-6 pt-12 flex flex-col">
                <img 
                  src="/TeenX.jpg" 
                  alt="TeenX.Jpg" 
                  className="w-full aspect-square rounded-lg shadow-2xl mb-8 object-cover"
                />
                <h3 className="text-2xl font-bold mb-1">Yale</h3>
                <p className="text-gray-400 mb-6">Ken Carson</p>
                
                {/* Fake Progress Bar */}
                <div className="w-full h-1 bg-white/20 rounded-full mb-2 overflow-hidden">
                  <div className="h-full w-2/3 bg-spotify-green rounded-full"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mb-6">
                  <span>2:14</span>
                  <span>3:45</span>
                </div>

                {/* Fake Controls */}
                <div className="flex justify-between items-center mt-auto mb-8">
                   <div className="w-6 h-6 rounded-full bg-transparent border border-gray-500"></div>
                   <div className="w-8 h-8 rounded-full bg-transparent border border-gray-500"></div>
                   <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-black border-b-[10px] border-b-transparent ml-1"></div>
                   </div>
                   <div className="w-8 h-8 rounded-full bg-transparent border border-gray-500"></div>
                   <div className="w-6 h-6 rounded-full bg-transparent border border-gray-500"></div>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;