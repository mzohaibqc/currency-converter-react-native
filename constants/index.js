import allCurrencies from './currencies';
import themes from './themes';

export const AUTH_STATES = {
  LOGGED_IN: 'true',
  LOGGED_OUT: 'false',
}

const supportedCurrencies = [
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'GBP',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'EUR',
  'MYR',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'SGD',
  'AUD',
  'ILS',
  'KRW',
  'PLN',
].reduce((prev, curr) => {
  prev[curr] = true;
  return prev;
}, {});
export const API_SUPPORTED_CURRENCIES = supportedCurrencies;

export const CURRENCIES = allCurrencies.filter(
  (curr) => supportedCurrencies[curr.code],
);

export const SCREENS = {
  HOME: 'Home',
  LOGIN: 'Login',
  THEMES: 'Themes',
  OPTIONS: 'Options',
  CURRENCIES: 'Base Currency',
  FAVORITES: 'Favorite Currencies',
  SPLASH: 'Splash',
};

export const PRIMARY_INDEX = 4;
export const THEMES = themes.map(theme => {
  return {
    ...theme,
    get color () {
      return theme.shades[PRIMARY_INDEX];
    }
  }
})
export const THEMES_MAP = THEMES.reduce((prev, item) => {
  prev[item.name] = item;
  return prev;
}, {});
