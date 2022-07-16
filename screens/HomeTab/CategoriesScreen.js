import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  FlatList,
  TouchableHighlight,
  Modal,
  Pressable,
  Alert,
  SectionList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import item from '../../assets/couch.png';

// importing components and screens

import { CategoryCard } from "../../components/Cards/CategoryCard";

let furniture1 = require('../../assets/couch.png');
let furniture2 = require("../../assets/wardrobe.png");
let furniture3 = require("../../assets/wardrobe2.png");
let furniture4 = require("../../assets/wardrobe3.png");
let furniture5 = require("../../assets/wardrobe4.png");

export const CategoriesScreen = ({ navigation }) => {

  /* Each card will have a different name with this list of objects */
  const [furnitureCardInfo, setFurnitureCardInfo] = useState([
    // Passing data for category (Parent) //
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


/* used to make modal from posts be visible or not */
  const [modalVisible, setModalVisible] = useState(false);


  const handleCategoryPress = (name, items) => {
    console.log("tap", name),
    /* 
    used to navigate throughout different categories of furniture
    navigation is declared in the main component 
    */
      navigation.navigate("ItemList", { name: name,  items:items  });
  };

  
  /* render the page */
  return (
    <View style={styles.container}>
      {/* This is the front page */}
      
      {/* create a list with different items that 
      have each a touchable highlight to navigate to that category of item */}
      <FlatList
        numColumns={2}
        data={furnitureCardInfo}
        renderItem={({ item }) => (
          <TouchableHighlight
            onPress={() => {
              // rendering the Category and ItemList
              handleCategoryPress(item.name, item.items);
            }}
          >
            {/* Display the name of the category ons the top of the screen */}
            <CategoryCard name={item.name} />
          </TouchableHighlight>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagestyleagain: {
    borderSize: 5,
    borderColor: "black",
    borderStyle: "solid",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    marginTop: 22,
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 30,
  },
});
