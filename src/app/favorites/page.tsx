"use client";

import CatalogList from "@/components/catalog/CatalogList";
import Loader from "@/components/ui/Loader";

import { useCampers, useFavorites } from "@/hooks";

import styles from "./page.module.css";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  const { data, isLoading, isError } = useCampers({});

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !data) {
    return (
      <section className={styles.container}>
        <p>Something went wrong.</p>
      </section>
    );
  }

  const campers = data.pages
    .flatMap((page) => page.campers)
    .filter((camper) => favorites.includes(camper.id));

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Favorites</h1>

      {campers.length === 0 ? (
        <p className={styles.empty}>You haven&apos;t added any campers yet.</p>
      ) : (
        <CatalogList campers={campers} />
      )}
    </section>
  );
}
