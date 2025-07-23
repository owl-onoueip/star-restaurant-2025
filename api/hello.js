export default function handler(req, res) {
  res.status(200).json({
    message: 'STAR Restaurant API is ready!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'production'
  });
}
