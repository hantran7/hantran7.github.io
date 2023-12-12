import React, { useState } from "react";
import { Box, Typography, Grid, Button, Modal } from "@mui/material";
import "../App.css";
// Supports weights 200-800
import "@fontsource-variable/dosis";
import "@fontsource/share-tech-mono";
import "@fontsource/ubuntu";
import linkedin from "../images/icons8-linkedin-64.png";

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
          borderRadius: "2rem",
          background:
            "linear-gradient(277deg, rgba(142,143,250,0.7682247899159664) 0%, rgba(234,144,108,0.78783263305322133) 100%)",
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
              <Box sx={{ display: "flex" }}>
                <Button
                  onClick={handleOpenResume}
                  sx={{
                    borderRadius: "4px",
                    backgroundColor: "#8E8FFA",
                    color: "white",
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: "1.5rem",
                    "&:hover": {
                      backgroundColor: "#EA906C",
                    },
                    marginRight: "1rem",
                  }}
                >
                  Resume
                </Button>
                <a 
                  href="https://www.linkedin.com/in/htran3802/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="LinkedIn" className="cardHoverEffect"/>
                </a>
              </Box>
              <Modal open={openResume} onClose={handleCloseResume}>
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "50vw",
                    height: "70vh",
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 3,
                    overflowY: "auto",
                  }}
                >
                  <Button
                    onClick={handleCloseResume}
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
                fontSize: "1.5rem",
                lineHeight: "2.5rem",
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
