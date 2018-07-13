import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    LayoutAnimation
} from 'react-native';
import GridColumn from '../GridColumn';
import { createPanResponder } from './CreatePanResponder';
import { generateLetter, generateLetterGrid } from './GenerateLetters';


export default class Grid extends Component {
    constructor(props) {
        super(props);
        this.itemsToDelete = [];
        this.word = '';
        this.panResponder = createPanResponder(
            this.onGrant.bind(this),
            this.onMove.bind(this),
            this.deleteItems.bind(this)
        );
        this.state = {
            letters: generateLetterGrid(),
            selectedItems: [],
            selectedItemsLength: 0
        };
        this.markItemForDeletion = this.markItemForDeletion.bind(this);
    }

    onLayout = (e) => {
        this.setState({
            layout: e.nativeEvent.layout
        });
    }

    onGrant(evt) {
        const selectedItem = this.getSelectedItem(evt.nativeEvent.pageX, evt.nativeEvent.pageY);
        this.markItemForDeletion(selectedItem);
    }

    onMove(evt, gestureState) {
        const selectedItem = this.getSelectedItem(gestureState.moveX, gestureState.moveY);
        this.markItemForDeletion(selectedItem);
    }

    getSelectedItem(x, y) {

        function posToIndex(pos, length, segments) {
            let index = Math.floor((pos / length) * segments);
            if (index < 0) {
                index = 0;
            }
            if (index >= segments) {
                index = segments - 1;
            }
            return index;
        }

        const relX = x;
        const relY = y - 95;
        const numOfCols = 5;
        const boxEdgeLength = this.state.layout.width / numOfCols;
        const numOfRows = this.state.layout.height / boxEdgeLength;
        // console.log(`Y: ${relY}, Height: ${this.state.layout.height}`);
        const col = posToIndex(relX, this.state.layout.width, numOfCols);
        const row = posToIndex(relY, this.state.layout.height, numOfRows);
        return this.state.letters[col][row];
    }

    markItemForDeletion(item) {
        // Add item to itemsToDelete array if it
        // is unique. Also, build word from itemsToDelete.
        const keyInt = parseInt(item.key, 10);
        if (this.itemsToDelete.indexOf(keyInt) === -1) {
            this.itemsToDelete.push(keyInt);
            this.word = (this.word + item.data).toUpperCase();
            this.props.updateWord(this.word);
            this.setState({
                selectedItems: this.itemsToDelete,
                selectedItemsLength: this.itemsToDelete.length
            });
        }
    }

    deleteItems() {
        LayoutAnimation.spring();
        this.setState(previousState => {
            const newLetters = [];
            // Loop through all letters in the grid and selectively
            // build new grid with letters that have not been marked
            // for deletion.  Fill in grid with newly generated letters.
            for (let i = 0; i < previousState.letters.length; i++) {
                const letterRow = [];
                let deleted = 0;
                const deletedKeys = [];
                for (let j = 0; j < previousState.letters[i].length; j++) {
                    if (this.itemsToDelete.indexOf(parseInt(previousState.letters[i][j].key, 10)) === -1) {
                        letterRow.push(previousState.letters[i][j]);
                    } else {
                        deleted += 1;
                        deletedKeys.push(previousState.letters[i][j].key);
                    }
                }
                for (let k = 0; k < deleted; k++) {
                    letterRow.push({ key: deletedKeys[k], data: generateLetter() });
                }
                newLetters.push(letterRow);
            }
            this.itemsToDelete = [];
            this.props.updateWord('');
            this.word = '';
            return { letters: newLetters };
        });
    }

    render() {
        return (
            <View
                {...this.panResponder.panHandlers}
                style={styles.grid}
                onLayout={this.onLayout}
            >
                {
                    this.state.letters.map((letterCol, i) =>
                        <GridColumn
                            letters={letterCol}
                            key={i}
                            selectedHandler={this.markItemForDeletion}
                            selectedItems={this.state.selectedItems}
                            selectedItemsLength={this.state.selectedItemsLength}
                        />
                    )
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    grid: {
        flexDirection: 'row',
        width: '100%',
        borderWidth: 5,
        borderColor: '#e2d1ba',
        backgroundColor: 'white',
        aspectRatio: 0.8333
    }
});
