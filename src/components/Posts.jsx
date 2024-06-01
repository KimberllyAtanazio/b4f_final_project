import React from 'react';
import styles from "@/styles/Posts.module.css"
import Loading from './Loading';

export default function ListPosts({ posts, search }) {
  // Filtrar os posts pelo título antes de renderizar
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  // Ordenar os posts pela data, mais recentes primeiro
  const sortedPosts = filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className={styles.cardPosts}>
      {sortedPosts && sortedPosts.length > 0 ? (
        sortedPosts.map((post) => (
          <div key={post.id} className="comments">
            <h2 className={styles.title}>{post.title}</h2>
            {/* <img src={`/images/${post.imageName}`} alt={post.title} /> */}
            <p>{post.content}</p>
            <p>{post.date}</p>
            <hr />
          </div>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}
