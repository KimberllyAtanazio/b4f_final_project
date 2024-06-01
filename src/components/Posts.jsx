import React from 'react';
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';
import styles from "@/styles/Posts.module.css"
import Loading from './Loading';

export default function ListPosts({ posts, search }) {
  // Filtrar os posts pelo título antes de renderizar
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  // Ordenar os posts pela data, mais recentes primeiro
  const sortedPosts = filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "do MMMM yyyy", { locale: enGB });
  };

  return (
    <div className={styles.cardPosts}>
      <p className={styles.smallTitle}>últimos posts</p>
      {sortedPosts && sortedPosts.length > 0 ? (
        sortedPosts.map((post) => (
          <div key={post.id} className={styles.cardContent}>
            <h2 className={styles.title}>{post.title}</h2>
            {/* <img src={`/images/${post.imageName}`} alt={post.title} /> */}
            <p className={styles.postContent}>{post.content}</p>
            <p className={styles.date}>{formatDate(post.date)}</p>
            <br />
            <hr className={styles.line}/>
          </div>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}
