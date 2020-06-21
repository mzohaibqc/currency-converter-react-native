import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

function Home({ navigation }) {
    return (
        <View style={styles.home}>
            <View style={styles.header}>
                <Text
                    onPress={() => navigation.navigate('Options')}
                >Go To Options</Text>
            </View>
            <View style={styles.content}>
                <Text>Home Content2</Text>
            </View>
        </View>
    )
}

Home.propTypes = {

};

export default Home;

const styles = StyleSheet.create({
    home: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    header: {
        height: 20,
        marginTop: 40,
        alignSelf: 'flex-end',
    },
    content: {
        flex: 1,
    },
});
