import React from 'react'
import { Text, View, ImageBackground } from 'react-native';
import { COLORS, SIZES, backgrounds } from '../constants';

const QU = () => {
    return (
        <ImageBackground source={backgrounds.football} resizeMode='cover' style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ padding: 15, marginBottom: 160, backgroundColor: COLORS.transparentBlack }}>
                <Text style={{ fontSize: SIZES.large,textAlign:'center', fontWeight: 'bold', color: 'orange', lineHeight: 30, paddingBottom: 20}}>
                    Question Of The Week
                </Text>
                <Text style={{ fontSize: SIZES.medium, fontWeight: 'bold', color: COLORS.white, lineHeight: 25, textAlign: 'center' }}>
                    How do I not lose interest in a team sport, especially when I am playing with better teammates?
                </Text>
            </View>

            <View style={{ padding: 20, backgroundColor: COLORS.transparentBlack }}>
                <Text style={{ fontSize: SIZES.p, fontWeight:'bold', color: COLORS.white, textAlign: 'justify', lineHeight: 25 }}>
                    “A team is as strong as its weakest link,” is a common quote used by many coaches to help humble a team and help grow unity within a team. Many athletes lose interest and motivation for a sport from time to time especially if one feels like they are that weak link on the team. However, just because you feel like the weakest link on your team doesn’t mean that’s necessarily true! {'\n'}{'\n'}There are areas in which people are stronger and weaker and balancing those strengths to help each other's weak points is what makes a good team become a great team.

                    The biggest thing for sport is having a good mentality, and there comes great admiration and respect to people who think their teammates are better than them. This demonstrates that you are a humble person and recognize your own flaws which means you also know that you can grow and improve in different areas. Having a “growth mindset” is the belief that one can grow and improve on one’s abilities over time. {'\n'}{'\n'}Practice is key to helping you grow that self-confidence in your own ability and believe in yourself. With enough practice, you can even get to the same level as your teammates and/or even surpass them!
                </Text>
            </View>
        </ImageBackground>
    )
}

export default QU
