// server.js
const express = require('express');
const cors = require('cors');
const math = require('mathjs');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// POST /calculate - Receives an expression and returns the result
app.post('/calculate', (req, res) => {
  const { expression } = req.body;

  if (!expression || typeof expression !== 'string') {
    return res.status(400).json({ error: 'Invalid expression' });
  }

  try {
    const result = math.evaluate(expression);
    res.json({ result });
  } catch (err) {
    res.status(400).json({ error: 'Invalid calculation' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Calculator backend is running at http://localhost:${port}`);
});

