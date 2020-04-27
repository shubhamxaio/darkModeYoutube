import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../components/Header'
import Card from '../components/Card'


const VideoPlayer = () => {
    return(
        <View style={styles.root}>
            <Header />

        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
})

export default VideoPlayer