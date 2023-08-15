import { styled, css } from "styled-components";

const Text = styled.p`
    ${({ theme }) => css`
        color: ${theme.text.primary};
        margin: 0px;
        &.bold {
            font-weight: bold;
        }
        &.clock {
            font-size: 4em;
        }
        &.absolute {
            position: absolute;
        }
    `}
`;

export default Text;