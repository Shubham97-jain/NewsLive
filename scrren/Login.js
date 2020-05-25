import React, { Component } from 'react';
import { AppRegistry, Alert, View, BackHandler, Text, Imageview, SafeAreaView, Image, TextInput, StyleSheet, TouchableOpacity,ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Container, Header, Content, Item } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GoogleSignin, GoogleSigninButton, statusCodes, } from 'react-native-google-signin';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import firebase from '../firebase/Fiirebase';

class Login extends React.Component {


   
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        };
    }

    handleLogin = () => {
        const { email, password } = this.state
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => this.props.navigation.navigate('BottomNavi'))
          .catch(error => console.log(error))
    }

    

    
// Validation
        // handleEmail = Email => {
        //     this.setState({ Email })
        //   }
        //   handlePassword = Password => {
        //     this.setState({ Password })
        //   }


    //       onLogin = async () => 
    //   {
    //     const { Email,Password} = this.state
        
    //       if ( Email.length > 0 && Password.length > 0  >0 ) 
    //       {
    //         this.props.navigation.navigate('BottomNavi')
    //       }
    //      else
    //     {
    //             alert('Plese Complete Profile')
    //     }

    //     }
          
    
    // to fetch api
         
        // UserLoginFunction = () =>{
 
        //     const { Email }  = this.state ;
        //     const { Password }  = this.state ;
            
            
        //    fetch('https://reqres.in/api/login', {
        //      method: 'POST',
        //      headers: {
        //        'Accept': 'application/json',
        //        'Content-Type': 'application/json',
        //      },
        //      body: JSON.stringify({
            
        //        email: Email,
            
        //        password: Password
            
        //      })
            
        //    }).then((response) => response.json())
        //          .then((responseJson) => {
            
        //            // If server response message same as Data Matched
        //           if(responseJson == 'Data Matched')
        //            {
        //             // Alert.alert(JSON.stringify(responseJson));
        //                //Then open Profile activity and send user email to profile activity.
        //                this.props.navigation.navigate('BottomNavi');
            
        //            }
        //            else{
                       
        //             Alert.alert(JSON.stringify(responseJson));
        //            }
            
        //          }).catch((error) => {
        //            console.error(error);
        //          });
            
            
        //      }



    componentDidMount() {
        //initial configuration
        GoogleSignin.configure({
            //It is mandatory to call this method before attempting to call signIn()
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
            // Repleace with your webClientId generated from Firebase console
            webClientId: '399526656128-qvqjfuo6d890dh97erf8lesv2175376l.apps.googleusercontent.com',
        });
        //Check if user is already signed in
        this._isSignedIn();
    }
    _isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        if (isSignedIn) {
            alert('User is already signed in');
            //Get the User details as user is already signed in
            this._getCurrentUserInfo();
        } else {
            //alert("Please Login");
            console.log('Please Login');
        }
        this.setState({ gettingLoginStatus: false });
    };
    _getCurrentUserInfo = async () => {
        try {
            const userInfo = await GoogleSignin.signInSilently();
            console.log('User Info --> ', userInfo);
            this.setState({ userInfo: userInfo });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_REQUIRED) {
                alert('User has not signed in yet');
                console.log('User has not signed in yet');
            } else {
                alert("Something went wrong. Unable to get user's info");
                console.log("Something went wrong. Unable to get user's info");
            }
        }
    };
    _signIn = async () => {
        //Prompts a modal to let the user sign in into your application.
        try {
            await GoogleSignin.hasPlayServices({
                //Check if device has Google Play Services installed.
                //Always resolves to true on iOS.
                showPlayServicesUpdateDialog: true,
            });
            const userInfo = await GoogleSignin.signIn();
            console.log('User Info --> ', userInfo);
            this.setState({ userInfo: userInfo });
        } catch (error) {
            console.log('Message', error.message);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('User Cancelled the Login Flow');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('Signing In');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('Play Services Not Available or Outdated');
            } else {
                console.log('Some Other Error Happened');
            }
        }
    };
    _signOut = async () => {
        //Remove user session from the device.
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            this.setState({ userInfo: null }); // Remove the user from your app's state as well
        } catch (error) {
            console.error(error);
        }
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView>

                <View
                    style={{ backgroundColor: '#fafafa', height: hp('100'), weight: wp('100') }}>
                        <ImageBackground
                style={{ height: hp('100'), width: wp('100'),marginTop:hp('0') }}
                 source={require('../assets/backgrundd.png')}>



                    

                    <View style={{ height: hp('70'), width: wp('65'),backgroundColor: '#f8f8ff', marginTop: hp('13'), marginLeft: wp('19'), borderRadius: 26, borderColor:'#8dcaff',borderWidth:1  }}>
                        <Text style={{marginTop:hp('2'),marginLeft:wp('7'),fontFamily:"Acme-Regular",fontSize:23,color: '#8dcaff'}}>Sign up to get latest News update</Text>

                         <Text style={{ marginLeft: wp('9'), marginTop: hp('2.5'), fontSize: 20, color: '#9370DB' }}>Username</Text>
                        <View style={{ height: hp('10'), width: wp('90'), flexDirection: 'row', }}>
                            <Image
                                style={{ marginLeft: wp('5'), marginTop: hp('2'), height: wp('2.5'), width: hp('2.5') }}
                                source={require('../assets/mail.png')}></Image>
                            <View style={{ height: wp('10'), width: wp('50') }}>
                                <Input

                                    placeholder='Enter Email'
                                    value={this.state.Email}
                                    onChangeText={email => this.setState({ email })}

                                />
                            </View>



                        </View>
                        {/* for password Field */}
                         <Text style={{ marginLeft: wp('9'), marginTop: hp('0'), fontSize: 20, color: '#9370DB' }}>Password</Text>
                        <View style={{ height: hp('10'), width: wp('90'), flexDirection: 'row', }}>
                            <Image
                                style={{ marginLeft: wp('5'), marginTop: hp('2'), height: wp('3.5'), width: hp('2.5') }}
                                source={require('../assets/passwordnew.png')}></Image>

                            <View style={{ height: wp('10'), width: wp('50') }}>
                                <Input
                                    // secureTextEntry={true}
                                    placeholder='Enter Password'
                                    value={this.state.Password}
                                    onChangeText={password => this.setState({ password })}

                                />
                            </View> 
                            {/* FOrgot password */}

                        </View>
                        <TouchableOpacity
                           onPress={()=>navigate('Forgot')}>
                            <View style={{ marginBottom: hp('3') }}>
                                <Text style={{ marginLeft: wp('12'), color: '#9370DB', }}>Forgot Password !</Text>
                                {/* Button  */}
                            </View>
                        </TouchableOpacity>

                        <View>
                            <TouchableOpacity
                               onPress={this.handleLogin}>
                                <LinearGradient
                                    style={{ height: hp('6'), width: wp('40'), borderRadius: hp('8'), marginLeft: wp('12'), flexDirection: 'row' }}
                                    colors={['#d19fe4', '#8dcaff']}>
                                    <Text style={{ marginLeft: wp('14'), marginTop: hp('1.5'), color: '#ffffff', fontSize: 20 }}>Sign Up</Text>

                                </LinearGradient>
                            </TouchableOpacity>
                        </View>

                        

                        <Text style={{ marginLeft: wp('14'), fontSize: 18, marginTop: hp('2') }}>----------------     OR     ---------------</Text>
                        <View style={styles.container}>
                            <GoogleSigninButton
                                style={{ width: 250, height: 70, borderRadius: 23 }}
                                size={GoogleSigninButton.Size.Wide}
                                color={GoogleSigninButton.Color.Light}
                                onPress={this._signIn}
                            />
                           
                        </View>
                        <TouchableOpacity onPress={()=>navigate('Registration')}>

                        <Text style={{marginBottom:hp('4'),marginLeft:wp('42'),fontSize: 20, color: '#9370DB',textDecorationLine:'underline'}}>New User ?</Text>
                        </TouchableOpacity> 
                    </View>
</ImageBackground>

                </View>




            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8ff',
        marginTop: hp('3'),
        marginLeft: wp('12')


    },
    imageStyle: {
        width: 200,
        height: 300,
        resizeMode: 'contain',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300,
        marginTop: 30,
    },
});


export default Login;