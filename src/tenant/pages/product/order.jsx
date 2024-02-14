import React, { useState } from 'react';
import Item from './item';

const Order = () => {
  const [order, setOrder] = useState([]);

  const addToOrder = (product) => {
    setOrder([...order, product]);
  };

  return (
    <div className="order">
      <h2>Order</h2>
      {order.map((product, index) => (
        <div key={index} className="order-item">
          <Item product={product} />
        </div>
      ))}
    </div>
  );
};

export default Order;