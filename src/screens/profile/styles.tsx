import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  userName: {color: '#000'},
  userDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  ffContainer: {flexDirection: 'row'},
  ffCol: {flexDirection: 'column'},
  ffNumbers: {fontSize: 22, textAlign: 'center', color: '#000'},
  ffLabel: {textAlign: 'center', marginHorizontal: 10, color: '#000'},
  profileButtons: {
    padding: 10,
    paddingHorizontal: 45,
    borderRadius: 11,
    backgroundColor: '#405DE6',
  },
  profileButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  buttonTitles: {color: '#F3F8FF'},
  postsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {color: '#000'},
});
export default styles;
