import { defaultTheme } from 'react-admin';
import { createTheme } from '@mui/material/styles';
import indigo from '@mui/material/colors/indigo';
import pink from '@mui/material/colors/pink';
import red from '@mui/material/colors/red';

const theme = createTheme({
  ...defaultTheme,
  palette: {
    mode: 'dark', // Switch to dark mode
    error: red,
  },
  sidebar: {
    width: 150, // The default value is 240
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    ...defaultTheme.components,
    MuiTextField: {
      defaultProps: {},
    },
    MuiFormControl: {
      defaultProps: {},
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          width: '100vw', // Full width for the container
          maxWidth: '100vw', // Prevent shrinking
          overflowX: 'auto', // Enable horizontal scrolling if content overflows
        },
      },
    },
  },
});

export default theme;
