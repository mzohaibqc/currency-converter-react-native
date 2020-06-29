import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import Screen from 'components/Screen';
import AppLogo from 'components/AppLogo';
import CurrencyInput from 'components/CurrencyInput';
import InputsContainer from 'components/InputsContainer';
import { SCREENS } from 'constants';
import useScreenTransform from 'hooks/useScreenTransform';
import SwitchIcon from 'assets/transfer.svg';
import selectors from 'selectors';
import {
  switchCurrencies,
  setBaseCurrencyValue,
  setTargetCurrencyValue,
} from 'actions/currency.actions';

function Home({ navigation }) {
  const theme = useSelector(selectors.getTheme);
  const baseCurrency = useSelector(selectors.getBaseCurrency);
  const targetCurrency = useSelector(selectors.getTargetCurrency);
  const baseCurrencyValue = useSelector(selectors.getBaseCurrencyValue);
  const exchangeRate = useSelector(selectors.getExchangeRate);
  const targetCurrencyValue = useSelector(selectors.getTargetCurrencyValue);
  const dispatch = useDispatch();

  const { imageY, inputContainerY, imageScale } = useScreenTransform();

  return (
    <Screen backgroundColor={theme.color}>
      <AppLogo scale={imageScale} translateY={imageY} showInfo />
      <InputsContainer translateY={inputContainerY}>
        <Title testID="main-title">Currency Converter</Title>
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
        <RowFlex justify="flex-start">
          <SwitchIconContainer onPress={() => dispatch(switchCurrencies.pending())} >
            <SwitchIcon height={40} width={30}  fill="#fff" />
          </SwitchIconContainer>
        </RowFlex>

        <CurrencyInput
          code={targetCurrency}
          changeCurrency={(item) => {
            navigation.navigate(SCREENS.CURRENCIES, {
              title: 'Target Currency',
            });
          }}
          onChange={(value) => {
            dispatch(setTargetCurrencyValue(value));
          }}
          value={targetCurrencyValue}
        />
        <RowFlex marginTop={15}>
          {exchangeRate && (
            <InfoText>{`1 ${baseCurrency} = ${Number(exchangeRate).toFixed(
              3,
            )} ${targetCurrency} as of ${new Date()
              .toDateString()
              .slice(4, 10)}`}</InfoText>
          )}
        </RowFlex>
      </InputsContainer>
    </Screen>
  );
}

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;

const Title = styled.Text`
  color: #fff;
  font-size: 26px;
  text-align: center;
  margin-bottom: 10px;
`;

const RowFlex = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.justify || 'center'};
  margin-top: ${(props) => `${props.marginTop || 0}px`};
`;

const InfoText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;
const SwitchIconContainer = styled.TouchableOpacity`
  width: 30px;
  height: 40px;
  padding-left: 10px;
`;
