import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import { useSelector } from 'react-redux';
import { State } from 'react-native-gesture-handler';

export default function HomeScreen() {
  const cardData = useSelector(state => {
    return state
  })

  return (
    <View style={styles.root}>
      <Header />
      {/* <ScrollView>
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView> */}
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
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
})