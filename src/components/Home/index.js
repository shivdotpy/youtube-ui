import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Header from './views/header/Header'
import Footer from './views/footer/Footer'

export default class Home extends Component {

    static navigationOptions = { title: 'Welcome', header: null };
    render() {
        return (
        <View style={styles.container}>
            <View>
                <Header />
            </View>
            <View style={{flex: 1}}>
                <Text>Body</Text>
            </View>
            <View>
                <Footer />
            </View>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1
    }
})