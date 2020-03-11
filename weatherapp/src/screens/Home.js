import React, { Component } from "react";
import { 
    View,
    Text,
    Image,
    StatusBar,
    TextInput,
    StyleSheet
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";


// Background Photos for weathers
const iconsName = {
    Clear: "ios-sunny",
    Rain: "ios-rainy",
    thunderstorm:'ios-thunderstorm-outline',
    Clouds: 'ios-cloud-outline',
    Snow:'ios-snow-outline',
    Drizzle:'ios-umbrella-outline',
    Haze: 'md-cloudy'
}

const imagePicture = {
    Clear: require("./images/bg/clear.jpg"),
    Clouds: require("./images/bg/cloud.jpg"),
    Drizzle: require("./images/bg/drizzle.jpg"),
    Haze: require("./images/bg/Haze.jpg"),
    Rain: require("./images/bg/rain.jpg"),
    Snow: require("./images/bg/snow.jpg"),
    thunderstorm: require("./images/bg/thunderstorm.jpg"),
}


class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            city2: 'tokyo',
            city: "default",
            country: "US",
            pressure: "1013.76",
            temp: 25,
            tempMax: '',
            tempMin: '',
            weather: "Clear",
            windSpeed: 5.52,
            isVisible: true
        }
    }


    componentDidMount(){
        this.getLocation()
        console.log(this.state.city2);
    }

    getLocation = () => {

    }


    render() {
        console.log(this.state.weather)
        console.log(this.state.city)

        return (
            <Image source={}>

            </Image>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});