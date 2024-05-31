import React, { useState } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import CountryCard from '@/components/Countries';
import paisesJSON from '../../paises.json';
import NavBar from '@/components/NavBar';
import styles from './country.module.css';
import FilterButton from '@/components/FilterButton';

export default () => {
  const [paises, setPaises] = useState(paisesJSON);
  const [continenteSelecionado, setContinenteSelecionado] = useState('todos');
  const [pesquisa, setPesquisa] = useState('');

  const handleFiltroChange = (e) => {
    setContinenteSelecionado(e.target.value);
  };
  const handleSearch = (e) => {
    setPaises(
      paisesJSON.filter((p) =>
        p.title.toLowerCase().includes(pesquisa.toLowerCase())
      )
    );
  };

  const paisesFiltrados =
    continenteSelecionado === 'todos'
      ? paises
      : paises.filter((pais) => pais.continent === continenteSelecionado);

  return (
    <div className={styles.container}>
      <div>
        <Header />
      </div>
      <div className={styles.searchForm}>
        <SearchBar
          search={pesquisa}
          setSearch={setPesquisa}
          onSearchValues={handleSearch}
        />
        <FilterButton onChange={handleFiltroChange} />
      </div>
      <div className={styles.countryCard}>
        {paisesFiltrados.map((p, index) => (
          <CountryCard key={index} country={p} />
        ))}
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
};
