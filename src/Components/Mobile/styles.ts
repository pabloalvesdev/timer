import { Col } from "react-bootstrap";
import { styled, css } from "styled-components";

export const WatchContainer = styled(Col)`
    ${({ theme }) => css`
        background-color: ${theme.background.alternative};
        /* background-color: red; */
        border-radius: 10;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}
`;