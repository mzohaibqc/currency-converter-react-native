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
  INITIALIZE_APP_STATE,
} from '../actions/app.actions';
import { AUTH_STATES, THEMES_MAP, PRIMARY_INDEX } from '../constants';
import { sleep } from '../utils';

function* watchLogin({ username, password }) {
  if (username === 'Admin' && password === 'Admin') {
    try {
      // yield call(someLoginApi, username, password);
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
    // yield call(someLogoutApi);
    yield call(sleep, 300)
    yield put(logout.success());
  } catch (e) {
    console.log('Error', e);
    Alert.alert('Error!', 'Unable to logout. Try again.');
    yield put(logout.error());
  }
}

export default [
  takeLatest(LOGIN.PENDING, watchLogin),
  takeLatest(LOGOUT.PENDING, watchLogout),
];
