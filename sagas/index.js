import { all, fork } from 'redux-saga/effects';
import currencySagas, { watchSetBaseCurrency } from './currency.sagas';
import authSagas from './auth.sagas';

export default function* rootSaga() {
  yield all([...currencySagas, ...authSagas]);
}
