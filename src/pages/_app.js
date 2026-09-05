import "@/styles/globals.css";
import FavoritesProvider from "@/contexts/FavoriteContext";

function MyApp({ Component, pageProps }) {
  return (
    <FavoritesProvider>
      <Component {...pageProps} />
    </FavoritesProvider>
  );
}

export default MyApp;
