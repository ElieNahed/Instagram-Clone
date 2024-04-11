import {StyleSheet} from 'react-native';

const camStyles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#ccc1',
  },
  openCameraButton: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 100 / 2,
    position: 'absolute',
    bottom: 100,
    borderWidth: 3,
    borderColor: '#fff',
  },
  captureButton: {
    backgroundColor: '#ccc2',
    borderRadius: 100 / 2,
    width: 75,
    height: 75,
    borderWidth: 3,
    borderColor: 'blue',
  },
  capturedImageContainer: {
    width: 300,
    height: 300,
    borderRadius: 10,
    overflow: 'hidden',
  },
  capturedButtonsContainer: {
    flexDirection: 'row-reverse',
    width: '65%',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  cameraButtons: {
    position: 'absolute',
    top: 10,
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  errorText: {
    fontSize: 20,
    color: 'red',
  },
  capturedImage: {
    width: '100%',
    height: '100%',
  },
  captureButtonContainer: {
    position: 'absolute',
    bottom: 100,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
  },
  captionInputContainer: {
    marginVertical: 100,
    paddingHorizontal: 20,
  },
  captionInput: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
  },
});
export default camStyles;
