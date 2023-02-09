import React, { Component } from 'react';
import { 
  View,
  StyleSheet
} from 'react-native';

export default class SingleTour extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item : this.props.navigation.name
    }
  }

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});