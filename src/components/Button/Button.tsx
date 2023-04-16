import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

import { ButtonSize } from './enums';
import { ButtonAdditionalProps, ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({
  children,
  type,
  disabled,
  onClick,
  isLoading,
  size,
  testId,
}) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      size={size}
      isLoading={isLoading}
      data-testid={testId}
    >
      {children}
    </StyledButton>
  );
};

const spin = keyframes`
  0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
`;

const StyledButton = styled.button<ButtonAdditionalProps>`
  background-color: var(--palette-bright-green);
  position: relative;
  border: 0;
  outline: none;
  color: white;
  height: ${(props) => (props.size === ButtonSize.Small ? '2rem' : '4rem')};
  width: ${(props) => (props.size === ButtonSize.Small ? 'auto' : '100%')};
  padding: 1.25rem;
  border-radius: 100px;
  color: var(--palette-dark-blue);
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: ${(props) => (props.size === ButtonSize.Small ? '0' : '3rem')};
  justify-content: center;

  :disabled {
    color: grey;
    cursor: not-allowed;
  }
  :hover {
    background-color: var(--palette-bright-green-lighter);
  }
  :active {
    background-color: var(--palette-bright-green-darker);
  }

  ::before {
    content: '';
    border: 4px solid white;
    border-radius: 50%;
    border-top-color: var(--palette-bright-green-darker);
    display: ${(props) => (props.isLoading ? 'block' : 'none')};
    background-color: rgba(255, 255, 255, 0.2);
    margin-right: 1rem;
    width: 16px;
    height: 16px;
    transition: opacity 200ms;
    transition-delay: '200ms';
    animation: ${spin} 2s linear infinite;
  }
`;
