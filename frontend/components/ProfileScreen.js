import React, { Component, useState } from 'react';
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
} from "react-native";
import ComponentStyles from '../ComponentStyles';
import Questions from './Questions';
const correctImage = require('./../assets/images/correct.png');
const incorrectImage = require('./../assets/images/incorrect.png');

const ProfileScreen = ({ navigation, route }, props) => {
  const { answer, correctAnswer, explained, image } = route.params;
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
        <Text></Text>
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
        // <View style={{ justifyContent: "center", alignItems: "center", top: 20 }}>
        //   <Text style={ComponentStyles.try_again_text}>Here's why...</Text>
        // </View>
        // <Text style={ComponentStyles.try_again_text}>Here's why...</Text>
      )}

      {answer === correctAnswer ? (
        <Text></Text>
      ) : (
        <View style={ComponentStyles.question_image_view}>
          <Image source={image} style={ComponentStyles.question_image} />
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