import { MongoClient } from 'mongodb';

const URL = 'mongodb://localhost:27017';

let client;
async function connectToMongo() {
  try {
    if (!client) {
      client = await MongoClient.connect(URL);
    }
    return client;
  } catch (err) {
    console.log(err);
  }
}

export async function getMongoCollection(collectionName) {
  const client = await connectToMongo();
  return client.db('SheRoams').collection(collectionName);
}
