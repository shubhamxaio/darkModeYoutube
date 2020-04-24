import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MiniCard from '../components/MiniCard';

const SearchScreen = () => {
    const [searchText, setSearchText] = useState("")

    return (
        <View style={styles.root}>
            <View style={styles.searchBar}>
                <Ionicons name='md-arrow-back' size={32} />
                <TextInput
                    value={searchText}
                    onChangeText={(text) => setSearchText(text)}
                    style={styles.input}
                    placeholder='Search Youtube...'
                    placeholderTextColor="#000"
                />
                <Ionicons name='md-mic' size={28} />
            </View>

            <ScrollView>
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    searchBar: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-around',
        elevation: 5,
        backgroundColor: 'white'
    },
    input: {
        width: "70%",
        backgroundColor: '#E6E6E6',
        padding: 3
    }
})

export default SearchScreen