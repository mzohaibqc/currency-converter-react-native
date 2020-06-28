import { all, fork } from 'redux-saga/effects';
import currencySagas, { watchSetBaseCurrency } from './currency.sagas';
import appSagas from './app.sagas';

export default function* rootSaga() {
  yield all([...currencySagas, ...appSagas]);
}
