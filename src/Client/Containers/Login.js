import React from 'react';
import { Button, Text, View, StyleSheet, Image ,TouchableOpacity, Alert} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import {AuthSession} from 'expo';
import { authorize } from 'react-native-app-auth';

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
  );
};


const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 100,
      marginLeft: 25,
      marginRight: 25
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
  introText: {
    height: 50,
    width: 50,
  },

  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
  
 },
  
 TextStyle :{
  
   color: "#fff",
   marginBottom : 4,
   marginRight :20,
   
 },
  
 SeparatorLine :{
  
 backgroundColor : '#fff',
 width: 1,
 height: 40
  
 }
});
