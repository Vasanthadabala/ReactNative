import { View,Text,StyleSheet } from "react-native";

export function Footer()
{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                All Rights Reserved By Little Lemon 2023
            </Text>
        </View>
    )
}
 const styles=StyleSheet.create({
    container:{
        backgroundColor:'white'
    },
    title:{
        color:'black',
        textAlign:'center',
        fontSize:18,
        fontStyle:'italic'

    }
 })