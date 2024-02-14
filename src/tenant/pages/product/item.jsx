import React, { useState } from "react";
import Products from "./products";
import Order from "./order";

const Apppage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="app">
      <div className="side-panel">
        <Order product={selectedProduct} />
      </div>
      <div className="main-panel">
        <Products onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};

export default Apppage;