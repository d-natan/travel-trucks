"use client";

import { useMemo, useState } from "react";

import CatalogList from "@/components/catalog/CatalogList";
import Filters from "@/components/catalog/Filters";
import LoadMoreButton from "@/components/catalog/LoadMoreButton";
import Loader from "@/components/ui/Loader";

import { useCampers } from "@/hooks/useCampers";

import type { CamperFilters } from "@/types";

import styles from "./page.module.css";

export default function CatalogPage() {
  const [filters, setFilters] = useState<CamperFilters>({});

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCampers(filters);

  const campers = useMemo(
    () => data?.pages.flatMap((page) => page.campers) ?? [],
    [data],
  );

  return (
    <main className={styles.page}>
      <Filters initialFilters={filters} onSearch={setFilters} />

      <section className={styles.catalog}>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <p>Something went wrong.</p>
        ) : campers.length === 0 ? (
          <p>No campers found.</p>
        ) : (
          <>
            <CatalogList campers={campers} />

            {hasNextPage && (
              <LoadMoreButton
                isLoading={isFetchingNextPage}
                onClick={() => fetchNextPage()}
              />
            )}
          </>
        )}
      </section>
    </main>
  );
}
