import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { stylesHome } from '../StyleSheet/styleHome';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const Home = ({route}) => {
  const  success  = route.params;

  const [selectedValue, setSelectedValue] = useState('option1');
  const [connected, setConnected] = useState(false);
  const [proxies, setProxies] = useState([]);
  const [selectedProxy, setSelectedProxy] = useState(null);
  const [server, setServer] = useState([]);
  const [guest, setGuest] = useState([]);

  useEffect(()=> {
    const fetchGuestProxy = async () => {
      try {
        const response = await axios.get(`https://zobirofkir.github.io/proxy/proxy.txt`);
        const proxyList = response.data.split('\n').map((proxy) => proxy.trim());
        setGuest(proxyList)
        console.log(proxyList);
      }catch(error){
        console.log(error);
      }
    };
    fetchGuestProxy();
  }, []);

  useEffect(() => {
    const fetchProxies = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt');
        const proxyList = response.data.split('\n').map((proxy) => proxy.trim());
        setProxies(proxyList);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProxies();
  }, []);

  const fetchData = async () => {

    if (selectedProxy) {
      const [ipAdd, port] = selectedProxy.split(':'); // Split the selected proxy into IP and port
  
      // Use the selected proxy when making requests
      const axiosInstance = axios.create({
        baseURL: 'https://vpnapi.io',
        params: {
          key: '32cd3a30c0664c21b202b5fa0807c72a',
        },
        proxy: {
          host: ipAdd,
          port: port,
        },
      });
  
      // Set the proxy in the axios instance
      axiosInstance.defaults.proxy = {
        host: ipAdd,
        port: port,
      };
  
      try {
        const response = await axiosInstance.get(`/api/${ipAdd}`);
        console.log(response.data);
        setServer([response.data]);
      } catch (error) {
        console.log(error);
        setServer([]); // Set an empty array to avoid undefined error
      }
    } else {
      console.log('No proxy selected');
    }
  };

  
  const getCountryFromResponse = (response) => {
    if (response && response.location && response.location.country) {
      return response.location.country;
    }
    return 'Country not available';
  };

  const getLatitude = (response) => {
    if (response && response.location && response.location.latitude){
      return response.location.latitude;
    }
    return 'Latitude not available'
  }

  const toggleConnection = () => {
    setConnected((prevConnected) => !prevConnected);  
    // If the user is connecting, fetch data using the selected proxy
    if (!connected) {
      fetchData();
    } else {
      // If disconnecting, reset the Axios instance
      axios.defaults.proxy = null;
    }
  };
  
  const handleResponse = server.length > 0 ? getCountryFromResponse(server[0]) : '';
  const handleLatitude = server.length > 0 ? getLatitude(server[0]) : '' ;

  return (
    <>
      <View style={stylesHome.container} >
        {/* <Image style={stylesHome.connect} source={require('../Images/Icons/connect.png')} /> */}

        {
          server.length > 0 && (
            <View>
              <Text style={{color: 'green', fontWeight: '900', fontSize: 15}}> <Text style={{color: 'black', fontSize: 20}}>latitude - </Text> {handleLatitude}</Text>
            </View>
          )
        }

        {
          connected ? (
            <>
              <Image style={stylesHome.connect} source={require('../Images/Icons/success.png')}/>
            </>
          ):(
            <>
              {/* <Text style={{color: 'red', fontWeight: '900'}}>Please Selecte a proxy .</Text> */}
              <Image style={stylesHome.connect} source={require('../Images/Icons/connect.png')} />
            </>
          )
        }

        <TouchableOpacity onPress={toggleConnection}>
          <Text style={stylesHome.disConnect}>{connected ? 'Disconnect' : 'Connect'}</Text>
        </TouchableOpacity>

        {server.length > 0 && (
        <View style={stylesHome.contry}>
          <Text style={{color: 'green', fontWeight: '900', fontSize: 20}}> <Text style={{color: 'black', fontSize: 20}}>contry - </Text> {`${handleResponse}`}</Text>
        </View>
      )}

      </View>

      <View style={stylesHome.picker}>
  {proxies.length > 0 && (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue, itemIndex) => {
        setSelectedValue(itemValue);
        setSelectedProxy(proxies[itemIndex]);
      }}
      dropdownIconColor={'white'}
    >
      {success ? (
        proxies.map((proxy, index) => (
          <Picker.Item
            key={index}
            label={proxy}
            value={`option${index}`}
            style={{
              color: 'white',
              backgroundColor: '#341792',
              textAlign: 'center',
              borderRadius: 10,
            }}
          />
        ))
      ) : (
        guest.map((proxy, index) => (
          <Picker.Item
            key={index}
            label={proxy}
            value={proxy}
            style={{
              color: 'white',
              backgroundColor: '#341792',
              textAlign: 'center',
              borderRadius: 10,
            }}
          />
        ))
      )}
    </Picker>
  )}
</View>


    </>
  );
};

export default Home;

