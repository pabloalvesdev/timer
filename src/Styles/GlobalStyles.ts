import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
    ${({ theme }) => css`
        /* SCROLL */
        /* width */
        ::-webkit-scrollbar {
            width: 3px;
        }
        /* Track */
        ::-webkit-scrollbar-track {
            background: ${theme.background.alternative};
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background: ${theme.primary}; 
        }
        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            opacity: .4;
            cursor: pointer;
        }
        :root {
            --bg-color: ${theme.background.default};
        }
        body {
            background-color: var(--bg-color);
        }
    `}
`;

export default GlobalStyles;