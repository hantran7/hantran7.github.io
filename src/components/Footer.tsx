import React from 'react';
import { Box } from '@mui/material';

function Footer() {
  return (
    <Box 
      width={'100%'} 
      height={'6vh'} 
      sx={{
        background: "#8E8FFA", 
        display: "flex", 
        justifyContent: "flex-end",
        alignItems: "flex-end",
      }}
    >
      <p>CopyRight 2023. All Rights Reserved by Han Tran.</p>
    </Box>
  );
}

export default Footer;
