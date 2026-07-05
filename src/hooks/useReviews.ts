"use client";

import { useQuery } from "@tanstack/react-query";

import { getCamperReviews } from "@/services/api";
import { queryKeys } from "@/constants/queryKeys";

export function useReviews(camperId: string) {
  return useQuery({
    queryKey: queryKeys.reviews(camperId),

    queryFn: () => getCamperReviews(camperId),

    enabled: !!camperId,
  });
}
