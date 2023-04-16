import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Input } from '../../components';
import { LoginTestId } from '../../shared/testIds';

const loginFormSchema = yup.object({
  username: yup.string().required('Please enter your username'),
  password: yup.string().required('Please enter your password'),
});

export type LoginFormValues = {
  username: string;
  password: string;
};

type Props = {
  onSubmit: SubmitHandler<LoginFormValues>;
  isLoading: boolean;
};

export const LoginForm: FC<Props> = ({ onSubmit, isLoading }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="username"
        label="Username"
        error={errors.username}
        control={control}
        testId={LoginTestId.UsernameInput}
      />
      <Input
        name="password"
        label="Password"
        error={errors.password}
        control={control}
        type="password"
        testId={LoginTestId.PasswordInput}
      />
      <Button
        disabled={isLoading}
        isLoading={isLoading}
        testId={LoginTestId.SubmitButton}
      >
        Submit
      </Button>
    </form>
  );
};
