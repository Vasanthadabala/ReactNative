import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { Header } from './Components/Header';
import WelcomeScreen from "./Components/WelcomeScreen";
import { MenuItems } from './Components/Menuitems';
import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <View>
        <Header/>
      </View>
      <Tab.Navigator 
      screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
          let iconName;
          if(route.name === 'Welcome')
          {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          }
          else if(route.name === 'Menu')
          {
            iconName='ios-list';
          }
          return <Ionicons name={iconName} size={size} color={color}/>;
        },
        tabBarActiveTintColor:'black',
        tabBarInactiveTintColor:'grey',
        tabBarActiveBackgroundColor:'grey'
      })}>
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Menu" component={MenuItems} />
      </Tab.Navigator>
  </NavigationContainer>
  )
}