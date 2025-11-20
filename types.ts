import React from 'react';

export interface Track {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  duration: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PlaylistItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}