import axios from "axios";

import type {
  BookingRequest,
  BookingResponse,
  CamperDetails,
  CamperFilters,
  CampersResponse,
  FiltersResponse,
  Review,
} from "@/types";

const api = axios.create({
  baseURL: "https://campers-api.goit.study",
});

interface GetCampersParams extends CamperFilters {
  page?: number;
  perPage?: number;
}

export async function getCampers({
  page = 1,
  perPage = 4,
  location,
  form,
  transmission,
  engine,
}: GetCampersParams): Promise<CampersResponse> {
  const { data } = await api.get<CampersResponse>("/campers", {
    params: {
      page,
      perPage,
      location: location || undefined,
      form: form || undefined,
      transmission: transmission || undefined,
      engine: engine || undefined,
    },
  });

  return data;
}

export async function getCamperById(camperId: string): Promise<CamperDetails> {
  const { data } = await api.get<CamperDetails>(`/campers/${camperId}`);

  return data;
}

export async function getReviews(camperId: string): Promise<Review[]> {
  const { data } = await api.get<Review[]>(`/campers/${camperId}/reviews`);

  return data;
}

export async function getFilters(): Promise<FiltersResponse> {
  const { data } = await api.get<FiltersResponse>("/campers/filters");

  return data;
}

export async function createBooking(
  camperId: string,
  booking: BookingRequest,
): Promise<BookingResponse> {
  const { data } = await api.post<BookingResponse>(
    `/campers/${camperId}/booking-requests`,
    booking,
  );

  return data;
}

export default api;
