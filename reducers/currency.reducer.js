// Initial State
import {
  SET_BASE_CURRENCY,
  SWITCH_CURRENCIES,
  SET_CALCULATED_CURRENCY,
  SET_EXCHNAGE_RATES,
  SET_BASE_CURRENCY_VALUE,
  SET_CALCULATED_CURRENCY_VALUE,
} from '../actions/currency.actions';

const initialState = {
  baseCurrency: 'USD',
  calculatedCurrency: 'AUD',
  baseCurrencyValue: 0,
  calculatedCurrencyValue: 0,
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
    case SET_CALCULATED_CURRENCY: {
      return {
        ...state,
        calculatedCurrency: action.value,
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
        calculatedCurrency,
        baseCurrencyValue,
        calculatedCurrencyValue,
      } = state;
      return {
        ...state,
        loading: false,
        baseCurrency: calculatedCurrency,
        calculatedCurrency: baseCurrency,
        baseCurrencyValue: calculatedCurrencyValue,
        calculatedCurrencyValue: baseCurrencyValue,
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
        calculatedCurrencyValue: (
          Number(action.value || 0) * state.rates[state.calculatedCurrency]
        ).toFixed(3),
      };
    }
    case SET_CALCULATED_CURRENCY_VALUE: {
      return {
        ...state,
        calculatedCurrencyValue: action.value,
        baseCurrencyValue: (
          Number(action.value || 0) *
          (1 / state.rates[state.calculatedCurrency])
        ).toFixed(3),
      };
    }

    default: {
      return state;
    }
  }
};

export default currencyReducer;
