import { css, styled } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        width: 400px;
        height: 400px;
    `}
`;