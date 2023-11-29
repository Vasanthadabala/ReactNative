import { View,Text,StyleSheet } from "react-native";

export function Header()
{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Little Lemon
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
        container:{
            flex:0.1,
            backgroundColor:'orange',
        },
        title:{
            paddingTop:25,
            fontSize:32,
            fontWeight:'600',
            textAlign:'center',
            margin:1
        }
    })