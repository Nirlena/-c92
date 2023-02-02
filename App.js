import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      text: '########',
      displayText: ''

    }
  }
  render() {
    return (
      <View
        style={styles.container}>
        <SafeAreaView
          style={styles.droidSafeArea} />
        <Header
          backgroundColor='#9c47c2'
          centerComponent={{ text: 'Fonema', style: { color: '#000', fontSize: 20 } }} />
        <TextInput
          onChangeText={text => { this.setState({ text: text }) }}
          value={this.state.text}
          style={styles.inputBox} />
        <Text style={styles.displayText}>
          {this.state.displayText}
        </Text>
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => { this.setState({ displayText: this.state.text }) }}>
          <Text style={styles.buttonText}>
            Go
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    fontWeight: 'bold'
  },
  goButton: {
    width: 65,
    height: 65,
    alignSelf: 'center',
    padding: 10,
    margin: 25,
    borderWidth: 4,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cdcdcd'
  },
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  displayText: {
    alignItems: 'center',
    fontSize: 30
    }
});
