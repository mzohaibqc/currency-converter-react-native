/**
 * Navigation
 */
import 'react-native-gesture-handler';
import React, { useEffect, useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import Login from './Login';
import Home from './Home';
import Options from './Options';
import Themes from './Themes';
import CurrencyList from './CurrencyList';
import SplashScreen from './SplashScreen';
import { SCREENS, AUTH_STATES, THEMES, THEMES_MAP } from '../constants';
import { getExchangeRates } from '../api';
import { setExchangeRates } from '../actions/currency.actions';
import { setAuthState, setTheme } from '../actions/app.actions';

import store from '../store';
import selectors from '../selectors';

const Stack = createStackNavigator();

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const theme = useSelector(selectors.getTheme);
  const authState = useSelector(selectors.getAuthState);

  const initialzeAuthState = useCallback(async () => {
    if (!loading) setLoading(true);
    let authState = '';
    let appTheme = THEMES_MAP.Blue;
    try {
      authState = await AsyncStorage.getItem('authState');
    } catch (error) {
      authState = AUTH_STATES.LOGGED_OUT;
    }
    try {
      appTheme = await AsyncStorage.getItem('appTheme');
      appTheme = JSON.parse(appTheme);
    } catch (error) {
      appTheme = THEMES_MAP.Blue;
    }
    
    setTimeout(() => {
      dispatch(setAuthState(authState || AUTH_STATES.LOGGED_OUT));
      dispatch(setTheme(appTheme));
      setLoading(false);
    }, 1000);
  });

  const initializeExchangeRates = useCallback(async () => {
    const data = await getExchangeRates('USD');
    dispatch(setExchangeRates(data));
  }, []);

  useEffect(() => {
    initializeExchangeRates();
  }, []);
  useEffect(() => {
    initialzeAuthState();
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
                  <FontAwesomeIcon
                    style={styles.optionsIcon}
                    icon={faCog}
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
                ...headerOptions,
                title: route.params.title,
              })}>
              {(props) => <CurrencyList {...props} />}
            </Stack.Screen>
          </>
        )}

        {authState === AUTH_STATES.LOGGED_OUT && (
          <>
            <Stack.Screen
              name={SCREENS.LOGIN}
              component={Login}
              options={({ navigation }) => ({ ...headerOptions })}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  optionsIcon: {
    marginRight: 10,
    color: '#fff',
  },
});

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
