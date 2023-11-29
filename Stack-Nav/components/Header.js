import { View,Text,StyleSheet,Pressable } from "react-native";

export function Header({navigation})
{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Little Lemon
            </Text>
            <Pressable
                onPress={()=>navigation.navigate('Menu')} 
                style={styles.button}>
                <Text style={styles.buttonText}>View Menu</Text>
            </Pressable>
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
        },
        button:{
            backgroundColor:'grey',
            margin:10,
            padding:6,
            borderRadius:12,
            borderWidth:1,
            marginHorizontal:100
        },
        buttonText:{
            fontSize:28,
            textAlign:'center',
            fontWeight:'normal'
        }
    })