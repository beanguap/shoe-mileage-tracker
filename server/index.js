// server/index.js
const express = require('express');
const cors = require('cors');
const shoesRoutes = require('./routes/shoes');

const app = express();
app.use(cors());
app.use(express.json());

// Use the shoes router
app.use('/api/shoes', shoesRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});