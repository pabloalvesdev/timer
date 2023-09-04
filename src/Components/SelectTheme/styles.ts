import { Popover } from "react-bootstrap";
import { css, styled } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        display: flex;
        overflow: hidden;
        width: 25px;
        height: 25px;
        border-radius: 100%;
        &:hover {
            cursor: pointer;
        }
        &.selected {
            border: 3px solid white;
        }
    `}
`;

export const Cor = styled.div`
    ${({ theme }) => css`
        width: 12.5px;
        height: 25px;
    `}
`;

export const RowPopover = styled(Popover)`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        padding: 10px;
        background-color: ${theme.background.default};
    `}
`;
