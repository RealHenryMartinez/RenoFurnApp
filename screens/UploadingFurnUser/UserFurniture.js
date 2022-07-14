
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import UploadFurnitureDetailsScreen from "./UploadFurnitureDetailsScreen copy";

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

export default function UserFurniture() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={headerOptions}
      initialRouteName="UserFurniture"
    >
      <Stack.Screen name="UploadFurnitureDetails" component={UploadFurnitureDetailsScreen} />

    </Stack.Navigator>
  );
}
