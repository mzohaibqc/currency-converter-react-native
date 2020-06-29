import React from 'react';
import { render } from 'react-native-testing-library';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { THEMES_MAP } from 'constants';
import { AUTH_STATES } from 'constants';

export const initialState = {
  appReducer: {
    theme: THEMES_MAP.Blue,
    authState: AUTH_STATES.LOGGED_OUT,
    loginLoading: false,
    favorites: {},
  },
  currencyReducer: {
    baseCurrency: 'USD',
    targetCurrency: 'AUD',
    baseCurrencyValue: 0,
    targetCurrencyValue: 0,
    rates: {},
  }
}

const mockStore = configureStore([]);
const mockedStore = mockStore(initialState);
export const customRender = (ui, store = mockedStore) => {
  return render(
    <Provider store={store}>
      {ui}
    </Provider>,
    {
      createNodeMock: (element) => {
        if (element.type === PersistGate) { return element.props.children }
        return null;
     }
    }
  )
}