import { View } from 'react-native';
import LittleLemonHeader from './Components/LittleLemonHeader'
import Footer from './Components/Footer'
import WelcomeScreen from './Components/WelcomeScreen';

export default function App() {
  return (
    <>
    <View style={{
      flex:1,
      backgroundColor:'#495E57'
      }}>
      <LittleLemonHeader/>
      <WelcomeScreen/>
      </View>
      <View>
        <Footer/>
      </View>
      </>
  )
}
