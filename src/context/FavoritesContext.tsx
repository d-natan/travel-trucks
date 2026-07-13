"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface FavoritesContextValue {
  favorites: string[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

const STORAGE_KEY = "travel-trucks-favorites";

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const stored = localStorage.getItem(STORAGE_KEY);

    return stored ? JSON.parse(stored) : [];
  });
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const isFavorite = (id: string) => favorites.includes(id);

  const value = {
    favorites,
    toggleFavorite,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used inside FavoritesProvider");
  }

  return context;
}
