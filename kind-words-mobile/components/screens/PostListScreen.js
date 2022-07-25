import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { colors } from '../../styles/constants';
import Header from '../Header';
import PostList from '../PostItem';

const renderItem = (item) => <PostList post={item.item} />;

export default ({ navigation }) => {
  const [posts, setPosts] = useState([
    {
      sender: 'Admin',
      handle:
        'For Ukrainian nationals, the Federal Agency for Reception and Support Services (BBU) has set up a hotline: +43 1 2676 870 9460.',
      body: 'Ukrainians in Wien',
      createdAt: new Date(),
    },
  ]);
  const onNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.cardBackground}
        translucent={true}
        style="dark"
      />
      <Header label="Ukrainians in Wien" />
      <FlatList
        style={styles.list}
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.body}
      />
      <Button
        title="New Post"
        onPress={() => navigation.push('NewPost', { onNewPost })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
  },
  container: {
    height: '100%',
    backgroundColor: colors.background,
  },
});
