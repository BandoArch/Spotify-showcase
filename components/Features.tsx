import React from 'react';
import { Heart, WifiOff, Zap, Headphones } from 'lucide-react';

const features = [
  {
    icon: <Heart className="w-10 h-10 text-spotify-green" />,
    title: "Ad-free music listening",
    description: "Enjoy an uninterrupted music experience with absolutely no ads to break the vibe."
  },
  {
    icon: <WifiOff className="w-10 h-10 text-spotify-green" />,
    title: "Offline playback",
    description: "Save your data and listen anywhere. Download your favorites to play without internet."
  },
  {
    icon: <Zap className="w-10 h-10 text-spotify-green" />,
    title: "Play everywhere",
    description: "Listen on your speakers, TV, and other favorite devices seamlessly."
  },
  {
    icon: <Headphones className="w-10 h-10 text-spotify-green" />,
    title: "Pay your way",
    description: "Prepay with Paytm, UPI, and more. Flexible plans for every budget and person."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Why Go Premium?</h2>
          <p className="text-xl text-gray-600">Unlock the full potential of your listening experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="mb-6 p-6 bg-gray-100 rounded-full group-hover:bg-black group-hover:scale-110 transition-all duration-300">
                <div className="group-hover:text-spotify-green text-black transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;