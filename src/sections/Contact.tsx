import React from 'react';
import { Container, Box, Grid, Typography } from '@mui/material';

type Props = {};

function Contact({}: Props) {
  return (
    <section id="contact">
      <Box sx={{ height: "100vh", marginLeft: "13rem", marginRight: "13rem", marginTop: "3rem" }}>
        <Grid container alignItems="center" columns={12}>
          <Grid item xs={3}>
            <Typography sx={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "3rem" }}>
              Contact me
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography sx={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "1.5rem" }}>
              Hi, I'm Han
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default Contact;
