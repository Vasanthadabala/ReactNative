import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.1, backgroundColor: '#F4CE14' }}>
      <Text
        style={{
          fontSize: 30,
          color: 'black',
          textAlign: 'center',
          fontWeight:700,
          paddingTop:40
        }}>
        Little Lemon
      </Text>
    </View>
  );
}
