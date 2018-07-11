/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Grid from './components/Grid';
import GridRow from './components/GridRow';
import GridItem from './components/GridItem';

export default class App extends Component {
  render() {
    return (
      <Grid>
        <GridRow>
            <Text>A</Text>
            <Text>B</Text>
            <Text>C</Text>
            <Text>D</Text>
            <Text>E</Text>
        </GridRow>
        <GridRow>
            <Text>A</Text>
            <Text>B</Text>
            <Text>C</Text>
            <Text>D</Text>
            <Text>E</Text>
        </GridRow>
        <GridRow>
            <Text>A</Text>
            <Text>B</Text>
            <Text>C</Text>
            <Text>D</Text>
            <Text>E</Text>
        </GridRow>
        <GridRow>
            <Text>A</Text>
            <Text>B</Text>
            <Text>C</Text>
            <Text>D</Text>
            <Text>E</Text>
        </GridRow>
        <GridRow>
            <Text>A</Text>
            <Text>B</Text>
            <Text>C</Text>
            <Text>D</Text>
            <Text>E</Text>
        </GridRow>     
      </Grid>
    );
  }
}
