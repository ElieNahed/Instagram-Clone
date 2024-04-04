import {StyleSheet} from 'react-native';

const imageGalleryStyles = StyleSheet.create({
  newImage: {
    marginTop: 20,
    width: '100%',
    height: 200,
  },
  photoAlbum: {
    width: 300, // Adjust the width as per your requirement
    height: 300, // Adjust the height as per your requirement
    margin: 5,
  },
  sectionContainer: {
    backgroundColor: '#1E2761',
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 20,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  sectionTitle: {
    color: '#de2c7b',
    fontSize: 18,
    marginBottom: 10,
  },
  sectionTitleMap: {
    color: '#de2c7b',
    fontSize: 18,
    marginBottom: 10,
    alignSelf: 'center',
  },
  captureText: {
    color: '#de2c7b',
    marginVertical: 20,
    alignSelf: 'center',
  },
  mapContainer: {
    height: 300,
    width: 300,
    alignSelf: 'center',
  },
  viewMoreText: {
    color: '#de2c7b',
  },
  viewMoreTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    margin: 5,
    backgroundColor: '#1E2761',
  },
  bigTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default imageGalleryStyles;
