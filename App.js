import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SingleTour from 'C:/Users/robin/Work/SeniorProject/AwesomeProject/SingleTour.js'

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const Stack = createNativeStackNavigator();
  const ProfileScreen = ({navigation, route}) => {
    return (
      <View>
        <Text>This is {route.params.name}'s profile</Text>
        <Button
          title="Go Home"
          onPress={() =>
            navigation.navigate('Home', {name: 'Hi'})
          }
        />
      </View>);
  };
  const HomeScreen = ({navigation, route}) => {
    return (
      <View>
        <Text>Go to profile</Text>
        <Button
          title="Go to Profile"
          onPress={() =>
            //navigation.navigate('Profile', {name: 'Robin', id: "oops"})
            navigation.navigate('SingleTour', {item: 2} )
          }
      />
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          id="Robin"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{title: 'Profile'}}
        />
        <Stack.Screen 
          name="SingleTour" 
          component={SingleTour}
          options={{title: 'Single Tour!'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  header_text: {
    height: 50,
    color: "#000000",
    fontSize: '30%',
    fontWeight: 'bold',
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});