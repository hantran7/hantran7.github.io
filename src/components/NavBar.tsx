import React from 'react'
import {AppBar, Toolbar, Typography, Button} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
type Props = {}

function NavBar({}: Props) {
  return (
    <AppBar position="static" sx={{backgroundColor:"beige"}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your App Name
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">Home</Button>
        <Button color="inherit" component={RouterLink} to="/contact">Contact</Button>
        <Button color="inherit" component={RouterLink} to="/work">Work</Button>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar