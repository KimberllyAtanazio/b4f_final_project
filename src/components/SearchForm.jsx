import styles from '../styles/SearchForm.module.css';
import { useState } from 'react';

export default function SearchForm() {
  const [search, setSearch] = useState('');

  return (
    <input
      value={search}
      className={styles.searchform}
      type="search"
      placeholder="Search by countries"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
