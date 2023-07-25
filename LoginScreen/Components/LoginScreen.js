import { useState } from "react";
import { View,Text,StyleSheet,TextInput, Pressable, ScrollView } from "react-native";

export default function LoginScreen()
{
    const [mail,onChangeMail]=useState('');
    const [password,onChangePassword]=useState('')
    const [loggedin,onLogin]=useState(false)
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.headerTitle}>Welcome to Little Lemon</Text>
            {loggedin && <Text style={styles.loginTitle}>You are logged in!</Text>}
            {!loggedin && (
                <>
                    <Text style={styles.loginTitle}>Login to continue</Text>
                    <TextInput
                        onChangeText={onChangeMail}
                        value={mail}
                        placeholder="Email" 
                        style={styles.textInput}/>
                    <TextInput 
                        onChangeText={onChangePassword}
                        value={password}
                        placeholder="Password"
                        style={styles.textInput}
                    secureTextEntry={true}/>
                    <Pressable 
                        onPress={()=>onLogin(!loggedin)} 
                        style={styles.button}>
                            <Text style={styles.buttonText}>Login</Text>
                    </Pressable>
                </>
            )}
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:0.9,
        backgroundColor:'black'
    },
    headerTitle:{
        fontSize:40,
        textAlign:'center',
        fontWeight:'400',
        padding:40,
        color:'white'
    },
    loginTitle:{
        fontSize:25,
        textAlign:'center',
        color:'white',
        padding:40
    },
    textInput:{
        backgroundColor:'white',
        fontSize:18,
        color:'black',
        height:40,
        margin:12,
        borderWidth:1,
        borderColor:'grey',
        padding:10
    },
    button:{
        margin:100,
        marginVertical:10,
        backgroundColor:'orange',
        borderRadius:50,
        borderWidth:1,
        borderColor:'grey',
        padding:10
    },
    buttonText:{
        textAlign:'center',
        fontSize:25,
        color:'black'
    }
})