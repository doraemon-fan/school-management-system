require('dotenv').config();
const express = require('express');
const db = require('./db');
const schoolRoutes = require('./routes/schoolRoutes');
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', schoolRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  try {
    await db.getConnection();
    console.log('Connected to MySQL');
    console.log(`Listening on port ${PORT}`);
  } catch (err) {
    console.error('Failed to connect to MySQL:', err.message);
  }
});
