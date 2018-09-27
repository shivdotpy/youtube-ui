import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'
import {Icon} from 'react-native-elements'

export default class Body extends Component {
  render() {

    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height

    console.log(height)

    return (
        <React.Fragment>
        <View style={styles.container}>
            <Image source={require('../../../../assests/home/one.png')} style={{width: width}}/>
            <View style={{flexDirection: 'row', paddingHorizontal: 5, marginTop: 10}}>
                <View>
                    <View style={{height: 30, width: 30, borderRadius: 15, overflow: 'hidden', marginHorizontal: 5}}>
                        <Image source={require('../../../../assests/home/profileone.png')} style={{height: 30, width: 30}}/>
                    </View>
                </View>
                <View style={{flex: 1, marginHorizontal: 5}}>
                    <Text style={{color: '#000000', fontWeight: '400', fontSize: 15}}>Firangi | Amir khan | Thugs of hindostan | Motion Poster </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{fontSize: 13, color: '#787878'}}>CokeStudio </Text>
                        <Icon name="dot-single" type="entypo" color="#787878"/>
                        <Text style={{fontSize: 13, color: '#787878'}}>4.1 M views</Text>
                        <Icon name="dot-single" type="entypo" color="#787878"/>
                        <Text style={{fontSize: 13, color: '#787878'}}>5 days ago</Text>
                    </View>
                    
                </View>
                <View style={{marginHorizontal: 5}}>
                    <Icon name="more-vert" type="material-icon" color="#787878" size={20} />
                </View>
            </View>
        </View>
        
        <View style={styles.container}>
            <Image source={require('../../../../assests/home/two.png')} style={{width: width}}/>
            <View style={{flexDirection: 'row', paddingHorizontal: 5, marginTop: 10}}>
                <View>
                    <View style={{height: 30, width: 30, borderRadius: 15, overflow: 'hidden', marginHorizontal: 5}}>
                        <Image source={require('../../../../assests/home/profileone.png')} style={{height: 30, width: 30}}/>
                    </View>
                </View>
                <View style={{flex: 1, marginHorizontal: 5}}>
                    <Text style={{color: '#000000', fontWeight: '400', fontSize: 15}}>Ud ja kale kawan | Unplugged Cover</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{fontSize: 13, color: '#787878'}}>CokeStudio </Text>
                        <Icon name="dot-single" type="entypo" color="#787878"/>
                        <Text style={{fontSize: 13, color: '#787878'}}>4.1 M views</Text>
                        <Icon name="dot-single" type="entypo" color="#787878"/>
                        <Text style={{fontSize: 13, color: '#787878'}}>5 days ago</Text>
                    </View>
                    
                </View>
                <View style={{marginHorizontal: 5}}>
                    <Icon name="more-vert" type="material-icon" color="#787878" size={20} />
                </View>
            </View>
        </View>
        <View style={styles.container}>
            <Image source={require('../../../../assests/home/one.png')} style={{width: width}}/>
            <View style={{flexDirection: 'row', paddingHorizontal: 5, marginTop: 10}}>
                <View>
                    <View style={{height: 30, width: 30, borderRadius: 15, overflow: 'hidden', marginHorizontal: 5}}>
                        <Image source={require('../../../../assests/home/profileone.png')} style={{height: 30, width: 30}}/>
                    </View>
                </View>
                <View style={{flex: 1, marginHorizontal: 5}}>
                    <Text style={{color: '#000000', fontWeight: '400', fontSize: 15}}>Firangi | Amir khan | Thugs of hindostan | Motion Poster </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{fontSize: 13, color: '#787878'}}>CokeStudio </Text>
                        <Icon name="dot-single" type="entypo" color="#787878"/>
                        <Text style={{fontSize: 13, color: '#787878'}}>4.1 M views</Text>
                        <Icon name="dot-single" type="entypo" color="#787878"/>
                        <Text style={{fontSize: 13, color: '#787878'}}>5 days ago</Text>
                    </View>
                    
                </View>
                <View style={{marginHorizontal: 5}}>
                    <Icon name="more-vert" type="material-icon" color="#787878" size={20} />
                </View>
            </View>
        </View>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
    container : {
        marginVertical: 15,
    }
})