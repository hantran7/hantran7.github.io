import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import '@fontsource/share-tech-mono';
type Props = {}

function Work({}: Props) {
  return (
    <section id="work"><Box sx={{ height: "100vh", marginLeft:"13rem", marginRight:"13rem", marginTop:"3rem" }}>
    <Grid container columns={12}>
      <Grid item xs={3}><Typography sx={{fontFamily: "'Share Tech Mono', monospace", fontSize:"3rem",}}>Work</Typography></Grid>
      <Grid item xs={9}><Typography sx={{fontFamily: "'Share Tech Mono', monospace", fontSize:"1.5rem",}}>Hi, I'm Han</Typography></Grid>
    </Grid></Box></section>
  )
}

export default Work