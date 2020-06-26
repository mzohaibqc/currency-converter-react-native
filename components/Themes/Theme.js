import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { setTheme } from '../../actions/app.actions';
import selectors from '../../selectors';

function ThemeItem({ theme }) {
  const { title, color } = theme;
  const dispatch = useDispatch();
  const appliedTheme = useSelector(selectors.getTheme);
  return (
    <TouchableOpacity
      style={[styles.item]}
      onPress={() => {
        dispatch(setTheme(theme));
      }}>
      <Text style={styles.title}>{title}</Text>
      <FontAwesomeIcon
        icon={color === appliedTheme.color ? faCheckCircle : faCircle}
        style={{ color }}
        size={22}
      />
    </TouchableOpacity>
  );
}

ThemeItem.propTypes = {
  theme: PropTypes.object,
};

export default ThemeItem;

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 14,
  },
});
