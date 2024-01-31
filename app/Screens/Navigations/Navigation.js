import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import AboutScreen from '../AboutScreen';
import PrivacyPolicyScreen from '../PrivacyPolicyScreen'
import Home from '../Home';
import { Image } from 'react-native';
import { stylesHome } from '../../StyleSheet/styleHome';
import Login from '../Auth/Login';
import Register from '../Auth/Register';

const Drawer = createDrawerNavigator();
const Navigation = () => {
  return (
    <Drawer.Navigator initialRouteName='Home' screenOptions={{
      headerStyle: {
        backgroundColor: '#341792',
      },
      headerTintColor: 'white'
    }}>
      <Drawer.Screen name='vpn' component={Home} options={{
        drawerLabelStyle: {display: 'none'},
        drawerIcon: () => (
          <Image source={require('../../Images/Icons/connect.png')} style={stylesHome.logo}/>
        )
      }}
        
        />
        <Drawer.Screen name='Home' component={Home} options={{
          drawerActiveBackgroundColor: '#341792',
          drawerActiveTintColor: 'white'
        }}/>
        <Drawer.Screen name='About' component={AboutScreen} options={{
          drawerActiveBackgroundColor: '#341792',
          drawerActiveTintColor: 'white'
        }}/>
        <Drawer.Screen name='Privacy' component={PrivacyPolicyScreen} options={{
          drawerActiveBackgroundColor: '#341792',
          drawerActiveTintColor: 'white'          
        }}/>
          <Drawer.Screen name='Login' component={Login} options={{
          drawerActiveBackgroundColor: '#341792',
          drawerActiveTintColor: 'white',
          drawerLabelStyle: {
            marginTop: '180%',
            padding: 5
          }   
        }}/>
        <Drawer.Screen name='Register' component={Register} options={{
          drawerActiveBackgroundColor: '#341792',
          drawerActiveTintColor: 'white'          
        }}/>

    </Drawer.Navigator>
  )
}

export default Navigation

