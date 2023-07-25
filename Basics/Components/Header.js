import * as React from 'react';
import { View,Text } from "react-native";

export default function Header()
{
    return(
        <View style={{
            flex:0.1,
            backgroundColor:'yellow'}}>
            <Text style={{
                paddingTop:50,
                paddingLeft:120,
                fontSize:25,
                fontWeight:'700'}}>
                Little Lemon
                </Text>
        </View>
    )
}