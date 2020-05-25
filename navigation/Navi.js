import React from 'react';
import Login  from '../scrren/Login';
import Registration  from '../scrren/Registration';
import Forgot  from '../scrren/Forgot';
import NewsList from '../scrren/NewsList';
import  Splashscreen  from '../scrren/Splashscren';
import  Test  from '../scrren/Test';
import Home  from  '../scrren/dashbord/Home';
import Regis from '../crtest/Regis';
import BottomNavi from '../scrren/dashbord/BottomNavi'
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { NavigationContainer } from '@react-navigation/native';



const RootStack = createStackNavigator(
    {
      Splashscreen,
      Login,
      Registration,
      Forgot,
      Test,
      NewsList,
      BottomNavi,
      Regis,
      Home


      
    },
    {
      initialRouteName: 'BottomNavi',
      defaultNavigationOptions: {
        header: null
    }
    }
  );

  const AppContainer = createAppContainer(RootStack);

  export default class Navi extends React.Component {
    render() {
      return <AppContainer />;
    }
  }