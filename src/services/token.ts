import { AUTH_TOKEN_KEY_NAME } from '../consts/api';

export type TokenType = string;

const getToken = (): TokenType => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);

  return token ?? '';
};

const saveToken = (token: TokenType): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};

export { dropToken, getToken, saveToken };
