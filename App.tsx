import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, SafeAreaViewBase, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/views/screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: '10%',
    marginVertical: 6,
    marginHorizontal: 12,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
