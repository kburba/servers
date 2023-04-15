import { RequestPaths } from '../enums';
import { LoginRequest, LoginResponse } from './api.types';
import { apiClient } from './apiClient';

export const getToken: LoginRequest = async (values) => {
  const response = await apiClient.post<LoginResponse>(
    RequestPaths.Tokens,
    values,
  );
  return response.data;
};
