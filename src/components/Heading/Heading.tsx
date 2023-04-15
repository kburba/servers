import { FC } from 'react';
import styled from 'styled-components';

import { HeadingSize } from './enums';
import { HeadingAdditionalProps, HeadingProps } from './types';

export const Heading: FC<HeadingProps> = ({
  children,
  noMargin,
  size,
  align,
}) => {
  return (
    <StyledHeading noMargin={noMargin} size={size} align={align}>
      {children}
    </StyledHeading>
  );
};

const StyledHeading = styled.h1<HeadingAdditionalProps>`
  text-align: ${(props) => props.align || 'inherit'};
  font-family: 'Comfortaa', sans-serif;
  font-weight: 600;
  font-size: ${(props) =>
    props.size === HeadingSize.Small
      ? 'clamp(1rem, 0.5rem + 2.2727vw, 1.5rem)'
      : 'clamp(1.5rem, 1rem + 2.2727vw, 2rem)'};
  margin: ${(props) => (props.noMargin ? '0' : '1rem 0 3rem')};
  padding: 0;
`;
