import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#FFF', // Changed background color to white
    padding: 20, // Added padding for better spacing
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  inputStyle: {
    backgroundColor: '#FFF', // Changed input background color to white
    borderRadius: 7,
    borderWidth: 1, // Added border
    borderColor: '#CCC', // Border color gray
    paddingHorizontal: 20,
    color: '#000', // Changed text color to black
    flex: 1, // Updated flex to take the available space
  },
  text: {color: '#000'}, // Changed text color to black
  changeableInfo: {
    borderTopWidth: 2,
    marginTop: 30,
    borderTopColor: '#444',
  },
  saveButton: {
    backgroundColor: 'blue', // Changed save button background color to blue
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    marginRight: 25,
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: '#F3F8FF',
  },
  saveButtonText: {
    color: '#FFF', // Changed save button text color to white
  },
});

export default styles;
