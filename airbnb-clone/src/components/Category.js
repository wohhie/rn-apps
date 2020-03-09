import React, { Component } from "react";
import { 
    View,
    Text,
    Image,
    StyleSheet
} from "react-native";

class Category extends Component {
    render() {
        return (
            <View style={styles.recentContent}>
                <View style={{flex: 2}}><Image style={styles.recentImage} source={this.props.imageUri} /></View>
                <View style={{flex: 1}}><Text style={styles.recentTitle}>{this.props.name}</Text></View>
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    recentContent: {
        width: 130,
        height: 130,
        marginLeft: 20,
        borderWidth: 0.5,
        borderColor: '#dddddd'
    },
    recentImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    recentTitle: {
        paddingLeft: 10,
        paddingTop: 10,
        flex: 1,
    }
});