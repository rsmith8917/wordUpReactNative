import React from 'react';
import { View, StyleSheet } from 'react-native';
import GridItem from './GridItem';

const GridRow = (props) => {
    return (
        <View style={styles.gridRow}>
            {
                props.children.map(child => )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    gridRow: {
        borderColor: 'black',
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: 'row'
    }
  });

export default GridRow;