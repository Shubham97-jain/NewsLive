import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';

class Test extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        };
    }

    handleEmailChange = email => {
        this.setState({ email })
      }
    
      handlePasswordChange = password => {
        this.setState({ password })
      }

      onLogin = async () => 
      {
        const { email, password } = this.state
        
          if (email.length > 0 && password.length > 0) 
          {
            this.props.navigation.navigate('Login')
          }
         else
        {
                alert('Insert username and password')
        }

        }

    


    render()
    {
        const { navigate } = this.props.navigation;
        return(

            <View>
               
                <Text style={{marginTop:34}}>Username</Text>
                <TextInput
                 placeholder='Enter Emai'
                 onChangeText={this.handleEmailChange}
                 value={this.state.username}>  
                </TextInput>
                <Text>Password</Text>
                <TextInput
                 placeholder='Enter Password'
                 onChangeText={this.handlePasswordChange}
                 value={this.state.password}>  
                </TextInput>
                <TouchableOpacity 
                 onPress={this.onLogin}
                style={{backgroundColor:'red'}}>
                <View>
                    <Text>Submit</Text>
                </View>
                </TouchableOpacity>


            </View>
        );

    }
}

export default Test;