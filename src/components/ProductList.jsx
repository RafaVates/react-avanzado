import React from 'react'
import IconButton from '@mui/material/IconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const ProductList = ({productos, total, totalItems,removeItem}) => {
    
    function ccyFormat(num) {
        return `${num.toFixed(2)}`;
      }
    
    
    return ( 
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }}>
              <TableHead>
                <TableRow sx={{background:"lightgray"}}>
                  <TableCell align="center" colSpan={3}>
                    Compras a realizar
                  </TableCell>
                  <TableCell align="right">Precio</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow sx={{background:"lightgray"}}>
                  <TableCell>Producto</TableCell>
                  <TableCell align="right">Cantidad</TableCell>
                  <TableCell align="right">Costo</TableCell>
                  <TableCell align="right">Subtotal</TableCell>
                  <TableCell align="right">Eliminar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productos.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.nombre}</TableCell>
                    <TableCell align="right">{row.cantidad}</TableCell>
                    <TableCell align="right">{ccyFormat(row.precio)}</TableCell>
                    <TableCell align="right">
                      {ccyFormat(row.precio * row.cantidad)}
                    </TableCell>
                    <TableCell align="right">
                        <IconButton color="inherit" onClick={() => removeItem(row.id)}>
                            <RemoveCircleIcon >Eliminar</RemoveCircleIcon>
                        </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell colSpan={2}>
                    Total (Cant. Productos : {totalItems})
                  </TableCell>
                  <TableCell align="right">{ccyFormat(total)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
     );
}
 
export default ProductList;