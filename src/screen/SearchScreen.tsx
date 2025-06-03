import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React from 'react'
import BreedComponent from '../component/BreedComponent';

const SearchScreen = () => {
    const breedList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 , 13 ];

    return (
        <ScrollView style={styles.safeArea}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <Text style={styles.title}>Search Breeds</Text>
                    <TextInput 
                        placeholder='Search...' 
                        style={styles.input} 
                        placeholderTextColor="#888"
                    />
                    <FlatList
                        data={breedList}
                        renderItem={({ item }) => <BreedComponent />}
                        keyExtractor={(item, idx) => idx.toString()}
                        numColumns={2}
                        columnWrapperStyle={styles.breedRow}
                        contentContainerStyle={styles.breedList}
                        showsVerticalScrollIndicator={true}
                        scrollEnabled = {true}
                    />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f7f8fa',
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 12,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 6,
        marginTop: 10,
        marginLeft: 4,
    },
    input: {
        height: 44,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 22,
        paddingHorizontal: 18,
        backgroundColor: '#fff',
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 4,
        elevation: 2,
    },
    breedList: {
        paddingVertical: 8,
        paddingBottom: 18,
    },
    breedRow: {
        justifyContent: 'space-between',
        marginBottom: 10,
    },
})