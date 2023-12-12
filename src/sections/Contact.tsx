import React, { useState } from "react";
import { Grid, TextField, Button, Box, Typography } from "@mui/material";

interface FormDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface Status {
  success?: boolean;
  message?: string;
}

function Contact() {
  const [formDetails, setFormDetails] = useState<FormDetails>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState<Status>({});
  return (
    <section
      id="contact"
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "60vh",
          width: "80vw",
        }}
      >
        <Grid container alignItems="center" columns={12}>
          <Grid item xs={4}>
            <Typography
              sx={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "3rem",
              }}
            >
              Contact me
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <TextField label="First Name"></TextField>
          </Grid>
          <Grid item xs={4}>
            <TextField label="Last Name"></TextField>
          </Grid>
        <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <TextField label="Phone Number"></TextField>
          </Grid>
          <Grid item xs={4}>
            <TextField label="Email"></TextField>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default Contact;
