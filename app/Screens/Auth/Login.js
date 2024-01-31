import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import axios from 'axios';
import { styleAuth } from '../../StyleSheet/Auth/styles';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const fetchLogin = async() => {
        const data = {
            'email':email,
            'password':password
        }

        await axios.post(`http://192.168.155.7:8080/api/login`, data)
        .then(response => {
            console.log(response.data);
            if (response.data.success){
              navigation.navigate("Home", { success: response.data.success });
            }else{
              alert("Bad Request")
            }
        })
        .catch(error=> {
            console.log(error);
        })
    }

  return (
    <View style={styleAuth.container}>
      <TextInput placeholder='email ...' style={styleAuth.input} placeholderTextColor={'black'} onChangeText={(text)=>setEmail(text)} value={email}/>
      <TextInput placeholder='password ...' style={styleAuth.input} placeholderTextColor={'black'} onChangeText={(text)=>setPassword(text)} value={password}/>
      <TouchableOpacity onPress={fetchLogin}>
        <Text style={styleAuth.touchable}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})