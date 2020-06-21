import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

function Option({ title, icon, action }) {
    return (
        <TouchableOpacity style={styles.item} onPress={action}>
            <Text style={styles.itemText} style={styles.title}>{title}</Text>
            <FontAwesomeIcon icon={icon} />
        </TouchableOpacity>
    );
}

Option.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.any,
    action: PropTypes.func.isRequired,
};

export default Option;


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
    }
});

