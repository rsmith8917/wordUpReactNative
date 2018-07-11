import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const GridItem = (props) => {
    return (
        <View style={styles.gridItem}>
            <TouchableOpacity onPress={props.deleteHandler.bind(null, props.id)}>
                {props.children}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        borderColor: 'black',
        borderBottomWidth: 1,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GridItem;
