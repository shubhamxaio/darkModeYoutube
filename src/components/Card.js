import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

const Card = () => {
    return (
        <View style={styles.root}>
            <Image
                source={{ uri: "https://images.unsplash.com/photo-1530543787849-128d94430c6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" }}
                style={styles.image}
            />
            <View style={styles.videoFooter}>
                <MaterialIcons name='account-circle' size={45} color='#212121' />
                <View style={styles.videoLabel}>
                    <Text style={styles.title} ellipsizeMode="tail" numberOfLines={2}>
                        This is the video title</Text>
                    <Text>Channel Name</Text>
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
    videoLabel:{
        marginLeft: 10
    },
    title: {
        fontSize: 20,
        width: Dimensions.get("screen").width - 60
    }
})


export default Card