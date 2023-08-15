import { css, styled } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        width: 100%;
    `}
`;

export const Button = styled.button`
    ${({ theme }) => css`
        position: absolute;
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