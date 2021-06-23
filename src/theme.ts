import { DefaultTheme } from 'styled-components';

export const themeSchema: DefaultTheme = {
  pallete: {
      common: {
          background: "#fff",
          main: "#e1f0ff",
          text: "#2b2f38",
      },
      primary: {
          main: "#027ac5",
          contrastText: "#fff",
      },
      secondary: {
        main: "#e1f0ff",
        contrastText: "#027ac5"
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
      sm: '40rem',
      md: '52rem',
      lg: '64rem',
  }
};
