import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
    ${({ theme }) => css`
        :root {
            --bg-color: ${theme.background.default};
        }
        body {
            background-color: var(--bg-color);
        }
    `}
`;

export default GlobalStyles;