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
    Alert,
  } from "react-native";
import ComponentStyles from '../ComponentStyles';
import axios from 'axios';
import Constants from "expo-constants";

let api = null;
if (Constants.expoConfig.extra.env === 'dev') {
  api = 'http://localhost:3000';
} else {
  api = Constants.expoConfig.extra.apiUrl;
}

// Passcode length
const CODE_LENGTH = 4;

// Might not need anymore 
// function handleSubmit(name, password) {
//     console.log('Name: ', name);
//     console.log('Password: ', password)
// }

// Adds gator icon 
const gatorImage = require('./../assets/images/gator-icon.png');

const HomeScreen = ({navigation, route}, props) => {

    // This is the passcode to be sent to the database
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

  
    // This is just to help make the passcode section pretty
    const [containerIsFocused, setContainerIsFocused] = useState(false);

    // All logic for passcode
    // Citation: https://thoughtbot.com/blog/make-a-snazzy-code-input-in-react-native
    const codeDigitsArrayName = new Array(CODE_LENGTH).fill(0);
    const codeDigitsArrayPassword = new Array(CODE_LENGTH).fill(0);
  
    const refName = useRef(null);
    const refPassword = useRef(null);
    
    const handleOnPressName = () => {
      setContainerIsFocused(true);
      refName?.current?.focus();
    };
    const handleOnPressPassword = () => {
      setContainerIsFocused(true);
      refPassword?.current?.focus();
    };
    
    const handleOnBlur = () => {
      setContainerIsFocused(false);
    };
    const toDigitInputName = (_value, idx) => {
      const emptyInputChar = ' ';
      const digit = name[idx] || emptyInputChar;

      const isCurrentDigit = idx === name.length;
      const isLastDigit = idx === CODE_LENGTH - 1;
      const isCodeFull = name.length === CODE_LENGTH;

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
    const toDigitInputPassword = (_value, idx) => {
      const emptyInputChar = ' ';
      const digit = password[idx] || emptyInputChar;

      const isCurrentDigit = idx === password.length;
      const isLastDigit = idx === CODE_LENGTH - 1;
      const isCodeFull = password.length === CODE_LENGTH;

      const isFocused = isCurrentDigit || (isLastDigit && isCodeFull);

      const containerStyle =
      containerIsFocused && isFocused
        ? {...ComponentStyles.inputContainer, ...ComponentStyles.inputContainerFocused}
        : ComponentStyles.inputContainer;
  
      return (
        <View key={idx} style={containerStyle}>
          <Text style={ComponentStyles.inputText}>{digit}</Text>
        </View>
      );
    };  

    const handleSubmit = async () => {
      const response = await axios.get(`${api}/users/${name+password}`)
      .then(response => {
        if (response.status === 201) {
          {navigation.navigate('ActivityPage', {username: name, password: password})};
          return true;
        }
      })
      .catch(error => {
        {Alert.alert(error.response.data)};
        return false;
      });
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
        <Pressable style={ComponentStyles.inputsContainer} onPress={handleOnPressName}>
        {codeDigitsArrayName.map(toDigitInputName)}
        </Pressable>
        <TextInput
        ref = {refName}
        value={name}
        onChangeText={setName}
        onSubmitEditing={handleOnBlur}
        autoCorrect="false"
        spellCheck="false"
        autoCapitalize="characters"
        keyboardType="visible-password"
        returnKeyType="done"
        textContentType="oneTimeCode"
        maxLength={CODE_LENGTH}
        style={ComponentStyles.hiddenCodeInput}
        />
        <View style={ComponentStyles.rectangle}></View>
        <Pressable style={ComponentStyles.inputsContainer} onPress={handleOnPressPassword}>
        {codeDigitsArrayPassword.map(toDigitInputPassword)}
        </Pressable>
        <TextInput
        ref={refPassword}
        value={password}
        onChangeText={setPassword}
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
              {  
                const res = handleSubmit();
                //console.log(res);
                // if(res){
                //   {navigation.navigate('ActivityPage', {username: name, password: password})};
                // }
              }
            }/>
        </View>
        
      </View> 
    );
  }

  export default HomeScreen;