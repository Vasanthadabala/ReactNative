import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image,StyleSheet} from 'react-native';
import { Header } from './components/Header';
import { MenuItems } from './components/MenuItems';

const Stack=createNativeStackNavigator();
//navigate btw screens

function LogoTitle(){
  return(
    <Image 
      source={require('./img/colors.jpg')}
      style={styles.image}
    />
    //For rendering logo instead of text
  )
}

export default function App()
{
  return(
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home' //Intial Screen When Opened App
        screenOptions={{
          headerStyle:{backgroundColor:'#FBDABB'},
          headerTitleStyle:{
            fontWeight:'bold',
            fontSize:24
          },
          headerTitleAlign:'center'
          }}
        //Changing background-color of the header
      >
        <Stack.Screen
          options={{
            title:'Home',
            headerTitle:(props)=><LogoTitle {...props}/>}}
            //Changing title name from header -> Home
          name='Header' component={Header}
          />
        <Stack.Screen name='Menu' component={MenuItems}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

const styles=StyleSheet.create({
  image:{
    height:40,
    width:300,
    resizeMode:'contain',
    alignSelf:'center'
  }
})