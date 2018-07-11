import React, { Component } from 'react';
import { 
    NativeModules,
    View, 
    StyleSheet,
    LayoutAnimation } from 'react-native';
import GridColumn from './GridColumn';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class Grid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            letters: this.generateLetterGrid()
        };

        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(key) {
        const CustomLayoutSpring = {
            duration: 400,
            create: {
              type: LayoutAnimation.Types.spring,
              property: LayoutAnimation.Properties.scaleXY,
              springDamping: 1,
            },
            update: {
              type: LayoutAnimation.Types.spring,
              springDamping: 1,
            },
        };
        LayoutAnimation.configureNext(CustomLayoutSpring);
        this.setState(previousState => {
            const newLetters = [];
            for (let i = 0; i < previousState.letters.length; i++) {
                const letterRow = [];
                let deleted = false;
                for (let j = 0; j < previousState.letters[i].length; j++) {
                    if (previousState.letters[i][j].key !== key) {
                        letterRow.push(previousState.letters[i][j]);
                    } else {
                        deleted = true;
                    }
                }
                if (deleted) {
                    letterRow.push({ key, data: this.generateLetter() });
                }
                newLetters.push(letterRow);
            }
            console.log(newLetters);
            return { letters: newLetters };
        });
    }

    generateLetterGrid() {
        const letterGrid = [];
        let keyCount = 0;

        for (let i = 0; i < 5; i++) {
            const letterRow = [];
            for (let j = 0; j < 10; j++) {
                keyCount += 1;
                letterRow[j] = { key: keyCount.toString(), data: this.generateLetter() };
            }
            letterGrid[i] = letterRow;
        }

        return letterGrid;
    }

    generateLetter() {
        const r = Math.floor(Math.random() * 150);
        let c;
        if (r < 19) {
            c = 'E'; 
        } else if (r < 32) {
            c = 'T';
        } else if (r < 56) {
            switch (Math.floor(Math.random() * 2)) {
                case 0:
                    c = 'A';
                    break;
                default:
                    c = 'R';
                    break;
            }
        } else if (r < 89) {
            switch (Math.floor(Math.random() * 3)) {
                case 0:
                    c = 'I';
                    break;
                case 1:
                    c = 'N';
                    break;
                default:
                    c = 'O';
                    break;
            }
        } else if (r < 98) {
            c = 'S';
        } else if (r < 104) {
            c = 'D';
        } else if (r < 119) {
            switch (Math.floor(Math.random() * 3)) {
                case 0:
                    c = 'C';
                    break;
                case 1:
                    c = 'H';
                    break;
                default:
                    c = 'L';
                    break;
            }
        } else if (r < 135) {
            switch (Math.floor(Math.random() * 4)) {
                case 0:
                    c = 'F';
                    break;
                case 1:
                    c = 'M';
                    break;
                case 2:
                    c = 'P';
                    break;
                default:
                    c = 'U';
                    break;
            }
        } else if (r < 141) {
            switch (Math.floor(Math.random() * 2)) {
                case 0:
                    c = 'G';
                    break;
                default:
                    c = 'Y';
                    break;
            }
        } else if (r < 143) {
            c = 'W';
        } else {
            switch (Math.floor(Math.random() * 7)) {
                case 0:
                    c = 'B';
                    break;
                case 1:
                    c = 'J';
                    break;
                case 2:
                    c = 'K';
                    break;
                case 3:
                    c = 'Qu';
                    break;
                case 4:
                    c = 'V';
                    break;
                case 5:
                    c = 'X';
                    break;
                default:
                    c = 'Z';
                    break;
            }
        }
        return c;
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
        flexDirection: 'row',
        width: '100%',
        borderWidth: 5,
        borderColor: '#e2d1ba',
        backgroundColor: 'white'
    }
});
