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
        contained: {
          backgroundColor: '#e4e4e4',
          color: '#3b4363',
          '&:hover': {
            backgroundColor: '#f3f3f3',
            color: '#BA2D4A',
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
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#ffffff',
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
