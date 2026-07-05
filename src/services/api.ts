import axios from "axios";

import { CampersFilters, CampersResponse } from "@/types/api";

import { Camper, Review } from "@/types/camper";

export const api = axios.create({
  baseURL: "https://campers-api.goit.study",
});

export async function getCampers(
  params: CampersFilters,
): Promise<CampersResponse> {
  const { data } = await api.get("/campers", {
    params,
  });

  return data;
}

export async function getCamperById(camperId: string): Promise<Camper> {
  const { data } = await api.get(`/campers/${camperId}`);

  return data;
}

export async function getCamperReviews(camperId: string): Promise<Review[]> {
  const { data } = await api.get(`/campers/${camperId}/reviews`);

  return data;
}

export interface BookingRequest {
  name: string;

  email: string;

  bookingDate: string;

  comment: string;
}

export async function createBooking(camperId: string, body: BookingRequest) {
  const { data } = await api.post(`/campers/${camperId}/bookings`, body);

  return data;
}
