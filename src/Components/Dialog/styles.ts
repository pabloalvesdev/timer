import { css, keyframes, styled } from "styled-components";

const showAnim = keyframes`
    0% {
        transform: translateY(100vh);
    }
    
`;

const hideAnim = keyframes`
    100% {
        transform: translateY(100vh);
    }
    
`;


export const Container = styled.div`
    ${({ theme }) => css`
        overflow: hidden;
        position: absolute;
        background-color: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        justify-content: center;
        align-items: center;
        &.show {
            z-index: 100000;
            display: flex;
        }
        &.hidden {
            z-index: -100000;
            display: none;
        }
        &.show div {
            animation: ${showAnim} 0.25s;
        }
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

export const Title = styled.h4`
    ${({ theme }) => css`
        margin: 0px;
        color: ${theme.text.primary};
        cursor: pointer;
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