import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

function Options({ navigation }) {
    return (
        <View style={styles.options}>
            <View style={styles.content}>
                <Text>Options Content</Text>
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
        marginTop: 40,
        alignSelf: 'flex-end',
    },
    content: {
        flex: 1,
    },
});
