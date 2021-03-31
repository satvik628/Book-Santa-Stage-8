import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class MyHeader extends React.Component {
constructor(props){
  super(props)
 this.state={
   value:'',
   userId :  firebase.auth().currentUser.email,
 }

}

getNumberOfUnreadNotifications(){
db.collection('all_notification').where('target_user_id','==',this.state.userId).where('notification_status','==',"unread")
  .onSnapshot((snapshot)=>{
    var unreadNotifications = snapshot.docs.map((doc) => doc.data())
    this.setState({
      value: unreadNotifications.length
    })
  })

}

componentDidMount(){

this.getNumberOfUnreadNotifications

}

BellIconWithBadge=()=>{
    return(
      <View>
        <Icon name='bell' type='font-awesome' color='white' size={25}
          onPress={() =>this.props.navigation.navigate('Notification')}/>
         <Badge
          value={this.state.value}
         containerStyle={{ position: 'absolute', top: -4, right: -4 }}/>
      </View>
    )
  }



  render(){

return (
    <Header
      leftComponent={<Icon name='menu' /*type='font-awesome'*/ color='white'  onPress={() => this.props.navigation.toggleDrawer()}/>}

      rightComponent={<this.BellIconWithBadge {...this.props}/>}

      centerComponent={{ text: this.props.title, style: { color: 'white', fontSize:20,fontWeight:"bold", } }}
      backgroundColor = "blue"
    />
  );


  }
  
}

//export default MyHeader;
