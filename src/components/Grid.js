import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    LayoutAnimation,
    PanResponder
} from 'react-native';
import GridColumn from './GridColumn';
import { generateLetter, generateLetterGrid } from '../modules/GenerateLetters';


export default class Grid extends Component {
    constructor(props) {
        super(props);

        this.itemsToDelete = [];

        this._panResponder = PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

            onPanResponderGrant: (evt, gestureState) => {
            },
            onPanResponderMove: (evt, gestureState) => {
                const x = gestureState.moveX;
                const y = gestureState.moveY;
                const numOfCols = 5;
                const boxEdgeLength = this.state.layout.width / numOfCols;
                const numOfRows = this.state.layout.height / boxEdgeLength;
                const col = Math.floor((x / this.state.layout.width) * numOfCols);
                const row = Math.floor((y / this.state.layout.height) * 5);
                const selectedItemKey = this.state.letters[col][row].key;
                this.setState({ selectedItemKey });
                this.markItemForDeletion(this.state.letters[col][row]);
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
                this.deleteItems();
            },
            onPanResponderTerminate: (evt, gestureState) => {
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                return true;
            },
        });

        this.state = {
            letters: generateLetterGrid(),
            word: ''
        };

        this.markItemForDeletion = this.markItemForDeletion.bind(this);
    }

    onLayout = (e) => {
        this.setState({
            layout: e.nativeEvent.layout
        });
    }

    markItemForDeletion(item) {
        const keyInt = parseInt(item.key, 10);
        if (this.itemsToDelete.indexOf(keyInt) === -1) {
            this.itemsToDelete.push(keyInt);
            this.setState(previousState => ({ word: (previousState.word + item.data).toUpperCase() }));
        }
    }

    deleteItems() {
        // LayoutAnimation.easeInEaseOut();
        LayoutAnimation.spring();
        this.setState(previousState => {
            const newLetters = [];
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
            return { letters: newLetters, word: '' };
        });
    }

    render() {
        return (
            <View>
                <View {...this._panResponder.panHandlers} style={styles.grid} onLayout={this.onLayout} >
                    {
                        this.state.letters.map((letterCol, i) =>
                            <GridColumn
                                letters={letterCol}
                                key={i}
                                selectedHandler={this.markItemForDeletion}
                                selectedItemKey={this.state.selectedItemKey}
                            />
                        )
                    }
                </View>
                <View style={styles.wordView}>
                    <Text style={styles.word}>
                        {this.state.word}
                    </Text>
                </View>
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
        backgroundColor: 'white'
    },
    wordView: {
        height: 50,
        alignItems: 'center'
    },
    word: {
        fontSize: 30,
        color: 'red'
    }
});
