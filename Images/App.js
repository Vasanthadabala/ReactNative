import { StyleSheet, View } from 'react-native';
import { Header } from './Components/Header';

export default function App() {
  return (
    <View style={styles.container}>
        <Header/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#495E57',
  },
});
