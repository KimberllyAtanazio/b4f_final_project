//import Tweet  from '../home/tweet.child';

// export default function ListPosts() {
//   return (
    // <div className="comments">
    //   {posts.map((post) => (
    //     <Tweet key={post.id}>
    //       <img src={`/images/${posts.imageName}`} alt={posts.title} />
    //       <h2>{post.title}</h2>
    //       <p>{post.content}</p>
    //       <p>{post.date}</p>
    //     </Tweet>

//       ))}
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';

export default function ListPosts() {
  const [posts, setPosts] = useState(undefined);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await fetch('/api/posts', {
        method: 'GET',
      });
      const res = await postsData.json();
      setPosts(res);
    };
    fetchPosts();
  }, []);

  // return (
  //   <div className="post-list">
  //     {posts.map((post) => (
  //       <Post key={post._id} post={post} />
  //     ))}
  //   </div>
  // );

return (
  <div className="post-list">
    {posts && posts.length > 0 ? (
      posts.map((post) => (
        <div key={post.id} className="comments">
          <h2>{post.title}</h2>
          {/* <img src={`/images/${post.imageName}`} alt={post.title} /> */}
          <p>{post.content}</p>
          <p>{post.date}</p>
        </div>
      ))
    ) : (
      <p>Loading posts...</p>
    )}
  </div>
)}
