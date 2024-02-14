import React from 'react';
import Order from './order';
import item from './item';

const products = [
  // Add product objects here
];

const App = () => {
  return (
    <div className="App">
      <h1>Products</h1>
      <div className="products-container">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <item product={product} addToOrder={setOrder} />
          </div>
        ))}
      </div>
      <Order />
    </div>
  );
};

export default App;