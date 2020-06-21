/**
 * Navigation
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home';
import Options from './components/Options';
import Themes from './components/Themes';
import CurrencyList from './components/CurrencyList';
import { SCREENS } from './constants';

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={SCREENS.HOME}
            component={Home}
          />
          <Stack.Screen
            name={SCREENS.OPTIONS}
            component={Options}
          />
          <Stack.Screen
            name={SCREENS.THEMES}
            component={Themes}
          />
          <Stack.Screen
            name={SCREENS.CURRENCIES}
            component={CurrencyList}
          />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  navigation: {
    backgroundColor: '#506d79'
  }
})

export default App;
