import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, PageLayout } from '../../components';
import { LocalStorage, RouteType } from '../../enums';

export const Logout = () => {
  useEffect(() => {
    localStorage.removeItem(LocalStorage.Token);
  }, []);

  const navigate = useNavigate();
  const handleGoToLogin = () => {
    navigate(RouteType.Login);
  };
  return (
    <PageLayout>
      <Button type="button" onClick={handleGoToLogin}>
        Back to login
      </Button>
    </PageLayout>
  );
};
