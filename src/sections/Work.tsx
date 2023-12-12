import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import "@fontsource-variable/dosis";
import "@fontsource/share-tech-mono";
import "@fontsource/ubuntu";
import uiImage from "../images/ui.png";
import stocked from "../images/stocked.png";
import "../App.css";
type Props = {};

function Work({}: Props) {
  const navigate = useNavigate();
  const handleCardClick = (path: string) => {
    navigate(path);
  };
  return (
    <section
      id="work"
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
        <Typography
          sx={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "3rem" }}
        >
          Check out my course work and projects
        </Typography>
        <Grid
          container
          columns={12}
          display={"flex"}
          alignItems={"baseline"}
          spacing={4}
          marginTop={3}
        >
          <Grid item xs={3}>
            <Card
              className="cardHoverEffect"
              sx={{
                width: "20rem",
                borderRadius: "1rem",
                background:
                  "linear-gradient(277deg, rgba(142,143,250,0.4682247899159664) 0%, rgba(234,144,108,0.5634628851540616) 42%)",
                height: "25rem",
              }}
            >
              <CardActionArea onClick={() => handleCardClick("/ui-course")}>
                <CardMedia component="img" height={"140"} image={uiImage} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h3>User Interfaces</h3>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <p>
                      User Interfaces is a hands-on course focused on designing
                      and evaluating user interfaces from an industry
                      perspective, with an emphasis on understanding human
                      psychology, physiology, cultural values, usability,
                      accessibility, and building a UI/UX portfolio.
                    </p>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card
              className="cardHoverEffect"
              sx={{
                width: "20rem",
                borderRadius: "1rem",
                background:
                  "linear-gradient(277deg, rgba(142,143,250,0.4682247899159664) 0%, rgba(234,144,108,0.5634628851540616) 42%)",
                height: "25rem",
              }}
            >
              <CardActionArea
                onClick={() => handleCardClick("/stocked-&-stacked")}
              >
                <CardMedia component="img" height={"140"} image={stocked} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h3>Stocked & Stacked</h3>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <p>
                      Stocked & Stacked is a project that originated as my final
                      project during a UI design course, and now I'm eager to
                      dedicate my personal time to develop it.
                    </p>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default Work;
