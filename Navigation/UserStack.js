
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, StyleSheet, View } from "react-native";


import UploadProfilePicture from "../components/Uploads/UploadProfilePicture";





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

export default function UserStack() {
  const Stack = createNativeStackNavigator();

  return (

    <Stack.Navigator
      screenOptions={headerOptions}
      initialRouteName="Picture"
    >

      <Stack.Screen name="Picture" component={UploadProfilePicture} />
      
    </Stack.Navigator>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});