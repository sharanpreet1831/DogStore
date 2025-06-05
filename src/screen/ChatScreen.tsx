import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { GoogleGenAI } from "@google/genai";

const ChatScreen = () => {
    const ai = new GoogleGenAI({ apiKey: "AIzaSyA9fhcl6gcerhv_qV7feccK3SAQ7Rn9g6E" });
    const [inputMessage, setInputMessage] = useState('')
    const [responseresult , setResponseresult ] = useState('')
    

    const genratePrompt = async () => {
        const response = await ai.models.generateContent({
            model: 'gemini-2.0-flash',
            contents: inputMessage,
        })

        console.log(response.text),
        setResponseresult(response.text)
    }
   

    const handleSetText = (text) => {
        setInputMessage(text)
    }
    return (
        <View style={styles.maincontainer}>
            <View style={styles.header}>
                <Text> {responseresult} </Text>
            </View>
            <View style={styles.chatboxholder}>
                <TextInput placeholder='Text Here ' editable={true} style={styles.inputfield} onChangeText={handleSetText} value= {inputMessage} />
                <TouchableOpacity style={styles.buttonwraper} onPress={genratePrompt}>
                    <Image source={require('../assets/icon/paperplane.png')} style={styles.sendbutton} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    inputfield: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        margin: 10,
        padding: 10,
        borderRadius: 20,
        width: 300

    },
    chatboxholder: {
        flexDirection: 'row'
    },
    sendbutton: {
        height: 20,
        width: 20,
        tintColor: 'blue',


    },
    buttonwraper: {
        marginTop: 20,
    },
    header: {
        justifyContent: 'center',
        flex: 1
    }
})