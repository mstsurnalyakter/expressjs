const express = require('express');
const router = express.Router();



router.get("/registration", (req, res) => {
  res.send(`<h1>Registration route</h1>`);
  res.end();
});

router.get("/loggin", (req, res) => {
  res.send(`<h1>Loggin route</h1>`);
  res.end();
});

module.exports = router;