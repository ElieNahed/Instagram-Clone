import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  propContainer: {
    width: '70%',
  },
  choices: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  yesButton: {
    backgroundColor: '#4056E6',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  noButton: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#000',
  },
  text: {color: '#000'},
});
export default styles;
