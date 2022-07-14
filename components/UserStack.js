import { CategoriesScreen } from "../screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ItemListScreen } from "../screens/ItemListScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { UserFurniture } from "../screens/UserFurniture";

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
      initialRouteName="Profile"
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Furniture" component={UserFurniture} />
    </Stack.Navigator>
  );
}

