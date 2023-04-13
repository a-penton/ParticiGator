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
} from "react-native";
import ComponentStyles from '../ComponentStyles';
import Questions from './Questions';

const ActivityPage = ({ navigation, route }, props) => {
  const { username, password } = route.params;
  const data = Questions;
  const currentQuestion = data[0];
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [classCode, setClassCode] = useState('');
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(currentQuestion.correctAnswerIndex);
  const [explanation, setExplanation] = useState(currentQuestion.explanation);
  const [questionImage, setQuestionImage] = useState(currentQuestion.image);

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
      <View style={ComponentStyles.question_image_view}>
        <Image source={currentQuestion.image} style={ComponentStyles.question_image} />
      </View>

      <View style={ComponentStyles.answers_view}>
        {currentQuestion?.options.map((item, i) => (
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
            onPress={() => navigation.navigate('Profile', {answer: selectedAnswerIndex, correctAnswer: correctAnswerIndex, explained: explanation, image: questionImage})}
            style={{ backgroundColor: "#466AFF", borderRadius: 10, width: "40%", height: 70, alignItems: "center", justifyContent: "center", }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: "20%", }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={ComponentStyles.space_view}>

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