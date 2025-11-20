import React from 'react';
import { Play } from 'lucide-react';

const playlists = [
  { id: '1', title: 'Today\'s Top Hits', description: 'Jung Kook is on top of the Hottest 50!', img: 'https://picsum.photos/seed/hits/300/300' },
  { id: '2', title: 'RapCaviar', description: 'New music from Drake, Travis Scott and more.', img: 'https://picsum.photos/seed/rap/300/300' },
  { id: '3', title: 'All Out 2010s', description: 'The biggest songs of the 2010s.', img: 'https://picsum.photos/seed/2010s/300/300' },
  { id: '4', title: 'Rock Classics', description: 'Rock legends & epic songs.', img: 'https://picsum.photos/seed/rock/300/300' },
  { id: '5', title: 'Chill Hits', description: 'Kick back to the best new and recent chill hits.', img: 'https://picsum.photos/seed/chill/300/300' },
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