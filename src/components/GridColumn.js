import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import GridItem from './GridItem';

const GridColumn = (props) => {
    return (

        <View style={styles.gridColumn}>
            <FlatList
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                data={props.letters}
                extraData={props.selectedItemsLength}
                renderItem={
                    ({ item }) =>
                        <GridItem
                            key={item.key}
                            id={item.key}
                            letter={item.data}
                            selectedItems={props.selectedItems}
                        />
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    gridColumn: {
        flex: 1,
        flexDirection: 'column'
    }
});

export default GridColumn;
