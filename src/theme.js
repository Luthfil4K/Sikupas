import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      dark:"#FF9040",
      main: '#FFAF76',
      light: '#FFCAA4',
    },
    success: {
      main: '#5BDF80',
      light: '#A2F5B9',
    },
    warning: {
      main: '#FB8C00',
    },
    error: {
      main: '#FF5444',
      light: '#F0A098',
    },
    info: {
      main: '#54ACF8',
    },
  },
});

export default theme;
