import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCheckCircle,
  faStar,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import SearchBar from 'components/SearchBar';
import Screen from 'components/Screen';
import ListItem from 'components/ListItem';
import ListItemTitle from 'components/ListItemTitle';
import { FlatList, Icon, FavoriteContainer } from 'components/StyledComponents';
import { CURRENCIES, THEMES_MAP } from 'constants';
import { setBaseCurrency, setTargetCurrency } from 'actions/currency.actions';
import { toggleFavorite } from 'actions/app.actions';
import selectors from 'selectors';

function Favorites() {
  const theme = useSelector(selectors.getTheme);
  const favorites = useSelector(selectors.getFavorites);
  const data = Object.values(favorites);
  return (
    <Screen paddingTop="0">
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <ListItem isLast={index === data.length - 1} key={item.code}>
            <ListItemTitle color="#000">
              {item.code} ({item.symbol_native})
            </ListItemTitle>
            <Icon
              icon={faStar}
              color={favorites[item.code] ? THEMES_MAP.Gold.color : '#ccc'}
              size={22}
              style={{ marginLeft: -2, marginRight: 15 }}
            />
          </ListItem>
        )}
        keyExtractor={(item) => item.code}
      />
    </Screen>
  );
}

export default Favorites;
