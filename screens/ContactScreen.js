import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { Stylesheet, Text, View, ScrollView, TouchableOpacity, Linking , Image, ImageBackground } from 'react-native';

import { COLORS, SIZES, backgrounds } from '../constants';

const openForm = () => {
	// Contact Form goes here
	const contactForm = document.querySelector('.contact-form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function () {
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
            alert('Email sent');
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        } else {
            alert('Something went wrong')
        }
    }

    xhr.send(JSON.stringify(formData));

})
}
export default function ContactScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<ImageBackground source={backgrounds.football} resizeMode='cover' style={{ flex:1, justifyContent:'center' }} imageStyle={{ top:-80 }}>
			<ScrollView>
				<View style={{ padding: 15, marginBottom: 160, backgroundColor: COLORS.transparentBlack }}>
					<Text style={{ fontSize: SIZES.medium, fontWeight:'bold', color: COLORS.white, lineHeight: 25 }}>
					How do I not lose interest in a team sport, especially when I am playing with better teammates?
					</Text>
				</View>

				<View style={{ padding: 20, backgroundColor: COLORS.transparentBlack }}>
					<Text style={{ fontSize: SIZES.small, color: COLORS.white, textAlign: 'left', lineHeight: 25 }}>
					“A team is as strong as its weakest link,” is a common quote used by many coaches to help humble a team and help grow unity within a team. Many athletes lose interest and motivation for a sport from time to time especially if one feels like they are that weak link on the team. However, just because you feel like the weakest link on your team doesn’t mean that’s necessarily true! There are areas in which people are stronger and weaker and balancing those strengths to help each other's weak points is what makes a good team become a great team. 

		The biggest thing for sport is having a good mentality, and there comes great admiration and respect to people who think their teammates are better than them. This demonstrates that you are a humble person and recognize your own flaws which means you also know that you can grow and improve in different areas. Having a “growth mindset” is the belief that one can grow and improve on one’s abilities over time. Practice is key to helping you grow that self-confidence in your own ability and believe in yourself. With enough practice, you can even get to the same level as your teammates and/or even surpass them! 
					</Text>
				</View>
				<View style={{ backgroundColor: COLORS.transparentWhite }}>
					<TouchableOpacity 
						style={{ padding: 10, margin:20 , borderRadius: 4, alignItems: 'center', backgroundColor: COLORS.blue }}
						onPress={openForm}
					>
						<Text style={{ color: COLORS.white }}>Contact Us!</Text>
					</TouchableOpacity>

					<View style={{ flexDirection:'row', justifyContent:'space-between', paddingHorizontal: 60, paddingBottom: 10 }}>
						<TouchableOpacity
							onPress={() => Linking.openURL('https://www.instagram.com/mind_design_sports/')}
						>
							<AntDesign name="instagram" size={40} color="black" />
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => Linking.openURL('https://www.linkedin.com/company/mind-design-sports/')}
						>
							<AntDesign name="linkedin-square" size={40} color="black" />
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => Linking.openURL('https://twitter.com/MindDesignSport')}
						>
							<AntDesign name="twitter" size={40} color="black" />
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => Linking.openURL('https://www.tiktok.com/@minddesignsports')}
						>
							<Image style={{ width: 40, height: 40 }} source={require('../assets/tiktok-icon.png')}/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => Linking.openURL('https://www.youtube.com/channel/UC-wRM7I4lTCYcdLuNwrGYQg/videos')}
						>
							<AntDesign name="youtube" size={40} color="black" />
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</ImageBackground>
      </View>
    );
  }
