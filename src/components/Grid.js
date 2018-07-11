import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import GridColumn from './GridColumn';

export default class Grid extends Component {
    render() {
        return (
            <View style={styles.grid}>
                <GridColumn />
                <GridColumn />
                <GridColumn />
                <GridColumn />
                <GridColumn />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    grid: {
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        width: '100%',
        aspectRatio: 0.714
    }
});
