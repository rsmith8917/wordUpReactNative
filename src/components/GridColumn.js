import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import GridItem from './GridItem';

const GridColumn = (props) => (
    <View style={styles.gridColumn}>
        <FlatList
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            data={props.letters}
            renderItem={
                ({ item }) =>
                    <GridItem 
                        key={item.key} 
                        id={item.key} 
                        deleteHandler={props.deleteHandler} 
                        letter={item.data}
                    />
            }
        />
    </View>
);

const styles = StyleSheet.create({
    gridColumn: {
        flex: 1,
        flexDirection: 'column'
    }
});

export default GridColumn;
