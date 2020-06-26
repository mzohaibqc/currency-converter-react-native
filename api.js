export const getExchangeRates = async (value) => {
  const response = await fetch(
    `https://api.exchangeratesapi.io/latest?base=${value}`,
  );
  const data = await response.json();
  return data.rates;
};
