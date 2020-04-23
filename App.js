import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/Home';
import SearchScreen from './src/screens/Search'
import Constant from 'expo-constants'

export default function App() {
  return (
    <View style={styles.root}>
      {/* <HomeScreen /> */}
      <SearchScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: Constant.statusBarHeight
  }
})