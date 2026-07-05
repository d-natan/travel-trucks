"use client";

import { useQuery } from "@tanstack/react-query";

import { getCamperById } from "@/services/api";
import { queryKeys } from "@/constants/queryKeys";

export function useCamper(camperId: string) {
  return useQuery({
    queryKey: queryKeys.camper(camperId),

    queryFn: () => getCamperById(camperId),

    enabled: !!camperId,
  });
}
