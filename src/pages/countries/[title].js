import { useRouter } from 'next/router';
import paises from '@/../paises.json';
import styles from "./detailsCountry.module.css"
import { DetailCardIcon } from '@/../public/icons/DetailCardIcon';
import { LocationIcon } from '@/../public/icons/LocationIcon';
import { BackIcon } from '@/../public/icons/BackIcon';
import NavBar from '@/components/NavBar';
import Image from 'next/image';
import IconFavorite from "@/../public/icons/FavoriteIcon.png";
import IconUnFavorite from "@/../public/icons/UnfavoriteIcon.png";
import { useFavoriteContext } from "@/contexts/FavoriteContext";
import Loading from '@/components/Loading';

export default function DetailsCountry() {
  const { favorite, addFavorite } = useFavoriteContext();
  const router = useRouter();
  const { title } = router.query;

  if (!title) {
    return <Loading />;
  }

  const pais = paises.find((e) => e.title === title);

  if (!pais) {
    return <Loading />;
  }

  const isFavorite = favorite.some((fav) => fav.id === pais.id);
  const icone = !isFavorite ? IconUnFavorite : IconFavorite;

  const handleFavoriteClick = () => {
    addFavorite(pais);
  };

  return (
    <div className={styles.container}>
      <div>
        <figure className={styles.favoriteIcon}>
          <Image
            src={icone}
            alt="Icon to favorite"
            width={44}
            height={44}
            onClick={handleFavoriteClick}
            style={{ cursor: 'pointer' }}
          />
        </figure>
        
        <button
          className={styles.backButton}
          onClick={() => router.back()}
        >
          <BackIcon />
        </button>
        <img
          src={`/images/${pais.imageName}`}
          alt={pais.title}
          className={styles.image}
        />

      </div>
      <div className={styles.card}>
        <div className={styles.retangle}>
          <DetailCardIcon />
        </div>

        <h1 className={styles.title}>{pais.title}</h1>

        <div className={styles.continent}>
          <LocationIcon />
          <p> {pais.continent}</p>
        </div>

        {/* Tags: */}
        <ul className={styles.listCard}>
          {pais.tags.map((tag, index) => (
            <li key={index} className={styles.listTags}>{tag}</li>
          ))}
        </ul>

        <div className={styles.about}>
          <h1>About Destination</h1>
          <p>{pais.about}</p>
        </div>

        <div className={styles.curiosities}>
          {pais.curiosities.map((curiosity, index) => (
            <div key={index}>
              <h2>{curiosity.topic}</h2>
              <p>{curiosity.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.placesBox}>
          <h2 className={styles.places}>Must visit places:</h2>
          <ul className={styles.placeList}>
            {pais.must_visit_places.map((place, index) => (
              <li key={index} className={styles.placesInfos}>{place}</li>
            ))}
          </ul>
        </div>
      </div>

      <NavBar />
    </div>
  );
}
