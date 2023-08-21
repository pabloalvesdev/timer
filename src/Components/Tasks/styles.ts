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
        &.more-pg {
            height: 30vh;
            /* overflow-y: scroll; */
        }
        @media (max-width: 990px) {
            padding: 0px;
        }
    `}
`;

export const List = styled.div`
    ${({ theme }) => css`
        overflow-y: scroll;
        height: 85%;
    `}
`;