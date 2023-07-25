import { View,Text } from "react-native";

export default function WelcomeScreen()
{
    return(
        <View style={{flex:0.9}}>
            <Text style={{
                fontSize:30,
                fontWeight:'normal',
                color:'white',
                textAlign:'center',
                padding:40
                }}>
            Welcome to Little Lemon
            </Text>
            <View>
                <Text style={{
                    fontSize:25,
                    textAlign:'center',
                    color:'white',
                    padding:20,
                    fontWeight:'normal'
                }}>
                Little Lemon is a charming neighborhood bistro that serves
                simple food and classic cocktails in a lively but casual environment.
                We would love to hear more about your experience with us!
                </Text>
            </View>
        </View>
    )
}