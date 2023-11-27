import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import ProductCounter from "../components/ProductCounter";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";

const Detail = () => {
  const [producto, setProducto] = useState([]);
  
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const prod = doc(db, "productos", id);
    getDoc(prod)
      .then((querySnapshot) => {
        if (querySnapshot.exists) {
          setProducto({ id: querySnapshot.id, ...querySnapshot.data() });
        }
      })
      .catch((error) => {
        console.log("Error searching items", error);
      });
  }, []);

  return (
    <Grid container flexDirection='column' spacing={2} alignContent='center' justifyContent='center' marginTop={10}>
      <Card sx={{ maxWidth: 345 }}>
        {producto.categoria && <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} >
              {producto.categoria.charAt(0) }
            </Avatar>
          }
          title={producto.nombre}
          subheader={producto.categoria}
        />}
        <CardMedia
          component="img"
          height="194"
          image={producto.imagen}
          alt={producto.nombre}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {producto.descripcion}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 120,
            height: 40,
            borderRadius: 3,
            pl: 1,
            pb: 1
          }}
          >
            {producto.precio && <Typography variant="h6" color={"error"} fontWeight={"bold"}> ${producto.precio}</Typography>}
          </Box>
          <ProductCounter id={producto.id}/>
        </CardActions>
        
      </Card>
    </Grid>
  );
};

export default Detail;

