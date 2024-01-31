import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import WelcomeScreen from './app/Welcome/WelcomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from './app/Screens/AboutScreen';
import HomeScreen from './app/Screens/HomeScreen'
import WelcomeScreenTwo from './app/Welcome/WelcomeTwo';
import PrivacyPolicyScreen from './app/Screens/PrivacyPolicyScreen';
import welcomeScreenThree from './app/Welcome/welcomeScreenThree';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name='WelcomeTwo' component={WelcomeScreenTwo} options={{headerShown: false}}/>
      <Stack.Screen name='WelcomeThree' component={welcomeScreenThree} options={{headerShown: false}}/>
      <Stack.Screen name='About' component={AboutScreen} options={{headerShown: false}}/>
      <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name='Privacy' component={PrivacyPolicyScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

