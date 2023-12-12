import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { NavHashLink } from 'react-router-hash-link';
import '@fontsource/share-tech-mono';


function NavBar() {
  const [activeLink, setActiveLink] = useState<string>('about');
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.location.pathname === '/ui-course' || window.location.pathname === '/stocked-&-stacked') {
        setActiveLink('');
      } else {
        const sections = ['about', 'work', 'contact']; 
        let activeSection = '';
  
        sections.forEach((sectionId) => {
          const section = document.getElementById(sectionId);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
              activeSection = sectionId;
            }
          }
        });
  
        setActiveLink(activeSection);
      }
      setScrolled(window.scrollY > 64);
    };
  
    const debounce = (func: () => void, delay: number): () => void => {
      let timer: NodeJS.Timeout | null = null;

      return function () {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func();
        }, delay);
      };
    };

    const debouncedScrollHandler = debounce(onScroll, 10);
  
    window.addEventListener("scroll", debouncedScrollHandler);
    return () => window.removeEventListener("scroll", debouncedScrollHandler);
  }, []);
  


  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setActiveLink(sectionId);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setActiveLink('');
  };
  return (
    <AppBar position="fixed" elevation={0} sx={{
      width: '100%',
      top: 0,
      zIndex: 9999,
      transition: '0.32s ease-in-out',
      padding: scrolled ? '0px 0' : '0',
      backgroundColor: scrolled ? 'black' : '#1976d200 !important',
      color: 'black'
    }}>
      <Toolbar sx={{ marginLeft: "3rem", marginRight: "3rem" }}>
        <NavHashLink smooth to="/" style={{ textDecoration: 'none', flexGrow: 1 }} onClick={scrollToTop}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: scrolled ? "white" : "black",
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "2rem",
              cursor: "pointer",
              textDecoration: 'none'
            }}
          >
            Han Tran
          </Typography>

        </NavHashLink>

        <NavHashLink smooth to="/#about" style={{ textDecoration: 'none' }}>
          <Button onClick={() => handleScroll('about')} sx={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "1.5rem", marginRight: "3rem", color: activeLink === 'about' ? '#8E8FFA' : (scrolled ? 'white' : 'black'), 
                      "&:hover": {
                        backgroundColor: "rgba(234,144,108,0.44861694677871145)",
                      }, }} >
            About
          </Button>
        </NavHashLink>
        <NavHashLink smooth to="/#work" style={{ textDecoration: 'none' }}>
          <Button onClick={() => handleScroll('work')} sx={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "1.5rem", marginRight: "3rem", color: activeLink === 'work' ? '#8E8FFA' : (scrolled ? 'white' : 'black'), 
                      "&:hover": {
                        backgroundColor: "rgba(234,144,108,0.44861694677871145)",
                      }, }}>
            Work
          </Button>
        </NavHashLink>
        <NavHashLink smooth to="/#contact" style={{ textDecoration: 'none' }}>
          <Button onClick={() => handleScroll('contact')} sx={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "1.5rem", color: activeLink === 'contact' ? '#8E8FFA' : (scrolled ? 'white' : 'black'), 
                      "&:hover": {
                        backgroundColor: "rgba(234,144,108,0.44861694677871145)",
                      }, }}>
            Contact
          </Button>
        </NavHashLink>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
