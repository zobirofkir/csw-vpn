import { Image, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../StyleSheet/welcome2'


const WelcomeScreenTwo = () => {
  const navitgation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Image source={require('../Images/welcome2.png')} style={styles.image}/>
      </View>
      <View style={styles.welcomView}>
          <Text style={styles.welcomText}>CSW-VPN: Elevate your online security with seamless, encrypted browsing for ultimate privacy.</Text>
      </View>

         <TouchableOpacity style={styles.buttonOpacity} onPress={()=>navitgation.navigate('WelcomeThree')}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>

      </>
  )
}

export default WelcomeScreenTwo

