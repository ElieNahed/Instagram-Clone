import {StyleSheet} from 'react-native';

const tabStyles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  tabButtonFocused: {
    backgroundColor: '#fff', // Adjust as needed
  },
  tabText: {
    fontSize: 14,
    color: '#000',
  },
  tabTextFocused: {
    color: '#000', // Adjust as needed
    fontWeight: 'bold',
  },
});

export default tabStyles;
