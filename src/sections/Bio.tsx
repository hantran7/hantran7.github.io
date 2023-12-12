import React, { useState } from "react";
import { Box, Typography, Grid, Button, Modal } from "@mui/material";
import "../App.css";
// Supports weights 200-800
import "@fontsource-variable/dosis";
import "@fontsource/share-tech-mono";
import "@fontsource/ubuntu";
type Props = {};

function Bio({}: Props) {
  const [openResume, setOpenResume] = useState(false);

  const handleOpenResume = () => setOpenResume(true);
  const handleCloseResume = () => setOpenResume(false);
  return (
    <section
      id="bio"
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "50vh",
          width: "70vw",
          border: "5px solid #FF9E9B",
          borderRadius: "2rem",
          backgroundColor: "#FF9E9B",
        }}
      >
        <Grid
          container
          columns={12}
          spacing={1}
          display={"flex"}
          alignItems={"baseline"}
          sx={{ padding: "2.5rem" }}
        >
          <Grid item xs={3}>
            <Typography
              sx={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "3rem",
              }}
            >
              About me
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "1rem",
              }}
            >
              {" "}
              <Button
                onClick={handleOpenResume}
                sx={{
                  borderRadius: "4px",
                  backgroundColor: "#9E9BFF",
                  color: "white",
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: "1.5rem",
                }}
              >
                Resume
              </Button>
              <Modal open={openResume} onClose={handleCloseResume}>
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "50vw", // Adjust width as needed
                    height: "70vh", // Adjust height as needed
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 3,
                    overflowY: "auto", // Optional: for scrollable content
                  }}
                >
                  <Button
                    onClick={handleCloseResume}
                    sx={{
                      borderRadius: "4px",
                      backgroundColor: "#9E9BFF",
                      color: "white",
                      fontFamily: "'Share Tech Mono', monospace",
                      fontSize: "1.5rem", marginBottom:"1rem"
                    }}
                  >
                    Close
                  </Button>
                  <iframe
                    src="/resume.pdf"
                    style={{ width: "100%", height: "100%" }}
                    title="Resume"
                  />
                </Box>
              </Modal>
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography
              sx={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "1.5rem", lineHeight:"2.5rem"
              }}
            >
              <p>
                Hi, I'm Han. I am currently a senior majoring in software
                engineering at the University of Nebraska-Lincoln. My journey
                began with a deep love for League of Legends, sparking my dream
                to work in the world of game development, particularly at Riot
                Games. My focus currently revolves around frontend development,
                where I'm dedicated to crafting immersive digital experiences.
                Beyond the screen, I find joy in savoring great meals,
                experimenting in the kitchen, and throwing heavy weight around
                in the gym. Join me on this exciting journey as I continue to
                gain valuable experience in software engineering while exploring
                where life takes me. Let's make incredible things happen
                together!
              </p>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default Bio;
