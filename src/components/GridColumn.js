import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import GridItem from './GridItem';

export default class GridColumn extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <View style={styles.gridColumn}>
                <FlatList
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    data={this.props.letters}
                    extraData={this.props.selectedItemKey}
                    renderItem={
                        ({ item }) =>
                            <GridItem
                                key={item.key}
                                id={item.key}
                                // selectedHandler={this.props.selectedHandler}
                                letter={item.data}
                                selectedItemKey={this.props.selectedItemKey}
                            />
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    gridColumn: {
        flex: 1,
        flexDirection: 'column'
    }
});