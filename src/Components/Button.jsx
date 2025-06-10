import React from 'react';
import { Button } from '@mui/material';


const Buttons = ({ text, bgc, c, br, w, bgch, component, to }) => {
  return (
    <Button
      component={component}
      to={to}
      sx={{
        padding: "10px 20px",
        backgroundColor: bgc,
        color: c,
        borderRadius: br,
        width: w,
        '&:hover': { backgroundColor: bgch },
        textTransform: 'none',
      }}
    >
      {text}
    </Button>
  );
};

export default Buttons;
