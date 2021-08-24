import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, TouchableOpacity, Linking, Image, ImageBackground } from 'react-native';

import { COLORS, backgrounds, SIZES } from '../constants';

export default function ContactScreen() {
	return (
		<View style={{ flex: 1 }}>
			<ImageBackground source={backgrounds.tabletennis} resizeMode='cover' style={{ flex: 1, justifyContent: 'center' }} imageStyle={{ top: -80 }}>
					<View style={{ backgroundColor: COLORS.transparentWhite, margin: 20 }}>
						<Text style={{ color:'darkred', fontWeight: 'bold', fontSize: SIZES.medium, textAlign:'center', padding: 10, marginHorizontal: 20, marginTop: 20 }}>
							If you have any questions or comments, please contact us via email or phone. You can also send us a message using the contact form. Feel free to leave us a review/testimonial!
						</Text>
						<Text style={{fontSize:SIZES.medium, fontWeight:'bold', marginHorizontal: 20, color:'blue'}}>Email</Text>
						<Text style={{fontSize:SIZES.medium, marginHorizontal: 20, color:'blue'}}>MindDesignSports@gmail.com</Text>	
						<Text style={{fontSize:SIZES.medium, fontWeight:'bold', marginHorizontal: 20, color:'blue'}}>Phone</Text>
						<Text style={{fontSize:SIZES.medium, marginHorizontal: 20, color:'blue'}}>(201) 503-4902‬</Text>	
						
						<TouchableOpacity
							style={{ padding: 10, margin: 20, borderRadius: 4, alignItems: 'center', backgroundColor: 'firebrick' }}
							onPress= {() => Linking.openURL('mailto:MindDesignSports@gmail.com?subject=Enquiry&body=')}
						>
							<Text style={{ color: COLORS.white }}>Contact Us!</Text>
						</TouchableOpacity>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 60, paddingBottom: 10 }}>
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
								<Image style={{ width: 40, height: 40 }} source={require('../assets/tiktok-icon.png')} />
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => Linking.openURL('https://www.youtube.com/channel/UC-wRM7I4lTCYcdLuNwrGYQg/videos')}
							>
								<AntDesign name="youtube" size={40} color="black" />
							</TouchableOpacity>
						</View>
					</View>
			</ImageBackground>
		</View>
	);
}
