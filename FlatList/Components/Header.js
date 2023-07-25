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
const styles=StyleSheet.create(
    {
        container:{
            flex:0.1,
            backgroundColor:'yellow',
        },
        title:{
            fontSize:25,
            textAlign:'center',
            paddingTop:40,
            fontWeight:'500'
        }
    }
)