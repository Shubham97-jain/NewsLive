
import React, { Component } from 'react';
import { AppRegistry, Alert, View, BackHandler, Text, Imageview, SafeAreaView, Image, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Container, Header, Content, Item } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GoogleSignin, GoogleSigninButton, statusCodes, } from 'react-native-google-signin';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { SliderBox } from "react-native-image-slider-box";



class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://shubhamp.000webhostapp.com/images/Techonolgy.jpg", "https://shubhamp.000webhostapp.com/images/news.jpg", "https://shubhamp.000webhostapp.com/images/spots.jpg", // Network image         require('./assets/images/girl.jpg'),          // Local image       
            ]
        };


    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView>

                <SliderBox
                    style={{ height: hp('29'), width: wp('90'), marginTop: hp('17'), marginLeft: wp('5.5') }}
                    images={this.state.images}
                    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    dotColor="#FFEE58"
                    inactiveDotColor="#90A4AE"
                    paginationBoxVerticalPadding={20}
                    autoplay
                    circleLoop
                />
              <TouchableOpacity   onPress={()=>navigate('Forgot')}>
            
              style={{ height: hp('20'), width: wp(20), marginTop: hp('6'), marginLeft: wp('8') ,borderRadius:30}}>
                

                    <Image
                        style={{ height: hp('5.5'), width: wp('8'),marginTop: hp('3'),marginLeft: wp('4.5')}}
                        source={require('../../assets/ball.png')}
                    >
                    </Image>
                    <Text style={{color:'#000000',marginTop:hp('0.5'),marginLeft:wp('5'),fontSize:16 }}>Sports</Text>
               
                </TouchableOpacity>

                {/* <LinearGradient
                    style={{ height: hp('15'), width: wp('30'), borderRadius: hp('2'), marginLeft: wp('12'),marginTop:hp('5'), flexDirection: 'row' }}
                    colors={['#d19fe4', '#8dcaff']}>
                    <Text style={{ marginLeft: wp('14'), marginTop: hp('1.5'), color: '#ffffff', fontSize: 20 }}>Sign Up</Text>

                </LinearGradient> */}

            </SafeAreaView>
            //    <View>
            //        <Text>Welcome to HomeScren</Text>
            //    </View>

        );
    }
}

export default Home;