import { checkPassword, getUserByEmail } from '@/services/userServices';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: 'Preencha todos os campos.' });
      }

      const user = await getUserByEmail(email);

      if (!user) {
        return res.status(401).json({ message: 'Email ou password inválido.' });
      }

      const isPasswordValid = await checkPassword(password, email);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Password inválida.' });
      }

      res.status(200).json({ message: 'Login efetuado com susseso' });
    } catch (error) {
      console.error('Erro ao fazer o login:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
