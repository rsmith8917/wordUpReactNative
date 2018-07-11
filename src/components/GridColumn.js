import React from 'react';
import { View, StyleSheet } from 'react-native';
import GridItem from './GridItem';

const GridColumn = (props) => {
    return (
        <View style={styles.gridColumn}>
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
        </View>
    );
}

const styles = StyleSheet.create({
    gridColumn: {
        borderColor: 'black',
        borderRightWidth: 1,
        flex: 1,
        flexDirection: 'column'
    }
  });

export default GridColumn;
