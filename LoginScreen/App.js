import { StyleSheet, View } from 'react-native';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer.';
import LoginScreen from './Components/LoginScreen';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Header/>
        <LoginScreen/>
      </View>
      <View>
        <Footer/>
      </View>
    </>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#495E57',
  },
});
