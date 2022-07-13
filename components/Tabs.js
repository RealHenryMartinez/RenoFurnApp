export default function() {
   return (
    <NavigationContainer>
      <Tabs.Navigator >
        <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="Camera"  component={CameraScreen} />
        <Tabs.Screen name="Upload" component={SeePhoto} />
      </Tabs.Navigator>
    </NavigationContainer>
   ) 
}