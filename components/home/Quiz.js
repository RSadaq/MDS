import React, { Component } from 'react'
import {
    Text,
    View,
    Button,
    Alert,
    Animated,
} from 'react-native'

import { COLORS, SIZES } from '../../constants/app';
import QUESTIONS from '../../constants/home/QuizQuestions';

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
                { text: "OK"}
            ],
        )

        this.updateQuestion();
    }

    updateQuestion = () => {
        // total number of questions is 10, give score & restart game
        if (this.state.questionNumber == 9) {
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
                <Text style={{ color:COLORS.white, alignSelf: 'center', fontWeight: 'bold', fontSize: SIZES.medium }} key='3a'>Bored? Quiz Yourself</Text>
                <View style={{ backgroundColor: COLORS.transparentBlack, borderRadius: 10, paddingHorizontal: 10, marginTop: 10 }}>
                    <Text style={{ color:COLORS.white, paddingTop: 10, fontStyle: 'italic', fontWeight: 'bold' }} >Score: {this.state.score}</Text>
                    <View style={{ justifyContent: 'space-evenly', paddingHorizontal: SIZES.paddingHeader, height: SIZES.height / 4 }} key='3b'>
                        <Text style={{ color:COLORS.white, fontSize: SIZES.small, lineHeight: 25 }} key='3ba'>{QUESTIONS[this.state.questionNumber].question}</Text>
                        <Button title="True" color={COLORS.blue} onPress={() => this.checkAnswer("True")} key='3bb' />
                        <Button title="False" color={COLORS.blue} onPress={() => this.checkAnswer("False")} key='3bc' />
                </View>
                </View>
            </View>
        );
    }
}
