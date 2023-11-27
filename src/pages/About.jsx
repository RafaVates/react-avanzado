import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import sunblock from '../assets/SunBlock.png';


export default function About() {
  return (
    <Grid container spacing={2} justifyContent='center' marginTop={10}>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={sunblock}
            title="Cortinas y Toldos SunBlock"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Sobre Nosotros
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Somos una empresa dedicada a la fabricación de cortinas y toldos de todo tipo.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Compartir</Button>
            <Button size="small">Contactanos</Button>
        </CardActions>
        </Card>
    </Grid>
  );
}