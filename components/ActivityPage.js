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
    <View style={ComponentStyles.container_activity}>
          <Text style={ComponentStyles.activity_header_text}>Welcome back, {username}!</Text>
          <View style={ComponentStyles.blue_text_box}>
            <Text style={ComponentStyles.white_text_1}>Today's Question</Text>
            <Text style={ComponentStyles.white_text_2}>AVL ROTATION</Text>
            <Text style={ComponentStyles.question_text}>What is the name of the imbalance shown here? What is the name of the imbalance shown here?
            What is the name of the imbalance shown here? What is the name of the imbalance shown here? What is the name of the imbalance shown here?</Text>
          </View>
          {/* <Text>Username: {username}</Text> */}
          {/* <Text>Password: {password}</Text> */}
          {/* <View style={ComponentStyles.loginBtn}>
            <Button
              title="Go to Profile"
              onPress={() =>
                navigation.navigate('Profile', {username: username})
              }
            />
          </View> */}

    </View>
  );
};

export default ActivityPage;
