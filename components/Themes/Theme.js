import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import ListItem from 'components/ListItem';
import ListItemTitle from 'components/ListItemTitle';
import selectors from 'selectors';
import { setTheme } from 'actions/app.actions';

function ThemeItem({ theme, isLast }) {
  const { name, color } = theme;
  const dispatch = useDispatch();
  const appliedTheme = useSelector(selectors.getTheme);
  return (
    <ListItem isLast={isLast}>
      <ListItemTitle color={color}>{name}</ListItemTitle>
      <FontAwesomeIcon
        icon={color === appliedTheme.color ? faCheckCircle : faCircle}
        style={{ color }}
        size={22}
        onPress={() => {
          dispatch(setTheme(theme));
        }}
      />
    </ListItem>
  );
}

ThemeItem.propTypes = {
  theme: PropTypes.object,
  isLast: PropTypes.bool,
};

export default ThemeItem;
