"use client";

import { useQuery } from "@tanstack/react-query";

import { getCamperById } from "@/services";

export function useCamper(camperId: string) {
  return useQuery({
    queryKey: ["camper", camperId],

    queryFn: () => getCamperById(camperId),

    enabled: Boolean(camperId),
  });
}
