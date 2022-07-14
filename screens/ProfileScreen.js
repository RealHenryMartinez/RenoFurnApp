import { StyleSheet, Text, View } from 'react-native';
import UploadImage from '../components/UploadProfileScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UploadProfileScreen from '../components/UploadProfileScreen';

const headerOptions = {
  headerShadowVisible: false,
  headerBackTitle: " ",
  headerStyle: {
    backgroundColor: "#242627",
    borderBottomColor: "transparent",
    borderBottomWidth: 0,
  },
  headerTitleStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  animation: "slide_from_right",
};

export default function ProfileScreen() {
  const Stack = createNativeStackNavigator();
  
 return (
<View style={styles.container}>
  <UploadImage/>
  <Text style={{marginVertical:20,fontSize:16}}>Profile Here</Text>
</View>
 );
}

const styles = StyleSheet.create({
 container: {
   padding:50,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
});

