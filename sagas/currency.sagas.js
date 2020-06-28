import { takeLatest, call, put, select } from 'redux-saga/effects';
import {
  SWITCH_CURRENCIES,
  setExchangeRates,
  switchCurrencies,
} from '../actions/currency.actions';
import selectors from '../selectors';
import { getExchangeRates } from '../api';

function* watchSwitchCurrencies() {
  try {
    const targetCurrency = yield select(selectors.getTargetCurrency);
    const response = yield call(getExchangeRates, targetCurrency);
    console.log('TLL: function*watchSwitchCurrencies -> response = ', response);
    yield put(setExchangeRates(response));
    yield put(switchCurrencies.success());
  } catch (error) {
    console.log('TLL: function*watchSwitchCurrencies -> error = ' + error);

    yield put(switchCurrencies.error(error));
  }
}

export default [takeLatest(SWITCH_CURRENCIES.PENDING, watchSwitchCurrencies)];
