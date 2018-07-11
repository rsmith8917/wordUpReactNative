import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import GridItem from './GridItem';

const GridColumn = (props) => {
    return (
        <View style={styles.gridColumn}>
            <FlatList
                // scrollEnabled={false}
                // showsVerticalScrollIndicator={false}
                data={props.letters}
                renderItem={({ item }) => <GridItem key={item.key} id={item.key} deleteHandler={props.deleteHandler} ><Text>{item.data}</Text></GridItem>}
            />
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
