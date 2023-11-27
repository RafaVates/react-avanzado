import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import ProductList from "../components/ProductList";
import BuyForm from "../components/BuyForm";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const Cart = () => {

  const[mostrar,setMostrar] = useState(false)  

  const {
    cart,
    productos,
    setProductos,
    clear,
    removeItem,
    fetchProducts,
    total,
    totalItems,
  } = useContext(CartContext);

  useEffect(() => {
    cart.length > 0 ? fetchProducts() : setProductos([]);
  }, [cart]);

  return (
    <>
      <h1>Carrito de compras</h1>
      {productos.length > 0 ? (
        <Grid>
          <Box sx={{ flexGrow: 1, ml: 5, mr: 5 }}>
            <ProductList
              productos={productos}
              total={total}
              totalItems={totalItems}
              removeItem={removeItem}
            />
          </Box>
          <ButtonGroup fullWidth>
            <Button variant="contained" color="error" size="large" onClick={clear}>Vaciar Carrito</Button>
            <Button variant="contained" color="success" size="large" onClick={()=>setMostrar(!mostrar)}>Comprar</Button>
          </ButtonGroup>
          {mostrar ? <BuyForm/> : null}
        </Grid>
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </>
  );
};

export default Cart;
