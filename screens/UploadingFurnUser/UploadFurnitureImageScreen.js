
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


// screens
import UserFurniture from "./UserFurnitureScreen";

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

export default function UploadFurnitureImageScreen() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={headerOptions}
    >
      <Stack.Screen name="Finish" component={UserFurniture} />
    </Stack.Navigator>
  );
}
