import React, { useState } from "react";
import { Grid, TextField, Button, Box, Typography } from "@mui/material";

interface FormDetails {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const [formDetails, setFormDetails] = useState<FormDetails>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

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
        <Grid container alignItems="basweline" columns={12}>
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
          <Grid item xs={8}>
            {" "}
            <form id="contact-form" onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                value={formDetails.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email Address"
                name="email"
                type="email"
                value={formDetails.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formDetails.message}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <Button type="submit" variant="contained" color="primary" 
                    sx={{
                      borderRadius: "4px",
                      backgroundColor: "#9E9BFF",
                      color: "white",
                      fontFamily: "'Share Tech Mono', monospace",
                      fontSize: "1.5rem", marginBottom:"1rem"
                    }}>
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default Contact;
