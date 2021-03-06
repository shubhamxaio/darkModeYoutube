import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/Home';
import SearchScreen from './src/screens/Search';
import Explore from './src/screens/Explore';
import Subscribe from './src/screens/Subscribe';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './src/reducers/reducer';


const store = createStore(reducer)
const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const RootHome = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = 'home'
          } else if (route.name === 'explore') {
            iconName = 'explore'
          } else if (route.name === 'subscribe') {
            iconName = 'subscriptions'
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name='home' component={HomeScreen} />
      <Tabs.Screen name='explore' component={Explore} />
      <Tabs.Screen name='subscribe' component={Subscribe} />
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    // <View style={styles.root}>
    //   <HomeScreen />
    //   {/* <SearchScreen /> */}
    // </View>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name='rootHome' component={RootHome} />
          <Stack.Screen name='search' component={SearchScreen} />
          {/* <Stack.Screen name='rootHome' component={RootHome} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
