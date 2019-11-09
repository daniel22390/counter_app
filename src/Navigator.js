import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Counters from './screens/counters/Counters'
import Config from './screens/config/Config'

const stackConfig = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#1c355b',
      height: 130,
      
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      marginTop: 80,
      flexDirection: "column",
      alignItems: 'flex-end',
      fontSize: 28
    }
  }
}

const counterStackNavigator = createStackNavigator({
  Counters: {
    screen: Counters,
    navigationOptions: ({ navigation }) => ({
      title: 'Counters',
      headerBackTitle: null,
    })
  }
}, stackConfig)

const configStackNavigator = createStackNavigator({
  Config: {
    screen: Config,
    navigationOptions: ({ navigation }) => ({
      title: 'Config',
      headerBackTitle: null,
    })
  }
}, stackConfig)

tabConfig = {
  tabBarOptions: {
    activeTintColor: '#fe9400',
    inactiveTintColor: '#8e8e93',
    style: {
      backgroundColor: '#1c355b',
      paddingBottom: 10,
      borderTopWidth: 0
    }
  }
}

const tabNavigator = createBottomTabNavigator({
  Counters: counterStackNavigator,
  Config: configStackNavigator
}, tabConfig);

export default createAppContainer(tabNavigator);