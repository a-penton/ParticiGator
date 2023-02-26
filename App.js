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

function handleSubmit(name, password) {
  console.log('Name: ', name);
  console.log('Password: ', password)
}

export default function App() {
  const Stack = createNativeStackNavigator();

  const ProfileScreen = ({navigation, route}, props) => {
    const {username} = route.params;
    return (
      <View>
        <Text>This is {username}'s profile</Text>
        <View style={styles.loginBtn}>
          <Button
            title="Sign Out"
            onPress={() =>
              navigation.navigate('Home', {})
            }
          />
        </View>
      </View>);
  };

  const Wrapper = ({navigation, route}, props) => {
    const {username, password} = route.params;
    return (
      <View>
        <ActivityPage username={username} password={password}></ActivityPage>
        <View style={styles.loginBtn}>
          <Button
            title="Go to Profile"
            onPress={() =>
              navigation.navigate('Profile', {username: username})
            }
          />
        </View>
      </View>);
  }

  const HomeScreen = ({navigation, route}, props) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.header_text}>Welcome to ParticiGator</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            value={name}
            onChangeText={setName}
            placeholder="Name."
            placeholderTextColor="#003f5c"
          /> 
        </View> 
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            value={password}
            onChangeText={setPassword}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
          /> 
        </View> 
        <View style={styles.loginBtn}>
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