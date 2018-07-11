import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import GridColumn from './GridColumn';

export default class Grid extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            letters: [
                [{ key: '1', data: 'A' },  { key: '2', data: 'B' },  { key: '3', data: 'C' },  { key: '4', data: 'D' },  { key: '5', data: 'E' }],
                [{ key: '6', data: 'A' },  { key: '7', data: 'B' },  { key: '8', data: 'C' },  { key: '9', data: 'D' },  { key: '10', data: 'E' }],
                [{ key: '11', data: 'A' }, { key: '12', data: 'B' }, { key: '13', data: 'C' }, { key: '14', data: 'D' }, { key: '15', data: 'E' }],
                [{ key: '16', data: 'A' }, { key: '17', data: 'B' }, { key: '18', data: 'C' }, { key: '19', data: 'D' }, { key: '20', data: 'E' }],
                [{ key: '21', data: 'A' }, { key: '22', data: 'B' }, { key: '23', data: 'C' }, { key: '24', data: 'D' }, { key: '25', data: 'E' }],
            ]
        };

        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(key) {
        console.log('DELETE THING');
        console.log(key);
        this.setState(previousState => {
            let newLetters = [];
            for (let i = 0; i < previousState.letters.length; i++) {
                let letterRow = [];
                for (let j = 0; j < previousState.letters[i].length; j++) {
                    if (previousState.letters[i][j].key !== key) {
                        letterRow.push(previousState.letters[i][j]);
                    }
                }
                newLetters.push(letterRow);
            }
            return { letters: newLetters };
        });
    }

    render() {
        return (
            <View style={styles.grid}>
                {
                    this.state.letters.map((letterCol, i) =>
                        <GridColumn letters={letterCol} key={i} deleteHandler={this.deleteItem} />
                    )
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    grid: {
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        width: '100%'
    }
});
