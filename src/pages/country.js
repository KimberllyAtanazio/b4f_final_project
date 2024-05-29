import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import CountryCard from '@/components/Countries';
import paises from '../../paises.json';
import NavBar from '@/components/NavBar';
import styles from "./country.module.css"

export default () => {
  return (
    <div className={styles.container}>
        <div>
            <Header />
        </div>
        <div className={styles.searchForm}>
            <SearchBar />
        </div>
      <div className={styles.countryCard}>
        {paises.map((p) => (
          <CountryCard country={p} />
        ))}
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
};
