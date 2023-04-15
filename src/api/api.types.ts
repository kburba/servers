import { LoginFormValues } from '../routes/Login/LoginForm';

export type LoginResponse = { token: string };
export type LoginRequest = (values: LoginFormValues) => Promise<LoginResponse>;
