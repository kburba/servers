import { LocalStorage } from '../enums';

type GetTokenFromCache = () => string | null;
type SetTokenToCache = (token: string) => void;

export const getTokenFromCache: GetTokenFromCache = () => {
  const token = localStorage.getItem(LocalStorage.Token);
  return token;
};

export const setTokenToCache: SetTokenToCache = (token) => {
  localStorage.setItem(LocalStorage.Token, token);
};
