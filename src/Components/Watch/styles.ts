import { css, styled } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        width: 80%;
        background-color: ${theme.background.alternative};
        border-radius: 10px;
        padding: 20px;
        @media (min-width: 990px) {
            width: 100%;
            height: 100%;
        } 
    `}
`;
