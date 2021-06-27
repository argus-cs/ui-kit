import 'styled-components';

interface IPallete {
    main: string;
    contrastText: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        pallete: {
            common: {
                background: string;
                main: string;
                text: string;
                contrastText: string;
            },
            primary: IPallete,
            secondary: IPallete,
            accent: IPallete,
            highlight: IPallete,
            muted: IPallete,
            success: IPallete,
            warning: IPallete,
            danger: IPallete,
        },
        breakpoints: {
            xs: string,
            sm: string,
            md: string,
            lg: string,
            xl: string,
        }
    }
}
