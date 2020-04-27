import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import { useSelector } from 'react-redux';

const LittleCard = ({ name }) => {
    return (
        <View style={styles.cardRoot}>
            <Text style={styles.cardText}>{name}</Text>
        </View>
    )
}

const Explore = () => {
    const cardData = useSelector(state => {
        return state
    })

    return (
        <View style={styles.root}>
            <Header />
            <ScrollView>
                <View style={styles.cardsView}>
                    <LittleCard name='Gaming' />
                    <LittleCard name='Trending' />
                    <LittleCard name='Music' />
                    <LittleCard name='News' />
                    <LittleCard name='Movies' />
                    <LittleCard name='Fashion' />
                </View>

                <Text style={styles.textTrending}> Trending Videos</Text>

                <FlatList
                    data={cardData}
                    renderItem={({ item }) => {
                        return <Card
                            videoId={item.id.videoId}
                            title={item.snippet.title}
                            channelTitle={item.snippet.channelTitle}
                        />
                    }}
                    keyExtractor={item => item.id.videoId}
                />
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    cardRoot: {
        backgroundColor: 'red',
        width: 180,
        height: 50,
        marginTop: 10,
        borderRadius: 4
    },
    cardText: {
        textAlign: "center",
        fontSize: 22,
        color: "white",
        marginTop: 5
    },
    cardsView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    textTrending: {
        margin: 8,
        fontSize: 22,
        borderBottomWidth: 1
    }
})

export default Explore