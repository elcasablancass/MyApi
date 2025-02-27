module.exports = (req, res) => {
  const allowedDomain = 'https://www.oleonardo.my.id/';

  const origin = req.headers.origin;

  if (origin !== allowedDomain) {
    return res.status(403).json({ error: 'Forbidden: Access is allowed only from specific domain' });
  }

  const apiKey = process.env.API_KEY; 

  if (!apiKey) {
    return res.status(500).json({ error: 'API key is not set in environment variables' });
  }

  // Set CORS headers to allow the allowed domain
  res.setHeader('Access-Control-Allow-Origin', allowedDomain);
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Respond with the API key
  res.status(200).json({ apiKey });
};
