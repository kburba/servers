import { useEffect } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { getToken } from '../../api/api';
import { Heading, PageLayout } from '../../components';
import { LocalStorage, RouteType } from '../../enums';
import { getTokenFromCache } from '../../utils/getTokenFromCache';
import { LoginForm, LoginFormValues } from './LoginForm';

export const Login = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { isLoading, isError, mutate } = useMutation({
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
    <PageLayout>
      <Heading>Login</Heading>
      <LoginForm isLoading={isLoading} onSubmit={handleSubmit} />
      {isError && (
        <StyledError>Login failed. Please try again later.</StyledError>
      )}
    </PageLayout>
  );
};
const StyledError = styled.div`
  font-size: 0.875rem;
  color: var(--palette-red);
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  text-align: center;
`;
