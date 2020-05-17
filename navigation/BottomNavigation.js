import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

//Parei em 10:12
//https://www.youtube.com/watch?v=0CraBZHejKI
//https://www.youtube.com/watch?v=RSzITFbOtpQ

//2020
//https://www.youtube.com/watch?v=vJ7f5gJc9rI

//Bottom navigation nao funciona - remover

import WelcomeScreen from '../src/screens/Welcome'
import ProfileScreen from '../src/screens/Profile'
import ScanScreen from '../src/screens/Scan'
import CartScreen from '../src/screens/Cart'

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'Home',
  },
  Profile: {
    lib: AntDesign,
    name: 'Profile',
  },
  Scan: {
    lib: Ionicons,
    name: 'ios-notifications-outline',
  },
  Cart: {
    lib: AntDesign,
    name: 'Cart',
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'Home') {
            return (
              <PayButton
                onPress={() => this.props.navigation.navigate('Signup')}
                focused={focused}
              />
            );
          }

          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#92929c',
      }}
    >
      <Tab.Screen
        name="Home"
        component={WelcomeScreen}
        options={{
          title: 'Início',
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: 'Carrinho',
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          title: '',
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={ScanScreen}
        options={{
          title: 'Notificações',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}