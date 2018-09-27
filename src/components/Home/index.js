import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import Header from './views/header/Header'
import Footer from './views/footer/Footer'
import Body from './views/body/Body'

export default class Home extends Component {

    static navigationOptions = { title: 'Welcome', header: null };
    render() {
        return (
        <View style={styles.container}>
            <View>
                <Header />
            </View>
            <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                <Body />
            </ScrollView>
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