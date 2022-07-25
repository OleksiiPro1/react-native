import { SafeAreaView, Text, View } from 'react-native';

export default function Header(props) {
  return (
    <SafeAreaView>
      <View>
        <Text>{props.label}</Text>
      </View>
    </SafeAreaView>
  );
}
