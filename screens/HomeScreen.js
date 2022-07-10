import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Button, FlatList, TouchableHighlight, Modal, Pressable, Alert, SectionList } from 'react-native';
// import { TouchableHighlight } from 'react-native-web';

import { FurnitureCard } from '../components/FurnitureCard';
import CameraScreen from './CameraScreen';


let furniture1 = require("../assets/couch.png");
let furniture2 = require("../assets/wardrobe.png");
let furniture3 = require("../assets/wardrobe2.png");
let furniture4 = require("../assets/wardrobe3.png");
let furniture5 = require("../assets/wardrobe4.png");


export const HomeScreen = () => {
    // function newButton() {
    //     CameraScreen
    // }
    const [furnitureCardInfo, setFurnitureCardInfo] = useState([
        { price: "200", image: furniture1, material: "wood"},
        { price: "230", image: furniture2, material: "metal"},
        { price: "240", image: furniture3, material: "plastic" },
        { price: "250", image: furniture4, material: "wood" },
        { price: "260", image: furniture5, material: "wood" },   
    ])

    const [modalVisible, setModalVisible] = useState(false);
  
    return (
    <View style={styles.container}>
      {/* <Button onPress={ newButton } title="a"/>  */}

    {/* <FurnitureCard price={200} />
    <FurnitureCard price={300} image={couch1}/> */}
      <Modal
        style = { styles.imagestyle }
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
         {/* style={styles.modalText} */}
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>
            <SectionList 
          sections={[
            { price: ["200"], image: furniture1, material: ["wood"]},
            { price: ["230"], image: furniture2, material: ["metal"]},
            { price: ["240"], image: furniture3, material: ["plastic"] },
            { price: ["250"], image: furniture4, material: ["wood"] },
            { price: ["260"], image: furniture5, material: ["wood"] }, 
          ]} // parameter -> item being passed -> render item //
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          // keyExtractor={(item, index) => `basicListEntry-${item.title}`}
        />
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    <FlatList 
        data = { furnitureCardInfo } 
        renderItem = {({ item }) => (
            <TouchableHighlight onPress={() => setModalVisible(true)}>
                <FurnitureCard  price = { item.price } image = { item.image } material = { item.material } />
            </TouchableHighlight>
        ) }
    />

    
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
    imagestyle: {
        // padding: 40,
        // width: 250,
        // height: 500,
        margin: 0,
        alignItems: undefined,
        justifyContent: undefined,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
});