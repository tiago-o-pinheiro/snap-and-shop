import { Plataforms } from "./plataforms.type";

export type Product = {
  id: string;
  title: string;
  price: string;
  originalPrice: string;
  images: string[];
  rating: number;
  reviews: number;
  platform: Plataforms;
  discount: string;
  brand: string;
  category: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  inStock: boolean;
  freeShipping: boolean;
};
