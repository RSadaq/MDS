import React, { Component } from 'react'
import {
    Text,
    View,
    ImageBackground,
    StyleSheet,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';

import { COLORS, SIZES } from '../../constants';
import GALLERY_DATA from '../../constants/home/Gallery';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: GALLERY_DATA,
        }
    }

    _renderItem({ item }) {
        return (
            <View style={{ width: SIZES.width - 50}}>
                <ImageBackground source={item.image} style={{ height: SIZES.height- 130}} resizeMode='cover' >
                    <Text
                        style={styles.renderText}>
                            {item.text}
                    </Text>
                </ImageBackground>
            </View>

        )
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', backgroundColor: COLORS.white, alignItems:'center'}} key="gallery1">
                <FontAwesome name="chevron-left" size={24} color='firebrick' style={{ margin: 5}}/>
                <Carousel
                    layout={"default"}
                    loop={true}
                    ref={ref => this.carousel = ref}
                    data={this.state.carouselItems}
                    sliderWidth={SIZES.width}
                    itemWidth={SIZES.width - 10}
                    renderItem={this._renderItem}
                    onSnapToItem={index => this.setState({ activeIndex: index })} />
                <FontAwesome name="chevron-right" size={24} color='firebrick' style={{ margin: 5}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    renderText: {
        fontSize: SIZES.large, 
        color: COLORS.white, 
        backgroundColor: COLORS.transparentBlack, 
        padding: 10, 
        paddingHorizontal: 20,
        marginTop: SIZES.width / 2,
        position: 'relative',
        textAlign:'center',
    },
});