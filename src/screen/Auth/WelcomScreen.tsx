import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'





const WelcomeScreen = () => {
 
  return (
    <SafeAreaView style={styles.maincontainer}>
      <Image source={require('../../assets/images/dog1.jpg')} style={styles.image} />
      <Text style={styles.heading}>Find Your Perfect Pet Companion</Text>
      <Text style={styles.subtitle}>Buy or adopt pets with trust and ease</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.primaryButton} onPress={ () => navigation.navigate('Register')}>
          <Text style={styles.primaryButtonText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>I Already Have an Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen

const PRIMARY_BLUE = "#2563eb"; 
const LIGHT_BLUE = "#e0e7ff";   
const DARK_BLUE = "#1e40af";   

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: LIGHT_BLUE,
    paddingHorizontal: 24,
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 110,
    marginBottom: 32,
    borderWidth: 3,
    borderColor: PRIMARY_BLUE,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: PRIMARY_BLUE,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: DARK_BLUE,
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 16,
  },
  primaryButton: {
    backgroundColor: PRIMARY_BLUE,
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 60,
    marginBottom: 12,
    width: '100%',
    alignItems: 'center',
    shadowColor: PRIMARY_BLUE,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    borderColor: PRIMARY_BLUE,
    borderWidth: 2,
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 60,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  secondaryButtonText: {
    color: PRIMARY_BLUE,
    fontSize: 16,
    fontWeight: '600',
  },
})