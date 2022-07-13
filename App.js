import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraScreen from './screens/CameraScreen';

// custom Components
import { HomeScreen } from './screens/HomeScreen';
import SeePhoto from './screens/SeePhoto';


// an instance of the bottom Tab Navigator
const Tabs = createBottomTabNavigator();
const headerOptions = {
  headerShadowVisible: false,
  headerBackTitle: ' ',
  headerStyle: {
    backgroundColor: '#242627',
    borderBottomColor: 'transparent',
    borderBottomWidth: 0,
  },
  headerTitleStyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  animation: 'slide_from_right',
};


export default function App() {
    

  return (

    <NavigationContainer>
      
      {/* screenOptions={headerOptions} */}
      <Tabs.Navigator >
        <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="Camera"  component={CameraScreen} />
        <Tabs.Screen name="Upload" component={SeePhoto} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



