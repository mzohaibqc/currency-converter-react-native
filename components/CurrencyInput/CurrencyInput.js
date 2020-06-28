import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import {
  InputContainer,
  TextInput,
  InputAddOn,
} from 'components/StyledComponents';

function CurrencyInput({ onChange, code, value, changeCurrency }) {
  return (
    <InputContainer marginBottom="0">
      <InputAddOn underlayColor="#fff" onPress={() => changeCurrency(code)}>
        <Text>{code}</Text>
      </InputAddOn>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder="Enter amount..."
        value={String(value)}
        keyboardType="numeric"
        onChangeText={(value) => {
          const [, decimalPart] = value.split('.');
          if (decimalPart && decimalPart.length > 3) return;
          if (!isNaN(Number(value))) onChange(value);
        }}
        maxLength={10}
      />
    </InputContainer>
  );
}

CurrencyInput.propTypes = {
  onChnage: PropTypes.func,
  onClear: PropTypes.func,
  chnageCurrency: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default CurrencyInput;
