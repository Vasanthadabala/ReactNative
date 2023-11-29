import { View,Text,StyleSheet } from "react-native";

export default function WelcomeScreen()
{
    return(
    <View style={styles.container}>
        <Text style={styles.title}>Welcome to Little Lemon</Text>
    </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    title:{
        fontSize:24,
        fontWeight:'400',
        textAlign:'center',
        padding:10
    }
})