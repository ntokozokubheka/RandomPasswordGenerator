const express = require('express');
const passwordRoutes = require('./routes/passwordRoutes'); // Import the password routes

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Use the passwordRoutes for /password paths
app.use('/password', passwordRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
