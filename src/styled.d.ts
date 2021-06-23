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
            sm: string,
            md: string,
            lg: string,
        }
    }
}
