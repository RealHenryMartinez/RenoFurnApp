import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraScreen from './screens/CameraScreen';

// custom Components
import { HomeScreen } from './screens/HomeScreen';
import ChoosePhoto from './screens/ChoosePhoto';

// an instance of the bottom Tab Navigator
const Tabs = createBottomTabNavigator();

export default function App() {
    

  return (

    <NavigationContainer>
      
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="Camera"  component={CameraScreen} />
        <Tabs.Screen name="Upload" component={ChoosePhoto} />
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



