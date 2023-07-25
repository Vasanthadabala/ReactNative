import { FlatList} from "react-native";
import { View,Text,StyleSheet} from "react-native";

const menuItems=[
    { name: 'Hummus', price: '$5.00', id: '1A' },
  { name: 'Moutabal', price: '$5.00', id: '2B' },
  { name: 'Falafel', price: '$7.50', id: '3C' },
  { name: 'Marinated Olives', price: '$5.00', id: '4D' },
  { name: 'Kofta', price: '$5.00', id: '5E' },
  { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
  { name: 'Lentil Burger', price: '$10.00', id: '7G' },
  { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
  { name: 'Kofta Burger', price: '$11.00', id: '9I' },
  { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
  { name: 'Fries', price: '$3.00', id: '11K' },
  { name: 'Buttered Rice', price: '$3.00', id: '12L' },
  { name: 'Bread Sticks', price: '$3.00', id: '13M' },
  { name: 'Pita Pocket', price: '$3.00', id: '14N' },
  { name: 'Lentil Soup', price: '$3.75', id: '15O' },
  { name: 'Greek Salad', price: '$6.00', id: '16Q' },
  { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
  { name: 'Baklava', price: '$3.00', id: '18S' },
  { name: 'Tartufo', price: '$3.00', id: '19T' },
  { name: 'Tiramisu', price: '$5.00', id: '20U' },
  { name: 'Panna Cotta', price: '$5.00', id: '21V' },
]

const Item=({name,price})=>{
    return(
        <View style={styles.innerContainer}>
            <Text style={styles.items}>{name}</Text>
            <Text style={styles.items}>{price}</Text>
        </View>
    )
}

const Header=()=><Text style={styles.header}>View Menu</Text>

const Footer=()=><Text style={styles.footer}> All Copy Rights Reserved By Little Lemon 2023</Text>

export function MenuItems()
{
    const renderItem=({item})=><Item name={item.name} price={item.price}/>
    //rendering component called item
    return(
        <View style={styles.container}>
            <FlatList data={menuItems} renderItem={renderItem}
                ListHeaderComponent={Header}
                ListFooterComponent={Footer}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:0.75,
        backgroundColor:'#333333',
        margin:2
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
        margin:1
    },
    items:{
        fontSize:25,
        color:'yellow',
        alignItems:'center',
        paddingTop:5,
        paddingLeft:10,
        fontWeight:'300'

    },
    footer:{
        fontSize:20,
        color:'yellow',
        fontWeight:400,
    }
}
)