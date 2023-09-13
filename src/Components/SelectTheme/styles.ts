import { Popover } from "react-bootstrap";
import { css, styled } from "styled-components";
import Pallete from "../../Themes";

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

// export const Cor = styled.div`
//     ${({ theme }) => css`
//         width: 12.5px;
//         height: 30px;
//     `}
// `;

export const Cor = styled.div`
    ${({ theme }) => css`
        width: 30px;
        height: 30px;
    `}
`;
export const Button = styled.button`
    ${({ theme }) => css`
        width: 100%;
        background-color: ${theme.background.alternative};
        color: ${theme.text.primary};
        border: 2px solid ${theme.text.primary};
        &.selected {
            background-color: ${theme.primary};
            color: ${Pallete.dark.text.primary};
        }
        &#light{
            border-radius: 7px 0px 0px 7px;
        }
        &#dark{
            border-radius: 0px 7px 7px 0px;
        }
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
