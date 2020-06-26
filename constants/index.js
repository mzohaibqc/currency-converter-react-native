import allCurrencies from './currencies';

export const AUTH_STATES = {
  LOADING: 'oading',
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
  SPLASH: 'Splash'
};

export const THEMES = [
  {
    title: 'Blue',
    color: '#49a9ee',
    darkShade: '#108ee9',
    lightShade: '#7ec2f3',
  },
  {
    title: 'Orange',
    color: '#f78e3d',
    darkShade: '#f56a00',
    lightShade: '#faaf76',
  },
  {
    title: 'Green',
    color: '#3dbd7d',
    darkShade: '#00a854',
    lightShade: '#76d0a3',
  },
  {
    title: 'Purple',
    color: '#948aec',
    darkShade: '#7265e6',
    lightShade: '#b3acf2',
  },
];

export const THEMES_MAP = THEMES.reduce((prev, item) => {
  prev[item.title] = item;
  return prev;
}, {});
