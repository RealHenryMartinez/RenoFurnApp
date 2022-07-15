import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export const FurnitureCard = ({image, price, material}) => {
    console.log(image)
  return (
    <View style={styles.container}>
        {/* <TouchableHighlight> */}
            <Image
        
                source = {
                    require('../../assets/couch.png')
                }
            />
            <Text>
                price: {price}
            </Text>
            <Text>
                material: {material}
            </Text>

            {/* <TouchableHighlight>  </TouchableHighlight> */}
        {/* </TouchableHighlight> */}
    </View>
  )
}

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
  