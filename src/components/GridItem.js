import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Grid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 0,
            height: 0,
            x: 0,
            y: 0
        };
    }

    render() {
        const colors = {};
        colors.A = '#f9fbdb';
        colors.B = '#f1ded4';
        colors.C = '#fefee8';
        colors.D = '#d5e1d1';
        colors.E = '#d6e5e9';
        colors.F = '#f6cfd4';
        colors.G = '#dee4e7';
        colors.H = '#ead7d6';
        colors.I = '#f8d1e3';
        colors.J = '#fbf0f7';
        colors.K = '#f7f8f9';
        colors.L = '#dee2e9';
        colors.M = '#bcb9c7';
        colors.N = '#f9e9f7';
        colors.O = '#c8b9c6';
        colors.P = '#dbdbd3';
        colors.Qu = '#e2ebed';
        colors.R = '#fde1d1';
        colors.S = '#ddc2c7';
        colors.T = '#c5bec2';
        colors.U = '#e1e2db';
        colors.V = '#d6e5ee';
        colors.W = '#ffe7d3';
        colors.Y = '#dde0e0';
        colors.X = '#d0f5e3';
        colors.Z = '#f3f1ee';

        const highlight = this.props.selectedItemKey === this.props.id;
        const styles = StyleSheet.create({
            gridItem: {
                borderColor: '#e2d1ba',
                borderWidth: 5,
                backgroundColor: highlight ? 'red' : colors[this.props.letter],
                aspectRatio: 1,
                justifyContent: 'center',
                alignItems: 'center'
            },
            text: {
                fontSize: 20
            }
        });

        return (
            <View style={styles.gridItem} onLayout={this.onLayout} ref="Marker">
                <Text style={styles.text}>
                    {this.props.letter}
                </Text>
            </View>
        );
    }

}
