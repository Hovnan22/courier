import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from '../components/header';
import DashboardScreen from '../screens/Dashboard';
import BasketScreen from '../screens/Basket';

import { DASHBOARD_SCREEN, BASKET_SCREEN } from './screens';

const Stack = createStackNavigator();

export default function UserStackNavigation() {
    return (
        <Stack.Navigator initialRouteName={DASHBOARD_SCREEN}>
            <Stack.Screen
                name={DASHBOARD_SCREEN}
                component={DashboardScreen}
                options={{ headerTitle: () => <Header title="Dashboard" /> }}
            />
            <Stack.Screen
                name={BASKET_SCREEN}
                component={BasketScreen}
                options={{ headerTitle: () => <Header title="Basket" /> }}
            />
        </Stack.Navigator>
    );
}
