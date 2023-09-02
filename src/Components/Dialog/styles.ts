import { Modal } from "react-bootstrap";
import { css, keyframes, styled } from "styled-components";



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











export const ModalCard = styled.div`
    ${({ theme }) => css`
        width: 200px;
        height: 200px;
        margin-top: -20%;
        background-color: ${theme.background.default};
        border-radius: 10px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        row-gap: 10px;
        padding-inline: 15px;
    `}
`;

export const Button = styled.button`
    ${({ theme }) => css`
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        border-radius: 10px;
        &.confirm{
            background-color: green;
            height: 40px;
            border: none;
        }
        &.cancel{
            height: 40px;
            border: none;
            background-color: red;
        }
    `}
`;


export const Rate = styled.h1`
    ${({ theme }) => css`
        margin: 0px;
    `}
`;

export const Paragraph = styled.p`
    ${({ theme }) => css`
        margin: 0px;
    `}
`;

export const Star = styled.span`
    ${({ theme }) => css`
        margin: 0px;
        transition: ${theme.transition}s;
        cursor: pointer;
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

export const ModalHeader = styled.div`
    ${({ theme }) => css`
        width: 100%;
        border-bottom: 1px solid ${theme.primary};
        margin: 0px;
        cursor: pointer;
    `}
`;

export const ModalBody = styled.div`
    ${({ theme }) => css`
        width: 100%;
        margin: 0px;
        cursor: pointer;
    `}
`;

export const ModalFooter = styled.div`
    ${({ theme }) => css`
        width: 100%;
        display: flex;
        justify-content: flex-end;
        column-gap: 5px;
        margin: 0px;
        border-top: 1px solid ${theme.primary};
        padding-top: 5px;
        cursor: pointer;
    `}
`;