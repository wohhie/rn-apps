import React, { Component } from "react";
import { 
    View,
    Text,
    Image,
    StatusBar,
    TextInput,
    ImageBackground,
    ActivityIndicator,
    StyleSheet
} from "react-native";
import moment from 'moment'
import countryData from 'country-data'
import { fetchWeather, fetchWeatherByCity } from '../api/weather'
import Icon from "react-native-vector-icons/Ionicons";

const { countries } = countryData

// icon Photos for weathers
const iconName = {
    Clear: "ios-sunny",
    Rain: "ios-rainy",
    thunderstorm:'ios-thunderstorm',
    Clouds: 'ios-cloud-outline',
    Snow:'ios-snow',
    Drizzle:'ios-umbrella',
    Haze: 'md-cloudy'
}

const imagePicture = {
    Clear: require("../../assets/bg/clear.jpg"),
    Clouds: require("../../assets/bg/cloud.jpg"),
    Drizzle: require("../../assets/bg/drizzle.jpg"),
    Haze: require("../../assets/bg/Haze.jpg"),
    Rain: require("../../assets/bg/rain.jpg"),
    Snow: require("../../assets/bg/snow.jpg"),
    thunderstorm: require("../../assets/bg/thunderstorm.jpg"),
}


class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            city2: 'tokyo',
            city: "Dhaka",
            country: "US",
            pressure: "1013.76",
            temp: 25,
            tempMax: 23,
            tempMin: 16,
            weather: "Clear",
            windSpeed: 5.52,
            isVisible: true,


            hideStatusBar: true,
            loading: true,
        }
    }


    UNSAFE_componentWillMount(){
        this.getLocation()
        console.log(this.state.city2);
        this.setState({
            loading: false
        })
    }

    getLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (posData) => fetchWeather(posData.coords.latitude, posData.coords.longitude)
            .then(res => {
                this.setState({
                    city: res.city,
                    country: res.country,
                    pressure: res.pressure,
                    temp: Math.round(res.temp),
                    tempMax: res.tempMax,
                    tempMin: res.tempMin,
                    weather: res.weather,
                    windSpeed: res.windSpeed,
                })

                console.log(res);
                
            }), 
            (error) => console.log(error),
            {timeout: 10000}
        )
    }


    onSubmitEditing(location){
        fetchWeatherByCity(location)
        .then(res => {
            this.setState({
                city: location,
                country: res.country,
                pressure: res.pressure,
                temp: Math.round(res.temp),
                tempMin: res.tempMin,
                tempMax: res.tempMax,
                weather: res.weather,
                windSpeed: res.windSpeed
            })
        }),
        (error) => console.log(error),
        {timeout: 1000}
    }


    render() {
        return (
            
            <ImageBackground source={imagePicture[this.state.weather]} style={styles.container}>
                <ImageBackground source={require('../../assets/shadow.png')} style={styles.container2}>
                    <StatusBar hidden={this.state.hideStatusBar} />
                    {/* Header Section */}
                    <View style={styles.header}>
                        <TextInput 
                            style={{
                                height: 40,
                                borderColor: "grey",
                                borderWidth: 1,
                                paddingHorizontal: 10,
                                width: '100%'
                            }}
                            placeholder="search other cities"
                            onSubmitEditing={(event) => this.onSubmitEditing(event.nativeEvent.text)}
                        />
                        
                        {/* state information with temperature */}
                        <View style={styles.temperature}>
                            <Icon style={styles.icon} name ={iconName[this.state.weather]} size={100}/>
                            <Text style={styles.temp}>{ this.state.temp }&deg;C</Text>
                        </View>
                        <Text style={styles.city}>{ this.state.city }</Text>
                        <Text style={styles.country}>{ this.state.country }</Text>
                    </View>
                
                    <View style={styles.body}>
                        <Text style={styles.date}>{moment().format('llll')}</Text>
                    
                        <View style={styles.bodyContainer}>
                            <View style={styles.columnBody}>
                                 <Text style={styles.textTop}>Pressure</Text>
                                 <Text style={styles.textBottom}>{ this.state.pressure} hPa</Text>
                            </View>

                            <View style={styles.columnBody}>
                                 <Text style={styles.textTop}>Wind Speed</Text>
                                 <Text style={styles.textBottom}>{ this.state.windSpeed} km/h</Text>
                            </View>

                            <View style={styles.columnBody}>
                                 <Text style={styles.textTop}>Min Temp</Text>
                                 <Text style={styles.textBottom}>{ this.state.tempMin} &deg;C</Text>
                            </View>

                            <View style={styles.columnBody}>
                                 <Text style={styles.textTop}>Map Temp</Text>
                                 <Text style={styles.textBottom}>{ this.state.tempMax} &deg;C</Text>
                            </View>
                        </View>
                    </View>
                
                </ImageBackground>
            </ImageBackground>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
      width: '100%',
      flexWrap: "wrap",
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },

    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    container2: {
      width: '100%',
      flexWrap: "wrap",
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    
    header:{
      width: '100%',
      display: 'flex',
      alignItems: "flex-start",
      justifyContent: "center",
      paddingHorizontal: 20,
      flex: 1
    },
    city:{
      backgroundColor: 'transparent',
      color: "white",
      fontSize: 45,
      fontWeight: '600',
    },
    country:{
      backgroundColor: 'transparent',
      color: "white",
      fontSize: 30,
    },
    temp:{
      backgroundColor: 'transparent',
      paddingVertical: 10,
      paddingLeft: 45,
      color: "white",
      fontSize: 70,
      fontWeight: "300"
    },

    temperature: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },


    body: {
        width: '100%',
        paddingVertical: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    date: {
        color: 'white',
        fontSize: 20,
        paddingVertical: 20,
    },

    bodyContainer:{
      paddingHorizontal:20,
      width:'100%',
      flexDirection: "row",
      justifyContent: 'space-between'
    },
     columnBody:{
       justifyContent: 'center',
       alignItems:'center',
    },
     textTop: {
       paddingHorizontal: 20,
       color: 'white',
       fontSize: 16,
       alignSelf: 'flex-start'
     },
     textBottom: {
       paddingHorizontal: 20,
       color: 'white',
       fontSize: 16,
       fontWeight: "500",
       alignSelf: 'flex-start',
       paddingVertical: 20,
    },
    icon:{
      alignSelf: 'center',
      paddingTop: 50,
      color: 'black'
    },

});