import { Popover } from "react-bootstrap";
import { css, styled } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        display: flex;
        overflow: hidden;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        border: 2px solid ${theme.text.primary};
        &:hover {
            cursor: pointer;
        }
        &.selected {
            box-shadow: 0px 0px 5px 5px ${theme.primary};
        }
    `}
`;

export const Cor = styled.div`
    ${({ theme }) => css`
        width: 12.5px;
        height: 30px;
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
