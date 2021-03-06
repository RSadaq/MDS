import React, { Component } from 'react'
import {
    Text,
    View,
    Pressable,
    Alert,
    Animated,
    StyleSheet,
} from 'react-native'

import { COLORS, SIZES } from '../constants';
import QUESTIONS from './QuizQuestions';

export default class Quiz extends Component {
    constructor() {
        super()
        this.state = {
           score: 0,
           questionNumber: 0
        }
        this.fadeAnim = new Animated.Value(0);
    }

    fadeColor = ( color ) => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 5000,
        }).start();
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 5000,
          }).start();
    };

    checkAnswer = ( prompt ) => {
        let answerIsCorrect = true;
        if (prompt == QUESTIONS[this.state.questionNumber].answer) {
            answerIsCorrect == true;
            this.setState( prevState => ({ score : prevState.score + 1}));
        } else {
            answerIsCorrect = false;
        }
        Alert.alert(
            answerIsCorrect ? 'You got it correct!' : 'The answer is actually ' + QUESTIONS[this.state.questionNumber].answer,
            QUESTIONS[this.state.questionNumber].info,
            [
                { 
                    text: "OK",
                    onPress: () => this.updateQuestion(),
                }  
            ],
        )
    }

    updateQuestion = () => {
        // total number of questions is 12, give score & restart game
        if (this.state.questionNumber == 11) {
            Alert.alert(
                "Congratz!",
                "You got " + this.state.score + " out of 12",
                [
                    { text: "OK"}
                ],
            );
            this.setState({questionNumber: 0});
            this.setState({score: 0});
        } else {
            this.setState( prevState => ({ questionNumber : prevState.questionNumber + 1}));
        }
    }

    render() {
        return (
            <View style={{ padding: SIZES.paddingHeader }} key='3a'>
                <Text style={{ color:COLORS.white, alignSelf: 'center', fontWeight: 'bold', fontSize: SIZES.large }} key='3a'>Bored? Quiz Yourself</Text>
                <View style={{ justifyContent:'space-between', height: 300, backgroundColor: COLORS.transparentBlack, borderRadius: 10, paddingHorizontal: 10, marginTop: 10 }}>
                    <Text style={{ color:COLORS.white, paddingTop: 10, fontStyle: 'italic', fontWeight: 'bold' }} >Score: {this.state.score}</Text>
                    <View style={{ paddingHorizontal: SIZES.padding }}>
                        <Text style={{ color:COLORS.white, fontSize: SIZES.medium, lineHeight: 25 }}>{this.state.questionNumber + 1}. {QUESTIONS[this.state.questionNumber].question}</Text>
                    </View>
                    <View style={{justifyContent:'flex-end', paddingHorizontal: SIZES.padding2, paddingVertical: SIZES.padding, height: SIZES.height / 4 }}>
                        <Pressable activeOpacity={.5} onPress={() => this.checkAnswer("True")} style={styles.button}><Text style={styles.buttonText}>True</Text></Pressable>
                        <Pressable activeOpacity={.5} onPress={() => this.checkAnswer("False")} style={styles.button}><Text style={styles.buttonText}>False</Text></Pressable>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: COLORS.blue,
        padding: 10,
        marginBottom: 5,
    },
    buttonText: {
        fontSize: SIZES.medium,
        color: COLORS.white,
    }
    
});