import { View,Text,StyleSheet } from "react-native";

export default function WelcomeScreen()
{
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>
            Welcome to Little Lemon
            </Text>
            <Text style={styles.bodyText}>
                Little Lemon is a charming neighborhood bistro that serves
                simple food and classic cocktails in a lively but casual environment.
                We would love to hear more about your experience with us!
            </Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#495E49"
    },
    headerText:{
        fontSize:24,
        textAlign:'center',
        fontWeight:'500',
        padding:10,
        color:'white'
    },
    bodyText:{
        fontSize:20,
        fontWeight:'normal',
        textAlign:'center',
        padding:10,
        color:'white'
    }
})