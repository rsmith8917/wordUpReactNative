import React from 'react';
import { View, StyleSheet } from 'react-native';

const Grid = (props) => {
    return (
        <View style={styles.grid}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    grid: {
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderColor: 'black',
        flexDirection: 'column',
        width: '100%',
        aspectRatio: 1
    }
  });

export default Grid;
