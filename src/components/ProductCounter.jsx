import React, { useEffect, useState,useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Grid } from "@mui/material";

const ProductCounter = ({ id }) => {
  const [contador, setContador] = useState(0);
  const [carrito, setCarrito] = useState();
  const [disabled, setDisabled] = useState(false); 
  const { addItem } = useContext(CartContext);

  const handleIncrease = () => {
    setContador((prev)=>(prev + 1));
  };
  const handleDecrease = () => {
    if (contador > 0) {
      setContador((prev)=>(prev - 1));
    }
  };

  useEffect(() => {
    if (contador > 0) {
      setCarrito("error");
      setDisabled(false);
    } else {
      setCarrito("inherit");
      setDisabled(true);
    }
  }, [contador]);

  return (
    <Grid sx={{display:"flex", flexDirection:"column"}}>
        <>
        <IconButton  color={carrito}>
            <ShoppingCartIcon />
        </IconButton>
        <ButtonGroup
            disableElevation
            variant="outlined"
            color="error"
            aria-label="Disabled elevation buttons"
        >
            <Button onClick={handleDecrease}>-</Button>
            <Button>{contador}</Button>
            <Button onClick={handleIncrease}>+</Button>
        </ButtonGroup>
        </>
        <ButtonGroup>
        <Link to={`/`}>
          <Button variant="contained" color="info" size="large" fullWidth>
            Volver
          </Button>
        </Link>
        <Button
            variant="contained"
            color="error"
            onClick={() => addItem(id, contador)}
            disabled={disabled}
        >
            Agregar
        </Button>
        </ButtonGroup>
    </Grid> 
  );
};

export default ProductCounter;
