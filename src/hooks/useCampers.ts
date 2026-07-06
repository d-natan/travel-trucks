"use client";

import { useInfiniteQuery } from "@tanstack/react-query";

import { getCampers } from "@/services";
import { CAMPERS_PER_PAGE } from "@/constants";
import type { CamperFilters } from "@/types";

export function useCampers(filters: CamperFilters) {
  return useInfiniteQuery({
    queryKey: ["campers", filters],

    queryFn: ({ pageParam = 1 }) =>
      getCampers({
        page: pageParam,
        perPage: CAMPERS_PER_PAGE,
        ...filters,
      }),

    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      if (lastPage.page >= lastPage.totalPages) {
        return undefined;
      }

      return lastPage.page + 1;
    },
  });
}
