import React from 'react';
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button, Text } from 'react-native';

class  Regis extends React.Component{

   
 constructor(props){
    super(props);
    this.state={
        Name:'',
        Email:'',
        Password:''

    };
}

UserRegistrationFunction = () =>{


    // const { Name }  = this.state ;
    const { Email }  = this.state ;
    const { Password }  = this.state ;
    
    
    
   fetch('https://reqres.in/api/register', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
    
    //    name:  Name,
    
       email: Email,
    
       password: Password
    
     })
    
   }).then((response) => response.json())
         .then((responseJson) => {

       this.props.navigation.navigate('Forgot')
   Alert.alert(JSON.stringify(responseJson));
    
         }).catch((error) => {
           console.error(error);
         });
    
    
     }



render()
{
  // const { navigate } = this.props.navigation;
    return(
        <View style={styles.MainContainer}>

<Text style= {{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>User Registration Form</Text>

{/* <TextInput

// Adding hint in Text Input using Place holder.
placeholder="Enter User Name"

onChangeText={UserName => this.setState({UserName})}

// Making the Under line Transparent.
underlineColorAndroid='transparent'

style={styles.TextInputStyleClass}
/> */}

<TextInput

// Adding hint in Text Input using Place holder.
placeholder="Enter User Email"

onChangeText={Email => this.setState({Email})}

// Making the Under line Transparent.
underlineColorAndroid='transparent'

style={styles.TextInputStyleClass}
/>

<TextInput

// Adding hint in Text Input using Place holder.
placeholder="Enter User Password"

onChangeText={Password => this.setState({Password})}

// Making the Under line Transparent.
underlineColorAndroid='transparent'

style={styles.TextInputStyleClass}

secureTextEntry={true}
/>

<Button title="Click Here To Register" onPress={this.UserRegistrationFunction} color="#2196F3" />


</View>
    );
}
}

const styles = StyleSheet.create({

MainContainer :{
 
justifyContent: 'center',
flex:1,
margin: 10
},
 
TextInputStyleClass: {
 
textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
// Set border Hex Color Code Here.
 borderColor: '#2196F3',

 // Set border Radius.
 borderRadius: 5 ,
 
// Set border Radius.
 //borderRadius: 10 ,
}
 
});

export default Regis;