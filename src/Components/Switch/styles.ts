import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: baseline;
  `}
`;

export const Icon = styled.i`
  ${({ theme }) => css`
    color: ${theme.primary};
  `}
`;

export const LabelFormSwitch = styled.label`
  display: inline-block;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  &:active i::after {
    width: 28px;
    transform: translate3d(2px, 2px, 0);
  }
  &:active input:checked + i::after { transform: translate3d(16px, 2px, 0); }
`;

export const IFormSwitch = styled.i`
  ${({ theme }) => css`
    position: relative;
    display: inline-block;
    margin-right: .5rem;
    width: 46px;
    height: 26px;
    border-radius: 23px;
    vertical-align: text-bottom;
    transition: all 0.3s linear;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      width: 42px;
      height: 22px;
      background-color: ${theme.background.alternative};
      border-radius: 11px;
      transform: translate3d(2px, 2px, 0) scale3d(1, 1, 1);
      transition: all 0.25s linear;
    };
    &::after {
      content: "";
      position: absolute;
      left: 0;
      width: 22px;
      height: 22px;
      background-color: ${theme.primary};
      border-radius: 11px;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24);
      transform: translate3d(2px, 2px, 0);
      transition: all 0.2s ease-in-out;
    }
  `}
`;

export const InputFormSwitch = styled.input`
  ${({theme}) => css`
    display: none;
    &:checked + i { background-color: rgba(108, 130, 239, 0.3) }
    &:checked + i::before { transform: translate3d(18px, 2px, 0) scale3d(0, 0, 0); }
    &:checked + i::after { transform: translate3d(22px, 2px, 0); }
  `}
`;