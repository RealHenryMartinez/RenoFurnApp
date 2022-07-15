import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export const FurnitureCard = ({image, price, material, name}) => {
    console.log(image)
  return (

    // One Post Container //
    <View style={{paddingHorizontal: 10}}>
        {/* Image Container */}
        <View style={styles.imageContainer}>
            <Image
                source = {image}
                style={styles.imageStyle}
                
            />
        </View>
        {/* Text Container */}
        <View style={styles.details}>
            <Text style={styles.textStyle}>{name}</Text>
            <Text style={[styles.textStyle, {textAlign: 'right'}]}>{price}</Text>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 100,
        height: 100,
    },
    imageContainer: {
        width: 188,
        height: 125,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
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
    details: {
        flexDirection: 'row',
        alignItems: 'space-between',
        // backgroundColor: 'yellow'
    },
    textStyle: {
        flex: 1,
        
    }
  });
  