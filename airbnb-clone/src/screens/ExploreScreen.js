import React, { Component, useEffect } from "react";
import { 
    View,
    Text,
    Image,
    SafeAreaView,
    TextInput,
    StyleSheet,
    Platform,
    StatusBar,
    ScrollView,
    Dimensions,
    Animated
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import Category from "../components/Category";
import Home from "../components/Home";
import Tag from "../components/Tag";

const {height, width} = Dimensions.get('window')

class ExploreScreen extends Component {

    
    
    // UNSAFE_componentWillMount() {
    //     this.startHeadingHeight = 80
    //     if (Platform.OS == 'android') {
    //         this.startHeadingHeight = 100 + StatusBar.currentHeight
    //     }
    // }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    {/* header section */}
                    <View style={styles.header}>
                        {/* search bar */}
                        <View style={styles.searchBar}>
                            <Icon name="ios-search" style={styles.searchIcon} size={20} />
                            <TextInput 
                                underlineColor="transparent"
                                placeholder="Try St John's, NL"
                                placeholderTextColor="grey"
                                style={styles.inputStyle}
                            />
                        </View>

                        <Animated.View style={{ flexDirection: 'row', marginHorizontal: 20, position: 'relative, top: 10'}}>
                            <Tag name="Guest" />
                            <Tag name="Dates" />
                        </Animated.View>
                    </View>


                    {/* Scroll Section */}
                    <ScrollView
                        scrollEventThrottle={16}>
                        <View style={styles.innerContent}>
                            <Text style={styles.title}>What can we help you find, Wohhie?</Text>
                        
                            {/* Vertical ScrollView */}
                            <View style={styles.recents}> 
                                <ScrollView 
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}>
                                    <Category 
                                        imageUri={require('../../assets/home.jpg')}
                                        name="Home"
                                    />
                                    <Category 
                                        imageUri={require('../../assets/experiences.jpg')}
                                        name="Experiences"
                                    />
                                    <Category 
                                        imageUri={require('../../assets/restaurant.jpg')}
                                        name="Restaurant"
                                    />
                                    <Category 
                                        imageUri={require('../../assets/home.jpg')}
                                        name="Resorts"
                                    />
                                </ScrollView>
                            </View>

                            <View style={styles.airbnbContent}>
                                <Text style={styles.airbnbTitle}>
                                    Introducing Airbnb Plus
                                </Text>
                                <Text style={styles.airbnbSubTitle}>A new selection of homes verfied for quality & comfort</Text>
                                <View style={{ marginTop: 5, width: width - 40, height: 200}}>
                                    <Image style={styles.airbnbImage} source={require('../../assets/home.jpg')} />
                                </View>
                            </View>


                            <View style={styles.innerContent}>
                                <Text style={styles.title}>Homes around the world</Text>
                    
                                <View style={styles.homeContainer}>
                                    <Home 
                                        width={width}
                                        name="The Cozy Palace"
                                        type="PRIVATE ROOM - 2 BED" 
                                        price={82}
                                        rating={3.5}
                                        />

                                    <Home 
                                        width={width}
                                        name="The Single Palace"
                                        type="SINGLE ROOM - 3 BED" 
                                        price={131}
                                        rating={4.5}
                                        />

                                    <Home 
                                        width={width}
                                        name="The Cozy Palace"
                                        type="PRIVATE ROOM - 2 BED" 
                                        price={82}
                                        rating={3.5}
                                        />
                                    
                                </View>
                            </View>
                        </View>



                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
export default ExploreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 80,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd'
        
    },
    searchBar: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        marginHorizontal: 20,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 1,
        marginTop: 10
    },
    inputStyle: {
        flex: 1,
        fontWeight: '700',
        backgroundColor: 'white'
    },
    searchIcon: {
        marginRight: 10
    },

    innerContent: {
        flex: 1,
        backgroundColor: 'white', 
        paddingTop: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: '700',
        paddingHorizontal: 20
    },
    recents: {
        height: 130,
        marginTop: 20
    },

    airbnbContent: {
        marginTop: 20,
        paddingHorizontal: 20,
    },

     
    airbnbSubTitle: {
        fontWeight: '200',
        marginTop: 5,
    },
    airbnbImage: {
        flex: 1,
        height: null,
        width: null, 
        resizeMode: 'cover',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#dddddd'
    },

    airbnbTitle: {
        fontSize: 24,
        fontWeight: '700',
    },

    homeContainer: {
        marginTop: 30, 
        paddingHorizontal: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },


});