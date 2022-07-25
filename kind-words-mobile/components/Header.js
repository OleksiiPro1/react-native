import { SafeAreaView } from 'react-native-web';

export default (props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>{props.label}</Text>
      </View>
    </SafeAreaView>
  );
};
