import { getMongoCollection } from './mongodb';

const COLLECTION = 'users';

export async function findUserByEmail(email) {
  const client = await getMongoCollection(COLLECTION);
  const result = await client.find({ email: String(email) }).toArray();
  return result;
}

export async function insertUser(user) {
  const client = await getMongoCollection(COLLECTION);
  const result = await client.insertOne(user);
  return result.insertedId;
}

