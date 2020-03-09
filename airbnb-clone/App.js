import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

import ExploreScreen from "./src/screens/ExploreScreen";
import InboxScreen from "./src/screens/InboxScreen";
import SavedScreen from "./src/screens/SavedScreen";
import TripScreen from "./src/screens/TripScreen";
import ProfileScreen from "./src/screens/ProfileScreen";






const switchNavigator = createBottomTabNavigator({
  Explore: {
    screen: ExploreScreen,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-search" color={tintColor} size={24} />
      )
    }
  },


  Saved: {
    screen: SavedScreen,
    navigationOptions: {
      tabBarLabel: 'SAVED',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-heart-empty" color={tintColor} size={24} />
      )
    }
  },

  Trip: {
    screen: TripScreen,
    navigationOptions: {
      tabBarLabel: 'TRIPS',
      tabBarIcon: ({tintColor}) => (
        <Image source={require('./assets/airbnb.png')} style={{ height: 24, width: 24, tintColor:tintColor }} />
      )
    }
  },

  Inbox: {
    screen: InboxScreen,
    navigationOptions: {
      tabBarLabel: 'INBOX',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-chatboxes" color={tintColor} size={24} />
      )
    }
  },

  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-person" color={tintColor} size={24} />
      )
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey', 
    style: {
      backgroundColor: 'white',
      borderWidth: 0,
      shadowOffset: {width: 5, height: 3},
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
}) 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default createAppContainer(switchNavigator)