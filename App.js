import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// custom Components
import { HomeScreen } from "./screens/ItemListScreen";
import SeePhoto from "./screens/SeePhoto";
import { Camera } from "expo-camera";
import CameraScreen from "./screens/CameraScreen";
import HomeScreenStack from "./components/HomeScreensStack";

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
          name="Home"
          component={HomeScreenStack}
        />
        <Tabs.Screen name="Camera" component={CameraScreen} />
        <Tabs.Screen name="Upload" component={SeePhoto} />
      </Tabs.Navigator>
    </NavigationContainer>
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
