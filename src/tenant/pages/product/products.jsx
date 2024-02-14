import React from "react";
import Product from "./product";

const products = [
  {
    id: 1,
    name: "Road Cone & Flare",
    image: require('../product/image 32.png'),
    price: 6.5,
    description:
      "Experience an exquisite blend of flavors in Fancy Fusion, where elegance meets innovation",
  },

  {
    id: 1,
    name: "Road Cone & Flare",
    image: require('../product/image 32.png'),
    price: 6.5,
    description:
      "Experience an exquisite blend of flavors in Fancy Fusion, where elegance meets innovation",
  },
  // ... more products
];

const Products = () => {
  const handleAddToCart = (product) => {
    // Handle adding a product to the cart
  };

  return (
    <div className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default Products;