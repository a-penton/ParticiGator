import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: 120,
      height: 80,
      // borderRaduis: 18,
      //marginBottom: 40,
      //marginBottom: 40,
    },
    header_text: {
      height: 40,
      color: "#000000",
      fontSize: '28%',
      fontWeight: 'bold',
    },
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
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#466AFF",
    },
    rectangle: {
      width: 200,
      height: 100,
      backgroundColor: 'red',
      borderRadius: 10,
    },
  });

  export default styles;