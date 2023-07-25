import { ScrollView,Text,StyleSheet, Image, View,ImageBackground,useColorScheme } from "react-native";

export function Header()
{
    const colorScheme=useColorScheme();
    return(
        <ScrollView 
        style={[styles.container,
        colorScheme === 'light'
        ? {backgroundColor:'white'}
        : {backgroundColor:'dark grey'}]}>
        {/*It toggle system light&dark modes*/}
        <View style={styles.innerContainer}>
        <ImageBackground source={require("../Img/istockphoto-1318957901-612x612.jpg")}>
            <Text style={styles.title}>
                Little Lemon
            </Text>
        </ImageBackground>
        </View>
            <Image
                resizeMode='center'
                source={require("../Img/Aesthetic-Boy.jpg")}
                style={styles.pic}
                accessable={true}
                accessibilityLabel="Boy"
            />
            <Image
                resizeMode='contain'
                source={require("../Img/Aesthetic-Boy.jpg")}
                style={styles.pic}
                accessable={true}
                accessibilityLabel="Boy"
            />
            <Image
                resizeMode='cover'
                source={require("../Img/Aesthetic-Boy.jpg")}
                style={styles.pic}
                accessable={true}
                accessibilityLabel="Boy"
            />
            <Image
                resizeMode='repeat'
                source={require("../Img/Aesthetic-Boy.jpg")}
                style={styles.pic}
                accessable={true}
                accessibilityLabel="Boy"
            />
            <Image
                resizeMode='stretch'
                source={require("../Img/Aesthetic-Boy.jpg")}
                style={styles.pic}
                accessable={true}
                accessibilityLabel="Boy"
            />
            <Image
                resizeMode='cover'
                source={require("../Img/Aesthetic-Boy.jpg")}
                style={styles.pic}
                accessable={true}
                accessibilityLabel="Boy"
            />
            <Image
                resizeMode='cover'
                source={require("../Img/Aesthetic-Boy.jpg")}
                style={styles.pic}
                accessable={true}
                accessibilityLabel="Boy"
            />
            <Image
                resizeMode='cover'
                source={require("../Img/Aesthetic-Boy.jpg")}
                style={styles.pic}
                accessable={true}
                accessibilityLabel="Boy"
            />
        </ScrollView>
    )
}

const styles=StyleSheet.create({
        container:{
            flex:1,
        },
        innerContainer:{
            flex:0.1,
            backgroundColor:'yellow'
        },
        title:{
            paddingTop:25,
            fontSize:32,
            fontWeight:'600',
            textAlign:'center',
            margin:1
        },
        pic:{
            height:200,
            width:400,
            borderWidth:5,
            borderColor:'black',
            margin:5,
            padding:10,
            borderRadius:10,
        }
    })