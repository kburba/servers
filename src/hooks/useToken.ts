import { AxiosError } from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import { getToken, LoginResponse, queryClient } from '../api';
import { LocalStorage, RouteType } from '../enums';
import { LoginFormValues } from '../routes/Login/LoginForm';
import { getTokenFromCache } from '../utils/getTokenFromCache';

export const useToken = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getTokenFromCache();
    if (token) {
      navigate(RouteType.Home);
    }
  }, [navigate]);

  const onGetTokenSuccess = (data: LoginResponse) => {
    localStorage.setItem(LocalStorage.Token, data.token);
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
