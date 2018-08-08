import styled, { css } from 'react-emotion';

const colors = {
  primary: 'black',
  secondary: 'rgba(0, 96, 193, 0.25)'
};

const buttonBasic = css`
  width: 100%;
  padding: 0.5rem 1.25rem;
  border-radius: 5px;
  border: 2px solid ${colors.secondary};
`;

const buttonPrimary = css`
  ${buttonBasic};
  background-color: ${colors.secondary};
  color: ${colors.primary};
  transition: all 0.3s ease;

  &:hover {
    background-color: transparent;
    color: ${colors.secondary};
    cursor: pointer;
  }
`;

const buttonSecondary = css`
  ${buttonBasic};
  background-color: transparent;
  color: ${colors.secondary};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.secondary};
    color: ${colors.primary};
    cursor: pointer;
  }
`;

const ButtonPrimary = styled.button`
  ${buttonPrimary};
`;

export const ButtonSecondary = styled.button`
  ${buttonSecondary};
`;

export default ButtonPrimary;
