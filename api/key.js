module.exports = (req, res) => {
  const allowedDomains = [
    'https://www.oleonardo.my.id',
    'https://oleonardo.my.id',
  ];

  const origin = req.headers.origin;

  if (!allowedDomains.includes(origin)) {
    return res.status(403).json({ error: 'Forbidden: Access is allowed only from specific domain' });
  }

  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API key is not set in environment variables' });
  }

  // Set CORS headers to allow the allowed domain
  res.setHeader('Access-Control-Allow-Origin', origin); 
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  res.status(200).json({ apiKey });
};
