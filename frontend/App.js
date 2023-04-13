import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ActivityPage from './components/ActivityPage.js'
import ProfileScreen from './components/ProfileScreen.js'
import HomeScreen from './components/HomeScreen.js'
import ComponentStyles from './ComponentStyles';


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
 
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          /> 
          <Stack.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="ActivityPage" 
            component={ActivityPage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>

  );
}
