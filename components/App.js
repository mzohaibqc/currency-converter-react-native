/**
 * Navigation
 */
import 'react-native-gesture-handler';
import React, { useEffect, useCallback } from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreenOs from 'react-native-splash-screen';

import Login from 'components/Login';
import Home from 'components/Home';
import Options from 'components/Options';
import Themes from 'components/Themes';
import CurrencyList from 'components/CurrencyList';
import Favorites from 'components/Favorites';
import SplashScreen from 'components/SplashScreen';
import { HeaderIconContainer, HeaderMenuIcon } from 'components/StyledComponents';
import { SCREENS, AUTH_STATES } from 'constants';
import { getExchangeRates } from 'api';
import { setExchangeRates } from 'actions/currency.actions';
import store, { persistor } from 'store';
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
    SplashScreenOs.hide();
    initializeExchangeRates();
  }, []);

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.color,
      border: theme.color,
      primary: '#fff',
      text: '#fff',
    },
  };

  const headerOptions = {
    headerStyle: {
      backgroundColor: theme.color,
    },
  };

  const themesHeaderOptions = {
    headerTitleStyle: {
      color: theme.color,
    },
    headerTintColor: theme.color,
  };
  console.log('auth state app.js', authState)

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator>
        {authState === AUTH_STATES.LOGGED_IN && (
          <>
            <Stack.Screen
              name={SCREENS.HOME}
              component={Home}
              options={({ navigation }) => ({
                ...headerOptions,
                headerRight: () => (
                  <HeaderIconContainer
                    underlayColor="#fff"
                    onPress={() => {
                      navigation.navigate(SCREENS.OPTIONS);
                    }}>
                    <HeaderMenuIcon icon={faBars} size={20} />
                  </HeaderIconContainer>
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
    <PersistGate loading={<SplashScreen />} persistor={persistor}>
      {/* {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />} */}
      <App />
    </PersistGate>
  </Provider>
);
