import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import logo from '../assets/currency-logo.png';

function SplashScreen() {
  return (
    <View style={styles.main}>
      <Image source={logo} style={styles.image} />
    </View>
  )
}

export default SplashScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: '-30%',
    backgroundColor: "#fff",
  },
  image: {
    width: 300,
    height: 300,
  }
})