export const getBaseCurrency = (state) => state.currencyReducer.baseCurrency;
export const getTargetCurrency = (state) =>
  state.currencyReducer.targetCurrency;
export const getBaseCurrencyValue = (state) =>
  state.currencyReducer.baseCurrencyValue;
export const getTargetCurrencyValue = (state) =>
  state.currencyReducer.targetCurrencyValue;
export const getExchangeRates = (state) => state.currencyReducer.rates;
export const getExchangeRate = (state) => {
  const targetCurrency = getTargetCurrency(state);
  const rates = getExchangeRates(state);
  return rates[targetCurrency];
};
