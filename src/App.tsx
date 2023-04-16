import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from './api/queryClient';
import { ProtectedRoute } from './components';
import { RouteType } from './enums';
import { Home } from './routes/Home';
import { Login } from './routes/Login';
import { Logout } from './routes/Logout';
import { NotFound } from './routes/NotFound';
import { RootBoundary } from './routes/RootBoundary';

const router = createBrowserRouter([
  {
    path: RouteType.Home,
    element: <ProtectedRoute component={<Home />} />,
    errorElement: <RootBoundary />,
  },
  {
    path: RouteType.Login,
    element: <Login />,
    errorElement: <RootBoundary />,
  },
  {
    path: RouteType.Logout,
    element: <Logout />,
    errorElement: <RootBoundary />,
  },
  {
    path: RouteType.NotFound,
    element: <NotFound />,
  },
]);

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
