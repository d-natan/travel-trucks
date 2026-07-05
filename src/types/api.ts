import { Camper, CamperForm, Engine, Transmission } from "./camper";

export interface CampersResponse {
  items: Camper[];

  total: number;

  page: number;

  perPage: number;

  totalPages: number;
}

export interface CampersFilters {
  page?: number;

  perPage?: number;

  location?: string;

  form?: CamperForm;

  transmission?: Transmission;

  engine?: Engine;
}
