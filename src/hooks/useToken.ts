import { AxiosError } from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import { getToken, LoginResponse, queryClient } from '../api';
import { RouteType } from '../enums';
import { LoginFormValues } from '../routes/Login/LoginForm';
import { getTokenFromCache, setTokenToCache } from '../utils/tokenFromCache';

export const useToken = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getTokenFromCache();
    if (token) {
      navigate(RouteType.Home);
    }
  }, [navigate]);

  const onGetTokenSuccess = (data: LoginResponse) => {
    setTokenToCache(data.token);
    queryClient.invalidateQueries();
    navigate(RouteType.Home);
  };

  const { isLoading, error, mutate } = useMutation<
    LoginResponse,
    AxiosError,
    LoginFormValues
  >({
    mutationFn: getToken,
    onSuccess: onGetTokenSuccess,
  });

  return { isLoading, error, mutate };
};
