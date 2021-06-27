import { DefaultTheme } from 'styled-components';

export const themeSchema: DefaultTheme = {
  pallete: {
      common: {
          background: "#fff",
          main: "#e1f0ff",
          text: "#2b2f38",
          contrastText: "#2b2f38",
      },
      primary: {
          main: "#2684FF",
          contrastText: "#fff",
      },
      secondary: {
        main: "#e1f0ff",
        contrastText: "#2684FF"
      },
      accent: {
          main: "#30aefd",
          contrastText: "#fff"
      },
      highlight: {
          main: "#30aefd",
          contrastText: "#fff"
      },
      muted: {
          main: "#333",
          contrastText: "#fff"
      },
      success: {
          main: "#1bc5bd",
          contrastText: "#fff"
      },
      warning: {
          main: "#ffa800",
          contrastText: "#fff"
      },
      danger: {
          main: "#f64e60",
          contrastText: "#fff"
      }
  },
  breakpoints: {
      xs: '0px',
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1920px',
  }
};
