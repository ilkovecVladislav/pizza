export const LOG_IN = 'user/LOG_IN';
export const LOG_OUT = 'user/LOG_OUT';

export type LogIn = {
  type: typeof LOG_IN;
};

export type LogOut = {
  type: typeof LOG_OUT;
};

export type UserActionTypes = LogIn | LogOut;

export type UserState = {
  isAuthorized: boolean;
};
