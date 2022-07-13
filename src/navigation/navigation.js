import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStackNavigation from './AuthStackNavigation';



const Navigation = () => {

    return (
        <NavigationContainer >
            <AuthStackNavigation />
        </NavigationContainer>
    );
};

export default Navigation;
