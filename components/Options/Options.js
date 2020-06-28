import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Linking } from 'react-native';
import PropTypes from 'prop-types';
import {
  faAngleRight,
  faLink,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import Option from 'components/Options/Option';
import Screen from 'components/Screen';
import selectors from 'selectors';
import { SCREENS } from 'constants';
import { logout } from 'actions/app.actions';


function Options({ navigation }) {
  const dispatch = useDispatch();
  const theme = useSelector(selectors.getTheme);
  const openLink = useCallback(async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Unable to open url: ${url}`);
    }
  }, []);
  const pages = [
    {
      title: 'Themes',
      icon: faAngleRight,
      action: () => {
        navigation.navigate(SCREENS.THEMES);
      },
    },
    {
      title: 'Favorite Currencies',
      icon: faAngleRight,
      action: () => {
        navigation.navigate(SCREENS.FAVORITES);
      },
    },
    {
      title: 'ExchangeRatesApi.io',
      icon: faLink,
      action: () => {
        openLink('https://exchangeratesapi.io');
      },
    },
    {
      title: 'Logout',
      icon: faSignOutAlt,
      action: () => {
        dispatch(logout.pending()); // Logout
      },
    },
  ];
  return (
    <Screen backgroundColor={theme.color}>
      {pages.map((item,  index) => (
          <Option {...item} isLast={index === pages.length - 1} key={item.title} />
      ))}
    </Screen>
  );
}

Options.propTypes = {
  navigation: PropTypes.object,
};

export default Options;
