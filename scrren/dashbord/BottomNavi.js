import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../dashbord/Home';
import Business from '../dashbord/Business';
import Sports from '../dashbord/Sports';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createAppContainer } from 'react-navigation';
// import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Chat"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Business"
        component={Business}
        options={{
          tabBarLabel: 'Business',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Sports"
        component={Sports}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function  BottomNavi() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

