import { put, call , takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';
import {
  login,
  logout,
  LOGIN,
  LOGOUT,
  SET_THEME,
} from '../actions/app.actions';
import { AUTH_STATES} from '../constants';
import { sleep } from '../utils';

function* watchLogin({ username, password }) {
  if (username === 'Admin' && password === 'Admin') {
    try {
      yield call(sleep, 1000);
      yield call(AsyncStorage.setItem, 'authState', AUTH_STATES.LOGGED_IN);
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
    Alert.alert('Logged out successfully!');
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

export default [
  takeLatest(LOGIN.PENDING, watchLogin),
  takeLatest(LOGOUT.PENDING, watchLogout),
  takeLatest(SET_THEME, watchSetTheme),
];
