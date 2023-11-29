import { StyleSheet, View } from 'react-native';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer.';
import LoginScreen from './Components/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './Components/WelcomeScreen';

const stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <Header/>
      <stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerStyle:{backgroundColor:'#FBDABB'},
          headerTitleStyle:{
            fontSize:20,
            fontWeight:'normal'
          },
          headerTitleAlign:'center'
        }}>
        <stack.Screen 
          name='Welcome' component={WelcomeScreen}/>
        <stack.Screen 
          name='Login' component={LoginScreen}/>
      </stack.Navigator>
    </View>
    <View>
      <Footer/>
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#495E57',
  },
});
