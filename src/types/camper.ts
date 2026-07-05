export type CamperForm =
  | "alcove"
  | "panel_van"
  | "integrated"
  | "semi_integrated";

export type Transmission = "automatic" | "manual";

export type Engine = "diesel" | "petrol" | "hybrid" | "electric";

export interface GalleryImage {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
}

export interface Camper {
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

  amenities: string[];

  gallery: GalleryImage[];

  totalReviews: number;

  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  camperId: string;

  reviewer_name: string;

  reviewer_rating: number;

  comment: string;

  createdAt: string;
}
