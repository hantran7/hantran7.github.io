import React from 'react'
import { Box, Typography, Grid } from '@mui/material'

import '@fontsource/share-tech-mono';

type Props = {}

function Bio({ }: Props) {
  return (
    <section id="bio"><Box sx={{ height: "100vh", marginLeft:"13rem", marginRight:"13rem", marginTop:"3rem" }}>
      <Grid container columns={12} display={'flex'} alignItems={'baseline'}>
        <Grid item xs={3}><Typography sx={{fontFamily: "'Share Tech Mono', monospace", fontSize:"3rem",}}>About me</Typography></Grid>
        <Grid item xs={9}><Typography sx={{fontFamily: "'Share Tech Mono', monospace", fontSize:"1.5rem",}}>Hi, I'm Han. I am currently a senior majoring in software engineering at the University of Nebraska-Lincoln.</Typography></Grid>
      </Grid></Box></section>
  )
}

export default Bio