import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


export default function BottomAppBar() {
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <AppBar position="fixed" color="success" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
            <ThumbUpIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />   
            <Typography
                variant="p"
                noWrap
                // component="a"
                // href="#app-bar-with-responsive-menu"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 400,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                Alumno: Rafael Toutain - 2023
            </Typography>
            <ThumbUpIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
                variant="p"
                noWrap
                // component="a"
                // href="#app-bar-with-responsive-menu"
                sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 400,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                Toutain
            </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}