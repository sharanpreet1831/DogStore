import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CardComponent = () => {
  return (
    <View style={styles.card}>
      <View style={styles.imageBox}>
        
        <Image 
          source={require('../assets/images/dog3.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.descriptionBox}>
        <Text style={styles.name}>Buddy</Text>
        <Text style={styles.breed}>Golden Retriever</Text>
        <Text style={styles.price}>$200</Text>
      </View>
    </View>
  )
}

export default CardComponent

const styles = StyleSheet.create({
  card: {
    width: 180,
    height: 200,
    borderRadius: 18,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 5,
    margin: 10,
    overflow: 'hidden',
  },
  imageBox: {
    flex: 2,
    backgroundColor: '#e9ecef',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  descriptionBox: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 2
  },
  breed: {
    fontSize: 15,
    color: '#555',
    marginBottom: 6
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#3b8c44',
  }
})