import { SearchIcon } from '../../public/icons/SearchIcon';
import styles from '../styles/SearchBar.module.css';
import { useState } from 'react';

export default function SearchForm({ search, setSearch, onSearchValues }) {
  return (
    <div className={styles.searchContainer}>
    
        <input
          value={search}
          className={styles.searchform}
          type="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className={styles.searchIcon} onClick={onSearchValues}>
          <SearchIcon color={'#203B3F'} />
        </button>
      
    </div>
  );
}

