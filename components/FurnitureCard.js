import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export const FurnitureCard = ({image, price, material}) => {
  return (
    <View>
        {/* <TouchableHighlight> */}
            <Image
                source={image}
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
