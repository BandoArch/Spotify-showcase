import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Maximize2, Mic2, ListMusic, Heart } from 'lucide-react';
import { Track } from '../types';

interface PlayerBarProps {
  currentTrack: Track | null;
  isPlaying: boolean;
  onPlayPause: () => void;
}

const PlayerBar: React.FC<PlayerBarProps> = ({ currentTrack, isPlaying, onPlayPause }) => {
  const [progress, setProgress] = useState(30);
  const [volume, setVolume] = useState(80);
  const [isLiked, setIsLiked] = useState(false);

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-spotify-dark border-t border-[#282828] px-4 py-3 h-24 z-50 grid grid-cols-3 items-center">
      
      {/* Left: Track Info */}
      <div className="flex items-center gap-4">
        <img 
          src= "/Location Carti.png"
          alt="Location Carti.png" 
          className={`w-14 h-14 rounded shadow-lg ${isPlaying ? 'animate-pulse' : ''}`} 
        />
        <div className="hidden sm:block">
          <h4 className="text-white text-sm font-medium hover:underline cursor-pointer">
            Location
          </h4>
          <p className="text-[#b3b3b3] text-xs hover:underline cursor-pointer">
            Playboi Carti
          </p>
        </div>
        <button 
          className="ml-2 text-[#b3b3b3] hover:text-white transition-colors"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'text-spotify-green fill-spotify-green' : ''}`} />
        </button>
      </div>

      {/* Center: Controls */}
      <div className="flex flex-col items-center max-w-2xl w-full mx-auto">
        <div className="flex items-center gap-6 mb-2">
          <button className="text-[#b3b3b3] hover:text-white transition-colors"><Shuffle className="w-4 h-4" /></button>
          <button className="text-[#b3b3b3] hover:text-white transition-colors"><SkipBack className="w-5 h-5 fill-current" /></button>
          
          <button 
            onClick={onPlayPause}
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-black fill-black" />
            ) : (
              <Play className="w-4 h-4 text-black fill-black ml-0.5" />
            )}
          </button>
          
          <button className="text-[#b3b3b3] hover:text-white transition-colors"><SkipForward className="w-5 h-5 fill-current" /></button>
          <button className="text-[#b3b3b3] hover:text-white transition-colors"><Repeat className="w-4 h-4" /></button>
        </div>

        <div className="flex items-center gap-2 w-full">
          <span className="text-xs text-[#b3b3b3] min-w-[40px] text-right">1:14</span>
          <div className="h-1 bg-[#5e5e5e] rounded-full w-full relative group cursor-pointer">
            <div 
              className="absolute h-full bg-white rounded-full group-hover:bg-spotify-green" 
              style={{ width: `${progress}%` }}
            ></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow-md" style={{ left: `${progress}%` }}></div>
          </div>
          <span className="text-xs text-[#b3b3b3] min-w-[40px]">{currentTrack.duration}</span>
        </div>
      </div>

      {/* Right: Volume & Extra */}
      <div className="flex items-center justify-end gap-3">
        <button className="text-[#b3b3b3] hover:text-white"><Mic2 className="w-4 h-4" /></button>
        <button className="text-[#b3b3b3] hover:text-white"><ListMusic className="w-4 h-4" /></button>
        <div className="flex items-center gap-2 w-32">
          <Volume2 className="w-4 h-4 text-[#b3b3b3]" />
          <div className="h-1 bg-[#5e5e5e] rounded-full w-full relative group cursor-pointer">
            <div 
              className="absolute h-full bg-white rounded-full group-hover:bg-spotify-green" 
              style={{ width: `${volume}%` }}
            ></div>
          </div>
        </div>
        <button className="text-[#b3b3b3] hover:text-white"><Maximize2 className="w-4 h-4" /></button>
      </div>
    </div>
  );
};

export default PlayerBar;