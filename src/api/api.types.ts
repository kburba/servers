import { LoginFormValues } from '../routes/Login/LoginForm';

export type ServerListResponse = {
  distance: number;
  name: string;
}[];

export type ServerListRequest = () => Promise<ServerListResponse>;

export type LoginResponse = { token: string };
export type LoginRequest = (values: LoginFormValues) => Promise<LoginResponse>;
