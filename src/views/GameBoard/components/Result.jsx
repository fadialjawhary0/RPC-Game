import React from 'react';

import { Box, Button, Typography } from '@mui/material';

const Result = ({ result, resetGame }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Typography sx={{ fontSize: '3rem' }}>{result}</Typography>
      <Button
        variant="contained"
        onClick={() => resetGame()}
        sx={{ letterSpacing: '2px', minWidth: '9.5rem' }}>
        PLAY AGAIN
      </Button>
    </Box>
  );
};

export default Result;
