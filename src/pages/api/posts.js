import { getAllPosts } from '../../data/postsData';

// const getAllPosts = async (db) => {
//   const collection = db.collection('posts');
//   const posts = await collection.find({}).toArray();
//   return posts;
// };

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const posts = await getAllPosts();
      console.log(posts);
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}
