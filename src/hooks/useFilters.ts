"use client";

import { useQuery } from "@tanstack/react-query";

import { getFilters } from "@/services";

export function useFilters() {
  return useQuery({
    queryKey: ["filters"],

    queryFn: getFilters,

    staleTime: Infinity,
  });
}
