const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const musicRoutes = require('./routes/music.routes');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  // process.env.FRONTEND_URL = your Vercel URL (set later in Render dashboard)
  // fallback = localhost for local development
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,   // Allow cookies
}));

app.use('/api/auth', authRoutes);
app.use('/api/music', musicRoutes);

module.exports = app;