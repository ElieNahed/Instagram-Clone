import React, {useState} from 'react';
import {View, Text, TextInput, Button, Image, StyleSheet} from 'react-native';

const AddPostScreen = () => {
  const [imageUri, setImageUri] = useState('');
  const [caption, setCaption] = useState('');

  const handleImageUpload = () => {
    // Code to handle image upload goes here
    // This could involve using a library like react-native-image-picker or react-native-image-crop-picker
    // For simplicity, let's assume the imageUri is set after successful image selection
    setImageUri('example_image_uri.jpg');
  };

  const handleSubmit = () => {
    // Code to submit post goes here
    console.log('Image URI:', imageUri);
    console.log('Caption:', caption);
    // This is where you would typically make an API call to upload the image and caption
    // After successful upload, you might navigate the user back to the home screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Post</Text>
      <View style={styles.imageContainer}>
        {imageUri ? (
          <Image source={{uri: imageUri}} style={styles.image} />
        ) : (
          <Button title="Upload Image" onPress={handleImageUpload} />
        )}
      </View>
      <TextInput
        style={styles.captionInput}
        placeholder="Write a caption..."
        multiline
        value={caption}
        onChangeText={setCaption}
      />
      <Button title="Post" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  captionInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    minHeight: 100,
    marginBottom: 20,
  },
});

export default AddPostScreen;
