import React, { Component } from 'react'
import Carousel from 'react-native-snap-carousel';
import {
    Text,
    View,
    ImageBackground,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 

import { COLORS, SIZES } from '../../constants/app';
import GALLERY_DATA from '../../constants/home/Gallery';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: GALLERY_DATA,
        }
    }

    _renderItem({ item, index }) {
        return (
            <View style={{ width: SIZES.width - 50}}>
                <ImageBackground source={item.image} style={{ height: SIZES.height- 80}} resizeMode='cover' >
                    <Text
                        style={{ 
                            fontSize: SIZES.large, 
                            color: COLORS.white, 
                            backgroundColor: COLORS.transparentBlack, 
                            padding: 10, 
                            paddingHorizontal: 20,
                            marginTop: SIZES.width / 2,
                            position: 'relative',
                            textAlign:'center'
                        }}>
                            {item.text}
                    </Text>
                </ImageBackground>
            </View>

        )
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
                <FontAwesome name="chevron-left" size={24} color="black" style={{ margin: 5}}/>
                <Carousel
                    layout={"default"}
                    loop={true}
                    ref={ref => this.carousel = ref}
                    data={this.state.carouselItems}
                    sliderWidth={SIZES.width}
                    itemWidth={SIZES.width - 10}
                    renderItem={this._renderItem}
                    onSnapToItem={index => this.setState({ activeIndex: index })} />
                <FontAwesome name="chevron-right" size={24} color="black" style={{ margin: 5}}/>
            </View>
        )
    }
}