export enum CardTemplate {
  Red = 'Red',
  Purple = 'Purple',
  Green = 'Green',
  Gold = 'Gold',
  Blue = 'Blue',
  Electric = 'Electric',
  Neon = 'Neon',
  Golden = 'Golden',
  Mystic = 'Mystic',
}

export interface CardData {
  title: string;
  description: string;
  image: string | null;
}
