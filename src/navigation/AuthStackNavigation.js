import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { LOGIN_SCREEN } from './screens';

const Stack = createStackNavigator();

export default function AuthStackNavigation() {
  return (
    <Stack.Navigator initialRouteName={LOGIN_SCREEN}>
    <Stack.Screen
      name={LOGIN_SCREEN}
      component={LoginScreen}
      options={{ header: () => null }}
    />
    </Stack.Navigator>
  );
}
