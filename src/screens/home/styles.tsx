import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  actorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  actorImage: {
    borderRadius: 10,
    aspectRatio: 1,
  },
  actorHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    fontFamily: '',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  likeIconContainer: {
    marginRight: 10,
  },
  commentIconContainer: {
    marginRight: 10,
  },
  shareIconContainer: {
    marginRight: 10,
  },
  saveIconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  likeCount: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    alignSelf: 'flex-start',
    color: 'black',
  },
  actorListContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 20,
  },
});
export default styles;
