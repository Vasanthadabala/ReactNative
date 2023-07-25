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
        backgroundColor:'orange'
    },
    title:{
        color:'black',
        textAlign:'center',
        fontSize:18

    }
 })