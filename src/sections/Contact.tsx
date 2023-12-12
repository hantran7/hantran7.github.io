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
        height: "70vh",
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
        <Grid container  columns={12} spacing={3}>
          <Grid item xs={4}>
            <Typography
              sx={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "3rem",
              }}
            >
              Contact me
            </Typography>
            <p>
              The contact
              section may not be fully operational as it is currently undergoing maintenance. Feel free to get in touch
              with me via email at han7tran@gmail.com. I appreciate your
              understanding and look forward to connecting with you!
            </p>
          </Grid>
          <Grid item xs={8}>
            {" "}
            <form id="contact-form" onSubmit={handleSubmit}>
              <TextField
                InputLabelProps={{
                  style: { fontFamily: "'Share Tech Mono', monospace" }, 
                }}
                sx={{
                  "& label.Mui-focused": {
                    color: "#8E8FFA", 
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#8E8FFA",
                    },
                    "& fieldset": {
                      borderColor: "#EA906C",
                    },
                    "&:hover fieldset": {
                      borderColor: "#8E8FFA", 
                    },
                  },
                  "& label": {
                    color: "#EA906C" 
                  }
                }}
                label="Name"
                name="name"
                value={formDetails.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                InputLabelProps={{
                  style: { fontFamily: "'Share Tech Mono', monospace" }, 
                }}
                sx={{
                  "& label.Mui-focused": {
                    color: "#8E8FFA",
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#8E8FFA", 
                    },
                    "& fieldset": {
                      borderColor: "#EA906C",
                    },
                    "&:hover fieldset": {
                      borderColor: "#8E8FFA", 
                    },
                  },
                  "& label": {
                    color: "#EA906C" 
                  }
                }}
                label="Email Address"
                name="email"
                type="email"
                value={formDetails.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                InputLabelProps={{
                  style: { fontFamily: "'Share Tech Mono', monospace" }, 
                }}
                sx={{
                  "& label.Mui-focused": {
                    color: "#8E8FFA", 
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#8E8FFA", 
                    },
                    "& fieldset": {
                      borderColor: "#EA906C",
                    },
                    "&:hover fieldset": {
                      borderColor: "#8E8FFA", 
                    },
                  },
                  "& label": {
                    color: "#EA906C" 
                  }
                }}
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formDetails.message}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: "4px",
                  backgroundColor: "#8E8FFA",
                  color: "white",
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  "&:hover": {
                    backgroundColor: "#EA906C", 
                  },
                }}
              >
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
