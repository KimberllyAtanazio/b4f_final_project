import { getMongoCollection } from './mongodb';

const COLLECTION = 'posts';

export async function getAllPosts() {
  const client = await getMongoCollection(COLLECTION);
  const result = await client.find({}).toArray();

  return result;
}

export async function createPost(post) {
  const client = await getMongoCollection('posts');
  const result = await client.insertOne(post);
  return result.insertedId;
}
