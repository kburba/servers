import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  header?: React.ReactElement;
  content?: React.ReactElement;
};

export const PageLayout: FC<Props> = ({ content, header }) => {
  return (
    <StyledLayout>
      <StyledHeader>{header}</StyledHeader>
      <StyledContent>{content}</StyledContent>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 6rem auto;
  grid-template-columns: minmax(1rem, 1fr) minmax(16rem, 48rem) minmax(
      1rem,
      1fr
    );
`;

const StyledHeader = styled.div`
  grid-row: 1;
  grid-column: 2/2;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
`;

const StyledContent = styled.div`
  background-color: var(--palette-dark-blue);
  padding: 2rem 1rem;
  grid-row: 2;
  grid-column: 2/2;
  border-radius: 1rem;
  margin-bottom: 1rem;
`;
