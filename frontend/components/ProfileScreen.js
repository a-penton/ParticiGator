import React, { Component, useState, useEffect} from 'react';
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import ComponentStyles from '../ComponentStyles';
import Questions from './Questions';
const correctImage = require('./../assets/images/correct.png');
const incorrectImage = require('./../assets/images/incorrect.png');
import axios from 'axios';
import Constants from "expo-constants";

let api = null;
if (Constants.expoConfig.extra.env === 'dev') {
  api = 'http://localhost:3000';
} else {
  api = Constants.expoConfig.extra.apiUrl;
}

const ProfileScreen = ({ navigation, route }, props) => {
  const { question, id, answer, correctAnswer, explained, image } = route.params;
  // TODO: check email/password against backend

  async function getInstructor(){
    const dataInstructor = {id: id}
    return await axios.get(`${api}/users/${id}`, {
      dataInstructor}
    ).then(response => {
      if (response.status === 201) {
        // Redirect to new screen
        console.log(response)
        return response.data.instructor;
        //Alert.alert("Submission logged!");
      }
    })
    .catch(error => {
      alert("Could not find instructor.");
    });
  }
  useEffect(() => {
    async function submit() {
      const instructor = await getInstructor();
      const data = {id: id, instructor: instructor, question: question, score: answer == correctAnswer ? 1: 0};

      await axios.post(`${api}/submissions`, {
        data}
      ).then(response => {
        if (response.status === 201) {
          // Redirect to new screen
          console.log(response)
          Alert.alert("Submission logged!");
        }
      })
      .catch(error => {
        alert("Could not submit response. You have already submitted.");
      });
    }
    submit();
  });
  
  return (
    <ScrollView style={{backgroundColor: "#FFFFFF"}}>
      {answer === correctAnswer ? (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={ComponentStyles.correct_text}>Your answer was correct!</Text>
        </View>
      ) : (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={ComponentStyles.incorrect_text}>Sorry, but your answer was incorrect...</Text>
        </View>
        // <Text style={ComponentStyles.incorrect_text}>Sorry, but your answer was incorrect...</Text>
      )}

      {answer === correctAnswer ? (
        <View style={ComponentStyles.correct_image_view}>
          <Image source={correctImage} style={ComponentStyles.correct_image} />
        </View>
      ) : (
        <View style={ComponentStyles.correct_image_view}>
          <Image source={incorrectImage} style={ComponentStyles.incorrect_image} />
        </View>
        // <View style={ComponentStyles.incorrect_image_view}>
        //   {/* <Image source={incorrectImage} style={ComponentStyles.incorrect_image} /> */}
        // </View>
        // <Image source={incorrectImage} style={ComponentStyles.incorrect_image_view} />
      )}

      {answer === correctAnswer ? (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={ComponentStyles.excellent_job_text}>Excellent job!</Text>
        </View>
      ) : (
        <Text></Text>
      )}

      {answer === correctAnswer ? (
        <Text></Text>
      ) : (
        <View style={ComponentStyles.question_image_view}>
          <Image source={{uri: image}} style={ComponentStyles.question_image} />
        </View>
      )}

      {answer === correctAnswer ? (
        <Text></Text>
      ) : (
        <View style={{ justifyContent: "center", alignItems: "center", top: 20 }}>
          <View style={ComponentStyles.explanation_text}>
            <Text style={{fontSize: "18%"}}>{explained}</Text>
          </View>
        </View>
      )}

      <View style={{ justifyContent: "center", alignItems: "center" , top: 20, }}>
        <View style={ComponentStyles.signOutBtn}>
          <Button
            title="Sign Out"
            color="#FFFFFF"
            onPress={() =>
              navigation.navigate('Home', {})
            }
          />
        </View>

      </View>

      <View style={ComponentStyles.space_view}>

      </View>


      {/* <Text>This answer the user got is: {answer}</Text>
        <Text>This answer the user should have gotten is: {correctAnswer}</Text> */}
      {/* <View style={ComponentStyles.signOutBtn}>
        <Button
          title="Sign Out"
          color="#FFFFFF"
          onPress={() =>
            navigation.navigate('Home', {})
          }
        />
      </View> */}
    </ScrollView>
  );
};

export default ProfileScreen;