import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import CurrencyInput from '../CurrencyInput';
import Actions from '../../actions';
import { SCREENS } from '../../constants';
import AppLogo from '../AppLogo';
import InputsContainer from '../InputsContainer';
import useScreenTransform from '../../hooks/useScreenTransform';

import exchangeIcon from '../../assets/exchange.png';
import {
  setBaseCurrencyValue,
  setCalculatedCurrencyValue,
} from '../../actions/currency.actions';
import selectors from '../../selectors';

function Home({ navigation }) {
  const theme = useSelector(selectors.getTheme);
  const baseCurrency = useSelector(selectors.getBaseCurrency);
  const calculatedCurrency = useSelector(selectors.getCalculatedCurrency);
  const baseCurrencyValue = useSelector(selectors.getBaseCurrencyValue);
  const exchangeRate = useSelector(selectors.getExchangeRate);
  const calculatedCurrencyValue = useSelector(
    selectors.getCalculatedCurrencyValue,
  );
  const dispatch = useDispatch();

  const { imageY, inputContainerY, imageScale } = useScreenTransform();

  return (
    <View style={[styles.home, { backgroundColor: theme.color }]}>
      <AppLogo scale={imageScale} translateY={imageY} />
      <InputsContainer
        style={styles.conversionContainer}
        translateY={inputContainerY}>
        <Text style={styles.title}>Currency Converter</Text>
        <CurrencyInput
          code={baseCurrency}
          changeCurrency={(item) => {
            navigation.navigate(SCREENS.CURRENCIES, {
              title: 'Base Currency',
            });
          }}
          onChange={(value) => {
            dispatch(setBaseCurrencyValue(value));
          }}
          value={baseCurrencyValue}
        />
        <View style={styles.rowFlex}>
          <Text onPress={() => dispatch(Actions.switchCurrencies.pending())}>
            <Image source={exchangeIcon} style={styles.exchangeIcon} />
          </Text>
          <Text style={styles.infoText}>Switch Currencies</Text>
        </View>

        <CurrencyInput
          code={calculatedCurrency}
          changeCurrency={(item) => {
            navigation.navigate(SCREENS.CURRENCIES, {
              title: 'Target Currency',
            });
          }}
          onChange={(value) => {
            dispatch(setCalculatedCurrencyValue(value));
          }}
          value={calculatedCurrencyValue}
        />
        <View
          style={[styles.rowFlex, { justifyContent: 'center', marginTop: 15 }]}>
          {exchangeRate && (
            <Text style={styles.infoText}>{`1 ${baseCurrency} = ${Number(
              exchangeRate,
            ).toFixed(3)} ${calculatedCurrency} as of June 24`}</Text>
          )}
        </View>
      </InputsContainer>
    </View>
  );
}

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    paddingTop: 30,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 10,
  },
  exchangeIcon: {
    marginLeft: -5,
    transform: [{ scale: 0.7 }],
  },
  rowFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
