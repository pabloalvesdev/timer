import { styled, css } from "styled-components";

export const Button = styled.button`
    ${({ theme }) => css`
    bottom: 100px;
    background-color: ${theme.primary};
    color: ${theme.text.primary};
    cursor: pointer;
    font-weight: bold;
        padding-inline: 30px;
        padding-block: 10px;
        border-radius: 10px;
        border: none !important;
        &.hide {
            visibility: hidden;
        }
    `}
`;