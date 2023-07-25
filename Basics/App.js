import * as React from 'react';
import { View } from "react-native";
import Header from './Components/Header';

export default function App() {
  return (
    <View style={{
      flex:1,
      backgroundColor:'#495E57'
    }}>
      <Header/>
    </View>
  )
}