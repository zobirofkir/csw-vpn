import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import axios from 'axios';
import { styleAuth } from '../../StyleSheet/Auth/styles';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const fetchRegister = async() => {
        const data = {
            'name':name,
            'email':email,
            'password':password
        }

        await axios.post(`http://192.168.155.7:8080/api/register`, data)
        .then(response => {
            console.log(response.data);
            if (response.data.success){
              navigation.navigate('Login');
            }else{
              alert('Bad Request')
            }
        })
        .catch(error=> {
            console.log(error);
        })
    }

  return (
    <View style={styleAuth.container}>
      <TextInput placeholder='username ...' style={styleAuth.input} placeholderTextColor={'black'} onChangeText={(text)=>setName(text)} value={name}/>
      <TextInput placeholder='email ...' style={styleAuth.input} placeholderTextColor={'black'} onChangeText={(text)=>setEmail(text)} value={email}/>
      <TextInput placeholder='password ...' style={styleAuth.input} placeholderTextColor={'black'} onChangeText={(text)=>setPassword(text)} value={password}/>
      <TouchableOpacity onPress={fetchRegister}>
        <Text style={styleAuth.touchable}>Register</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({})