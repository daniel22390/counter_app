import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Counters from './screens/counters/Counters'
import Config from './screens/config/Config'
import Icon from './interface/icon/Icon'

const stackConfig = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#011C47',
      height: 80,
      
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      marginTop: 37,
      flexDirection: "column",
      alignItems: 'flex-end',
      fontSize: 28,
    }
  },
  headerLayoutPreset: 'left'
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
    activeTintColor: '#F0980C',
    inactiveTintColor: '#8E92AF',
    style: {
      backgroundColor: '#011C47',
      paddingBottom: 10,
      borderTopWidth: 0,
      height: 60
    }
  },
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      return <Icon icon="star" size={25} style={{ color: tintColor }} set="Foundation" />
    }
  }),
}

const tabNavigator = createBottomTabNavigator({
  Counters: counterStackNavigator,
  Config: configStackNavigator
}, tabConfig);

export default createAppContainer(tabNavigator);