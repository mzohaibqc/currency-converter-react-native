import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ThemeItem from './Theme';
import { THEMES } from '../../constants';

function Themes({ navigation }) {
  return (
    <View style={styles.options}>
      <View style={styles.content}>
        <FlatList
          data={THEMES}
          renderItem={({ item }) => (
            <ThemeItem theme={item} navigate={navigation.navigate} />
          )}
          keyExtractor={(item) => item.title}
        />
      </View>
    </View>
  );
}

Themes.propTypes = {};

export default Themes;

const styles = StyleSheet.create({
  options: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  header: {
    height: 20,
    marginTop: 40,
    alignSelf: 'flex-end',
  },
});
