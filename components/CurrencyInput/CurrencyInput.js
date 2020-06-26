import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

function CurrencyInput({ onChange, code, value, changeCurrency }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.codeContainer}
        onPress={() => changeCurrency(code)}>
        <Text style={styles.code}>{code}</Text>
      </TouchableHighlight>
      <TextInput
        style={styles.input}
        placeholder="Enter amount..."
        underlineColorAndroid="transparent"
        value={String(value)}
        keyboardType="numeric"
        onChangeText={(value) => {
          const [, decimalPart] = value.split('.');
          if (decimalPart && decimalPart.length > 3) return;
          if (!isNaN(Number(value))) onChange(value);
        }}
        maxLength={10}
      />
    </View>
  );
}

CurrencyInput.propTypes = {
  onChnage: PropTypes.func,
  onClear: PropTypes.func,
  chnageCurrency: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default CurrencyInput;

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 3,
  },
  codeContainer: {
    padding: 10,
    width: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    height: 40,
    borderRightWidth: 1,
    borderRightColor: '#eee',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  code: {
    color: '#000',
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    height: 40,
    borderRadius: 3,
    paddingLeft: 10,
  },
});
