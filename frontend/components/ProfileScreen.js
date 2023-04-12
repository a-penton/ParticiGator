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

const ProfileScreen = ({navigation, route}, props) => {
    const {username} = route.params;
    return (
      <View>
        <Text>This is {username}'s profile</Text>
        <View style={ComponentStyles.loginBtn}>
          <Button
            title="Sign Out"
            onPress={() =>
              navigation.navigate('Home', {})
            }
          />
        </View>
      </View>);
  };

export default ProfileScreen;