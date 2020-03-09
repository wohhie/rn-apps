import React from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  Dimensions,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import axios from 'axios'
import CameraRoll from 'react-native-cameraroll'
import {Ionicons} from '@expo/vector-icons' 
import * as Permissions from 'expo-permissions'
import * as FileSystem from 'expo-file-system'

const { height, width } = Dimensions.get('window')

export default class App extends React.Component{

  constructor() {
    super()
    this.state = {
      isLoading: true,
      images: [],
      scale: new Animated.Value(1),
      isImageFocused: false,

    }

    this.scale = {
      transform: [{scale: this.state.scale}]
    }

    this.actionbarY = this.state.scale.interpolate({
      inputRange: [0.9, 1],
      outputRange: [0, -80]
    })

  }


  loadWallpapers = () => {
    axios.get('https://api.unsplash.com/photos/random?count=10&client_id=mPIJt-rroT5xjDCJDBACqbdmzk831K_weOameL6yv3Q')
    .then(function (response) {
      //  another loading indication
      this.setState({images: response.data, isLoading: false})
    }.bind(this))
    
    .catch(function(error) {
      console.log(error)
    })
    .finally(function() {
      console.log('request completed')
    })
  }


  showControls = (item) => {
    this.setState((state) => ({
      isImageFocused: !state.isImageFocused
    }), () => {
      if (this.state.isImageFocused) {
        Animated.spring(this.state.scale,{
          toValue: 0.9
        }).start()
      }else{
        Animated.spring(this.state.scale,{
          toValue: 1
        }).start()
      }
    })
  }


  componentDidMount() {
    this.loadWallpapers()
  }


  saveToCameraRoll = async image => {
    let cameraPermissions = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    if (cameraPermissions.status !== 'granted') {
      cameraPermissions = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    }

    if (cameraPermissions.status === 'granted') {
      FileSystem.downloadAsync(
        image.urls.regular,
        FileSystem.documentDirectory + image.id + '.jpg'
      )
        .then(({ uri }) => {
          CameraRoll.saveToCameraRoll(uri);
          alert('Saved to photos');
        })
        .catch(error => {
          console.log(error);
          alert(error)

        });
    } else {
      alert('Requires cameral roll permission');
    }
  };


  renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1}}>
        <View style={styles.loadingIndicator}>
          <ActivityIndicator size="large" color="grey" />
        </View>
        <TouchableWithoutFeedback onPress={() => this.showControls(item)}>
          <Animated.View style={[{ width, height}, this.scale]}>
            <Image source={{ uri: item.urls.regular }} style={{ width: null, height: null, flex: 1}} resizeMode="cover"  />
          </Animated.View>
        </TouchableWithoutFeedback>
        
        <Animated.View style={{ left: 0,
            bottom: this.actionbarY,
            right: 0,
            height: 80,
            flexDirection: 'row',
            backgroundColor: 'black',
            position: 'absolute'}}>

            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => this.loadWallpapers() }>
                <Ionicons name="ios-refresh" color="white" size={40} />
              </TouchableOpacity>
            </View>


            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => alert('load image')}>
                <Ionicons name="ios-share" color="white" size={40} />
              </TouchableOpacity>
            </View>


            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => this.saveToCameraRoll(item)}>
                <Ionicons name="ios-save" color="white" size={40} />
              </TouchableOpacity>
            </View>

        </Animated.View>
      </View>
      
      
    )
  }



  render(){
    return this.state.isLoading ? (
      <View style={styles.container}>  
        <ActivityIndicator size="large" color="grey"/>
      </View>
    ) : (
      <View style={styles.wallpaperContainer}>
        <FlatList 
          horizontal
          pagingEnabled
          scrollEnabled={!this.state.isImageFocused}
          data={this.state.images}
          renderItem={this.renderItem}
          keyExtractor={ item => item.id }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  wallpaperContainer: {
    flex: 1,
    backgroundColor: 'black'
  },
  loadingIndicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    alignItems: 'center', 
    justifyContent: 'center'
  },

});