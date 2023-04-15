import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { RouteType } from '../enums';
import { getTokenFromCache } from '../utils/getTokenFromCache';

type Props = {
  component: JSX.Element;
};

export const ProtectedRoute: FC<Props> = ({ component: RouteComponent }) => {
  const token = getTokenFromCache();
  if (!token) {
    return <Navigate to={RouteType.Login} replace />;
  }
  return RouteComponent;
};
