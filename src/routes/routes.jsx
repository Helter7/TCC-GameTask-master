import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Add from '../screens/add';
import Details from '../screens/details';
import Edit from '../screens/edit';
import Home from '../screens/home';
import Pomodoro from '../screens/pomodoro';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: '',
            headerShadowVisible: false,
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="Add"
          component={Add}
          options={{
            headerTitle: '',
            headerShadowVisible: false,
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{
            headerTitle: '',
            headerShadowVisible: false,
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTitle: '',
            headerShadowVisible: false,
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="Pomodoro"
          component={Pomodoro}
          options={{
            headerTitle: '',
            headerShadowVisible: false,
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
