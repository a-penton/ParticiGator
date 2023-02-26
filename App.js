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

  const ActivityWrapper = ({navigation, route}, props) => {
    const {username, password} = route.params;
    return (
      <View>
        <ActivityPage username={username} password={password}></ActivityPage>
        <View style={ComponentStyles.loginBtn}>
          <Button
            title="Go to Profile"
            onPress={() =>
              navigation.navigate('Profile', {username: username})
            }
          />
        </View>
      </View>);
  }
 
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
            name="ActivityPage" 
            component={ActivityWrapper}
            initialParams={{item:'value'}}
            options={{title: 'Activity!'}}
          />
        </Stack.Navigator>
      </NavigationContainer>

  );
}