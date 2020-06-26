import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar({ onChange }) {
  const [search, setSearch] = useState('');
  const onSearch = useCallback(
    (value) => {
      setSearch(value);
      if (onChange) onChange(value);
    },
    [onChange],
  );
  return (
    <View style={styles.searchSection}>
      <FontAwesomeIcon icon={faSearch} style={styles.searchIcon} />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={onSearch}
        underlineColorAndroid="transparent"
        value={search}
      />
    </View>
  );
}

SearchBar.propTypes = {
  onChnage: PropTypes.func,
};

export default SearchBar;

const styles = StyleSheet.create({
  searchSection: {
    height: 50,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
    width: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    height: 50,
  },
});
