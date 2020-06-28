import { getAsyncActionType } from '../utils';
export const SET_BASE_CURRENCY = 'SET_BASE_CURRENCY';

export const setBaseCurrency = (value) => ({ type: SET_BASE_CURRENCY, value });

export const SET_TARGET_CURRENCY = 'SET_TARGET_CURRENCY';

export const setTargetCurrency = (value) => ({
  type: SET_TARGET_CURRENCY,
  value,
});

export const SWITCH_CURRENCIES = getAsyncActionType('SWITCH_CURRENCIES');

export const switchCurrencies = {
  pending: () => ({ type: SWITCH_CURRENCIES.PENDING }),
  success: () => ({ type: SWITCH_CURRENCIES.SUCCESS }),
  error: (error) => ({ type: SWITCH_CURRENCIES.ERROR, error }),
};

export const SET_EXCHNAGE_RATES = 'SET_EXCHNAGE_RATES';

export const setExchangeRates = (value) => ({
  type: SET_EXCHNAGE_RATES,
  value,
});

export const SET_BASE_CURRENCY_VALUE = 'SET_BASE_CURRENCY_VALUE';

export const setBaseCurrencyValue = (value) => ({
  type: SET_BASE_CURRENCY_VALUE,
  value,
});

export const SET_TARGET_CURRENCY_VALUE = 'SET_TARGET_CURRENCY_VALUE';

export const setTargetCurrencyValue = (value) => ({
  type: SET_TARGET_CURRENCY_VALUE,
  value,
});
