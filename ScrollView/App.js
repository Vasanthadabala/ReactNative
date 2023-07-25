import React from "react";
import { View } from "react-native";
import { MenuItems } from "./Components/MenuItems";
import { Header } from "./Components/Header";

export default function App() {
  return (
    <View style={{flex:1,backgroundColor:"#495E57"}}>
      <Header/>
      <MenuItems/>
    </View>
  )
}