import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ActivityIndicator, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MiniCard from '../components/MiniCard';

const SearchScreen = () => {

    const [searchText, setSearchText] = useState("")
    const [miniCardData, setMiniCardData] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchData = () => {
        setLoading(true)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchText}&type=video&key=AIzaSyD1brUtYkJ-JCBuOUbtWRDsQ4Wnf1Q5DIY`
        ).then(res => res.json()).then(data => {
            
            setLoading(false)
            setMiniCardData(data.items)
        }).catch(err => console.log(err))
    }

    const handleOnChangeSearch = (text) => {
        setSearchText(text)
        // fetchData()
    }

    return (
        <View style={styles.root}>
            <View style={styles.searchBar}>
                <Ionicons name='md-arrow-back' size={32} />
                <TextInput
                    value={searchText}
                    onChangeText={(text) => {handleOnChangeSearch(text)}}
                    style={styles.input}
                    placeholder='Search Youtube...'
                    placeholderTextColor="#000"
                />
                <Ionicons name='md-send' size={28} onPress={() => fetchData()} />
            </View>

            {/* <ScrollView>
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
            </ScrollView> */}

            {loading ?
                <View style={styles.container}>
                    <ActivityIndicator size='large' color="red" />
                </View>
                : null}
            <FlatList
                data={miniCardData}
                renderItem={({ item }) => {
                    return <MiniCard
                        videoId={item.id.videoId}
                        title={item.snippet.title}
                        channelTitle={item.snippet.channelTitle}
                    />
                }}
                keyExtractor={item => item.id.videoId}
            // refreshing={loading}
            // onRefresh={()=>fetchData()}
            />

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
    },
    container: {
        flex: 1,
        justifyContent: "center"
    }
})

export default SearchScreen

// AIzaSyD1brUtYkJ-JCBuOUbtWRDsQ4Wnf1Q5DIY