import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const FurnitureCard = ({image, price}) => {
  return (
    <View>
        <Image
            source={image}
        />
        <Text>
            price: {price}
        </Text>
    </View>
  )
}
