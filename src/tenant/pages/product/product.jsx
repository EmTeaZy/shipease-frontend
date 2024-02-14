import React from "react";
import theme from "../../../theme";
import { Grid, Box } from '@mui/material';

const Product = ({ product, onAddToCart }) => {
  const { id, name, image, price, description } = product;

  return (
    <div className="product">
    <Grid item md={3} xs={12}>
          <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '56%',
          marginLeft: '5%',
          height: '100%',
          marginTop: '35px',
          backgroundColor: theme.palette.primary.backgroundColor
        }}
      >
        <img src={image} alt={name} className="product-image" style={{ marginTop: '10px', marginBottom: '20px',marginLeft: '10px',}}/>
        <h3 className="product-name" style={{ marginTop: '-20px'}}>{name}</h3>
        <p className="product-price" style={{ marginTop: '-20px', marginLeft:'-130px'}}>${price}</p>
      </Box>
      </Grid>
    </div>
  );
};

export default Product;