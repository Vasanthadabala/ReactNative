import { useState } from "react";
import { View,Text,TextInput,StyleSheet, ScrollView, KeyboardAvoidingView, Platform} from "react-native";

export default function FeedBackForm()
{
    const [firstName,onChangeFirstName]=useState('');
    const [lastName,onChangeLastName]=useState('');
    const [message,onChangeMessage]=useState('')
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS==='android'?'padding':'position'}>
            <ScrollView style={styles.innerContainer} keyboardDismissMode='on-drag'>
                <Text style={styles.title1}>How Was Your Visit In Little Lemon</Text>
                <Text style={styles.title2}>We Love To Hear Your FeedBack</Text>
                <TextInput 
                        value={firstName} 
                        onChangeText={onChangeFirstName}
                        placeholder="First Name"
                        style={styles.input}/>
                    <TextInput 
                        value={lastName} 
                        onChangeText={onChangeLastName}
                        placeholder="Last Name"
                        style={styles.input}/>
                    <TextInput 
                        value={message} 
                        onChangeText={onChangeMessage}
                        placeholder="Message"
                        multiline={true}
                        style={styles.messageInput}/>
            </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    title1:{
        flex:0.1,
        fontSize:30,
        paddingTop:40,
        textAlign:'center',
        fontWeight:'normal',
        color:'white'
    },
    title2:{
        flex:0.1,
        fontSize:24,
        color:'white',
        padding:30,
        textAlign:'center',
        fontWeight:'normal'
    },
    innerContainer:{},
    input:{
        height:50,
        margin:10,
        backgroundColor:'yellow',
        color:'black',
        borderWidth:1,
        padding:10,
        fontSize:20,
        fontWeight:'normal'
    },
    messageInput:{
        height:350,
        margin:10,
        backgroundColor:'yellow',
        color:'black',
        borderWidth:1,
        fontSize:20,
        fontWeight:'normal',
        textAlignVertical:'top',
        textAlign:'left',
        padding:10
    }
})