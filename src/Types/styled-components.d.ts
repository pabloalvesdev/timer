import { ITheme } from "../Interfaces";

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme {}
} ;