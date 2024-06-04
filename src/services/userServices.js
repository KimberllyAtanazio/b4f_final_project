import { insertUser, findUserByEmail } from '@/data/usersData';

export async function getUserByEmail(email) {
  const result = await findUserByEmail(email);
  if (result.length === 0) return false;
  return true;
}

export async function createUser(user) {
  // if(user.username === undefined || user.email === undefined || user.password === undefined){
  //     return undefined
  // }
  const id = await insertUser(user);
  return id;
}

export async function checkPassword(password, email) {
  const user = await findUserByEmail(email);

  if (user[0].password === password) return true;
  return false;
}
