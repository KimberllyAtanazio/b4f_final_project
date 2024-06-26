import { createUser } from '@/services/userServices';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, password } = req.body;

    // Validação dos campos no backend
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
      const result = await createUser({ username, email, password });

      if (!result) {
        return res.status(400).json({ message: 'Error creating user.' });
      }

      return res.status(200).json({ message: 'User created successfully.' });
    } catch (error) {
      console.error('Error in user creation:', error);
      return res.status(500).json({ message: 'Internal server error.' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed.' });
  }
}
