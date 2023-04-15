import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { RouteType } from "./enums";
import { Home } from "./routes/Home";
import { Login } from "./routes/Login";
import { Logout } from "./routes/Logout";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: RouteType.Home,
    element: <Home />,
  },
  {
    path: RouteType.Login,
    element: <Login />,
  },
  {
    path: RouteType.Logout,
    element: <Logout />,
  },
]);

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
