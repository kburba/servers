import { useNavigate } from 'react-router-dom';

import NotFoundAnimation from '../assets/404animation.svg';
import { Align, Button, Heading, LoginLayout } from '../components';
import { RouteType } from '../enums';

export const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate(RouteType.Home);
  return (
    <LoginLayout>
      <Heading align={Align.Center}>Page not found</Heading>
      <img src={NotFoundAnimation} alt="Not Found" />
      <Button onClick={handleClick}>Go to Home</Button>
    </LoginLayout>
  );
};
