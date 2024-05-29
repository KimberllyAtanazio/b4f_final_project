// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { searchArtistDetails } from '../utils/logic'; // Modifique para importar a função de busca de detalhes de artistas
// import artistsData from '../data/artists.json'; // Modifique para importar seus dados de artistas em JSON
// import Link from 'next/link';
// import { FiSearch } from 'react-icons/fi';
// import { SiYoutubemusic } from 'react-icons/si';

// function Search() {
//   const [seeMore, setSeeMore] = useState(false);
//   const [search, setSearch] = useState('');
//   const [showList, setShowList] = useState(false);
//   const [artistDetails, setArtistDetails] = useState([]);
//   const router = useRouter();

//   // Esta função será chamada quando o componente for montado
//   useEffect(() => {
//     // Implemente a lógica para buscar os detalhes do artista
//     if (search !== '') {
//       const details = searchArtistDetails(search); // Modifique para usar sua função de busca de detalhes de artista
//       setArtistDetails(details);
//       setShowList(true); // Mostra a lista quando há resultados da pesquisa
//     } else {
//       setShowList(false); // Oculta a lista quando a busca está vazia
//     }
//   }, [search]); // Esta função será chamada sempre que o estado de 'search' mudar

//   const handleInputChange = (e) => {
//     setSearch(e.target.value);
//   };

//   const handleMouseLeave = () => {
//     setShowList(false);
//   };

//   return (
//     <div>
//       <div>
//         <div>
//           <input
//             autoComplete="off"
//             value={search}
//             onChange={handleInputChange}
//             type="search"
//             placeholder="What do you want to listen to?"
//             name="search"
//             id="search"
//           />
//           <FiSearch />
//         </div>
//         {showList && search && (
//           <ul>
//             {artistDetails.map((artist, index) => (
//               <li key={index}>
//                 <Link href={`/arthist/${artist}`}>
//                   <a>{artist}</a>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <div>
//         <button onClick={() => setSeeMore(!seeMore)}>
//           {seeMore ? 'See less' : 'See more'}
//         </button>
//         <ul>
//           {artistsData.map((artist, index) => {
//             if (!seeMore && index >= 20) {
//               return null;
//             }
//             return (
//               <li key={index}>
//                 <Link href={`/arthist/${artist.title}`}>
//                   <a>
//                     {artist.title}
//                     <SiYoutubemusic />
//                   </a>
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Search;

import { SearchIcon } from '../../public/icons/SearchIcon';
import styles from '../styles/SearchBar.module.css';
import { useState } from 'react';

export default function SearchForm() {
  const [search, setSearch] = useState('');

  return (
    <div className={styles.searchContainer}>
      <input
        value={search}
        className={styles.searchform}
        type="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className={styles.searchIcon}>
        <SearchIcon color={'#203B3F'} />
      </div>
    </div>
  );
}


// Endpoint que recebe um valor (nome do país) e o objeto deve fazer um find e buscar todos que tenham aquele nome.
// Botão que acionado faz um fetch ao endpoint
// Endpoint na API
