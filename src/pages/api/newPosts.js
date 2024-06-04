import { insertPost } from '@/services/postsServices';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { title, country, content } = req.body;
      const result = await insertPost({
        title,
        country,
        content,
        date: new Date().toISOString(),
      });

      return res.status(200).json({ result });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  } else {
    res.status(400).json({ message: 'Método não permitido' });
  }
}
