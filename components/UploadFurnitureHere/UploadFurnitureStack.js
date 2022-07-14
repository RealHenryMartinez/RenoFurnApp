import { CategoriesScreen } from "../screens/FrontPageHere/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ItemListScreen } from "../screens/ItemListScreen";


import { UploadFurnitureDetailsScreen } from "../../screens/UploadingFurnUser/UploadFurnitureDetailsScreen copy";
import UploadFurnitureImageScreen from "../../screens/UploadingFurnUser/UploadFurnitureImageScreen";
import User

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

export default function HomeScreenStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={headerOptions}
      initialRouteName="User Furniture"
    >
      <Stack.Screen name="User Furniture" component={UserFurniture} />
      <Stack.Screen name="Upload Furniture Details" component={UploadFurnitureDetailsScreen} />
      <Stack.Screen name="Upload Furniture Image" component={UploadFurnitureImageScreen} />
    </Stack.Navigator>
  );
}