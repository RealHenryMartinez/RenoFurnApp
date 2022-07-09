import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import { FurnitureCard } from '../components/FurnitureCard';
import CameraScreen from './CameraScreen';


let couch1 = require("../assets/couch.png");



export const HomeScreen = () => {
    // function newButton() {
    //     CameraScreen
    // }
  
    return (
    <View style={styles.container}>
      {/* <Button onPress={ newButton } title="a"/>  */}

    <FurnitureCard price={200} />
    <FurnitureCard price={300} image={couch1}/>
    
    {/* <Button 
      title="randomButton" 
      onPress={myButton}
    /> */}

  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });