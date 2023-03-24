import React, { Component, useState, useRef } from 'react';
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

const ActivityPage = ({navigation, route}, props) => {
  const {username, password} = route.params;

  return (
    <View style={ComponentStyles.container}>
          <Text>Username: {username}</Text>
          <Text>Password: {password}</Text>
          <View style={ComponentStyles.loginBtn}>
            <Button
              title="Go to Profile"
              onPress={() =>
                navigation.navigate('Profile', {username: username})
              }
            />
          </View>

    </View>
  );
};

export default ActivityPage;
