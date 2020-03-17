import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class FlatList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>FlatList</Text>
            </View>
        );
    }
}
export default FlatList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});