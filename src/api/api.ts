import { RequestPaths } from '../enums';
import {
  LoginRequest,
  LoginResponse,
  ServerListRequest,
  ServerListResponse,
} from './api.types';
import { apiClient } from './apiClient';

export const getServerList: ServerListRequest = async () => {
  const response = await apiClient.get<ServerListResponse>(
    RequestPaths.Servers,
  );
  return response.data;
};

export const getToken: LoginRequest = async (values) => {
  const response = await apiClient.post<LoginResponse>(
    `${RequestPaths.Tokens}`,
    values,
  );

  return response.data;
};
