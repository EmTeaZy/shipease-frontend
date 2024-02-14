import React from 'react';

const Item = ({ product, addToOrder }) => {
  const { name, image, description, price } = product;

  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      <button onClick={() => addToOrder(product)}>Add to Order</button>
    </div>
  );
};

export default Item;