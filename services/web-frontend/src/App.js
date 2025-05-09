import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState({ productId: '323', quantity: 1 });

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleOrder = () => {
    console.log('Order payload:', order); // Log the payload for debugging
    axios.post('http://localhost:3001/orders', order)
      .then(response => alert(`Order placed: ${JSON.stringify(response.data)}`))
      .catch(error => console.error('Error placing order:', error));
  };

  return (
    <div>
      <h1>Product Catalog</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => setOrder({ productId: product.id, quantity: 1 })}>Order</button>
          </li>
        ))}
      </ul>
      <div>
        <h2>Place Order</h2>
        <label>
          Quantity:
          <input
            type="number"
            value={order.quantity}
            onChange={e => setOrder({ ...order, quantity: e.target.value })}
          />
        </label>
        <button onClick={handleOrder}>Submit Order</button>
      </div>
    </div>
  );
}

export default App;