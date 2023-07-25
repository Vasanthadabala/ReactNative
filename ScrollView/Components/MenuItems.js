import { ScrollView } from "react-native";
import { View,Text } from "react-native";

const menuItems=['item1 \nitem2 \nitem3 \nitem4 \nitem5 \nitem6 \nitem7 \nitem8 \nitem9 \n']

export function MenuItems()
{
    return(
        <View style={{flex:0.4}}>
            <ScrollView indicatorStyle={'white'} style={{padding:40,backgroundColor:'black'}}>
                <Text style={{fontSize:40,color:'white',flexWrap:'wrap'}}>MenuItems</Text>
                <Text style={{fontSize:40,color:'yellow'}}>{menuItems[0]}</Text>
            </ScrollView>
        </View>
    )
}