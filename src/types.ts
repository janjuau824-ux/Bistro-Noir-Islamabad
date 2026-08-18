export type MenuCategory = 
  | 'all' 
  | 'starters' 
  | 'mains' 
  | 'desserts' 
  | 'degustation' 
  | 'beverages' 
  | 'caviar';

export type DietaryTag = 
  | 'Halal Certified' 
  | "Chef's Signature" 
  | 'Vegetarian' 
  | 'Gluten-Free' 
  | 'Contains Dairy' 
  | 'Contains Nuts' 
  | 'Truffle & Caviar';

export interface MenuItem {
  id: string;
  name: string;
  frenchName: string;
  category: 'starters' | 'mains' | 'desserts' | 'degustation' | 'beverages' | 'caviar';
  pricePKR: number;
  description: string;
  longDescription: string;
  ingredients: string[];
  allergens: string[];
  dietary: DietaryTag[];
  pairing: string;
  image: string;
  rating: number;
  preparationTime: string;
  isPopular?: boolean;
  calories?: number;
}

export type SeatingArea = 'Main Dining Hall' | 'Le Jardin Terrace (Margalla View)' | 'Salon Noir (Private VIP Suite)';
export type OccasionType = 'Casual Dining' | 'Romantic Dinner' | 'Birthday Celebration' | 'Anniversary' | 'Business Dinner' | 'Diplomatic Reception';

export interface ReservationData {
  id?: string;
  referenceCode?: string;
  fullName: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  seatingArea: SeatingArea;
  occasion: OccasionType;
  specialRequests?: string;
  dietaryRequirements?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  title: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
  dishLoved: string;
  verified: boolean;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  frenchName: string;
  category: 'Ambiance' | 'Culinary Art' | 'Private Dining' | 'Mixology & Cellar';
  imageUrl: string;
  description: string;
  aspectRatio?: 'wide' | 'tall' | 'square';
}

export interface Accolade {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  iconName: string;
}
