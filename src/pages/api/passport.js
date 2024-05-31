export default function handler(req, res) {
  // Example page data
  const pages = [
    { title: '', content: '' },
    // Add more pages as needed
  ];

  res.status(200).json({ pages });
}
