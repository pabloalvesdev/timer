// import { grey } from "@mui/material/colors";
// import { ITheme } from "../Interfaces";

import { ITheme } from "../Interfaces";

const reddark: ITheme = {
    background: {
        //default: '#2B2D42',
        default: '#202231',
        alternative: '#181925'
    },
    primary: '#e74c3c',
    text: {
        primary: '#edf2f4',
        // secondary: grey[600],
        // disabled: grey[700]
        secondary: 'grey',
        disabled: 'grey'
    },
    confirm: '#06d6a0',
    cancel: '#dd2d4a',
    warning: 'yellow',
    transition: 0.25,
    shadow: ''
}

export default reddark;