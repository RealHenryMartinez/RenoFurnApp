
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserFurnitureScreen from '../screens/UploadTab/UserFurnitureScreen'
import UploadFurnitureDetailsScreen  from '../screens/UploadTab/UploadFurnitureDetailsScreen'
import UploadFurnitureImageScreen  from '../screens/UploadTab/UploadFurnitureImageScreen'

// const headerOptions = {
//   headerShadowVisible: false,
//   headerBackTitle: " ",
//   headerStyle: {
//     backgroundColor: "#242627",
//     borderBottomColor: "transparent",
//     borderBottomWidth: 0,
//   },
//   headerTitleStyle: {
//     fontSize: 20,
//     color: "white",
//     fontWeight: "bold",
//   },
//   animation: "slide_from_right",
// };

export default function UploadFurnitureStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator

      initialRouteName="User Furniture"
    >
      <Stack.Screen name="User Furniture" component={UserFurnitureScreen} />
      <Stack.Screen name="Upload Furniture Details" component={UploadFurnitureDetailsScreen} />
      <Stack.Screen name="Upload Furniture Image" component={UploadFurnitureImageScreen} />
    </Stack.Navigator>
  );
}
