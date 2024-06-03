// src/contexts/FavoritesContext.js

import { createContext, useContext, useState } from 'react';

export const FavoritesContext = createContext();
FavoritesContext.displayName = "MyFavorites";

export default function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoriteContext() {
  const { favorite, setFavorite } = useContext(FavoritesContext);

  function addFavorite(newFavorite) {
    const repeatedFavorite = favorite.some(
      (item) => item.id === newFavorite.id
    );

    let newList = [...favorite];

    if (!repeatedFavorite) {
      newList.push(newFavorite);
    } else {
      newList = favorite.filter((fav) => fav.id !== newFavorite.id);
    }

    setFavorite(newList);
  }

  function isFavorite(id) {
    return favorite.some((item) => item.id === id);
  }

  return {
    favorite,
    addFavorite,
    isFavorite,
  };
}