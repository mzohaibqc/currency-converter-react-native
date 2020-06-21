import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function ThemeItem({ title, color }) {
    return (
        <TouchableOpacity style={styles.item} onPress={() => {
            // TODO: Update Theme here
        }}>
            <Text style={styles.itemText} style={styles.title}>{title}</Text>
            <FontAwesomeIcon icon={faCircle} style={{ color }} size={22} />
        </TouchableOpacity>
    );
}

ThemeItem.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default ThemeItem;


const styles = StyleSheet.create({
    item: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    itemText: {
        fontSize: 24
    },
});

