import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';

import AuthStackNavigation from './AuthStackNavigation';
import UserStackNavigation from './UserStackNavigation';
import { LogIn } from '../actions/app';

const Navigation = () => {
    const login = useSelector((state) => state.isLoading);
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            let data = await AsyncStorage.getItem('login');
            setLoaded(true);
            if (data === 'true') {
                dispatch(LogIn(true));
            }
        })()

    }, [])
    return (
        <NavigationContainer >
            {loaded && (login ? <UserStackNavigation /> : <AuthStackNavigation />)}
        </NavigationContainer>
    );
};

export default Navigation;
