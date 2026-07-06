import { CamperForm, Engine, Transmission } from "./camper";

export interface CamperFilters {
  location?: string;

  form?: CamperForm;

  transmission?: Transmission;

  engine?: Engine;
}

export interface FiltersResponse {
  forms: CamperForm[];

  transmissions: Transmission[];

  engines: Engine[];
}
