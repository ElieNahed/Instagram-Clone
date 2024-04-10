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
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 15,
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
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 20,
    padding: 20,
  },
  modalContent: {
    alignSelf: 'center',
  },
  modalText: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalCloseText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },

  successButton: {
    backgroundColor: 'green',
  },

  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
});
export default styles;
