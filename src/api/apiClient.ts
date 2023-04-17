import axios from 'axios';

import { appEnv } from '../shared/environment';
import { getTokenFromCache } from '../utils/tokenFromCache';

export const apiClient = axios.create({
  baseURL: appEnv.baseUrl,
  headers: {
    'Content-type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = getTokenFromCache();
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
