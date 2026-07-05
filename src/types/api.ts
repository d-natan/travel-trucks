import { Camper, CamperForm, Engine, Transmission } from "./camper";

export interface CampersResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;

  campers: Camper[];
}

export interface CampersFilters {
  page?: number;
  perPage?: number;

  location?: string;

  form?: CamperForm;

  transmission?: Transmission;

  engine?: Engine;
}
