import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

const SkeletonSearchScreen = () => {
  return (
    <View style={styles.container}>
      {/* Search Input Skeleton */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputSkeleton} />
        <View style={styles.buttonSkeleton} />
      </View>

      {/* Item List Skeleton */}
      <View style={styles.listContainer}>
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <View key={index} style={styles.itemSkeleton} />
        ))}
      </View>
    </View>
  );
};

export default SkeletonSearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInputSkeleton: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    height: 40, // Match height of search input
    marginRight: 10,
    backgroundColor: 'gray', // Placeholder color
  },
  buttonSkeleton: {
    width: 80, // Width of button
    height: 40, // Height of button
    backgroundColor: 'gray', // Placeholder color
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemSkeleton: {
    width: '32%', // Adjust as per your design
    height: 150, // Adjust as per your design
    marginBottom: 10,
    backgroundColor: 'gray', // Placeholder color
    borderRadius: 10,
  },
});
