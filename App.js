import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation'
import Home from './src/components/Home/index'
import Trending from './src/components/Trending/index'

export default createStackNavigator({
  Home: {
    screen: Home
  },
  Trending: {
    screen: Trending
  },
  
  
});
