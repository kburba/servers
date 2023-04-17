import styled from 'styled-components';

import { LoaderAnimation } from '../assets/LoaderAnimation';

export const Loader = () => {
  return (
    <StyledBackground>
      <StyledCenterElement>
        <StyledImage />
        <StyledText>Loading...</StyledText>
      </StyledCenterElement>
    </StyledBackground>
  );
};

const StyledText = styled.div`
  font-size: 0.875rem;
  color: var(--palette-bright-green);
  margin-top: 0.5rem;
`;

const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.4);
  z-index: 99999999;
`;

const StyledCenterElement = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  color: var(--palette-bright-green);
  align-items: center;

  > svg {
    width: 3rem;
  }
`;

const StyledImage = styled(LoaderAnimation)`
  width: 2rem;
`;
