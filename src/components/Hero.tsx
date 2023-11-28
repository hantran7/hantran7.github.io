import React from 'react'
import { useState, useEffect } from 'react';
import { Typography, Container, Box, Grid } from '@mui/material';
import backgroundImage from '../images/background2.png';


type Props = {}

function Hero({ }: Props) {
    const [loopNum, setLoopNum] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const toRotate: string[] = ["Developer", "Plate Bencher", "Epic Gamer"]
    const [text, setText] = useState<string>('');
    const [delta, setDelta] = useState<number>(300 - Math.random() * 100);
    const period: number = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <Box sx={{ marginTop: "0", padding: "260px 0 100px 0", backgroundImage: `url(${backgroundImage})`, backgroundSize: "100% 100%" }}>
            <Grid container columns={12}>
                <Grid item xs={4}>
                    <Typography></Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography sx={{
                        fontSize: '30px',
                        fontWeight: '700',
                        marginBottom: '20px',
                        display: 'block',
                        marginLeft: "3rem",
                        fontFamily: "monospace"
                    }}>{text}</Typography>

                </Grid>
                <Grid item xs={4}>

                </Grid>
            </Grid>
        </Box>
    )
}

export default Hero