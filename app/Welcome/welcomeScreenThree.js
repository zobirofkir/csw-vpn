import { Image, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../StyleSheet/welcome3'


const WelcomeScreenThree = () => {
  const navitgation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Image source={require('../Images/welcome3.png')} style={styles.image}/>
      </View>
      <View style={styles.welcomView}>
          <Text style={styles.welcomText}>CSW-VPN: Swiftly secure your online connections with lightning-fast speed and top-notch privacy features.</Text>
      </View>

         <TouchableOpacity style={styles.buttonOpacity} onPress={()=>navitgation.navigate('Home')}>
            <Text style={styles.buttonText}>Welcome</Text>
          </TouchableOpacity>

      </>
  )
}

export default WelcomeScreenThree

