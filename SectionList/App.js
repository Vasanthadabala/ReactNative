import { View,StyleSheet} from 'react-native';
import { Header } from './Components/Header';
import { MenuItems } from './Components/Menuitems';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <MenuItems/>
    </View>
  );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#495E57',
  }
})