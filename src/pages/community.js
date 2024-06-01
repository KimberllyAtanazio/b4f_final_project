import React, { useState, useEffect } from 'react';
import SearchForm from '@/components/SearchBar';
import NavBar from '@/components/NavBar';
import ListPosts from '@/components/Posts';


function Community() {
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]); // Estado para armazenar os posts

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

  return (
    <div>
    <h1>Community</h1>
      <SearchForm search={search} setSearch={setSearch} onSearchValues={handleSearch} />
      <ListPosts posts={posts} search={search} />
      <NavBar />
    </div>
  );
}

export default Community;

