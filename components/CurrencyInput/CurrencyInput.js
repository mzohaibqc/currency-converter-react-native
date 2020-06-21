import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

function CurrencyInput({ onChange, code }) {
    const [search, setSearch] = useState('');
    const onSearch = useCallback(
        (value) => {
            setSearch(value);
            if (onChange) onChange(value);
        },
        [onChange],
    )
    return (
        <View style={styles.container}>
            <View style={styles.codeContainer}>
                <Text style={styles.code}>{code}</Text>
            </View>
            <View style={styles.inputContainer}>

            </View>
            <TextInput
                style={styles.input}
                placeholder="Search..."
                onChangeText={onSearch}
                underlineColorAndroid="transparent"
                value={search}
            />
        </View>
    );
}

CurrencyInput.propTypes = {
    onChnage: PropTypes.func,
    onClear: PropTypes.func,
};

export default CurrencyInput;


const styles = StyleSheet.create({
    container: {
        height: 40,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 3,
    },
    codeContainer: {
        padding: 10,
        width: 60,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
        height: 40,
        borderRightWidth: 1,
        borderRightColor: '#eee',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    code: {
        color: '#000'
    },
    inputContainer: {
        // flex: 1
        padding: 5,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
        height: 40,
        borderRadius: 3,
    },
});

