import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

const RegisterScreen = () => {
  // Optional: State for form fields (not required for styling/UI)
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.maincontainer}>
        <Text style={styles.heading}>Create Account</Text>
        <Text style={styles.subheading}>Join our community of pet lovers</Text>
        
        <TextInput
          style={styles.input}
          placeholder='Full Name'
          value={fullName}
          onChangeText={setFullName}
          placeholderTextColor="#99b6e4"
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          value={email}
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={setEmail}
          placeholderTextColor="#99b6e4"
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          value={phone}
          keyboardType='phone-pad'
          onChangeText={setPhone}
          placeholderTextColor="#99b6e4"
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          value={password}
          secureTextEntry
          onChangeText={setPassword}
          placeholderTextColor="#99b6e4"
        />
        <TextInput
          style={styles.input}
          placeholder='Confirm Password'
          value={confirmPassword}
          secureTextEntry
          onChangeText={setConfirmPassword}
          placeholderTextColor="#99b6e4"
        />

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Create Account</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or continue with</Text>

        <TouchableOpacity style={styles.socialmedia}>
          <Image
            source={require('../../assets/images/Google__G__logo.svg.png')}
            style={styles.socialmediaicon}
          />
          <Text style={styles.socialmediaText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default RegisterScreen

const PRIMARY_BLUE = "#2563eb";
const LIGHT_BLUE = "#e0e7ff";
const BORDER_COLOR = "#d1d5db";
const PLACEHOLDER_COLOR = "#99b6e4";

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: LIGHT_BLUE,
    justifyContent: 'center',
  },
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: LIGHT_BLUE,
  },
  heading: {
    fontSize: 28,
    color: PRIMARY_BLUE,
    fontWeight: 'bold',
    marginBottom: 6,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 16,
    color: PRIMARY_BLUE,
    fontWeight: '400',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderColor: BORDER_COLOR,
    borderWidth: 1.5,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: PRIMARY_BLUE,
    marginBottom: 16,
  },
  primaryButton: {
    backgroundColor: PRIMARY_BLUE,
    borderRadius: 24,
    paddingVertical: 14,
    width: '100%',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 20,
    shadowColor: PRIMARY_BLUE,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 14,
    color: '#888',
    marginVertical: 10,
  },
  socialmedia: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    width: '100%',
    justifyContent: 'center',
    marginTop: 4,
    marginBottom: 16,
  },
  socialmediaicon: {
    width: 28,
    height: 28,
    marginRight: 12,
  },
  socialmediaText: {
    fontSize: 16,
    color: '#222',
    fontWeight: '500',
  },
})