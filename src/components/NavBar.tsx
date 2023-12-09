import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import '@fontsource/share-tech-mono';

type Props = {}

function NavBar({ }: Props) {
  console.log('Rendering NavBar...');
  const [activeLink, setActiveLink] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])


  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setActiveLink(sectionId);
  };

  return (
    <AppBar position="fixed" elevation={0} sx={{
      width: '100%',
      top: 0,
      zIndex: 9999,
      transition: '0.32s ease-in-out',
      padding: scrolled ? '0px 0' : '0',
      // backgroundColor: scrolled ? '#FF9E9B9B' : '#1976d200 !important',
      backgroundColor: scrolled ? 'black' : '#1976d200 !important',
      color: 'black'
    }}>
      <Toolbar sx={{ marginLeft: "3rem", marginRight: "3rem" }}>
        <Typography variant="h6" onClick={() => handleScroll('hero')} component="div" sx={{
          flexGrow: 1, color: scrolled? "white" :"black",
          fontFamily: "'Share Tech Mono', monospace", fontSize: "2rem",
          cursor: "pointer"
        }}>
          Han Tran
        </Typography>
        <Button
          color="inherit"
          onClick={() => handleScroll('home')}
          sx={{
            color: scrolled ? (activeLink === 'home' ? '#9E9BFF' : 'white') : (activeLink === 'home' ? '#9E9BFF' : 'black'),
            fontWeight: activeLink === 'home' ? 'bold' : 'normal',
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: "1.5rem",
            marginRight: "3rem"
          }}
        >
          About
        </Button>

        <Button
          color="inherit"
          onClick={() => handleScroll('work')}
          sx={{
            color: scrolled ? (activeLink === 'work' ? '#9E9BFF' : 'white') : (activeLink === 'work' ? '#9E9BFF' : 'black'),
            fontWeight: activeLink === 'work' ? 'bold' : 'normal',
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: "1.5rem",
            marginRight: "3rem"
          }}
        >
          Work
        </Button>

        <Button
          color="inherit"
          onClick={() => handleScroll('contact')}
          sx={{
            color: scrolled ? (activeLink === 'contact' ? '#9E9BFF' : 'white') : (activeLink === 'contact' ? '#9E9BFF' : 'black'),
            fontWeight: activeLink === 'contact' ? 'bold' : 'normal',
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: "1.5rem"
          }}
        >
          Contact
        </Button>


      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
