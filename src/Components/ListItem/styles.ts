import { css, styled } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.background.default};
        /* border: 2px solid ${theme.primary}; */
        border-radius: 10px;
        margin-block: 30px;
        padding: 20px;
        @media (max-width: 990px) {
            margin: 5 !important;
        }
    `}
`;