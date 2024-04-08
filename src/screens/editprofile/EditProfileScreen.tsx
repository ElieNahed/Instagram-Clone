import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {DrawerActions, NavigationProp} from '@react-navigation/native';
interface EditProfileProps {
  navigation: NavigationProp<any>;
}

const EditProfileScreen: React.FC<EditProfileProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Text style={styles.menuText}>Menu</Text>
        </TouchableOpacity>
      </View>
      {/* Add your edit profile content here */}
      <TextInput
        style={styles.input}
        placeholder="Edit your profile details..."
        multiline={true}
        numberOfLines={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  menuText: {
    fontSize: 16,
  },
  input: {
    height: 200,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
  },
});

export default EditProfileScreen;
