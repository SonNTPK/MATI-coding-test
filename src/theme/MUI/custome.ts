import { PaletteColor, colors, createTheme } from '@mui/material';

interface BgColor extends PaletteColor {
  dragOver: string;
}

declare module '@mui/material/styles' {
  interface Palette {
    bgColor: BgColor;
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    bgColor?: PaletteOptions['primary'] & { dragOver: string };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ce93d8',
    },
    bgColor: {
      main: colors.grey[200],
      dragOver: colors.purple[300],
    },
  },
});
