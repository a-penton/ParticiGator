import React, { Component, useState, useRef, } from 'react';
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
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import ComponentStyles from '../ComponentStyles';
import { useAsync } from 'react-async';
import { API } from "../API";
import Questions from './Questions';

const fetchQuestion = async () => {
  return await API.getQuestionData();
}

const ActivityPage = ({ navigation, route }, props) => {
  const { username, password } = route.params;
  const asyncQuestion = useAsync(fetchQuestion, []);
  const currentQuestion = asyncQuestion.data ?? null;
  if(currentQuestion !== null){
    console.log(currentQuestion.questionTitle);
  }

  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [classCode, setClassCode] = useState('');
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);
  const [explanation, setExplanation] = useState('');
  const [questionImage, setQuestionImage] = useState('');
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <ScrollView>{currentQuestion !== null ? 
      <ScrollView style={ComponentStyles.container_activity}>
        <Text style={ComponentStyles.activity_header_text}>Welcome back, {username}!</Text>

        <View style={ComponentStyles.blue_text_box}>
          <Text style={ComponentStyles.white_text_1}>Today's Question</Text>
          <Text style={ComponentStyles.white_text_2}>{currentQuestion.questionTitle}</Text>
          <Text style={ComponentStyles.question_text}>{currentQuestion.question}</Text>
        </View>
        <View style={ComponentStyles.question_image_view}>
          {!isImageLoaded && (
            <ActivityIndicator size="large" />
          )}
          <Image source={{uri: "https://drive.google.com/uc?export=view&id=" + currentQuestion.imagePath}} onLoad={handleImageLoad} style={ComponentStyles.question_image} />
        </View>

        <View style={ComponentStyles.answers_view}>
          {currentQuestion.options.map((item, i) => (
            <Pressable
              onPress={() => setSelectedAnswerIndex(selectedAnswerIndex === i ? null : i)}
              key={item.id}
              style={[
                { backgroundColor: "#F4F4F4", padding: 20, borderRadius: 20, marginTop: 15, width: "80%", alignItems: "center", borderWidth: 2, borderColor: "#F4F4F4", },
                selectedAnswerIndex === i && { backgroundColor: "#D9D9D9", borderColor: "black" }
              ]}
            >
              <Text style={{ textAlign: "center" }}>{item.options}</Text>
              <Text style={{ fontSize: "18%" }}>{item.answer}</Text>
            </Pressable>
          ))}
        </View>

        <View style={ComponentStyles.enter_code_submit_view}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 20 }}>
            <View>
              {/* <Text style={{ marginBottom: 10 }}>Enter class code:</Text> */}
              <Text style={{ marginBottom: 10, fontSize: '18%', left: "2%" }}>Enter passcode:</Text>
              <TextInput
                style={ComponentStyles.code_input_view}
                onChangeText={setClassCode}
                value={classCode}
                maxLength={8}
                autoCapitalize="characters"
                keyboardType="visible-password"
                autoCorrect="false"
                spellCheck="false"
              />
              {/* <Text style={{ marginTop: 10, fontSize: '18%', left: "2%" }}>Enter passcode:</Text> */}
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Profile', {answer: selectedAnswerIndex, correctAnswer: currentQuestion.correctAnswerIndex, explained: currentQuestion.explanation, image: "https://drive.google.com/uc?export=view&id=" + currentQuestion.imagePath})}
              style={{ backgroundColor: "#466AFF", borderRadius: 10, width: "40%", height: 70, alignItems: "center", justifyContent: "center", }}
            >
              <Text style={{ color: "#FFFFFF", fontSize: "20%", }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={ComponentStyles.space_view}>

        </View>

      </ScrollView> : 
      <ScrollView><Text>Loading...</Text>
      </ScrollView>}
    </ScrollView>
  );
};

export default ActivityPage;