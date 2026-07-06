"use client";

import { useQuery } from "@tanstack/react-query";

import { getReviews } from "@/services";

export function useReviews(camperId: string) {
  return useQuery({
    queryKey: ["reviews", camperId],

    queryFn: () => getReviews(camperId),

    enabled: Boolean(camperId),
  });
}
