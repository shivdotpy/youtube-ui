import React, { Component } from 'react'
import { Image, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.constainer}>
        <View style={{flexDirection: 'row'}}>
            <Image source={require('../../../../assests/logo.png')} style={{height: 35, width: 35}}/>
            <Text style={{fontFamily: 'sans-serif-condensed', fontWeight:'bold', color: '#000000', fontSize: 23, paddingHorizontal: 10}}>YouTube</Text>
        </View>
        <View style={{flex: 1}}>

        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{paddingHorizontal: 5}}>
            
            <Icon
              name='video-camera'
              type='font-awesome'
              color='#787878'
              size={22}
            />
          </View>
          <View style={{paddingHorizontal: 5}}>
            <Icon
              name='magnify'
              type='material-community'
              color='#787878'
              size={23}
            />
          </View>
          <View style={{paddingHorizontal: 5}}>
            <Icon
              name='user-circle'
              type='font-awesome'
              color='#787878'
              size={23}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = {
    constainer: {
        height: 50,
        borderBottomWidth: 1,
        elevation: 1,
        borderBottomColor: '#cccccc',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    }
}