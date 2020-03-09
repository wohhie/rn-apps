import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class TripScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>TripScreen</Text>
            </View>
        );
    }
}
export default TripScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});