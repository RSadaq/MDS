import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, TouchableOpacity, Linking, Image, ImageBackground } from 'react-native';

import { COLORS, backgrounds, SIZES } from '../constants';

export default function ContactScreen() {
	return (
		<View style={{ flex: 1 }}>
			<ImageBackground source={backgrounds.tabletennis} resizeMode='cover' style={{ flex: 1, justifyContent: 'center' }} imageStyle={{ top: -80 }}>
					<View style={{ backgroundColor: COLORS.transparentWhite, margin: 20, borderRadius: 20 }}>
						<Text style={{ color:'black', fontWeight: 'bold', fontSize: SIZES.medium, textAlign:'justify', padding: 10, marginHorizontal: 20, marginTop: 20, paddingBottom: 20 }}>
							We would love to hear from you! You can contact us via email by using the 'Contact Us!' button below, by phone, or connect with us on social media! 
						</Text>
						<Text style={{fontSize:SIZES.medium, fontWeight:'bold', marginHorizontal: 20, color:'midnightblue'}}>Email</Text>
						<Text style={{fontSize:SIZES.medium, marginHorizontal: 20, color:'blue', paddingBottom: 20}}>MindDesignSports@gmail.com</Text>	
						<Text style={{fontSize:SIZES.medium, fontWeight:'bold', marginHorizontal: 20, color:'midnightblue'}}>Phone</Text>
						<Text style={{fontSize:SIZES.medium, marginHorizontal: 20, color:'blue', paddingBottom: 20}}>(201) 503-4902‬</Text>	
						<Text style={{fontSize:SIZES.medium, fontWeight:'bold', marginHorizontal: 20, color:'midnightblue'}}>Social Media</Text>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 17, paddingBottom: 10, paddingTop: 20}}>
							<TouchableOpacity
								onPress={() => Linking.openURL('https://www.instagram.com/mind_design_sports/')}
							>
								<AntDesign name="instagram" size={40} color="darkorchid" />
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => Linking.openURL('https://www.linkedin.com/company/mind-design-sports/')}
							>
								<AntDesign name="linkedin-square" size={40} color="royalblue" />
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => Linking.openURL('https://twitter.com/MindDesignSport')}
							>
								<AntDesign name="twitter" size={40} color="deepskyblue" />
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => Linking.openURL('https://www.tiktok.com/@minddesignsports')}
							>
								<Image style={{ width: 40, height: 40 }} source={require('../assets/tiktok-icon.png')} />
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => Linking.openURL('https://www.youtube.com/channel/UC-wRM7I4lTCYcdLuNwrGYQg/videos')}
							>
								<AntDesign name="youtube" size={40} color="crimson" />
							</TouchableOpacity>
						</View>

						<TouchableOpacity
							style={{ padding: 10, margin: 20, borderRadius: 4, alignItems: 'center', backgroundColor: 'firebrick', }}
							onPress= {() => Linking.openURL('mailto:MindDesignSports@gmail.com?subject=Enquiry&body=')}
						>
							<Text style={{ color: COLORS.white }}>Contact Us!</Text>
						</TouchableOpacity>
					</View>
			</ImageBackground>
		</View>
	);
}
