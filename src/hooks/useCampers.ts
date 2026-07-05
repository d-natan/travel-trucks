"use client";

import { useInfiniteQuery } from "@tanstack/react-query";

import { getCampers } from "@/services/api";
import { queryKeys } from "@/constants/queryKeys";
import { CampersFilters } from "@/types/api";

const PER_PAGE = 4;

export function useCampers(filters: Omit<CampersFilters, "page" | "perPage">) {
  return useInfiniteQuery({
    queryKey: [...queryKeys.campers, filters],

    initialPageParam: 1,

    queryFn: ({ pageParam }) =>
      getCampers({
        ...filters,
        page: pageParam,
        perPage: PER_PAGE,
      }),

    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
      }

      return undefined;
    },
  });
}
