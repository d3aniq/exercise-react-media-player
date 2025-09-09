export type Track = {
  id: string;
  title: string;
  artist: string;
  cover: string;     // URL to cover image
  duration: number;  // seconds
  favorite?: boolean;
};
