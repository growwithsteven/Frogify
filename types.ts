export interface Frog {
  id: string;
  name: string;
  scientificName: string;
  image: string;
  verified: boolean;
  distance?: string;
  timeAgo?: string;
  location?: string;
  date?: string;
  rarity?: 'Common' | 'Rare' | 'Legendary';
  description?: string;
  matchScore?: number;
  stats?: {
    status: string;
    size: string;
    active: string;
  };
}

export type Screen = 'home' | 'log' | 'detail' | 'scan';
