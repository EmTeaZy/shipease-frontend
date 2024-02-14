import React from "react";

const Order = ({ product }) => {
  if (!product) {
    return null;
  }

  const { image, name, description } = product;

  return (
    <div className="order">
      <div className="order-content">
        <img src={image} alt={name} className="order-image" />
        <div className="order-info">
          <h3 className="order-name">{name}</h3>
          <p className="order-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Order;