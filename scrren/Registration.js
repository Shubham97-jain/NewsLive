import React, { Component } from 'react';
import { AppRegistry, Alert, View, BackHandler, Text, Imageview, SafeAreaView, Image, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Container, Header, Content, Item } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GoogleSignin, GoogleSigninButton, statusCodes, } from 'react-native-google-signin';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import Firebase from '../firebase/Fiirebase';

class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state=
        {
            // Name:'',
            email:'',
            password:'',
            // ss
};
    }

    handleSignUp = () => {
        const { email, password } = this.state
        Firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Login'))
            .catch(error => console.log(error))
    }
    // handleName =  Name => {
    //     this.setState({  Name })
    //   }
    
    //   handleEmail = Email => {
    //     this.setState({ Email })
    //   }
    //   handlePassword = Password => {
    //     this.setState({ Password })
    //   }
    //   handlePhone = Phone => {
    //     this.setState({ Phone })
    //   }

    //   onLogin = async () => 
    //   {
    //     const { Name,Email,Password,Phone} = this.state
        
    //       if (Name.length > 0 && Email.length > 0 && Password.length > 0 && Phone.length >0 ) 
    //       {
    //         this.props.navigation.navigate('Login')
    //       }
    //      else
    //     {
    //             alert('Plese Complete Profile')
    //     }

    //     }






    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ height: hp('100'), width: wp('100'), backgroundColor: '#fafafa' }}>
                <ImageBackground
                    style={{ height: hp('100'), width: wp('100'), marginTop: hp('0') }}
                    source={require('../assets/backgrundd.png')}>

                    <View style={{ height: hp('70'), width: wp('65'), backgroundColor: '#f8f8ff', marginTop: hp('13'), marginLeft: wp('19'), borderRadius: 26, borderColor: '#8dcaff', borderWidth: 1 }}>
                        <Text style={styles.Welcome}> Welcome to New!ive </Text>
                        <Text
                            style={{ color: '#9370DB', marginTop: hp('0.5'), fontSize: 20, marginLeft: wp('10') }}
                        >Name</Text>
                        < View style={{ height: hp('8'), width: wp('90'), flexDirection: 'row', }}>
                            <Image
                                style={{ marginLeft: wp('5'), marginTop: hp('2'), height: wp('2.5'), width: hp('2.5') }}
                                source={require('../assets/mail.png')}></Image>
                            <View style={{ height: wp('11'), width: wp('50') }}>
                                <Input

                                    placeholder='Enter Name'
                                    value={this.state.Name}
                                    onChangeText={this.handleName}

                                />
                            </View>
                        </View>
                        <Text
                    style={{ color: '#9370DB', marginTop: hp('0'), fontSize: 20, marginLeft: wp('10') }}
                >Email</Text>
                 <View style={{ height: hp('8'), width: wp('90'), flexDirection: 'row', }}>
                    <Image
                        style={{ marginLeft: wp('5'), marginTop: hp('2'), height: wp('2.5'), width: hp('2.5') }}
                        source={require('../assets/mail.png')}></Image>
                    <View style={{ height: wp('11'), width: wp('50') }}>
                        <Input

                            placeholder='Enter Email'
                            value={this.state.Email}
                            onChangeText={email => this.setState({ email })}

                        />
                    </View>
                </View>
                <Text
                    style={{ color: '#9370DB', fontSize: 20, marginLeft: wp('10') }}
                >Password</Text>
                <View style={{ height: hp('8'), width: wp('90'), flexDirection: 'row', }}>
                    <Image
                        style={{ marginLeft: wp('5'), marginTop: hp('2'), height: wp('3.5'), width: hp('2.5') }}
                        source={require('../assets/passwordnew.png')}></Image>

                    <View style={{ height: wp('10'), width: wp('50') }}>
                        <Input
                            secureTextEntry={true}
                            placeholder='Enter Password'
                            value={this.state.Password}
                            onChangeText={password => this.setState({ password })}

                        />
                    </View>
                </View>
                <Text
                    style={{ color: '#9370DB', fontSize: 20, marginLeft: wp('10') }}
                >Phone</Text>
                <View style={{ height: hp('8'), width: wp('90'), flexDirection: 'row', }}>
                    <Image
                        style={{ marginLeft: wp('6'), marginTop: hp('2'), height: wp('3.5'), width: hp('2.5') }}
                        source={require('../assets/passwordnew.png')}></Image>

                    <View style={{ height: wp('10'), width: wp('50') }}>
                        <Input
                            secureTextEntry={true}
                            placeholder='Enter Phone'
                            value={this.state.Phone}
                            onChangeText={this.handlePhone}


                        />
                    </View>
                </View>
                <TouchableOpacity
                              onPress={this.handleSignUp}>
                                <LinearGradient
                                    style={{ height: hp('6'), width: wp('40'), borderRadius: hp('8'), marginLeft: wp('12'), flexDirection: 'row',marginTop: hp('1.5') }}
                                    colors={['#d19fe4', '#8dcaff']}>
                                    <Text style={{ marginLeft: wp('12'), marginTop: hp('1.5'), color: '#ffffff', fontSize: 20 }}>Click me !</Text>

                                </LinearGradient>
                            </TouchableOpacity>
                
                


                    </View>

                    {/* 

               
                <
                
               
               
                
                <View>
                            <TouchableOpacity
                              onPress={()=>navigate('Login')}>
                                <LinearGradient
                                    style={{ height: hp('6'), width: wp('60'), borderRadius: hp('8'), marginLeft: wp('20'), flexDirection: 'row' }}
                                    colors={['#d19fe4', '#8dcaff']}>
                                    <Text style={{ marginLeft: wp('25'), marginTop: hp('1'), color: '#ffffff', fontSize: 20 }}>Click me !</Text>

                                </LinearGradient>
                            </TouchableOpacity>
                        </View> */}

                </ImageBackground>


            </View>
        );


    }
}

const styles = StyleSheet.create({
    Welcome:
    {
        fontFamily: "Acme-Regular",
        marginTop: hp('2'),
        marginLeft: wp('15'),
        fontSize: 25,
        color: '#8dcaff'

    }
});


export default Registration;