import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const apiStyles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#408EC6',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: screenWidth / 2,
  },
  image: {
    width: '50%',
    aspectRatio: 1, // To maintain aspect ratio
    borderRadius: 10,
  },
  name: {
    marginLeft: 10,
    color: 'white',
    fontSize: 16,
  },
  touchable: {
    borderRadius: 10,
  },
});

export default apiStyles;
