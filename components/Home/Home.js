import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/currency-logo.png';

function Home({ navigation }) {
    return (
        <View style={styles.home}>
            <View style={styles.header}>
                <FontAwesomeIcon style={styles.optionsIcon} icon={ faCog } size={20} onPress={() => navigation.navigate('Options')}/>
            </View>
            <View style={styles.content}>
              <View style={styles.logo}>
                <Image source={logo} style={styles.logo} />
              </View>
            </View>
        </View>
    )
}

Home.propTypes = {

};

export default Home;

const styles = StyleSheet.create({
    home: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
    header: {
        height: 20,
        marginTop: 40,
        alignSelf: 'flex-end',
    },
    header: {
        height: 20,
        marginTop: 10,
        alignSelf: 'flex-end',
    },
    optionsIcon: {
        marginRight: 10,
        color: '#506d79',
    },
    logo: {
        width: 250,
        height: 250
    },
    content: {
        flex: 1,
    },
});
