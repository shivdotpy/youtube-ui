import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import {Icon} from 'react-native-elements';

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity>
            <Icon name="home" type="entypo" size={23} color="#ff0000"/>
            <Text style={{color: "#ff0000"}}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
            <Icon name="fire" type="material-community" size={23} color="#787878"/>
            <Text style={styles.footerText}>Trending</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
            <Icon name="subscriptions" type="material-icons" size={23} color="#787878"/>
            <Text style={styles.footerText}>Subscription</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
            <Icon  name="mail" type="material-icons" size={23} color="#787878"/>
            <Text style={styles.footerText}>Inbox</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
            <Icon  name="folder" type="material-icons" size={23} color="#787878"/>
            <Text style={styles.footerText}>Library</Text>
        </TouchableOpacity>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderTopColor: '#D3D3D3',
        borderTopWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    footerText: {
        fontSize: 12
    }
})