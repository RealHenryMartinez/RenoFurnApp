import HomeScreenStack from "./HomeScreensStack";
import UploadProfileScreen from "./UploadProfileScreen";
import { UploadFurnitureScreen } from "../screens/UploadFurnitureScreen";


export default function() {
   return (
    <NavigationContainer>
      <Tabs.Navigator >
        <Tabs.Screen name="Home" component={HomeScreenStack} />
        <Tabs.Screen name="Camera"  component={UploadFurnitureScreen} />
        <Tabs.Screen name="Profileh" component={UploadProfileScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
   ) 
}