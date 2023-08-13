interface ITheme {
    background: {
        default: string;
        alternative: string;
    }
    primary: string;
    text: {
        primary: string;
        secondary: string;
        disabled: string;
    };
    confirm: string;
    cancel: string;
    warning: string;
    transition: number;
    shadow: string;
};

export default ITheme;