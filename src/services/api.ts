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
}

export interface BookingResponse {
  message: string;
}

export async function createBookingRequest(
  camperId: string,
  body: BookingRequest,
): Promise<BookingResponse> {
  const { data } = await api.post(
    `/campers/${camperId}/booking-requests`,
    body,
  );

  return data;
}
