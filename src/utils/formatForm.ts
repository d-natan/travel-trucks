import { CamperForm } from "@/types";

const labels: Record<CamperForm, string> = {
  alcove: "Alcove",

  panel_van: "Panel Van",

  integrated: "Integrated",

  semi_integrated: "Semi Integrated",
};

export function formatForm(form: CamperForm) {
  return labels[form];
}
