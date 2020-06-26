import React from 'react';
import {
  StyleSheet,
  Animated,
} from 'react-native';

import logo from '../assets/currency-logo.png';

export default function AppLogo({ scale, translateY }) {
  return (
    <Animated.View
      style={[
        styles.logoContainer,
        { transform: [{ scale }, { translateY }] },
      ]}>
      <Animated.Image source={logo} style={styles.image} />
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  logoContainer: {
    width: 250,
    height: 250,
  },
  image: {
    width: 'auto',
    height: '100%',
  },
});
