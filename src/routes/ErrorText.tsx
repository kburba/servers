import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

export const ErrorText: FC<PropsWithChildren> = ({ children }) => {
  return <StyledError>{children}</StyledError>;
};
const StyledError = styled.div`
  font-size: 0.875rem;
  color: var(--palette-red);
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  text-align: center;
`;
