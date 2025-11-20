import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PlaylistShowcase from './components/PlaylistShowcase';
import Contact from './components/Contact';
import PlayerBar from './components/PlayerBar';
import Footer from './components/Footer';
import { Track } from './types';

const App: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Simulate a default track loaded
  useEffect(() => {
    setCurrentTrack({
      id: '1',
      title: 'Starboy',
      artist: 'The Weeknd, Daft Punk',
      coverUrl: 'https://picsum.photos/seed/weeknd/300/300',
      duration: '3:50'
    });
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-spotify-green selection:text-black overflow-x-hidden font-sans">
      <div className="pb-24"> {/* Padding for fixed player bar */}
        <Navbar />
        <main>
          <Hero />
          <Features />
          <PlaylistShowcase />
          <Contact />
        </main>
        <Footer />
      </div>
      
      {/* Fixed Music Player at Bottom */}
      <PlayerBar 
        currentTrack={currentTrack} 
        isPlaying={isPlaying} 
        onPlayPause={handlePlayPause} 
      />
    </div>
  );
};

export default App;