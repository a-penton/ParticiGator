import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    // Home Screen 
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },

    // Activity Screen
    container_activity: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      backgroundColor: "#fff",
      //alignItems: "center",
      // justifyContent: "center",
      // marginTop: "5%",
    },
    
    // Gator image
    image: {
      width: 120,
      height: 80,
    },
    // images for questions
    question_image:{
      width: 200,
      height: 200,
    },
    // view for images for questions
    question_image_view:{
      top: 20,
      width: "90%",
      // height: 200,
      // backgroundColor: "green",
      // borderRadius: 10,
      // textAlign: 'left',
      left: "5%",
      justifyContent: "center",
      alignItems: "center",
    },

    // view options
    answers_view:{
      top: 20,
      width: "90%",
      // height: 400,
      alignItems: "center",
      
      // backgroundColor: "red",
      // borderRadius: 10,
      // textAlign: 'left',
      left: "5%",
      // textAlignVertical:2,
      // textAlign: "center",
      
    },

    // submit/enter code 
    enter_code_submit_view:{
      top: 70,
      width: "90%",
      height: 200,
      // backgroundColor: "blue",
      // borderRadius: 10,
      // textAlign: 'left',
      left: "5%",
      
    },

    space_view:{
      top: 70,
      width: "90%",
      height: 200,
      // backgroundColor: "blue",
      // borderRadius: 10,
      // textAlign: 'left',
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

    // submitButton: {
    //   // width: "100%",
    //   borderRadius: 10,
    //   height: 50,
    //   // justifyContent: "center",
    //   // marginTop: 40,
    //   backgroundColor: "#466AFF",
    //   fontSize: "20%",
    //   padding: 30,
    // },
    // Welcome to ParticiGator text
    header_text: {
      height: 40,
      color: "#000000",
      fontSize: '28%',
      fontWeight: 'bold',
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
      height: 90,
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
      // height: question_text.height,
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
      // top: 50,
      // height: 80,
      width: "90%",
      color: "#FFFFFF",
      fontSize: '16%',
      left: "5%",
      paddingVertical: 50,

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