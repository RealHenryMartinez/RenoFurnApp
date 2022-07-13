import { StyleSheet, Text, View } from 'react-native';
import UploadImage from '../components/UploadImage';


export default function SeePhoto() {
 return (
<View style={styles.container}>
<UploadImage/>
<Text style={{marginVertical:20,fontSize:16}}>Welcome, FuzzySid</Text>
</View>
 );
}

const styles = StyleSheet.create({
 container: {
   padding:50,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
});