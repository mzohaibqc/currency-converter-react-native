import { getAsyncActionType } from '../utils';

export const SET_THEME = 'SET_THEME';

export const setTheme = (value) => ({ type: SET_THEME, value });

export const SET_AUTH_STATE = 'SET_AUTH_STATE';

export const setAuthState = (value) => ({ type: SET_AUTH_STATE, value });

export const LOGIN = getAsyncActionType('LOGIN');
export const LOGOUT = getAsyncActionType('LOGOUT');

export const login = {
  pending: (username, password) => ({ type: LOGIN.PENDING, username, password }),
  success: () => ({ type: LOGIN.SUCCESS }),
  error: (error) => ({ type: LOGIN.ERROR, error }),
};
export const logout = {
  pending: () => ({ type: LOGOUT.PENDING }),
  success: () => ({ type: LOGOUT.SUCCESS }),
  error: (error) => ({ type: LOGOUT.ERROR, error }),
};
