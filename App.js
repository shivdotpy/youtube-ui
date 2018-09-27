import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation'
import Home from './src/components/Home/index'

export default createStackNavigator({
  Home: {
    screen: Home
  },
});
