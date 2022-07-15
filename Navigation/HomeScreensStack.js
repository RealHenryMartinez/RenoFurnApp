import { CategoriesScreen } from "../screens/HomeTab/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ItemListScreen } from "../screens/HomeTab/ItemListScreen";



const headerOptions = {
  headerShadowVisible: false,
  headerBackTitle: " ",
  // headerStyle: {
  //   backgroundColor: "#242627",
  //   borderBottomColor: "transparent",
  //   borderBottomWidth: 0,
  // },
  headerTitleStyle: {
    paddingTop: 40,
    fontSize: 20,
    color: "#48d1cc",
    fontWeight: "bold",
  },
  animation: "slide_from_right",
};

export default function HomeScreenStack() {
  const Stack = createNativeStackNavigator();

  // const [furnitureCardInfo, setFurnitureCardInfo] = useState([
  //   { name: "couch" },
  //   { name: "wardrobe" },
  // ]);

  return (
    <Stack.Navigator
      screenOptions={headerOptions}
      initialRouteName="Browse Furniture"
    >
      <Stack.Screen name="Browse Furniture" component={CategoriesScreen} />
      <Stack.Screen name="ItemList" component={ItemListScreen} />
    </Stack.Navigator>
  );
}
