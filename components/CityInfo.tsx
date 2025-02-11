import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CityLink from './CityLink';

const CityInfo = ({ cityName, imageSource, link, info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{cityName}</Text>
      <Image source={imageSource} style={styles.image} />
      <CityLink link={link} />
      <Text style={styles.infoText}>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  cityName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default CityInfo;