import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigations/Navigation';

const HomeScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Navigation />
    </NavigationContainer>
  )
}

export default HomeScreen

