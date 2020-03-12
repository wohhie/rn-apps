import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

class NoteScreen extends Component {
    render() {
        return (
            <View key={this.props.id} style={styles.noteStyle}>
                <Text style={styles.noteTextStyle}>{this.props.val.date}</Text>
                <Text style={styles.noteTextStyle}>{this.props.val.note}</Text>

                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                    <Text style={styles.nodeDeleteStyle}>x</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    noteStyle: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },

    noteTextStyle: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#e91363'
    },

    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e91363',
        padding: 10,
        top: 20,
        bottom: 10,
        right: 10,
        borderRadius: 50,
        width: 35,
        height: 35,
    },

    nodeDeleteStyle: {
        color: 'white',
        fontSize: 15
    }

})


export default NoteScreen
