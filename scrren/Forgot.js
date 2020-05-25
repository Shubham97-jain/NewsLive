
import React, { Component } from 'react';
import { AppRegistry, Alert, View, BackHandler, Text, Imageview, SafeAreaView, Image, TextInput, StyleSheet, TouchableOpacity,ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Container, Header, Content, Item } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GoogleSignin, GoogleSigninButton, statusCodes, } from 'react-native-google-signin';

import { Input } from 'react-native-elements';


class  Forgot extends  React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            Email:''
        };
    }

    handleEmail = Email => {
        this.setState({ Email })
      }

      onSubmit = async () => 
      {
        const { Email} = this.state
        
          if (Email.length > 0) 
          {
            this.props.navigation.navigate('Login')
          }
         else
        {
                alert('Plese Enter Email')
        }

        }

    render()
    {
        const {navigate}=this.props.navigation;
        return(
            <View style={{ height: hp('100'), width: wp('100'), backgroundColor: '#fafafa'}}>
                <ImageBackground
                style={{ height: hp('100'), width: wp('100'),marginTop:hp('0') }}
                 source={require('../assets/final.png')}>

                  <Text style={styles.forgot}> Forgot Password </Text>

                  <Text
                    style={{ color: '#9370DB', marginTop: hp('4'), fontSize: 20, marginLeft: wp('10') }}
                >Email</Text>
                <View style={{ height: hp('11'), width: wp('90'), flexDirection: 'row', }}>
                    <Image
                        style={{ marginLeft: wp('5'), marginTop: hp('2'), height: wp('2.5'), width: hp('2.5') }}
                        source={require('../assets/mail.png')}></Image>
                    <View style={{ height: wp('11'), width: wp('80') }}>
                        <Input

                            placeholder='Enter Email'
                            value={this.state.Email}
                            onChange={this.handleEmail}

                        />
                    </View>
                </View>
                <TouchableOpacity
                              onPress={()=>navigate('Login')}>
                                <LinearGradient
                                    style={{ height: hp('6'), width: wp('60'), borderRadius: hp('8'), marginLeft: wp('20'), flexDirection: 'row' }}
                                    colors={['#d19fe4', '#8dcaff']}>
                                    <Text style={{ marginLeft: wp('25'), marginTop: hp('1.5'), color: '#ffffff', fontSize: 20 }}>Submit </Text>

                                </LinearGradient>
                            </TouchableOpacity>

                  </ImageBackground>

                

                
            </View>
        );


    }
}

const styles = StyleSheet.create({
    forgot:
    {
        fontFamily:"Acme-Regular",
        marginTop:hp('19'),
        marginLeft:wp('25'),
        fontSize:40,
        color:'#8dcaff'
    
    }
    });

export default Forgot;