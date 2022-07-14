import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// custom Components
import { HomeScreen } from "./screens/ItemListScreen";
import SeePhoto from "./screens/ProfileScreen";
import { Camera } from "expo-camera";
import CameraScreen from "./screens/CameraScreen";
import HomeScreenStack from "./components/HomeScreensStack";
import UploadProfileScreen from "./components/UploadProfileScreen";
import { UploadFurnitureScreen } from "./screens/UploadFurnitureScreen";
import UserStack from "./components/UserStack";

// an instance of the bottom Tab Navigator
const Tabs = createBottomTabNavigator();

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

export default function App() {
  return (
    <NavigationContainer>
      
      <Tabs.Navigator initialRouteName="Home">
        <Tabs.Screen
          options={{ headerShown: false }} // hides 'Home' header
          name="Upload here"
          component={UploadFurnitureScreen}
        />
        <Tabs.Screen
          options={{ headerShown: false }} // hides 'Home' header
          name="Home"
          component={HomeScreenStack}
        />
        {/* <Tabs.Screen name="Profile" component={UploadProfileScreen} /> */}
        <Tabs.Screen
          options={{ headerShown: false }} // hides 'Home' header
          name="User"
          component={UserStack}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "5BBEB3",
    alignItems: "center",
    justifyContent: "center",
    display: "grid",
    gridTemplateColumns: "auto auto",
  },
});
