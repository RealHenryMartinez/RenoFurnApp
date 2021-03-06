import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Button, FlatList, TouchableHighlight, Modal, Pressable, Alert, SectionList, TouchableOpacity, setState } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { TouchableHighlight } from 'react-native-web';


import { FurnitureCard } from '../../components/Cards/FurnitureCard'

/* hardcoded images */



export const ItemListScreen = ({ navigation, route }) => {
  console.log(route.params)

let furniture1 = require('../../assets/couch.png');
let furniture2 = require("../../assets/wardrobe.png");
let furniture3 = require("../../assets/wardrobe2.png");
let furniture4 = require("../../assets/wardrobe3.png");
let furniture5 = require("../../assets/wardrobe4.png");

  const [furnitureCardInfo, setFurnitureCardInfo] = useState([
  { name: "chairs",  items: [
    // passing data from item list (Child)
    {
      name: 'table chair',
      price: '$50',
      material: 'wood', 
      image: furniture1
    },
    {
      name: 'dinning chair',
      price: '$950',material: 'wood', 
      image: furniture2
    }
  ]  },
  { name: "tables",  items: [
    {
      name: 'dinning table',
      price: '$1050',
      material: 'wood', 
      image: furniture4
    },
    {
      name: 'outdoor table',
      price: '$500',material: 'wood',   
      image: furniture3,
    }
  ]  },
]);
    // // function newButton() {
    // //     CameraScreen
    // // }
    // const [furnitureCardInfo, setFurnitureCardInfo] = useState([
    //     {name: route.params.name , price: route.params.price, image: furniture1, material: route.params.material},
    //     // { price: "230", image: furniture2, material: "metal"},
    //     // { price: "240", image: furniture3, material: "plastic" },
    //     // { price: "250", image: furniture4, material: "wood" },
    //     // { price: "260", image: furniture5, material: "wood" },   
    // ])
    // const [actionTriggered, setActionTriggered] = useState(''); // here we go

    const [modalVisible, setModalVisible] = useState(false);
      return (
        // <div>
        //   <button onClick={() => setModalVisible(true)}>Open Modal</button>
        //   <Modal isOpen={modalVisible} shouldCloseOnOverlayClick={false} onRequestClose={() => setModalVisible(false)} >
        //     <Text>
        //       random text here
        //     </Text>
        //     <View>
        //     <button onClick={() => setModalVisible(false)}>Close</button>
        //     </View>
        //   </Modal>
        // </div>
    //    <>
    //       <TouchableOpacity style={styles.container} onPress={() => {
    //         setModalVisible(true);
    //         setActionTriggered('ACTION_1'); // HERE
    //       }}>
    //         <FurnitureCard image={furniture2}/>
    //       </TouchableOpacity>
    
    //       <TouchableOpacity style={styles.container} onPress={() => {
    //         setActionTriggered('ACTION_2'); // HERE
    //       }}> {/* Different modal? */}
    //         <FurnitureCard image={furniture1}/>
    //       </TouchableOpacity>
    
    //       <Modal
    //         animationType="slide"
    //         transparent={true}
    //         visible={modalVisible}
    //         style={{ margin: 0 }}
    //         onRequestClose={() => { }}>
    
    //         {/* inside the modal view, depending on the action type do something */}
    //         {actionTriggered === 'ACTION_1' ?
    //           <View>
    //             {/* .... something you want to show in case of the first modal opened  */}
    //           </View> :
    //           actionTriggered === 'ACTION_2' ?
    //             <View>
    //               {/* // .... something you want to show in case of the second modal opened  */}
    //             </View> :
    //             null}
    //       </Modal>
    //       <FlatList 
        
    //     data = { furnitureCardInfo } 
    //     renderItem = {({ item }) => (
    //         <TouchableHighlight   onPress={() => setModalVisible(true)}>
    //             <FurnitureCard    price = { item.price } image = { item.image } material = { item.material } />
    //         </TouchableHighlight>
    //     ) }
    // />
    //    </>
    // const [modalVisible, setModalVisible] = useState(false);
  
    // return (
    <View style={styles.container}>
      {/* <Button
        onPress={() => {
          navigate("CameraScreen");
        }}
        title={route.params.categoryName}
      /> */}
      {/* <Button onPress={ newButton } title="a"/>  */}

    {/* <FurnitureCard price={200} />
    <FurnitureCard price={300} image={couch1}/> */}





    {/* This is the Modal for each Hardcoded post */}
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
                style={styles.imagestyle} 
                sections={[
                    {title: 'furniture', data: ["price: 200", "Material: wood"]},
                ]} // parameter -> item being passed -> render item //

          renderItem={({items}) => <Text style={styles.item}>{items.material}</Text>}
          renderSectionHeader={({name}) => <Text style={styles.modalText}>{name}</Text>}
          // keyExtractor={(item, index) => `basicListEntry-${item.title}`}
        />
            </Text>
            {/* closing the modal */}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    
    {/* This is the front page */}
    <FlatList 
        numColumns={2}
        data = { route.params.items } 
        renderItem = {({ item }) => (
            <TouchableHighlight   onPress={() => setModalVisible(true)}>
                <FurnitureCard    name = { item.name } price = { item.price } image = { item.image } material = { item.material } />
            </TouchableHighlight>
        ) }
    />
    

    
    {/* <Button 
      title="randomButton" 
      onPress={myButton}
    /> */}

  </View>
  
  );
};

const styles = StyleSheet.create({
    imagestyleagain: {
        borderSize: 5,
        borderColor: 'black',
        borderStyle: 'solid',
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    // texter: {
    //     fontSize: '10px',
    // },
    imagestyle: {
        padding: 40,
        width: 250,
        height: 500,
        

        // margin: 0,
        // alignItems: undefined,
        // justifyContent: undefined,
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
        textAlign: "center",
        fontSize: 30,
      }

});