import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  renderItemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    paddingBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    marginRight: 10,
    flex: 0.15,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 5,
    marginLeft: 10,
    flex: 0.3,
  },
  message: {flex: 0.5},
  buttonsContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  clearButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 100 / 2,
    position: 'absolute',
    bottom: 40,
    right: 20,
    zIndex: 999,
  },
  bellButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 100 / 2,
    position: 'absolute',
    bottom: 40,
    left: 20,
    zIndex: 999,
  },
});
export default styles;
