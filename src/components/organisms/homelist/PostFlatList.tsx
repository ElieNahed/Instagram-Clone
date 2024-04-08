import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import axios from 'axios';

interface Post {
  id: string;
  image: string;
  caption: string;
}

interface PostFlatListProps {
  // Define any props if needed
}

const PostFlatList: React.FC<PostFlatListProps> = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        'https://66134ae153b0d5d80f67157c.mockapi.io/InstagramData/Actor',
      );
      const data: Post[] = response.data.map((post: any) => ({
        id: post.id,
        image: post.image,
        caption: post.caption,
      }));
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const renderItem = ({item}: {item: Post}) => (
    <View style={styles.postContainer}>
      <Image source={{uri: item.image}} style={styles.postImage} />
      <Text style={styles.postCaption}>{item.caption}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  postContainer: {
    marginBottom: 20,
  },
  postImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  postCaption: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default PostFlatList;
