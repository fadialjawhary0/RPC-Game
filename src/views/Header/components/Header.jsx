import React, { useContext } from 'react';

import { Grid, Typography } from '@mui/material';

import { Assets } from '../../../constants/assets.const.mjs';
import { ScoreContext } from '../../../context/score.context';

const Header = () => {
  const { score } = useContext(ScoreContext);

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{
        maxWidth: '50rem',
        width: '100%',
        height: '8rem',
        padding: '1rem',
        borderRadius: 4,
        border: '2px hsl(217, 16%, 45%) solid',
      }}>
      <Grid
        item
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: { xs: '7rem', sm: '10rem' },
        }}>
        <img
          src={Assets.logo.icon}
          alt={Assets.logo.name}
          style={{ width: '100%' }}
        />
      </Grid>
      <Grid
        item
        sx={{
          width: { xs: '6rem', sm: '8rem' },
          height: '100%',
          backgroundColor: 'white',
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Typography
          sx={{
            color: 'hsl(229, 64%, 46%)',
            letterSpacing: '2px',
          }}>
          SCORE
        </Typography>
        <Typography
          sx={{
            fontSize: '3rem',
            lineHeight: 1,
            color: 'hsl(229, 25%, 31%)',
          }}>
          {score}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
