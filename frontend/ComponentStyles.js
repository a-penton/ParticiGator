import { StyleSheet } from 'react-native';

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
      backgroundColor: "#fff",
      //alignItems: "center",
      justifyContent: "center",
    },
    // Gator image
    image: {
      width: 120,
      height: 80,
    },
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
      width: "90%",
      height: "30%",
      backgroundColor: "#466AFF",
      borderRadius: 10,
      textAlign: 'left',
      left: "5%",
    },   
    
    white_text_1: {
      height: "13%",
      color: "#FFFFFF",
      fontSize: '18%',
      top: "5%",
      left: "3%",
    },
    white_text_2: {
      height: "40%",
      color: "#FFFFFF",
      fontSize: '28%',
      top: "5%",
      left: "3%",
      fontWeight: 'bold',
    },
    question_text: {
      height: "95%",
      width: "97%",
      color: "#000000",
      fontSize: '16%',
      top: "5%",
      left: "3%",
      // right: "3%",
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