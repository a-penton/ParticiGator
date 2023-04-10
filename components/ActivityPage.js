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
    ScrollView,
    StatusBar,
  } from "react-native";
  import ComponentStyles from '../ComponentStyles';
  import Questions from './Questions';

const ActivityPage = ({navigation, route}, props) => {
  const {username, password} = route.params;
  const data = Questions;
  const currentQuestion = data[0];

  return (
    <ScrollView style={ComponentStyles.container_activity}>
          <Text style={ComponentStyles.activity_header_text}>Welcome back, {username}!</Text>

          <View style={ComponentStyles.blue_text_box}>
            <Text style={ComponentStyles.white_text_1}>Today's Question</Text>
            <Text style={ComponentStyles.white_text_2}>{currentQuestion.questionTitle}</Text>
            <Text style={ComponentStyles.question_text}>{currentQuestion.question}</Text>
            {/* <Text style={ComponentStyles.white_text_2}>AVL ROTATION</Text>
            <Text style={ComponentStyles.question_text}>What is the name of the imbalance shown here? What is the name of the imbalance shown here?
            What is the name of the imbalance shown here? What is the name of the imbalance shown here? What is the name of the imbalance shown here?</Text> */}
          </View>
          <View style={ComponentStyles.other_images_view}>
          <Image source={currentQuestion.image} style={ComponentStyles.other_images} />
          </View>

          <View style={ComponentStyles.answers_view}>
          </View>

          <View style={ComponentStyles.answers_view_2}>
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

    </ScrollView>
  );
};

export default ActivityPage;
