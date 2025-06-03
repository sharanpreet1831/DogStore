import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import CardComponent from '../component/CardComponent'
import BreedComponent from '../component/BreedComponent';
import NewArrivalComponent from '../component/NewArrivalComponent';

const categories = ['Dog', 'Cat', 'Bird', 'Rabbit', 'Fish', 'Other'];
const featuredPets = [1, 2, 3, 4]; 
const breedList = [1, 2, 3, 4];

const HomeScreen = () => {
  return (
    <ScrollView style={styles.maincontainer}>

      <View style={styles.container}>
        <Text style={styles.locationText}>Alex</Text>
        <View style={styles.imageRow}>
          <Image source={require('../assets/icon/bell.png')} style={[styles.image,{tintColor: '#000'}]}  />
          <Image source={require('../assets/icon/person.png')} style={ styles.profileImage} />
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.ScrollContainer} contentContainerStyle={styles.ScrollContent}>
        {categories.map((category , i ) => (
            <TouchableOpacity style={styles.Scrollitem} activeOpacity={0.7} key={i}>
            <Text style={styles.ScrollText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.FeatureContainer}>
        <View style={styles.Featureheading}>
          <Text style={styles.FeatureTitle}>Featured Pets</Text>
          <TouchableOpacity>
            <Text style={styles.SeeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={featuredPets}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, idx) => idx.toString()}
          contentContainerStyle={styles.cardList}
          renderItem={() => <CardComponent />}
        />
      </View>

      <View style={styles.BreedContainer}>
        <View style={styles.Featureheading}>
          <Text style={styles.FeatureTitle}>Popular Breeds</Text>
          <TouchableOpacity>
            <Text style={styles.SeeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={breedList}
          keyExtractor={(item, idx) => idx.toString()}
          numColumns={2}
          columnWrapperStyle={styles.breedRow}
          contentContainerStyle={styles.breedList}
          renderItem={() => <BreedComponent />}
          showsVerticalScrollIndicator={true}
        />
      </View>
      <View style = {styles.NewArrivalContainer}>
         <View style={styles.Featureheading}>
          <Text style={styles.FeatureTitle}>New Arival  Pets</Text>
          <TouchableOpacity>
            <Text style={styles.SeeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList 
        data={breedList}
        keyExtractor={(item, idx) => idx.toString() }
        renderItem={() => <NewArrivalComponent />}
        />
        {/* <View style = {styles.NewArrivalList}>
            <NewArrivalComponent />
        </View> */}
      </View>
    </ScrollView>
  )
}

export default HomeScreen
const PRIMARY_BLUE = "#2563eb";
const LIGHT_BLUE = "#e0e7ff";
const BORDER_COLOR = "#d1d5db";
const PLACEHOLDER_COLOR = "#99b6e4";

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    // backgroundColor: '#f7f8fa'
    backgroundColor:'#fff',
        

  },
  container: {
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    // paddingBottom: 10,
    // backgroundColor: '#fff',
    // elevation: 2,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.08,
    // shadowRadius: 3,
  },
  locationText: {
    fontWeight: 'bold',
    fontSize: 27,
    color: '#222',
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 15,
    height: 15,
    
    resizeMode : 'contain',
    marginRight : 10
    
  },
  profileImage: {
    marginLeft: 10,
    tintColor: '#000',
    resizeMode : 'contain',
    width : 15,
    height: 15,
    

  },
  ScrollContainer: {
    marginTop: 18,
    maxHeight: 40,
    paddingHorizontal: 8,
  },
  ScrollContent: {
    alignItems: 'center',
    paddingRight: 10,
  },
  Scrollitem: {
    height: 23,
    paddingHorizontal: 18,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    marginRight: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    borderWidth : 1, 
    borderColor : PRIMARY_BLUE
  },
  ScrollText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#597ef7',
  },
  FeatureContainer: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingTop: 18,
    paddingHorizontal: 10,
    shadowColor: '#000',
   
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 7,
   
  },
  Featureheading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 1,
    paddingHorizontal: 5
  },
  FeatureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2b2b2b'
  },
  SeeAll: {
    color: '#597ef7',
    fontSize: 14,
    fontWeight: '500'
  },
  cardList: {
    paddingVertical: 1,
    paddingLeft: 1,
    gap: 10,
  },
  BreedContainer: {
    
    marginBottom: 5,
    backgroundColor: '#fff',
  
    paddingVertical: 10,
    paddingHorizontal: 10,
    
  },
  breedList: {
    paddingBottom: 5,
    
  },
  breedRow: {
    justifyContent: 'space-between',
    marginBottom: 0,
  },
  NewArrivalContainer: {
    
  },
  NewArrivalList:{
    
  }
})