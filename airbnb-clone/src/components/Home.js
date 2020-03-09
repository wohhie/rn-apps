import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image, 
} from "react-native";
import StarRating from "react-native-star-rating";


class Home extends Component {
    render() {
        return (
            <View>
                <View style={{ width: this.props.width / 2 - 30, height: this.props.width / 2 - 30, borderWidth: 0.5, borderColor: '#dddddd', marginTop: 10}}>
                    <View style={{ flex: 1}}>
                        <Image style={styles.homeImage} source={require('../../assets/home.jpg')} />
                    </View>
                    <View style={styles.homeContainer}>
                        <Text style={styles.homeTitle}>{this.props.type}</Text>
                        <Text style={styles.homeSubTitle}>{this.props.name}</Text>
                        <Text style={styles.homePrice}>{this.props.price}$</Text>
                        <StarRating
                            disable={true}
                            maxStars={5}
                            rating={this.props.rating}
                            starSize={10} />
                    </View>
                </View>
            </View>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },


    airbnbTitle: {
        fontSize: 24,
        fontWeight: '700',
    },

    homeContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        paddingLeft: 10
    },

    homeImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover', 
    },

    homeTitle: {
        fontSize: 10,
        color: '#b63838',
    },

    homeSubTitle: {
        fontSize: 12,
        fontWeight: 'bold',
    },

    homePrice: {
        fontSize: 10
    }
});