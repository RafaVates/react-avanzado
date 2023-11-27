import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget() {
  
  const {totalItems} = useContext(CartContext)
  
  return (
    <IconButton color="inherit">
      <Badge badgeContent={totalItems} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}

export default CartWidget;
