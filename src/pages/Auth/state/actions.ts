import { LOG_IN, LOG_OUT, LogIn, LogOut } from './types';

export const logIn = (): LogIn => ({
  type: LOG_IN,
});

export const logOut = (): LogOut => ({
  type: LOG_OUT,
});
