module.exports = (req, res) => {
  const apiKey = process.env.API_KEY; 

  if (!apiKey) {
    return res.status(500).json({ error: 'API key is not set in environment variables' });
  }

  res.status(200).json({ apiKey });
};
