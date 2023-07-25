import { StyleSheet,View } from 'react-native';
import FeedBackForm from './Components/FeedBackForm';

export default function App() {
  return (
    <View style={styles.container}>
      <FeedBackForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495e57',
  },
});
