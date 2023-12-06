import React from 'react';

import { Box } from '@mui/material';

import Header from '../views/Header/components/Header';
import GameBoard from '../views/GameBoard/components/GameBoard';
import RulesButton from '../views/GameRules/components/RulesButton';
import { ScoreProvider } from '../context/score.context';

const Layout = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        padding: '2rem',
        background: 'radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5rem',
      }}>
      <ScoreProvider>
        <Header />
        <GameBoard />
      </ScoreProvider>
      <RulesButton />
    </Box>
  );
};

export default Layout;
