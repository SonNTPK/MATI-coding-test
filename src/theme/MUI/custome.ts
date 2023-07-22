import { colors, createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    bgColor: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    bgColor?: PaletteOptions['primary'];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ce93d8',
    },
    bgColor: {
      main: colors.grey[200],
    },
  },
});
