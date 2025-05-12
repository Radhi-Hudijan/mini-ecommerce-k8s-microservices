const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3003;

// Enable CORS
app.use(cors());

// Initialize SQLite database
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run("CREATE TABLE products (id INTEGER PRIMARY KEY, name TEXT, price REAL)");
  db.run("INSERT INTO products (name, price) VALUES ('Product A', 10.99), ('Product B', 20.99)");
});

// Endpoint to fetch products
app.get('/products', (req, res) => {
  db.all("SELECT * FROM products", [], (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Product Service running on http://localhost:${port}`);
});