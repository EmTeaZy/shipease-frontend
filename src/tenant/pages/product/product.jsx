import React, { useState } from "react";
import Products from "./components/productinformation";
import Order from "./components/order";

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