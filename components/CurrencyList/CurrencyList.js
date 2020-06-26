import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  TouchableOpacity,
  Text,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar';
import { CURRENCIES } from '../../constants';
import {
  setBaseCurrency,
  setCalculatedCurrency,
  setBaseCurrencyValue,
  setCalculatedCurrencyValue,
} from '../../actions/currency.actions';
import selectors from '../../selectors';

function CurrencyList({
  navigation,
  route: {
    params: { title },
  },
}) {
  const [data, setData] = useState(CURRENCIES);
  const filterData = useCallback(
    (search) => {
      const regex = new RegExp(search, 'i');
      setData(
        CURRENCIES.filter(
          (item) => regex.test(item.name) || regex.test(item.code),
        ),
      );
    },
    [CURRENCIES],
  );

  const baseCurrency = useSelector(selectors.getBaseCurrency);
  const targetCurrency = useSelector(selectors.getCalculatedCurrency);
  const theme = useSelector(selectors.getTheme);
  const currency = title === 'Base Currency' ? baseCurrency : targetCurrency;
  const setCurrency =
    title === 'Base Currency' ? setBaseCurrency : setCalculatedCurrency;
  const dispatch = useDispatch();

  return (
    <View style={styles.options}>
      <SearchBar onChange={filterData} />
      <View style={styles.content}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                dispatch(setCurrency(item.code));
              }}>
              <Text style={styles.itemText} style={styles.title}>
                {item.code} ({item.symbol_native})
              </Text>
              <View>
                <Text style={styles.itemText} style={styles.title}>
                  {currency === item.code && (
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      size={22}
                      style={[styles.checkIcon, { color: theme.color }]}
                    />
                  )}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.code}
        />
      </View>
    </View>
  );
}

CurrencyList.propTypes = {};

export default CurrencyList;

const styles = StyleSheet.create({
  options: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  content: {
    flex: 1,
  },
  header: {
    height: 20,
    marginTop: 40,
    alignSelf: 'flex-end',
  },
  item: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
  },
  itemText: {
    fontSize: 24,
  },
  checkIcon: {
    // marginLeft: 10,
  },
});
