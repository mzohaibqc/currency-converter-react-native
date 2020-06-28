// Initial State
import {
  SET_BASE_CURRENCY,
  SWITCH_CURRENCIES,
  SET_TARGET_CURRENCY,
  SET_EXCHNAGE_RATES,
  SET_BASE_CURRENCY_VALUE,
  SET_TARGET_CURRENCY_VALUE,
} from '../actions/currency.actions';

const initialState = {
  baseCurrency: 'USD',
  targetCurrency: 'AUD',
  baseCurrencyValue: 0,
  targetCurrencyValue: 0,
  rates: {},
};
const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BASE_CURRENCY: {
      return {
        ...state,
        baseCurrency: action.value,
      };
    }
    case SET_TARGET_CURRENCY: {
      return {
        ...state,
        targetCurrency: action.value,
      };
    }
    case SWITCH_CURRENCIES.PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case SWITCH_CURRENCIES.SUCCESS: {
      const {
        baseCurrency,
        targetCurrency,
        baseCurrencyValue,
        targetCurrencyValue,
      } = state;
      return {
        ...state,
        loading: false,
        baseCurrency: targetCurrency,
        targetCurrency: baseCurrency,
        baseCurrencyValue: targetCurrencyValue,
        targetCurrencyValue: baseCurrencyValue,
      };
    }

    case SWITCH_CURRENCIES.ERROR: {
      return {
        ...state,
        loading: false,
      };
    }

    case SET_EXCHNAGE_RATES: {
      return {
        ...state,
        rates: action.value,
      };
    }

    case SET_BASE_CURRENCY_VALUE: {
      return {
        ...state,
        baseCurrencyValue: action.value,
        targetCurrencyValue: (
          Number(action.value || 0) * state.rates[state.targetCurrency]
        ).toFixed(3),
      };
    }
    case SET_TARGET_CURRENCY_VALUE: {
      return {
        ...state,
        targetCurrencyValue: action.value,
        baseCurrencyValue: (
          Number(action.value || 0) *
          (1 / state.rates[state.targetCurrency])
        ).toFixed(3),
      };
    }

    default: {
      return state;
    }
  }
};

export default currencyReducer;
