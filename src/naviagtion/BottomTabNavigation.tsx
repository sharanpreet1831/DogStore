import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import WelcomeScreen from '../screen/Auth/WelcomScreen'
import RegisterScreen from '../screen/Auth/RegisterScreen'
import HomeScreen from '../screen/HomeScreen'
import { SearchBar } from 'react-native-screens'
import SearchScreen from '../screen/SearchScreen'
import PostScreen from '../screen/PostScreen'
import ChatScreen from '../screen/ChatScreen'
import ProfileScreen from '../screen/ProfileScreen'

const Tab = createBottomTabNavigator()
const BottomTabNavigation = () => {
    return (
      
            <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarInactiveTintColor: 'gray',
                    tabBarActiveTintColor: 'blue',
                    
                    })}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Post" component={PostScreen} />
                <Tab.Screen name="Chat" component={ChatScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
                
            </Tab.Navigator>
        
    )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})