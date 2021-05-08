import React from 'react';
<<<<<<< HEAD
import { Button, Text, View, StyleSheet, Image ,TouchableOpacity, Alert} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import {AuthSession} from 'expo';
import { authorize } from 'react-native-app-auth';
=======
import { Button, Text, View, StyleSheet, Image ,TouchableOpacity, Alert, SafeAreaView} from 'react-native';
>>>>>>> ddd2fc071bc9a72cea1be8fce6bb8004d8215b3a

// require('dotenv').config()

WebBrowser.maybeCompleteAuthSession();

const clientID = '72e3b30caf0e91e8a764';
const clientSecret = 'a3c8547c9983f3abc6ac2e3878369a89b94a0e5c';

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: `https://github.com/login/oauth/authorize?client_id=${clientID}&scope=repo`,
};

const config = {
  redirectUrl: 'ios://oauthredirect',
  clientId: '72e3b30caf0e91e8a764',
  clientSecret: 'a3c8547c9983f3abc6ac2e3878369a89b94a0e5c',
  scopes: ['identity'],
  additionalHeaders: { 'Accept': 'application/json' },
  serviceConfiguration: {
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    tokenEndpoint: 'https://github.com/login/oauth/access_token',
    revocationEndpoint:
      'https://github.com/settings/connections/applications/72e3b30caf0e91e8a764'
  }
};  

export default ({history}) => {

   
  // Log in to get an authentication token
  const authState = authorize(config);

  // const [userInfo, setUserInfo] = useState(null);
  // const [didError, setDidError] = useState(false);

  const handleGithubLogin = async () => {
    let redirectUrl = AuthSession.getRedirectUrl();
    let results = await AuthSession.startAsync({
      authUrl:
      `https://github.com/login/oauth/authorize?client_id=${clientID}&scope=repo%20right:org`
    })
    .then((response) => { return response.json() } ) 
    .catch((error) => console.warn("fetch error:", error))
  };

  return (
<<<<<<< HEAD
    <View style= {styles.container}>
      <Text>Welcome to GitStop! 
       <Text>{'\n'}</Text>
        This is your teams shop to work with fixing those flats and bumps in your code. Work collaboratively and keep track of all present issues in your repositories to stay ahead of the curve. 
      </Text>
      <TouchableOpacity style={styles.loginButton} activeOpacity={0.5} onPress={() => authState()}>
        <Image 
          source={require('../github-icon.png')} 
          style={styles.ImageIconStyle} 
          />
        <Text style={styles.TextStyle}> Login Using Github </Text>

      </TouchableOpacity>
{/* 
      <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
        }}
    />*/}
      <Button title="Home Page" onPress={() => history.push("/home")}/> 
    </View> 
=======
    <SafeAreaView style= {styles.container}>
      <View style = {styles.introBox}>
        <Text style = {styles.label}>Welcome to GitStop!</Text>
        <Text style = {styles.about}>This is your teams shop to work with fixing those flats and bumps in your code. Work collaboratively and keep track of all present issues in your repositories to stay ahead of the curve. </Text>
        <TouchableOpacity style={styles.loginButton} activeOpacity={0.5} onPress={() => history.push("/home")}>
          <Image 
            source={require('../github-icon.png')} 
            style={styles.ImageIconStyle} 
            />
          <Text style={styles.TextStyle}> Login Using Github </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView> 
>>>>>>> ddd2fc071bc9a72cea1be8fce6bb8004d8215b3a
  );
};


const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#293241',
      width: '100%'
    },

  loginButton: {
    backgroundColor: '#555555',
    borderRadius: 8,
    borderColor: 'black',
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    },

  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
   },
  
 TextStyle: {
   color: "#fff",
   marginBottom : 4,
   marginRight :20,
  },

  introBox: {
    height: 275,
    width: "80%",
    backgroundColor: '#98c1d9',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    shadowOffset: { height: 3, width: 3 },
    shadowColor: '#e0fbfc',
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },

  label: {
    color: '#e0fbfc',
    fontSize: 30,
    paddingBottom: 20,
    paddingTop: 20,
  },
  
  about: {
    color: '#e0fbfc',
    fontSize: 15,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
  }
});
