import { createPost } from '@/data/postsData';

export async function insertPost(post) {
  const newPost = await createPost(post);
  return newPost;
}
