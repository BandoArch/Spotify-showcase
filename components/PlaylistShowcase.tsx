import React from 'react';
import { Play } from 'lucide-react';

const playlists = [
  { id: '1', title: 'Daily Mix 001', description: 'Destroy Lonely, Ken Carson...', img: "/Daily Mix 1.png" },
  { id: '2', title: 'Daily Mix 002', description: 'Hako, Kymaniixo, ThxSoMuch...', img: "/Daily Mix 2.png" },
  { id: '3', title: 'Daily Mix 003', description: '1nonly, Yun, Head, Slepvy808...', img: "/Daily Mix 3.png" },
  { id: '4', title: 'Daily Mix 004', description: 'Fallen angel, SUICIDAL-IDOL, Saraunh0ly...', img: "/Daily Mix 4.png" },
  { id: '5', title: 'Daily Mix 005', description: 'Travis Scott, Warhol.SS, A$AP ROCKY...', img: "/Daily Mix 5.png" },
];

const PlaylistShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-spotify-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold text-white hover:underline cursor-pointer">Spotify Playlists</h2>
          <span className="text-sm font-bold text-spotify-subdued hover:underline cursor-pointer uppercase tracking-widest">Show All</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {playlists.map((playlist) => (
            <div 
              key={playlist.id} 
              className="bg-spotify-light p-4 rounded-lg hover:bg-spotify-light/60 transition-colors group cursor-pointer relative"
            >
              <div className="relative mb-4 shadow-lg rounded-md overflow-hidden">
                <img src={playlist.img} alt={playlist.title} className="w-full aspect-square object-cover" />
                
                {/* Hover Play Button */}
                <div className="absolute bottom-2 right-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
                  <button className="w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center hover:scale-105 hover:brightness-105">
                    <Play className="w-6 h-6 text-black fill-black ml-1" />
                  </button>
                </div>
              </div>
              <h3 className="text-white font-bold truncate mb-1">{playlist.title}</h3>
              <p className="text-spotify-subdued text-sm line-clamp-2">{playlist.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlaylistShowcase;