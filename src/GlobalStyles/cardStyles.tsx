import {StyleSheet} from 'react-native';

const cardStyles = StyleSheet.create({
  container: {
    backgroundColor: '#21144d',
    width: '50%',
  },
  name: {
    height: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#de2c7b',
    alignSelf: 'center',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});
export default cardStyles;
