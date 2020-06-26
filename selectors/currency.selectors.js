export const getBaseCurrency = (state) => state.currencyReducer.baseCurrency;
export const getCalculatedCurrency = (state) =>
  state.currencyReducer.calculatedCurrency;
export const getBaseCurrencyValue = (state) =>
  state.currencyReducer.baseCurrencyValue;
export const getCalculatedCurrencyValue = (state) =>
  state.currencyReducer.calculatedCurrencyValue;
export const getExchangeRates = (state) => state.currencyReducer.rates;
export const getExchangeRate = (state) => {
  const calculatedCurrency = getCalculatedCurrency(state);
  const rates = getExchangeRates(state);
  return rates[calculatedCurrency];
};
