import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  NativeModules,
  Text
} from 'react-native';
import Grid from './components/Grid/Grid';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental
  && UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { word: '' };
    this.updateWord = this.updateWord.bind(this);
  }

  updateWord(word) {
    this.setState({ word });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.body}>
          <View style={styles.wordView}>
            <Text style={styles.word}>
              {this.state.word}
            </Text>
          </View>
          <Grid updateWord={this.updateWord} />
        </View>
        <View style={styles.footer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151'
  },
  header: {
    width: '100%',
    height: 45
  },
  body: {
    width: '100%'
  },
  footer: {
    width: '100%',
    flex: 1
  },
  wordView: {
    height: 50,
    alignItems: 'center',
    backgroundColor: '#c1b29e'
  },
  word: {
    fontSize: 30,
    color: '#458a93',
    fontWeight: 'bold'
  }
});
