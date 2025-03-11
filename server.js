require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectToDB } = require('./config/db'); // Destructure the function

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/news', require('./routes/newsroutes'));
app.use('/api/categories', require('./routes/cateroutes'));

// Connect to the database
connectToDB();

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});