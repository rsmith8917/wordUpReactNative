import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GridItem = (props) => {
    return (
        <View style={styles.gridItem}>
            <Text>
                A
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        borderColor: 'black',
        borderBottomWidth: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
  });

export default GridItem;
