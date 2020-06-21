import React, { useState, useCallback } from 'react';
import { TouchableOpacity, Text, View, FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar';
import { CURRENCIES } from '../../constants';


function CurrencyList({ navigation }) {
    const [data, setData] = useState(CURRENCIES);
    const filterData = useCallback(
        (search) => {
            setData(CURRENCIES.filter(item => item.name.includes(search) || item.code.includes(search)))
        },
        [CURRENCIES],
    )
    return (
        <View style={styles.options}>
            <SearchBar onChange={filterData} />
            <View style={styles.content}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.item} onPress={() => {
                        // TODO: set base currency
                    }}>
                        <Text style={styles.itemText} style={styles.title}>{item.code}</Text>
                        <View>
                            <Text style={styles.itemText} style={styles.title}>{item.symbol_native}</Text>
                        </View>
                    
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.code}
            />
            </View>
            
        </View>
    )
}

CurrencyList.propTypes = {

};

export default CurrencyList;

const styles = StyleSheet.create({
    options: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    content: {
        flex: 1,
    },
    header: {
        height: 20,
        marginTop: 40,
        alignSelf: 'flex-end',
    },
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
