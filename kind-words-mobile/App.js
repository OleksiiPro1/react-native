import { StatusBar } from 'expo-status-bar';
import react, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import PostItem from './components/PostItem';
import { colors } from './styles/constants';

const renderItem = (post) => {
  return <PostItem post={post.item} />;
};
export default function App() {
  const [posts, setPosts] = useState([
    {
      sender: 'Ramon',
      handle: 'hola_soy_milk',
      body: "You're awesome!",
      createdAt: new Date(),
    },
    {
      sender: 'Pearl',
      handle: 'punk_rock_swords',
      body: 'Affluent!',
      createdAt: new Date(),
    },
    {
      sender: 'Garnet',
      handle: 'stronger_than_u',
      body: 'An experience!',
      createdAt: new Date(),
    },
  ]);
  return (
    <View style={styles.container}>
      <Header style={styles.logo} label="React Native!" />
      <StatusBar style="auto" />
      <FlatList
        data={posts}
        style={styles.list}
        renderItem={renderItem}
        keyExtractor={(item) => item.body}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  list: {
    marginTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
  },
});
