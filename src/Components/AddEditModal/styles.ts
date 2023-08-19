import { css, keyframes, styled } from "styled-components";
import { Button, Modal } from "react-bootstrap";

//bootstrap
export const Header = styled(Modal.Header)`
    ${({ theme }) => css`
        background-color: ${theme.background.default} !important;
        border: none !important;
    `}
`;

export const Body = styled(Modal.Body)`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${theme.background.default} !important;
    `}
`;

export const Footer = styled(Modal.Footer)`
    ${({ theme }) => css`
        border: none !important;
        background-color: ${theme.background.default} !important;
    `}
`;

export const Title = styled(Modal.Title)`
    ${({ theme }) => css`
        color: ${theme.text.primary} !important;
    `}
`;

export const Input = styled.input`
    ${({ theme }) => css`
        /* margin: 0px; */
        background: none;
        border: none;
        outline: none;
        border-bottom: 2px solid ${theme.primary};
        color: ${theme.text.primary};
    `}
`;

export const TimeInput = styled.input`
    ${({ theme }) => css`
        padding: 2px;
        text-align: center;
        background: ${theme.background.alternative};
        border: 2px solid ${theme.primary};
        color: ${theme.text.primary};
        outline: none;
        border-radius: 5px;
        width: 30px;
    `}
`;


export const InvalidText = styled.p`
    ${({ theme }) => css`
        margin-top: 10px;
        font-size: 10px;
        color: red;
        &.hide {
            visibility: hidden;
        }
    `}
`;

export const InputLabel = styled.label`
    ${({ theme }) => css`
        color: ${theme.text.primary};
    `}
`;
