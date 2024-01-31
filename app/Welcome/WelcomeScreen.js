import { Image, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../StyleSheet/welcome1'


const WelcomeScreen = () => {
  const navitgation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Image source={require('../Images/welcome1.png')} style={styles.image}/>
      </View>
      <View style={styles.welcomView}>
          <Text style={styles.welcomText}>Welcome to CSW-VPN, your gateway to secure and seamless online connections.</Text>
      </View>
         <TouchableOpacity style={styles.buttonOpacity} onPress={()=>navitgation.navigate('WelcomeTwo')}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
    </>
  )
}

export default WelcomeScreen

