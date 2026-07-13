"use client";

import { FaHeart, FaRegHeart } from "react-icons/fa";

import { useFavorites } from "@/hooks";

import styles from "./FavoriteButton.module.css";

interface Props {
  camperId: string;
}

export default function FavoriteButton({ camperId }: Props) {
  const { isFavorite, toggleFavorite } = useFavorites();

  const favorite = isFavorite(camperId);

  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => toggleFavorite(camperId)}
      aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
    >
      {favorite ? <FaHeart className={styles.active} /> : <FaRegHeart />}
    </button>
  );
}
