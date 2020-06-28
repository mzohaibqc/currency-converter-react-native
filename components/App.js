/**
 * Navigation
 */
import 'react-native-gesture-handler';
import React, { useEffect, useCallback, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Login from 'components/Login';
import Home from 'components/Home';
import Options from 'components/Options';
import Themes from 'components/Themes';
import CurrencyList from 'components/CurrencyList';
import Favorites from 'components/Favorites';
import SplashScreen from 'components/SplashScreen';
import { HeaderMenuIcon } from 'components/StyledComponents'
import { SCREENS, AUTH_STATES } from 'constants';
import { getExchangeRates } from 'api';
import { setExchangeRates } from 'actions/currency.actions';
import { initializeAppState } from 'actions/app.actions';
import store from 'store';
import selectors from 'selectors';

const Stack = createStackNavigator();

function App() {
  const dispatch = useDispatch();
  const theme = useSelector(selectors.getTheme);
  const authState = useSelector(selectors.getAuthState);

  const initializeExchangeRates = useCallback(async () => {
    const data = await getExchangeRates('USD');
    dispatch(setExchangeRates(data));
  }, []);

  useEffect(() => {
    initializeExchangeRates();
    dispatch(initializeAppState());
  }, []);

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.color,
      border: authState === AUTH_STATES.LOADING ? '#fff' : theme.color,
      primary: '#fff',
      text: '#fff',
    },
  };

  const headerOptions = {
    headerStyle: {
      backgroundColor: authState === AUTH_STATES.LOADING ? '#fff' : theme.color,
    },
  };

  const themesHeaderOptions = {
    headerTitleStyle: {
      color: theme.color,
    },
    headerTintColor: theme.color,
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator>
        {authState === AUTH_STATES.LOADING && (
          <Stack.Screen
            name={SCREENS.SPLASH}
            component={SplashScreen}
            options={{ ...headerOptions, title: '' }}
          />
        )}
        {authState === AUTH_STATES.LOGGED_IN && (
          <>
            <Stack.Screen
              name={SCREENS.HOME}
              component={Home}
              options={({ navigation }) => ({
                ...headerOptions,
                headerRight: () => (
                  <HeaderMenuIcon
                    icon={faBars}
                    size={20}
                    onPress={() => {
                      navigation.navigate(SCREENS.OPTIONS);
                    }}
                  />
                ),
              })}
            />
            <Stack.Screen
              name={SCREENS.OPTIONS}
              component={Options}
              options={headerOptions}
            />
            <Stack.Screen
              name={SCREENS.THEMES}
              component={Themes}
              options={themesHeaderOptions}
            />
            <Stack.Screen
              name={SCREENS.CURRENCIES}
              options={({ route }) => ({
                ...themesHeaderOptions,
                title: route.params.title,
              })}>
              {(props) => <CurrencyList {...props} />}
            </Stack.Screen>
            <Stack.Screen
              name={SCREENS.FAVORITES}
              component={Favorites}
              options={headerOptions}
            />
          </>
        )}

        {authState === AUTH_STATES.LOGGED_OUT && (
          <Stack.Screen
            name={SCREENS.LOGIN}
            component={Login}
            options={({ navigation }) => ({ ...headerOptions })}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
