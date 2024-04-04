import {StyleSheet} from 'react-native';

const apiStyles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#408EC6',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
    marginHorizontal: 10,
    columnGap: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#408EC6',
  },
  item: {
    backgroundColor: '#1E2761',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: '90%',
    height: 340,
  },
  image: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
  },
  album: {
    // Define the 'album' style
    backgroundColor: '#FFFFFF', // Add your desired styles for the album container
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default apiStyles;
