import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class SavedScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>SavedScreen</Text>
            </View>
        );
    }
}
export default SavedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});