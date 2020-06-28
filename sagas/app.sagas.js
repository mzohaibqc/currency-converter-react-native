import { put, call, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';

import {
  login,
  logout,
  setTheme,
  setAuthState,
  LOGIN,
  LOGOUT,
  SET_THEME,
  INITIALIZE_APP_STATE,
} from '../actions/app.actions';
import { AUTH_STATES, THEMES_MAP, PRIMARY_INDEX } from '../constants';
import { sleep } from '../utils';

function* watchLogin({ username, password }) {
  if (username === 'Admin' && password === 'Admin') {
    try {
      yield call(AsyncStorage.setItem, 'authState', AUTH_STATES.LOGGED_IN);
      yield call(sleep, 500)
      yield put(login.success());
    } catch (e) {
      console.log('Error', e);
      Alert.alert('Error!', 'Unable to login. Try again.');
      yield put(login.error());
    }
  } else {
    Alert.alert('Error!', 'Invalid username or password.');
    yield put(login.error());
  }
}
function* watchLogout() {
  try {
    yield call(AsyncStorage.setItem, 'authState', AUTH_STATES.LOGGED_OUT);
    yield put(logout.success());
  } catch (e) {
    console.log('Error', e);
    Alert.alert('Error!', 'Unable to logout. Try again.');
    yield put(logout.error());
  }
}

function* watchSetTheme({ value }) {
  try {
    yield call(AsyncStorage.setItem, 'appTheme', JSON.stringify(value));
  } catch (e) {
    console.log('Error', e);
  }
}

function* watchInitializeAppState() {
  try {
    let appTheme = THEMES_MAP.Blue;
    try {
      authState = yield call(AsyncStorage.getItem, 'authState');
    } catch (error) {
      authState = AUTH_STATES.LOGGED_OUT;
    }
    try {
      appTheme = yield call(AsyncStorage.getItem, 'appTheme');
      appTheme = JSON.parse(appTheme);
    } catch (error) {
      appTheme = THEMES_MAP.Blue;
    }
    yield call(sleep, 500);
    yield put(setAuthState(authState || AUTH_STATES.LOGGED_OUT));
    let selectedTheme = appTheme || THEMES_MAP.Blue;
    selectedTheme = {
      ...selectedTheme,
      get color() {
        return selectedTheme.shades[PRIMARY_INDEX];
      },
    };
    yield put(setTheme(selectedTheme));
  } catch (e) {
    console.log('Error', e);
  }
}

export default [
  takeLatest(LOGIN.PENDING, watchLogin),
  takeLatest(LOGOUT.PENDING, watchLogout),
  takeLatest(SET_THEME, watchSetTheme),
  takeLatest(INITIALIZE_APP_STATE, watchInitializeAppState),
];
