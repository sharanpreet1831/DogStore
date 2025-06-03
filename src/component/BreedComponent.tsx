import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BreedComponent = () => {
  return (
    <View style={styles.card}>
      <ImageBackground 
        source={require('../assets/images/dog4.jpg')} 
        style={styles.image} 
        imageStyle={styles.imageStyle}
      >
        <View style={styles.overlay}>
          <Text style={styles.breedText}>Husky</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default BreedComponent

const styles = StyleSheet.create({
  card: {
    width: 140,
    height: 100,
    borderRadius: 18,
    overflow: 'hidden',
    margin: 12,
    elevation: 4,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 18,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.38)',
    paddingVertical: 10,
    alignItems: 'center',
  },
  breedText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  }
})