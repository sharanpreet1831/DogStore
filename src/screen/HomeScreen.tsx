import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <Text style={styles.locationText}>Location</Text>
        <View style={styles.imageRow}>
          <Image source={require('../assets/images/Google__G__logo.svg.png')} style={styles.image} />
          <Image source={require('../assets/images/person.jpg')} style={[styles.image, styles.profileImage]} />
        </View>
      </View>
      <View style = {styles.ScrollContainer}>
        <View style = {styles.Scrollitem}>
            <Text>Dog</Text>
        </View>

      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    
  },
  container: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    paddingHorizontal: 16, 
  },
  locationText: {
   
    fontWeight: 'bold',
    fontSize: 16,
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#fff'
  },
  profileImage: {
    marginLeft: 8 
  },
  ScrollContainer:{

  },
  Scrollitem:{
    height: 100,
    width : 40 ,
    borderWidth : 1 
  }
})