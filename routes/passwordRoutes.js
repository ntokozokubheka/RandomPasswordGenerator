const express = require('express');

const router = express.Router();

router.get('/generate-password', (req, res) => {
  const length = parseInt(req.query.length) || 12;
  const password = generateRandomPassword(length);
  res.json({ password });
});

const generateRandomPassword = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length); 
    password += characters[randomIndex];
  }
  return password;
};

module.exports = router; 