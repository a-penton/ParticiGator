import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
  } from "react-native";

export default class ActivityPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item : this.props.navigation.name
    }
    //this.onClick = this.onClick.bind(this); 
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello {this.state.item}!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});