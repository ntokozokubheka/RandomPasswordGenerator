const express = require('express');
const passwordRoutes = require('./routes/passwordRoutes.js'); 

const app = express();

app.use(express.json());

app.use('/password', passwordRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});