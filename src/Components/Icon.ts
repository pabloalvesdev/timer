import { styled, css } from "styled-components";

export const Icon = styled.i`
    ${({ theme }) => css`
        color: ${theme.text.primary};
        cursor: pointer;
        &.rounded {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${theme.background.alternative};
            width: 35px;
            height: 35px;
            border-radius: 35px;
        }
        &.red {
            color: ${theme.cancel} !important;
        }
        &.hidden {
            visibility: hidden;
        }
    `}
`;