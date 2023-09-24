import { css, styled } from "styled-components";

export const Button = styled.button`
    ${({ theme }) => css`
        color: ${theme.text.primary} !important;
        font-weight: bold;
        border: none;
        border-radius: 5px;
        padding-inline: 10px;
        & i.fa {
            margin-left: 10px;
        }
        &.submit{
            background-color: ${theme.confirm} !important;
        }
        &.delete{
            background-color: ${theme.cancel} !important;
        }
    `}
`;


export const Label = styled.label`
    ${({ theme }) => css`
        color: ${theme.text.primary} !important;
        & i.fa {
            cursor: pointer;
            margin-left: 10px;
        }
    `}
`;
