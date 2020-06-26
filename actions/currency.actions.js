import { getAsyncActionType } from '../utils';
export const SET_BASE_CURRENCY = 'SET_BASE_CURRENCY';

export const setBaseCurrency = (value) => ({ type: SET_BASE_CURRENCY, value });

export const SET_CALCULATED_CURRENCY = 'SET_CALCULATED_CURRENCY';

export const setCalculatedCurrency = (value) => ({
  type: SET_CALCULATED_CURRENCY,
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

export const SET_CALCULATED_CURRENCY_VALUE = 'SET_CALCULATED_CURRENCY_VALUE';

export const setCalculatedCurrencyValue = (value) => ({
  type: SET_CALCULATED_CURRENCY_VALUE,
  value,
});
