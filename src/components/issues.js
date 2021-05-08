import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Alert} from 'react-native';
import { Button, Overlay, ListItem, Icon, Input} from 'react-native-elements';
import { Ionicons, Entypo, AntDesign, Foundation  } from '@expo/vector-icons'; 

export default (props) => {
  const [visible, setVisible] = useState(false);
  const [comments, setComments] = useState([{id: 1 , body: 'bla bla heloo heheheheheh ee i llloooo f  this is test 1 for a really long comment to see how it behaves'},{id:'This is the second Repo', body: 'this is test 2'},{id:'This is the third Repo', body: 'this is test 3'}]) 
  const [user, setUser]= useState([{user: 'Geo', }, {User: 'Andrei'}])
  const [text, setText] = React.useState("");

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const SeparatorComponent = () => {
    return <View style={styles.separatorLine} />
  }

  const renderItem = ({ item }) => (
  <View>  
    <View style = {styles.items}>
      <ListItem>
          <ListItem.Content>
              <ListItem.Title style= {styles.issues}>{item.body}</ListItem.Title>
          </ListItem.Content>
      </ListItem>
    </View>
    <View style = {styles.icons}>
        <AntDesign name="delete" size={24} color="black" style ={styles.updates} onPress = {deleteComment(item.id)}/>
        <Foundation name="clipboard-pencil" size={24} color="black" style ={styles.updates}/>
    </View> 
  </View>
  );

  const updateText = (input) => {
    setText(input)
  }
  const getComments = (text) => {
    //API post to comment database
    /*
    setComments([...comments, text])
    fetch(/getRepos ){
      method: 'GET',
      headers: {
        accept: 'application/jason',
        'content-Type': application/json
      },
      body: JSON.stringify({
        id: ??
        comment: text
      })
      .then((res)=>res.json())
      .then((res) => {setComments([...comments, text])})
      .catch((error)=>{
        console.log(error)
      })
    }
    */
  }

  const updateComments = (text) => {
    //API post to comment database
    /*
    setComments([...comments, text])
    fetch(/commentRoute ){
      method: 'POST',
      headers: {
        accept: 'application/jason',
        'content-Type': application/json
      },
      body: JSON.stringify({
        id: ??
        comment: text
      })
      .then((res)=>res.json())
      .then((res) => {setComments([...comments, text])})
      .catch((error)=>{
        console.log(error)
      })
    }
    */
  }

  const deleteComment  = (id) =>{
    //const ID = id
    // Alert.alert(
    //   "Alert Title",
    //   "Are you sure you want to delete the message?",
    //   [
    //     {
    //       text: "Cancel",
    //       onPress: () => Alert.alert("Cancel Pressed"),
    //       style: "cancel",
    //     },
    //     {
    //       text: "Delete",
    //       onPress: () => {
    //         setComments(comments.filter(comments => comments.id !== ID ))
    //       }
    //     }

    //   ],
    //   {
    //     cancelable: true,
    //     onDismiss: () =>
    //       Alert.alert(
    //         "This alert was dismissed by tapping outside of the alert dialog."
    //       ),
    //   }
    // );
  }

  /*
  const editComment(id){
    fetch('route',{
      method: "put",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						??????
					})
				}).then(() => {
						.then(response => response.json())
						.then(result => {
							console.log("result", result),
						})
						.catch(e => console.error(e));
				});
  }
  */

  return (
    <View>
        <ListItem onPress={toggleOverlay} bottomDivider={true} style={styles.container}>
        <ListItem.Content>
            <ListItem.Title style={styles.content}>{props.item.body}</ListItem.Title> 
        </ListItem.Content>
        </ListItem>
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle= {styles.overlayContainer}>
            <FlatList
                data={comments}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={SeparatorComponent}
            />
            <SafeAreaView >
            <View style = {styles.safeZone}>
                <Input
                placeholder="Comment"
                // leftIcon={{ type: 'font-awesome', name: 'comment' }}
                style={styles}
                onChangeText={updateText}
                />
                <Ionicons name="send" size={24} color="black" onPress = {updateComments}/>
            </View>
                </SafeAreaView>
        </Overlay>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        height: 60,
        width: 325,
      },
    content: {
        // backgroundColor: 'black',
    },
    overlayContainer: {
        height: 450,
        width: 325,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    issues: {
        height: 'auto',
        width: 250,
    },
    safeZone : {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 270,
    },
    separatorLine: {
      height: 1,
      backgroundColor: 'black',
      paddingTop: 2,
      width: 'auto',
    },
    items: {
      alignItems: 'stretch',
      width: 270,
    },
    icons: {
      justifyContent: 'flex-end',
      flexDirection: 'row',
    },
    updates: {
      margin: 5
    }
  });