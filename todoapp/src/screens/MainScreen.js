import React, { Component } from 'react';
import {Text, View, ScrollView, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import NoteScreen from './NoteScreen';

class MainScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            noteArray: [],
            noteText: '',
        }
    }


    addNote() {
        if (this.state.noteText){
            var date = new Date()
            this.state.noteArray.push({
                'date': date.getFullYear() + '-' + date.getMonth() + "-" + date.getDate(),
                'note': this.state.noteText
            })

            this.setState({ noteArray: this.state.noteArray })
            this.setState({ noteText: ''})
        }
    }

    deleteNote(key) {
        this.state.noteArray.splice(key, 1)
        this.setState({
            noteArray: this.state.noteArray
        })
    }


    render() {

        const notes = this.state.noteArray.map((val, key) => {
            return <NoteScreen key={key} id={key} val={val} deleteMethod={() => this.deleteNote(key)}  />
        })


        return (
            <View style={styles.container}>
                <View style={styles.headerStyle}>
                    <Text style={styles.headerTextStyle}>TODO APP</Text>
                </View>


                <ScrollView style={styles.scrollViewStyle}>
                    {notes}
                </ScrollView>

                <View style={styles.bottomStyle}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Welcome"
                        onChangeText={(noteText) => this.setState({ noteText })}
                        value={this.state.noteText}
                    />
                </View>


                <TouchableOpacity style={styles.btnStyle} onPress={ this.addNote.bind(this)}>
                    <Text style={styles.btnTextStyle}>+</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerStyle: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 5,
        borderBottomColor: '#ddd'
    },
    headerTextStyle: {
        color: 'white',
        fontSize: 18,
        padding: 20,
        paddingTop: 30,
        fontWeight: 'bold'
    },
    scrollViewStyle: {
        flex: 1,
        marginBottom: 100,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    inputStyle: {
        alignSelf: 'stretch',
        color: '#FFF',
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
        padding: 20,
    },
    btnStyle: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        width: 55,
        height: 55,
        borderRadius: 50,
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    btnTextStyle: {
        color: '#fff',
        fontSize: 24
    }

})

export default MainScreen
