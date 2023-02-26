import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
  } from "react-native";

const ActivityPage = (props) => {
  return (
    <View style={styles.container}>
          <Text>Username: {props.username}</Text>
          <Text>Password: {props.password}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  rectangle: {
    width: 200,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 10,
  },
});

export default ActivityPage;
