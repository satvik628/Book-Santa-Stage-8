import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,TextInput,Image } from 'react-native';
import MyHeader from '../components/MyHeader';
import firebase from 'firebase';
import db from '../config';

export default class SettingScreen extends React.Component{
 constructor(){
    super();
    this.state={
      emailId   : '',
      firstName : '',
      lastName  : '',
      address   : '',
      contact   : '',
      docId     : ''
    }
  }

getUserDetails=async()=>{
  var user=firebase.auth().currentUser
  var email=user.email
  db.collection('users').where('email','==',email).get().then(snapshot=>snapshot.forEach(doc => {
      var data = doc.data()
        this.setState({
          email   : data.email,
          firstName : data.firstName,
          lastName  : data.lastName,
          address   : data.address,
          contact   : data.mobileNo,
          docId     : doc.id
        })
      })
    )
}


updateUserDetails=()=>{
  db.collections('users').doc(this.state.docId).update({
    "firstName": this.state.firstName,
      "lastName" : this.state.lastName,
      "address"   : this.state.address,
      "mobileNo"   : this.state.contact,
  })

  alert("Your Profile details updated Sucessfully : )")
}




componentDidMount(){
  this.getUserDetails()
}

  render(){

    
    
    return(
<View>

<MyHeader title="My Profile"/>

<Text style={{fontSize:36,alignSelf:'center'}}>Your Profile</Text>
<Image
source={{
   uri:'https://icons-for-free.com/iconfiles/png/512/avatar+person+profile+user+icon-1320086059654790795.png'
}}
style={{alignSelf:'center',width:100,height:100}}
/>


 <TextInput
              style={styles.formTextInput}
              placeholder ={"First Name"}
              maxLength ={8}
              onChangeText={(text)=>{
                this.setState({
                  firstName: text
                })
              }}
              value ={this.state.firstName}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Last Name"}
              maxLength ={8}
              onChangeText={(text)=>{
                this.setState({
                  lastName: text
                })
              }}
                value ={this.state.lastName}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Contact"}
              maxLength ={10}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  contact: text
                })
              }}
                value ={this.state.contact}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Address"}
              multiline = {true}
              onChangeText={(text)=>{
                this.setState({
                  address: text
                })
              }}
                value ={this.state.address}
            />

            <TouchableOpacity style={styles.button} onPress={()=>{this.updateUserDetails()}}>
            <Text style={styles.buttonText}>Update & Save</Text>
            
            </TouchableOpacity>

</View>
    )
  }
}


const styles = StyleSheet.create({
  keyBoardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  formTextInput:{
    width:"75%",
    height:45,
    alignSelf:'center',
    borderColor:'black',
    borderRadius:20,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:10,
    backgroundColor:"blue",
    
    borderRadius:20,
    shadowColor: "#000",
    
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
     buttonText:{
   color:'#ffff',
   fontWeight:'200',
   alignSelf:'center',
   fontSize:20
 },
  }
)