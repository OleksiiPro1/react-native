import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './styles/constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>My new app!!</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    color: colors.text,
    fontSize: 60,
  },
});
