import { AxiosError } from 'axios';
import { useEffect } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { getToken, LoginResponse } from '../../api';
import { Heading, Loader, LoginLayout } from '../../components';
import { LocalStorage, RouteType } from '../../enums';
import { getTokenFromCache } from '../../utils/getTokenFromCache';
import { ErrorText } from '../ErrorText';
import { LoginForm, LoginFormValues } from './LoginForm';

export const Login = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { isLoading, isError, error, mutate } = useMutation<
    LoginResponse,
    AxiosError,
    LoginFormValues
  >({
    mutationFn: getToken,
    onSuccess: (data) => {
      localStorage.setItem(LocalStorage.Token, data.token);
      queryClient.invalidateQueries();
      navigate(RouteType.Home);
    },
  });

  const handleSubmit: SubmitHandler<LoginFormValues> = (values) => {
    mutate(values);
  };

  useEffect(() => {
    const token = getTokenFromCache();
    if (token) {
      navigate(RouteType.Home);
    }
  }, [navigate]);

  return (
    <LoginLayout>
      <Heading>Login</Heading>
      {isLoading && <Loader />}
      <LoginForm isLoading={isLoading} onSubmit={handleSubmit} />
      {isError && <ErrorText>{error.message}</ErrorText>}
    </LoginLayout>
  );
};
