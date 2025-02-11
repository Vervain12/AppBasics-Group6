import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CityInfo from '../components/CityInfo';

const Tab = createBottomTabNavigator();

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to My New App</Text>
      <Tab.Navigator>
        <Tab.Screen
          name="Calgary"
          component={() => (
            <CityInfo
              cityName="Calgary"
              imageSource={require('../assets/calgary.jpg')}
              link="https://www.calgary.ca/home.html"
              info="Calgary is known for its vibrant culture, stunning skyline, and proximity to the Rocky Mountains."
            />
          )}
        />
        <Tab.Screen
          name="Edmonton"
          component={() => (
            <CityInfo
              cityName="Edmonton"
              imageSource={require('../assets/edmonton.jpg')}
              link="https://www.edmonton.ca/"
              info="Edmonton is the capital of Alberta and is famous for its festivals, river valley, and West Edmonton Mall."
            />
          )}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default homepage;