import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ActivityPage from './components/ActivityPage.js'

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
    const item = 'Drew';

    return (
      <View>
        <Text>This is my profile</Text>
        <Button
          title="Go Home"
          onPress={() =>
            navigation.navigate('ActivityPage', {item})
          }
        />
      </View>);
  };
  const Wrapper = ({navigation, route}, props) => {
    const {item} = route.params;
    return (
      <View>
        <Text>Inside wrapper</Text>
        <ActivityPage item={item}/* {route.params.item} */></ActivityPage>
      </View>);
  }

  const HomeScreen = ({navigation, route}, props) => {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.header_text}>Welcome to ParticiGator</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
          /> 
        </View> 
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
          /> 
        </View> 
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Oops</Text> 
        </TouchableOpacity> 
        {/* <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text> 
        </TouchableOpacity>  */}
        <TouchableOpacity 
          style={styles.loginBtn}
        >
          <Button
            style={styles.loginText}
            title="LOGIN"
            onPress={() =>
              navigation.navigate('ActivityPage', {item: 'Robin'})
          }/>
          </TouchableOpacity> 
  
      </View> 
    );
  }

    // return (
    //   <View style={styles.container}>
    //     <StatusBar style="auto" />
    //     <Text style={styles.header_text}>Welcome to ParticiGator</Text>
    //     <View style={styles.inputView}>
    //       <TextInput
    //         style={styles.TextInput}
    //         placeholder="Email."
    //         placeholderTextColor="#003f5c"
    //         onChangeText={(email) => setEmail(email)}
    //       /> 
    //     </View> 
    //     <View style={styles.inputView}>
    //       <TextInput
    //         style={styles.TextInput}
    //         placeholder="Password."
    //         placeholderTextColor="#003f5c"
    //         secureTextEntry={true}
    //         onChangeText={(password) => setPassword(password)}
    //       /> 
    //     </View> 
    //     <TouchableOpacity>
    //       <Text style={styles.forgot_button}>{email}</Text> 
    //     </TouchableOpacity> 
    //     {/* <TouchableOpacity style={styles.loginBtn}>
    //       <Text style={styles.loginText}>LOGIN</Text> 
    //     </TouchableOpacity>  */}
    //     <TouchableOpacity 
    //       style={styles.loginBtn}
    //       onPress={() =>
    //         //navigation.navigate('Profile', {name: 'Robin', id: "oops"})
    //         navigation.navigate('ActivityPage', {item: email} )
    //     }>
    //       <Button
    //         style={styles.loginText}
    //         title="LOGIN"/>
    //       </TouchableOpacity> 
  
    //   </View> 
    // );
  // }

  return (
    // <View>
    //   <ActivityPage item="Robin"></ActivityPage>
    // </View>
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
            component={Wrapper}
            initialParams={{item:'value'}}
            options={{title: 'Activity!'}}
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