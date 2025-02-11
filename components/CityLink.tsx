import React from 'react';
import { Linking, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CityLink = ({ link }) => {
  const handlePress = () => {
    Linking.openURL(link);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.linkText}>Go to city page</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});

export default CityLink; 