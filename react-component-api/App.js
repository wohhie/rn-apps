import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Home'

export default function App() {
  return (
    <Home style={styles.container} /> 
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
