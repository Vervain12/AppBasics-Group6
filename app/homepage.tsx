import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CityInfo from '../components/CityInfo';

const CitiesTab = createBottomTabNavigator();

const WelcomeScreen = () => {

  const calgaryInfo = () => (
    <CityInfo
      cityName="Calgary"
      imageSource={require('../assets/calgary.jpg')}
      link="https://www.calgary.ca/home.html"
      info="Calgary is a city well known for its yearly stampede, as well as its close proximity to the rocky mountains!"
    />
  );

  const edmontonInfo = () => (
    <CityInfo
      cityName="Edmonton"
      imageSource={require('../assets/edmonton.jpg')}
      link="https://www.edmonton.ca/"
      info="Edmonton, the capital of Alberta, is famous for its local 'River Valley' as well as the popular West Edmonton Mall!"
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to My New App</Text>
      <CitiesTab.Navigator>
        <CitiesTab.Screen
          name="Calgary"
          component={calgaryInfo}
          options={{
            tabBarIcon: ({size}) => (
              <Image 
                source={require('../assets/calgaryflag.png')}
                style={{
                  width: size,
                  height: size
                }}
              />
            )
          }}
        />
        <CitiesTab.Screen
          name="Edmonton"
          component={edmontonInfo}
          options={{
            tabBarIcon: ({size}) => (
                <Image 
                  source={require('../assets/edmontonflag.png')}
                  style={{
                    width: size,
                    height: size
                  }}
                />
            )
          }}
        />
      </CitiesTab.Navigator>
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

export default WelcomeScreen;