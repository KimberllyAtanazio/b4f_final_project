import { createUser } from '../services/userServices';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, password } = req.body;
    const result = await createUser({
      username: username,
      email: email,
      password: password,
    });

    if (result === undefined) {
      return res.status(400).json({ message: 'ERRO' });
    }
    return res.status(200).json({ result });
  }
  res.status(400).json({ message: 'Metodo errado' });
}
