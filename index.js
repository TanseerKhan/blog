const express = require('express');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');  // Import user routes
require('dotenv').config();  // Load environment variables
const Blog = require('./models/Blog');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

// Middleware
app.use(express.json());  // To parse JSON request bodies

// Routes
app.use('/api/v1/user', userRoutes); 
app.use('/api/v1/blog', blogRoutes);  // Use user routes

// Sync Database and Start Server
app.listen(process.env.PORT, async () => {
  try {
    await sequelize.sync({ force: false });  // Sync models with the database (without dropping tables)
    console.log('Database connected...');
    console.log('Server running on port ' + process.env.PORT);
  } catch (err) {
    console.log('Error syncing database: ', err);
  }
});
