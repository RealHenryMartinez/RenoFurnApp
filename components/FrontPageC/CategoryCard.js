import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";

export const CategoryCard = ({ name }) => {
  return (
    <View style={styles.card}>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
      backgroundColor: 'red',
      marginVertical: 10,
      width: 200,
      height: 200,
      borderRadius: 4,
      elevation: 1,
      justifyContent: "center",
      alignItems: 'center'
    },

  });
  