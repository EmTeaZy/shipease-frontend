import React from "react";

const items = ({ product, onAddToCart, productStyles, productImageStyles, productImageContainerStyles, producth3, productp }) => {
  return (
    <div className="product" style={productStyles}>
      <div style={productImageContainerStyles}>
        <img src={product.image} alt={product.name} style={productImageStyles} />
      </div>
      <h3 style={producth3}>{product.name}</h3>
      <p style={productp} >${product.price}</p>
    </div>
  );
};

export default items;