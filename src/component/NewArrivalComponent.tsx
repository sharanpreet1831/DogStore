import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NewArrivalComponent = () => {
  return (
    <View style={styles.card}>
      <Image
        source={require('../assets/images/dog3.jpg')}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Buddy</Text>
        <Text style={styles.breed}>Golden Retriever</Text>
        <View style={styles.row}>
          <Text style={styles.detail}>8 months</Text>
          <Text style={styles.detail}>New York</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.price}>$350</Text>
          <Text style={styles.time}>5 hours ago</Text>
        </View>
      </View>
    </View>
  )
}

export default NewArrivalComponent

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.09,
    shadowRadius: 6,
    elevation: 4,
    marginHorizontal: 14,
    marginVertical: 10,
    padding: 12,
   
    
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 12,
    backgroundColor: '#eee',
    marginRight: 14,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 2,
  },
  breed: {
    fontSize: 15,
    color: '#555',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  detail: {
    fontSize: 13,
    color: '#666',
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#3b8c44',
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
})