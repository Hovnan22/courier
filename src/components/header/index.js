import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import BasketIcon from '../../assets/icons/basket';

import styles from './styles';
import { BASKET_SCREEN } from '../../navigation/screens';
import { LogIn } from '../../actions/app';

const Header = ({ title }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const LogOut = async () => {
        await AsyncStorage.setItem('login', 'false');
        dispatch(LogIn(false));
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={LogOut}>
                <Text style={styles.text}>LogOut</Text>
            </TouchableOpacity>
            <Text style={styles.text}>{title}</Text>
            <TouchableOpacity onPress={() => navigation.navigate(BASKET_SCREEN)}>
                <BasketIcon />
            </TouchableOpacity>

        </View>
    );
};

export default Header;
