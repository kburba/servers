import { Controller, FieldValues } from 'react-hook-form';
import styled from 'styled-components';

import { InputProps } from './types';

export const Input = <T extends FieldValues>({
  label,
  name,
  error,
  control,
  testId,
  type,
}: InputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <StyledInputContainer error={!!error}>
          <StyledLabel htmlFor={name}>{label}</StyledLabel>
          <StyledInput type={type} {...field} data-testid={testId} />
          {error && <StyledError>{error.message}</StyledError>}
        </StyledInputContainer>
      )}
    />
  );
};

const StyledInputContainer = styled.div<{ error: boolean }>`
  margin-bottom: 1.5rem;
  &:nth-last-of-type() {
    margin-bottom: 4rem;
  }

  > input {
    border-color: ${(props) =>
      props.error ? 'var(--palette-red)' : 'transparent'};
  }
  > label {
    color: ${(props) =>
      props.error ? 'var(--palette-red)' : 'var(--palette-very-light-blue)}'};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  border: 2px solid transparent;
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const StyledError = styled.div`
  font-size: 0.875rem;
  color: var(--palette-red);
  margin-top: 0.5rem;
  margin-left: 0.5rem;
`;
