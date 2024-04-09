import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#222',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  userName: {color: '#F3F8FF'},
  userDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  ffContainer: {flexDirection: 'row'},
  ffCol: {flexDirection: 'column'},
  ffNumbers: {fontSize: 22, textAlign: 'center'},
  ffLabel: {textAlign: 'center', marginHorizontal: 10},
  profileButtons: {
    padding: 10,
    paddingHorizontal: 45,
    borderRadius: 11,
    backgroundColor: '#444',
  },
  profileButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  buttonTitles: {color: '#F3F8FF'},
  postsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
export default styles;
