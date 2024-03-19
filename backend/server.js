const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Specify allowed origins
const allowedOrigins = ['http://localhost:3000']; // Add your frontend URL here

// CORS middleware with options
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err.message));

// Test route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Routes
app.use('/api', require('./routes/productRoutes'));
app.use('/api', require('./routes/orderRoutes'));
app.use('/api', require('./routes/mpesaRoutes')); // Add Mpesa routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

