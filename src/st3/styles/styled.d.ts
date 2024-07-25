import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
        primary: string;
        primary900: string;
        secondary: string;
        secondary900: string;
        tertiary: string;
        tertiary900: string;
        green: string;
        purple200: string;
        purple500: string;
        purple900: string;
        white: string;
        black: string;
        black60: string;
        gray: string;
        darkGray: string;
        success: string;
        info: string;
        warning: string
    },
    fonts: {
        family: {
        default: string;
        },
        sizes: {
        default: string;
        large: string;
        small: string;
        }
    }
  }
}