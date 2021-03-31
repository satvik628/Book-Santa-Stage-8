import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import {SafeAreaView} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'
import { AppTabNavigator } from './components/AppTabNavigator'
import { render } from 'react-dom';


export default function App() {

  return (

      <AppContainer/>
      
    
  );
  
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator},
  BottomTab: {screen: AppTabNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);
