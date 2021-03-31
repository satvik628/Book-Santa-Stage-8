import React from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert} from 'react-native';
  import {DrawerItems} from 'react-navigation-drawer';

  import firebase from 'firebase';
  

  export default class CustomSideBarMenu extends React.Component{
  render(){
    return(
      <View>

      <DrawerItems {...this.props}/>
     
        <View style={styles.logOutContainer}>
          <TouchableOpacity style={styles.logOutButton}
          onPress = {() => {
              this.props.navigation.navigate('WelcomeScreen')
              firebase.auth().signOut()
          }}>
            <Text style={styles.logOutText}>                 Log Out of app</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }


  }

const styles=StyleSheet.create({
logOutContainer : {
    flex:0.2,
    justifyContent:'flex-end',
    paddingBottom:30
  },
  logOutButton : {
    height:30,
    width:'103%',
    justifyContent:'center',
    padding:10,
   // marginTop:200,
   borderRadius:60,
  },
  logOutText:{
    fontSize: 15,
    fontWeight:'bold',
    color:'white',
    backgroundColor:'red',
     height:50,
      borderRadius:60,
     // alignSelf:'center',
  }


})






