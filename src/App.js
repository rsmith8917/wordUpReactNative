/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Grid from './components/Grid';
// import GridColumn from './components/GridColumn';
// import GridItem from './components/GridItem';

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
    flex: 1
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: 'red'
  },
  body: {
    width: '100%',
    flex: 3
  },
  footer: {
    width: '100%',
    flex: 1,
    backgroundColor: 'blue'
  }
});
