type PropertyType = "stan" | "kuca" | "poslovni";

type Property = {
  id: string;
  location: string;
  price: number;
  squareMeters: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  images: string[];
  features: string[];
  propertyType: PropertyType;
};
