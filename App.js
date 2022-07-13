import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// custom Components
import { HomeScreen } from './screens/HomeScreen';
import SeePhoto from './screens/SeePhoto';
import { Camera } from 'expo-camera';
import CameraScreen from './screens/CameraScreen';

// an instance of the bottom Tab Navigator
const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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
      <Stack.Navigator

        screenOptions={headerOptions}
      >
        <Stack.Screen name="NewCamera" component={CameraScreen} />
      </Stack.Navigator>
      
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



