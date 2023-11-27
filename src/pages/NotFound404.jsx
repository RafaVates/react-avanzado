import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import Stack  from "@mui/material/Stack"
import error from "../assets/404.png"

const NotFound404 = () => {
  return (
    <Link to={'/'} style={{textDecoration: 'none', color: 'red'}}>
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 'auto',
                marginTop: '50px',
                width: '600px',
                height: '600px',
                // backgroundColor: 'grey.dark',
                // '&:hover': {
                // backgroundColor: 'grey.main',
                // opacity: [0.9, 0.8, 0.7],
                // },
                textDecoration: 'none',
            }}
        >
            <Stack spacing={3}>
                <Typography variant="h2">
                    404 - Not Found
                </Typography>
                <img src={error} alt="404-not found" width={150}/>
                <Typography variant="h4">
                    Back Home
                </Typography>
            </Stack>
            
        </Box>
    </Link>
  )
}

export default NotFound404
