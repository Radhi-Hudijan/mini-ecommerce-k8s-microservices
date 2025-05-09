const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());

// Enable CORS
app.use(cors());

// Log incoming requests
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`, req.body); // Log incoming requests
  next();
});

// Endpoint to accept orders
app.post('/orders', async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    // Fetch product details from Product Service
    const response = await axios.get(`http://localhost:3000/products`);
    const product = response.data.find(p => p.id === productId);

    if (!product) {
      return res.status(404).send('Product not found');
    }

    // Process the order (mock implementation)
    const order = {
      productId,
      quantity,
      total: product.price * quantity
    };

    res.status(201).json(order);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Order Service running on http://localhost:${port}`);
});