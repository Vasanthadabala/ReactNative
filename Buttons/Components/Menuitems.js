import { useState } from "react";
import { Pressable } from "react-native";
import { SectionList } from "react-native";
import { View,Text,StyleSheet} from "react-native";

const menuItems=[
    {
      title: 'Appetizers',
      data: [
        { name: 'Hummus', price: '$5.00' },
        { name: 'Moutabal', price: '$5.00' },
        { name: 'Falafel', price: '$7.50' },
        { name: 'Marinated Olives', price: '$5.00' },
        { name: 'Kofta', price: '$5.00' },
        { name: 'Eggplant Salad', price: '$8.50' },
      ],
    },
    {
      title: 'Main Dishes',
      data: [
        { name: 'Lentil Burger', price: '$10.00' },
        { name: 'Smoked Salmon', price: '$14.00' },
        { name: 'Kofta Burger', price: '$11.00' },
        { name: 'Turkish Kebab', price: '$15.50' },
      ],
    },
    {
      title: 'Sides',
      data: [
        { name: 'Fries', price: '$3.00', id: '11K' },
        { name: 'Buttered Rice', price: '$3.00' },
        { name: 'Bread Sticks', price: '$3.00' },
        { name: 'Pita Pocket', price: '$3.00' },
        { name: 'Lentil Soup', price: '$3.75' },
        { name: 'Greek Salad', price: '$6.00' },
        { name: 'Rice Pilaf', price: '$4.00' },
      ],
    },
    {
      title: 'Desserts',
      data: [
        { name: 'Baklava', price: '$3.00' },
        { name: 'Tartufo', price: '$3.00' },
        { name: 'Tiramisu', price: '$5.00' },
        { name: 'Panna Cotta', price: '$5.00' },
      ],
    },
  ];
const Item=({name,price})=>{
    return(
        <View style={styles.innerContainer}>
            <Text style={styles.items}>{name}</Text>
            <Text style={styles.items}>{price}</Text>
        </View>
    )
}

const Header=({section:{title}})=><Text style={styles.header}>{title}</Text>

const Separator=()=><View style={styles.separator}/>

const Footer=()=><Text style={styles.footer}>All Copy Rights Reserved By Little Lemon 2023</Text>

export function MenuItems()
{
    const [showMenu,setShowMenu]=useState('false')//to togle button
    const renderItem=({item})=><Item name={item.name} price={item.price}/>
    //rendering component called item
    return(
        <View style={styles.container}>
            
            {!showMenu && (
                <Text style={styles.title2}>
                Little Lemon is a charming neighborhood bistro that serves
                simple food and classic cocktails in a lively but casual environment.
                We would love to hear more about your experience with us!
                </Text>
            )}
            
            <Pressable 
                onPress={()=>{setShowMenu(!showMenu)}} 
                style={styles.button}>
                <Text style={styles.buttonText}>{showMenu?'Home':'View Menu'}</Text>
                {/*Toggles the name of the button*/}
            </Pressable>
            {showMenu && (
                <SectionList sections={menuItems} renderItem={renderItem} 
                renderSectionHeader={Header}
                ItemSeparatorComponent={Separator}
                ListFooterComponent={Footer}/>
            )}
            {/* Renders list only show menu is true*/}
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:0.9,
        backgroundColor:'#333333',
        padding:5
    },
    innerContainer:{
        paddingHorizontal:20,
        paddingVertical:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    header:{
        fontSize:40,
        color:'white',
        padding:5,
        textAlign:'center',
        backgroundColor:'black',
        borderRadius:8
    },
    items:{
        fontSize:25,
        color:'yellow',
        alignItems:'center',
        paddingTop:8,
        fontWeight:'300'

    },
    footer:{
        fontSize:18,
        color:'white',
        fontWeight:'300',
        paddingTop:10,
        textAlign:'center'
    },
    separator:{
        borderWidth:0.2,
        borderColor:'white'
    },
    button:{
        padding:10,
        backgroundColor:'grey',
        borderRadius:25,
        borderColor:'black',
        borderWidth:2,
        margin:10,
        marginLeft:50,
        marginRight:50
    },
    buttonText:{
        fontSize:32,
        textAlign:'center',
        fontWeight:'400',
        color:'black'
    },
    title2:
    {
        fontSize:20,
        textAlign:'center',
        fontWeight:'normal',
        color:'white',
        padding:5
    }
}
)