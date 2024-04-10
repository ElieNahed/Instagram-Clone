import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {color: '#000'},
  formContainer: {
    width: '65%',
    padding: 5,
    margin: 10,
  },
  formLabel: {
    color: '#000',
    marginTop: 10,
    marginBottom: 3,
  },
  inputField: {
    backgroundColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 11,
  },
  inputText: {color: '#000', flex: 1},
  loginButton: {alignSelf: 'center'},
  image: {height: 100, width: 100},
  modalContainer: {
    backgroundColor: '#500',
    width: '75%',
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#f00',
    borderRadius: 11,
  },
  modalContent: {
    alignSelf: 'center',
    padding: 10,
  },
  modalText: {color: '#F3F8FF'},
  modalCloseText: {color: '#F3F8FF', textAlign: 'right', marginTop: 10},

  successButton: {
    backgroundColor: 'green',
  },
});
export default styles;
