import React from 'react';
import { View, StyleSheet } from 'react-native';

const GridItem = (props) => {
    return (
        <View style={styles.gridItem}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        borderColor: 'black',
        borderRightWidth: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
  });

export default GridItem;