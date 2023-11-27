import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where} from 'firebase/firestore'
import { helix } from "ldrs";
 
// Importaciones de Material UI
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info'
import { Grid } from "@mui/material";

const Products = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {type} = useParams()

    useEffect(()=>{
        const db = getFirestore();
        const queryFilter = query(collection(db, 'productos'), where('categoria', '==', type));
        getDocs(queryFilter)
          .then((querySnapshot) => {
            if(querySnapshot.size === 0){
              console.log('No results!');
            }
            setProductos(querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
          }).catch((error) => {
            console.log('Error searching items', error);
          }).finally(() => {
            setLoading(false);
          }
        );
      },[type])
    
      helix.register();
    
      return (
        <>
         <Grid container spacing={2} justifyContent='center' marginTop={1}>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">Categoria: {type}</ListSubheader>
            </ImageListItem>
            {loading ? (
                <l-helix size="90" speed="2.5" color="black"></l-helix>
            )
            :(
            <ImageList sx={{  width: 500, height: 600 }}>
                {productos.map((item) => (
                <ImageListItem key={item.id}>
                    <img
                    srcSet={`${item.imagen}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.imagen}?w=248&fit=crop&auto=format`}
                    alt={item.nombre}
                    loading="lazy"
                    />
                    <ImageListItemBar
                    title={item.nombre}
                    subtitle={item.categoria}
                    actionIcon={
                        <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${item.title}`}
                        component={Link}
                        to={`/detail/${item.id}`}
                        >
                        <InfoIcon />
                        </IconButton>
                    }
                    />
                </ImageListItem>
                ))}
            </ImageList>
            )}
          </Grid>
        </>
      );
}
 
export default Products;