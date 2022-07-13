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

// import { TouchableHighlight } from 'react-native-web';

import { FurnitureCard } from "../components/FurnitureCard";
import CameraScreen from "./CameraScreen";
import { CategoryCard } from "../components/CategoryCard";

let furniture1 = require("../assets/couch.png");
let furniture2 = require("../assets/wardrobe.png");
let furniture3 = require("../assets/wardrobe2.png");
let furniture4 = require("../assets/wardrobe3.png");
let furniture5 = require("../assets/wardrobe4.png");

export const CategoriesScreen = ({ navigation }) => {
  // function newButton() {
  //     CameraScreen
  // }
  const [furnitureCardInfo, setFurnitureCardInfo] = useState([
    { name: "couch" },
    { name: "wardrobe" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  const handleCategoryPress = (name) => {
    console.log("tap", name),
      navigation.navigate("ItemList", { categoryName: name });
  };

  return (
    <View style={styles.container}>
      {/* This is the front page */}
      <FlatList
        data={furnitureCardInfo}
        renderItem={({ item }) => (
          <TouchableHighlight
            onPress={() => {
              handleCategoryPress(item.name);
            }}
          >
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
