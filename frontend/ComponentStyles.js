import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    // Home Screen 
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },

    // Activity Screen
    container_activity: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      backgroundColor: "#fff",
    },
    
    // Gator image
    image: {
      marginTop:75,
      width: 120,
      height: 80,
    },

    // images for questions
    question_image:{
      width: 200,
      height: 200,
    },
    
    // Correct/ Incorrect images
    correct_image_view:{
      top: 20,
      width: "90%",
      left: "5%",
      justifyContent: "center",
      alignItems: "center",
    },

    incorrect_image_view:{
      top: 20,
      width: "90%",
      left: "5%",
      justifyContent: "center",
      alignItems: "center",
    },

    correct_image:{
      width: 200,
      height: 200,

    },

    // Correct/ Incorrect images
    incorrect_image:{
      width: 175,
      height: 175,
    },



    // view for images for questions
    question_image_view:{
      top: 20,
      width: "90%",
      left: "5%",
      justifyContent: "center",
      alignItems: "center",
    },

    // view options
    answers_view:{
      top: 20,
      width: "90%",
      alignItems: "center",
      left: "5%",
    },

    // Submit/enter code 
    enter_code_submit_view:{
      top: 70,
      width: "90%",
      height: 200,
      left: "5%",
      
    },

    // Used for spacing
    space_view:{
      top: 70,
      width: "90%",
      height: 200,
      left: "5%",
      
    },

    code_input_view:{
      backgroundColor: "#F4F4F4",
      height: 50,
      borderRadius: 10,
      width: "100%",
      fontSize: "20%",
      padding: 15,

    },


    // Welcome to ParticiGator text
    header_text: {
      marginTop: 70,
      height: 40,
      color: "#000000",
      fontSize: '28%',
      fontWeight: 'bold',
    },

    noActiveAssignments_text: {
      padding: 25,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 60,
      height: 200,
      color: "#000000",
      fontSize: '28%',
      fontWeight: 'bold',
    },

    // Your answer was correct/incorrect
    correct_text: {
      marginTop: 100,
      height: 30,
      color: "#000000",
      fontSize: '28%',
      fontWeight: 'bold',
      alignItems: "center",
      justifyContent: "center",
    },

    excellent_job_text: {
      marginTop: 20,
      height: 30,
      color: "#000000",
      fontSize: '28%',
      fontWeight: 'bold',
      alignItems: "center",
      justifyContent: "center",
    },

    incorrect_text: {
      marginTop: 100,
      height: 70,
      paddingHorizontal: 15,
      color: "#000000",
      fontSize: '28%',
      fontWeight: 'bold',
      alignItems: "center",
      justifyContent: "center",
    },

    try_again_text: {
      marginTop: 20,
      height: 60,
      color: "#000000",
      fontSize: '28%',
      fontWeight: 'bold',
      alignItems: "center",
      justifyContent: "center",
    },

    // Welcome back, ____ text
    activity_header_text: {
      height: 40,
      color: "#000000",
      fontSize: '28%',
      fontWeight: 'bold',
      textAlign: 'left',
      left: "5%",
      marginTop: 50,

    },

    // Instructions text
    instruction_text: {
      marginTop:10,
      height: 85,
      width: 300,
      color: "#000000",
      fontSize: '15%',
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

    // Login button
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#466AFF",
    },

    // Sign out button
    signOutBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#466AFF",
    },

    // Rectangle for spacing
    rectangle: {
      width: "80%",
      height: "3%",
      backgroundColor: 'white',
      borderRadius: 10,
    },

    // Blue rectangle for activity page
    blue_text_box: {
      marginTop: 10,
      width: "90%",
      backgroundColor: "#466AFF",
      borderRadius: 10,
      textAlign: 'left',
      left: "5%",
      
    },   
    // Today's Question
    white_text_1: {
      top: 10,
      height: 25,
      color: "#FFFFFF",
      fontSize: '18%',
      left: "5%",
    },

    // Question topic 
    white_text_2: {
      top: 10,
      height: 30,
      width: "90%",
      color: "#FFFFFF",
      fontSize: '28%',
      left: "5%",
      fontWeight: 'bold',
    },

    // Question
    question_text: {
      width: "90%",
      color: "#FFFFFF",
      fontSize: '16%',
      left: "5%",
      paddingVertical: 50,

    },

    explanation_text: {
      width: "90%",
      color: "#000000",
      fontSize: '20%',
      top: 10, 
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
    },

    // All styles for passcode entering functionality
    hiddenCodeInput: {
      position: 'absolute',
      height: 0,
      width: 0,
      opacity: 0,
    },
    
    inputsContainer: {
      width: '60%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    
    inputContainer: {
      borderColor: '#cccccc',
      borderWidth: 2,
      borderRadius: 4,
      padding: 12,
    },

    inputText: {
      fontSize: 24,
      fontFamily: 'Menlo-Regular',
    },
  });

  export default styles;