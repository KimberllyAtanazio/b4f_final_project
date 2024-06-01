import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import SearchForm from '@/components/SearchBar';
import NavBar from '@/components/NavBar';
import ListPosts from '@/components/Posts';
import styles from "@/pages/community.module.css"
import { NewPostIcon } from "@/../public/icons/NewPostIcon"


function Community() {
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]); // Estado para armazenar os posts
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await fetch('/api/posts', {
        method: 'GET',
      });
      const res = await postsData.json();
      setPosts(res);
    };
    fetchPosts();
  }, []); // useEffect para buscar posts na inicialização

  const handleSearch = () => {
    // Chamar uma função para buscar posts (opcional)
  };

  const handleNewPostClick = () => {
    // Redirecionar para a página de criação de post
    router.push('/new-post');
  };

  return (
    <div>
      <div className={styles.header}>
        <h1>Community</h1>
      </div>
      <div className={styles.searchForm}>
        <SearchForm search={search} setSearch={setSearch} onSearchValues={handleSearch} />
      </div>
      <div className={styles.postCard}>
        <ListPosts posts={posts} search={search} />
      </div>
      <div>
        <NavBar />
      </div>

      {/* Botão para criar novo post */}
      <div className={styles.createPostButton}>
        <button onClick={handleNewPostClick}>
          <NewPostIcon />
        </button>
      </div>
    </div>
  );
}

export default Community;

