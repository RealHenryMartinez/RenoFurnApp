import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';

// fixing camera reloading issue
import { useIsFocused } from '@react-navigation/native';

//include all data //
export default function CameraScreen() {
    // useRef() <- does not cause the page to keep refreshing 
    let cameraRef = useRef();

    // const [photo, setPhoto] = useState({
    //     photo: null,
    // })

// re renders whenever switched to that tab
    const isFocused = useIsFocused();

    // pass new data to these variables -> then update value
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
    const [photo, setPhoto] = useState();
    const [showCamera, setShowCamera] = useState();

    // need help on understanding asynchronous function and await
    // happens after every render
    useEffect(() => {
        async function getPermissions() {
            try {
                const cameraPermission = await Camera.requestCameraPermissionsAsync();
                const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
                setHasCameraPermission(cameraPermission.status === "granted");
                setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
            } catch (e) {
                console.log(e)
            }
        }

        getPermissions();
    }, []);


    // confirming this variable -> checking if var has the value of granted
    if (hasCameraPermission === undefined) {
        return <Text>Requesting permissions...</Text>
    } else if (!hasCameraPermission) {
        return <Text>Permission for camera not granted. Please change this in settings.</Text>
    }

    // making objects that create a picture model
    let takePic = async () => {
        let options = {
            quality: 1,
            base64: true,
            exif: false
        };
        // wait until picture is taken, then create a "new photo file"
        let newPhoto = await cameraRef.current.takePictureAsync(options);
        setPhoto(newPhoto);
    };

    // if the photo is taken, choose any of these options
    if (photo) {
        let sharePic = () => {
            shareAsync(photo.uri).then(() => {
                setPhoto(undefined);
            });
        };

        let savePhoto = () => {
            MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
                setPhoto(undefined);
            });
        };

        // show the user the button to transfer the photo
        return (
            <SafeAreaView style={styles.container}>
                {/* <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} /> */}
                <Button title="Share" onPress={sharePic} />
                {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
                <Button title="Discard" onPress={() => setPhoto(undefined)} />
            </SafeAreaView>
        );
    }

    // camera showing the option to take pic
    return (
        
        // if the tab is true, then activate camera else return null
        <> 
            {/* {isFocused ? <Camera style={styles.container} ref={cameraRef}>

                <View style={styles.buttonContainer}>
                    <Button title="Take Pic" onPress={takePic} />
                </View>
                <StatusBar style="auto" />
            </Camera> : null} */}
            {isFocused ? <Camera style={styles.container} ref={cameraRef}>

            <View style={styles.buttonContainer}>
                <Button title="Take Pic" onPress={takePic} />
                <Button style={styles.buttonStyle} title= "close" onPress={() => setShowCamera(null)} />
            </View>
            <StatusBar style="auto" />
            </Camera> : null}
            
            
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        backgroundColor: '#fff',
        alignSelf: 'flex-end'
    },
    preview: {
        alignSelf: 'stretch',
        flex: 1
    },
    buttonStyle: {
        padding: 40,
        
    },
});

