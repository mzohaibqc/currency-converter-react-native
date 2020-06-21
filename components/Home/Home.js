import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faArrowsAltV } from '@fortawesome/free-solid-svg-icons';
import CurrencyInput from '../CurrencyInput';

import logo from '../../assets/currency-logo.png';
import exchangeIcon from '../../assets/exchange.png';

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
              <View style={styles.conversionContainer}>
                  <CurrencyInput code="USD" />
                  {/* <FontAwesomeIcon icon={faArrowsAltV} /> */}
                  <Image source={exchangeIcon} style={styles.exchangeIcon} />
                  <CurrencyInput code="PKR" />
              </View>
            </View>
        </View>
    )
}

Home.propTypes = {

};

export default Home;

const styles = StyleSheet.create({
    home: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ccc' },
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
        color: '#fff',
    },
    logo: {
        width: 250,
        height: 250
    },
    content: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        padding: 10
    },
    conversionContainer: {
        marginTop: 20
    },
    exchangeIcon: {
        marginLeft: -5,
        transform: [{ scale: 0.7 }]
    }
});
