import React from 'react';

import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Layout from './layout';

const theme = createTheme({
  typography: {
    fontFamily: ['"Barlow Semi Condensed"', 'Arial', 'sans-serif'].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          borderColor: '#ffffff',
          '&:hover': {
            borderColor: '#c9c9c9',
          },
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: 0,
          lineHeight: 1,
        },
      },
    },
  },
});

export const App = () => {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </CssBaseline>
  );
};
