import React, { Component } from 'react';
import { Text, SafeAreaView, View, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Login from '../scrren/Login';
import { NavigationEvents } from 'react-navigation';


class SplashScreen extends Component {

    componentDidMount() {
       
        console.disableYellowBox = true;
        // Start counting when the page is loaded
        this.timeoutHandle = setTimeout(() => {
            // Add your logic for the transition
            this.props.navigation.replace('Login')
        }, 3000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
    }

render(){
    return (

        <SafeAreaView>

            <View    style={styles.liner} >
          

               
                    
                    <Image
                        style={{ height: wp('60'), width: hp('30'), marginTop: hp('24'), marginLeft: wp('25') }}
                        source={require('../assets/news.png')}
                    ></Image>

               



            </View>
        </SafeAreaView>


    );

}
}

const styles = StyleSheet.create({

    liner: {
        flex:1,
        flexDirection:'row',
        height: wp(100),
        width: hp(100)
    }



});

export default SplashScreen;