import React, { Component } from "react";
import { 
    View,
    Text,
    SafeAreaView,
    FlatList,
    StyleSheet
} from "react-native";


// inserting some data information
const DATA = [
    {
        id: 'bd7acbea',
        title: 'First Item'
    },
    {
        id: '3ac68afc',
        title: 'Second Item',
    },
    {
        id: '58694a0f',
        title: 'Third Item'
    }
]


function Item({ title }){
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}




class FlatList extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList 
                    data={DATA}
                    renderItem={({item}) => 
                        <Item title={item.title} />
                    }

                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
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