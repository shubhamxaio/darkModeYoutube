import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

const Card = (props) => {
    return (
        <View style={styles.root}>
            <Image
                source={{ uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg` }}
                style={styles.image}
            />
            <View style={styles.videoFooter}>
                <MaterialIcons name='account-circle' size={45} color='#212121' />
                <View style={styles.videoLabel}>
                    <Text style={styles.title} ellipsizeMode="tail" numberOfLines={2}>
                        {props.title}</Text>
                    <Text>{props.channelTitle}</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        marginBottom: 20
    },
    image: {
        width: "100%",
        height: 200
    },
    videoFooter: {
        flexDirection: 'row',
        margin: 5
    },
    videoLabel: {
        marginLeft: 10
    },
    title: {
        fontSize: 20,
        width: Dimensions.get("screen").width - 60
    }
})


export default Card