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

// export const TimeInput = styled.input`
//     ${({ theme }) => css`
//         padding: 2px;
//         text-align: center;
//         font-size: 40px;
//         background: none;
//         border: none;
//         color: ${theme.text.primary};
//         outline: none;
//         width: 25%;
//         &.seconds {
//             font-size: 20px;
//         }
//     `}
// `;


export const ContainerInputs = styled.div`
    ${({ theme }) => css`
        /* margin: 0px; */
        display: flex;
        align-items: baseline;
        justify-content: baseline;
    `}
`;




export const Icon = styled.i`
    ${({ theme }) => css`
        color: ${theme.confirm};
        font-size: 70px;
    `}
`;
