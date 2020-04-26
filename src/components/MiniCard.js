import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

const MiniCard = (props) => {
    return (
        <View style={styles.root}>
            <Image
                source={{ uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg` }}
                style={styles.image}
            />
            <View style={styles.videoInfo}>
                <Text style={styles.title} ellipsizeMode='tail' numberOfLines={3}>
                    {props.title}</Text>
                <Text style={styles.channelName}>{props.channelTitle}</Text>
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
        width: Dimensions.get("screen").width / 2
    },
    channelName: {
        fontSize: 12
    },
    videoInfo: {
        paddingLeft: 8
    }

})

export default MiniCard