export enum CardDesign {
  Standard = 'Standard',
  Edged = 'Edged',
  Rounded = 'Rounded',
  Ornate = 'Ornate',
  Curved = 'Curved',
  Digital = 'Digital',
  Beveled = 'Beveled',
  Sculpted = 'Sculpted',
  Hexagon = 'Hexagon',
  Wave = 'Wave',
  Tech = 'Tech',
  Classic = 'Classic',
}

export enum CardTheme {
  Red = 'Red',
  Purple = 'Purple',
  Green = 'Green',
  Gold = 'Gold',
  Blue = 'Blue',
  Electric = 'Electric',
  Neon = 'Neon',
  Golden = 'Golden',
  Mystic = 'Mystic',
  Cyber = 'Cyber',
  Inferno = 'Inferno',
  Starlight = 'Starlight',
  Oceanic = 'Oceanic',
  Royal = 'Royal',
  Forest = 'Forest',
  Cosmic = 'Cosmic',
}

export interface CardData {
  title: string;
  description: string;
  image: string | null;
}