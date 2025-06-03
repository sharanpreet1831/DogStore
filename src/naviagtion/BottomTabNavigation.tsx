import { Image, StyleSheet, Text, View } from 'react-native'
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
import StoreScreen from '../screen/StoreScreen'
import CartScreen from '../screen/CartScreen'

const Tab = createBottomTabNavigator()
const BottomTabNavigation = () => {
    return (
      
            <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarInactiveTintColor: 'black',
                    tabBarActiveTintColor: 'blue',
                      tabBarIcon: ({ focused, color, size }) => {
                        let iconSource;

                        switch (route.name) {
                            case 'Home':
                                iconSource = require('../assets/icon/house.png');
                                break;
                            case 'Search':
                                iconSource = require('../assets/icon/magnifyingglass.png');
                                break;
                          
                            case 'Store':
                                iconSource = require('../assets/icon/storefront.png'); 
                                break;
                            case 'Chat':
                                iconSource = require('../assets/icon/message.png');
                                break;
                            case 'Profile':
                                iconSource = require('../assets/icon/person.png'); 
                                break;
                            default:
                                iconSource = require('../assets/icon/house.png');
                        }

                        return (
                            <Image
                                source={iconSource}
                                style={{
                                    width: focused ? 22 : 20,
                                    height: focused ? 22 : 20,
                                    tintColor: color,
                                    resizeMode:'contain'
                                }}
                            />
                        );
                    },
                }
                    )}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Store" component={StoreScreen} />
                <Tab.Screen name="Cart" component={CartScreen} />
              
                <Tab.Screen name="Profile" component={ProfileScreen} />
                
            </Tab.Navigator>
        
    )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})