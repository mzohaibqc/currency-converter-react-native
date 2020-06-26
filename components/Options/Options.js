import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { View, Alert, Linking, FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import {
  faAngleRight,
  faLink,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import Option from './Option';
import { SCREENS } from '../../constants';
import { logout } from '../../actions/app.actions';

function Options({ navigation }) {
  const dispatch = useDispatch();
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
    <View style={styles.options}>
      <View style={styles.content}>
        <FlatList
          data={pages}
          renderItem={({ item }) => <Option {...item} />}
          keyExtractor={(item) => item.title}
        />
      </View>
    </View>
  );
}

Options.propTypes = {
  navigation: PropTypes.object,
};

export default Options;

const styles = StyleSheet.create({
  options: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  header: {
    height: 20,
    // marginTop: 40,
    alignSelf: 'flex-end',
  },
  content: {
    flex: 1,
  },
});
