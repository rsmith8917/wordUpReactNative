import React, { Component } from 'react';
import { 
  View, 
  StyleSheet,
  NativeModules } from 'react-native';
import Grid from './components/Grid';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental
 && UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.body}>
          <Grid />
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
    width: '100%',
    flex: 3
  },
  footer: {
    width: '100%',
    flex: 1
  }
});
