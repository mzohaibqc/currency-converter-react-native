import { THEMES_MAP, AUTH_STATES } from 'constants';
import { SET_THEME, SET_AUTH_STATE, LOGIN, LOGOUT, TOGGLE_FAVORITE } from 'actions/app.actions';

const initialState = {
  theme: THEMES_MAP.Blue,
  authState: AUTH_STATES.LOGGED_OUT,
  loginLoading: false,
  favorites: {},
};
const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_STATE: {
      return {
        ...state,
        authState: action.value,
      };
    }
    case LOGIN.PENDING: {
      return {
        ...state,
        loginLoading: true,
      };
    }
    case LOGIN.SUCCESS: {
      return {
        ...state,
        authState: AUTH_STATES.LOGGED_IN,
        loginLoading: false,
      };
    }
    case LOGIN.ERROR: {
      return {
        ...state,
        authState: AUTH_STATES.LOGGED_OUT,
        loginLoading: false,
      };
    }
    case LOGOUT.SUCCESS: {
      return {
        ...state,
        authState: AUTH_STATES.LOGGED_OUT,
      };
    }
    case SET_THEME: {
      return {
        ...state,
        theme: action.value,
      };
    }
    case TOGGLE_FAVORITE: {
      const { value } = action;
      const favorites = { ...state.favorites };
      if (value.code in favorites) {
        delete favorites[value.code];
      } else {
        favorites[value.code] = value;
      }
      return {
        ...state,
        favorites
      };
    }

    default: {
      return state;
    }
  }
};

export default currencyReducer;
