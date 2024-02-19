import React from "react";
import Product from "./items";
import theme from "../../../../theme";

const products = [
  {
    id: 1,
    name: "Road Cone & Flare",
    image: require("./image 32.png"),
    price: 6.5,
    description:
      "Experience an exquisite blend of flavors in Fancy Fusion, where elegance meets innovation",
  },

  {
    id: 2,
    name: "Road Cone & Flare",
    image: require("./image 32.png"),
    price: 6.5,
    description:
      "Experience an exquisite blend of flavors in Fancy Fusion, where elegance meets innovation",
  },
  {
    id: 3,
    name: "Road Cone & Flare",
    image: require("./image 32.png"),
    price: 6.5,
    description:
      "Experience an exquisite blend of flavors in Fancy Fusion, where elegance meets innovation",
  },
  {
    id: 4,
    name: "Road Cone & Flare",
    image: require("./image 32.png"),
    price: 6.5,
    description:
      "Experience an exquisite blend of flavors in Fancy Fusion, where elegance meets innovation",
  },
  {
    id: 5,
    name: "Road Cone & Flare",
    image: require("./image 32.png"),
    price: 6.5,
    description:
      "Experience an exquisite blend of flavors in Fancy Fusion, where elegance meets innovation",
  },
  {
    id: 6,
    name: "Road Cone & Flare",
    image: require("./image 32.png"),
    price: 6.5,
    description:
      "Experience an exquisite blend of flavors in Fancy Fusion, where elegance meets innovation",
  },
  {
    id: 7,
    name: "Road Cone & Flare",
    image: require("./image 32.png"),
    price: 6.5,
    description:
      "Experience an exquisite blend of flavors in Fancy Fusion, where elegance meets innovation",
  },
  {
    id: 8,
    name: "Road Cone & Flare",
    image: require("./image 32.png"),
    price: 6.5,
    description:
      "Experience an exquisite blend of flavors in Fancy Fusion, where elegance meets innovation",
  },
  {
    id: 9,
    name: "Road Cone & Flare",
    image: require("./image 32.png"),
    price: 6.5,
    description:
      "Experience an exquisite blend of flavors in Fancy Fusion, where elegance meets innovation",
  },
];

const Products = () => {
  const handleAddToCart = (product) => {
    // Handle adding a product to the cart
  };

  const productGridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
  };

  const productStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: '200px',
    fontSize: '10px',
    marginTop: '20px'
  };

  const productImageContainerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary.backgroundColor,
    padding: '20px',
    borderRadius: '10%',
  };

  const productp = {
    marginLeft: '-130px',
    marginTop: '-10px'
  };

  const producth3 = {
    marginLeft: '-40px',
    marginTop: '5px'
  };
  


  const productImageStyles = {
    width: "70%",
    height: "auto",
    objectFit: "cover",

  };

  return (
    <div className="products" style={productGridStyles}>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
          productStyles={productStyles}
          productImageContainerStyles={productImageContainerStyles}
          productImageStyles={productImageStyles}
          producth3={producth3}
          productp = {productp}
        />
      ))}
    </div>
  );
};

export default Products;