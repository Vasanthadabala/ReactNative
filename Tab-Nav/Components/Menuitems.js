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

const Footer=()=><Text style={styles.footer}> All Copy Rights Reserved By Little Lemon 2023</Text>

export function MenuItems()
{
    const renderItem=({item})=><Item name={item.name} price={item.price}/>
    //rendering component called item
    return(
        <View style={styles.container}>
            <SectionList sections={menuItems} renderItem={renderItem} 
            renderSectionHeader={Header}
            ItemSeparatorComponent={Separator}
            ListFooterComponent={Footer}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
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
        margin:1,
        backgroundColor:'black'
    },
    items:{
        fontSize:25,
        color:'yellow',
        alignItems:'center',
        padding:5,
        fontWeight:'400'
    },
    footer:{
        fontSize:18,
        color:'white',
        paddingTop:10,
        fontWeight:'200',
        textAlign:'center'
    },
    separator:{
        borderWidth:0.2,
        borderColor:'white'
    }
}
)