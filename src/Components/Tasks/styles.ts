import { css, styled } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.background.alternative};
    `}
`;

export const Card = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.background.alternative};
        border-radius: 10px;
        padding-inline: 30px;
        padding-block: 10px;
        width: 100%;
        height: 350px;
        &.more-pg {
            padding: 30px !important;
            height: auto !important;
        }
    `}
`;