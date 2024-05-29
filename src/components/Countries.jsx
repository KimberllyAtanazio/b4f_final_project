import Link from 'next/link';
import styles from '@/styles/Countries.module.css';

export default function CountryCard({ country }) {
  return (
    <div className={styles.countryCard}>
      <Link href={`/countries/${country.title}`} className={styles.link}>
        <div className={styles.imageContainer}>
          <img
            src={`/images/${country.imageName}`}
            alt={country.title}
            className={styles.image}
          />
        <span className={styles.title}>{country.title}</span>
        </div>
      </Link>
    </div>
  );
}
