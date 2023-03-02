import React, { Component,  useState, useRef } from 'react';
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    Pressable,
  } from "react-native";
import ComponentStyles from '../ComponentStyles';

// Passcode length
const CODE_LENGTH = 4;



function handleSubmit(name, password) {
    console.log('Name: ', name);
    console.log('Password: ', password)
}

// Adds gator icon 
const gatorImage = require('./../assets/images/gator-icon.png');

const HomeScreen = ({navigation, route}, props) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    // This is the passcode to be sent to the database
    const [code, setCode] = useState('');
    // This is just to helo make the passcode section pretty
    const [containerIsFocused, setContainerIsFocused] = useState(false);

    // All logic for passcode
    // Citation: https://thoughtbot.com/blog/make-a-snazzy-code-input-in-react-native
    const codeDigitsArray = new Array(CODE_LENGTH).fill(0);
    const ref = useRef(null);
    const handleOnPress = () => {
      setContainerIsFocused(true);
      ref?.current?.focus();
    };
    const handleOnBlur = () => {
      setContainerIsFocused(false);
    };
    const toDigitInput = (_value, idx) => {
      const emptyInputChar = ' ';
      const digit = code[idx] || emptyInputChar;

      const isCurrentDigit = idx === code.length;
      const isLastDigit = idx === CODE_LENGTH - 1;
      const isCodeFull = code.length === CODE_LENGTH;

      const isFocused = isCurrentDigit || (isLastDigit && isCodeFull);

      const containerStyle =
      containerIsFocused && isFocused
        ? {...ComponentStyles.inputContainer, ...ComponentStyles.inputContainerFocused}
        : ComponentStyles.inputContainer;
  
      return (
        <View key={idx} style= {containerStyle}>
          <Text style={ComponentStyles.inputText}>{digit}</Text>
        </View>
      );
    };
    

    return (
      // Screen 
      <View style={ComponentStyles.container}>
        <View style={ComponentStyles.image}> 
        <Image source={gatorImage} style={ComponentStyles.image} />
        </View>
        <StatusBar style="auto" />
        <Text style={ComponentStyles.header_text}>Welcome to ParticiGator!</Text>
        <Text style={ComponentStyles.instruction_text}>Enter the first two letters of your first name,
        the first two letters of your last name, and
        the last four digits of your UFID.</Text>
        {/* <View style={ComponentStyles.inputView}>
          <TextInput
            style={ComponentStyles.TextInput}
            value={name}
            onChangeText={setName}
            placeholder="Name."
            placeholderTextColor="#003f5c"
          /> 
        </View> 
        <View style={ComponentStyles.inputView}>
          <TextInput
            style={ComponentStyles.TextInput}
            value={password}
            onChangeText={setPassword}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
          /> 
        </View>  */}
        <Pressable style={ComponentStyles.inputsContainer} onPress={handleOnPress}>
        {codeDigitsArray.map(toDigitInput)}
        </Pressable>
        <TextInput
        ref = {ref}
        value={code}
        onChangeText={setCode}
        onSubmitEditing={handleOnBlur}
        keyboardType="number-pad"
        returnKeyType="done"
        textContentType="oneTimeCode"
        maxLength={CODE_LENGTH}
        style={ComponentStyles.hiddenCodeInput}
        />
        <View style={ComponentStyles.loginBtn}>
          <Button
            title="Login"
            color= "#fff"
            onPress={() => 
              { //handleSubmit(name, password);
                navigation.navigate('ActivityPage', {username: name, password: code})}
          }/>
        </View>
  
      </View> 
    );
  }

  export default HomeScreen;