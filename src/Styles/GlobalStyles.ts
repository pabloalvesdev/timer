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
        body, spam, svg, path, p, h1, h2, h3, h4, h5 { //falta adicionar div e button
            transition: all 0.5s ease-in !important;
        }
        p,h1,h2,h3,h4,h5 {
            color: ${theme.text.primary};
        }
        .popover-arrow::after {
            transition: all 0.5s ease-in !important;
            border-right-color: var(--bg-color) !important;
        }
    `}
`;

export default GlobalStyles;