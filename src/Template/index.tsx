import { ThemeProvider, useTheme } from "styled-components"
import { useAppContext } from "../Context/index"
import { useMemo } from "react";
import { ITheme } from "../Interfaces";

interface Props { children: React.ReactNode }

const AppTemplate = ({ children }: Props) => {
    const { theme } = useAppContext();
    const pallete = {
        dark: {
            default: '#202231',
            alternative: '#181925',
            text: {
                primary: '#edf2f4',
                secondary: 'grey',
                disabled: 'grey'
            },
        },
        light: {
            default: '#edf2f4',
            alternative: '#CED4DA',
            text: {
                primary: '#202231',
                secondary: 'grey',
                disabled: 'grey'
            },
        }
    }
    const buildTheme = useMemo<ITheme>(()=>({
        background: {
            //default: '#2B2D42',
            default: pallete[theme.mode].default,
            alternative: pallete[theme.mode].alternative
        },
        primary: theme.primary,
        text: pallete[theme.mode].text,
        confirm: '#06d6a0',
        cancel: '#dd2d4a',
        warning: 'yellow',
        transition: 0.25,
        shadow: ''
    }), [theme])
    return <ThemeProvider theme={buildTheme}>{children}</ThemeProvider>
};

export default AppTemplate;
