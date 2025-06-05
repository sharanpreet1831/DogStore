
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WelcomeScreen from './src/screen/Auth/WelcomScreen'
import RegisterScreen from './src/screen/Auth/RegisterScreen'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigation from './src/naviagtion/BottomTabNavigation'
import ChatScreen from './src/screen/ChatScreen'

const App = () => {
  return (
    // <NavigationContainer>
    //    <BottomTabNavigation />
    // </NavigationContainer>

    <ChatScreen />
 
  
  )
}

export default App

const styles = StyleSheet.create({})