import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import MainScreen from './screens/MainScreen'


class App extends Component {
    render() {
        return (
            <View style={{ flex: 1}}>
                <MainScreen />
            </View>
        );
    }
}

const styles = StyleSheet.create({


})

export default App
