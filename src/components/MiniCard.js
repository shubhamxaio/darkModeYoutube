import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

const MiniCard = () =>{
    return(
        <View style={styles.root}>
            <Image
                source={{ uri: "https://images.unsplash.com/photo-1530543787849-128d94430c6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" }}
                style={styles.image}
            />
            <View style={styles.videoInfo}>
                <Text style={styles.title} ellipsizeMode='tail' numberOfLines={3}>
                    This is video title</Text>
                <Text style={styles.channelName}>Channel Name</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        margin: 10,
        marginBottom: 0
    },
    image: {
        width: "45%",
        height: 100
    },
    title: {
        fontSize: 17,
        width: Dimensions.get("screen").width/2
    },
    channelName: {
        fontSize: 12
    },
    videoInfo: {
        paddingLeft: 8
    }

})

export default MiniCard