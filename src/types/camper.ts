export type CamperForm =
  | "alcove"
  | "panel_van"
  | "integrated"
  | "semi_integrated";

export type Transmission = "automatic" | "manual";

export type Engine = "diesel" | "petrol" | "hybrid" | "electric";

export type Amenity =
  | "ac"
  | "bathroom"
  | "kitchen"
  | "tv"
  | "radio"
  | "refrigerator"
  | "microwave"
  | "gas"
  | "water";

export interface CamperListItem {
  id: string;

  name: string;

  price: number;

  rating: number;

  location: string;

  description: string;

  form: CamperForm;

  length: string;
  width: string;
  height: string;

  tank: string;
  consumption: string;

  transmission: Transmission;

  engine: Engine;

  amenities: Amenity[];

  coverImage: string;

  totalReviews: number;

  createdAt: string;

  updatedAt: string;
}

export interface CamperImage {
  id: string;
  camperId: string;

  thumb: string;
  original: string;

  order: number;
}

export interface CamperDetails {
  id: string;

  name: string;

  price: number;

  rating: number;

  totalReviews: number;

  location: string;

  description: string;

  form: CamperForm;

  length: string;
  width: string;
  height: string;

  tank: string;
  consumption: string;

  transmission: Transmission;

  engine: Engine;

  amenities: Amenity[];

  gallery: CamperImage[];

  createdAt: string;

  updatedAt: string;
}
