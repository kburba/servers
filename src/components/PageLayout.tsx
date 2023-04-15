import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

export const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledContainer>
      <StyledChildContainer>{children}</StyledChildContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(1rem, 1fr) minmax(16rem, 24rem) minmax(
      1rem,
      1fr
    );
  grid-template-rows: minmax(1rem, 1fr) auto minmax(1rem, 1fr);
  color: white;
  height: 100vh;
`;

const StyledChildContainer = styled.div`
  grid-area: 2/2/2/2;
  padding: 2rem;
  border-radius: 1rem;
  background-color: var(--palette-dark-blue);
`;
