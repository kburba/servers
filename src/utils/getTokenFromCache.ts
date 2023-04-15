import { LocalStorage } from '../enums';

type GetTokenFromCache = () => string | null;

export const getTokenFromCache: GetTokenFromCache = () => {
  const token = localStorage.getItem(LocalStorage.Token);
  return token;
};
