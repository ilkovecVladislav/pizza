import { UserState, UserActionTypes, LOG_IN, LOG_OUT } from './types';

const initialState: UserState = {
  isAuthorized: true,
};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case LOG_IN: {
      return { ...state, isAuthorized: true };
    }
    case LOG_OUT: {
      return { ...state, isAuthorized: false };
    }
    default:
      return state;
  }
};

export default userReducer;
