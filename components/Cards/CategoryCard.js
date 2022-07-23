import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
// the card is basically the box or container you see on the page

export const CategoryCard = ({ name }) => {
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "row"
    }]}>
      <Text> {name}</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
      backgroundColor: '#48d1cc',
      marginVertical: 10,
      width: 150,
      height: 128,
      borderRadius: 15,
      elevation: 1,
      alignItems: 'center',
      justifyContent: "center",
      marginHorizontal: 10,
  },
});


// const styles = StyleSheet.create({
//     card: {
//       backgroundColor: '#48d1cc',
//       marginVertical: 10,
//       width: 150,
//       height: 100,
//       borderRadius: 15,
//       elevation: 1,

      
//     column: {
//       flex: 1,
//       flexDirection: 'row',
//       justifyContent: "space-around",
//       justifyContent: "center",
//       alignItems: 'center',

//     }
//       // flexWrap: 'wrap',
//       // alignItems: 'flex-start' // if you want to fill rows left to right
//     },
//     item: {
//       width: '50%' // is 50% of container width
//     }

//   });
  