import React, { Component,  useState } from 'react';
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
  } from "react-native";
import ComponentStyles from '../ComponentStyles';

function handleSubmit(name, password) {
    console.log('Name: ', name);
    console.log('Password: ', password)
}

const HomeScreen = ({navigation, route}, props) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
      <View style={ComponentStyles.container}>
        <StatusBar style="auto" />
        <Text style={ComponentStyles.header_text}>Welcome to ParticiGator</Text>
        <View style={ComponentStyles.inputView}>
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
        </View> 
        <View style={ComponentStyles.loginBtn}>
          <Button
            title="LOGIN"
            onPress={() => 
              { handleSubmit(name, password);
                navigation.navigate('ActivityPage', {username: name, password: password})}
          }/>
        </View>
  
      </View> 
    );
  }

  export default HomeScreen;