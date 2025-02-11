import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import homepage from '../app/homepage';
import signin from '../components/signin';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="signin" component={signin} />
        <Stack.Screen name="homepage" component={homepage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;