// import { grey } from "@mui/material/colors";
// import { ITheme } from "../Interfaces";

import { ITheme } from "../Interfaces";

const light: ITheme = {
    background: {
        default: '#edf2f4',
        alternative: '#CED4DA'
    },
    primary: '#6C82EF',
    text: {
        primary: '#202231',
        // secondary: grey[600],
        // disabled: grey[200]
        secondary: 'grey',
        disabled: 'grey'
    },
    confirm: '#06d6a0',
    cancel: '#dd2d4a',
    warning: 'yellow',
    transition: 0.25,
    shadow: ''
};

export default light;