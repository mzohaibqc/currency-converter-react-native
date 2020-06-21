import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight, faLink, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Option from './Option';
import { SCREENS } from '../../constants';

function Options({ navigation }) {
    const pages = [
        {
            title: 'Themes',
            icon: faAngleRight,
            action: () => {
                navigation.navigate(SCREENS.THEMES)
            }
        },
        {
            title: 'Fixer.io',
            icon: faLink,
            action: () => {
                // navigation.navigate(SCREENS.THEMES)
            }
        },
        {
            title: 'Currency List',
            icon: faLink,
            action: () => {
                navigation.navigate(SCREENS.CURRENCIES)
            }
        },
        {
            title: 'Logout',
            icon: faSignOutAlt,
            action: () => {
                navigation.navigate(SCREENS.LOGIN)
            }
    
        },
    ];
    return (
        <View style={styles.options}>
            <View style={styles.content}>
                <FlatList
                    data={pages}
                    renderItem={({ item }) => <Option {...item} />}
                    keyExtractor={item => item.title}
                />
            </View>
        </View>
    )
}

Options.propTypes = {

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
    }
});
