import { SubmitHandler } from 'react-hook-form';

import { Heading, LoginLayout } from '../../components';
import { useToken } from '../../hooks/useToken';
import { ErrorText } from '../ErrorText';
import { LoginForm, LoginFormValues } from './LoginForm';

export const Login = () => {
  const { isLoading, error, mutate } = useToken();

  const handleSubmit: SubmitHandler<LoginFormValues> = (values) => {
    mutate(values);
  };

  return (
    <LoginLayout>
      <Heading>Login</Heading>
      <LoginForm isLoading={isLoading} onSubmit={handleSubmit} />
      <ErrorText>{error?.message}</ErrorText>
    </LoginLayout>
  );
};
