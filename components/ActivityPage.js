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
  import ComponentStyles from '../ComponentStyles';

const ActivityPage = ({navigation, route}, props) => {
  const {username, password} = route.params;

  return (
    <View style={styles.container}>
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
