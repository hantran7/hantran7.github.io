import React, { useState, useEffect } from "react";
import { Typography, Box, Grid } from "@mui/material";
// Importing App.css in your component or App.js
import "../App.css";
import "@fontsource/share-tech-mono";
import headshot from "../images/headshot1.png";

type Props = {};

function Hero({}: Props) {
  const [loopNum, setLoopNum] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const toRotate: string[] = ["developer.", "plate bencher.", "food lover."];
  const [text, setText] = useState<string>("");
  const [delta, setDelta] = useState<number>(300 - Math.random() * 100);
  const [showCursor, setShowCursor] = useState<boolean>(true);
  const period: number = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    setShowCursor(!showCursor);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section id="hero">
      <Box
        sx={{
          marginTop: "0",
          padding: "260px 0 100px 0",
          backgroundColor: "white",
          height: "25vh",
        }}
      >
        <Grid
          container
          columns={12}
          spacing={4}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={8}>
            <Typography
              sx={{
                fontSize: "3.5rem",
                fontWeight: "700",
                display: "block",
                marginLeft: "15rem",
                fontFamily: "'Share Tech Mono', monospace",
                minHeight: "50px",
                color: "#8E8FFA",
              }}
            >
              Hi, my name is Han Tran
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                sx={{
                  fontSize: "3.5rem",
                  fontWeight: "700",
                  display: "block",
                  marginLeft: "15rem",
                  fontFamily: "'Share Tech Mono', monospace",
                  minHeight: "50px",
                  color: "#8E8FFA",
                }}
              >
                and I am a
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "3.5rem",
                  fontWeight: "700",
                  display: "block",
                  fontFamily: "'Share Tech Mono', monospace",
                  minHeight: "50px",
                  color: "#EA906C ",
                  marginLeft: "2rem",
                }}
              >
                {" "}
                {text}
                <span className={showCursor ? "cursor" : ""}>|</span>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <img
              src={headshot}
              alt="Headshot of Han Tran"
              style={{
                marginLeft:"1rem",
                width: "auto",
                height: "18rem",
                border: "0 solid #EA906C",
                borderRadius: "50%",
                background:
                  "linear-gradient(90deg, rgba(142,143,250,1) 0%, rgba(234,144,108,1) 100%)",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default Hero;
