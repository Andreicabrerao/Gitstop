import React from 'react';
import { Button, Text, View, StyleSheet, Image ,TouchableOpacity} from 'react-native';

export default ({history}) => {

  const onSubmit = (event) => {
    fetch('/api/login', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(),
    })
    .then((res)=>alert("hey there we did it"))
    .catch((err)=>(err))
  };

  return (
    <View style= {styles.container}>
      
      <Text>Welcome to GitStop!
       <Text>{'\n'}</Text>
        This is your teams shop to work with fixing those flats and bumps in your code. Work collaboratively and keep track of all present issues in your repositories to stay ahead of the curve. 
      </Text>
      <TouchableOpacity style={styles.loginButton} activeOpacity={0.5} onPress={(event) => onSubmit()}>
        <Image 
          source={require('../github-icon.png')} 
          style={styles.ImageIconStyle} 
          />
        <Text style={styles.TextStyle}> Login Using Github </Text>

      </TouchableOpacity>
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
